import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Narraweena | Working Colours Painting Services',
  description: 'House painting in Narraweena. Interior and exterior repaints, timber staining, residential painting specialists. Northern Beaches. Get a free quote today.',
};

const faqs = [
  {
    question: 'Do you paint homes in Narraweena?',
    answer: 'Yes. Narraweena is well within our regular service area on the Northern Beaches. We paint interiors, exteriors, and timber features throughout the suburb.',
  },
  {
    question: 'What does a typical exterior repaint in Narraweena involve?',
    answer: 'We start with a thorough surface assessment — checking for cracks, peeling, rust spots, and substrate issues. Surfaces are cleaned, repaired, and primed before any top coat goes on. A proper exterior repaint done this way will hold for many years.',
  },
  {
    question: 'Can you help choose colours for my Narraweena home?',
    answer: 'Yes. We can walk through colour options with you and help you select a palette that works with your home\'s architecture and the surrounding streetscape. We bring sample pots so you can see colours on the actual wall.',
  },
  {
    question: 'How do I get a quote for painting my home in Narraweena?',
    answer: 'Contact us through the website or call 0434 030 222. We\'ll arrange a time to visit the property, assess the scope, and provide a written quote. No obligation.',
  },
];

export default function NarraweenaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Narraweena
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Narraweena</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Narraweena is a quiet residential suburb sitting between Dee Why and Collaroy Plateau. We paint homes throughout the area — interior refreshes, exterior repaints, and everything in between.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Narraweena</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Narraweena</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Narraweena has a mix of older established homes and more recently updated properties. Many homes in the area are overdue for an exterior repaint — and a good repaint, done properly, makes a significant difference to both the look and protection of the home.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We bring the same standard of preparation and finish to every job regardless of suburb. Surface prep is where most painters cut corners — we don&apos;t.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Narraweena"
        body="Professional residential painting in Narraweena and across the Northern Beaches."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/dee-why" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Dee Why</Link>
            <Link href="/painters/collaroy" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Collaroy</Link>
            <Link href="/painters/collaroy-plateau" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Collaroy Plateau</Link>
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
