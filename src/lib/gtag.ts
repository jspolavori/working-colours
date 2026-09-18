declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

const AW_ID = 'AW-16510360679';

export type ConversionEvent =
  | 'phone_call'
  | 'whatsapp_click'
  // A visitor opened WhatsApp/their email client with pre-filled details —
  // a handoff, not a confirmed enquiry (nothing has actually been sent yet).
  | 'form_submit'
  // The direct enquiry form's server accepted the enquiry for delivery.
  // Distinct from the handoff events above — this is the only event that
  // represents a confirmed submission.
  | 'enquiry_submitted';

export function gtagConversion(eventName: ConversionEvent) {
  if (typeof window === 'undefined') return;

  // Push to dataLayer for GTM triggers
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName });

  // Fire Google Ads conversion event
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: AW_ID });
  }
}
