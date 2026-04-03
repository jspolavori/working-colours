import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Belrose | Working Colours Northern Beaches',
  description: "Residential painting in Belrose — interior, exterior, timber and deck work for quiet bush-fringe homes on larger blocks. Free quote from Working Colours.",
};

const faqs = [
  {
    question: 'How does the bush environment affect exterior paint in Belrose?',
    answer: "Homes in Belrose can experience significant moisture from surrounding bush, shade that limits drying, and surface contamination from leaf matter and organic growth. Proper surface preparation — including washing, treating, and priming — is essential before exterior painting.",
  },
  {
    question: 'How long does exterior paint last in Belrose?',
    answer: "With quality products and proper preparation, an exterior paint job on a well-maintained home should last 8 to 12 years. In heavily shaded or north-facing areas with persistent moisture, more frequent maintenance may be needed.",
  },
  {
    question: 'Do you paint newly built homes in Belrose?',
    answer: "Yes. We work on newly built homes as well as established and renovated properties. New builds often require thorough priming and sealing before topcoats, particularly on plasterboard and new timber.",
  },
  {
    question: 'Can you come out for a quote in Belrose?',
    answer: "Yes — we visit in person before quoting. We won't price a job without seeing it first. Contact us and we'll arrange a time that works for you.",
  },
];

export default function BelrosePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Belrose
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Belrose</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Belrose is a quiet, bush-fringe suburb with larger properties, well-established gardens, and a relaxed lifestyle. Homes here are typically brick or brick veneer, set on good-sized blocks, and the families who live here take the long view on maintaining their properties.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Residential painting in Belrose</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The larger blocks and surrounding bush in Belrose mean homes often have more exterior surface to maintain — longer fence lines, more timber, bigger decks, more fascia and eaves. It&apos;s the kind of property where getting a thorough job done properly saves money in the long run.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We treat the bush environment seriously in our preparation — cleaning surfaces of organic material, treating any mould or lichen, and using products suited to the conditions before we put any paint on.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Belrose</h2>
            <ul className="space-y-3">
              {[
                'Interior painting',
                'Exterior painting — brick, render, weatherboard',
                'Timber staining and restoration',
                'Deck preparation and staining',
                'Fascias, eaves, and pergolas',
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
        heading="Get a free quote in Belrose"
        body="We visit in person before quoting. Call us or fill in the form to arrange a time."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/frenchs-forest" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Frenchs Forest</Link>
            <Link href="/painters/cromer" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Cromer</Link>
            <Link href="/painters/seaforth" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Seaforth</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
