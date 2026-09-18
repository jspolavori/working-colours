import { describe, expect, it, vi } from 'vitest';
import { sendEnquiryEmail } from './email';
import { EnquiryInput } from './enquiry';

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

describe('sendEnquiryEmail', () => {
  it('fails honestly with not_configured when credentials are missing, without calling fetch', async () => {
    const fetchImpl = vi.fn();
    const result = await sendEnquiryEmail(baseInput(), {}, fetchImpl);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reason).toBe('not_configured');
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it('fails honestly with not_configured when only some credentials are set', async () => {
    const fetchImpl = vi.fn();
    const result = await sendEnquiryEmail(
      baseInput(),
      { apiKey: 'key', to: undefined, from: 'from@example.com' },
      fetchImpl,
    );
    expect(result.ok).toBe(false);
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it('succeeds when fully configured and the provider accepts the request', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true });
    const result = await sendEnquiryEmail(
      baseInput(),
      { apiKey: 'key', to: 'owner@example.com', from: 'site@example.com' },
      fetchImpl,
    );
    expect(result.ok).toBe(true);
    expect(fetchImpl).toHaveBeenCalledTimes(1);
    const [url, init] = fetchImpl.mock.calls[0];
    expect(url).toBe('https://api.resend.com/emails');
    expect(init.headers.Authorization).toBe('Bearer key');
  });

  it('reports delivery_failed when the provider rejects the request', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: false });
    const result = await sendEnquiryEmail(
      baseInput(),
      { apiKey: 'key', to: 'owner@example.com', from: 'site@example.com' },
      fetchImpl,
    );
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reason).toBe('delivery_failed');
  });

  it('reports delivery_failed when fetch throws (network error)', async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new Error('network down'));
    const result = await sendEnquiryEmail(
      baseInput(),
      { apiKey: 'key', to: 'owner@example.com', from: 'site@example.com' },
      fetchImpl,
    );
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reason).toBe('delivery_failed');
  });

  it('only sets reply_to when the customer supplied a valid email', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true });
    await sendEnquiryEmail(
      baseInput({ email: 'not-a-valid-email' }),
      { apiKey: 'key', to: 'owner@example.com', from: 'site@example.com' },
      fetchImpl,
    );
    const [, init] = fetchImpl.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.reply_to).toBeUndefined();
  });

  it('never includes customer details in the request URL', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true });
    await sendEnquiryEmail(
      baseInput({ email: 'sam@example.com' }),
      { apiKey: 'key', to: 'owner@example.com', from: 'site@example.com' },
      fetchImpl,
    );
    const [url] = fetchImpl.mock.calls[0];
    expect(url).not.toContain('sam@example.com');
    expect(url).not.toContain('Sam Test');
  });
});
