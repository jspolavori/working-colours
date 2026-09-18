import { NextRequest, NextResponse } from 'next/server';
import { EnquiryInput, enquiryFingerprint, looksLikeBot, validateEnquiry } from '@/lib/enquiry';
import { sendEnquiryEmail } from '@/lib/email';
import { BUSINESS } from '@/lib/business';

export const runtime = 'nodejs';

// --- Very small in-memory anti-abuse state -------------------------------
// This only works within a single, long-lived server instance. On
// serverless hosting (Vercel etc.) each instance has its own memory, so
// this is a best-effort layer, not a guarantee — see
// REMAINING-SEO-FIXES.md for the recommended production-grade option
// (e.g. Upstash Redis / Vercel KV backed rate limiting).
const recentByIp = new Map<string, number[]>();
const recentFingerprints = new Map<string, number>();

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // per IP per window
const DEDUPE_WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recentByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  recentByIp.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

function isDuplicate(fingerprint: string): boolean {
  const now = Date.now();
  const last = recentFingerprints.get(fingerprint);
  recentFingerprints.set(fingerprint, now);
  if (recentFingerprints.size > 500) {
    for (const [key, ts] of recentFingerprints) {
      if (now - ts > DEDUPE_WINDOW_MS) recentFingerprints.delete(key);
    }
  }
  return typeof last === 'number' && now - last < DEDUPE_WINDOW_MS;
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

function formDataToInput(data: FormData): EnquiryInput {
  const get = (key: string) => {
    const v = data.get(key);
    return typeof v === 'string' ? v : '';
  };
  const startedAtRaw = get('startedAt');
  return {
    name: get('name'),
    phone: get('phone'),
    email: get('email'),
    suburb: get('suburb'),
    service: get('service'),
    message: get('message'),
    honeypot: get('companyWebsite'),
    startedAt: startedAtRaw ? Number(startedAtRaw) : undefined,
  };
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') ?? '';
  // A native <form method="post"> submission (no JS) sends
  // application/x-www-form-urlencoded, not JSON. This is the fallback
  // path used if a visitor's browser can't run the client-side handler —
  // it still reaches this same validated, spam-checked, server-side
  // delivery path instead of leaking details into the page URL as a GET
  // would. On completion it redirects back to /contact with a status
  // flag (no personal details) rather than returning raw JSON.
  const isFormSubmit = contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data');

  let body: EnquiryInput;
  try {
    body = isFormSubmit ? formDataToInput(await req.formData()) : await req.json();
  } catch {
    return isFormSubmit
      ? NextResponse.redirect(new URL('/contact?enquiry=error', req.url), 303)
      : NextResponse.json({ ok: false, error: 'invalid_request' }, { status: 400 });
  }

  const respond = (
    jsonBody: Record<string, unknown>,
    status: number,
    redirectStatus: 'sent' | 'error',
  ) => {
    if (isFormSubmit) {
      return NextResponse.redirect(new URL(`/contact?enquiry=${redirectStatus}`, req.url), 303);
    }
    return NextResponse.json(jsonBody, { status });
  };

  // Bot heuristics (honeypot + minimum fill time). A hit here is treated
  // as spam and quietly dropped without sending an email. Responding as
  // if it succeeded for *this specific, non-human-identified* traffic is
  // standard anti-spam practice and is not the same as the "never
  // simulate success" rule below, which is about real users when
  // delivery genuinely isn't configured.
  if (looksLikeBot(body)) {
    return respond({ ok: true }, 200, 'sent');
  }

  const { ok, errors } = validateEnquiry(body);
  if (!ok) {
    return respond({ ok: false, error: 'validation', fields: errors }, 400, 'error');
  }

  const ip = clientIp(req);
  if (isRateLimited(ip)) {
    return respond(
      { ok: false, error: 'rate_limited', message: 'Too many enquiries from this connection. Please call or WhatsApp us instead.' },
      429,
      'error',
    );
  }

  if (isDuplicate(enquiryFingerprint(body))) {
    // Treat as an accidental double-submit of the same enquiry — respond
    // as success (the first submission already went through / is in
    // flight) rather than erroring the visitor.
    return respond({ ok: true, deduped: true }, 200, 'sent');
  }

  const result = await sendEnquiryEmail(body);
  if (!result.ok) {
    if (result.reason === 'not_configured') {
      return respond(
        {
          ok: false,
          error: 'not_configured',
          message: `We can't send this automatically right now. Please call ${BUSINESS.phoneDisplay} or message us on WhatsApp instead.`,
        },
        503,
        'error',
      );
    }
    return respond(
      {
        ok: false,
        error: 'delivery_failed',
        message: `Something went wrong sending your enquiry. Please call ${BUSINESS.phoneDisplay} or message us on WhatsApp instead.`,
      },
      502,
      'error',
    );
  }

  // IMPORTANT: this only confirms the message was accepted by the email
  // provider for delivery — not that it has been read by the owner.
  return respond({ ok: true }, 200, 'sent');
}
