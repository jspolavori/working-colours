import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Elanora Heights | Working Colours Northern Beaches',
  description: "Residential painting in Elanora Heights — interior, exterior and timber work for hilltop homes with bushland surroundings. Free quote from Working Colours.",
};

const faqs = [
  {
    question: 'Does the elevated position affect painting in Elanora Heights?',
    answer: "Higher elevation means more wind exposure and greater UV intensity on some aspects. We take this into account when recommending products, particularly for exterior surfaces that face north or west.",
  },
  {
    question: 'Do you work on older homes in Elanora Heights?',
    answer: "Yes. Elanora Heights has a mix of older brick homes and more recent builds. Older brick homes often need attention to mortar, expansion joints, and surface preparation before painting — we handle all of this.",
  },
  {
    question: 'What is the best way to get a quote?',
    answer: "Contact us via the form on our website or by phone. We visit your property in person before quoting — we don't provide estimates sight unseen.",
  },
  {
    question: 'Can you work around established gardens?',
    answer: "Yes. We work carefully around gardens and landscaping, using protection where needed. We may ask that overhanging branches are trimmed if they prevent access — we flag this at the quote stage.",
  },
];

export default function ElanoraHeightsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Elanora Heights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Elanora Heights</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Elanora Heights sits on elevated land above Narrabeen — a quiet, bushland-surrounded suburb with long views and a mix of older brick homes and more recent development. The elevated position and leafy surroundings create a specific environment for properties here.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Elanora Heights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The housing in Elanora Heights ranges from established brick homes on good blocks through to more recently built properties. The surrounding bushland contributes to surface contamination and moisture, and homes on the ridge line face more wind exposure than lower-lying suburbs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We factor all of this into how we prepare surfaces and what products we recommend. Getting it right at the preparation stage is what makes paint last in this environment.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Elanora Heights</h2>
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
        heading="Get a free quote in Elanora Heights"
        body="We visit your property in person, assess the job, and give you a detailed quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Narrabeen</Link>
            <Link href="/painters/north-narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">North Narrabeen</Link>
            <Link href="/painters/warriewood" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Warriewood</Link>
            <Link href="/painters/mona-vale" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Mona Vale</Link>
          </div>
        </div>
      </section>
    </>
  );
}
