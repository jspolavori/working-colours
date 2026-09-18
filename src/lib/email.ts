import { EnquiryInput, isValidEmail, serviceLabel } from '@/lib/enquiry';

export interface EmailConfig {
  apiKey?: string;
  to?: string;
  from?: string;
}

export type SendResult =
  | { ok: true }
  | { ok: false; status: 503; reason: 'not_configured' }
  | { ok: false; status: 502; reason: 'delivery_failed' };

function readConfig(config?: EmailConfig): Required<EmailConfig> | null {
  const apiKey = config?.apiKey ?? process.env.RESEND_API_KEY;
  const to = config?.to ?? process.env.ENQUIRY_TO_EMAIL;
  const from = config?.from ?? process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) return null;
  return { apiKey, to, from };
}

export function buildEnquiryEmailBody(input: EnquiryInput): string {
  const lines = [
    `New enquiry from the website contact form.`,
    ``,
    `Name: ${input.name.trim()}`,
    input.phone?.trim() ? `Phone: ${input.phone.trim()}` : null,
    input.email?.trim() ? `Email: ${input.email.trim()}` : null,
    `Suburb: ${input.suburb.trim()}`,
    `Service: ${serviceLabel(input.service.trim())}`,
    ``,
    `Details:`,
    input.message.trim(),
  ].filter((l): l is string => l !== null);
  return lines.join('\n');
}

/**
 * Sends the enquiry via Resend's HTTP API (no SDK dependency). Injectable
 * `config` and `fetchImpl` make this unit-testable without real network
 * calls or environment variables.
 */
export async function sendEnquiryEmail(
  input: EnquiryInput,
  config?: EmailConfig,
  fetchImpl: typeof fetch = fetch,
): Promise<SendResult> {
  const resolved = readConfig(config);
  if (!resolved) {
    return { ok: false, status: 503, reason: 'not_configured' };
  }

  const replyTo = input.email && isValidEmail(input.email) ? input.email.trim() : undefined;

  try {
    const res = await fetchImpl('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resolved.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: resolved.from,
        to: resolved.to,
        reply_to: replyTo,
        subject: `Website enquiry: ${input.name.trim()} (${input.suburb.trim()})`,
        text: buildEnquiryEmailBody(input),
      }),
    });

    if (!res.ok) {
      return { ok: false, status: 502, reason: 'delivery_failed' };
    }
    return { ok: true };
  } catch {
    return { ok: false, status: 502, reason: 'delivery_failed' };
  }
}
