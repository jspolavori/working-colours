import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How to Choose a Painter on the Northern Beaches — 5 Things to Check | Working Colours Painting Northern Beaches',
  description:
    "Choosing a painter on the Northern Beaches? Here are 5 things to check before you hire — from licensing to preparation approach. Advice from 18 years in the trade.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/how-choose-painter-northern-beaches',
  },
  openGraph: {
    type: 'website',
    title: 'How to Choose a Painter on the Northern Beaches — 5 Things to Check | Working Colours Painting Northern Beaches',
    description:
      "Choosing a painter on the Northern Beaches? Here are 5 things to check before you hire — from licensing to preparation approach. Advice from 18 years in the trade.",
    url: 'https://www.wcpainting.com.au/blog/how-choose-painter-northern-beaches',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose a Painter on the Northern Beaches — 5 Things to Check | Working Colours Painting Northern Beaches',
    description:
      "Choosing a painter on the Northern Beaches? Here are 5 things to check before you hire — from licensing to preparation approach. Advice from 18 years in the trade.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'Should I always get three quotes?',
    answer:
      "Getting multiple quotes is sensible — but comparing them requires asking the same questions of each painter. If one quote is significantly cheaper, find out why. Is the preparation scope the same? Are they using the same quality of product? Often, the cheapest quote has cut somewhere you won't see until the paint starts failing.",
  },
  {
    question: 'Does it matter if a painter is local to the Northern Beaches?',
    answer:
      "It does matter. Local painters understand the coastal conditions, know which products perform in the environment, and have reputations to protect in a tight-knit community. A painter travelling from interstate or far western Sydney may not have the same familiarity with salt air exposure, humidity, and product performance on the coast.",
  },
  {
    question: 'Is a cheaper quote always a red flag?',
    answer:
      "Not necessarily — but a significantly cheaper quote always warrants further investigation. Ask specifically what preparation is included. If the answer is vague, that is the red flag. If the preparation scope is genuinely comparable, then the price difference may come down to overhead and margin.",
  },
  {
    question: 'What should a painting contract include?',
    answer:
      "At a minimum: the scope of work (surfaces to be painted), preparation steps, product brands and grades, number of coats, timeline, payment terms, and what happens if additional work is identified during the job. A clear, written quote protects both parties.",
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
      "name": "How to Choose a Painter on the Northern Beaches — 5 Things to Check",
      "item": "https://www.wcpainting.com.au/blog/how-choose-painter-northern-beaches"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Choose a Painter on the Northern Beaches — 5 Things to Check",
  "description": "Choosing a painter on the Northern Beaches? Here are 5 things to check before you hire — from licensing to preparation approach. Advice from 18 years in the trade.",
  "url": "https://www.wcpainting.com.au/blog/how-choose-painter-northern-beaches",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/how-choose-painter-northern-beaches"
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

export default function HowChoosePainterNorthernBeachesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            How to Choose a Painter
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to Choose a Painter on the Northern Beaches — 5 Things to Check
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Choosing the right painter is one of the most important decisions in a home improvement project. A good painter protects your home for a decade. A poor one leaves you with problems in two years. Here is what to look for — from someone who has been in the trade for 18 years.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">1. Check their licence and insurance</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In New South Wales, painting work above a certain value requires a contractor licence issued by NSW Fair Trading. Ask for the licence number and verify it at the NSW Fair Trading website. Additionally, a professional painter should carry public liability insurance — ask to see the certificate of currency. This protects you if something goes wrong on your property.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Any painter who hesitates on either of these requests should be crossed off the list immediately.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">2. Ask specifically what preparation is included</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Preparation is where most of the work happens — and where most cheap quotes cut corners. Before any paint goes on a surface, it needs to be clean, sound, filled, sanded where necessary, and primed where bare or stained. This takes time. It costs money.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ask every painter you speak to: what preparation does your quote include? If the answer is vague — &ldquo;we&apos;ll do the usual prep&rdquo; — ask them to be specific. If they cannot tell you what &ldquo;usual prep&rdquo; means in writing, that is a warning sign.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            On the Northern Beaches in particular, exterior preparation must include thorough pressure washing to remove salt contamination. Any painter who plans to paint over a salt-affected surface without washing it first is setting up a failure.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">3. Look at their actual work — not just a website</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Photos on a website are curated. Ask for the names of recent customers you can speak to directly, or for addresses of completed jobs you can drive past. A confident painter with good work will have no hesitation providing these.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Look specifically at how the trims and detail work turned out — clean lines on architraves, consistent sheen on doors, no runs or drips on window frames. The detail work is where the quality of a painter&apos;s craft shows most clearly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Online reviews on Google are also worth reading — but read for specifics. Reviews that mention preparation, timeliness, and communication tell you more than five-star ratings with no content.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">4. Understand who will actually do the work</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Some painting companies quote jobs and then subcontract them out to whoever is available. The person who assessed your job and gave you a confident quote may have nothing to do with the team that shows up on day one.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ask directly: will you be on the job, or will subcontractors be doing the work? There is nothing inherently wrong with using a team — but you should know who is responsible for quality control and who to contact if there are issues.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Owner-operated painting businesses — where the owner is on the tools — tend to have higher standards simply because their name is on every job.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">5. Get a written, itemised quote</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A professional painter provides a written quote that itemises the scope of work clearly: which surfaces, what preparation steps, which products (brand and grade), how many coats, and the timeline. This protects you and makes disputes essentially impossible because everything is agreed upfront.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Be wary of verbal quotes, round-number estimates, or quotes that arrive as a single line: &ldquo;Paint house — $X,000.&rdquo; A painter who cannot or will not provide an itemised quote is a painter who does not want accountability.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            At <Link href="/about" className="text-blue-600 hover:underline font-medium">Working Colours</Link>, every quote is written, itemised, and visited in person before submission. We do not quote sight unseen and we do not use vague estimates. If you&apos;re looking for a <Link href="/" className="text-blue-600 hover:underline font-medium">painter on the Northern Beaches</Link> who works this way, we&apos;d love to come out and take a look at your home.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#1a1a2e] mb-2">Quick checklist before you hire</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Verified NSW contractor licence number',
                'Current public liability insurance certificate',
                'Written, itemised quote with preparation steps listed',
                'References or verifiable recent work',
                'Clarity on who will be doing the work',
                'Clear payment terms and timeline',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Work with a painter you can trust"
        body="Working Colours is owner-operated, fully licensed, and insured. We provide written, itemised quotes after visiting your property in person. Call 0434 030 222."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related articles and services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">About Working Colours</Link>
            <Link href="/blog/cost-paint-house-sydney-2025" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Painting Costs 2025</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
