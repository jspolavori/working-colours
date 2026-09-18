import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { headers } from 'next/headers';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS } from '@/lib/business';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "House Painters Northern Beaches | Working Colours",
  description:
    "Interior and exterior house painting across Sydney's Northern Beaches. Working Colours provides residential repaints, deck staining and timber finishes.",
  metadataBase: new URL('https://www.wcpainting.com.au'),
  alternates: {
    canonical: 'https://www.wcpainting.com.au',
  },
  openGraph: {
    type: 'website',
    title: "House Painters Northern Beaches | Working Colours",
    description:
      "Interior and exterior house painting across Sydney's Northern Beaches. Working Colours provides residential repaints, deck staining and timber finishes.",
    url: 'https://www.wcpainting.com.au',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [
      {
        url: 'https://www.wcpainting.com.au/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Working Colours Painting Services — Northern Beaches Sydney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "House Painters Northern Beaches | Working Colours",
    description:
      "Interior and exterior house painting across Sydney's Northern Beaches. Working Colours provides residential repaints, deck staining and timber finishes.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS.siteUrl,
  name: BUSINESS.name,
  url: BUSINESS.siteUrl,
  telephone: BUSINESS.phoneTel,
  email: BUSINESS.schemaEmail,
  priceRange: '$$',
  description:
    "Premium residential painting services across Sydney's Northern Beaches. Interior, exterior, timber staining, deck staining and more. 18 years experience.",
  address: {
    '@type': 'PostalAddress',
    ...BUSINESS.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.7269,
    longitude: 151.2989,
  },
  areaServed: [
    'Narrabeen', 'Dee Why', 'Collaroy', 'Collaroy Plateau', 'Mona Vale',
    'Warriewood', 'North Narrabeen', 'Elanora Heights', 'Bayview', 'Newport',
    'Avalon', 'Palm Beach', 'Freshwater', 'Manly', 'Balgowlah', 'Seaforth',
    'Frenchs Forest', 'Belrose', 'Brookvale', 'Cromer',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: BUSINESS.hours.weekday.days,
      opens: BUSINESS.hours.weekday.opens,
      closes: BUSINESS.hours.weekday.closes,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: BUSINESS.hours.saturday.days,
      opens: BUSINESS.hours.saturday.opens,
      closes: BUSINESS.hours.saturday.closes,
    },
  ],
  serviceType: 'Residential Painting',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Painting Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior House Painting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exterior House Painting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Timber Staining and Restoration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deck Staining and Refinishing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Doors, Trims and Windows' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Repaints' } },
    ],
  },
  // aggregateRating intentionally omitted here until review counts can be verified.
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') ?? '';
  const isFunnel = pathname.startsWith('/paint-like-a-pro');
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-52K6NT3T');`,
          }}
        />
        <Script
          id="gtag-js"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16510360679"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16510360679');`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-52K6NT3T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {!isFunnel && <Navbar />}
        <main className={!isFunnel ? 'pb-16 md:pb-0' : ''}>{children}</main>
        {!isFunnel && <Footer />}
      </body>
    </html>
  );
}
