import { MetadataRoute } from 'next';

const BASE = 'https://wcpainting.com.au';

const services = [
  'interior-painting',
  'exterior-painting',
  'timber-staining',
  'deck-staining',
  'doors-trims-windows',
  'residential-repaints',
];

const areas = [
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
];

const blogPosts = [
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((slug) => ({
    url: `${BASE}/painters/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...core, ...servicePages, ...areaPages, ...blogPages];
}
