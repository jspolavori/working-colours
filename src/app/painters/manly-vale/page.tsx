import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Manly Vale | Working Colours Painting Services',
  description: 'House painting in Manly Vale. Interior and exterior repaints, timber staining, pre-sale preparation. Northern Beaches specialists. Get a free quote today.',
};

const faqs = [
  {
    question: 'What types of homes do you paint in Manly Vale?',
    answer: 'Manly Vale has a good mix of brick veneer and fibro homes from the 1960s and 70s, alongside more recently renovated properties. We work across all of them — interior repaints, exterior overhauls, and everything in between.',
  },
  {
    question: 'Can you help prepare my Manly Vale home for sale?',
    answer: 'Yes. Pre-sale repaints are a significant part of our work. A clean, fresh paint job removes buyer objections and improves first impressions. We can work to your auction timeline and advise on colour selection.',
  },
  {
    question: 'Do you paint rendered homes in Manly Vale?',
    answer: 'Yes. Rendered exteriors need the right paint system and correct preparation to hold well. We assess the condition of the render before painting and recommend the right approach.',
  },
  {
    question: 'How long does an interior repaint take in Manly Vale?',
    answer: 'A standard 3–4 bedroom home interior typically takes 3–5 days depending on the scope — number of rooms, ceiling heights, and condition of existing surfaces. We give you a clear timeline before we start.',
  },
];

export default function ManlyValePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Manly Vale
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Manly Vale</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Manly Vale is a well-established residential suburb with a strong community feel and solid housing stock. Whether you&apos;re refreshing the interior, repainting the exterior, or getting the home ready to sell — we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/contact" className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors">Get a Free Quote</Link>
            <a href="tel:0434030222" className="border-2 border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-colors">0434 030 222</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Manly Vale</h2>
            <ul className="space-y-2">
              {[
                { label: 'Interior house painting', href: '/services/interior-painting' },
                { label: 'Exterior house painting', href: '/services/exterior-painting' },
                { label: 'Timber staining and restoration', href: '/services/timber-staining' },
                { label: 'Deck staining and refinishing', href: '/services/deck-staining' },
                { label: 'Doors, trims, windows and louvers', href: '/services/doors-trims-windows' },
                { label: 'Residential repaints', href: '/services/residential-repaints' },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-blue-600 hover:underline text-sm font-medium">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Manly Vale</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Manly Vale sits just inland from Manly and Seaforth, with easy access to both beaches and the city. The suburb has a mix of owner-occupiers who take pride in their homes and investors looking to maximise rental appeal.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We provide proper quotes — not rough estimates over the phone. We visit the property, assess the scope, and give you a written quote that covers everything. No surprises on the day.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Manly Vale"
        body="Professional residential painters serving Manly Vale and the surrounding Northern Beaches."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
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
