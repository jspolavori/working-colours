import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Painting Tips & Advice | Working Colours Painting Northern Beaches',
  description:
    "Practical guides for Northern Beaches homeowners on house painting, timber care, deck staining, and colour selection. From Working Colours — your local painter.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog',
  },
  openGraph: {
    type: 'website',
    title: 'Painting Tips & Advice | Working Colours Painting Northern Beaches',
    description:
      "Practical guides for Northern Beaches homeowners on house painting, timber care, deck staining, and colour selection. From Working Colours — your local painter.",
    url: 'https://www.wcpainting.com.au/blog',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painting Tips & Advice | Working Colours Painting Northern Beaches',
    description:
      "Practical guides for Northern Beaches homeowners on house painting, timber care, deck staining, and colour selection. From Working Colours — your local painter.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const articles = [
  {
    title: 'How to Choose a Painter on the Northern Beaches — 5 Things to Check',
    excerpt: 'Five things to check before hiring a painter on the Northern Beaches — from licensing to preparation approach. Advice from 18 years in the trade.',
    href: '/blog/how-choose-painter-northern-beaches',
    category: 'Hiring a Painter',
  },
  {
    title: 'How Long Does Exterior Paint Last in a Coastal Environment?',
    excerpt: 'Exterior paint near the ocean degrades faster than inland. Realistic lifespan expectations for Northern Beaches homes and what extends paint life.',
    href: '/blog/exterior-paint-life-coastal-environment',
    category: 'Exterior Painting',
  },
  {
    title: 'Deck Staining vs Deck Painting — Which Is Better for Your Home?',
    excerpt: 'Stain or paint your deck? The honest answer depends on your timber, your exposure, and what you want long-term. From Northern Beaches deck specialists.',
    href: '/blog/deck-staining-vs-painting',
    category: 'Decks & Timber',
  },
  {
    title: 'Interior vs Exterior Paint — What Is the Difference and Why It Matters',
    excerpt: 'Interior and exterior paints are formulated for fundamentally different jobs. Using the wrong product in the wrong place causes real problems.',
    href: '/blog/interior-vs-exterior-paint-difference',
    category: 'Painting Advice',
  },
  {
    title: 'How to Prepare Walls Before Painting — The Professional Way',
    excerpt: 'Good painting is 70% preparation. The step-by-step professional approach to preparing walls — washing, filling, sanding, priming, and masking.',
    href: '/blog/how-prepare-walls-before-painting',
    category: 'Interior Painting',
  },
  {
    title: 'Best Time of Year to Paint Your Home in Sydney',
    excerpt: 'Spring and autumn are ideal, but there are good reasons to paint in winter too. When to schedule your painting job and what conditions to avoid.',
    href: '/blog/best-time-paint-house-sydney',
    category: 'Painting Advice',
  },
  {
    title: 'How Many Coats of Paint Does a House Need?',
    excerpt: 'The honest answer: primer plus two topcoats for most jobs. When three coats are needed — and how one-coat quotes cost more in the long run.',
    href: '/blog/how-many-coats-paint-house',
    category: 'Painting Advice',
  },
  {
    title: 'Signs Your Home Needs Repainting — Exterior Checklist',
    excerpt: 'A practical checklist of warning signs that your exterior paint is failing. From chalking and fading through to peeling and mould growth.',
    href: '/blog/signs-house-needs-repainting-checklist',
    category: 'Maintenance',
  },
  {
    title: 'What Paint Is Best for Coastal Homes Near the Ocean?',
    excerpt: 'The key properties to look for in paint for a Northern Beaches home — UV resistance, flexibility, mould inhibitors, and substrate-specific guidance.',
    href: '/blog/best-paint-coastal-homes-ocean',
    category: 'Exterior Painting',
  },
  {
    title: 'How Much Does It Cost to Paint a House in Sydney?',
    excerpt: 'A practical guide to understanding house painting costs in Sydney — what affects the price, what to expect for an average home, and how to get a fair quote.',
    href: '/blog/how-much-does-it-cost-to-paint-a-house-sydney',
    category: 'Cost & Budgeting',
  },
  {
    title: 'Best Exterior Paint for Coastal Homes in Sydney',
    excerpt: 'Coastal conditions are demanding on exterior paint. Here is what to look for when choosing paint for a home exposed to salt air, UV, and humidity.',
    href: '/blog/best-exterior-paint-coastal-homes-sydney',
    category: 'Exterior Painting',
  },
  {
    title: 'How Often Should You Repaint Your House in Sydney?',
    excerpt: 'Interior and exterior paint have different lifespans. This guide covers the factors that affect how long paint lasts and the signs it is time to repaint.',
    href: '/blog/how-often-repaint-house-sydney',
    category: 'Maintenance',
  },
  {
    title: 'Signs Your Deck Needs Restaining on the Northern Beaches',
    excerpt: 'How to tell if your deck is due for restaining — from the simple water test to visible signs of surface failure and UV damage.',
    href: '/blog/signs-deck-needs-restaining-northern-beaches',
    category: 'Decks & Timber',
  },
  {
    title: 'Timber Restoration vs Replacement: What Is Worth Doing?',
    excerpt: 'When can weathered timber be restored, and when is replacement the more practical option? A straightforward guide to making the right call.',
    href: '/blog/timber-restoration-vs-replacement',
    category: 'Decks & Timber',
  },
  {
    title: 'How to Choose Interior Paint Colours for Your Home',
    excerpt: 'Practical advice on selecting interior paint colours — test patches, lighting, warm vs cool tones, and what to do with open-plan spaces.',
    href: '/blog/how-to-choose-interior-paint-colours',
    category: 'Interior Painting',
  },
  {
    title: 'How to Prepare Your Home for an Interior Repaint',
    excerpt: 'What homeowners need to do before the painters arrive — and what the painter handles. A clear guide to getting ready for an interior repaint.',
    href: '/blog/how-to-prepare-home-interior-repaint',
    category: 'Interior Painting',
  },
  {
    title: 'Should You Repaint Before Selling Your Home on the Northern Beaches?',
    excerpt: 'The case for repainting before going to market — which areas matter most, what colours work for sale, and the return on investment.',
    href: '/blog/repainting-before-selling-home-northern-beaches',
    category: 'Pre-Sale',
  },
  {
    title: 'How to Choose a Painter in Sydney: What to Look For',
    excerpt: 'Red flags to avoid, questions to ask, and what separates a quality painter from a cheap quote that causes problems down the track.',
    href: '/blog/how-to-choose-a-painter-sydney',
    category: 'Hiring a Painter',
  },
  {
    title: 'Interior Painting Mistakes to Avoid',
    excerpt: 'The most common interior painting mistakes — from skipping primer to rushing between coats — and what to do instead for a finish that lasts.',
    href: '/blog/interior-painting-mistakes-to-avoid',
    category: 'Interior Painting',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painting Tips and Advice</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Practical guides for Northern Beaches homeowners — on painting, timber care, deck maintenance, colour selection, and how to get a good result.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200"
              >
                <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">{article.category}</span>
                <h2 className="text-lg font-bold text-[#1a1a2e] mb-3 group-hover:text-blue-600 transition-colors leading-snug">{article.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Read article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Ready to get your home painted?</h2>
          <p className="text-gray-600 mb-6">Get in touch for a free quote — we service all suburbs across the Northern Beaches.</p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
