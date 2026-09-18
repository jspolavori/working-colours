import { describe, expect, it } from 'vitest';
import nextConfig from './next.config';

async function getRedirects() {
  if (!nextConfig.redirects) throw new Error('redirects() is not defined on next.config');
  return nextConfig.redirects();
}

describe('next.config redirects', () => {
  it('maps known old suburb URLs to their current /painters/:slug pages', async () => {
    const redirects = await getRedirects();

    const cases: Array<[string, string]> = [
      ['/painter-manly', 'https://www.wcpainting.com.au/painters/manly'],
      ['/painter-mona-vale', 'https://www.wcpainting.com.au/painters/mona-vale'],
      ['/painter-dee-why', 'https://www.wcpainting.com.au/painters/dee-why'],
      ['/painter-narrabeen', 'https://www.wcpainting.com.au/painters/narrabeen'],
      ['/painter-palm-beach', 'https://www.wcpainting.com.au/painters/palm-beach'],
    ];

    for (const [source, destination] of cases) {
      const match = redirects.find((r) => r.source === source);
      expect(match, `expected a redirect rule for ${source}`).toBeTruthy();
      expect(match?.destination).toBe(destination);
      expect(match?.permanent).toBe(true);
    }
  });

  it('redirects the retired 2025 cost article to the retained evergreen guide', async () => {
    const redirects = await getRedirects();
    const match = redirects.find((r) => r.source === '/blog/cost-paint-house-sydney-2025');
    expect(match).toBeTruthy();
    expect(match?.destination).toBe(
      'https://www.wcpainting.com.au/blog/how-much-does-it-cost-to-paint-a-house-sydney',
    );
    expect(match?.permanent).toBe(true);
  });

  it('sends the apex domain to www', async () => {
    const redirects = await getRedirects();
    const match = redirects.find(
      (r) => r.source === '/:path*' && r.has?.some((h) => h.type === 'host' && h.value === 'wcpainting.com.au'),
    );
    expect(match).toBeTruthy();
    expect(match?.destination).toBe('https://www.wcpainting.com.au/:path*');
  });

  it('has a (currently no-op) rule ready for workingcolours.com.au', async () => {
    const redirects = await getRedirects();
    const match = redirects.find(
      (r) => r.has?.some((h) => h.type === 'host' && h.value === 'workingcolours.com.au'),
    );
    expect(match).toBeTruthy();
    expect(match?.destination).toBe('https://www.wcpainting.com.au/:path*');
  });

  it('never redirects a source straight back to itself (no trivial loops)', async () => {
    const redirects = await getRedirects();
    for (const r of redirects) {
      const hostCondition = r.has?.find((h) => h.type === 'host')?.value;
      if (hostCondition) {
        // Host-conditioned rules only fire for a *different* host than the
        // destination's, so an identical path is fine — what matters is
        // that the destination doesn't point back at the same host.
        expect(r.destination).not.toContain(`://${hostCondition}`);
      } else {
        expect(r.destination.replace('https://www.wcpainting.com.au', '')).not.toBe(r.source);
      }
    }
  });

  it('every source is unique so only one rule can ever match a given request', async () => {
    const redirects = await getRedirects();
    const seen = new Set<string>();
    for (const r of redirects) {
      const key = `${r.source}::${JSON.stringify(r.has ?? null)}`;
      expect(seen.has(key), `duplicate redirect rule for ${key}`).toBe(false);
      seen.add(key);
    }
  });
});
