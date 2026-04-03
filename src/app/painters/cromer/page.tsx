import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Cromer | Working Colours Northern Beaches',
  description: "Residential painting in Cromer — interior, exterior and timber work for well-established family homes. Free quote from Working Colours.",
};

const faqs = [
  {
    question: 'Do you paint brick veneer homes in Cromer?',
    answer: "Yes. Brick veneer is a common surface in Cromer and we paint it regularly — for exterior refreshes, colour changes, or full repaints. We prepare brick surfaces properly before painting to ensure adhesion and durability.",
  },
  {
    question: 'Can you repaint just the trims and fascias?',
    answer: "Yes. Painting trims, fascias, gutters, and eaves is a common job that refreshes the exterior of a home significantly without the cost of a full repaint. We quote these jobs individually.",
  },
  {
    question: 'What is the process for getting a quote?',
    answer: "Contact us via the form or by phone and we arrange an in-person visit. We assess the property, discuss what you want to achieve, and provide a detailed itemised quote.",
  },
  {
    question: 'How disruptive is an exterior paint job to daily life?',
    answer: "Exterior painting is done entirely from outside and generally has minimal impact on daily life inside the home. We ask that gates are accessible and the driveway is clear on working days.",
  },
];

export default function CromerPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Cromer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Cromer</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Cromer is a well-established family suburb with quiet streets and a solid mix of brick and brick veneer homes. Residents here value reliability and quality — and the properties reflect that. We work in Cromer regularly and know what the local housing stock needs.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Residential painting in Cromer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cromer is predominantly a suburb of 1960s to 1980s brick homes — solid, well-built properties that are now at the age where a full repaint or exterior refresh makes a significant difference. Interior repaints are also very common, whether for a full update or a room-by-room refresh.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work efficiently in Cromer, keeping disruption to a minimum while doing the job properly from start to finish.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Cromer</h2>
            <ul className="space-y-3">
              {[
                'Interior painting',
                'Exterior painting — brick, render, weatherboard',
                'Fascias, eaves, and trims',
                'Deck preparation and staining',
                'Doors and window frames',
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
        heading="Get a free quote in Cromer"
        body="We visit in person, assess the job, and give you a detailed quote with no obligation."
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
            <Link href="/painters/brookvale" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Brookvale</Link>
            <Link href="/painters/belrose" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Belrose</Link>
          </div>
        </div>
      </section>
    </>
  );
}
