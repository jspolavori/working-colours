import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter North Narrabeen | Working Colours Northern Beaches',
  description: "Residential painting in North Narrabeen — interior, exterior, timber and deck work for beach and lagoon-area homes. Free quote from Working Colours.",
};

const faqs = [
  {
    question: 'Does the Narrabeen lagoon area affect paint?',
    answer: "Yes. Properties near the lagoon and lake experience higher humidity and occasional moisture exposure. This increases the risk of mould on exterior surfaces and makes surface preparation and mould-resistant products especially important.",
  },
  {
    question: 'Do you paint fibro homes in North Narrabeen?',
    answer: "Yes. Fibro (fibre cement) homes are common in the area and require careful preparation — particularly if asbestos is a consideration in older sheeting. We can work around this appropriately and advise on what preparation is needed.",
  },
  {
    question: 'How often do homes in this area need repainting?',
    answer: "Coastal proximity and the lagoon environment can accelerate surface wear. Most exterior paint jobs on well-maintained homes in North Narrabeen last seven to ten years with quality products. Timber and decks may need attention more frequently.",
  },
  {
    question: 'Can you paint a home that is currently being rented out?',
    answer: "Yes. We coordinate with landlords and property managers regularly. We work around tenants where possible and keep disruption to a minimum.",
  },
];

export default function NorthNarrabeenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            North Narrabeen
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter North Narrabeen</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            North Narrabeen is a relaxed beach suburb sitting between Narrabeen Beach and the Narrabeen Lagoon. The community is a mix of long-time local families, surf culture, and newer residents drawn to the lifestyle. Housing is a mix of older fibro and brick homes alongside more recently renovated properties.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting in North Narrabeen</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              North Narrabeen&apos;s position between the lagoon and the ocean creates a high-moisture environment that affects exterior surfaces more than in inland suburbs. Mould, moisture, and salt air are all factors — and they require the right preparation to address properly before paint goes on.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work throughout North Narrabeen on a regular basis and are familiar with the conditions and the types of homes in the area — from original beach houses to fully renovated family homes.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in North Narrabeen</h2>
            <ul className="space-y-3">
              {[
                'Interior painting',
                'Exterior painting — fibro, brick, weatherboard',
                'Timber staining and restoration',
                'Deck sanding and staining',
                'Doors, trims, and window frames',
                'Full and partial residential repaints',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get a free quote in North Narrabeen"
        body="We visit your property in person before quoting. Get in touch to arrange a time."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Narrabeen</Link>
            <Link href="/painters/warriewood" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Warriewood</Link>
            <Link href="/painters/elanora-heights" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Elanora Heights</Link>
            <Link href="/painters/collaroy" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Collaroy</Link>
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
