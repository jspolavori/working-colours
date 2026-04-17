import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How to Prepare Your Home for an Interior Repaint | Working Colours',
  description: "What homeowners need to do before the painters arrive — and what the painter handles. A practical guide to getting ready for an interior repaint.",
};

const faqs = [
  {
    question: 'Do I need to clean the walls before the painters arrive?',
    answer: "You do not need to clean the walls yourself — we will handle surface preparation as part of the job. However, if walls are particularly greasy (around the kitchen, for example) or heavily marked, wiping them down beforehand helps.",
  },
  {
    question: 'Can I stay at home while the interior is being painted?',
    answer: "Yes. Most homeowners continue living in the house during an interior repaint. We work room by room, minimise disruption, and use drop sheets and low-odour products where possible. Good ventilation — opening windows — helps with drying and fumes.",
  },
  {
    question: 'What should I do with curtains, blinds, and artwork?',
    answer: "Remove artwork, curtains, and blinds from any rooms being painted. We will work around window frames and handles but need clear access to the walls and ceiling edges. Taking these down beforehand makes the job go more smoothly.",
  },
  {
    question: 'Do children and pets need to leave the house?',
    answer: "It is a good idea to keep children and pets out of rooms that are actively being painted or where paint is still wet. Wet paint and curious animals do not mix well. Modern paints are low in volatile organic compounds (VOCs), so the risk from fumes is lower than with older products, but good ventilation is still advised.",
  },
];

export default function PrepareForRepaintArticlePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Interior Preparation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Prepare Your Home for an Interior Repaint</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            A little preparation from the homeowner before the painters arrive makes a meaningful difference to how smoothly the job goes. Here is what needs to happen — and what we handle ourselves.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What you need to do</h2>

          <div className="space-y-6 mb-10">
            {[
              {
                title: 'Clear and move smaller items',
                body: "Move small furniture, ornaments, lamps, books, and anything else on shelves or close to walls away from the painting areas. We protect everything with drop sheets, but clear access to the walls makes the job faster and reduces the risk of anything being accidentally moved or marked.",
              },
              {
                title: 'Remove artwork, mirrors, and wall hangings',
                body: "Take down anything hanging on the walls. We paint right up to and around hooks and fixings, and it is much easier — and safer — to work with bare walls. Patch any holes you want filled at the same time.",
              },
              {
                title: 'Take down curtains and blinds',
                body: "Remove curtains, blinds, and any window treatments from rooms being painted. Window frames and trims are often part of an interior repaint, and access matters.",
              },
              {
                title: 'Arrange somewhere for pets',
                body: "Dogs and cats in a room being painted is a practical problem — wet paint, tools, and open paint tins do not mix well with animals. Keep pets out of work areas and consider arranging somewhere else for them to be during the main painting days.",
              },
              {
                title: 'Ventilate',
                body: "Open windows where possible on painting days. Modern low-VOC paints are significantly better than older products, but ventilation helps with drying time and removes any residual odour more quickly.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we handle</h2>
          <div className="space-y-3 mb-8">
            {[
              'Laying drop sheets throughout all work areas',
              'Moving larger furniture away from walls',
              'Masking — protecting floors, architraves, windows, power points, and light switches',
              'Surface preparation — filling holes and cracks, sanding, priming',
              'Cleaning surfaces where needed before painting',
              'Daily tidy-up at the end of each working day',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-[#1a1a2e] mb-2">A note on large furniture</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We move large furniture — sofas, dining tables, beds — as we work through each room. If there are items you would prefer not moved, let us know before the job starts and we will work around them where possible. Items on wheels are easiest to manage. Very heavy or delicate pieces may require some homeowner input on the day.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Book your interior repaint"
        body="We'll walk you through everything before the job starts so you know exactly what to expect."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Interior Painting Service', href: '/services/interior-painting' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting Service</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
            <Link href="/blog/how-to-choose-interior-paint-colours" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Choosing Interior Paint Colours</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
