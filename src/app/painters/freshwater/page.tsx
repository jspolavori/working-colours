import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Freshwater | Working Colours Northern Beaches',
  description: "Residential painting in Freshwater — interior, exterior, timber staining and deck work. Trusted by Freshwater homeowners. Free quote from your local Northern Beaches painter.",
};

const faqs = [
  {
    question: 'Do you paint Federation and interwar homes in Freshwater?',
    answer: "Yes. Freshwater has many homes from the Federation and interwar eras — often with decorative timber detailing, high ceilings, and original features worth preserving. We work carefully around these details and take the extra time preparation requires.",
  },
  {
    question: 'Can you match existing paint colours on an older home?',
    answer: "We can work from any colour reference — the existing paint, a chip, a manufacturer code, or a colour from a range you've chosen. Your supplier can usually create a match from any reference.",
  },
  {
    question: 'How disruptive is an interior repaint?',
    answer: "We work to minimise disruption — drop sheets throughout, furniture protected, surfaces cleaned at the end of each day. Most homeowners continue living in the house during an interior job.",
  },
  {
    question: 'Do you service all of Freshwater and the surrounding streets?',
    answer: "Yes. We work throughout Freshwater and the surrounding streets, including properties close to the headland and those further inland.",
  },
];

export default function FreshwaterPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Freshwater
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Freshwater</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Freshwater is a tight-knit suburb with a strong identity and a mix of housing that spans a century of building styles. Federation homes, interwar bungalows, brick veneer builds, and modern renovations sit side by side. Each has different needs — and we know how to handle all of them.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting Freshwater homes</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The older homes in Freshwater often have decorative timber elements — cornices, verandahs, eaves detailing — that reward careful preparation and precise application. We take our time with these details. The result is a finish that looks right for the style of the home.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For homeowners renovating or updating their interiors, we work efficiently and cleanly around busy households. For full exterior jobs, we use products suited to the coastal proximity of the area.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Freshwater</h2>
            <ul className="space-y-3">
              {[
                'Interior house painting',
                'Exterior house painting',
                'Timber restoration and staining',
                'Deck sanding and staining',
                'Doors, trims, and window frames',
                'Full residential repaints',
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
        heading="Get a free quote in Freshwater"
        body="We'll come out, assess your home, and give you a clear, detailed quote. No obligation."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/manly" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Manly</Link>
            <Link href="/painters/balgowlah" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Balgowlah</Link>
            <Link href="/painters/seaforth" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Seaforth</Link>
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
