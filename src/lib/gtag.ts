declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function gtagConversion(eventName: 'phone_call' | 'whatsapp_click' | 'form_submit') {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName });
}
