import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How to Choose a Painter in Sydney: What to Look For | Working Colours',
  description: "Red flags to avoid, questions to ask, and what separates a quality painter from a cheap quote that causes problems further down the track.",
};

const faqs = [
  {
    question: 'Do painters in NSW need to be licensed?',
    answer: "In NSW, painting work over a certain value requires a contractor licence from NSW Fair Trading. For residential painting work, a contractor licence is required for jobs over $5,000 in labour and materials. Always ask for a licence number and verify it on the NSW Fair Trading website.",
  },
  {
    question: 'Should a painter have public liability insurance?',
    answer: "Yes. Public liability insurance protects you if your property is damaged during the job. Ask for a current certificate of currency before any work starts. Any reputable painter will have this in order.",
  },
  {
    question: 'How many quotes should I get?',
    answer: "Two to three quotes gives you a meaningful comparison. More than three often leads to confusion rather than clarity. Focus your comparison on what preparation is included and what products are specified — not just the bottom-line price.",
  },
  {
    question: "What should I do if a painter won't provide a written quote?",
    answer: "Do not proceed without a written quote. A verbal estimate gives you no protection if the price changes during the job. Any reputable painter will provide a written quote that specifies the scope, materials, and price.",
  },
];

export default function HowToChoosePainterArticlePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            Hiring a Painter
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Choose a Painter in Sydney: What to Look For</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Finding a reliable painter is not difficult if you know what to look for — and what to avoid. Here is a straightforward guide to making a good choice.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Red flags to avoid</h2>
          <div className="space-y-3 mb-10">
            {[
              { label: 'They quote without seeing the job', detail: 'Accurate painting quotes require an in-person assessment. A painter who quotes from a description or photos cannot accurately price the preparation required. If the quote is wrong, you will find out mid-job.' },
              { label: 'No written quote', detail: 'A verbal estimate is not a quote. Without a written, itemised quote specifying scope, materials, and price, you have no protection against scope creep or unexpected charges.' },
              { label: 'Significantly the cheapest', detail: 'Painting is a labour-intensive trade. A quote that is dramatically lower than others typically means something has been left out — usually preparation. What looks like a saving often costs more to fix later.' },
              { label: 'Asks for a large deposit upfront', detail: 'Reputable painters do not require large deposits before starting work. A reasonable deposit — typically 10 to 20% — is normal for larger jobs. Requests for 50% or more upfront are a warning sign.' },
              { label: 'Cannot provide references or examples', detail: 'A painter with a solid track record can point you to previous clients or show photos of completed work. Inability to do so suggests limited experience or a reason to avoid drawing attention to past jobs.' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="font-semibold text-[#1a1a2e]">{item.label}:</span>{' '}
                  <span className="text-gray-600">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What good painters do differently</h2>
          <div className="space-y-3 mb-10">
            {[
              { label: 'They visit the property before quoting', detail: 'A proper assessment allows them to identify what preparation is needed and quote accurately.' },
              { label: 'They specify preparation in the quote', detail: 'The quote itemises what preparation is included — filling, sanding, priming — not just the topcoat.' },
              { label: 'They are clear about products', detail: "They can tell you what paint products they plan to use and why — not just a vague 'quality paints'." },
              { label: 'They communicate clearly', detail: "They respond promptly, show up when they say they will, and let you know if anything unexpected comes up during the job." },
              { label: 'They have current insurance', detail: "Public liability insurance is in order and they can provide a certificate of currency on request." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[#1a1a2e]">{item.label}:</span>{' '}
                  <span className="text-gray-600">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Questions to ask before hiring</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                'What preparation is included in the quote?',
                'What paint products will you use — and why?',
                'Do you have current public liability insurance?',
                "Are you licensed with NSW Fair Trading?",
                'Can you provide references from recent jobs in the area?',
                'What is your process if I am not satisfied with the finish?',
                'What does your quote include — and what is excluded?',
              ].map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">Q</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Looking for a painter on the Northern Beaches?"
        body="We visit in person before quoting, specify everything in writing, and stand behind our work."
        primaryCTA={{ text: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'About Working Colours', href: '/about' }}
      />

      <FAQSection faqs={faqs} />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/interior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Interior Painting Services</Link>
            <Link href="/services/exterior-painting" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Exterior Painting Services</Link>
            <Link href="/services/residential-repaints" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Residential Repaints</Link>
            <Link href="/about" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">About Working Colours</Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">Get a Quote</Link>
            <Link href="/blog/how-much-does-it-cost-to-paint-a-house-sydney" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors">House Painting Costs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
