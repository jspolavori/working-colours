import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About Working Colours | Northern Beaches Painters',
  description: "Working Colours is a premium residential painting service on Sydney's Northern Beaches. Owner-operated, detail-focused, honest. Find out more.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Working Colours</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            A Northern Beaches painting company built on a straightforward idea: do the job properly, every time. No shortcuts, no excuses, no surprises.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Who we are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Working Colours is an owner-operated residential painting business based on Sydney&apos;s Northern Beaches. We specialise in high-quality residential painting — interior and exterior — for homeowners who care about the result.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We&apos;re not a franchise. We&apos;re not a large crew of subcontractors you&apos;ve never met. We&apos;re a small, focused team that takes on the right number of jobs to do each one properly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Northern Beaches is our home as well as our work area. We know the local conditions, the housing stock, and the standards that homeowners here expect.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Our approach</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Good painting is 70% preparation. That&apos;s where most of the work actually happens — filling holes and cracks, sanding surfaces smooth, cleaning and treating where needed, priming correctly. The topcoat is the final step, not the only one.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use quality products suited to each job and each environment. Coastal conditions demand different things from exterior paint than suburban inland conditions do. We know the difference and we specify accordingly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We quote honestly, we show up when we say we will, and we leave your home the way we found it — except for the freshly painted surfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-10 text-center">What we stand for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Honest advice',
                body: "We tell you what your home actually needs — not the maximum scope we can charge for. If something can wait, we'll say so. If something needs attention now, we'll explain why.",
              },
              {
                title: 'Preparation first',
                body: "We never rush through the prep to get to the painting. Every surface is properly cleaned, filled, sanded, and primed before paint goes on. That's what makes a job last.",
              },
              {
                title: 'No surprises',
                body: "You get a detailed, itemised quote before any work starts. The price is the price. We don't add charges mid-job or present you with extras at the end.",
              },
              {
                title: 'Quality products',
                body: "We use premium paints and coatings suited to each surface and environment. We won't recommend a cheap product and we won't cut corners on materials.",
              },
              {
                title: 'Respect for your home',
                body: "Drop sheets down from start to finish. Tools cleaned at end of day. Your home treated with care. We work in houses where people are living and we take that seriously.",
              },
              {
                title: 'Work we stand behind',
                body: "If there are any issues directly related to our application, we come back and address them. We don't consider a job finished until you're satisfied with it.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#1a1a2e] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Our services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { name: 'Interior House Painting', href: '/services/interior-painting' },
              { name: 'Exterior House Painting', href: '/services/exterior-painting' },
              { name: 'Timber Staining and Restoration', href: '/services/timber-staining' },
              { name: 'Deck Staining and Refinishing', href: '/services/deck-staining' },
              { name: 'Doors, Trims and Windows', href: '/services/doors-trims-windows' },
              { name: 'Residential Repaints', href: '/services/residential-repaints' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-medium text-[#1a1a2e]">{service.name}</span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Our service area</h2>
          <p className="text-gray-600 mb-4">
            We work throughout Sydney&apos;s Northern Beaches — from Manly and Freshwater in the south to Palm Beach at the tip of the peninsula. Our main areas include:
          </p>
          <p className="text-gray-600 mb-4">
            Narrabeen · Dee Why · Collaroy · Mona Vale · Warriewood · Newport · Avalon · Palm Beach · Freshwater · Manly · Balgowlah · Seaforth · Frenchs Forest · Belrose · Brookvale · Cromer and surrounding suburbs.
          </p>
          <Link href="/painters/northern-beaches" className="text-blue-600 hover:underline font-medium">
            View our full service area
          </Link>
        </div>
      </section>

      <CTABanner
        heading="Ready to get started?"
        body="Get in touch for a free quote. We visit your property in person, assess what it needs, and give you an honest, detailed price."
        primaryCTA={{ text: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />
    </>
  );
}
