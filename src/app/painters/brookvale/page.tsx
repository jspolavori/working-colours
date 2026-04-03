import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Brookvale | Working Colours Northern Beaches',
  description: "Residential painting in Brookvale — interior, exterior and timber work for homes throughout the area. Free quote from your local Northern Beaches painter.",
};

const faqs = [
  {
    question: 'Do you paint residential properties in Brookvale?',
    answer: "Yes. While Brookvale is known for its commercial strip, it has a solid residential population across a mix of housing types. We work on houses, townhouses, and units throughout the area.",
  },
  {
    question: 'Can you paint the interior of a unit or apartment?',
    answer: "Yes. We paint apartments and units regularly — including strata-owned common areas if required. For body corporate work, we can discuss scope and timing to minimise disruption to other residents.",
  },
  {
    question: 'How do I get a quote for a repaint in Brookvale?',
    answer: "Contact us via the form or by phone. We come out to the property, assess the job, and give you a detailed quote. We don't quote sight unseen.",
  },
  {
    question: 'What areas of Brookvale do you service?',
    answer: "We service all of Brookvale and surrounding streets. If you're not sure whether we cover your address, get in touch and we'll confirm.",
  },
];

export default function BrookvalePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Brookvale
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Brookvale</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Brookvale sits at the southern gateway to the Northern Beaches — a suburb with a mix of residential housing, light industrial, and commercial areas. The residential pockets here are well-established, with homes that range from older fibro and brick builds to renovated modern properties.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting in Brookvale</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The residential streets of Brookvale house a range of property types — fibro cottages, brick homes, and more recent townhouse developments. Interior repaints and exterior refreshes are common, particularly in older homes where the original paint is showing its age.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We service all residential properties in Brookvale, including units and townhouses. We give every job the same attention regardless of size.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Brookvale</h2>
            <ul className="space-y-3">
              {[
                'Interior painting — houses, units, townhouses',
                'Exterior painting — all surface types',
                'Timber staining and restoration',
                'Deck preparation and staining',
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
        heading="Get a free quote in Brookvale"
        body="Contact us to arrange an in-person assessment and detailed quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/dee-why" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Dee Why</Link>
            <Link href="/painters/collaroy" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Collaroy</Link>
            <Link href="/painters/cromer" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Cromer</Link>
            <Link href="/painters/frenchs-forest" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Frenchs Forest</Link>
          </div>
        </div>
      </section>
    </>
  );
}
