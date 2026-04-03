'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-[#0066CC] to-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-blue-100 text-lg">
            Fill in the form below and we&apos;ll be in touch to arrange a site visit and provide a detailed, itemised quote.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Thanks! We&apos;ll be in touch.</h2>
                <p className="text-green-700">We&apos;ve received your enquiry and will contact you within one business day to arrange a site visit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Tell us about your project</h2>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
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
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="suburb" className="block text-sm font-semibold text-gray-700 mb-1">Your suburb</label>
                  <input
                    type="text"
                    id="suburb"
                    name="suburb"
                    value={form.suburb}
                    onChange={handleChange}
                    placeholder="e.g. Dee Why"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Service required</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  >
                    <option value="">Select a service...</option>
                    <option value="interior-painting">Interior House Painting</option>
                    <option value="exterior-painting">Exterior House Painting</option>
                    <option value="timber-staining">Timber Staining and Restoration</option>
                    <option value="deck-staining">Deck Staining and Refinishing</option>
                    <option value="doors-trims-windows">Doors, Trims, Windows and Louvers</option>
                    <option value="residential-repaints">Residential Repaints and Touch-Ups</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Tell us more</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you need done, the size of the job, and any other relevant details..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-base"
                >
                  Send Enquiry
                </button>
                <p className="text-xs text-gray-500 text-center">We typically respond within one business day.</p>
              </form>
            )}
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
                    <a href="tel:0434030222" className="text-lg font-bold text-blue-600 hover:underline">0434 030 222</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/61434030222"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-green-600 hover:underline"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Service area</p>
                    <p className="font-semibold text-gray-800">Sydney&apos;s Northern Beaches, NSW</p>
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
                We&apos;ll contact you to arrange a site visit at a time that suits you. After assessing the job, we&apos;ll send you a detailed, itemised quote — no vague estimates, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
