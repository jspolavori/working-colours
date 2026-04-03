import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Residential Repaints Northern Beaches Sydney | Working Colours',
  description: "Full house repaints and touch-ups across Sydney's Northern Beaches. Interior, exterior, or both. Honest assessment and detailed quote. Book now.",
};

const faqs = [
  {
    question: 'How do I know if my home needs a full repaint or just touch-ups?',
    answer: "We will give you an honest assessment during the site visit. If the existing paintwork is in reasonable condition and touch-ups will blend consistently, we will say so. If the surface condition means touch-ups will look patchy or the overall finish has deteriorated enough that partial work will not hold up, we will explain why a full repaint makes more sense. We have no interest in recommending more work than your home actually needs.",
  },
  {
    question: 'How much does a full house repaint cost?',
    answer: "Cost depends on the size of your home, the condition of the surfaces, whether the work is interior, exterior, or both, the number of colours involved, and the level of preparation required. We provide detailed, itemised quotes after a site visit — no vague estimates, no surprises.",
  },
  {
    question: 'How long does a full residential repaint take?',
    answer: "A full interior repaint of a standard three-to-four bedroom home typically takes five to eight working days. Adding exterior work extends the timeline depending on the size and surface condition of your home. We will give you a clear schedule before we start.",
  },
  {
    question: 'Can you repaint while we\'re living in the house?',
    answer: "Yes. Most clients remain at home during an interior repaint. We work through one area at a time so you always have functional living space. We will talk through the logistics with you before the job begins and plan the sequence around your routine as much as possible.",
  },
  {
    question: 'Do you help with colour selection?',
    answer: "We can provide general guidance on colour direction — what works well in different lighting conditions, how to approach open-plan spaces, what reads well for pre-sale. For detailed colour consultancy we recommend working with a colour consultant, but we are happy to talk through your options.",
  },
];

const reasons = [
  { label: 'Tired or outdated colours', detail: "The palette from ten years ago no longer reflects how you want the home to feel — time for a refresh." },
  { label: 'Preparing to sell', detail: 'Fresh paint removes buyer objections before they arise and photographs beautifully at inspection.' },
  { label: 'After a renovation', detail: 'New work needs the rest of the home painted to match the standard of what has just been completed.' },
  { label: 'Moving in', detail: "New home, your colours — a repaint before you move furniture in is the easiest time to do it." },
  { label: 'General maintenance', detail: "The paintwork is still doing its job, but it is time to refresh it before problems begin to develop." },
];

export default function ResidentialRepaintsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/services/residential-repaints" className="hover:underline">Residential Repaints</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Repaints Northern Beaches</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            A residential repaint done properly starts with a full assessment of what the house actually needs — not just a fresh coat of paint slapped over whatever problems exist underneath.
          </p>
        </div>
      </section>

      {/* When is it time to repaint */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-10 text-center">When is it time to repaint?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.label} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#1a1a2e] mb-2">{r.label}</h3>
                <p className="text-sm text-gray-600">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 text-center">What&apos;s included in a full repaint</h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10">
            A repaint is not just fresh paint on top of whatever is there. The quality of the result depends entirely on what happens before the paint goes on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">Preparation</h3>
              <ul className="space-y-3">
                {[
                  'Full assessment of surface condition',
                  'Washing and degreasing of all surfaces',
                  'Filling of holes, cracks, and imperfections',
                  'Sanding and feathering for smooth adhesion',
                  'Priming where required — bare timber, stains, repairs',
                  'Masking of all adjacent surfaces',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">Coverage</h3>
              <ul className="space-y-3">
                {[
                  'Full interior — walls, ceilings, trims',
                  'Full exterior — cladding, fascias, soffits, trims',
                  'Staged room-by-room work for occupied homes',
                  'Post-renovation paint to complete new work',
                  'Pre-sale repaints with colour advice',
                  'Final walkthrough and sign-off',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get a free residential repaint quote"
        body="We'll visit your home, assess the job properly, and give you a detailed, itemised quote. No guesswork."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      {/* Related */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/doors-trims-windows" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Doors, Trims &amp; Windows</Link>
          </div>
        </div>
      </section>
    </>
  );
}
