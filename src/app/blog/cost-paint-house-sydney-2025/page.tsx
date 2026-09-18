import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Paint a House in Sydney in 2025? | Working Colours Painting Northern Beaches',
  description:
    "Updated 2025 guide to house painting costs in Sydney — what to budget for interior, exterior, and full repaints. From Working Colours, your Northern Beaches painter.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/cost-paint-house-sydney-2025',
  },
  openGraph: {
    type: 'website',
    title: 'How Much Does It Cost to Paint a House in Sydney in 2025? | Working Colours Painting Northern Beaches',
    description:
      "Updated 2025 guide to house painting costs in Sydney — what to budget for interior, exterior, and full repaints. From Working Colours, your Northern Beaches painter.",
    url: 'https://www.wcpainting.com.au/blog/cost-paint-house-sydney-2025',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does It Cost to Paint a House in Sydney in 2025? | Working Colours Painting Northern Beaches',
    description:
      "Updated 2025 guide to house painting costs in Sydney — what to budget for interior, exterior, and full repaints. From Working Colours, your Northern Beaches painter.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'Is the 2025 cost of painting a house higher than previous years?',
    answer:
      "Labour and materials costs have increased moderately through 2024 and into 2025. Premium paint prices have risen with inflation, and experienced tradespeople are in higher demand. Expect to pay slightly more than quotes you may have received two or three years ago — but the quality difference from a properly prepared job remains the key variable.",
  },
  {
    question: 'How do I get the best value on a house painting quote?',
    answer:
      "The best value is not the cheapest quote — it is the most complete preparation for the money. Ask each painter exactly what preparation is included. A quote that lists specific steps is far more trustworthy than a round-number estimate. Compare scope, not just price.",
  },
  {
    question: 'Does painting my house increase its value?',
    answer:
      "A well-presented exterior and fresh interior absolutely contribute to a higher sale price on the Northern Beaches. Buyers form strong first impressions. Fresh paint removes objections before they arise and photographs better at open homes. For most homeowners, the return on investment from a pre-sale repaint is positive.",
  },
  {
    question: 'Can I supply my own paint to reduce costs?',
    answer:
      "You can, but it is not usually the best approach. Painters buy paint at trade pricing, take responsibility for the product they use, and know what works in each situation. Supplying paint yourself can create grey areas around responsibility if something goes wrong. Discuss it with your painter first.",
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
      "name": "How Much Does It Cost to Paint a House in Sydney in 2025?",
      "item": "https://www.wcpainting.com.au/blog/cost-paint-house-sydney-2025"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Much Does It Cost to Paint a House in Sydney in 2025?",
  "description": "Updated 2025 guide to house painting costs in Sydney — what to budget for interior, exterior, and full repaints. From Working Colours, your Northern Beaches painter.",
  "url": "https://www.wcpainting.com.au/blog/cost-paint-house-sydney-2025",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/cost-paint-house-sydney-2025"
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

export default function CostPaintHouseSydney2025Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            House Painting Costs 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Much Does It Cost to Paint a House in Sydney in 2025?
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Painting costs in Sydney have shifted with inflation, increased demand for skilled tradespeople, and rising material costs. Here is an updated, realistic picture of what to expect when budgeting for a house repaint in 2025.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The 2025 ballpark figures</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For a standard three-bedroom home on Sydney&apos;s Northern Beaches, realistic 2025 budgets look something like this:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Interior repaint (3-bed)', range: '$5,000 – $10,000' },
              { label: 'Exterior repaint (1-storey)', range: '$6,000 – $14,000' },
              { label: 'Full house (interior + exterior)', range: '$14,000 – $25,000+' },
            ].map((item) => (
              <div key={item.label} className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                <p className="text-sm text-gray-600 mb-2">{item.label}</p>
                <p className="text-xl font-bold text-[#0066CC]">{item.range}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            These ranges are deliberately wide because so many variables affect the final cost. Surface condition, number of storeys, complexity of the roofline, type of substrate, and the extent of preparation required all push quotes up or down significantly.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-gray-600 text-sm leading-relaxed">
              These figures are general Sydney market indicators to help with early budgeting — not a quote from Working Colours. Every home is different, so the only reliable number is a detailed, itemised quote after an in-person assessment.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What has changed since 2023</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Premium exterior paint from major Australian manufacturers has increased in price by approximately 10–15% over the past two years. Labour rates for experienced painters have also risen — skilled tradespeople on the Northern Beaches are in high demand, and the lowest-cost operators are often the ones with the least preparation time built into their quotes.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            If you received a quote in 2022 or 2023 that you never acted on, expect to add 10–20% to that figure as a starting point. Get a new in-person quote rather than assuming the old one still applies.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What drives the cost up</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                factor: 'Two-storey homes',
                detail: 'Add ladders, more setup time, and in some cases scaffolding. Expect exterior costs to be 20–40% higher than a comparable single-storey property.',
              },
              {
                factor: 'Poor surface condition',
                detail: "Significant chalking, peeling, cracking, or mould means more preparation time. This is where cheap quotes cut corners most aggressively — and where results fail fastest.",
              },
              {
                factor: 'Coastal position',
                detail: 'Properties within 500 metres of the ocean need more thorough washing, better product selection, and more careful preparation. This adds cost but also adds significantly to the longevity of the result.',
              },
              {
                factor: 'Colour change',
                detail: 'Going from a dark colour to light, or vice versa, may require an additional coat. This adds both material and labour costs to the job.',
              },
              {
                factor: 'Timber features',
                detail: 'Weatherboard cladding, pergolas, decks, and timber window frames each require specific preparation and product selection. These add cost — but skipping them means the job fails in high-exposure areas.',
              },
            ].map((item) => (
              <div key={item.factor} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[#1a1a2e]">{item.factor}: </span>
                  <span className="text-gray-600">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Why the cheapest quote is rarely the best value</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A painting quote is essentially a statement about how much preparation the painter plans to do. A low quote almost always means less preparation — less washing, less sanding, skipped primer, fewer coats. The result looks fine on day one and shows problems within 18 months.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A quality <Link href="/services/exterior-painting" className="text-blue-600 hover:underline font-medium">exterior paint job</Link> on a Northern Beaches home, done with correct product and full preparation, should last eight to twelve years. A rushed job might last three. Over the life of the paint, the quality job works out significantly cheaper.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            When comparing quotes, ask each painter to describe specifically what surface preparation is included. That conversation will tell you more than the number itself.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Getting an accurate quote for your home</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            No reputable painter should quote a job sight unseen. The only way to give an accurate price is to see the surfaces, assess the condition, and understand the scope. Be cautious of any painter who quotes over the phone from a square meterage calculation without a site visit.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Working Colours, we visit every property before quoting. We walk through what we&apos;ll do, why it matters, and what you can expect from the result. There are no surprises mid-job. If you&apos;re ready to get an accurate picture of what your home needs and what it will cost, <Link href="/contact" className="text-blue-600 hover:underline font-medium">get in touch to arrange a free site assessment</Link>.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#1a1a2e] mb-2">Free in-person quotes</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We visit your property, assess the surfaces, and give you a detailed, itemised quote. No vague estimates, no surprises. Call <a href="tel:+61434030222" className="text-blue-600 hover:underline font-medium">0434 030 222</a> or{' '}
              <Link href="/contact" className="text-blue-600 hover:underline font-medium">fill in the quote form</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get an accurate 2025 quote for your home"
        body="We visit in person, assess the condition of all surfaces, and give you a detailed, itemised price. No guesswork. No surprises."
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
            <Link href="/blog/how-choose-painter-northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How to Choose a Painter</Link>
            <Link href="/blog/how-many-coats-paint-house" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How Many Coats Does a House Need?</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
