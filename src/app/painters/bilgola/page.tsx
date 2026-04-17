import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Bilgola | Working Colours Painting Services',
  description: 'House painting in Bilgola and Bilgola Beach. Coastal home specialists — exterior repaints, interior painting, timber staining. Northern Beaches. Free quote.',
};

const faqs = [
  {
    question: 'How does the coastal environment affect paint on Bilgola homes?',
    answer: 'Bilgola Beach sits directly on the ocean and homes close to the water are exposed to significant salt air. This accelerates paint breakdown, particularly on surfaces facing the prevailing wind. We use paint systems rated for high coastal exposure and always prepare surfaces properly before applying any product.',
  },
  {
    question: 'Do you paint weatherboard and timber homes in Bilgola?',
    answer: 'Yes. Timber homes require careful preparation — thorough sanding, correct priming, and a paint system that moves with the timber. We have experience with weatherboard homes and the preparation they demand.',
  },
  {
    question: 'Can you paint a home on a steep or difficult access Bilgola block?',
    answer: 'Yes. Many Bilgola properties have sloped blocks and challenging access. We assess access requirements during the quote visit and plan accordingly — including elevated work platforms where needed.',
  },
  {
    question: 'How often should coastal homes in Bilgola be repainted?',
    answer: 'In a high-exposure coastal location like Bilgola Beach, 6–8 years is a reasonable guide for exterior repaints, depending on surface type and aspect. We can assess your home and give you an honest view on current condition.',
  },
];

export default function BilgolaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Bilgola
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Bilgola</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Bilgola is one of the Northern Beaches&apos; most beautiful and tightly held coastal communities. Homes here are exposed to the full force of ocean air — getting the right paint system and preparation is what separates a paint job that lasts from one that doesn&apos;t.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Bilgola</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Bilgola</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Bilgola homes range from original cottages to architect-designed contemporary builds. Whatever the style, the coastal conditions demand proper preparation and the right products — cutting corners here shows up quickly.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We also do significant timber maintenance work in coastal areas — decks, louvers, pergolas, and window frames. Salt air is particularly hard on timber, and a proper stain and oil treatment extends the life of the wood considerably.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Bilgola"
        body="Coastal painting specialists for Bilgola homes. We know what works this close to the ocean."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/newport" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Newport</Link>
            <Link href="/painters/avalon" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Avalon</Link>
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
