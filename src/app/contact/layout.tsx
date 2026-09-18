import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Painter Northern Beaches | Working Colours',
  description:
    "Request a free quote from Working Colours — Northern Beaches painter with 18 years experience. Interior, exterior, deck staining. Call 0434 030 222 or fill in the form.",
  alternates: {
    canonical: 'https://www.wcpainting.com.au/contact',
  },
  openGraph: {
    type: 'website',
    title: 'Get a Free Quote | Painter Northern Beaches | Working Colours',
    description:
      "Request a free quote from Working Colours — Northern Beaches painter with 18 years experience. Interior, exterior, deck staining. Call 0434 030 222 or fill in the form.",
    url: 'https://www.wcpainting.com.au/contact',
    siteName: 'Working Colours Painting Services',
    locale: 'en_AU',
    images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Free Quote | Painter Northern Beaches | Working Colours',
    description:
      "Request a free quote from Working Colours — Northern Beaches painter with 18 years experience. Interior, exterior, deck staining. Call 0434 030 222 or fill in the form.",
    images: ['https://www.wcpainting.com.au/og-image.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
