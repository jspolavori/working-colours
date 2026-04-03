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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Working Colours Painting Services" width={120} height={40} className="h-10 w-auto" />
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
            <a href="tel:0434030222" className="hidden md:block text-sm font-medium text-gray-700 hover:text-blue-600">
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
          </div>
        )}
      </div>
    </header>
  );
}
