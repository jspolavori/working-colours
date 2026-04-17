import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Balgowlah | Working Colours Northern Beaches',
  description: "Residential painting in Balgowlah — interior, exterior, and timber work for established family homes near Manly. Free quote from Working Colours.",
};

const faqs = [
  {
    question: 'Do you work on brick homes in Balgowlah?',
    answer: "Yes. Brick and brick veneer homes are common in Balgowlah. We paint brick exteriors, render, weatherboard, and all surface types. Each material is prepared and coated appropriately.",
  },
  {
    question: 'Can you paint just one or two rooms?',
    answer: "Absolutely. We quote jobs of all sizes — single rooms, feature walls, or a full house. We assess the job honestly and give you a straightforward price.",
  },
  {
    question: 'How do I prepare for an interior paint job?',
    answer: "Move smaller items away from walls and clear breakables from shelves. We protect everything else with drop sheets and will advise you before we start on exactly what needs to happen.",
  },
  {
    question: 'What paint finishes do you recommend for living areas?',
    answer: "Low-sheen is the standard recommendation for walls in living areas and bedrooms — it hides surface imperfections better than flat and is easier to clean. Trims are typically done in semi-gloss or gloss enamel.",
  },
];

export default function BalgowlahPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Balgowlah
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Balgowlah</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Balgowlah is an established family suburb just inland from Manly — well-kept streets, a mix of brick homes and weatherboard, and homeowners who take genuine pride in their properties. We work throughout Balgowlah regularly and are familiar with what the local housing stock needs.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Residential painting in Balgowlah</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The housing in Balgowlah is predominantly brick — a mix of older red brick homes, more recent brick veneer builds, and the occasional weatherboard. Interior repaints are common, particularly in homes that haven&apos;t been touched in a decade or more. Exterior jobs often involve painting brickwork, rendering, or refreshing the trims and fascias that show age first.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We paint homes in Balgowlah Heights and Balgowlah proper, and are equally comfortable with a single-room refresh or a full house repaint.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Balgowlah</h2>
            <ul className="space-y-3">
              {[
                'Interior painting — walls, ceilings, trims',
                'Exterior painting — brick, render, weatherboard',
                'Timber staining and restoration',
                'Deck preparation and staining',
                'Doors, window frames, and louvers',
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
        heading="Get a free quote in Balgowlah"
        body="We'll come out, assess your home, and give you a detailed, itemised quote. No pressure."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/manly" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Manly</Link>
            <Link href="/painters/seaforth" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Seaforth</Link>
            <Link href="/painters/freshwater" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Freshwater</Link>
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
