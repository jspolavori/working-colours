import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Timber Staining Northern Beaches Sydney | Working Colours',
  description:
    "Professional timber staining and restoration on Sydney's Northern Beaches. Revive weathered, grey, or peeling timber. Free quotes.",
};

const faqs = [
  {
    question: 'Can grey and weathered timber be restored with staining?',
    answer:
      'In most cases, yes. Grey and weathered timber can be cleaned, sanded back, and treated to restore its natural colour before staining. However, if the timber has structural damage, deep checking, or significant rot, we will advise you honestly on whether restoration is viable.',
  },
  {
    question: 'How long does timber staining last?',
    answer:
      'On exposed Northern Beaches surfaces, most oil and semi-transparent stains will last one to three years before needing a maintenance coat. Solid coatings last longer but require more preparation when it comes time to redo them.',
  },
  {
    question: 'What is the difference between staining and painting timber?',
    answer:
      'Staining penetrates into the timber and allows the grain and natural character to show through. Paint sits on top of the surface and forms a solid film. Both can work well depending on the timber type, exposure, and the look you want.',
  },
  {
    question: 'Can you work with old or damaged timber surfaces?',
    answer:
      "Yes. We assess each surface honestly before starting. Minor damage and weathering can usually be addressed. Where timber is beyond restoration, we'll tell you clearly rather than just paint over it.",
  },
  {
    question: 'Do you treat mould on timber before staining?',
    answer:
      'Yes. Any mould or fungal growth is treated and cleaned before staining or coating. Applying product over mould is a short-term fix that fails quickly — proper treatment is essential.',
  },
];

export default function TimberStainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/services/timber-staining" className="hover:underline">Timber Staining</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Timber Staining and Restoration Northern Beaches
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Timber is one of the most beautiful — and most demanding — materials on a Northern
            Beaches home. Left unprotected, coastal UV and moisture will grey and degrade it fast.
            The right product and proper preparation can restore and protect it for years.
          </p>
        </div>
      </section>

      {/* Surfaces + why it matters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Surfaces we treat</h2>
            <ul className="space-y-3">
              {[
                'Timber cladding and weatherboard',
                'Fences and gates',
                'Pergolas and outdoor structures',
                'Window frames and door frames',
                'Fascias and eaves',
                'Garage doors (timber)',
                'Screens and louvres',
                'Retaining walls and garden structures',
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
              Why timber on the Northern Beaches needs attention
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              The combination of UV, salt air, and moisture on the Northern Beaches accelerates
              timber degradation faster than almost anywhere else in Sydney. Timber that looks fine
              in winter can look visibly greyed and rough by summer if the coating has failed.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              The key is not just applying a stain — it&apos;s preparing the surface properly first.
              Grey, oxidised, or dirty timber won&apos;t absorb a new product well. We clean, sand,
              and treat mould before any product goes on.
            </p>
            <p className="text-[#6b7280] leading-relaxed">
              The result is a product that penetrates properly, provides real protection, and gives
              you a finish that actually lasts.
            </p>
          </div>
        </div>
      </section>

      {/* Products explained */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 text-center">
            Choosing the right product
          </h2>
          <p className="text-[#6b7280] text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Not all timber stains and coatings are equal. The right choice depends on the timber
            species, exposure level, and the look you want.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Penetrating Oils',
                desc: 'Soak deep into the timber to nourish and protect from within. Allow the natural grain to show. Ideal for decks, cladding, and furniture. Require more frequent maintenance but are easy to recoat.',
              },
              {
                title: 'Semi-Transparent Stains',
                desc: 'Let the timber grain show while adding UV and moisture protection. Good balance between aesthetics and durability on Northern Beaches surfaces.',
              },
              {
                title: 'Solid Colour Coatings',
                desc: 'Film-forming products that provide maximum protection and coverage. Ideal for painted or very weathered surfaces. Longer maintenance intervals but require more preparation when recoating.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#1a1a2e] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get a free timber staining quote"
        body="We'll assess your timber surfaces honestly and recommend the right approach — restoration where possible, honest advice where it isn't."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
        trustLine="Northern Beaches locals. Fully licensed and insured."
      />

      <FAQSection faqs={faqs} heading="Timber Staining FAQs" />

      {/* Related services */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/deck-staining"
              className="bg-[#f8f9fa] hover:bg-[#0066CC] hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Deck Staining &amp; Refinishing
            </Link>
            <Link
              href="/services/exterior-painting"
              className="bg-[#f8f9fa] hover:bg-[#0066CC] hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Exterior Painting
            </Link>
            <Link
              href="/services/doors-trims-windows"
              className="bg-[#f8f9fa] hover:bg-[#0066CC] hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Doors, Trims &amp; Windows
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
