// Single source of truth for business details used across metadata,
// structured data, forms and contact links. Update here rather than
// hard-coding these values again in individual pages/components.
//
// NOTE: Saturday hours are already publicly displayed on /contact
// (7:00am-12:00pm). They are included here/in the site-wide schema for
// consistency with what the business already publishes — confirm they're
// still correct before relying on this file as the source of truth.

export const BUSINESS = {
  name: 'Working Colours Painting Services',
  legalName: 'Working Colours Painting Services',
  siteUrl: 'https://www.wcpainting.com.au',

  phoneDisplay: '0434 030 222',
  phoneTel: '+61434030222',
  whatsappNumber: '61434030222', // digits only, no "+", for wa.me links

  // Public-facing contact email shown on the site.
  publicEmail: 'workingcolours@gmail.com',

  // Where structured data currently attributes a business email — kept
  // distinct from publicEmail deliberately; confirm both are actually
  // monitored before treating them as interchangeable.
  schemaEmail: 'info@wcpainting.com.au',

  serviceArea: "Sydney's Northern Beaches, NSW",

  address: {
    streetAddress: '58-60 Park St',
    addressLocality: 'Narrabeen',
    addressRegion: 'NSW',
    postalCode: '2101',
    addressCountry: 'AU',
  },

  hours: {
    weekday: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '17:00' },
    saturday: { days: ['Saturday'], opens: '07:00', closes: '12:00' },
  },

  // Verified Google Business Profile / review URL. Left null until a real
  // URL is supplied — do not guess or construct one (see
  // REMAINING-SEO-FIXES.md). Any UI that would show a "Read our Google
  // reviews" link should check this is non-null first.
  googleReviewsUrl: null as string | null,
} as const;

export function whatsappHref(text: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
