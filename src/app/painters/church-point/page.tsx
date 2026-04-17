import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Church Point | Working Colours Painting Services',
  description: 'House painting in Church Point. Waterfront and bushland home specialists — exterior repaints, timber staining, deck maintenance. Northern Beaches. Free quote.',
};

const faqs = [
  {
    question: 'Do you paint homes in Church Point?',
    answer: 'Yes. Church Point is within our service area. We work on homes throughout the waterfront community — interiors, exteriors, decks, and timber features.',
  },
  {
    question: 'My Church Point home has extensive timber decking and louvers — can you maintain them?',
    answer: 'Yes. Timber maintenance is a core part of our work. Decks, louvers, pergolas, and timber cladding all need regular attention in a waterfront environment. We sand, clean, and apply the right stain and oil system to protect the timber and restore its appearance.',
  },
  {
    question: 'Does the Pittwater environment affect what paint products you use?',
    answer: 'Yes. Waterfront homes at Church Point are exposed to moisture and salt air from Pittwater. We use products suited to these conditions — particularly for timber and external surfaces — to ensure the finish holds longer.',
  },
  {
    question: 'How do you handle access for properties with challenging terrain in Church Point?',
    answer: 'We assess access during the quote visit and plan accordingly. Some Church Point properties require care due to steep terrain or limited vehicle access — we account for this in the quote and method of work.',
  },
];

export default function ChurchPointPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Church Point
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Church Point</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Church Point is a unique waterfront community on Pittwater with a character all its own. Homes here are exposed to the full range of waterfront conditions — and timber, in particular, needs regular care to stay protected and looking its best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/contact" className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors">Get a Free Quote</Link>
            <a href="tel:0434030222" className="border-2 border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-colors">0434 030 222</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Church Point</h2>
            <ul className="space-y-2">
              {[
                { label: 'Interior house painting', href: '/services/interior-painting' },
                { label: 'Exterior house painting', href: '/services/exterior-painting' },
                { label: 'Timber staining and restoration', href: '/services/timber-staining' },
                { label: 'Deck staining and refinishing', href: '/services/deck-staining' },
                { label: 'Doors, trims, windows and louvers', href: '/services/doors-trims-windows' },
                { label: 'Residential repaints', href: '/services/residential-repaints' },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-blue-600 hover:underline text-sm font-medium">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Church Point</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Church Point homes often feature generous decks, timber louvers, and outdoor living areas that take full advantage of the Pittwater outlook. Keeping timber in good condition requires regular maintenance — staining, oiling, and cleaning — not just a cosmetic top-up.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We also paint interiors and exteriors throughout Church Point. Every quote is done in person — we visit the property, assess what&apos;s needed, and provide a written scope before any work begins.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Church Point"
        body="Waterfront painting and timber maintenance specialists. Get in touch today."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/newport" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Newport</Link>
            <Link href="/painters/bayview" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Bayview</Link>
            <Link href="/painters/avalon" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Avalon</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
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
