import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Killarney Heights | Working Colours Painting Services',
  description: 'House painting in Killarney Heights. Interior and exterior repaints, timber staining, deck maintenance. Northern Beaches specialists. Get a free quote today.',
};

const faqs = [
  {
    question: 'Do you paint homes in Killarney Heights?',
    answer: 'Yes. Killarney Heights is within our regular service area. We paint interiors and exteriors throughout the suburb, from single-room refreshes to full exterior repaints.',
  },
  {
    question: 'Many homes in Killarney Heights have harbour views — does that affect what paint products you use?',
    answer: 'Proximity to Middle Harbour does expose surfaces to some moisture and salt air, particularly on north and east-facing aspects. We account for this in our product selection, using systems that perform well in these conditions.',
  },
  {
    question: 'Can you repaint the timber on my Killarney Heights home?',
    answer: 'Yes. We do a lot of timber work — weatherboards, fascias, soffits, window frames, and timber decks. Proper preparation of timber is critical to getting a finish that lasts.',
  },
  {
    question: 'Do you provide fixed-price quotes for Killarney Heights jobs?',
    answer: 'Yes. After visiting the property and assessing the scope, we provide a written fixed-price quote. The price we quote is the price you pay.',
  },
];

export default function KillarneyHeightsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Killarney Heights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Killarney Heights</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Killarney Heights is an established residential suburb with quality homes and a strong community. Whether you&apos;re updating the interior, refreshing the exterior, or maintaining the timber on your home, we do it properly.
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Killarney Heights</h2>
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
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Killarney Heights</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Killarney Heights homes sit close to Middle Harbour bushland and many have large outdoor areas. Timber maintenance — decks, pergolas, fences — is a regular job for us in the area.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              For interior and exterior work, we quote in person, specify everything clearly, and do the job to a standard we&apos;re proud of. References from recent jobs in the area are available on request.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Killarney Heights"
        body="Premium residential painting for Killarney Heights homes. Get in touch today."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/seaforth" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Seaforth</Link>
            <Link href="/painters/balgowlah" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Balgowlah</Link>
            <Link href="/painters/manly" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Manly</Link>
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
