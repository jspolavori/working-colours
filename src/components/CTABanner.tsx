import Link from 'next/link';

interface CTABannerProps {
  heading: string;
  body?: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  trustLine?: string;
}

export default function CTABanner({
  heading,
  body,
  primaryCTA,
  secondaryCTA,
  trustLine,
}: CTABannerProps) {
  const isExternal = (href: string) => href.startsWith('http') || href.startsWith('tel:');

  return (
    <section className="relative bg-[#1a1a2e] py-20 px-4 overflow-hidden">
      {/* Subtle paint brush stroke decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, #0066CC 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 80%, #FF6B35 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {heading}
        </h2>
        {body && (
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          {isExternal(primaryCTA.href) ? (
            <a
              href={primaryCTA.href}
              target={primaryCTA.href.startsWith('http') ? '_blank' : undefined}
              rel={primaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white text-[#1a1a2e] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              {primaryCTA.text}
            </a>
          ) : (
            <Link
              href={primaryCTA.href}
              className="bg-white text-[#1a1a2e] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              {primaryCTA.text}
            </Link>
          )}
          {secondaryCTA &&
            (isExternal(secondaryCTA.href) ? (
              <a
                href={secondaryCTA.href}
                target={secondaryCTA.href.startsWith('http') ? '_blank' : undefined}
                rel={secondaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all duration-200 text-base"
              >
                {secondaryCTA.text}
              </a>
            ) : (
              <Link
                href={secondaryCTA.href}
                className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all duration-200 text-base"
              >
                {secondaryCTA.text}
              </Link>
            ))}
        </div>
        {trustLine && (
          <p className="text-sm text-blue-300/70">{trustLine}</p>
        )}
      </div>
    </section>
  );
}
