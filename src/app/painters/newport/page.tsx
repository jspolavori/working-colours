import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Newport | Working Colours Painting Services',
  description: "Professional house painting in Newport. Prestige homes, timber restoration, exterior repaints. Northern Beaches specialists. Get a free quote.",
};

const faqs = [
  {
    question: 'Do you work on prestige homes in Newport?',
    answer: "Yes. Newport has a high proportion of prestige and renovated homes, and we work to the standard those properties require. Attention to detail, premium products, clean worksites.",
  },
  {
    question: 'Can you restore the timber features on my Newport home?',
    answer: "Yes. Timber cladding, pergolas, window frames, and deck boards are common in Newport. We assess the condition honestly and advise on the best approach — restoration or, in some cases, a recommendation for replacement.",
  },
  {
    question: 'How do I protect my Newport home from salt air?',
    answer: "The key is regular maintenance and the right products. Newport is exposed to salt air from the beach side. We specify products rated for high coastal exposure and always prepare surfaces thoroughly before application.",
  },
  {
    question: 'Do you do exterior repaints on Newport beachfront properties?',
    answer: "Yes. Beachfront properties need particular attention to preparation and product selection. We have experience with the specific challenges of high-exposure coastal positions.",
  },
];

export default function NewportPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Newport
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Newport</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Newport is a prestigious coastal village with a strong mix of character homes, renovated cottages, and prestige properties. Many homes feature significant timber elements — weatherboard cladding, decks, and pergolas — that face direct beachfront salt exposure.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Newport</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Newport</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Newport has an active renovation market and high standards — homeowners here invest in their properties and expect the same from their trades. We match that expectation with thorough preparation, premium products, and a clean worksite.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              The timber features common in Newport require particular attention. Weatherboard cladding, pergola beams, and deck boards need the right product — properly applied after thorough preparation — to hold up against the direct beach exposure this suburb receives.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Newport"
        body="Premium residential painting for Newport's finest homes. Get in touch for a detailed, itemised quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/mona-vale" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Mona Vale</Link>
            <Link href="/painters/avalon" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Avalon</Link>
            <Link href="/painters/bayview" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Bayview</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
