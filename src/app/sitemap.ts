import { MetadataRoute } from 'next';

const BASE = 'https://www.wcpainting.com.au';

// Lists are exported so src/app/sitemap.test.ts can check them against the
// actual route folders — a new page that isn't added here fails the tests.
// lastModified is deliberately omitted: stamping every URL with the build
// time tells Google every page changed on every deploy, so it learns to
// ignore the field. Add real per-page dates here if they're ever tracked.
export const services = [
  'interior-painting',
  'exterior-painting',
  'timber-staining',
  'deck-staining',
  'doors-trims-windows',
  'residential-repaints',
];

export const areas = [
  'northern-beaches',
  'dee-why',
  'narrabeen',
  'manly',
  'mona-vale',
  'newport',
  'collaroy',
  'avalon',
  'palm-beach',
  'freshwater',
  'seaforth',
  'balgowlah',
  'frenchs-forest',
  'belrose',
  'brookvale',
  'cromer',
  'warriewood',
  'bayview',
  'elanora-heights',
  'collaroy-plateau',
  'north-narrabeen',
  'allambie-heights',
  'bilgola',
  'church-point',
  'curl-curl',
  'davidson',
  'forestville',
  'killarney-heights',
  'manly-vale',
  'narraweena',
  'terrey-hills',
];

export const blogPosts = [
  'how-much-does-it-cost-to-paint-a-house-sydney',
  'best-exterior-paint-coastal-homes-sydney',
  'how-often-repaint-house-sydney',
  'signs-deck-needs-restaining-northern-beaches',
  'timber-restoration-vs-replacement',
  'how-to-choose-interior-paint-colours',
  'how-to-prepare-home-interior-repaint',
  'repainting-before-selling-home-northern-beaches',
  'how-to-choose-a-painter-sydney',
  'interior-painting-mistakes-to-avoid',
  // New blog posts
  'how-choose-painter-northern-beaches',
  'exterior-paint-life-coastal-environment',
  'deck-staining-vs-painting',
  'interior-vs-exterior-paint-difference',
  'how-prepare-walls-before-painting',
  'best-time-paint-house-sydney',
  'how-many-coats-paint-house',
  'signs-house-needs-repainting-checklist',
  'best-paint-coastal-homes-ocean',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((slug) => ({
    url: `${BASE}/painters/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...core, ...servicePages, ...areaPages, ...blogPages];
}
