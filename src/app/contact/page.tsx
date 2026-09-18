'use client';

import { useEffect, useState } from 'react';
import { gtagConversion } from '@/lib/gtag';
import { BUSINESS, whatsappHref } from '@/lib/business';
import {
  EnquiryFieldErrors,
  FIELD_LIMITS,
  SERVICE_OPTIONS,
  serviceLabel,
  validateEnquiry,
} from '@/lib/enquiry';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  suburb: '',
  service: '',
  message: '',
};

function buildSummary(form: typeof initialForm, greeting: string) {
  return [
    greeting,
    `Name: ${form.name}`,
    form.phone ? `Phone: ${form.phone}` : '',
    form.email ? `Email: ${form.email}` : '',
    form.suburb ? `Suburb: ${form.suburb}` : '',
    form.service ? `Service: ${serviceLabel(form.service)}` : '',
    form.message ? `Details: ${form.message}` : '',
  ].filter(Boolean).join('\n');
}

function buildMailto(form: typeof initialForm) {
  const subject = `Website enquiry: ${form.name || 'New enquiry'}`;
  const body = buildSummary(form, `Hi, I'd like a quote from Working Colours.`);
  return `mailto:${BUSINESS.publicEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [fieldErrors, setFieldErrors] = useState<EnquiryFieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [startedAt] = useState(() => Date.now());

  // Handles the no-JS fallback: if the browser submitted the form
  // natively (see the form's method/action below), /api/enquiry
  // redirects back here with a status flag instead of raw JSON.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const result = params.get('enquiry');
    if (result === 'sent') {
      setStatus('success');
      setStatusMessage("Thanks — your enquiry has been sent to Working Colours. We'll be in touch soon.");
    } else if (result === 'error') {
      setStatus('error');
      setStatusMessage(
        `Something went wrong sending your enquiry. Please call ${BUSINESS.phoneDisplay} or message us on WhatsApp instead.`,
      );
    }
    if (result) {
      params.delete('enquiry');
      const clean = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
      window.history.replaceState({}, '', clean);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { ok, errors } = validateEnquiry(form);
    setFieldErrors(errors);
    if (!ok) {
      setStatus('error');
      setStatusMessage('Please check the highlighted fields below.');
      return;
    }

    setStatus('submitting');
    setStatusMessage(null);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, honeypot, startedAt }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus('success');
        setStatusMessage(
          "Thanks — your enquiry has been sent to Working Colours. We'll be in touch soon.",
        );
        gtagConversion('enquiry_submitted');
        setForm(initialForm);
        setFieldErrors({});
        return;
      }

      if (data.fields) setFieldErrors(data.fields);
      setStatus('error');
      setStatusMessage(
        data.message ??
          `Something went wrong sending your enquiry. Please call ${BUSINESS.phoneDisplay} or message us on WhatsApp instead.`,
      );
    } catch {
      setStatus('error');
      setStatusMessage(
        `We couldn't reach our server. Please check your connection, or call ${BUSINESS.phoneDisplay} or message us on WhatsApp instead.`,
      );
    }
  };

  const handleWhatsApp = () => {
    gtagConversion('whatsapp_click');
    const text = buildSummary(form, `Hi! I'd like a quote from Working Colours.`);
    window.open(whatsappHref(text), '_blank', 'noopener,noreferrer');
  };

  const isSubmitting = status === 'submitting';

  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-blue-100 text-lg">
            Tell us about your project below and we&apos;ll send it straight to Working Colours —
            or open WhatsApp / your email app if you&apos;d rather send it that way.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Direct enquiry form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              // Fallback for the rare case JavaScript fails: instead of a
              // default GET submission (which would append these details
              // to the page URL), this posts to the real enquiry endpoint,
              // which redirects back here with a status flag — see the
              // useEffect above and src/app/api/enquiry/route.ts.
              method="post"
              action="/api/enquiry"
              className="space-y-5"
            >
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">Tell us about your project</h2>
              <p className="text-sm text-gray-500 mb-6">
                This sends your enquiry directly to Working Colours by email — it does not open
                WhatsApp or your email app.
              </p>

              <input type="hidden" name="startedAt" value={startedAt} />

              {/* Honeypot — hidden from real visitors, left for bots that auto-fill every field */}
              <div aria-hidden="true" className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden">
                <label htmlFor="company-website">Leave this field blank</label>
                <input
                  id="company-website"
                  type="text"
                  name="companyWebsite"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div role="status" aria-live="polite">
                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm">
                    {statusMessage}
                  </div>
                )}
                {status === 'error' && statusMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm">
                    {statusMessage}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  maxLength={FIELD_LIMITS.name}
                  required
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
                {fieldErrors.name && (
                  <p id="name-error" className="text-sm text-red-600 mt-1">{fieldErrors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={FIELD_LIMITS.phone}
                    aria-invalid={!!fieldErrors.contact}
                    aria-describedby={fieldErrors.contact ? 'contact-error' : undefined}
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="04XX XXX XXX"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    maxLength={FIELD_LIMITS.email}
                    aria-invalid={!!fieldErrors.contact}
                    aria-describedby={fieldErrors.contact ? 'contact-error' : undefined}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 -mt-3">Provide a phone number or an email address (at least one).</p>
              {fieldErrors.contact && (
                <p id="contact-error" className="text-sm text-red-600 -mt-3">{fieldErrors.contact}</p>
              )}

              <div>
                <label htmlFor="suburb" className="block text-sm font-semibold text-gray-700 mb-1">Your suburb *</label>
                <input
                  type="text"
                  id="suburb"
                  name="suburb"
                  autoComplete="address-level2"
                  maxLength={FIELD_LIMITS.suburb}
                  required
                  aria-invalid={!!fieldErrors.suburb}
                  aria-describedby={fieldErrors.suburb ? 'suburb-error' : undefined}
                  value={form.suburb}
                  onChange={handleChange}
                  placeholder="e.g. Dee Why"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
                {fieldErrors.suburb && (
                  <p id="suburb-error" className="text-sm text-red-600 mt-1">{fieldErrors.suburb}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Service required *</label>
                <select
                  id="service"
                  name="service"
                  autoComplete="off"
                  required
                  aria-invalid={!!fieldErrors.service}
                  aria-describedby={fieldErrors.service ? 'service-error' : undefined}
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
                {fieldErrors.service && (
                  <p id="service-error" className="text-sm text-red-600 mt-1">{fieldErrors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Tell us more *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={FIELD_LIMITS.message}
                  required
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe what you need done, the size of the job, and any other relevant details..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                />
                {fieldErrors.message && (
                  <p id="message-error" className="text-sm text-red-600 mt-1">{fieldErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full bg-[#0066CC] hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition-colors text-base flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending…' : 'Send Enquiry'}
              </button>
              <p className="text-xs text-gray-500 text-center">
                Sends your enquiry directly to Working Colours. We typically respond within a few hours.
              </p>
            </form>

            {/* Alternative ways to send the same details */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h2 className="text-lg font-bold text-[#1a1a2e] mb-1">Prefer WhatsApp or email?</h2>
              <p className="text-sm text-gray-500 mb-4">
                These use whatever you&apos;ve typed above, but open a separate app — you still need to
                press Send there yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                >
                  Open WhatsApp with these details
                </button>
                <a
                  href={buildMailto(form)}
                  className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                >
                  Open email with these details
                </a>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                Open WhatsApp with your project details, then press Send to message us.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Contact us directly</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <a
                      href={`tel:${BUSINESS.phoneTel}`}
                      onClick={() => gtagConversion('phone_call')}
                      className="text-lg font-bold text-blue-600 hover:underline"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                    <a
                      href={whatsappHref("Hi! I'd like a quote from Working Colours.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => gtagConversion('whatsapp_click')}
                      className="text-lg font-bold text-green-600 hover:underline"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Service area</p>
                    <p className="font-semibold text-gray-800">{BUSINESS.serviceArea}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#1a1a2e] mb-4">Business hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday – Friday</span>
                  <span className="font-semibold text-gray-800">7:00am – 5:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-800">7:00am – 12:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-800">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-[#1a1a2e] mb-2">What happens next?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Submitting the form above sends your enquiry directly to Working Colours by email.
                We&apos;ll reply as soon as we can to arrange a site visit — then send a detailed,
                itemised quote. No vague estimates, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
