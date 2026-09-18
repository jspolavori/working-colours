import type { Metadata } from 'next';
import Image from 'next/image';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About Working Colours | Painter Northern Beaches Sydney',
  description:
    "Working Colours is a premium residential painting service on Sydney's Northern Beaches. Owner-operated, 18 years experience, detail-focused, and honest. Find out more.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/about',
  },
  openGraph: {
    type: 'website',
    title: 'About Working Colours | Painter Northern Beaches Sydney',
    description:
      "Working Colours is a premium residential painting service on Sydney's Northern Beaches. Owner-operated, 18 years experience, detail-focused, and honest. Find out more.",
    url: 'https://www.wcpainting.com.au/about',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Working Colours | Painter Northern Beaches Sydney',
    description:
      "Working Colours is a premium residential painting service on Sydney's Northern Beaches. Owner-operated, 18 years experience, detail-focused, and honest. Find out more.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Working Colours</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Owner-operated. Northern Beaches based. 18 years in the trade.
          </p>
        </div>
      </section>

      {/* Section 1 — Owner intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Meet John</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I&apos;m John Spolavori — the owner of Working Colours and the person who shows up to every job.
                </p>
                <p>
                  I&apos;ve been painting homes on the Northern Beaches for over 18 years. I started Working Colours because I wanted to run a business the right way: honest advice, proper preparation, and work I&apos;m proud to stand behind.
                </p>
                <p>
                  You won&apos;t deal with a call centre or a project manager you never meet. You deal with me — from the first call to the final walkthrough.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-gray-200 bg-gray-100">
              <Image
                src="/about/john-spolavori.png"
                alt="John Spolavori, owner of Working Colours Painting Services, on a job on Sydney's Northern Beaches"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — What sets us apart */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">What sets us apart</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We&apos;re not a franchise. We&apos;re not a roster of subcontractors.
            </p>
            <p>
              Working Colours is a small, focused team. We take on the right number of jobs to do each one properly — and on the Northern Beaches, that means understanding the environment we&apos;re working in.
            </p>
            <p>
              Coastal conditions demand different products, different preparation, and a different level of attention than you&apos;d apply inland. Salt air, UV exposure, humidity — we factor all of it into every quote and every product selection. We&apos;ve been doing it here for 18 years. We know what holds up.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — How we work */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">How we work</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Good painting is 70% preparation. That&apos;s not a phrase we use to sound thorough — it&apos;s where the actual work happens. Filling, sanding, cleaning, priming. Done properly, a paint job lasts. Rushed, it fails in two years regardless of the product.
            </p>
            <p>
              We quote honestly. We show up on time. We leave your home clean at the end of every day. If there&apos;s ever an issue directly related to our application, we come back and fix it. No argument.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Closing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-[#0066CC] pl-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              If you&apos;re looking for a painter on the Northern Beaches who takes the job seriously, I&apos;d love to come out and take a look. No pressure, no vague estimate — just an honest conversation about what your home needs.
            </p>
            <p className="font-semibold text-[#1a1a2e]">— John Spolavori, Working Colours</p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to get started?"
        body="Get in touch for a free quote. We visit your property in person, assess what it needs, and give you an honest, detailed price."
        primaryCTA={{ text: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Call 0434 030 222', href: 'tel:+61434030222' }}
      />
    </>
  );
}
