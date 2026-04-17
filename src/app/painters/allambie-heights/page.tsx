import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Allambie Heights | Working Colours Painting Services',
  description: 'House painting in Allambie Heights. Interior and exterior repaints, timber staining, deck staining. Northern Beaches specialists. Get a free quote today.',
};

const faqs = [
  {
    question: 'What kinds of homes do you paint in Allambie Heights?',
    answer: 'Allambie Heights has a strong mix of brick homes from the 1960s and 70s, many of them well-maintained by long-term owners. We paint interiors and exteriors across the suburb — from full interior refreshes to exterior overhauls.',
  },
  {
    question: 'Do you paint timber decks and fences in Allambie Heights?',
    answer: 'Yes. Timber staining and deck refinishing are a significant part of our work. Allambie Heights has plenty of homes with timber features — decks, fences, pergolas — that benefit from a proper stain and oil treatment.',
  },
  {
    question: 'Can you paint the exterior of a brick home in Allambie Heights?',
    answer: 'Yes. Painted brick requires the right preparation and a breathable paint system. We assess the condition of the existing surface, address any issues, and apply a finish that will last.',
  },
  {
    question: 'Do you provide written quotes in Allambie Heights?',
    answer: 'Yes, always. We visit the property, assess the full scope of work, and provide a written quote that itemises everything. You know exactly what you\'re getting before any work begins.',
  },
];

export default function AllambiHeightsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Allambie Heights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Allambie Heights</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Allambie Heights is a leafy, elevated suburb with well-established homes and a quiet residential character. We paint houses throughout the area — interiors, exteriors, timber features — and take the same care here as anywhere else on the Northern Beaches.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Allambie Heights</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Allambie Heights</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              The housing stock in Allambie Heights includes a lot of solid brick homes that are well past their first paint job. Many benefit enormously from a thorough exterior repaint — proper prep, quality materials, clean finish.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We also do a lot of interior work in the area — full refreshes, feature walls, trims and ceilings. Whether it&apos;s one room or the whole house, we approach every job with the same level of care.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Allambie Heights"
        body="Premium residential painting for Allambie Heights homes. Get in touch today."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/frenchs-forest" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Frenchs Forest</Link>
            <Link href="/painters/belrose" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Belrose</Link>
            <Link href="/painters/cromer" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Cromer</Link>
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
