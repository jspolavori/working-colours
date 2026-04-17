import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How to Choose Interior Paint Colours for Your Home | Working Colours',
  description: "Practical advice on choosing interior paint colours — test patches, lighting at different times of day, warm vs cool tones, open-plan spaces, and feature walls.",
};

const faqs = [
  {
    question: 'How many test patches should I try before committing to a colour?',
    answer: "Test two to four colours per room. Apply each patch at least 30 cm × 30 cm — small patches are hard to assess accurately. Live with the patches for a few days across different lighting conditions before making a decision.",
  },
  {
    question: 'Should every room be a different colour?',
    answer: "Not necessarily. Using a consistent main colour throughout a home with accent variation creates a cohesive look that feels calm and connected — particularly useful in open-plan homes. That said, a different colour in a bedroom or a feature wall in a living room can add interest without disrupting the overall flow.",
  },
  {
    question: "My home gets very little natural light. What colours should I use?",
    answer: "Warm whites and off-whites — those with yellow or beige undertones rather than cool grey undertones — work better in low-light rooms. Avoid cold blues and greys, which can feel stark and flat without natural light to warm them. Consider using a slightly higher sheen level to help reflect the available light.",
  },
  {
    question: 'Does paint colour affect how a room feels?',
    answer: "Yes. Lighter colours make a room feel larger and more open. Darker colours create a sense of intimacy and warmth. Warm tones (yellows, ochres, terracottas) feel cosy. Cool tones (blues, greens, greys) feel calm and restful. These are general rules — test patches in your specific space are the most reliable guide.",
  },
];

export default function InteriorColoursArticlePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Colour Selection
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Choose Interior Paint Colours for Your Home</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Choosing paint colours is one of the most common points of stress for homeowners planning a repaint. These practical steps will help you make confident choices and avoid the most common mistakes.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Step 1: Always test with patches</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Colour chips and phone photos do not accurately represent how a colour will look on your walls. The only reliable way to assess a colour is to paint a test patch directly on the wall — in the room where it will be used, using the actual paint you plan to use.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Paint the patch at least 30 cm × 30 cm, preferably larger. A small patch makes it very hard to assess how the colour will read across a full wall. Let it dry completely — wet paint looks significantly different to dry paint — and assess it across different times of day.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Step 2: Assess in different light</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The same colour can look strikingly different at 8am in morning light compared to 6pm in afternoon sun, or under your evening artificial lighting. A colour that looks warm and neutral in daylight may look yellow or green under incandescent light.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Check your test patch in the morning, at midday, in the late afternoon, and at night with your standard lighting turned on. If it reads well in all conditions, it is a good choice for that room.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Step 3: Understand warm vs cool undertones</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every paint colour has an undertone — usually warm (yellow, orange, red) or cool (blue, green, purple). This matters most with neutral colours. A white that appears clean and crisp in the store may look distinctly yellow or pink in your specific room, depending on the light and surrounding surfaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-900 mb-2">Warm tones</h3>
              <p className="text-amber-800 text-sm leading-relaxed">Work well in south-facing rooms, rooms with little natural light, and spaces where you want a cosy, welcoming feel. Common in living areas and bedrooms.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-2">Cool tones</h3>
              <p className="text-blue-800 text-sm leading-relaxed">Work well in north-facing rooms, bathrooms, home offices, and spaces where you want a calm, restful atmosphere. Can feel stark in low light without warm accessories to balance.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Step 4: Open-plan spaces</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In open-plan living areas, using the same colour for walls throughout creates a cohesive, spacious feel. If you want variation, consider keeping the ceiling and trim consistent and changing only the wall colour in defined zones.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Drastic colour changes between connected spaces — particularly where there is no physical break like a door or wall — can make an open-plan home feel disjointed and smaller than it is.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Step 5: Feature walls</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A feature wall can add depth and interest to a room when done well. The most common approach is to paint the wall behind the primary focal point — the bed head wall in a bedroom, the fireplace wall in a living room, or the TV wall in a media room.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Avoid feature walls that are adjacent to windows or doors — they draw attention to structural interruptions rather than the wall itself. Choose a colour that is a deeper or more saturated version of the room&apos;s main colour, or a complementary tone, rather than something completely unrelated.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Ready to repaint your interior?"
        body="We bring experience to every interior job — including advice on colour and finish selection if you'd like a second opinion."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Interior Painting Service', href: '/services/interior-painting' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting Service</Link>
            <Link href="/blog/how-to-prepare-home-interior-repaint" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How to Prepare for a Repaint</Link>
            <Link href="/blog/interior-painting-mistakes-to-avoid" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Painting Mistakes to Avoid</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
