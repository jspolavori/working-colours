import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Forestville | Working Colours Painting Services',
  description: 'House painting in Forestville. Interior and exterior repaints, deck staining, timber restoration. Northern Beaches specialists. Get a free quote today.',
};

const faqs = [
  {
    question: 'Do you paint homes in Forestville?',
    answer: 'Yes. Forestville is within our regular service area. We work across interiors and exteriors throughout the suburb — full repaints, feature rooms, timber features, and more.',
  },
  {
    question: 'My Forestville home has a large timber deck — can you restore it?',
    answer: 'Yes. Deck restoration is a core part of our work. We sand back the existing finish, treat any weathered or greyed timber, and apply a quality stain and oil system that protects the wood and looks great.',
  },
  {
    question: 'What should I do to prepare my home before you paint?',
    answer: 'We handle all the preparation — cleaning, sanding, filling, masking, and priming. You just need to move any small items out of the way. We can advise on what to clear before we start.',
  },
  {
    question: 'Do you work on homes surrounded by trees in Forestville?',
    answer: 'Yes. Forestville has a lot of leafy properties and we\'re used to working around established gardens and trees. We take care to protect landscaping and garden beds during exterior work.',
  },
];

export default function ForestvillePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Forestville
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Forestville</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Forestville is a leafy, family-friendly suburb with well-established homes and a strong community feel. We paint houses throughout the area — from full interior refreshes to exterior overhauls — and bring the same care and finish every time.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Forestville</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Forestville</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Forestville homes often have generous outdoor areas with decks, pergolas, and established gardens. Timber maintenance — staining, oiling, restoration — is a regular part of our work in the suburb.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              For interiors, we work cleanly and efficiently. We use quality low-odour products, protect floors and furniture, and leave the space tidy at the end of every day.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Forestville"
        body="Premium residential painting for Forestville homes. Get in touch today."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/frenchs-forest" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Frenchs Forest</Link>
            <Link href="/painters/belrose" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Belrose</Link>
            <Link href="/painters/brookvale" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Brookvale</Link>
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
