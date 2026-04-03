import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Painter Manly | Working Colours Painting Services',
  description: "Professional house painting in Manly. Heritage homes, federation bungalows, pre-sale repaints. Northern Beaches specialists. Get a free quote.",
};

const faqs = [
  {
    question: 'Do you paint heritage and federation homes in Manly?',
    answer: "Yes. Manly has a high concentration of federation bungalows, art deco homes, and character properties. We have experience with the specific surfaces and details found on these homes — VJ walls, ornate cornices, and timber joinery.",
  },
  {
    question: 'Can you help me choose colours for a pre-sale repaint in Manly?',
    answer: "Yes. We can advise on neutral palettes that appeal broadly without being bland — particularly important in the Manly pre-sale market where presentation is everything.",
  },
  {
    question: 'How does ocean exposure affect homes in Manly?',
    answer: "Manly is exposed on both ocean and harbour sides. Salt air is a significant factor, particularly for properties within a few hundred metres of the water. We use products rated for high coastal exposure and always prepare surfaces thoroughly.",
  },
  {
    question: 'Do you do exterior repaints before auction?',
    answer: "Yes. Pre-sale repaints — interior, exterior, or both — are a significant part of our work. We can work to a timeline if you have an auction date.",
  },
];

export default function ManlyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; <Link href="/painters/northern-beaches" className="hover:underline">Northern Beaches</Link> &rsaquo; Manly
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Painter Manly</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Manly is home to some of the most beautiful and characterful properties on the Northern Beaches — federation bungalows, art deco homes, and terraces with real heritage value. These homes deserve painters who understand what they&apos;re working with.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/contact" className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors">Get a Free Quote</Link>
            <a href="tel:0434030222" className="border-2 border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-colors">0434 030 222</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Services in Manly</h2>
            <ul className="space-y-2">
              {[
                { label: 'Interior house painting', href: '/services/interior-painting' },
                { label: 'Exterior house painting', href: '/services/exterior-painting' },
                { label: 'Timber staining and restoration', href: '/services/timber-staining' },
                { label: 'Deck staining and refinishing', href: '/services/deck-staining' },
                { label: 'Doors, trims, windows and louvers', href: '/services/doors-trims-windows' },
                { label: 'Residential repaints', href: '/services/residential-repaints' },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-blue-600 hover:underline text-sm font-medium">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Painting homes in Manly</h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              Manly has a strong pre-sale market and buyers with high expectations. Fresh paint — done properly — consistently removes buyer objections and improves auction outcomes. We&apos;re experienced with working to tight pre-sale timelines.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              The heritage homes in Manly also require care. VJ walls, original timber joinery, and ornate details need considered preparation and application — not just a quick roll. We take this seriously.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTABanner
        heading="Get a free quote in Manly"
        body="Premium residential painting for Manly's finest homes. Get in touch today."
        primaryCTA={{ text: 'Request a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:0434030222' }}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Nearby suburbs we also service</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/painters/freshwater" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Freshwater</Link>
            <Link href="/painters/balgowlah" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Balgowlah</Link>
            <Link href="/painters/seaforth" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">Seaforth</Link>
            <Link href="/painters/northern-beaches" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">All Northern Beaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
