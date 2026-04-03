import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Narrabeen | Working Colours Painting Services',
  description: "Professional house painting in Narrabeen. Interior, exterior, timber staining. Local Northern Beaches team. Get a free quote.",
};

const faqs = [
  {
    question: 'Do you paint homes in Narrabeen?',
    answer: "Yes. Narrabeen is a core area for us. We work on all types of homes in the area — from original weatherboard cottages to renovated family homes.",
  },
  {
    question: "Does the lagoon affect homes' paintwork in Narrabeen?",
    answer: "Yes. Lakeside and lagoon-adjacent properties in Narrabeen can experience elevated humidity and moisture exposure, which affects both interior and exterior surfaces. We account for this when specifying products.",
  },
  {
    question: 'What type of paint is best for timber homes in Narrabeen?',
    answer: "For timber weatherboard homes, we typically recommend a quality exterior acrylic with strong adhesion and flexibility. Surface preparation — cleaning, sanding, and priming bare timber — is critical before any product goes on.",
  },
  {
    question: 'Can you restore weathered timber features?',
    answer: "In most cases yes. Narrabeen has a high concentration of homes with timber features — weatherboards, pergolas, fences — that have been affected by coastal conditions. We assess each situation and advise honestly.",
  },
];

export default function NarrabeenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Narrabeen
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Narrabeen</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Narrabeen is an iconic location — the lagoon, the beach, and a strong community of homeowners who take pride in their properties. It&apos;s also a suburb with significant timber housing stock and real moisture exposure from both ocean and lagoon sides.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Narrabeen</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Narrabeen</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Narrabeen has a strong renovation culture and a mix of original family homes — many of them weatherboard — alongside newer renovated properties. Timber features are common here, and they require careful maintenance in the coastal environment.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Moisture from the lagoon is a factor many homeowners underestimate. We&apos;ve seen it cause issues on south-facing and low-lying properties — mould on interior ceilings, bubbling on exterior surfaces — that trace back to inadequate moisture management in the original paint system.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Narrabeen"
        body="We'll visit your home, assess the job, and give you a clear, detailed quote with no vague estimates."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/north-narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">North Narrabeen</Link>
            <Link href="/painters/collaroy" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Collaroy</Link>
            <Link href="/painters/warriewood" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Warriewood</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
