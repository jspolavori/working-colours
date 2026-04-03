import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Interior Painter Northern Beaches Sydney | Working Colours',
  description: 'Professional interior house painting on Sydney\'s Northern Beaches. Clean prep, quality finishes, minimal disruption. Request a free quote.',
};

const faqs = [
  {
    question: 'How long does an interior repaint take?',
    answer: 'A full interior repaint of an average three-bedroom home typically takes three to five days. This includes preparation, priming, cutting in, and rolling. Single rooms or partial jobs take less time.',
  },
  {
    question: 'Do I need to move my furniture?',
    answer: 'We ask that you move smaller items and clear the areas around walls where possible. Larger furniture can usually stay in the room — we\'ll protect everything with drop sheets and move items as we work through each area.',
  },
  {
    question: 'What sheen level should I choose for walls?',
    answer: 'For most living areas, bedrooms, and hallways, low-sheen is the standard recommendation. It hides surface imperfections better than flat and is easier to clean than flat paint. High-traffic areas and wet rooms may benefit from a more washable finish.',
  },
  {
    question: 'Can you paint just one room?',
    answer: "Yes. We're happy to quote single rooms, feature walls, or any part of your home. There's no job too small — we'll give you an honest assessment and a straightforward quote.",
  },
  {
    question: 'Why does fresh paint sometimes look patchy?',
    answer: 'Patchy results usually come down to insufficient coverage, skipping primer where it\'s needed, or applying paint over surfaces that weren\'t properly cleaned or sanded. We never skip preparation steps, which is why our finishes look consistent and last.',
  },
];

export default function InteriorPaintingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/services/interior-painting" className="hover:underline">Interior Painting</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interior Painting Northern Beaches</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            If you&apos;re planning to repaint the inside of your home, the difference between a good result and a great one comes down to preparation, product choice, and care. At Working Colours, we take all three seriously.
          </p>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">What we cover</h2>
            <ul className="space-y-3">
              {[
                'Walls and ceilings',
                'Doors and door frames',
                'Skirting boards and architraves',
                'Window frames and sills',
                'Built-in wardrobes',
                'Feature walls',
                'Stairwells and high ceilings',
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Our approach to interior painting</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every interior job starts with proper preparation — and that&apos;s where most of the work actually happens. Before any paint goes on, we fill holes and cracks, sand surfaces smooth, prime where needed, and mask everything that shouldn&apos;t be painted.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use quality products suited to each surface type and finish level. Low-sheen for walls, semi-gloss for trims, the right primer for the substrate. No cutting corners on materials.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work efficiently and cleanly. Drop sheets down throughout, tools cleaned at end of day, and your home left tidy at the end of every session.
            </p>
          </div>
        </div>
      </section>

      {/* Surface preparation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 text-center">Surface preparation is everything</h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10">
            The finish you see on the day is only as good as the surface underneath it. We never rush through preparation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '1', label: 'Fill', detail: 'Holes, cracks, and nail pops filled flush' },
              { step: '2', label: 'Sand', detail: 'Surfaces sanded smooth and feathered' },
              { step: '3', label: 'Prime', detail: 'Bare surfaces and stains primed correctly' },
              { step: '4', label: 'Mask', detail: 'Everything protected before any paint goes on' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">{item.step}</div>
                <h3 className="font-bold text-[#1a1a2e] mb-1">{item.label}</h3>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get a free interior painting quote"
        body="We'll visit your home, assess the job properly, and give you a detailed, itemised quote. No pressure, no obligation."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      {/* Related services */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
            <Link href="/services/doors-trims-windows" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Doors, Trims &amp; Windows</Link>
          </div>
        </div>
      </section>
    </>
  );
}
