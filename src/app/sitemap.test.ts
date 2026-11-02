import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap, { areas, blogPosts, services } from './sitemap';

const appDir = join(__dirname);
const routeFolders = (section: string) =>
  readdirSync(join(appDir, section), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

describe('sitemap', () => {
  it('lists every suburb page that exists, and nothing else', () => {
    expect([...areas].sort()).toEqual(routeFolders('painters'));
  });

  it('lists every service page that exists, and nothing else', () => {
    expect([...services].sort()).toEqual(routeFolders('services'));
  });

  it('lists every blog article that exists, and nothing else', () => {
    expect([...blogPosts].sort()).toEqual(routeFolders('blog'));
  });

  it('uses only canonical www HTTPS URLs with no duplicates', () => {
    const urls = sitemap().map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
    for (const url of urls) {
      expect(url.startsWith('https://www.wcpainting.com.au')).toBe(true);
      expect(url).not.toMatch(/[?#]/);
    }
  });

  it('never includes the noindexed ad funnel or retired redirects', () => {
    const urls = sitemap().map((e) => e.url);
    expect(urls.some((u) => u.includes('/paint-like-a-pro'))).toBe(false);
    expect(urls.some((u) => u.includes('cost-paint-house-sydney-2025'))).toBe(false);
  });
});
