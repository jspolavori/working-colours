import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'House Painter Northern Beaches Sydney | Working Colours',
  description: "Premium residential painting on Sydney's Northern Beaches. Interior, exterior, timber staining, deck staining and more. Get a free quote today.",
  metadataBase: new URL('https://wcpainting.com.au'),
  openGraph: {
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    type: 'website',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://wcpainting.com.au',
  name: 'Working Colours Painting Services',
  url: 'https://wcpainting.com.au',
  telephone: '+61434030222',
  priceRange: '$$',
  description:
    "Premium residential painting services across Sydney's Northern Beaches. Interior, exterior, timber staining, deck staining and more.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Northern Beaches',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.7271,
    longitude: 151.2897,
  },
  areaServed: [
    'Narrabeen', 'Dee Why', 'Collaroy', 'Collaroy Plateau', 'Mona Vale',
    'Warriewood', 'North Narrabeen', 'Elanora Heights', 'Bayview', 'Newport',
    'Avalon', 'Palm Beach', 'Freshwater', 'Manly', 'Balgowlah', 'Seaforth',
    'Frenchs Forest', 'Belrose', 'Brookvale', 'Cromer',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
