import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Northern Beaches Sydney | Working Colours Painting Services',
  description: "Premium residential painting across Sydney's Northern Beaches. Interior, exterior, timber staining, deck staining and more. Local team, quality results. Get a free quote today.",
};

const suburbGroups = [
  {
    label: 'Southern Beaches',
    suburbs: [
      { name: 'Manly', href: '/painters/manly' },
      { name: 'Balgowlah', href: '/painters/balgowlah' },
      { name: 'Freshwater', href: '/painters/freshwater' },
      { name: 'Seaforth', href: '/painters/seaforth' },
    ],
  },
  {
    label: 'Central Beaches',
    suburbs: [
      { name: 'Dee Why', href: '/painters/dee-why' },
      { name: 'Collaroy', href: '/painters/collaroy' },
      { name: 'Collaroy Plateau', href: '/painters/collaroy-plateau' },
      { name: 'Cromer', href: '/painters/cromer' },
      { name: 'Brookvale', href: '/painters/brookvale' },
    ],
  },
  {
    label: 'Narrabeen Area',
    suburbs: [
      { name: 'Narrabeen', href: '/painters/narrabeen' },
      { name: 'North Narrabeen', href: '/painters/north-narrabeen' },
      { name: 'Warriewood', href: '/painters/warriewood' },
      { name: 'Elanora Heights', href: '/painters/elanora-heights' },
    ],
  },
  {
    label: 'Northern Beaches Mid',
    suburbs: [
      { name: 'Mona Vale', href: '/painters/mona-vale' },
      { name: 'Newport', href: '/painters/newport' },
      { name: 'Bayview', href: '/painters/bayview' },
      { name: 'Avalon', href: '/painters/avalon' },
      { name: 'Palm Beach', href: '/painters/palm-beach' },
    ],
  },
  {
    label: 'Bushland',
    suburbs: [
      { name: 'Frenchs Forest', href: '/painters/frenchs-forest' },
      { name: 'Belrose', href: '/painters/belrose' },
    ],
  },
];

const services = [
  { title: 'Interior Painting', desc: 'Walls, ceilings, doors, trims, and more. Clean finishes for every room.', href: '/services/interior-painting' },
  { title: 'Exterior Painting', desc: 'Protect and refresh your home\'s exterior with products suited to the coastal environment.', href: '/services/exterior-painting' },
  { title: 'Timber Staining', desc: 'Revive weathered, grey, or deteriorating timber surfaces throughout your property.', href: '/services/timber-staining' },
  { title: 'Deck Staining', desc: 'Sand, prepare, and treat your deck for lasting protection and a fresh appearance.', href: '/services/deck-staining' },
  { title: 'Doors, Trims & Windows', desc: 'The detail work that separates a job that looks finished from one that looks almost finished.', href: '/services/doors-trims-windows' },
  { title: 'Residential Repaints', desc: 'From a single room to a full house. We assess honestly and advise accordingly.', href: '/services/residential-repaints' },
];

const steps = [
  { n: 1, title: 'Get in touch', body: 'Call, fill in the quote form, or message us on WhatsApp.' },
  { n: 2, title: 'Site visit and assessment', body: "We visit your property, assess what needs doing, and talk through your options honestly." },
  { n: 3, title: 'Detailed quote', body: 'You receive a clear, itemised quote. No vague estimates, no scope that expands later.' },
  { n: 4, title: 'Professional work begins', body: 'We arrive on time, protect your home, and complete the job to a high standard.' },
  { n: 5, title: 'Final walkthrough', body: "We don't consider the job done until we've walked through it with you." },
];

const faqs = [
  {
    question: 'Do you work across the whole Northern Beaches?',
    answer: 'Yes. We service all suburbs from Manly in the south to Palm Beach in the north, including all suburbs in between — Dee Why, Narrabeen, Collaroy, Mona Vale, Newport, Avalon, Freshwater, Seaforth, Frenchs Forest, Belrose, and more.',
  },
  {
    question: 'Why do coastal homes need a specialist painter?',
    answer: "The Northern Beaches environment — salt air, UV intensity, humidity, and moisture — is genuinely demanding on paintwork and timber. Products and preparation approaches that work fine inland may not perform well here. We know what works in this specific environment.",
  },
  {
    question: 'How much does it cost to paint a house on the Northern Beaches?',
    answer: 'Costs depend on the size of your home, the condition of surfaces, and the work involved. We provide detailed, itemised quotes after a site visit. We won\'t give you a number over the phone before we\'ve seen the job.',
  },
  {
    question: 'How long does a typical job take?',
    answer: 'Interior repaints typically take three to six days for an average home. Exterior jobs take two to five days. Timber and deck restoration are usually one to two days. We\'ll give you a clear timeline in your quote.',
  },
  {
    question: 'Do you do free quotes?',
    answer: "Yes. We provide free, no-obligation quotes after a site visit. We believe in seeing the job before quoting it — that's how we give you an accurate number.",
  },
  {
    question: 'Are you licensed and insured?',
    answer: "Yes. We hold the appropriate NSW licences and carry public liability insurance. We're happy to provide evidence of both on request.",
  },
];

export default function NorthernBeachesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Northern Beaches Sydney</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Working Colours is a premium residential painting company serving the full length of Sydney&apos;s Northern Beaches — from Manly to Palm Beach. We specialise in homes that face the real demands of coastal living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/contact" className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors">Get a Free Quote</Link>
            <a href="tel:0434030222" className="border-2 border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-colors">0434 030 222</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We&apos;ve been painting homes across the Northern Beaches for years. We know the housing stock — the federation bungalows in Freshwater and Manly, the timber weatherboards in Avalon and Narrabeen, the rendered brick homes through Dee Why and Collaroy, the prestige properties in Newport and Palm Beach.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We also know what the coastal environment does to paintwork and timber — the salt air, the UV intensity, the humidity — and we specify products and preparation methods accordingly. This isn&apos;t something you learn from a trade catalogue. It comes from doing the work here, in these conditions, over many years.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10 text-center">Services across the Northern Beaches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all">
                <h3 className="font-bold text-[#1a1a2e] mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why coastal specialist */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 text-center">Why coastal homes need a specialist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">Salt air and corrosion</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Salt particles in the air accelerate the breakdown of protective coatings on both painted surfaces and bare timber. Standard products don&apos;t hold up as well in salt-laden environments. We specify coatings with the right resistance for the exposure level.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">UV intensity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">The Northern Beaches receives intense direct sun, particularly on north and west-facing elevations. UV breaks down paint binders and causes fading and chalking. High-quality UV-stable products significantly extend the life of an exterior paint job.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">Humidity and moisture</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Coastal humidity creates ideal conditions for mould and mildew on both interior and exterior surfaces. Products need to allow moisture to move through them — not trap it — or you get blistering and peeling from behind.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">Timber deterioration</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Weatherboard cladding, timber decks, pergolas, and window frames deteriorate faster in coastal conditions. The combination of salt, UV, and moisture breaks down timber quickly if it&apos;s not properly maintained with the right products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10 text-center">Our approach</h2>
          <div className="space-y-5">
            {steps.map((step) => (
              <div key={step.n} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">{step.n}</div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburb Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10 text-center">Suburbs we service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suburbGroups.map((group) => (
              <div key={group.label} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-[#1a1a2e] text-sm uppercase tracking-wider mb-4">{group.label}</h3>
                <ul className="space-y-2">
                  {group.suburbs.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-blue-600 hover:underline text-sm font-medium">{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Ready to get your Northern Beaches home painted?"
        body="Get in touch for a free, no-obligation quote. We service the entire Northern Beaches."
        primaryCTA={{ text: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />
    </>
  );
}
