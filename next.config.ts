import type { NextConfig } from "next";

// Old workingcolours.com.au suburb-page slugs -> current /painters/:slug pages.
// Built from the suburb list this project actually serves today (see
// src/app/sitemap.ts) plus the specific old URLs confirmed still live on
// workingcolours.com.au. These are host-agnostic (no `has` condition) so a
// single redirect takes any request straight to the final canonical URL,
// whether it arrives via the apex domain, workingcolours.com.au (if that
// domain is ever pointed at this deployment), or a stray old bookmark.
const oldSuburbSlugs = [
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

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old-domain suburb pages (/painter-manly, /painter-dee-why, etc.)
      // -> current suburb pages. Query strings (e.g. old campaign/source
      // params) are preserved automatically by Next's redirect handling.
      ...oldSuburbSlugs.map((slug) => ({
        source: `/painter-${slug}`,
        destination: `https://www.wcpainting.com.au/painters/${slug}`,
        permanent: true,
      })),

      // Retired blog post consolidated into the evergreen cost guide.
      {
        source: '/blog/cost-paint-house-sydney-2025',
        destination: 'https://www.wcpainting.com.au/blog/how-much-does-it-cost-to-paint-a-house-sydney',
        permanent: true,
      },

      // Consolidate the apex domain onto www to match the canonical URLs
      // used in metadata, structured data and the sitemap. Kept after the
      // specific old-path rules above so those resolve in a single hop
      // instead of apex -> www -> new-path.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'wcpainting.com.au' }],
        destination: 'https://www.wcpainting.com.au/:path*',
        permanent: true,
      },

      // If workingcolours.com.au is ever pointed at this same deployment,
      // send everything else (anything not matched above) to the new
      // domain at the same path. No-op today while that domain is hosted
      // elsewhere — see REMAINING-SEO-FIXES.md for the DNS/hosting change
      // this actually requires.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'workingcolours.com.au' }],
        destination: 'https://www.wcpainting.com.au/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
