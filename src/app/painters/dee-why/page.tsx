import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Dee Why | Working Colours Painting Services',
  description: "Professional house painting in Dee Why. Interior, exterior, timber and deck staining. Local Northern Beaches team. Get a free quote.",
};

const faqs = [
  {
    question: 'Do you work in Dee Why?',
    answer: "Yes. Dee Why is one of our most active areas. We work on all types of homes in Dee Why — from apartments and brick units to full freestanding homes and renovations.",
  },
  {
    question: 'How does the beachside salt air affect paintwork in Dee Why?',
    answer: "Salt air accelerates the breakdown of paint coatings and timber products. Properties closest to the beach see this most acutely. We use products rated for coastal exposure and always prepare surfaces thoroughly before application.",
  },
  {
    question: 'Can you paint just the exterior of my Dee Why home?',
    answer: "Yes. Exterior-only jobs are common and we quote them as standalone jobs. We'll assess the surfaces and give you a clear, itemised quote.",
  },
  {
    question: 'How long does an exterior repaint take in Dee Why?',
    answer: "Most single-storey Dee Why homes take two to four days for an exterior repaint. We'll give you a specific timeline in your quote.",
  },
];

export default function DeeWhyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Dee Why
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Dee Why</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Dee Why is one of the largest and most diverse suburbs on the Northern Beaches — a mix of apartments, brick homes, older renders, and beachside properties. Salt air exposure is a real factor here, and preparation matters more than anywhere.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Dee Why</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting in Dee Why</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Dee Why has an active renovation market, with many homeowners updating older brick and render homes. We see a lot of exterior repaints where the previous coating has chalked, cracked, or faded from salt and sun exposure.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              For rendered surfaces in Dee Why — a common substrate — proper preparation means addressing any cracks or loose render before painting, not just painting over the top. We always do this correctly.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Dee Why"
        body="We'll visit your Dee Why home, assess the job, and give you a clear, detailed quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/collaroy" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Collaroy</Link>
            <Link href="/painters/narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Narrabeen</Link>
            <Link href="/painters/freshwater" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Freshwater</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
