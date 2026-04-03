import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Mona Vale | Working Colours Painting Services',
  description: "Professional house painting in Mona Vale. Interior, exterior, deck staining. Northern Beaches specialists. Get a free quote.",
};

const faqs = [
  {
    question: 'Do you service Mona Vale?',
    answer: "Yes. Mona Vale is a core service area for us. We work across the suburb on all types of residential properties.",
  },
  {
    question: 'What types of homes do you paint in Mona Vale?',
    answer: "Mona Vale has a mix of brick veneer and rendered homes from the 1970s through to the 1990s, alongside newer builds. Exterior repaints are common as these homes reach the age where the original paintwork needs replacing.",
  },
  {
    question: 'Do you do deck staining in Mona Vale?',
    answer: "Yes. Decks and outdoor entertaining areas are common in Mona Vale. We assess, sand, and treat decks correctly for the coastal environment.",
  },
  {
    question: 'How do I get a quote for my Mona Vale home?',
    answer: "Contact us via the quote form, call us on 0434 030 222, or send a message on WhatsApp. We'll arrange a site visit and provide a detailed, itemised quote.",
  },
];

export default function MonaValePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Mona Vale
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Mona Vale</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Mona Vale sits at the centre of the Northern Beaches — a family-oriented suburb with a solid mix of brick and rendered homes from the 1970s and 1980s, along with a growing number of renovations and new builds. Decks and outdoor areas are a feature of many properties here.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Mona Vale</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we see in Mona Vale</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              The 1970s and 1980s homes in Mona Vale are now at the age where exterior paintwork is due for replacement. We see a lot of chalking, fading, and cracking on older renders and brick-and-render combinations.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Decks and outdoor entertaining areas are common here and benefit from regular maintenance. We do honest assessments — if your deck just needs a clean and a fresh coat, we&apos;ll tell you. If it needs proper sanding and preparation, we&apos;ll explain why.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Mona Vale"
        body="We'll visit your home, assess the job, and give you a clear, detailed quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/newport" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Newport</Link>
            <Link href="/painters/warriewood" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Warriewood</Link>
            <Link href="/painters/narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Narrabeen</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
