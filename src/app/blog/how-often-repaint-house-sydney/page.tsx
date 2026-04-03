import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How Often Should You Repaint Your House in Sydney? | Working Colours',
  description: "Interior and exterior paint have different lifespans. This guide covers the signs it's time to repaint and the factors that affect how long paint lasts in Sydney.",
};

const faqs = [
  {
    question: "How do I know if my exterior paint just looks old or has actually failed?",
    answer: "Run your hand along the surface. If it comes away with a chalky residue, the paint has oxidised and is beginning to fail. Visible cracking, peeling, or areas where paint is pulling away from the surface are clear signs of failure that need attention.",
  },
  {
    question: "Can I repaint over existing paint or does it need to be stripped?",
    answer: "In most cases, you can repaint over existing paint — provided it is properly prepared. Loose and peeling paint must be removed. Surfaces must be cleaned, treated where needed, and primed where bare. Painting over poorly adhering paint is one of the most common causes of early paint failure.",
  },
  {
    question: "What happens if I leave exterior paint too long?",
    answer: "Failed exterior paint exposes the substrate underneath — whether that is timber, render, masonry, or fibro — to moisture. This can lead to rot in timber, deterioration in render, and significant surface damage that is expensive to repair. Maintaining paint on time is far cheaper than remediation.",
  },
  {
    question: "Do all rooms in a house need to be repainted at the same time?",
    answer: "No. High-traffic areas — hallways, kitchens, bathrooms — typically need attention more frequently than low-traffic rooms like spare bedrooms. A professional painter can assess each area and advise on what genuinely needs doing versus what can wait.",
  },
];

export default function HowOftenRepaintArticlePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Repaint Schedule
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Often Should You Repaint Your House in Sydney?</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Interior and exterior paint have different lifespans, and the environment plays a big role. Here is a practical guide to how long paint typically lasts and the signs that it is time to act.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Exterior: every 7–12 years (or sooner on the coast)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A quality exterior paint job on a well-maintained home should last between seven and twelve years under typical Sydney conditions. On the Northern Beaches — where salt air, UV, and coastal humidity are factors — that range often shifts to five to ten years for exposed surfaces.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            This is a guideline, not a fixed rule. Some homes in exposed positions show signs of paint failure in four to five years. Others, particularly those on the sheltered western aspects, hold up for over a decade.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Signs your exterior needs repainting</h2>
          <div className="space-y-3 mb-8">
            {[
              'Chalking — a powdery residue when you run your hand across the surface',
              'Cracking or flaking paint, particularly on timber and rendered surfaces',
              'Visible fading or colour change, especially on north-facing walls',
              'Peeling paint on window frames, eaves, or fascias',
              'Mould or algae growth on exterior surfaces',
              'Paint pulling away from joins or cracks',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Interior: every 7–10 years for most rooms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Interior paint generally lasts longer than exterior because it is not exposed to weather, UV, or moisture. Most rooms in an average home will look good for seven to ten years with quality paint and reasonable care.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            High-traffic areas are the exception. Hallways, kitchens, and family rooms see more marks, scrubbing, and general wear. These areas often benefit from attention every five to seven years. Bathrooms and laundries, with their moisture exposure, should use a washable or semi-gloss finish and may need repainting earlier.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#1a1a2e] mb-2">Northern Beaches note</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The coastal environment on the Northern Beaches means exterior paint maintenance is more important — and more frequent — than in sheltered suburban areas. Letting exterior paint deteriorate too far means more extensive and expensive preparation work when the time comes to repaint.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What extends paint life</h2>
          <div className="space-y-3 mb-4">
            {[
              'Quality paint applied by a professional',
              'Thorough surface preparation before painting',
              'Correct primer use, particularly on bare or repaired surfaces',
              'Two coats of topcoat rather than one heavy coat',
              'Addressing minor cracks and damage before they allow moisture in',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Time for a repaint?"
        body="We assess your home honestly and advise on what needs doing now versus what can wait. Free, no-obligation quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Residential Repaints', href: '/services/residential-repaints' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
          </div>
        </div>
      </section>
    </>
  );
}
