import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Image src="/logo.png" alt="Working Colours" width={120} height={40} className="h-10 w-auto mb-4 brightness-200" />
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Premium residential painting services across Sydney&apos;s Northern Beaches.
            </p>
            <a href="tel:0434030222" className="text-white font-semibold hover:text-blue-400 transition-colors">0434 030 222</a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/interior-painting" className="hover:text-white transition-colors">Interior Painting</Link></li>
              <li><Link href="/services/exterior-painting" className="hover:text-white transition-colors">Exterior Painting</Link></li>
              <li><Link href="/services/timber-staining" className="hover:text-white transition-colors">Timber Staining</Link></li>
              <li><Link href="/services/deck-staining" className="hover:text-white transition-colors">Deck Staining</Link></li>
              <li><Link href="/services/doors-trims-windows" className="hover:text-white transition-colors">Doors, Trims & Windows</Link></li>
              <li><Link href="/services/residential-repaints" className="hover:text-white transition-colors">Residential Repaints</Link></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Areas We Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/painters/northern-beaches" className="hover:text-white transition-colors">Northern Beaches</Link></li>
              <li><Link href="/painters/dee-why" className="hover:text-white transition-colors">Dee Why</Link></li>
              <li><Link href="/painters/narrabeen" className="hover:text-white transition-colors">Narrabeen</Link></li>
              <li><Link href="/painters/manly" className="hover:text-white transition-colors">Manly</Link></li>
              <li><Link href="/painters/mona-vale" className="hover:text-white transition-colors">Mona Vale</Link></li>
              <li><Link href="/painters/newport" className="hover:text-white transition-colors">Newport</Link></li>
              <li><Link href="/painters/avalon" className="hover:text-white transition-colors">Avalon</Link></li>
              <li><Link href="/painters/palm-beach" className="hover:text-white transition-colors">Palm Beach</Link></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Get a Free Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Working Colours Painting Services. All rights reserved.</p>
          <p>Sydney&apos;s Northern Beaches, NSW, Australia</p>
        </div>
      </div>
    </footer>
  );
}
