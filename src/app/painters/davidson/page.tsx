import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Davidson | Working Colours Painting Services',
  description: 'House painting in Davidson. Interior and exterior repaints, deck staining, timber restoration. Northern Beaches specialists. Get a free quote today.',
};

const faqs = [
  {
    question: 'Do you paint homes in Davidson?',
    answer: 'Yes. Davidson is within our regular service area on the Northern Beaches. We work across interiors and exteriors throughout the suburb.',
  },
  {
    question: 'What exterior paint system do you recommend for homes in Davidson?',
    answer: 'It depends on the substrate — brick, render, fibre cement, or weatherboard all have different requirements. After inspecting the property we recommend the right system for your specific home, including primer and top coat selection.',
  },
  {
    question: 'Do you stain and oil timber decks in Davidson?',
    answer: 'Yes. Deck staining and restoration is a regular part of our work. We sand back the existing surface, treat the timber, and apply a durable stain system that protects against UV and weathering.',
  },
  {
    question: 'Can you paint a recently renovated home in Davidson?',
    answer: 'Yes. New builds and recent renovations are a common job for us. New plasterboard needs correct preparation and priming before top coat, and we make sure this is done properly so the finish holds.',
  },
];

export default function DavidsonPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Davidson
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Davidson</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Davidson is a leafy suburb on the upper Northern Beaches with a mix of established and newer homes. We paint houses throughout the area, bringing the same level of preparation and finish whether it&apos;s a single room or a full exterior repaint.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Davidson</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Davidson</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Davidson sits alongside Garigal National Park, giving the suburb a bushland feel that many residents value. Properties here often feature generous outdoor entertaining areas — decks, pergolas, timber fencing — and we do a lot of timber maintenance work in the area.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              For interior and exterior painting, we visit in person before quoting, specify everything in writing, and work cleanly on site. You won&apos;t come home to a mess.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Davidson"
        body="Professional residential painters serving Davidson and the surrounding Northern Beaches."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/frenchs-forest" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Frenchs Forest</Link>
            <Link href="/painters/belrose" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Belrose</Link>
            <Link href="/painters/brookvale" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Brookvale</Link>
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
