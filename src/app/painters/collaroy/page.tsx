import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Collaroy | Working Colours Painting Services',
  description: "Professional house painting in Collaroy. Coastal exposure specialists. Interior, exterior, timber staining. Get a free quote.",
};

const faqs = [
  {
    question: 'How does salt air affect homes in Collaroy?',
    answer: "Collaroy is one of the most exposed positions on the Northern Beaches. Salt contamination is a major factor — it affects both paint adhesion and long-term performance. We always wash and prepare surfaces thoroughly before any product goes on.",
  },
  {
    question: 'How often do Collaroy homes need repainting?',
    answer: "Homes in highly exposed coastal positions like Collaroy may need exterior attention every five to eight years, compared to the standard eight to twelve years for sheltered properties. The frequency depends on exposure, product quality, and preparation.",
  },
  {
    question: 'Do you service the beachfront homes in Collaroy?',
    answer: "Yes. Beachfront properties are a regular part of our work. We understand the specific preparation and product requirements for high-exposure coastal positions.",
  },
  {
    question: 'Can you paint render on Collaroy homes?',
    answer: "Yes. Render is a common substrate in Collaroy. Proper preparation involves checking for cracks, filling them correctly, and using a flexible exterior coating suited to rendered surfaces.",
  },
];

export default function CollaroyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Collaroy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Collaroy</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Collaroy faces one of the most highly exposed coastlines on the Northern Beaches. The salt contamination, UV intensity, and spray from the ocean make proper preparation and product selection critical — not optional.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Collaroy</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Collaroy</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Collaroy has a mix of original beachside homes and more modern brick construction. The challenge across all of them is the same: salt contamination must be addressed before any paint goes on, or the job will fail early.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We pressure wash thoroughly, treat salt-affected areas, use products formulated for high coastal exposure, and always apply the correct number of coats. The extra steps matter here more than almost anywhere on the Northern Beaches.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Collaroy"
        body="We'll visit your Collaroy home and give you a clear, detailed quote with the right approach for your exposure level."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/dee-why" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Dee Why</Link>
            <Link href="/painters/collaroy-plateau" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Collaroy Plateau</Link>
            <Link href="/painters/narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Narrabeen</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
