import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Interior Painting Mistakes to Avoid | Working Colours',
  description: "The most common interior painting mistakes — from skipping primer to rushing between coats — and what to do instead for a finish that actually lasts.",
};

const faqs = [
  {
    question: 'How long should you wait between coats of interior paint?',
    answer: "Follow the product manufacturer's instructions — typically two to four hours for water-based paints under normal conditions. Wait until the first coat is fully dry to touch and no longer feels tacky before applying the second coat. Rushing this step leads to picking up the first coat and an uneven finish.",
  },
  {
    question: 'Why does my paint look patchy even after two coats?',
    answer: "Patchiness after two coats is usually caused by insufficient primer on new or repaired surfaces, an under-thinned or incorrectly tinted base coat, or inconsistent application technique — particularly at joins between cut-in edges and rolled areas. A third coat, applied consistently, will usually resolve it.",
  },
  {
    question: 'What happens if you paint over dirt or grease?',
    answer: "Paint over a contaminated surface will have poor adhesion. The paint film can delaminate, peel, or bubble — often not immediately, but within months of application. Always clean surfaces before painting.",
  },
  {
    question: 'Is it worth using cheap paint for interior rooms?',
    answer: "Cheap paint has lower pigment loading and binding resin content than premium paint. It typically requires more coats to achieve coverage, is less washable, and fades faster. The cost difference per litre rarely justifies the reduced performance over the life of the paint job.",
  },
];

export default function PaintingMistakesArticlePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Painting Tips
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interior Painting Mistakes to Avoid</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Interior painting looks straightforward — until it is not. These are the most common mistakes that lead to poor results, short-lived finishes, and jobs that need to be redone.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              {
                n: '01',
                title: 'Skipping primer',
                body: "Primer is not optional on bare surfaces, repaired areas, stained walls, or any surface that has been filled or patched. Paint applied directly to these areas without primer will absorb unevenly, show surface irregularities, and fail to adhere properly in affected areas. Apply the right primer for the surface type before topcoats.",
              },
              {
                n: '02',
                title: 'Painting over dirty or greasy surfaces',
                body: "Paint needs a clean surface to adhere to. Grease, kitchen residue, cleaning product residue, and dust all compromise adhesion. Wipe surfaces with a mild solution before painting in kitchens, bathrooms, and high-traffic areas. Allow to dry fully before painting.",
              },
              {
                n: '03',
                title: 'Skipping surface preparation',
                body: "Holes not filled, cracks not addressed, and surfaces not sanded will all be visible under the new paint. The finish is only as smooth as the surface underneath it. Take the time to fill, sand flat, and prime before painting.",
              },
              {
                n: '04',
                title: 'Wrong sheen level for the surface',
                body: "Using a high-sheen paint on a wall with imperfections highlights every flaw. Using flat paint in a bathroom or laundry leads to a surface that is impossible to clean and prone to mould. Match the sheen level to the surface: low-sheen for most walls, semi-gloss for trims and wet areas, flat for ceilings.",
              },
              {
                n: '05',
                title: 'Rushing between coats',
                body: "Applying a second coat before the first is fully dry leads to picking up the first coat with the roller, surface drag, and an uneven finish. Allow each coat to dry fully — per the manufacturer's instructions — before applying the next.",
              },
              {
                n: '06',
                title: 'Painting cut edges and rolled areas at different times',
                body: "Cutting in (painting edges with a brush) and rolling the main field of the wall should be done in the same session, while the paint is still wet. If the cut-in edges dry before the rolling is done, the overlap will be visible as a slight line or texture difference.",
              },
              {
                n: '07',
                title: 'Using a cheap roller',
                body: "A cheap roller sheds fibres into the paint film, leaves an uneven texture, and requires more coats to achieve coverage. Use a quality roller cover appropriate for the surface and paint type. It makes a visible difference.",
              },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-sm flex items-center justify-center">
                  {item.n}
                </div>
                <div>
                  <h2 className="font-bold text-[#1a1a2e] text-xl mb-2">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Leave it to the professionals"
        body="We do the preparation properly, use quality products, and take the time to get the finish right. Get a free quote today."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Interior Painting Service', href: '/services/interior-painting' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting Service</Link>
            <Link href="/blog/how-to-prepare-home-interior-repaint" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Preparing for a Repaint</Link>
            <Link href="/blog/how-to-choose-interior-paint-colours" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Choosing Interior Colours</Link>
          </div>
        </div>
      </section>
    </>
  );
}
