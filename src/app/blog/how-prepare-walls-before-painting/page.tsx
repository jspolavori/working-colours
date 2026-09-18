import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How to Prepare Walls Before Painting — The Professional Way | Working Colours Painting Northern Beaches',
  description:
    "Good painting is 70% preparation. Here is how a professional prepares walls before painting — from washing and filling to priming and masking. No shortcuts.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/how-prepare-walls-before-painting',
  },
  openGraph: {
    type: 'website',
    title: 'How to Prepare Walls Before Painting — The Professional Way | Working Colours Painting Northern Beaches',
    description:
      "Good painting is 70% preparation. Here is how a professional prepares walls before painting — from washing and filling to priming and masking. No shortcuts.",
    url: 'https://www.wcpainting.com.au/blog/how-prepare-walls-before-painting',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Prepare Walls Before Painting — The Professional Way | Working Colours Painting Northern Beaches',
    description:
      "Good painting is 70% preparation. Here is how a professional prepares walls before painting — from washing and filling to priming and masking. No shortcuts.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'Do I always need to prime before painting walls?',
    answer:
      "Not always, but often. You definitely need primer when painting over bare plaster or drywall, when painting over a stain or mark that bleeds through, when making a significant colour change (especially from dark to light), or when the existing surface is very porous. Your painter should assess each situation and specify primer where it is actually needed — not skip it as a cost-cutting measure.",
  },
  {
    question: 'Can I paint over mould on the walls?',
    answer:
      "No. Painting over mould is one of the most common mistakes homeowners and cheap painters make. The mould will grow back through the paint within weeks. Mould must be killed with an appropriate anti-fungal treatment, wiped clean, and allowed to dry fully before any paint goes on. If mould is caused by a moisture problem — condensation, leaks, lack of ventilation — the source needs to be addressed or it will return regardless of the paint.",
  },
  {
    question: 'How long does wall preparation take?',
    answer:
      "For an average bedroom, preparation — washing, filling, sanding, and priming where needed — typically takes between half a day and a full day before any topcoat goes on. Rooms in poor condition take longer. Skipping preparation steps to paint faster is where poor results come from.",
  },
  {
    question: 'What type of filler should be used for walls?',
    answer:
      "For small holes and cracks, a water-based flexible filler works well for most interior surfaces. For larger repairs or external use, products with higher flexibility and better adhesion are needed. Applying filler correctly — building up in layers for larger voids and sanding smooth when cured — makes a significant difference to the final result.",
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
      "name": "How to Prepare Walls Before Painting — The Professional Way",
      "item": "https://www.wcpainting.com.au/blog/how-prepare-walls-before-painting"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Prepare Walls Before Painting — The Professional Way",
  "description": "Good painting is 70% preparation. Here is how a professional prepares walls before painting — from washing and filling to priming and masking. No shortcuts.",
  "url": "https://www.wcpainting.com.au/blog/how-prepare-walls-before-painting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/how-prepare-walls-before-painting"
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

export default function HowPrepareWallsBeforePaintingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            How to Prepare Walls Before Painting
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to Prepare Walls Before Painting — The Professional Way
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            The quality of a paint job is determined almost entirely by what happens before the first coat goes on. This is not an exaggeration — a paint job that lasts a decade starts with preparation. One that starts failing in two years almost always failed to prepare properly.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">The professional preparation sequence</h2>

          <div className="space-y-8 mb-8">
            {[
              {
                step: '1',
                title: 'Clean the surface',
                content: "All walls should be washed before painting. Interior walls accumulate dust, grease (particularly in kitchens), and body oils near high-touch areas like light switches and door frames. These contaminate the paint surface and cause adhesion failures. A mild detergent solution, wrung-out sponge, and thorough wipe-down is usually sufficient. Allow the wall to dry completely before proceeding.",
              },
              {
                step: '2',
                title: 'Treat mould',
                content: "If there is any visible mould or algae — typically presenting as black, green, or grey spots on ceilings and walls — it must be treated before any other step. Use an appropriate anti-fungal solution, allow it to work, then wipe clean. Do not paint over mould. It will grow back through the paint.",
              },
              {
                step: '3',
                title: 'Fill holes and cracks',
                content: "Every hole (from nails, hooks, or fixings), crack, and surface imperfection should be filled. Apply filler flush with the surface, allow it to cure fully according to the manufacturer's instructions, then sand smooth. Build up larger voids in layers rather than trying to fill them in one go — single thick applications shrink as they dry and create depressions.",
              },
              {
                step: '4',
                title: 'Sand all filled areas',
                content: "Once filler has cured, sand it smooth with fine-grit sandpaper (120–180 grit for most situations) until it is flush with the surrounding wall. Feather the edges so there is no abrupt boundary between the filled area and the original surface. Wipe away dust with a damp cloth.",
              },
              {
                step: '5',
                title: 'Prime where required',
                content: "Bare surfaces — where filler has been applied, where old paint has been sanded back, or where there is bare plaster — need primer. Primer seals porous surfaces, improves topcoat adhesion, and prevents stains from bleeding through. Using topcoat on unprimed surfaces produces uneven sheen and absorbs paint unevenly, resulting in a patchy finish.",
              },
              {
                step: '6',
                title: 'Mask everything adjacent',
                content: "Careful masking is what separates a professional finish from an amateur one. Light switches, power points, trims, window frames, and skirting boards should all be masked properly. Good masking takes time — rushed masking produces the visible wavering lines and paint bleed that make a job look unprofessional.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#0066CC] text-white font-bold text-lg flex items-center justify-center">{item.step}</div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What a cheap painter skips</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every step in the preparation sequence takes time. Time is where the cost is. A painter who quotes significantly below the market rate is almost certainly skipping preparation steps — washing, filling, sanding, or priming.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The result looks the same on day one. The difference shows up six months to two years later, when paint starts peeling over unfilled cracks, patchy areas appear where filler was not primed, or mould grows back through unprepared surfaces.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            When we prepare surfaces at <Link href="/about" className="text-blue-600 hover:underline font-medium">Working Colours</Link>, we do not skip steps. It takes longer and it is included in the quote. That is why our results last — and why we are comfortable standing behind the work.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#1a1a2e] mb-2">Hiring a painter?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ask them to describe the preparation steps included in their quote. If the answer is vague — &ldquo;we&apos;ll do the usual prep&rdquo; — ask for specifics. A confident, experienced painter will have no hesitation walking you through exactly what they plan to do and why. <Link href="/contact" className="text-blue-600 hover:underline font-medium">Get in touch</Link> if you&apos;d like to see what a properly prepared and quoted job looks like.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Proper preparation — every time"
        body="At Working Colours, preparation is not optional. We detail every preparation step in our quotes so there are no surprises. Call 0434 030 222."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related articles and services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
            <Link href="/blog/interior-painting-mistakes-to-avoid" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting Mistakes to Avoid</Link>
            <Link href="/blog/how-many-coats-paint-house" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How Many Coats Does a House Need?</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
