import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Signs Your Home Needs Repainting — Exterior Checklist | Working Colours Painting Northern Beaches',
  description:
    "A practical checklist of exterior warning signs that your home needs repainting. From chalking and peeling to mould and fading — know what to look for.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/blog/signs-house-needs-repainting-checklist',
  },
  openGraph: {
    type: 'website',
    title: 'Signs Your Home Needs Repainting — Exterior Checklist | Working Colours Painting Northern Beaches',
    description:
      "A practical checklist of exterior warning signs that your home needs repainting. From chalking and peeling to mould and fading — know what to look for.",
    url: 'https://www.wcpainting.com.au/blog/signs-house-needs-repainting-checklist',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signs Your Home Needs Repainting — Exterior Checklist | Working Colours Painting Northern Beaches',
    description:
      "A practical checklist of exterior warning signs that your home needs repainting. From chalking and peeling to mould and fading — know what to look for.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'How often should I check the exterior paint on my Northern Beaches home?',
    answer:
      "A quick visual inspection twice a year — spring and autumn — is a sensible habit. Look for the warning signs listed in this article, paying particular attention to south-facing walls (which stay damp longer) and north-facing surfaces (which receive the most UV). Properties within a few hundred metres of the beach benefit from a wash and check after any significant weather event.",
  },
  {
    question: 'Can I just paint over peeling exterior paint?',
    answer:
      "No. Peeling paint must be removed before repainting. Painting over peeling areas will result in a finish that peels away with the old paint underneath within a short time. All loose and failing paint must be scraped back, the surface prepared, and fresh primer applied before topcoats go on.",
  },
  {
    question: 'My walls have mould. Is that a painting problem?',
    answer:
      "Mould on exterior walls usually indicates that the current paint has lost its mould-inhibiting properties — which happens as paint ages — or that there is a moisture source that needs addressing. A repaint with a quality exterior product containing mould inhibitors will address the surface issue, but if there is a structural moisture source (leaking gutters, poor drainage, lack of ventilation), that needs attention first.",
  },
  {
    question: 'How quickly should I act on exterior paint problems?',
    answer:
      "The sooner the better. Failing paint on the exterior exposes your substrate — timber, render, or masonry — to moisture penetration. On the Northern Beaches, that moisture cycling combined with salt exposure can cause significant damage faster than you might expect. Addressing failing paint early is always cheaper than repairing the structural damage that follows.",
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
      "name": "Signs Your Home Needs Repainting — Exterior Checklist",
      "item": "https://www.wcpainting.com.au/blog/signs-house-needs-repainting-checklist"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Signs Your Home Needs Repainting — Exterior Checklist",
  "description": "A practical checklist of exterior warning signs that your home needs repainting. From chalking and peeling to mould and fading — know what to look for.",
  "url": "https://www.wcpainting.com.au/blog/signs-house-needs-repainting-checklist",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.wcpainting.com.au/blog/signs-house-needs-repainting-checklist"
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

export default function SignsHouseNeedsRepaintingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Signs Your Home Needs Repainting
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Signs Your Home Needs Repainting — Exterior Checklist
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Exterior paint does not just affect how your home looks — it protects your walls, timber, and substrate from moisture, salt, and UV. Knowing the warning signs of failing paint means you can act before the damage underneath becomes the bigger problem.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">The exterior repainting checklist</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Walk around your home and check for these signs. Any of them indicate the paint system is losing its ability to protect your home.
          </p>

          <div className="space-y-5 mb-8">
            {[
              {
                sign: 'Chalking',
                description: 'Run your hand across an exterior wall. If it comes away with a white powdery residue, the paint binder is breaking down. This is one of the earliest signs of age and UV degradation. Chalking makes the surface susceptible to moisture penetration.',
                severity: 'Early warning',
              },
              {
                sign: 'Fading',
                description: 'If the colour on north and west-facing walls is visibly lighter or more washed-out than when the home was painted, the UV-stable pigments have been exhausted. This usually means the protective properties of the paint are also depleted.',
                severity: 'Early warning',
              },
              {
                sign: 'Cracking or checking',
                description: 'Fine hairline cracks — often described as checking — indicate the paint film has lost flexibility and is cracking under the thermal movement of the substrate. On the Northern Beaches, this is accelerated by UV intensity and temperature cycling.',
                severity: 'Action needed',
              },
              {
                sign: 'Peeling or flaking',
                description: 'Paint that is lifting away from the surface in sheets or flakes has lost adhesion. This is beyond chalking and fading — it means the paint film has failed and the substrate beneath is exposed to direct moisture entry.',
                severity: 'Urgent',
              },
              {
                sign: 'Bubbling or blistering',
                description: 'Bubbles under the paint surface indicate trapped moisture — either from rain penetrating through cracks or from moisture in the substrate at the time of painting. The bubbles eventually rupture, leaving exposed substrate.',
                severity: 'Urgent',
              },
              {
                sign: 'Mould, algae, or lichen',
                description: 'Black, green, or grey biological growth on exterior walls indicates that the anti-microbial additives in the paint have been exhausted. Left untreated, mould and algae accelerate paint degradation and can penetrate into the substrate.',
                severity: 'Action needed',
              },
              {
                sign: 'Visible timber or substrate',
                description: 'Any area where bare timber, render, or masonry is exposed to the elements — whether from peeling paint, impact damage, or wear — requires immediate attention. Exposed substrate on the Northern Beaches deteriorates rapidly.',
                severity: 'Urgent',
              },
              {
                sign: 'Rust staining from fixings',
                description: 'Orange or brown streaking from nails, screws, or metal fixings indicates moisture is getting in at these points and causing corrosion. This commonly indicates failed paint around penetrations.',
                severity: 'Action needed',
              },
            ].map((item) => (
              <div key={item.sign} className={`rounded-xl p-5 border ${
                item.severity === 'Urgent' ? 'bg-red-50 border-red-200' :
                item.severity === 'Action needed' ? 'bg-amber-50 border-amber-200' :
                'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[#1a1a2e]">{item.sign}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    item.severity === 'Urgent' ? 'bg-red-100 text-red-700' :
                    item.severity === 'Action needed' ? 'bg-amber-100 text-amber-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>{item.severity}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Northern Beaches — what to check more carefully</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            On the Northern Beaches, salt air and UV intensity accelerate all of the warning signs above. Properties within 500 metres of the ocean are at the highest risk of early paint failure. Pay particular attention to:
          </p>
          <div className="space-y-2 mb-8">
            {[
              'South-facing walls — stay damp longer, more susceptible to mould and adhesion failure',
              'North and west-facing walls — highest UV exposure, fading and chalking appear first here',
              'Timber window frames and sills — salt moisture entry causes paint failure faster than on masonry',
              'Decks and pergolas — horizontal surfaces hold moisture and are more UV-exposed than vertical ones',
              'Eaves and fascias — often neglected but critical to the protection of the roof structure',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed">
            If you have identified any of these warning signs on your home, <Link href="/contact" className="text-blue-600 hover:underline font-medium">get in touch for a free assessment</Link>. We will walk through the surfaces honestly and tell you what needs to happen — and when.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Free exterior assessment for your home"
        body="We'll walk through your exterior surfaces, identify what needs attention, and give you a clear, honest recommendation. No obligation."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related articles and services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
            <Link href="/blog/exterior-paint-life-coastal-environment" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">How Long Does Paint Last Near the Coast</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
