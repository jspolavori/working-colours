import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Deck Staining vs Deck Painting — Which Is Better for Your Home? | Working Colours Painting Northern Beaches',
  description:
    "Should you stain or paint your deck? The honest answer depends on your timber, your exposure, and what you want long-term. A guide from Northern Beaches deck specialists.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/deck-staining-vs-painting',
  },
  openGraph: {
    type: 'website',
    title: 'Deck Staining vs Deck Painting — Which Is Better for Your Home? | Working Colours Painting Northern Beaches',
    description:
      "Should you stain or paint your deck? The honest answer depends on your timber, your exposure, and what you want long-term. A guide from Northern Beaches deck specialists.",
    url: 'https://www.wcpainting.com.au/blog/deck-staining-vs-painting',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deck Staining vs Deck Painting — Which Is Better for Your Home? | Working Colours Painting Northern Beaches',
    description:
      "Should you stain or paint your deck? The honest answer depends on your timber, your exposure, and what you want long-term. A guide from Northern Beaches deck specialists.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'Can you switch from stain to paint on a deck?',
    answer:
      "Yes, but it requires thorough preparation. All existing stain product needs to be removed or sanded back sufficiently before a paint product goes on. Going the other direction — from paint back to stain — is significantly harder, as the solid film from paint must be completely removed for stain to penetrate the timber.",
  },
  {
    question: 'How long does deck stain last on the Northern Beaches?',
    answer:
      "On an exposed Northern Beaches deck, most penetrating oils and semi-transparent stains need a maintenance coat every one to two years. Heavily exposed, high-traffic decks may need attention annually. Solid-colour stains last longer — closer to three to four years — but require more preparation when it is time to recoat.",
  },
  {
    question: 'Is deck paint slippery when wet?',
    answer:
      "Standard deck paint can be slippery when wet. If slip resistance is a concern — for a pool deck, for example — anti-slip additives can be mixed into the paint, or a textured anti-slip coating can be used instead. This is worth discussing with your painter when choosing the product.",
  },
  {
    question: 'My deck has old paint on it that is failing. What now?',
    answer:
      "If the existing paint is peeling, flaking, or lifting, it needs to come off before anything new goes on. This is the most labour-intensive scenario — removal by sanding or stripping is slow work. Once the surface is back to bare or stable timber, you can then choose the right product for the recoat. We can assess your deck and advise on the best approach.",
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
      "name": "Deck Staining vs Deck Painting — Which Is Better for Your Home?",
      "item": "https://www.wcpainting.com.au/blog/deck-staining-vs-painting"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Deck Staining vs Deck Painting — Which Is Better for Your Home?",
  "description": "Should you stain or paint your deck? The honest answer depends on your timber, your exposure, and what you want long-term. A guide from Northern Beaches deck specialists.",
  "url": "https://www.wcpainting.com.au/blog/deck-staining-vs-painting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/deck-staining-vs-painting"
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

export default function DeckStainingVsPaintingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Deck Staining vs Painting
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Deck Staining vs Deck Painting — Which Is Better for Your Home?
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Stain or paint — the question comes up on almost every deck job we see. The honest answer is that neither is universally better. The right choice depends on your timber, your exposure, and what you want from the result. Here is how to think it through.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The fundamental difference</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Stains penetrate into the timber, working from within the surface to protect against moisture, UV, and biological growth. They allow the natural grain and texture of the timber to remain visible. Most stains are either semi-transparent (showing grain clearly) or semi-solid (tinted but still showing some grain).
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Paint — including solid-colour deck coatings — sits on top of the surface as a film. It provides a more durable, opaque finish that hides the grain entirely. It is harder and more resistant to surface wear. But once it starts to fail, it tends to fail more dramatically — peeling and flaking rather than simply fading.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">When stain is usually the right choice</h2>
          <div className="space-y-3 mb-8">
            {[
              'Your deck timber is in good condition and the natural grain is worth showing',
              'You want easier ongoing maintenance — stain can be recoated without full stripping',
              'The deck has high UV exposure where film-forming products tend to crack and peel',
              'Your timber has high oil content (hardwoods like Merbau) that resists paint adhesion',
              'You prefer a more natural, tactile feel underfoot',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{point}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">When paint is usually the right choice</h2>
          <div className="space-y-3 mb-8">
            {[
              "The deck boards are weathered, greyed, or have patchy colouring you'd prefer to cover",
              'The deck has low oil-content softwood timber (pine) where paint adheres well',
              'You prefer a uniform, contemporary appearance',
              'You need maximum surface hardness for high foot traffic areas',
              'The deck is already painted and removal to bare timber is not practical',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{point}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The Northern Beaches factor</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            On the Northern Beaches, UV intensity and salt air are the dominant forces at work on deck surfaces. Both stain and paint can perform well in these conditions — the product quality and preparation are what matter most, not the category.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That said, penetrating oils and semi-transparent stains tend to handle the thermal movement common in coastal decks — timber expanding and contracting with temperature and humidity changes — more gracefully than rigid film-forming paints. We see fewer cracking failures with stain products on highly exposed Northern Beaches decks.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Whatever product is used, the preparation is non-negotiable. A clean, sanded, mould-free surface is the starting point for any deck treatment that will last. Our <Link href="/services/deck-staining" className="text-blue-600 hover:underline font-medium">deck staining and refinishing service</Link> always starts with a thorough assessment and honest advice on what your specific deck needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-[#1a1a2e] mb-3">Stain — summary</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Penetrates timber rather than coating it</li>
                <li>Natural, tactile appearance</li>
                <li>Easier maintenance — recoat without stripping</li>
                <li>Better for highly exposed coastal decks</li>
                <li>Needs more frequent maintenance coats</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-[#1a1a2e] mb-3">Paint — summary</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Sits on top as a film coating</li>
                <li>Uniform, opaque appearance</li>
                <li>Harder surface, good for traffic</li>
                <li>Hides weathered or patchy timber</li>
                <li>Harder to strip when it fails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get an honest assessment of your deck"
        body="We'll assess the condition of your deck, advise on the right product, and give you a detailed quote. No obligation."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related articles and services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/deck-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Deck Staining</Link>
            <Link href="/services/timber-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Timber Staining</Link>
            <Link href="/blog/signs-deck-needs-restaining-northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Signs Your Deck Needs Restaining</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
