import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How Long Does Exterior Paint Last in a Coastal Environment? | Working Colours Painting Northern Beaches',
  description:
    "Exterior paint near the ocean degrades faster than inland. How long does it last on the Northern Beaches, and what can you do to extend its life? An honest guide.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/exterior-paint-life-coastal-environment',
  },
  openGraph: {
    type: 'website',
    title: 'How Long Does Exterior Paint Last in a Coastal Environment? | Working Colours Painting Northern Beaches',
    description:
      "Exterior paint near the ocean degrades faster than inland. How long does it last on the Northern Beaches, and what can you do to extend its life? An honest guide.",
    url: 'https://www.wcpainting.com.au/blog/exterior-paint-life-coastal-environment',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Long Does Exterior Paint Last in a Coastal Environment? | Working Colours Painting Northern Beaches',
    description:
      "Exterior paint near the ocean degrades faster than inland. How long does it last on the Northern Beaches, and what can you do to extend its life? An honest guide.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'Does expensive paint last longer near the coast?',
    answer:
      "Premium paint absolutely performs better in coastal conditions. Higher resin content, UV-stable pigments, and better binder systems make a measurable difference on the Northern Beaches. A quality paint on a well-prepared surface will outlast a cheaper product by several years, even in demanding coastal positions.",
  },
  {
    question: 'What is the biggest cause of exterior paint failure near the ocean?',
    answer:
      "Salt contamination on the surface before painting. If salt deposits are not thoroughly removed by pressure washing before paint is applied, the paint loses adhesion from below and fails early — often within one to two years. This is the single most common cause of premature exterior paint failure on Northern Beaches homes.",
  },
  {
    question: 'Should I repaint sooner if my home is directly beachfront?',
    answer:
      "Yes. A directly beachfront property on the Northern Beaches may need exterior attention every five to seven years rather than the standard eight to twelve. The salt spray, UV, and wind at these positions are significantly more intense than even a few streets back. Regular checking — looking for chalking, cracking, or colour fade — lets you address problems early rather than reactively.",
  },
  {
    question: 'Is there a paint specifically designed for coastal homes?',
    answer:
      "Most major Australian manufacturers offer premium exterior ranges with enhanced UV resistance, moisture resistance, and mould inhibitors that are well suited to coastal conditions. The specific product choice also depends on the substrate — render, weatherboard, and brick each need different primers and topcoats.",
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
      "name": "How Long Does Exterior Paint Last in a Coastal Environment?",
      "item": "https://www.wcpainting.com.au/blog/exterior-paint-life-coastal-environment"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Long Does Exterior Paint Last in a Coastal Environment?",
  "description": "Exterior paint near the ocean degrades faster than inland. How long does it last on the Northern Beaches, and what can you do to extend its life? An honest guide.",
  "url": "https://www.wcpainting.com.au/blog/exterior-paint-life-coastal-environment",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/exterior-paint-life-coastal-environment"
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

export default function ExteriorPaintLifeCoastalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Exterior Paint Life in Coastal Environments
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Long Does Exterior Paint Last in a Coastal Environment?
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            If you live on the Northern Beaches, you already know the environment is hard on surfaces. Paint that would last twelve years inland might barely make it to seven near the coast. Here is an honest breakdown of what to expect — and what makes the biggest difference to longevity.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What the coastal environment does to paint</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Three forces work against exterior paint on the Northern Beaches more aggressively than they do inland:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: 'Salt air',
                detail: 'Salt deposits on surfaces attack the paint film and cause corrosion under the surface. Homes within 500m of the ocean are most affected, but salt-laden air travels considerably further during strong onshore winds.',
              },
              {
                title: 'UV radiation',
                detail: 'Sydney receives high UV year-round — north and west-facing surfaces receive the most intense exposure. UV breaks down paint binders, causes fading, and leads to chalking as the film degrades.',
              },
              {
                title: 'Moisture cycling',
                detail: 'Coastal humidity, sea spray, and morning dew all put moisture into and out of surfaces repeatedly. Without a properly bonded paint film, this moisture cycling causes peeling, bubbling, and mould growth.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Realistic lifespan expectations by location</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            On the Northern Beaches, a quality exterior paint job with proper preparation typically lasts:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { position: 'Directly beachfront (within 200m of ocean)', lifespan: '5 – 8 years' },
              { position: 'Close coastal (200m – 1km from ocean)', lifespan: '7 – 10 years' },
              { position: 'Sheltered inland streets', lifespan: '10 – 14 years' },
            ].map((item) => (
              <div key={item.position} className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-3">
                <span className="text-gray-700 text-sm">{item.position}</span>
                <span className="font-bold text-[#0066CC] text-sm">{item.lifespan}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            These ranges assume quality product, proper preparation, and normal weather exposure. A poor paint job in any of these positions will fail significantly sooner.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The three factors that extend paint life</h2>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">1. Thorough surface preparation</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Preparation is responsible for the majority of how long a paint job lasts. Pressure washing to remove salt and mould, scraping back loose paint, filling cracks, sanding to create a sound surface for adhesion, and priming correctly — all of this before a drop of topcoat goes on. Skipping any of these steps shortens the life of the paint significantly, regardless of product quality.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">2. Correct product selection</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Not all exterior paints are equal in coastal conditions. Premium Australian formulations with high binder content, UV stabilisers, and proven moisture resistance outperform standard products significantly on the Northern Beaches. Your painter should be able to explain why they use the products they specify — not just default to what is cheapest or most familiar.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">3. Regular maintenance</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Washing the exterior of your home annually — particularly after summer, when salt deposits are heaviest — dramatically extends the life of the paint. A simple low-pressure wash with a garden hose and mild detergent removes salt and mould before they have time to work their way into the paint film. It takes an hour and adds years to the job.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Warning signs it is time to repaint</h2>
          <div className="space-y-2 mb-8">
            {[
              'Chalking — a white powdery residue on the surface when you run your hand across it',
              'Fading — colour has visibly changed, particularly on north and west-facing walls',
              'Peeling or flaking — paint is lifting away from the surface',
              'Cracking or checking — fine lines or larger cracks in the paint film',
              'Mould or algae growth — black or green staining, particularly in sheltered areas',
              'Bubbling — paint has lost adhesion and moisture is trapped beneath it',
            ].map((sign) => (
              <div key={sign} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-600 text-sm">{sign}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            If you are seeing any of these signs on your Northern Beaches home, it is worth getting an assessment before the situation deteriorates further. Addressing failing paint early — before it exposes bare timber or allows moisture into the substrate — is always cheaper than repairing the damage that follows.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our <Link href="/services/exterior-painting" className="text-blue-600 hover:underline font-medium">exterior painting service</Link> starts with an honest assessment of what your surfaces actually need — no overselling, no shortcuts. <Link href="/contact" className="text-blue-600 hover:underline font-medium">Get in touch to arrange a free site visit</Link>.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Get a free exterior assessment and quote"
        body="We'll visit your home, assess the condition of all exterior surfaces, and give you an honest recommendation. No pressure, no obligation."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related articles and services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/blog/best-paint-coastal-homes-ocean" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Best Paint for Coastal Homes</Link>
            <Link href="/blog/best-time-paint-house-sydney" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Best Time to Paint Your Home</Link>
            <Link href="/blog/signs-house-needs-repainting-checklist" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Signs Your Home Needs Repainting</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
