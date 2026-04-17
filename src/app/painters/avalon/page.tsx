import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Avalon Beach | Working Colours Northern Beaches',
  description: "Professional residential painting in Avalon Beach. Interior, exterior, timber staining and deck work for Avalon's character homes and renovations. Free quote.",
};

const faqs = [
  {
    question: 'Do you work on older homes in Avalon?',
    answer: "Yes — older timber homes are a big part of what we do in Avalon. We're experienced with weatherboard, fibro, and heritage-era surfaces that need careful preparation before paint goes on.",
  },
  {
    question: 'My home is mid-renovation. Can you paint in stages?',
    answer: 'Absolutely. Staged painting is common in renovation projects. We can quote the whole job upfront and work through sections as they become ready.',
  },
  {
    question: 'What exterior paint suits the Avalon environment?',
    answer: "Given Avalon's proximity to the coast and the amount of timber on older homes in the area, we recommend products with good mould resistance, UV stability, and flexibility — especially for timber surfaces that expand and contract seasonally.",
  },
  {
    question: 'How far in advance do I need to book?',
    answer: "We're usually booked two to four weeks ahead. Get in touch early if you have a specific start date or a renovation milestone to work around.",
  },
];

export default function AvalonPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Avalon Beach
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Avalon Beach</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Avalon Beach has a character all of its own — older homes on generous blocks, a strong renovation culture, and a village feel that homeowners take pride in maintaining. We paint homes here regularly, and we understand what these properties need.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting in Avalon</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Many Avalon homes are older timber builds — fibro, weatherboard, or a mix of both — that have been renovated, extended, or updated over the decades. These properties often have a patchwork of surfaces requiring different preparation approaches. Getting that right is the difference between a finish that lasts and one that fails in two years.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We also work on Avalon&apos;s newer and extensively renovated homes, where owners have invested significantly and want a finish that matches that investment. Interior repaints, full exterior overhauls, deck restoration, and timber work are all common in this area.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services we provide in Avalon</h2>
            <ul className="space-y-3">
              {[
                'Interior house painting',
                'Exterior house painting',
                'Timber staining and restoration',
                'Deck sanding, preparation, and staining',
                'Doors, trims, window frames, and louvers',
                'Residential repaints — full or staged',
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
        heading="Get a free quote in Avalon Beach"
        body="We'll visit your property, assess what it needs, and give you a detailed quote. No obligation."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/palm-beach" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Palm Beach</Link>
            <Link href="/painters/newport" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Newport</Link>
            <Link href="/painters/bayview" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Bayview</Link>
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
