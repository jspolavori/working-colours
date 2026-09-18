// Shared types + pure validation logic for the direct enquiry form.
// Kept dependency-free and framework-agnostic so it can be unit tested
// without spinning up the Next.js route handler.

export const SERVICE_OPTIONS = [
  { value: 'interior-painting', label: 'Interior House Painting' },
  { value: 'exterior-painting', label: 'Exterior House Painting' },
  { value: 'timber-staining', label: 'Timber Staining and Restoration' },
  { value: 'deck-staining', label: 'Deck Staining and Refinishing' },
  { value: 'doors-trims-windows', label: 'Doors, Trims, Windows and Louvers' },
  { value: 'residential-repaints', label: 'Residential Repaints and Touch-Ups' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

const SERVICE_VALUES = SERVICE_OPTIONS.map((s) => s.value) as string[];

export const FIELD_LIMITS = {
  name: 100,
  phone: 30,
  email: 254,
  suburb: 60,
  message: 2000,
} as const;

export interface EnquiryInput {
  name: string;
  phone?: string;
  email?: string;
  suburb: string;
  service: string;
  message: string;
  // Anti-spam fields — not shown to the user as real form fields.
  honeypot?: string;
  startedAt?: number;
}

export interface EnquiryFieldErrors {
  name?: string;
  contact?: string; // covers "need phone or email"
  suburb?: string;
  service?: string;
  message?: string;
}

export interface EnquiryValidationResult {
  ok: boolean;
  errors: EnquiryFieldErrors;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Loose on purpose: accepts spaces/parentheses/dashes, just checks there
// are enough digits to plausibly be a phone number.
const PHONE_DIGITS_RE = /\d/g;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

export function isPlausiblePhone(value: string): boolean {
  const digits = value.match(PHONE_DIGITS_RE);
  return !!digits && digits.length >= 8 && digits.length <= 15;
}

/**
 * Validates enquiry form input. Pure function, no side effects — safe to
 * call from both the client (inline validation) and the server (source of
 * truth; the client check must never be trusted alone).
 */
export function validateEnquiry(input: EnquiryInput): EnquiryValidationResult {
  const errors: EnquiryFieldErrors = {};

  const name = input.name?.trim() ?? '';
  if (!name) {
    errors.name = 'Please enter your name.';
  } else if (name.length > FIELD_LIMITS.name) {
    errors.name = `Name must be ${FIELD_LIMITS.name} characters or fewer.`;
  }

  const phone = input.phone?.trim() ?? '';
  const email = input.email?.trim() ?? '';
  if (!phone && !email) {
    errors.contact = 'Please provide a phone number or an email address.';
  } else {
    if (phone && (phone.length > FIELD_LIMITS.phone || !isPlausiblePhone(phone))) {
      errors.contact = 'That phone number doesn’t look right.';
    }
    if (email && (email.length > FIELD_LIMITS.email || !isValidEmail(email))) {
      errors.contact = 'That email address doesn’t look right.';
    }
  }

  const suburb = input.suburb?.trim() ?? '';
  if (!suburb) {
    errors.suburb = 'Please enter your suburb.';
  } else if (suburb.length > FIELD_LIMITS.suburb) {
    errors.suburb = `Suburb must be ${FIELD_LIMITS.suburb} characters or fewer.`;
  }

  const service = input.service?.trim() ?? '';
  if (!service || !SERVICE_VALUES.includes(service)) {
    errors.service = 'Please choose a service.';
  }

  const message = input.message?.trim() ?? '';
  if (!message) {
    errors.message = 'Please tell us a little about the project.';
  } else if (message.length > FIELD_LIMITS.message) {
    errors.message = `Details must be ${FIELD_LIMITS.message} characters or fewer.`;
  }

  return { ok: Object.keys(errors).length === 0, errors };
}

/** Heuristic-only bot signals — a hit here doesn't get shown to the user,
 * it just gets treated as spam (see route.ts). */
export function looksLikeBot(input: EnquiryInput, minFillMs = 3000): boolean {
  if (input.honeypot && input.honeypot.trim().length > 0) return true;
  if (typeof input.startedAt === 'number') {
    const elapsed = Date.now() - input.startedAt;
    if (elapsed >= 0 && elapsed < minFillMs) return true;
  }
  return false;
}

export function serviceLabel(value: string): string {
  return SERVICE_OPTIONS.find((s) => s.value === value)?.label ?? value;
}

/** Small stable fingerprint used for duplicate-submission detection —
 * intentionally excludes nothing sensitive from logs (it's never logged,
 * only compared in memory). */
export function enquiryFingerprint(input: EnquiryInput): string {
  return [input.name, input.phone, input.email, input.suburb, input.service, input.message]
    .map((v) => (v ?? '').trim().toLowerCase())
    .join('|');
}
