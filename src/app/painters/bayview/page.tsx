import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Bayview | Working Colours Northern Beaches',
  description: "Premium residential painting in Bayview — exterior, interior, timber and deck work for prestige Pittwater waterfront and hillside homes. Free quote.",
};

const faqs = [
  {
    question: 'Do you work on prestige homes in Bayview?',
    answer: "Yes. We work on a range of properties in Bayview — from established family homes to prestige waterfront properties. We approach every job with the same care and attention to detail regardless of size.",
  },
  {
    question: 'How does the Pittwater environment affect paint?',
    answer: "Waterfront and near-waterfront properties on Pittwater are exposed to salt water, high humidity, and UV year-round. Products suited to this environment — with strong binder systems, mould resistance, and UV stability — are essential for long-lasting results.",
  },
  {
    question: 'Can you restore badly weathered timber on a waterfront property?',
    answer: "We can assess weathered timber and advise on whether restoration is viable or whether replacement is a better long-term option. For timber that can be restored, we sand, treat, and re-coat using quality products suited to the waterfront environment.",
  },
  {
    question: 'Do you travel to Bayview for quotes?',
    answer: "Yes. We visit Bayview for quotes. Contact us to arrange a time and we'll come out, walk through the property, and give you a detailed recommendation.",
  },
];

export default function BayviewPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Bayview
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Bayview</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Bayview is a quiet, exclusive suburb on Pittwater — home to waterfront properties, boating lifestyle residences, and prestige homes set among native bushland. Properties here are well-maintained and owners expect a high standard of workmanship.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting in Bayview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bayview properties tend to be large, often multi-level, with significant timber elements — decks, jetties, pergolas, weatherboard, and extensive exterior surfaces. The Pittwater waterfront environment is demanding on all of these, and the quality of preparation and product selection matters enormously.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work on Bayview properties with the same approach we take everywhere: surface preparation first, quality products suited to the environment, and a finish that holds up to scrutiny.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Bayview</h2>
            <ul className="space-y-3">
              {[
                'Exterior painting — weatherboard, render, cladding',
                'Interior painting',
                'Timber staining and restoration',
                'Deck and jetty preparation and staining',
                'Pergolas and outdoor structures',
                'Doors, trims, and window frames',
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
        heading="Get a free quote in Bayview"
        body="We come out to your property, assess what it needs, and give you a detailed quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/newport" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Newport</Link>
            <Link href="/painters/mona-vale" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Mona Vale</Link>
            <Link href="/painters/avalon" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Avalon Beach</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
