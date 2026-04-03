import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Signs Your Deck Needs Restaining on the Northern Beaches | Working Colours',
  description: "How to tell if your deck is due for restaining — the water test, visual warning signs, UV damage, and what happens if you leave it too long.",
};

const faqs = [
  {
    question: 'How long should deck staining last on the Northern Beaches?',
    answer: "On a well-prepared deck using a quality product, most decks on the Northern Beaches last one to three years before needing attention, depending on exposure and foot traffic. Decks in full sun with high use need more frequent maintenance. A sheltered deck in a protected area can go longer.",
  },
  {
    question: 'What is the best time of year to restain a deck?',
    answer: "Spring and autumn are ideal — moderate temperatures and lower humidity allow the product to penetrate properly and cure. Avoid applying stain in very hot conditions or when rain is likely within 24 to 48 hours.",
  },
  {
    question: 'Can I apply new stain over the old stain?',
    answer: "It depends on the condition and the products. If the old product is in good condition and is the same type (oil-based or water-based), a light sand and clean may allow an overcoat. If the existing finish has failed, is peeling, or is a different type, it needs to be removed first — otherwise the new product will not adhere properly.",
  },
  {
    question: 'What happens if I leave a deck too long before restaining?',
    answer: "Timber that has been left without protection dries out, greys, cracks, and begins to absorb moisture. Eventually, this leads to swelling, rot in severe cases, and structural weakness in individual boards. It is far cheaper to maintain a deck regularly than to replace it.",
  },
];

export default function DeckRestainArticlePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Deck Maintenance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Signs Your Deck Needs Restaining on the Northern Beaches</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            The Northern Beaches environment is hard on decks. Salt air, UV, humidity, and foot traffic all accelerate the breakdown of deck coatings. Here is how to tell when your deck needs attention before it becomes a bigger problem.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Start with the water test</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The simplest way to check whether your deck still has protection is to pour a small amount of water on the surface and watch what happens.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">Water beads up</h3>
              <p className="text-green-700 text-sm leading-relaxed">The protective coating is still working. The deck does not need restaining immediately — keep an eye on it over the next season.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-2">Water soaks in</h3>
              <p className="text-red-700 text-sm leading-relaxed">The protection has failed. Moisture is entering the timber, which accelerates swelling, cracking, and long-term damage. Time to restain.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Visual signs to look for</h2>
          <div className="space-y-3 mb-8">
            {[
              { label: 'Grey or silver colour', detail: 'Natural untreated timber goes grey as UV breaks down the surface fibres. If your deck has gone silvery, the existing product has worn off.' },
              { label: 'Surface roughness', detail: 'A well-maintained deck should feel relatively smooth underfoot. If it is rough to bare feet or is splintering, the surface is breaking down.' },
              { label: 'Cupping or cracking boards', detail: 'Boards that are cupping (curling at the edges) or cracking lengthwise are absorbing and releasing moisture unevenly — a sign the protective coating is gone.' },
              { label: 'Mould between boards', detail: 'Black or green growth in the gaps between boards indicates moisture retention. Clean and treat this before any new coating is applied.' },
              { label: 'Peeling or flaking product', detail: 'If the existing stain or sealer is visibly peeling away from the boards, it needs to be removed and the deck prepared before a new coat can be applied.' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[#1a1a2e]">{item.label}:</span>{' '}
                  <span className="text-gray-600">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Why Northern Beaches decks need more frequent maintenance</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The combination of salt air, high UV, and coastal humidity means protective coatings on timber break down faster on the Northern Beaches than in more sheltered areas. A product that might last three years in a protected inland location may need reapplication every one to two years on an exposed beachside deck.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is not a reason to avoid timber — it is a reason to maintain it properly and on time. A well-maintained timber deck will outlast most alternatives. One that has been neglected for too long may need partial or full board replacement before any coating work can even begin.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Get your deck assessed and quoted"
        body="We assess your deck honestly — what it needs, what it'll cost, and what you can expect from the treatment."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Deck Staining Service', href: '/services/deck-staining' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/deck-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Deck Staining Service</Link>
            <Link href="/services/timber-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Timber Staining</Link>
            <Link href="/blog/timber-restoration-vs-replacement" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Timber Restoration vs Replacement</Link>
          </div>
        </div>
      </section>
    </>
  );
}
