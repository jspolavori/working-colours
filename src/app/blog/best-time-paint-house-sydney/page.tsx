import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Best Time of Year to Paint Your Home in Sydney | Working Colours Painting Northern Beaches',
  description:
    "When is the best time to paint your house in Sydney? Spring and autumn are ideal — here's why weather and humidity matter, and what to avoid. From Northern Beaches painters.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/best-time-paint-house-sydney',
  },
  openGraph: {
    type: 'website',
    title: 'Best Time of Year to Paint Your Home in Sydney | Working Colours Painting Northern Beaches',
    description:
      "When is the best time to paint your house in Sydney? Spring and autumn are ideal — here's why weather and humidity matter, and what to avoid. From Northern Beaches painters.",
    url: 'https://www.wcpainting.com.au/blog/best-time-paint-house-sydney',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time of Year to Paint Your Home in Sydney | Working Colours Painting Northern Beaches',
    description:
      "When is the best time to paint your house in Sydney? Spring and autumn are ideal — here's why weather and humidity matter, and what to avoid. From Northern Beaches painters.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'Can you paint a house exterior in winter in Sydney?',
    answer:
      "Yes — Sydney winters are mild enough that exterior painting is entirely feasible from May through August. The key is avoiding painting when temperatures drop below about 10°C, which slows curing and can affect adhesion. Most Sydney winter days are well above this, especially on the Northern Beaches. The lower humidity in winter can actually benefit some exterior jobs.",
  },
  {
    question: 'Is it possible to paint in summer on the Northern Beaches?',
    answer:
      "Summer is generally the most challenging time for exterior painting in Sydney. High temperatures cause paint to dry too quickly on the surface, trapping solvents beneath and creating problems. Humidity from summer storms and afternoon sea breezes can also affect fresh paint. We can usually work through summer with careful timing — early morning starts, avoiding painting in direct sun — but scheduling for spring or autumn avoids these complications.",
  },
  {
    question: 'How do I book around Sydney&apos;s weather?',
    answer:
      "We monitor forecasts closely and schedule exterior work around suitable weather windows. We will not push through in poor conditions just to keep to a timeline — rain or high humidity on fresh paint is a problem that we prevent rather than fix later. We communicate weather-related changes clearly.",
  },
  {
    question: 'Does season matter for interior painting?',
    answer:
      "Interior painting is far less weather-dependent because the environment is controlled. Temperature and humidity still affect paint application and drying, but these are manageable year-round for interior work. There is essentially no bad time of year for an interior repaint in Sydney.",
  },
];


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.wcpainting.com.au"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.wcpainting.com.au/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best Time of Year to Paint Your Home in Sydney",
      "item": "https://www.wcpainting.com.au/blog/best-time-paint-house-sydney"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Time of Year to Paint Your Home in Sydney",
  "description": "When is the best time to paint your house in Sydney? Spring and autumn are ideal — here's why weather and humidity matter, and what to avoid. From Northern Beaches painters.",
  "url": "https://www.wcpainting.com.au/blog/best-time-paint-house-sydney",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/best-time-paint-house-sydney"
  },
  "author": {
    "@type": "Organization",
    "name": "Working Colours Painting Services"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Working Colours Painting Services",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.wcpainting.com.au/logo.png"
    }
  }
};

export default function BestTimePaintHouseSydneyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Best Time to Paint Your Home
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Time of Year to Paint Your Home in Sydney
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Weather affects how paint applies, how it cures, and ultimately how long it lasts. In Sydney — and particularly on the Northern Beaches — knowing which conditions to target and which to avoid can make a real difference to the quality of the result.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Why weather matters for painting</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Paint is a chemical product that requires specific conditions to cure correctly. Temperature affects how quickly solvents evaporate and how the resin bonds to the surface. Humidity affects how moisture from the air interacts with the wet paint film. Apply paint in conditions outside the manufacturer&apos;s recommended range and the result suffers — sometimes immediately, sometimes over months.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            For exterior work, these conditions are entirely dependent on the weather. For interior work, they are more controllable — but still relevant.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The ideal conditions for exterior painting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Temperature', ideal: '15°C – 28°C', note: 'Too cold slows curing; too hot causes surface drying that traps solvents' },
              { label: 'Humidity', ideal: 'Below 85%', note: 'High humidity slows drying and can cause adhesion issues and blushing' },
              { label: 'Wind', ideal: 'Light breeze or still', note: 'Strong winds cause uneven drying and contaminate wet surfaces with dust and salt' },
              { label: 'Recent rain', ideal: 'Surface fully dry', note: 'Any moisture in the substrate must evaporate before painting' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-[#1a1a2e] mb-1">{item.label}</h3>
                <p className="text-sm font-bold text-[#0066CC] mb-1">{item.ideal}</p>
                <p className="text-xs text-gray-500">{item.note}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Season-by-season breakdown for Sydney</h2>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">Spring (September – November) — Best</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Spring is the ideal season for exterior painting in Sydney. Temperatures are comfortable, humidity is moderate, and there is typically enough dry weather between spring showers to complete exterior work. Demand for painters is high in spring, so booking ahead is important. For interior work, spring is equally good — ventilation is easy with open windows.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">Autumn (March – May) — Best</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Autumn rivals spring for exterior painting conditions in Sydney. Temperatures are falling from the summer heat, humidity is dropping, and the weather is generally stable. This is an excellent time to schedule exterior work. Summer-damaged paint also tends to be most visible in autumn, making it a natural time for homeowners to start thinking about repainting.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">Winter (June – August) — Good for most work</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sydney winters are mild by national standards. Most exterior painting is entirely feasible through winter, with careful timing around cold mornings and foggy days. The Northern Beaches rarely experiences temperatures that are genuinely too cold to paint. Winter often sees reduced demand, which can mean better availability from quality painters.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">Summer (December – February) — Proceed with care</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Summer is the most challenging season for exterior painting. High temperatures accelerate surface drying, which can trap solvents and cause bubbling or blistering. Afternoon storms and high coastal humidity add further complications. Early morning starts (before 10am) and avoiding direct sun exposure are standard approaches. Interior work is not affected by these issues and can proceed year-round.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Booking advice</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Quality painters on the Northern Beaches are typically booked two to four weeks ahead year-round, and further ahead during peak spring season. If you have a specific timeline — a sale date, a renovation milestone, or a particular event at your property — get in touch early. We will give you an honest assessment of availability and the best approach given your timing.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact Working Colours</Link> to discuss your project and lock in a suitable start date.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Ready to book your painting job?"
        body="We're currently taking bookings across the Northern Beaches. Get in touch to discuss timing, availability, and what your home needs."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related articles and services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/blog/exterior-paint-life-coastal-environment" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How Long Does Paint Last Coastal</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
