import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Curl Curl | Working Colours Painting Services',
  description: 'Professional house painting in Curl Curl. Coastal home specialists — exterior repaints, interior painting, timber staining. Free quote from your local Northern Beaches painter.',
};

const faqs = [
  {
    question: 'How does the coastal environment affect homes in Curl Curl?',
    answer: 'Curl Curl sits between Dee Why and Freshwater with direct ocean exposure. Salt air accelerates paint breakdown, especially on surfaces facing the prevailing wind. We use products rated for high coastal environments and prepare surfaces thoroughly to give paint the best possible hold.',
  },
  {
    question: 'My Curl Curl home has original fibro cladding — can you paint it?',
    answer: 'Yes. Fibro is common in Curl Curl and requires careful preparation — correct priming and a paint system compatible with the substrate. We can advise on the right approach for your specific home.',
  },
  {
    question: 'Do you do exterior repaints in Curl Curl?',
    answer: 'Exterior repaints are a large part of our work across the Northern Beaches. We prep surfaces properly, apply the right primer, and use a top-coat system that will hold up to the conditions on your property.',
  },
  {
    question: 'How often should I repaint the exterior of my Curl Curl home?',
    answer: 'In coastal areas like Curl Curl, 7–10 years is a reasonable guide for exterior repaints, though this varies with surface type, aspect, and the quality of the previous paint job. We can assess your home and give you an honest assessment.',
  },
];

export default function CurlCurlPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Curl Curl
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Curl Curl</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Curl Curl is a tight-knit coastal community where homes take a real hammering from the ocean air. Getting the right paint system — and preparing surfaces properly — makes all the difference to how long your paint job lasts.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Curl Curl</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Curl Curl</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Curl Curl has a good mix of original fibro and brick homes, alongside more recently renovated properties. Whatever the substrate, preparation is what determines how long a paint job holds — especially this close to the ocean.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We work across both interiors and exteriors in Curl Curl, and we&apos;re familiar with what the salt air does to surfaces over time. If your home is showing signs of paint breakdown — chalking, peeling, or fading — get in touch and we&apos;ll take a look.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Curl Curl"
        body="Local Northern Beaches painters who understand coastal conditions. Get in touch today."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/freshwater" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Freshwater</Link>
            <Link href="/painters/dee-why" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Dee Why</Link>
            <Link href="/painters/collaroy" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Collaroy</Link>
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
