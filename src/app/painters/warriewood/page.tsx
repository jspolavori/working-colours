import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Warriewood | Working Colours Northern Beaches',
  description: "Residential painting in Warriewood — interior, exterior, and timber work for modern family homes and townhouses. Free quote from Working Colours.",
};

const faqs = [
  {
    question: 'Do you paint newly built homes in Warriewood?',
    answer: "Yes. Warriewood has a significant amount of newer housing stock — townhouses, dual occupancies, and estate homes. New builds and recently built homes often need priming and sealing on new plasterboard and timber before topcoats are applied.",
  },
  {
    question: 'Can you paint strata and townhouse complexes?',
    answer: "Yes. We work on strata properties and can coordinate with body corporates on timing, access, and scope. We can quote individual lots or common areas depending on the project.",
  },
  {
    question: 'My home is relatively new — does it still need preparation before painting?',
    answer: "Yes. Even newer homes benefit from proper preparation before repainting — cleaning surfaces, filling minor defects, and priming bare or patched areas. It makes a significant difference to the final result.",
  },
  {
    question: 'Do you work on the weekends for Warriewood jobs?',
    answer: "We work Monday to Saturday. If you need work completed on a specific timeline, mention it when you get in touch and we'll do our best to accommodate.",
  },
];

export default function WarriewoodPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Warriewood
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Warriewood</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Warriewood is one of the Northern Beaches&apos; newer residential precincts — a mix of estate homes, townhouses, and family-oriented development built over the past two decades. Fresh, modern, and well-maintained. We work throughout Warriewood and the surrounding area.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting in Warriewood</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The newer housing stock in Warriewood tends to have modern finishes — rendered exteriors, clean lines, and contemporary interiors. Homeowners here are often updating a home that&apos;s 10 to 15 years old for the first time, or refreshing a rental or investment property.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We paint both houses and townhouses in Warriewood. Whether it&apos;s a single room, a full interior, or an exterior refresh on a rendered home, we approach it the same way.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Warriewood</h2>
            <ul className="space-y-3">
              {[
                'Interior painting — houses and townhouses',
                'Exterior painting — render, texture, weatherboard',
                'Feature walls and colour updates',
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
        heading="Get a free quote in Warriewood"
        body="Contact us to arrange an in-person assessment and detailed, itemised quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Narrabeen</Link>
            <Link href="/painters/north-narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">North Narrabeen</Link>
            <Link href="/painters/mona-vale" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Mona Vale</Link>
            <Link href="/painters/elanora-heights" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Elanora Heights</Link>
          </div>
        </div>
      </section>
    </>
  );
}
