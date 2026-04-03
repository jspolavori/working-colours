import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Seaforth | Working Colours Northern Beaches',
  description: "Residential painting in Seaforth — interior, exterior, timber and deck work for Seaforth's family homes and harbour-view properties. Free quote.",
};

const faqs = [
  {
    question: 'Do you work on multi-level homes in Seaforth?',
    answer: "Yes. Many homes in Seaforth are split-level or multi-storey due to the hillside terrain. We're equipped to handle height and access challenges as part of our standard quoting process.",
  },
  {
    question: 'Does the Middle Harbour environment affect paint?',
    answer: "Yes. Seaforth is surrounded by bushland and water, and the humidity levels are higher than in more open suburbs. We factor this into product selection — particularly for exterior timber that needs good moisture resistance.",
  },
  {
    question: 'Can you paint just the exterior while we continue living in the house?',
    answer: "Absolutely. Exterior painting is done entirely from outside the home and doesn't require access to interior rooms, so there's very little disruption to daily life.",
  },
  {
    question: 'How do I know which areas of my home need the most attention?',
    answer: "We assess this for you at the quoting stage. We'll walk the property, identify the surfaces that need the most work, and give you an honest view of what can wait and what shouldn't.",
  },
];

export default function SeaforthPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Seaforth
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Seaforth</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Seaforth sits between Middle Harbour and bushland reserves — a suburb of family homes, harbour views, and varied architecture spread across hillside terrain. Homes here are often multi-level, with significant timber elements and the kind of character that rewards proper maintenance.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Seaforth</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The combination of bushland and water creates a particular environment for Seaforth properties — higher humidity, leaf matter on surfaces, and the kind of moisture that can cause paint to fail early if the prep work isn&apos;t done properly. We&apos;ve painted extensively in the area and understand what these conditions demand.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Many Seaforth homes have extensive timber — decks, pergolas, eaves, window frames — that needs regular attention to maintain in this environment. We handle it all.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Seaforth</h2>
            <ul className="space-y-3">
              {[
                'Interior house painting',
                'Exterior house painting',
                'Timber staining and restoration',
                'Deck preparation and staining',
                'Pergola and eaves painting',
                'Doors, trims, and window frames',
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
        heading="Get a free quote in Seaforth"
        body="We'll visit your property, assess what needs doing, and give you a detailed, honest quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/balgowlah" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Balgowlah</Link>
            <Link href="/painters/freshwater" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Freshwater</Link>
            <Link href="/painters/manly" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Manly</Link>
            <Link href="/painters/frenchs-forest" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Frenchs Forest</Link>
          </div>
        </div>
      </section>
    </>
  );
}
