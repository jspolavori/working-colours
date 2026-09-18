import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Interior vs Exterior Paint — What Is the Difference and Why It Matters | Working Colours Painting Northern Beaches',
  description:
    "Interior and exterior paint are formulated differently for good reason. Using the wrong one creates real problems. Here's the difference explained clearly.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/interior-vs-exterior-paint-difference',
  },
  openGraph: {
    type: 'website',
    title: 'Interior vs Exterior Paint — What Is the Difference and Why It Matters | Working Colours Painting Northern Beaches',
    description:
      "Interior and exterior paint are formulated differently for good reason. Using the wrong one creates real problems. Here's the difference explained clearly.",
    url: 'https://www.wcpainting.com.au/blog/interior-vs-exterior-paint-difference',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior vs Exterior Paint — What Is the Difference and Why It Matters | Working Colours Painting Northern Beaches',
    description:
      "Interior and exterior paint are formulated differently for good reason. Using the wrong one creates real problems. Here's the difference explained clearly.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'Can you use leftover exterior paint inside?',
    answer:
      "Technically you can, but it is not recommended. Exterior paint often contains additives — mould inhibitors, UV stabilisers, stronger solvents — that produce higher VOC levels. These can cause irritation in enclosed spaces and the odour lingers longer indoors. Premium exterior paints are also formulated for flexibility against weather, not for the scrubbability and low sheen qualities preferred on interior walls.",
  },
  {
    question: 'What happens if you use interior paint outside?',
    answer:
      "Interior paint is not formulated to handle UV, temperature cycling, moisture, or the mechanical stresses that exterior surfaces face. It will fade faster, chalk, and fail at adhesion significantly sooner than an exterior product. Using interior paint outside is one of the most common causes of premature paint failure.",
  },
  {
    question: 'Does the sheen level matter for interior paint?',
    answer:
      "Yes, significantly. Low-sheen is the standard for most interior walls — it hides surface imperfections, is easier to touch up, and has a softer appearance. Semi-gloss is used for trims, doors, and architraves because it is harder and more washable. Flat paint is sometimes used on ceilings. The sheen choice affects both the look of the room and the practical performance of the surface.",
  },
  {
    question: 'Are there paints suitable for both interior and exterior use?',
    answer:
      "Some manufacturers produce universal products, but these are typically compromise formulations. Purpose-built interior and exterior paints almost always outperform universal products in their respective environments. A professional painter will recommend the right product for each specific surface.",
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
      "name": "Interior vs Exterior Paint — What Is the Difference and Why It Matters",
      "item": "https://www.wcpainting.com.au/blog/interior-vs-exterior-paint-difference"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Interior vs Exterior Paint — What Is the Difference and Why It Matters",
  "description": "Interior and exterior paint are formulated differently for good reason. Using the wrong one creates real problems. Here's the difference explained clearly.",
  "url": "https://www.wcpainting.com.au/blog/interior-vs-exterior-paint-difference",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/interior-vs-exterior-paint-difference"
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

export default function InteriorVsExteriorPaintPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Interior vs Exterior Paint
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Interior vs Exterior Paint — What Is the Difference and Why It Matters
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            They look similar in the can. They come from the same manufacturers. But interior and exterior paints are formulated for fundamentally different jobs — and using the wrong product in the wrong place causes real problems, often faster than you would expect.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What interior paint is designed for</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Interior paints are formulated for the stable, controlled environment of a home interior. The key priorities are:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { label: 'Low VOC and odour', detail: "You're breathing this space every day. Interior paints are formulated to off-gas quickly, with lower levels of volatile organic compounds than exterior products." },
              { label: 'Scrubbability and washability', detail: "Interior surfaces get fingerprints, marks, and the general wear of daily life. Premium interior paints are designed to be cleaned repeatedly without the finish breaking down." },
              { label: 'Sheen options for different surfaces', detail: "Interior ranges typically offer more sheen options — flat, low-sheen, semi-gloss, gloss — because aesthetics and light reflection matter more in a living space than outdoors." },
              { label: 'Good touch-up ability', detail: "Walls get scuffed and marked. Interior paints are formulated to allow touch-ups that blend in, rather than showing as patches." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[#1a1a2e]">{item.label}: </span>
                  <span className="text-gray-600 text-sm">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What exterior paint is designed for</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Exterior paint has a much harder job. It must cope with:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { label: 'UV exposure', detail: "UV radiation breaks down paint binders over time. Exterior paints use UV-stable pigments and resin systems specifically to resist this. Interior paints used outside fade and chalk rapidly." },
              { label: 'Moisture cycling', detail: "Rain, humidity, sea spray, and temperature changes cause surfaces to expand and contract. Exterior paints are formulated to flex with these movements without cracking or losing adhesion." },
              { label: 'Mould and algae resistance', detail: "Exterior surfaces are warm and damp — ideal for biological growth. Premium exterior paints contain mould inhibitors that interior products do not need." },
              { label: 'Salt resistance', detail: "On the Northern Beaches, salt air is a significant factor. Exterior paints for coastal environments need strong binder systems and moisture resistance to cope with ongoing salt exposure." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[#1a1a2e]">{item.label}: </span>
                  <span className="text-gray-600 text-sm">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Where homeowners go wrong</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The most common mistake is using leftover interior paint to touch up an exterior surface. It looks fine initially. Within six months, the touched-up area starts to fade, chalk, or peel at a different rate to the surrounding surface — creating obvious patches.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The reverse — using exterior paint inside — is less common but causes different problems. Higher VOC levels, strong odour, and a formulation that does not meet the interior standard for touch-ups and washability.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Product selection is one of the reasons it matters who you choose as your painter. A professional <Link href="/" className="text-blue-600 hover:underline font-medium">painter on the Northern Beaches</Link> should specify products by name and explain why they are appropriate for each surface — not just use whatever is available.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">A note on primer</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Like topcoats, primers also come in interior and exterior formulations. The right primer for a bare exterior timber surface is not the same as the right primer for fresh plaster inside. Using the wrong primer undermines the adhesion and performance of everything applied on top. This is another area where correct product selection — from an experienced painter who knows the products — makes a real difference.
          </p>

          <p className="text-gray-600 leading-relaxed">
            If you are planning an <Link href="/services/interior-painting" className="text-blue-600 hover:underline font-medium">interior repaint</Link> or an <Link href="/services/exterior-painting" className="text-blue-600 hover:underline font-medium">exterior job</Link>, we are happy to walk you through the product selection as part of the quote process. <Link href="/contact" className="text-blue-600 hover:underline font-medium">Get in touch to arrange a free site visit</Link>.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Get professional advice on the right products for your home"
        body="We visit in person, assess your surfaces, and specify the right products for each job. No guesswork, no shortcuts."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related articles and services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/blog/best-paint-coastal-homes-ocean" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Best Paint for Coastal Homes</Link>
            <Link href="/blog/how-many-coats-paint-house" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How Many Coats Does a House Need?</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
