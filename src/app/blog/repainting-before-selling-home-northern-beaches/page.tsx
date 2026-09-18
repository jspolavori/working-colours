import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Should You Repaint Before Selling Your Home on the Northern Beaches? | Working Colours Painting Northern Beaches',
  description:
    "The case for repainting before going to market on the Northern Beaches — which areas matter most, what colours appeal to buyers, and whether the investment makes sense.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/repainting-before-selling-home-northern-beaches',
  },
  openGraph: {
    type: 'website',
    title: 'Should You Repaint Before Selling Your Home on the Northern Beaches? | Working Colours Painting Northern Beaches',
    description:
      "The case for repainting before going to market on the Northern Beaches — which areas matter most, what colours appeal to buyers, and whether the investment makes sense.",
    url: 'https://www.wcpainting.com.au/blog/repainting-before-selling-home-northern-beaches',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Should You Repaint Before Selling Your Home on the Northern Beaches? | Working Colours Painting Northern Beaches',
    description:
      "The case for repainting before going to market on the Northern Beaches — which areas matter most, what colours appeal to buyers, and whether the investment makes sense.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'How far in advance of listing should I arrange a repaint?',
    answer: "Ideally four to six weeks before the photography date. This gives time for the job to be completed, for any touch-ups, and for furniture to be returned before styling or photography. Booking earlier also gives you more flexibility if there are delays.",
  },
  {
    question: 'Is it worth repainting if the house is being sold for land value?',
    answer: "Probably not for a full interior repaint. However, a clean exterior and presentable street presence can still affect first impressions and competitive offers, even on a development site. Talk to your agent about the likely buyer profile before committing to significant work.",
  },
  {
    question: 'Do I need to use a specific colour palette for sale?',
    answer: "You do not need to follow a formula, but the general principle is: avoid anything polarising. Warm neutrals — whites with slight warmth, soft greige tones — appeal to the broadest range of buyers. Avoid bold colours that may appeal to you personally but limit the pool of buyers who can see themselves in the home.",
  },
  {
    question: 'Can you work to a tight timeline for a pre-sale repaint?',
    answer: "We work with pre-sale timelines regularly. Contact us as early as possible to secure a booking — painting is in demand before auction campaigns, particularly in spring.",
  },
];


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.wcpainting.com.au"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.wcpainting.com.au/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Should You Repaint Before Selling Your Home on the Northern Beaches?",
      "item": "https://www.wcpainting.com.au/blog/repainting-before-selling-home-northern-beaches"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Should You Repaint Before Selling Your Home on the Northern Beaches?",
  "description": "The case for repainting before going to market on the Northern Beaches — which areas matter most, what colours appeal to buyers, and whether the investment makes sense.",
  "url": "https://www.wcpainting.com.au/blog/repainting-before-selling-home-northern-beaches",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/repainting-before-selling-home-northern-beaches"
  },
  "author": {
    "@type": "Organization",
    "name": "Working Colours Painting Services"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Working Colours Painting Services",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.wcpainting.com.au/logo.png"
    }
  }
};

export default function PresaleRepaintArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Pre-Sale Painting
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Should You Repaint Before Selling Your Home on the Northern Beaches?</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Fresh paint is one of the highest-return pre-sale investments a homeowner can make. But not all repainting is equal — and spending money in the wrong places will not move the needle.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The case for repainting before sale</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Buyers on the Northern Beaches are sophisticated. They can see past a bit of wear, but a home that looks tired, dated, or poorly maintained starts conversations about what else might need attention — and creates negotiating room at the wrong time.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Fresh paint does the opposite. It signals a well-maintained home. It photographs beautifully. It removes common objections before they are raised. Most experienced real estate agents on the Northern Beaches will tell you: a well-presented home sells faster and for more than a comparable home that looks worn.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Where to focus: exterior first</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            First impressions in real estate are formed at the kerb — before buyers walk through the front door. A tired, peeling, or faded exterior communicates neglect. A fresh, well-presented exterior communicates pride of ownership. On the Northern Beaches, where outdoor living and street appeal are central to the lifestyle proposition, this matters.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            If budget forces a choice between interior and exterior, prioritise the exterior and the entry. The front door, entry hall, and main living area are the three areas buyers respond to most.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Interior: the areas that matter most</h2>
          <div className="space-y-3 mb-8">
            {[
              { label: 'Entry and hallway', detail: "First impression inside the home. Marks, scuffs, and yellowing are immediately visible when buyers walk in. A fresh entry sets the tone." },
              { label: 'Main living areas', detail: "Living room and open-plan kitchen/dining are where buyers spend the most time during inspections. Clean, consistent paint and a well-maintained ceiling make the space feel looked-after." },
              { label: 'Master bedroom', detail: "Bedroom presentation matters. A freshly painted master bedroom with clean trims and ceiling reads as a well-maintained home." },
              { label: 'Bathrooms and laundry', detail: "These rooms show wear quickly. Yellowing ceilings, scuffed doors, and dirty silicone are immediately noticed. A coat of paint and fresh silicone makes a big difference." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[#1a1a2e]">{item.label}:</span>{' '}
                  <span className="text-gray-600">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Colour choices for sale</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The principle for pre-sale colour selection is simple: appeal to the largest possible pool of buyers. That means avoiding anything strongly personal or polarising, and choosing colours that feel fresh, clean, and liveable.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Warm whites and soft neutrals remain the most universally appealing interior palette. Crisp white ceilings and trims make rooms feel fresh and spacious. Avoid feature walls in unusual colours — they can register as something the buyer will want to change.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Selling soon? Get a pre-sale quote"
        body="We work with homeowners and agents across the Northern Beaches on pre-sale preparation. Get in touch early to secure your timeline."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Residential Repaints', href: '/services/residential-repaints' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
