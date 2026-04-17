import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Terrey Hills | Working Colours Painting Services',
  description: 'House painting in Terrey Hills. Interior and exterior repaints, deck staining, large property painting. Northern Beaches specialists. Get a free quote today.',
};

const faqs = [
  {
    question: 'Do you paint homes and properties in Terrey Hills?',
    answer: 'Yes. Terrey Hills is within our service area. We paint residential properties throughout the suburb — interiors, exteriors, and outdoor timber features.',
  },
  {
    question: 'My Terrey Hills property has a large amount of exterior surface area — is that a problem?',
    answer: 'Not at all. We quote based on actual scope after visiting the property. Larger properties get proper attention — we don\'t rush, and we don\'t sub-contract the work out.',
  },
  {
    question: 'Do you paint timber features on acreage properties in Terrey Hills?',
    answer: 'Yes. Decks, pergolas, timber fencing, and outbuildings all fall within our scope. We stain, oil, and restore timber features to a high standard.',
  },
  {
    question: 'What paint do you recommend for homes in Terrey Hills?',
    answer: 'It depends on the substrate and the conditions on the property. After inspecting your home we\'ll recommend a system suited to the specific surfaces and exposure — not a one-size-fits-all solution.',
  },
];

export default function TerreyHillsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Terrey Hills
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Terrey Hills</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Terrey Hills has a semi-rural character with larger blocks and properties that often include generous outdoor entertaining areas. We service the suburb for residential painting — from interior refreshes to full exterior repaints and timber maintenance.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Terrey Hills</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Terrey Hills</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Homes in Terrey Hills often sit on larger blocks with more exterior surface area than a typical suburban property. We visit and quote in person — phone estimates don&apos;t account for the actual scope of work on properties like these.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Timber is a common feature in the area — decks, pergolas, large fences — and we offer full deck and timber restoration alongside our painting work. Everything done in one visit, one team, one standard.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Terrey Hills"
        body="Residential painting and timber maintenance for Terrey Hills properties. Get in touch."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/belrose" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Belrose</Link>
            <Link href="/painters/frenchs-forest" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Frenchs Forest</Link>
            <Link href="/painters/mona-vale" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Mona Vale</Link>
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
