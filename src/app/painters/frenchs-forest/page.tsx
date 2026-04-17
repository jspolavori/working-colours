import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: "Painter Frenchs Forest | Working Colours Northern Beaches",
  description: "Residential painting in Frenchs Forest — interior, exterior, timber and deck work for bushland homes on larger blocks. Free quote from Working Colours.",
};

const faqs = [
  {
    question: 'Do bushland properties need any special painting approach?',
    answer: "Homes in Frenchs Forest are often shaded by trees and surrounded by bush. This means surfaces can hold moisture and are prone to mould and lichen growth. We treat these surfaces before painting to ensure the new coating adheres properly and lasts.",
  },
  {
    question: 'My house has a large exterior — do you quote the whole job upfront?',
    answer: "Yes. We provide a detailed, itemised quote for the full job after visiting your property. No surprises mid-job.",
  },
  {
    question: 'Can you paint a home that has vegetation close to the walls?',
    answer: "Yes. We work around gardens and landscaping, taking care to protect plants during preparation and painting. We may ask that overhanging branches are trimmed if they prevent access to surfaces — we&apos;ll flag this at the quote stage.",
  },
  {
    question: 'What preparation is needed for a home that has significant mould or lichen?',
    answer: "We clean and treat affected surfaces with appropriate solutions before any painting begins. Painting over mould without treating it first is one of the most common causes of paint failure.",
  },
];

export default function FrenchsForestPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Frenchs Forest
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Frenchs Forest</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Frenchs Forest is a bushland suburb on larger blocks — a mix of established homes and newer development, set among trees and natural surroundings. The environment is beautiful, but it creates specific challenges for paint and timber that require careful handling.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Frenchs Forest</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Properties in Frenchs Forest are typically larger than in coastal suburbs — more surface area, more timber, and more exposure to the conditions that come with a bushy environment. Mould, moss, and lichen are common on north-facing and shaded surfaces, and the extra moisture in the air affects how long paint lasts on poorly maintained homes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work through the preparation properly — cleaning, treating, priming — before paint goes on. That&apos;s what makes the difference in a bushy environment like Frenchs Forest.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Frenchs Forest</h2>
            <ul className="space-y-3">
              {[
                'Exterior house painting — treatment-first approach',
                'Interior painting for all home sizes',
                'Timber staining and restoration',
                'Deck sanding, treating, and staining',
                'Fascias, eaves, and pergola painting',
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
        heading="Get a free quote in Frenchs Forest"
        body="We'll assess your property and give you an honest recommendation and detailed quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/belrose" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Belrose</Link>
            <Link href="/painters/seaforth" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Seaforth</Link>
            <Link href="/painters/brookvale" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Brookvale</Link>
            <Link href="/painters/cromer" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Cromer</Link>
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
