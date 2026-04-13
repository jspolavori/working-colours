'use client';

import { useState } from 'react';

export default function HeroForm() {
  const [form, setForm] = useState({ name: '', phone: '', suburb: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hi! I'd like a free quote from Working Colours.`,
      `Name: ${form.name}`,
      form.phone ? `Phone: ${form.phone}` : '',
      form.suburb ? `Suburb: ${form.suburb}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/61434030222?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/40 rounded-xl p-5 max-w-lg mx-auto mb-8 text-center">
        <p className="text-white font-semibold text-lg">Opening WhatsApp now ✓</p>
        <p className="text-green-200 text-sm mt-1">We typically reply within a few hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 max-w-lg mx-auto mb-8"
    >
      <p className="text-white font-semibold text-sm mb-4 text-center">
        Get a free quote — takes 30 seconds
      </p>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name *"
          className="w-full rounded-lg px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone number *"
          className="w-full rounded-lg px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="suburb"
          value={form.suburb}
          onChange={handleChange}
          placeholder="Your suburb"
          className="w-full rounded-lg px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
