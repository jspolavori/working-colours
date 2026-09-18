import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How Many Coats of Paint Does a House Need? | Working Colours Painting Northern Beaches',
  description:
    "One coat or two? The honest answer depends on the substrate, the colour, and the product. A practical guide from Northern Beaches painters with 18 years experience.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/how-many-coats-paint-house',
  },
  openGraph: {
    type: 'website',
    title: 'How Many Coats of Paint Does a House Need? | Working Colours Painting Northern Beaches',
    description:
      "One coat or two? The honest answer depends on the substrate, the colour, and the product. A practical guide from Northern Beaches painters with 18 years experience.",
    url: 'https://www.wcpainting.com.au/blog/how-many-coats-paint-house',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Coats of Paint Does a House Need? | Working Colours Painting Northern Beaches',
    description:
      "One coat or two? The honest answer depends on the substrate, the colour, and the product. A practical guide from Northern Beaches painters with 18 years experience.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'Is one coat of paint ever enough?',
    answer:
      "For a touch-up of a small area in the same colour, one coat can be sufficient. For any significant painting job — a full room, a colour change, or exterior work — one coat is generally not enough to achieve a consistent, durable result. Two topcoats over correctly prepared and primed surfaces is the professional standard for most residential painting work.",
  },
  {
    question: 'Why does paint look patchy after one coat?',
    answer:
      "Patchiness after one coat is normal — the previous colour or the primer shows through in areas of thinner coverage. This resolves with a second coat applied at the correct film thickness. If patchiness persists after two coats, the issue is usually inadequate preparation, incorrect product choice, or a significant colour contrast that requires additional coverage.",
  },
  {
    question: 'Does premium paint mean fewer coats needed?',
    answer:
      "Premium paints typically have better opacity and coverage per coat, which can mean a more consistent result in fewer coats. However, a premium paint applied poorly or over an incorrectly prepared surface will still produce a patchy result. Product quality and preparation work together.",
  },
  {
    question: 'Does going from white to white still need two coats?',
    answer:
      "If the existing white is in good condition and the new paint is the same colour, you may be able to achieve an acceptable result with one coat over primer in specific areas. However, to ensure a completely consistent finish across an entire room or exterior, two coats is the professional standard regardless of colour.",
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
      "name": "How Many Coats of Paint Does a House Need?",
      "item": "https://www.wcpainting.com.au/blog/how-many-coats-paint-house"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Many Coats of Paint Does a House Need?",
  "description": "One coat or two? The honest answer depends on the substrate, the colour, and the product. A practical guide from Northern Beaches painters with 18 years experience.",
  "url": "https://www.wcpainting.com.au/blog/how-many-coats-paint-house",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/how-many-coats-paint-house"
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

export default function HowManyCoatsPaintHousePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            How Many Coats Does a House Need?
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Many Coats of Paint Does a House Need?
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            The number of coats needed for a paint job affects both the cost and the quality of the result. Here is a clear explanation of what drives the decision — and why some painters quote for fewer coats than the job actually requires.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The standard answer: primer plus two topcoats</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For most residential painting work — both interior and exterior — the professional standard is a primer coat (where required) followed by two topcoats. This system provides:
          </p>
          <div className="space-y-3 mb-8">
            {[
              'Complete, consistent colour coverage with no patchiness',
              'Full film build for durability and washability',
              'Adhesion that will hold up to the demands of the surface',
              'Protection that meets the lifespan claims of the product',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            Paint manufacturers design their systems with this build in mind. Applying a single topcoat over primer does not deliver the full film thickness the product was formulated for — which means reduced durability and often an inconsistent appearance.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">When three or more coats are needed</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                scenario: 'Dark to light colour change',
                detail: 'Going from a deep colour to a light one is one of the most demanding applications. The dark pigment bleeds through light paint, requiring additional coats for complete coverage. Three topcoats — or two topcoats over a tinted primer — is often necessary.',
              },
              {
                scenario: 'Light to very dark change',
                detail: 'Conversely, painting over a light colour with a very dark shade can show streaks and roller lines with only two coats. A tinted primer helps, but additional topcoats may be needed for a truly even result.',
              },
              {
                scenario: 'Bare or very porous surfaces',
                detail: 'New plasterboard, fresh render, or heavily sanded areas are highly porous and absorb paint unevenly. These surfaces need a sealer or primer coat before topcoats, and the first topcoat may absorb more than usual, requiring a third coat for consistency.',
              },
              {
                scenario: 'Coastal exterior surfaces',
                detail: 'For exterior surfaces on the Northern Beaches with significant UV and salt exposure, some painters and products recommend a three-coat system for maximum protection and longevity. This is particularly relevant for surfaces that have been stripped back to bare substrate.',
              },
            ].map((item) => (
              <div key={item.scenario} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-[#1a1a2e] mb-2">{item.scenario}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">How a one-coat quote saves money — and costs more long-term</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A common way for painters to reduce their quotes is to specify one topcoat rather than two. The difference in labour and material cost is significant — and the difference in the initial appearance of the job is often not obvious.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But a one-coat job will not achieve the full film build of the product. This means reduced washability on interior surfaces, reduced UV and moisture resistance on exterior surfaces, and a finish that wears faster and looks patchy sooner.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            When comparing quotes, ask specifically how many topcoats are included. If one quote says one coat and another says two, you are not comparing the same job — and the two-coat quote may actually represent better value when you factor in longevity.
          </p>

          <p className="text-gray-600 leading-relaxed">
            At Working Colours, our quotes specify the preparation, priming, and number of topcoats for every job. We do not reduce the coat count as a way to lower the quoted price. If you would like a detailed, honest quote for your home, <Link href="/contact" className="text-blue-600 hover:underline font-medium">get in touch to arrange a free site visit</Link>.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Get a clear, honest quote for your home"
        body="We detail every step — preparation, primer, topcoats — so you know exactly what you're getting. Call 0434 030 222."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related articles and services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/blog/how-prepare-walls-before-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How to Prepare Walls</Link>
            <Link href="/blog/cost-paint-house-sydney-2025" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">House Painting Costs 2025</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
