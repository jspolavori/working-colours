import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Collaroy Plateau | Working Colours Northern Beaches',
  description: "Residential painting in Collaroy Plateau — interior, exterior and timber work for elevated family homes with wide streets and coastal proximity. Free quote.",
};

const faqs = [
  {
    question: 'Is Collaroy Plateau different to coastal Collaroy in terms of painting needs?',
    answer: "Collaroy Plateau is more sheltered than beachfront Collaroy, but still close enough to the coast that salt air is a factor — particularly for homes on the eastern aspect. We recommend coastal-grade exterior products for all properties in the area.",
  },
  {
    question: 'My home has significant concrete or brick — can you paint those surfaces?',
    answer: "Yes. Brick, rendered concrete, and masonry are surfaces we paint regularly. Correct preparation — including cleaning, etching where needed, and the right primer — is essential for adhesion and durability.",
  },
  {
    question: 'How long does an exterior paint job take on an average home?',
    answer: "An average single-storey home typically takes two to three days. A two-storey home can take three to five days depending on the extent of the work and surface condition.",
  },
  {
    question: 'Do you service Collaroy Plateau Heights as well?',
    answer: "Yes — we service all streets throughout the Collaroy Plateau and surrounding elevated areas.",
  },
];

export default function CollaroyPlateauPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Collaroy Plateau
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Collaroy Plateau</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Collaroy Plateau sits elevated above the beachfront suburb of Collaroy — wide streets, family homes on good-sized blocks, and a community feel that&apos;s been established for decades. Proximity to the coast means exterior paint still needs to be chosen with the environment in mind.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Residential painting in Collaroy Plateau</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Collaroy Plateau is a well-established suburb with a mix of brick, brick veneer, and weatherboard homes — many of them built in the 1960s to 1980s and due for a thorough update. Interior repaints are common, as are full exterior refreshes where the original paint has seen better days.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work throughout the plateau and give every home the same attention — proper surface preparation, quality products, and a clean, professional result.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Collaroy Plateau</h2>
            <ul className="space-y-3">
              {[
                'Interior painting',
                'Exterior painting — brick, render, weatherboard',
                'Timber staining and restoration',
                'Deck preparation and staining',
                'Doors, trims, and window frames',
                'Full and partial residential repaints',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get a free quote in Collaroy Plateau"
        body="We visit in person, assess the job properly, and provide a clear, detailed quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/collaroy" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Collaroy</Link>
            <Link href="/painters/dee-why" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Dee Why</Link>
            <Link href="/painters/cromer" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Cromer</Link>
            <Link href="/painters/narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Narrabeen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
