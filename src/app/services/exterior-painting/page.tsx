import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Exterior House Painting Northern Beaches Sydney | Working Colours',
  description:
    "Professional exterior house painting on Sydney's Northern Beaches. Coastal-grade preparation, quality products, and a finish that lasts. Free quotes.",
};

const faqs = [
  {
    question: 'How long does an exterior painting job take?',
    answer:
      'Most exterior jobs take two to five days depending on the size of the home, the condition of the existing paint, and the weather. We plan each job to make the most of suitable conditions.',
  },
  {
    question: 'How often should I repaint the exterior of my home?',
    answer:
      'On the Northern Beaches, quality exterior paintwork typically lasts eight to twelve years on sheltered surfaces. Salt-exposed and north-facing surfaces may need attention every five to eight years. An annual check helps catch issues before they become expensive.',
  },
  {
    question: 'What is the best time of year for exterior painting?',
    answer:
      'Spring and autumn are ideal — moderate temperatures, lower humidity, and less chance of rain. We avoid painting in very high heat, after heavy rain, or in strong wind conditions.',
  },
  {
    question: 'Do I need to be home while you paint the exterior?',
    answer:
      "Generally, no. Most exterior jobs can be completed without you being home the entire time. We coordinate access and check in at key milestones.",
  },
  {
    question: 'Can you paint a multi-storey home?',
    answer:
      "Yes. We're equipped for multi-storey homes and have the appropriate equipment for working safely at height.",
  },
];

export default function ExteriorPaintingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/services/exterior-painting" className="hover:underline">Exterior Painting</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Exterior House Painting Northern Beaches
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Your home&apos;s exterior takes a beating — UV exposure, salt air, coastal humidity,
            rain, and wind all work against the paintwork year-round. On the Northern Beaches, those
            conditions are more demanding than most.
          </p>
        </div>
      </section>

      {/* What we cover + approach */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">What we cover</h2>
            <ul className="space-y-3">
              {[
                'Rendered and bagged walls',
                'Weatherboard and timber cladding',
                'Fascias, bargeboards, and eaves',
                'Window frames and sills',
                'Downpipes and gutters',
                'Garages and sheds',
                'Feature brickwork and retaining walls',
                'Coastal-exposed surfaces and salt-affected areas',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 text-[#0066CC] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">
              Why exterior preparation is everything
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              The most common reason an exterior paint job fails early is insufficient preparation.
              Paint applied over a dirty, chalky, or poorly adhered surface will fail — regardless
              of how premium the product is.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              Our process starts with a thorough pressure wash to remove salt, mould, dirt, and
              loose paint. We then scrape and sand back any flaking areas, fill cracks and gaps,
              prime bare and porous surfaces, and mask everything that shouldn&apos;t be painted.
            </p>
            <p className="text-[#6b7280] leading-relaxed">
              Only then does the first coat go on. This is what gives you a result that holds up
              in the coastal environment for years.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation steps */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 text-center">
            Our exterior preparation process
          </h2>
          <p className="text-[#6b7280] text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Every step matters. Rushing through preparation is where problems appear two years down
            the track.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { step: '1', label: 'Pressure Wash', detail: 'Remove salt, mould, dirt, and chalk' },
              { step: '2', label: 'Scrape & Sand', detail: 'Remove all loose and flaking paint' },
              { step: '3', label: 'Fill & Repair', detail: 'Cracks, gaps, and damaged areas addressed' },
              { step: '4', label: 'Prime', detail: 'Bare surfaces and exposed timber primed' },
              { step: '5', label: 'Mask', detail: 'Windows, trims, and hardware protected' },
              { step: '6', label: 'Apply', detail: 'Quality coastal-grade product applied evenly' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="w-10 h-10 rounded-full bg-[#0066CC] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-[#1a1a2e] mb-1">{item.label}</h3>
                <p className="text-sm text-[#6b7280]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coastal products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">
            Products suited to the Northern Beaches environment
          </h2>
          <p className="text-[#6b7280] leading-relaxed mb-4">
            Not all exterior paints perform equally in coastal conditions. On the Northern Beaches,
            product selection matters more than it does inland. We work with paints formulated for
            flexibility (to handle thermal movement), UV resistance, and breathability on rendered
            and masonry surfaces.
          </p>
          <p className="text-[#6b7280] leading-relaxed mb-4">
            For salt-exposed surfaces and timber, we select products with strong moisture resistance
            and proven coastal performance. We&apos;ll advise on the right product for your specific
            surfaces and exposure level — not just the default option.
          </p>
          <p className="text-[#6b7280] leading-relaxed">
            We&apos;d rather spend more time selecting the right product upfront than have you calling
            us back in three years with problems.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Get a free exterior painting quote"
        body="We'll visit your property, assess the condition of the surfaces, and provide a detailed, itemised quote — no vague estimates."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
        trustLine="Northern Beaches locals. Fully licensed and insured."
      />

      <FAQSection faqs={faqs} heading="Exterior Painting FAQs" />

      {/* Related services */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/timber-staining"
              className="bg-[#f8f9fa] hover:bg-[#0066CC] hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Timber Staining &amp; Restoration
            </Link>
            <Link
              href="/services/deck-staining"
              className="bg-[#f8f9fa] hover:bg-[#0066CC] hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Deck Staining &amp; Refinishing
            </Link>
            <Link
              href="/services/interior-painting"
              className="bg-[#f8f9fa] hover:bg-[#0066CC] hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Interior House Painting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
