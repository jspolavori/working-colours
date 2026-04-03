import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import SuburbCard from '@/components/SuburbCard';
import ReviewCard from '@/components/ReviewCard';
import FAQSection from '@/components/FAQSection';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'House Painter Northern Beaches Sydney | Working Colours',
  description:
    "Premium residential painting on Sydney's Northern Beaches. Interior, exterior, timber staining, deck staining and more. Get a free quote today.",
};

const services = [
  {
    title: 'Interior House Painting',
    description:
      'Clean, consistent finishes for every room. Walls, ceilings, doors, trims, and more.',
    href: '/services/interior-painting',
    icon: '',
  },
  {
    title: 'Exterior House Painting',
    description:
      'Protect and refresh the outside of your home. Quality materials for the coastal climate.',
    href: '/services/exterior-painting',
    icon: '',
  },
  {
    title: 'Timber Staining & Restoration',
    description:
      'Revive weathered, grey, or peeling timber. Fences, cladding, window frames, and more.',
    href: '/services/timber-staining',
    icon: '',
  },
  {
    title: 'Deck Staining & Refinishing',
    description:
      'Sand, prepare, and stain for lasting protection and a beautiful finish.',
    href: '/services/deck-staining',
    icon: '',
  },
  {
    title: 'Doors, Trims & Windows',
    description:
      'Fresh paint on doors, window frames, and louvers makes a significant difference.',
    href: '/services/doors-trims-windows',
    icon: '',
  },
  {
    title: 'Residential Repaints',
    description:
      'From a single wall to a full house refresh. We assess honestly and quote accordingly.',
    href: '/services/residential-repaints',
    icon: '',
  },
];

const whyPoints = [
  {
    title: 'Respect for your home and family',
    body: 'We treat your property like our own. Drop sheets down, furniture protected, mess contained.',
  },
  {
    title: 'Clear quotes, no surprises',
    body: 'Detailed quote before any work begins. No hidden charges, no scope creep.',
  },
  {
    title: 'Premium finishes that last',
    body: 'Proper preparation is what separates a paint job that lasts from one that starts peeling in two years.',
  },
  {
    title: 'On time and reliable',
    body: 'We show up when we say we will. We finish when we say we will.',
  },
  {
    title: 'Local and experienced',
    body: 'Northern Beaches specialists. We know the local conditions, the coastal environment, and what it takes.',
  },
];

const steps = [
  { n: 1, title: 'Get in touch', body: 'Fill in the quote form, call us, or send a message on WhatsApp.' },
  { n: 2, title: 'We assess and advise', body: 'We visit the site, take a look at what needs doing, and talk through your options.' },
  { n: 3, title: 'Clear quote and agreed timeline', body: 'You receive a detailed, itemised quote. No vague estimates.' },
  { n: 4, title: 'Professional painting begins', body: 'We show up on time, protect your home, and get to work. Surfaces prepared properly before a drop of paint goes on.' },
  { n: 5, title: 'Final walkthrough and handover', body: 'Before we consider the job done, we do a thorough walkthrough with you.' },
];

const reviews = [
  {
    name: 'Sarah M.',
    suburb: 'Dee Why',
    text: 'Working Colours painted our entire exterior and the result was outstanding. Thorough preparation, clean worksite, and the finish has held up beautifully.',
    rating: 5,
  },
  {
    name: 'Luke T.',
    suburb: 'Narrabeen',
    text: 'Professional from first contact to final walkthrough. They turned up on time every day and left the place spotless.',
    rating: 5,
  },
  {
    name: 'Simone P.',
    suburb: 'Newport',
    text: 'They restored our weathered deck and it looks brand new. Honest advice, great products, and attention to detail.',
    rating: 5,
  },
];

const suburbs = [
  { name: 'Narrabeen', href: '/painters/narrabeen' },
  { name: 'Dee Why', href: '/painters/dee-why' },
  { name: 'Collaroy', href: '/painters/collaroy' },
  { name: 'Collaroy Plateau', href: '/painters/collaroy-plateau' },
  { name: 'Mona Vale', href: '/painters/mona-vale' },
  { name: 'Warriewood', href: '/painters/warriewood' },
  { name: 'North Narrabeen', href: '/painters/north-narrabeen' },
  { name: 'Elanora Heights', href: '/painters/elanora-heights' },
  { name: 'Bayview', href: '/painters/bayview' },
  { name: 'Newport', href: '/painters/newport' },
  { name: 'Avalon', href: '/painters/avalon' },
  { name: 'Palm Beach', href: '/painters/palm-beach' },
  { name: 'Freshwater', href: '/painters/freshwater' },
  { name: 'Manly', href: '/painters/manly' },
  { name: 'Balgowlah', href: '/painters/balgowlah' },
  { name: 'Seaforth', href: '/painters/seaforth' },
  { name: 'Frenchs Forest', href: '/painters/frenchs-forest' },
  { name: 'Belrose', href: '/painters/belrose' },
  { name: 'Brookvale', href: '/painters/brookvale' },
  { name: 'Cromer', href: '/painters/cromer' },
];

const faqs = [
  {
    question: 'What areas do you service?',
    answer:
      "We service all suburbs across Sydney's Northern Beaches, including Narrabeen, Dee Why, Collaroy, Mona Vale, Warriewood, Newport, Avalon, Freshwater, Manly, Seaforth, Frenchs Forest, Belrose, and surrounding areas.",
  },
  {
    question: 'How much does it cost to paint a house in Sydney?',
    answer:
      'Painting costs vary depending on the size of your home, the condition of the surfaces, the number of coats required, and the type of work involved. We provide detailed, itemised quotes after assessing the job in person.',
  },
  {
    question: 'How long does a typical painting job take?',
    answer:
      'A full interior repaint of an average home typically takes three to five days. An exterior job can take between two and five days depending on the size of the home and the condition of the surfaces.',
  },
  {
    question: 'Do I need to move my furniture before you start?',
    answer:
      "We ask that large items are moved away from walls where possible, but we'll protect all furniture with drop sheets. We'll advise you on exactly what needs to happen before we start.",
  },
  {
    question: 'What paint brands do you use?',
    answer:
      "We use premium paints suited to the job, including products specifically formulated for coastal environments like the Northern Beaches. We'll advise on the best product for your specific situation.",
  },
  {
    question: 'Do you offer a warranty on your work?',
    answer:
      "Yes. We stand behind the quality of our work. If there are any issues directly related to the application, we'll come back and address them.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden"
      >
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay so text remains readable */}
        <div className="absolute inset-0 bg-[#1a1a2e]/65" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-blue-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
            Currently taking bookings · Northern Beaches, Sydney
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            House Painter<br />
            <span className="text-white">Northern Beaches</span>{' '}
            <span style={{ color: '#0066CC' }}>Sydney</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: '#60a5fa' }}>
            Clean work. On time. No stress.
          </p>

          <p className="text-base md:text-lg text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Looking for a reliable house painter in Sydney&apos;s Northern Beaches? We specialise in
            premium residential painting — interior and exterior — for homeowners who want quality
            results, a tidy worksite, and a painter they can actually trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="bg-white text-[#1a1a2e] font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/61434030222"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all duration-200 text-base"
            >
              Message Us on WhatsApp
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-blue-200/80">
            <span>5.0 Google Rating</span>
            <span className="hidden sm:inline text-blue-800">·</span>
            <span>Local Northern Beaches Team</span>
            <span className="hidden sm:inline text-blue-800">·</span>
            <span>Licensed &amp; Insured</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300/50 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── TRUST STATS BAR ─── */}
      <section className="bg-[#f8f9fa] border-y border-gray-200 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-200">
            {[
              { stat: '500+', label: 'Homes Painted' },
              { stat: '5.0', label: 'Google Rating' },
              { stat: '10+', label: 'Years Experience' },
              { stat: '100%', label: 'Northern Beaches Locals' },
            ].map((item) => (
              <div key={item.label} className="text-center px-4 py-2">
                <div className="text-2xl font-bold text-[#1a1a2e]">{item.stat}</div>
                <div className="text-sm text-gray-500 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-8 leading-tight">
            Painting your home should feel easy.
          </h2>
          <div className="space-y-5 text-[#6b7280] text-lg leading-relaxed">
            <p>
              At Working Colours, we work with homeowners across the Northern Beaches who care about
              getting the job done properly. That means honest advice, a clear quote, careful
              preparation, and a finish that lasts.
            </p>
            <p>
              No shortcuts. No surprises. Just solid work from a local team that takes pride in the
              detail.
            </p>
            <p>
              Whether you&apos;re repainting a single room or refreshing the entire exterior of your
              home, we bring the same approach every time — prepared surfaces, quality materials, and
              a worksite left clean at the end of every day.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Why Northern Beaches homeowners choose us
            </h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">
              Five things that set us apart from every other painter on the Northern Beaches.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-5"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] text-lg mb-2">{point.title}</h3>
                  <p className="text-[#6b7280] leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
            {/* 5th card — full width on md if odd */}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Our Painting Services
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              From a single room repaint to a full exterior transformation — here&apos;s how we can help.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#0066CC] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ─── POSITIONING — NOT THE CHEAPEST ─── */}
      <section className="py-20 px-4 bg-[#1a1a2e] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Not the cheapest — and proud of it.
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed">
            There are plenty of painters in Sydney who will give you a low price. What they
            won&apos;t always give you is proper surface preparation, quality products, a clean
            worksite, or a finish that holds up. At Working Colours, we do the job properly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 rounded-xl p-7 border border-white/10">
              <h3 className="text-red-400 font-semibold text-lg mb-5">If you&apos;re looking for:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                  The lowest quote on the street
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                  A painter who starts tomorrow no matter what
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                  Someone to rush the prep and get in and out fast
                </li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-7 border border-white/10">
              <h3 className="text-green-400 font-semibold text-lg mb-5">If you want:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                  A detailed quote and honest advice
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                  A team that respects your home
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                  Quality materials and a lasting finish
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                  No mess, no drama, no surprises
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-300 text-lg mb-6">We&apos;d love to hear from you.</p>
            <Link
              href="/contact"
              className="bg-[#FF6B35] hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-base shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 px-4 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">How it works</h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">
              A straightforward process from first contact to final walkthrough.
            </p>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.n} className="flex items-start gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white font-bold text-lg flex items-center justify-center shadow-md">
                    {step.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-blue-200 mt-2 h-8"></div>
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-bold text-[#1a1a2e] text-lg mb-1">{step.title}</h3>
                  <p className="text-[#6b7280] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1a1a2e] font-semibold text-lg mt-8">
            No mess. No confusion. Just quality work.
          </p>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">
              Real feedback from Northern Beaches homeowners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-5 py-2 text-sm font-semibold text-yellow-800">
              5.0 — Based on Google Reviews
            </span>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="py-20 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Our Work</h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">
              A selection of completed jobs across Sydney&apos;s Northern Beaches.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/gallery/job-1.jpg', alt: 'Large freshly stained deck with white timber railing — Northern Beaches' },
              { src: '/gallery/job-2.jpg', alt: 'Freshly oiled timber sun lounger on waterfront dock — Pittwater' },
              { src: '/gallery/job-3.jpg', alt: 'Stained timber louvers with water and palm tree view — Northern Beaches' },
              { src: '/gallery/job-4.jpg', alt: 'Interior painting — fresh blue wall with white trims and window frames' },
              { src: '/gallery/job-5.jpg', alt: 'Stained and oiled timber bedroom built-ins — interior timber restoration' },
              { src: '/gallery/job-6.jpg', alt: 'White gloss window frames and trims with ocean view — stain to gloss conversion' },
            ].map((img) => (
              <div key={img.src} className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-200 group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AREAS WE SERVICE ─── */}
      <section className="py-20 px-4 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Areas We Service</h2>
          <p className="text-[#6b7280] mb-10 max-w-xl mx-auto">
            We paint homes across the full length of Sydney&apos;s Northern Beaches.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {suburbs.map((suburb) => (
              <SuburbCard key={suburb.href} {...suburb} />
            ))}
          </div>
          <p className="text-sm text-[#6b7280]">
            Not sure if we cover your area?{' '}
            <Link href="/contact" className="text-[#0066CC] hover:underline font-medium">
              Get in touch
            </Link>
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={faqs} />

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 px-4 bg-[#1a1a2e] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to refresh your home?
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Get in touch for a free, no-obligation quote. We&apos;ll assess the job properly and
            give you an honest recommendation — no pressure, no vague estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-white text-[#1a1a2e] font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/61434030222"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-colors duration-200"
            >
              Message Us on WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300/70">
            Northern Beaches locals. Reliable. Professional. Detail-focused.
          </p>
        </div>
      </section>
    </>
  );
}
