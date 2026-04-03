import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Best Exterior Paint for Coastal Homes in Sydney | Working Colours',
  description: "How to choose exterior paint for a coastal home in Sydney — what makes paint fail faster near the ocean and what to look for in a product that lasts.",
};

const faqs = [
  {
    question: 'Does it matter which brand of paint I use on a coastal home?',
    answer: "Brand matters less than product specification. Look for paints with high binding resin content, stated UV resistance, flexibility, and mould inhibitors. Most major Australian manufacturers offer a premium exterior range with these properties. Your painter should be able to advise on the right product for your surface and environment.",
  },
  {
    question: 'How long will exterior paint last on a beachfront property?',
    answer: "On a well-prepared surface using a quality product, a beachfront exterior paint job can last seven to ten years. The variables are: how well the surface was prepared, the quality of the product, and how exposed the home is. North-facing and ocean-facing surfaces tend to fade faster than sheltered walls.",
  },
  {
    question: 'Should I use a primer on a coastal exterior?',
    answer: "Yes — particularly on bare or weathered surfaces. Primer improves adhesion and provides an extra layer of protection before the topcoat. On coastal homes, skipping primer is a false economy.",
  },
  {
    question: 'Can dark colours be used on a coastal home?',
    answer: "Yes, but darker colours absorb more heat and can fade faster in high UV environments. This is more of a factor for south-facing walls and sheltered areas than for the primary street-facing facade. A good quality paint with UV-stable pigments will hold colour better than a cheaper equivalent.",
  },
];

export default function CoastalPaintArticlePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Coastal Paint Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Exterior Paint for Coastal Homes in Sydney</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Coastal conditions accelerate the breakdown of exterior paint faster than most homeowners expect. The right product choice — and proper preparation — makes the difference between a paint job that holds up and one that starts failing within a few years.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Why coastal conditions are hard on exterior paint</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sydney&apos;s Northern Beaches is one of the more demanding environments for exterior paint in Australia. Three factors combine to accelerate surface degradation:
          </p>
          <div className="space-y-4 mb-8">
            {[
              { label: 'Salt air', detail: 'Salt deposits on surfaces degrade paint film and accelerate corrosion on metal surfaces. Homes within a few kilometres of the ocean receive regular salt deposits, particularly after easterly winds.' },
              { label: 'UV intensity', detail: 'Sydney receives high UV year-round, and the Northern Beaches — with little shade from surrounding structures — amplifies this. UV breaks down paint binder systems and causes fading and chalking.' },
              { label: 'Humidity and moisture', detail: 'High humidity combined with salt moisture creates conditions where mould and algae grow readily on exterior surfaces. Products without adequate mould inhibitors will show growth within a few years of application.' },
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

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What to look for in a coastal exterior paint</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'High binder content', detail: 'The binder is what holds the paint film together and to the surface. Higher quality paints use more durable binder systems that maintain adhesion under UV and moisture stress.' },
              { title: 'UV-stable pigments', detail: 'Cheap paints use lower-grade pigments that fade quickly in strong sunlight. Look for products that specify UV stability or are described as fade-resistant.' },
              { title: 'Mould and algae inhibitors', detail: "Coastal homes need products with built-in mould resistance. This is a stated property — if it's not mentioned in the product data sheet, assume it's minimal." },
              { title: 'Flexibility', detail: "Surfaces expand and contract with temperature changes. A flexible paint film moves with the substrate rather than cracking or peeling away from it." },
              { title: 'Breathability', detail: "Particularly important for masonry and render — the surface needs to allow moisture vapour to escape, or you risk blistering and peeling from trapped moisture." },
              { title: 'Correct finish level', detail: "Matt and low-sheen finishes are common for exterior walls. Higher sheen levels on trims are more durable and easier to clean but may look harsh on some surfaces." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-[#1a1a2e] mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Preparation matters more than product</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The single biggest factor in how long an exterior paint job lasts is surface preparation — not product choice. The best paint in the world applied over a dirty, chalky, or inadequately primed surface will fail early.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before any paint goes on a coastal exterior, surfaces should be pressure washed to remove salt deposits, dirt, and organic growth. Mould should be treated. Loose and peeling paint should be removed. Bare surfaces should be primed with an appropriate primer for the substrate type.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is where a lot of cheaper quotes cut corners — and where the difference between a seven-year paint job and a two-year one is made.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Get your coastal home painted properly"
        body="We use quality products suited to the Northern Beaches environment and prepare every surface before paint goes on."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Exterior Painting Service', href: '/services/exterior-painting' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting Service</Link>
            <Link href="/services/timber-staining" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Timber Staining</Link>
            <Link href="/blog/how-often-repaint-house-sydney" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How Often to Repaint</Link>
          </div>
        </div>
      </section>
    </>
  );
}
