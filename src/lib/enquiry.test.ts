import { describe, expect, it } from 'vitest';
import { EnquiryInput, isPlausiblePhone, isValidEmail, looksLikeBot, validateEnquiry } from './enquiry';

function baseInput(overrides: Partial<EnquiryInput> = {}): EnquiryInput {
  return {
    name: 'Sam Test',
    phone: '0412 345 678',
    email: '',
    suburb: 'Dee Why',
    service: 'interior-painting',
    message: 'Need the living room repainted.',
    ...overrides,
  };
}

describe('validateEnquiry', () => {
  it('accepts a fully valid submission with only a phone number', () => {
    const result = validateEnquiry(baseInput());
    expect(result.ok).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('accepts a fully valid submission with only an email address', () => {
    const result = validateEnquiry(baseInput({ phone: '', email: 'sam@example.com' }));
    expect(result.ok).toBe(true);
  });

  it('rejects a missing name', () => {
    const result = validateEnquiry(baseInput({ name: '   ' }));
    expect(result.ok).toBe(false);
    expect(result.errors.name).toBeTruthy();
  });

  it('rejects when neither phone nor email is provided', () => {
    const result = validateEnquiry(baseInput({ phone: '', email: '' }));
    expect(result.ok).toBe(false);
    expect(result.errors.contact).toBeTruthy();
  });

  it('rejects an implausible phone number', () => {
    const result = validateEnquiry(baseInput({ phone: '123' }));
    expect(result.ok).toBe(false);
    expect(result.errors.contact).toBeTruthy();
  });

  it('rejects a malformed email address', () => {
    const result = validateEnquiry(baseInput({ phone: '', email: 'not-an-email' }));
    expect(result.ok).toBe(false);
    expect(result.errors.contact).toBeTruthy();
  });

  it('rejects a missing suburb', () => {
    const result = validateEnquiry(baseInput({ suburb: '' }));
    expect(result.ok).toBe(false);
    expect(result.errors.suburb).toBeTruthy();
  });

  it('rejects an unknown service value', () => {
    const result = validateEnquiry(baseInput({ service: 'totally-not-a-service' }));
    expect(result.ok).toBe(false);
    expect(result.errors.service).toBeTruthy();
  });

  it('rejects a missing project description', () => {
    const result = validateEnquiry(baseInput({ message: '  ' }));
    expect(result.ok).toBe(false);
    expect(result.errors.message).toBeTruthy();
  });

  it('rejects an oversized name to guard against abuse', () => {
    const result = validateEnquiry(baseInput({ name: 'a'.repeat(500) }));
    expect(result.ok).toBe(false);
    expect(result.errors.name).toBeTruthy();
  });

  it('rejects an oversized message', () => {
    const result = validateEnquiry(baseInput({ message: 'a'.repeat(5000) }));
    expect(result.ok).toBe(false);
    expect(result.errors.message).toBeTruthy();
  });
});

describe('isValidEmail / isPlausiblePhone', () => {
  it('validates a normal email', () => {
    expect(isValidEmail('person@example.com.au')).toBe(true);
  });

  it('rejects an email with no domain', () => {
    expect(isValidEmail('person@')).toBe(false);
  });

  it('accepts an Australian mobile number with spaces', () => {
    expect(isPlausiblePhone('0434 030 222')).toBe(true);
  });

  it('accepts an international-format number', () => {
    expect(isPlausiblePhone('+61 434 030 222')).toBe(true);
  });

  it('rejects a number that is too short', () => {
    expect(isPlausiblePhone('12345')).toBe(false);
  });
});

describe('looksLikeBot', () => {
  it('flags a filled honeypot field', () => {
    expect(looksLikeBot(baseInput({ honeypot: 'http://spam.example' }))).toBe(true);
  });

  it('flags a submission that happens faster than the minimum fill time', () => {
    expect(looksLikeBot(baseInput({ startedAt: Date.now() }))).toBe(true);
  });

  it('does not flag a normal, human-paced submission', () => {
    expect(looksLikeBot(baseInput({ startedAt: Date.now() - 10_000 }))).toBe(false);
  });

  it('does not flag a submission with no anti-spam fields set at all', () => {
    expect(looksLikeBot(baseInput())).toBe(false);
  });
});
