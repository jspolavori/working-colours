import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Timber Restoration vs Replacement: What Is Worth Doing? | Working Colours',
  description: "When can weathered timber be restored, and when is replacement the better option? A practical guide to making the right call on decks, fences, and cladding.",
};

const faqs = [
  {
    question: 'How do I know if my deck has structural rot?',
    answer: "Probe suspect boards with a firm object — a screwdriver or the point of a key. Timber with surface greying or cracking but sound underneath will resist penetration. Timber that is soft, spongy, or hollow when tapped has rotted and needs replacement.",
  },
  {
    question: 'Can you restore weathered grey deck boards?',
    answer: "In most cases, yes. Surface greying is UV damage to the outermost timber fibres — the structural integrity is usually intact underneath. Sanding opens the grain, removes the grey layer, and allows a fresh protective coating to penetrate properly.",
  },
  {
    question: 'Is restoration always cheaper than replacement?',
    answer: "Not always. If a significant proportion of boards need replacing, the cost of partial replacement plus restoration may approach the cost of full replacement. We will give you an honest assessment at the quote stage.",
  },
  {
    question: 'What type of timber can be restored?',
    answer: "Most hardwood timber species used for decks and cladding in Australia can be restored if the structural integrity is intact. This includes spotted gum, merbau, blackbutt, and ironbark. Softwoods used in older homes may be more susceptible to rot and require careful assessment.",
  },
];

export default function TimberRestorationArticlePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Timber Restoration
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Timber Restoration vs Replacement: What Is Worth Doing?</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Weathered timber looks worse than it usually is. In most cases, grey, rough, or cracked timber can be restored to look and perform far better than it currently does. But there are situations where replacement makes more sense.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">When timber can be restored</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The key question is whether the timber has structural integrity. Most of what makes timber look bad — grey colour, rough texture, surface cracks, and even minor splintering — is surface-level damage from UV and moisture. The timber underneath is often still sound and fully restorable.
          </p>
          <div className="space-y-3 mb-8">
            {[
              { label: 'Surface greying', detail: 'Grey timber has lost its surface oils and had its outer fibres damaged by UV. Sanding removes this layer and exposes sound timber underneath. Restoration is almost always viable.' },
              { label: 'Roughness and checking', detail: 'Fine checks (surface cracks along the grain) are common in older deck timber, particularly hardwoods. These can be sanded and filled. Unless they penetrate deep into the board, the timber is restorable.' },
              { label: 'Peeling existing finish', detail: 'Old finish that is peeling away needs to be removed before a new coating can adhere. This is preparation work, not replacement.' },
              { label: 'Minor staining or discolouration', detail: 'Tannin bleed, iron staining, or weather marks can be treated with appropriate solutions before staining.' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[#1a1a2e]">{item.label}:</span>{' '}
                  <span className="text-gray-600">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">When replacement is the better option</h2>
          <div className="space-y-3 mb-8">
            {[
              { label: 'Structural rot', detail: 'Timber that is soft, spongy, or hollow when tapped has rotted from moisture infiltration. Rotted boards have no structural integrity and cannot be restored.' },
              { label: 'Deep cracking that has allowed moisture in', detail: 'Boards that have cracked deeply across the grain — not just along it — may have admitted enough moisture to cause internal decay even where the surface looks acceptable.' },
              { label: 'Widespread board cupping or warping', detail: 'Significant cupping or warping that has occurred over time indicates repeated moisture cycling that has structurally compromised the timber.' },
              { label: 'Pest damage', detail: 'Borer, termite, or other pest damage may require replacement of affected boards or sections regardless of surface appearance.' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="font-semibold text-[#1a1a2e]">{item.label}:</span>{' '}
                  <span className="text-gray-600">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The cost comparison</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Restoring a deck that can be restored is substantially cheaper than replacement. A full deck restoration — sanding, treating, and applying two coats of a quality product — typically costs a fraction of the cost of full deck replacement with new hardwood or composite boards.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The important caveat: if a significant number of boards need replacing to make restoration viable, the equation changes. We assess this honestly at the quoting stage and will tell you if replacement makes more sense for your specific situation.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Get your timber assessed"
        body="We'll take a look, give you an honest view of what's worth doing, and quote the work accurately."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Timber Staining Service', href: '/services/timber-staining' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/timber-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Timber Staining Service</Link>
            <Link href="/services/deck-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Deck Staining Service</Link>
            <Link href="/blog/signs-deck-needs-restaining-northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Signs Your Deck Needs Restaining</Link>
          </div>
        </div>
      </section>
    </>
  );
}
