import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Doors, Trims & Windows Painting Northern Beaches | Working Colours',
  description: "Professional painting of doors, trims, window frames, louvers and pergolas on Sydney's Northern Beaches. Fine detail work done properly. Free quote.",
};

const faqs = [
  {
    question: 'Can you paint just doors and trims without doing the walls?',
    answer: "Yes. We're happy to quote standalone trim and door painting jobs. Fresh trims and doors can make a significant difference to the feel of a room, even when the walls stay the same.",
  },
  {
    question: 'What sheen level is best for trims and doors?',
    answer: "Semi-gloss is the standard recommendation for interior trims, doors, and architraves. It's durable, easy to clean, and provides a clean, defined finish that contrasts well with low-sheen walls.",
  },
  {
    question: 'How do you get clean, sharp lines on trims?',
    answer: "Clean lines come from a combination of careful masking and brush technique. We don't rush the masking process — it's what separates a professional result from a messy one.",
  },
  {
    question: 'Can you paint aluminium louvres?',
    answer: 'Yes. Aluminium louvres require the correct preparation and a suitable primer for metal substrates. We have experience with this type of work and know what products to use.',
  },
  {
    question: 'Can you paint just the front door as a standalone job?',
    answer: "Yes. A freshly painted front door can transform the entry of a home. It's one of the highest-impact, lowest-cost improvements you can make. We're happy to quote standalone front door jobs.",
  },
];

export default function DoorsTrimWindowsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/services/doors-trims-windows" className="hover:underline">Doors, Trims &amp; Windows</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painting Doors, Trims, Windows and Louvers — Northern Beaches</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            The detail work is what separates a paint job that looks finished from one that looks almost finished.
          </p>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">What we paint</h2>
            <ul className="space-y-3">
              {[
                'Interior and exterior doors',
                'Door frames and architraves',
                'Window frames and sills',
                'Skirting boards',
                'Louvres (timber and aluminium)',
                'Pergola timbers and beams',
                'Garage doors',
                'Feature details and trims',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Why detail work matters</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fresh walls with yellowed or chipped trims look unfinished. Crisp, well-painted doors and trim work pulls everything together. It&apos;s often the difference between a room that looks refreshed and one that looks brand new.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Detail work is also where shortcuts show up most clearly. Rushed masking, uneven sheen, drips on architraves, paint on glass — these are the signs of a job done without care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We take the same approach to trims and doors as we do to walls: proper preparation, correct product choice, and a finish that holds up.
            </p>
          </div>
        </div>
      </section>

      {/* Front Door */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6">The front door: highest impact, lowest cost</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            A fresh front door is one of the most cost-effective improvements you can make to the exterior of your home. It&apos;s the first thing visitors and potential buyers see. The right colour, properly applied, makes an immediate impression.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We paint front doors as standalone jobs — same preparation process, same attention to detail. Sand back, prime if needed, apply the right product in the right sheen for an exterior door.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Get a quote on doors, trims, and detail work"
        body="No job too small. We'll give you a straightforward quote and do the work properly."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <FAQSection faqs={faqs} />

      {/* Related */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
          </div>
        </div>
      </section>
    </>
  );
}
