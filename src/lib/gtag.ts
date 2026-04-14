declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

const AW_ID = 'AW-16510360679';

export function gtagConversion(eventName: 'phone_call' | 'whatsapp_click' | 'form_submit') {
  if (typeof window === 'undefined') return;

  // Push to dataLayer for GTM triggers
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName });

  // Fire Google Ads conversion event
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: AW_ID });
  }
}
