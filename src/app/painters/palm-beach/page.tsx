import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Palm Beach Sydney | Working Colours Northern Beaches',
  description: "Premium residential painting in Palm Beach, Sydney. Exterior, interior, timber and deck work for prestige coastal homes. Free quote from your local Northern Beaches painter.",
};

const faqs = [
  {
    question: 'How does the coastal environment affect paint in Palm Beach?',
    answer: "Palm Beach is one of the most exposed locations on the Northern Beaches — direct ocean frontage, strong winds, and salt spray on both the ocean and Pittwater sides. Paint and timber treatments break down faster here than in more sheltered suburbs. We use products suited to this environment and pay close attention to surface preparation.",
  },
  {
    question: 'Can you repaint weatherboard or timber homes?',
    answer: "Yes. Timber homes are well represented in Palm Beach and require thorough preparation — scraping back failed paint, treating bare timber, priming correctly — before any topcoat goes on. We don't take shortcuts.",
  },
  {
    question: 'Do you handle high or difficult access areas?',
    answer: "We're set up to handle multi-level homes and difficult access areas. We'll assess access requirements at the quote stage and advise on any equipment needed.",
  },
  {
    question: 'What is your approach for pre-sale painting in Palm Beach?',
    answer: "For pre-sale work, we focus on the highest-impact areas first — exterior presentation, entry, key living areas. We work efficiently and can often accommodate tighter timelines for sale preparation.",
  },
];

export default function PalmBeachPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo;{' '}
            Palm Beach
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Palm Beach</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Palm Beach sits at the tip of the Northern Beaches peninsula — one of Sydney&apos;s most iconic and exposed coastal locations. Homes here range from original beach shacks to prestige multi-level properties. The environment is demanding. The standard of work needs to match.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting for Palm Beach properties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              No suburb on the Northern Beaches is more exposed to the elements than Palm Beach. Salt air comes in from both the ocean and Pittwater. UV is intense. Coastal winds accelerate the breakdown of surface coatings in ways that don&apos;t happen in more sheltered areas. If you&apos;re getting a paint job done here, the preparation and product selection matter more than anywhere else.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work on both the grand prestige homes along the waterfront and the older, more characterful properties throughout the suburb. Whatever the brief — full exterior refresh, interior repaint, deck restoration, or timber work — we approach it the same way: properly.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What we do in Palm Beach</h2>
            <ul className="space-y-3">
              {[
                'Exterior house painting — preparation-first approach',
                'Interior painting for all home sizes',
                'Timber staining and coastal timber restoration',
                'Deck staining and refinishing',
                'Doors, trims, window frames, and louvers',
                'Pre-sale painting and full residential repaints',
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

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6 text-center">Why coastal exposure matters for paint</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Salt air', body: 'Salt deposits on surfaces accelerate the breakdown of paint film and cause rust on any exposed metal. Thorough cleaning before painting is non-negotiable.' },
              { title: 'UV intensity', body: "The Northern Beaches receives high UV year-round. Cheaper paints fade and chalk quickly. We use products with UV-stable pigments and strong binder systems." },
              { title: 'Moisture and humidity', body: 'Coastal humidity, combined with the risk of salt moisture, means surfaces must be fully dried and prepped before painting — or adhesion fails from the start.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#1a1a2e] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Get a free quote in Palm Beach"
        body="We'll come out to your property, assess the surfaces, and give you an honest recommendation and detailed quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/avalon" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Avalon Beach</Link>
            <Link href="/painters/newport" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Newport</Link>
            <Link href="/painters/bayview" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Bayview</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
