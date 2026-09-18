import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'What Paint Is Best for Coastal Homes Near the Ocean? | Working Colours Painting Northern Beaches',
  description:
    "The best paint for coastal homes on the Northern Beaches needs UV resistance, moisture resistance, and flexibility. Here is what to look for — from painters who work in this environment daily.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/best-paint-coastal-homes-ocean',
  },
  openGraph: {
    type: 'website',
    title: 'What Paint Is Best for Coastal Homes Near the Ocean? | Working Colours Painting Northern Beaches',
    description:
      "The best paint for coastal homes on the Northern Beaches needs UV resistance, moisture resistance, and flexibility. Here is what to look for — from painters who work in this environment daily.",
    url: 'https://www.wcpainting.com.au/blog/best-paint-coastal-homes-ocean',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Paint Is Best for Coastal Homes Near the Ocean? | Working Colours Painting Northern Beaches',
    description:
      "The best paint for coastal homes on the Northern Beaches needs UV resistance, moisture resistance, and flexibility. Here is what to look for — from painters who work in this environment daily.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'Do specific paint brands perform better in coastal conditions?',
    answer:
      "Most major Australian manufacturers — Dulux, Taubmans, Haymes, and Solver — offer premium exterior ranges that perform well in coastal conditions. The difference is in the product tier within each brand. Look for top-tier exterior ranges with stated UV resistance, elastomeric properties, and mould inhibitors. Brand loyalty matters less than choosing the right tier of product for the environment.",
  },
  {
    question: 'Is white paint the worst choice for a coastal home?',
    answer:
      "Not necessarily. White paints using titanium dioxide (TiO₂) pigments can be quite UV-stable — titanium is inherently resistant to UV degradation. The bigger issue with white is that chalking (which all paints experience) is more visible on white surfaces than on mid-tones. A premium white product, well applied and maintained, can perform well on coastal homes.",
  },
  {
    question: 'Should I use a different paint for a beachfront property compared to one a kilometre back?',
    answer:
      "For directly beachfront positions — within 200–300 metres of the ocean — we will always recommend the highest-performing products available. The salt spray, UV intensity, and wind at these positions are significantly more demanding than even a few streets back. For these homes, the extra cost of premium products is a straightforward investment.",
  },
  {
    question: 'What is the best primer for coastal surfaces?',
    answer:
      "Primer choice depends on the substrate. For weatherboard and timber, a quality acrylic timber primer with good flexibility and adhesion is important. For rendered or masonry surfaces, a sealer-primer helps seal any porosity before the topcoat goes on. For bare galvanised metal (gutters, downpipes), a galvanised metal primer is essential. Your painter should specify the correct primer for each surface type.",
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
      "name": "What Paint Is Best for Coastal Homes Near the Ocean?",
      "item": "https://www.wcpainting.com.au/blog/best-paint-coastal-homes-ocean"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Paint Is Best for Coastal Homes Near the Ocean?",
  "description": "The best paint for coastal homes on the Northern Beaches needs UV resistance, moisture resistance, and flexibility. Here is what to look for — from painters who work in this environment daily.",
  "url": "https://www.wcpainting.com.au/blog/best-paint-coastal-homes-ocean",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/best-paint-coastal-homes-ocean"
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

export default function BestPaintCoastalHomesOceanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Best Paint for Coastal Homes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Paint Is Best for Coastal Homes Near the Ocean?
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            If you live on Sydney&apos;s Northern Beaches, the paint on your home has a harder job than almost anywhere else in Australia. Salt air, intense UV, and moisture cycling put paint systems under constant stress. Choosing the right product — and having it applied correctly — is what makes the difference between a job that lasts a decade and one that looks tired in three years.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What makes a paint &quot;coastal grade&quot;</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            There is no single regulated &quot;coastal grade&quot; standard, but experienced painters — and the premium paint manufacturers — understand what the coastal environment demands. The key properties to look for in exterior paint for Northern Beaches homes are:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                property: 'High binder resin content',
                detail: 'More resin means stronger film formation, better adhesion, and greater resistance to moisture penetration and salt attack.',
              },
              {
                property: 'UV-stable pigments',
                detail: 'UV-stable inorganic pigments resist fading and colour shift under the intense Northern Beaches sun. Cheaper paints use organic pigments that fade faster.',
              },
              {
                property: 'Elastomeric properties',
                detail: "Flexibility is critical. Coastal homes experience significant thermal movement — timber and render expanding and contracting with temperature and humidity changes. A rigid paint film cracks under this movement.",
              },
              {
                property: 'Mould and algae inhibitors',
                detail: 'Premium exterior paints contain biocides that inhibit mould and algae growth. These are depleted over time, which is why aging paint allows more mould growth.',
              },
              {
                property: 'Moisture vapour permeability',
                detail: "Exterior masonry and render surfaces release moisture vapour from within the wall. A paint that is too impermeable can trap this vapour, causing blistering. A breathable coating lets moisture out without letting liquid water in.",
              },
              {
                property: 'Salt resistance',
                detail: 'Specifically — resistance to chloride ion penetration. This matters for properties close to the ocean where salt deposits on the surface are significant.',
              },
            ].map((item) => (
              <div key={item.property} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-[#1a1a2e] mb-2">{item.property}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Substrate-specific guidance</h2>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">Render and masonry</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For rendered surfaces — common on Northern Beaches homes built from the 1960s through to the 1990s — an elastomeric exterior paint with good vapour permeability is the standard recommendation. These surfaces crack over time as the render ages, and a flexible paint system bridges minor cracking and moves with the substrate. Preparation must include filling significant cracks before painting; the elastomeric property of the topcoat is not a substitute for proper repair.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">Weatherboard and timber cladding</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Timber homes are common on the Northern Beaches — and they have specific requirements. Timber expands and contracts more than masonry, so flexibility is even more critical. A quality acrylic exterior paint applied over the correct primer for the timber species provides good flexibility and adhesion. Bare or poorly adhered timber must be properly back-prepared before any topcoat is applied — painting over old, failing paint on timber is one of the most common causes of rapid repainting failures we see.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">Fibro (fibre cement)</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Many older Northern Beaches homes have fibro cladding. This substrate needs a quality exterior primer to seal the surface and improve adhesion, followed by a premium exterior topcoat. Cutting costs on fibro preparation is a particular mistake — the surface is porous and will absorb cheap paint unevenly, resulting in rapid failure.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Why product selection matters as much as brand</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A common mistake is choosing a paint based on brand name rather than product specification. Most major manufacturers offer multiple tiers of product, from economy through to premium. The economy range from a well-known brand may actually underperform a premium product from a less familiar manufacturer.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When we specify products for Northern Beaches homes, we choose based on the substrate, the exposure level, and the performance claims of the specific product — not just the brand on the tin. A painter who defaults to a single product regardless of the job has not thought this through.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you would like advice on the right products for your home, <Link href="/contact" className="text-blue-600 hover:underline font-medium">get in touch for a free site assessment</Link>. We will walk through the surfaces, assess the conditions, and tell you exactly what we recommend and why.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Get the right product for your coastal home"
        body="We specify the right paint for every surface and exposure level. Call 0434 030 222 to arrange a free assessment and quote."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related articles and services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/blog/exterior-paint-life-coastal-environment" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How Long Does Paint Last Near the Coast</Link>
            <Link href="/blog/interior-vs-exterior-paint-difference" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior vs Exterior Paint Difference</Link>
            <Link href="/painters/narrabeen" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Painter Narrabeen</Link>
            <Link href="/painters/dee-why" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Painter Dee Why</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
