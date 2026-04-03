import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Deck Staining Northern Beaches Sydney | Working Colours',
  description: "Professional deck staining and refinishing on Sydney's Northern Beaches. Sand, prepare, and protect. Get a free quote.",
};

const faqs = [
  {
    question: 'How do I know if my deck needs restaining?',
    answer: "Pour a small amount of water on the deck surface. If it beads up, the existing product is still working. If it soaks in, the protection has failed and the timber is absorbing moisture — which means it's time to restain.",
  },
  {
    question: 'How long does a deck staining job take?',
    answer: 'Most residential decks take one to two days. This includes cleaning, sanding, and applying two coats of product. Drying time between coats is factored in.',
  },
  {
    question: 'How long will deck staining last?',
    answer: 'This depends on the product used, the exposure of the deck, and how much foot traffic it gets. A heavily exposed, high-traffic deck may need attention every one to two years. A sheltered deck with lighter use can go two to three years.',
  },
  {
    question: 'Can you repair damaged deck boards as part of the job?',
    answer: 'We can address minor splits, cracks, and nail issues as part of the preparation process. Significant structural damage or board replacement is outside our scope, but we can advise you on what needs to happen first.',
  },
  {
    question: 'What is the best time of year to stain a deck?',
    answer: "Spring and autumn are ideal conditions — mild temperatures and lower humidity help the product penetrate and cure correctly. We won't apply product in wet or very cold conditions as this affects the result.",
  },
];

export default function DeckStainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/services/deck-staining" className="hover:underline">Deck Staining</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deck Staining Northern Beaches</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            A well-maintained deck is one of the most used and most valued spaces in a Northern Beaches home. It&apos;s also one of the most neglected — until the surface is grey, rough, cracking, or starting to splinter.
          </p>
        </div>
      </section>

      {/* Water test */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">The simple water test</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Not sure if your deck needs attention? Pour a cup of water on the surface and watch what happens.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-1">If the water beads up:</h3>
                <p className="text-sm text-green-700">The protective coating is still working. You&apos;re okay for now — but keep an eye on it.</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-bold text-red-800 mb-1">If the water soaks in:</h3>
                <p className="text-sm text-red-700">The protection has failed. The timber is absorbing moisture, which leads to swelling, cracking, and long-term damage. Time to restain.</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Other signs to look for: surface is grey or silvery, rough to bare feet, boards are cupping or cracking, mould is visible between boards.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Why Northern Beaches decks deteriorate faster</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Salt air accelerates the breakdown of protective coatings. UV intensity on the Northern Beaches is significant. The combination of humidity, moisture, and sun means deck products don&apos;t last as long as they might in a less exposed environment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This isn&apos;t a reason to avoid timber — it&apos;s a reason to maintain it properly. A deck that&apos;s looked after will last decades. One that&apos;s neglected will need replacement far sooner.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We&apos;ll give you an honest assessment of where your deck is at, what it needs, and what you can realistically expect from the treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10 text-center">Our deck restoration process</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: '1', label: 'Pressure Wash', detail: 'Remove dirt, mould, and failed product' },
              { step: '2', label: 'Sand', detail: 'Open the grain and create a consistent surface' },
              { step: '3', label: 'Treat Mould', detail: 'Kill and remove any mould present' },
              { step: '4', label: 'Gap Fill', detail: 'Address splits and cracks in boards' },
              { step: '5', label: 'First Coat', detail: 'Apply product evenly, working with the grain' },
              { step: '6', label: 'Second Coat', detail: 'Apply final coat after appropriate drying time' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{item.step}</div>
                <h3 className="font-bold text-[#1a1a2e] text-xs mb-1">{item.label}</h3>
                <p className="text-xs text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get a free deck assessment and quote"
        body="We'll assess your deck honestly and give you a clear recommendation on what it needs — and what it'll cost."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      {/* Related */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/timber-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Timber Staining</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
          </div>
        </div>
      </section>
    </>
  );
}
