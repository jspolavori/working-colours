import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Paint a House in Sydney? | Working Colours Painting Northern Beaches',
  description:
    "A practical guide to house painting costs in Sydney 2025 — interior vs exterior, what affects the price, and what to expect. From Working Colours, Northern Beaches painters.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/how-much-does-it-cost-to-paint-a-house-sydney',
  },
  openGraph: {
    type: 'website',
    title: 'How Much Does It Cost to Paint a House in Sydney? | Working Colours Painting Northern Beaches',
    description:
      "A practical guide to house painting costs in Sydney 2025 — interior vs exterior, what affects the price, and what to expect. From Working Colours, Northern Beaches painters.",
    url: 'https://www.wcpainting.com.au/blog/how-much-does-it-cost-to-paint-a-house-sydney',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does It Cost to Paint a House in Sydney? | Working Colours Painting Northern Beaches',
    description:
      "A practical guide to house painting costs in Sydney 2025 — interior vs exterior, what affects the price, and what to expect. From Working Colours, Northern Beaches painters.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'What is the cheapest way to get a house painted?',
    answer: "The cheapest quote is rarely the most economical option. A painter who skips preparation, uses cheap products, or rushes the job will leave you with a finish that fails in two to three years. A quality job done properly will last seven to twelve years. Over time, the difference in cost is significant.",
  },
  {
    question: 'Do I need to supply the paint?',
    answer: "Most professional painters supply the paint as part of the quote. This is generally the better option — your painter knows the products, can get trade pricing, and takes responsibility for the result. If you want to supply paint yourself, discuss this upfront.",
  },
  {
    question: 'What is included in a painting quote?',
    answer: "A detailed quote should itemise labour, materials (paint, primer, fillers), any surface preparation, masking, and the number of coats. Be wary of any quote that doesn't specify what preparation is included.",
  },
  {
    question: 'Are there any extra costs I should know about?',
    answer: "Surface repairs beyond filling minor holes — such as significant crack repair, rotted timber replacement, or high-pressure washing — may be quoted separately. A reputable painter will identify these at the quote stage.",
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
      "name": "How Much Does It Cost to Paint a House in Sydney?",
      "item": "https://www.wcpainting.com.au/blog/how-much-does-it-cost-to-paint-a-house-sydney"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Much Does It Cost to Paint a House in Sydney?",
  "description": "A practical guide to house painting costs in Sydney 2025 — interior vs exterior, what affects the price, and what to expect. From Working Colours, Northern Beaches painters.",
  "url": "https://www.wcpainting.com.au/blog/how-much-does-it-cost-to-paint-a-house-sydney",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/how-much-does-it-cost-to-paint-a-house-sydney"
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

export default function CostToHouseArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            House Painting Costs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Much Does It Cost to Paint a House in Sydney?</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            House painting costs vary considerably depending on the size of your home, the condition of the surfaces, and whether you are painting interior, exterior, or both. This guide gives you a realistic picture of what to expect.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-style">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The short answer</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For a standard three-bedroom home in Sydney, you should budget roughly $4,000 to $8,000 for a full interior repaint, and $5,000 to $12,000 for a full exterior repaint. These ranges are wide because so many factors affect the final cost — which we will cover below.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            A full house repaint — interior and exterior — for a three-to-four bedroom home on the Northern Beaches typically falls somewhere between $12,000 and $22,000 for a quality job. The wide range reflects differences in home size, number of storeys, surface condition, and the extent of preparation required.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-gray-600 text-sm leading-relaxed">
              These figures are general Sydney market indicators to help with early budgeting — not a quote from Working Colours. Every home is different, so the only reliable number is a detailed, itemised quote after an in-person assessment.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What affects the price</h2>
          <div className="space-y-4 mb-8">
            {[
              { label: 'Size of the home', detail: 'More surface area means more paint, more labour, and more time. A large five-bedroom home will cost more than a compact three-bedroom.' },
              { label: 'Number of storeys', detail: 'Two-storey homes require ladders and more time to set up and work safely. Some exterior areas require scaffolding, which adds to the cost.' },
              { label: 'Condition of surfaces', detail: 'A home that has not been painted in 15 years requires significantly more preparation — filling, sanding, priming — than one that was last painted five years ago in good condition.' },
              { label: 'Number of coats', detail: 'A colour change from dark to light — or light to dark — may require an additional coat to achieve a clean, consistent result. This adds to cost and time.' },
              { label: 'Paint quality', detail: 'Premium paints cost more per litre but last longer and perform better. Quotes that use cheap products may appear cheaper upfront but cost more over the life of the paint job.' },
              { label: 'Access and complexity', detail: 'High ceilings, difficult access, intricate trims, or detailed joinery add time and cost compared to standard surfaces.' },
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

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Interior vs exterior: different cost drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#1a1a2e] mb-3">Interior painting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Interior costs are driven by the number of rooms, ceiling heights, the number of doors and trims, and the condition of the walls and ceilings. Rooms that require significant filling and patching take longer to prepare. Feature walls or ceiling colours add complexity.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#1a1a2e] mb-3">Exterior painting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Exterior costs are driven by surface area, the number of storeys, the type of surface (render, brick, weatherboard, fibro), and the condition of the existing paint. Homes near the coast — including most of the Northern Beaches — may need more preparation and coastal-grade products.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Why quotes vary so much</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            It is common for homeowners to receive quotes that differ by several thousand dollars for the same job. This usually comes down to one thing: the scope of preparation included.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A painter who includes thorough surface preparation — filling, sanding, priming, treating mould where needed — will quote more than one who plans to paint over the existing surface with minimal prep. The lower quote looks appealing. The result rarely is.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When comparing quotes, ask each painter to explain what preparation is included. That is where the real difference lies.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#1a1a2e] mb-2">Our approach to quoting</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Working Colours, we visit every property before quoting. We assess the surfaces, identify what preparation is needed, and provide a detailed, itemised quote. We do not quote sight unseen and we do not present surprises mid-job.{' '}
              <Link href="/contact" className="text-blue-600 hover:underline font-medium">Get in touch to arrange a quote.</Link>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get an accurate quote for your home"
        body="We visit in person, assess the job properly, and give you a detailed, itemised price. No estimates, no surprises."
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
            <Link href="/services/deck-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Deck Staining</Link>
            <Link href="/services/timber-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Timber Staining</Link>
            <Link href="/blog/how-to-choose-a-painter-sydney" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How to Choose a Painter</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
