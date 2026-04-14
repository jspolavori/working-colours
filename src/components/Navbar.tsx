'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  { name: 'Interior Painting', href: '/services/interior-painting' },
  { name: 'Exterior Painting', href: '/services/exterior-painting' },
  { name: 'Timber Staining', href: '/services/timber-staining' },
  { name: 'Deck Staining', href: '/services/deck-staining' },
  { name: 'Doors, Trims & Windows', href: '/services/doors-trims-windows' },
  { name: 'Residential Repaints', href: '/services/residential-repaints' },
];

const areas = [
  { name: 'Northern Beaches', href: '/painters/northern-beaches' },
  { name: 'Dee Why', href: '/painters/dee-why' },
  { name: 'Narrabeen', href: '/painters/narrabeen' },
  { name: 'Manly', href: '/painters/manly' },
  { name: 'Mona Vale', href: '/painters/mona-vale' },
  { name: 'Newport', href: '/painters/newport' },
  { name: 'Collaroy', href: '/painters/collaroy' },
  { name: 'Avalon', href: '/painters/avalon' },
  { name: 'Palm Beach', href: '/painters/palm-beach' },
  { name: 'Freshwater', href: '/painters/freshwater' },
  { name: 'Seaforth', href: '/painters/seaforth' },
  { name: 'Balgowlah', href: '/painters/balgowlah' },
];

import { gtagConversion } from '@/lib/gtag';

function trackCall() { gtagConversion('phone_call'); }

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-28">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Working Colours Painting Services" width={320} height={100} className="h-24 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</Link>

              {/* Services dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Areas dropdown */}
              <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
                <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                  Areas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    {areas.map((a) => (
                      <Link key={a.href} href={a.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        {a.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:0434030222"
                className="hidden md:block text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => trackCall()}
              >
                0434 030 222
              </a>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                Get a Free Quote
              </Link>
              <button
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
              <Link href="/" className="block px-2 py-2 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>Home</Link>
              <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Services</div>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-700" onClick={() => setMenuOpen(false)}>{s.name}</Link>
              ))}
              <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Areas</div>
              {areas.map((a) => (
                <Link key={a.href} href={a.href} className="block px-4 py-2 text-sm text-gray-700" onClick={() => setMenuOpen(false)}>{a.name}</Link>
              ))}
              <Link href="/blog" className="block px-2 py-2 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/about" className="block px-2 py-2 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/contact" className="block px-2 py-2 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>Contact</Link>
              {/* Mobile drawer phone — tracked */}
              <div className="pt-3 border-t border-gray-100 px-2">
                <a
                  href="tel:+61434030222"
                  className="flex items-center gap-2 py-2 text-sm font-semibold text-blue-600"
                  onClick={() => trackCall()}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.41 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.18 6.18l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                  Call 0434 030 222
                </a>
                <a
                  href="https://wa.me/61434030222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 text-sm font-semibold text-green-600"
                  onClick={() => { gtagConversion('whatsapp_click'); setMenuOpen(false); }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ─── Sticky Mobile Call Bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-gray-200 shadow-2xl">
        <a
          href="tel:+61434030222"
          onClick={() => trackCall()}
          className="flex-1 flex items-center justify-center gap-2 bg-[#0066CC] text-white font-semibold py-4 text-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.41 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.18 6.18l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
          Call Now
        </a>
        <a
          href="https://wa.me/61434030222"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-4 text-sm"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </div>
    </>
  );
}
