import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Paint Your Home Like a Pro | Working Colours',
  description:
    'Learn how to paint your home properly and avoid expensive mistakes from a real painter with 18 years on Sydney\'s Northern Beaches.',
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function PaintLikeAPro() {
  return (
    <div className="bg-white text-[#1a1a2e] font-sans">
      <ScrollToTop />

      {/* ── MINIMAL FUNNEL HEADER ─────────────────────────────────── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="Working Colours Painting Services" width={200} height={62} className="h-14 w-auto" />
          </Link>
          <a
            href="#offer"
            className="bg-[#0066CC] hover:bg-[#0055aa] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Get Instant Access →
          </a>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center bg-[#1a1a2e] overflow-hidden">
        {/* Wrapper carries the filters — never put filter directly on <video> in Safari */}
        <div className="absolute inset-0 overflow-hidden brightness-[0.65] contrast-[0.85] saturate-[0.6]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ WebkitTransform: 'translateZ(0)', minWidth: '100%', minHeight: '100%' }}
          >
            <source src="/paint-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-[#0066CC] text-sm font-semibold tracking-widest uppercase mb-6">
            Working Colours · 18 Years on Sydney's Northern Beaches
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Thinking of painting<br className="hidden sm:block" /> your home yourself?<br />
            <span className="text-[#4da6ff]">Watch this before you start.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            One small mistake can ruin your entire paint job and cost you thousands to fix.
            I've been doing this for 18 years. Let me show you what actually works.
          </p>
          <a
            href="#offer"
            className="inline-block bg-[#0066CC] hover:bg-[#0055aa] text-white text-lg font-bold px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-2xl shadow-blue-900/50"
          >
            Watch Free Training →
          </a>
          <p className="text-gray-500 text-sm mt-4">No credit card. No fluff. Just real technique.</p>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ──────────────────────────────────────── */}
      <section className="bg-[#0066CC] py-5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            {[
              { stat: '18', label: 'Years Experience' },
              { stat: '500+', label: 'Homes Painted' },
              { stat: '5.0 / 5', label: 'Google Rating' },
              { stat: 'Northern Beaches', label: 'Sydney, Australia' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-bold">{item.stat}</div>
                <div className="text-blue-200 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHORITY ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#0066CC] text-sm font-semibold tracking-widest uppercase mb-4">Who Is This From</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6">
                From a real painter.<br />
                <span className="text-[#0066CC]">not a course creator.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I've been painting homes across Sydney's Northern Beaches for over 18 years.
                High-end coastal properties, heritage homes, modern renovations I've done them all.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I'm not a YouTube personality or an online guru. I'm a working painter who picks
                up a brush every single day. What I teach comes from real jobs, real mistakes,
                and real results.
              </p>
              <p className="text-gray-800 font-semibold text-lg border-l-4 border-[#0066CC] pl-4">
                "I got tired of watching homeowners wreck their walls with bad advice.
                So I decided to share what actually works."
              </p>
              <p className="text-gray-500 mt-3 text-sm">Working Colours Painting Services</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#0066CC] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  WC
                </div>
                <div>
                  <div className="font-bold text-lg text-[#1a1a2e]">Working Colours</div>
                  <div className="text-gray-500 text-sm">Sydney Northern Beaches</div>
                  <StarRating />
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  '18 years residential painting experience',
                  'Specialist in high-end coastal homes',
                  'Interior, exterior, timber & deck staining',
                  'Licensed, insured, and fully professional',
                  'Real jobs. Real results. No theory.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#0066CC] text-sm font-semibold tracking-widest uppercase mb-4">The Real Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6 leading-tight">
            Most DIY paint jobs fail.<br />
            <span className="text-red-500">before the paint even touches the wall.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto leading-relaxed">
            I get called in to fix DIY disasters every month. The same problems come up again and again.
            And almost every single one could have been avoided.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Paint peeling after weeks', desc: 'Surfaces weren\'t properly cleaned, sanded, or primed. The paint had nowhere to bond.' },
              { title: 'Streaks and roller marks', desc: 'Wrong roller nap, wrong technique, or paint applied too thick. Visible from every angle.' },
              { title: 'Patchy, uneven finish', desc: 'Inconsistent pressure and coverage leaves walls looking worse than before you started.' },
              { title: 'Wasted time and money', desc: 'Two coats of the wrong product, applied wrong. Now you need to sand it all back and start again.' },
              { title: 'Frustrating colour mismatch', desc: 'Tested on a small spot, looked great but the whole wall looks completely different.' },
              { title: 'Trim and edges ruined', desc: 'Cutting in freehand without the right technique leaves ragged lines that scream amateur.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-8 h-1 bg-red-400 rounded mb-4" />
                <h3 className="font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFRAME ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1a1a2e] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#4da6ff] text-sm font-semibold tracking-widest uppercase mb-6">The Truth About Painting</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
            Painting is <span className="italic text-[#4da6ff]">not</span> about painting.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            It's about <strong className="text-white">preparation, technique, and avoiding the mistakes</strong> that
            professionals learn in their first year on the job and homeowners often never find out about at all.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            The paint is the easy part. What happens in the 2–4 hours before it goes on the wall
            determines everything: adhesion, coverage, finish quality, and how long it lasts.
            Skip that, and the best paint in the world won't save you.
          </p>
          <div className="mt-12 bg-white/10 rounded-2xl p-8 border border-white/20">
            <p className="text-2xl font-semibold text-white leading-relaxed">
              "Give me proper prep and average paint I'll beat bad prep with premium paint every single time."
            </p>
            <p className="text-gray-400 mt-3">18 years of doing exactly that.</p>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#0066CC] text-sm font-semibold tracking-widest uppercase mb-4">Introducing</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-6 leading-tight">
            Paint Your Home Like a Pro
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            A step-by-step system built for homeowners based on real jobs, real homes, and 18 years of professional
            experience on Sydney's Northern Beaches.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Learn the System', desc: 'Understand exactly how professionals approach every job surface by surface, room by room.' },
              { step: '02', title: 'Prepare Properly', desc: 'The single most important stage. Get this right and everything else gets easier.' },
              { step: '03', title: 'Apply With Confidence', desc: 'Clean lines, smooth finish, no marks. Techniques that actually work in the real world.' },
            ].map((item) => (
              <div key={item.step} className="text-left">
                <div className="text-6xl font-bold text-gray-100 mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ─────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#0066CC] text-sm font-semibold tracking-widest uppercase mb-4">What's Inside</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-8 leading-tight">
                Everything they don't tell you<br />at the hardware store.
              </h2>
              <ul className="space-y-4">
                {[
                  'Proper surface preparation the step most DIYers skip entirely',
                  'How to clean, sand, and fill like a professional',
                  'Choosing the right primer, sheen, and product for each surface',
                  'Clean cutting techniques no tape, no wobble',
                  'Roller technique for streak-free, mark-free walls',
                  'How to avoid the most common paint problems',
                  'Doors, trims, and window frames done properly',
                  'How to save time, money, and frustration on your next job',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckIcon />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a1a2e] rounded-2xl p-8 text-white">
              <p className="text-[#4da6ff] text-sm font-semibold tracking-widest uppercase mb-4">The Result</p>
              <h3 className="text-2xl font-bold mb-6">A finish that looks like you hired a professional.</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Most homeowners can paint. But very few know the steps that separate a professional finish
                from a DIY one. Those steps are learnable and they don't require expensive tools or natural talent.
              </p>
              <p className="text-gray-300 leading-relaxed">
                They require knowledge. The kind I've built up painting hundreds of homes across the Northern Beaches.
                Now I'm putting it in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISUAL PROOF ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#0066CC] text-sm font-semibold tracking-widest uppercase mb-4">Real Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              This is what proper technique looks like.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/gallery/pro-1.jpg', caption: 'Timber garage door restoration, Northern Beaches' },
              { src: '/gallery/pro-2.jpg', caption: 'Timber louvers stained, waterfront property' },
              { src: '/gallery/pro-3.jpg', caption: 'Louver detail finish, coastal home' },
              { src: '/gallery/pro-4.jpg', caption: 'Timber furniture restoration, Northern Beaches waterfront' },
              { src: '/gallery/pro-5.jpg', caption: 'Deck staining, dark finish on coastal home' },
              { src: '/gallery/pro-6.jpg', caption: 'Deck prep with Intergrain Natural Stain' },
            ].map((item) => (
              <div key={item.src} className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                <img src={item.src} alt={item.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">Photos from real jobs across Sydney's Northern Beaches</p>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#0066CC] text-sm font-semibold tracking-widest uppercase mb-4">What People Say</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">Real results from real homeowners.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'I\'ve attempted DIY painting twice and both times ended up calling a professional to fix it. After going through this, I finally understood what I was doing wrong. The prep section alone was worth everything.',
                name: 'Mark T.',
                location: 'Dee Why',
                detail: 'Saved $2,400 on a repaint',
              },
              {
                quote: 'Wish I had this before I tried to paint my bathroom. The cutting technique alone would have saved me an entire weekend of re-doing. Professional advice, no fluff straight to what actually matters.',
                name: 'Sarah K.',
                location: 'Narrabeen',
                detail: 'First-time DIY painter',
              },
              {
                quote: 'I was quoted $8,000 for an interior repaint. Used this system, bought the right products, and did it myself for under $800. The result looks exactly like a professional job. Couldn\'t believe it.',
                name: 'David L.',
                location: 'Manly',
                detail: 'Saved $7,200',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm flex flex-col">
                <StarRating />
                <p className="text-gray-700 mt-4 mb-6 leading-relaxed flex-1">"{t.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-[#1a1a2e]">{t.name}</div>
                  <div className="text-gray-400 text-sm">{t.location} · {t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFER ─────────────────────────────────────────────────── */}
      <section id="offer" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#0066CC] text-sm font-semibold tracking-widest uppercase mb-4">Start Here</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              DIY Painting Starter Kit
            </h2>
            <p className="text-gray-600 text-lg">Everything you need to get started the right way.</p>
          </div>

          <div className="border-2 border-[#0066CC] rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-[#0066CC] px-8 py-6 text-white text-center">
              <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-1">Digital Download</p>
              <h3 className="text-2xl font-bold">DIY Painting Starter Kit</h3>
              <div className="flex items-center justify-center gap-3 mt-3">
                <span className="text-blue-200 line-through text-xl">$67</span>
                <span className="text-4xl font-bold">$27</span>
              </div>
              <p className="text-blue-200 text-sm mt-1">One-time payment · Instant access</p>
            </div>
            <div className="bg-white px-8 py-8">
              <p className="text-gray-600 mb-6 text-center">Everything in one place so you don't waste a day at the hardware store buying the wrong things.</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Complete tools and materials checklist buy exactly what you need',
                  'Professional paint selection guide sheen, product, and brand',
                  'Step-by-step surface preparation system',
                  'Cutting-in technique guide with common mistakes to avoid',
                  'Rolling technique walkthrough no marks, no streaks',
                  'Room-by-room sequence guide',
                  'BONUS: Paint quantity calculator never over or under-buy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="w-full flex items-center justify-center gap-2 bg-[#0066CC] hover:bg-[#0055aa] text-white font-bold text-lg py-5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-blue-200"
              >
                Get Instant Access $27 →
              </a>
              <p className="text-center text-gray-400 text-sm mt-4">Secure checkout · Instant digital delivery · 30-day money-back guarantee</p>
            </div>
          </div>

          {/* Order Bump */}
          <div className="mt-4 bg-amber-50 border-2 border-amber-300 rounded-xl px-6 py-5 flex items-start gap-4">
            <input type="checkbox" className="mt-1 w-5 h-5 accent-[#0066CC] flex-shrink-0 cursor-pointer" defaultChecked />
            <div>
              <p className="font-bold text-[#1a1a2e] mb-1">
                Add: Professional Paint Calculator + Job Planner <span className="text-[#0066CC]">just $17</span>
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Exactly how pros calculate paint quantities, plan job order, and price materials.
                Never buy too much or run out mid-wall again. Includes a printable job planning sheet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPSELL TEASER ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#4da6ff] text-sm font-semibold tracking-widest uppercase mb-4">Ready to Go Further?</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Complete Home Painting System
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                The full professional system every surface, every technique, every scenario. From bare walls
                to final coat. Interior and exterior. Doors, trims, decks, and timber.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-500 line-through text-xl">$297</span>
                <span className="text-4xl font-bold text-white">$147</span>
                <span className="bg-[#0066CC] text-white text-xs font-bold px-3 py-1 rounded-full">SAVE 50%</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-[#1a1a2e] hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Learn More About the Full Course →
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">Includes 7 Full Modules</p>
              {[
                'Module 1 Surface preparation (walls, timber, render)',
                'Module 2 Priming: when, what, and how',
                'Module 3 Cutting in techniques (freehand + tape)',
                'Module 4 Rolling walls and ceilings like a pro',
                'Module 5 Doors, trims, windows, and skirts',
                'Module 6 Exterior painting and weatherboard',
                'Module 7 Deck staining and timber restoration',
              ].map((module) => (
                <div key={module} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#4da6ff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm">{module}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">30-Day Money-Back Guarantee</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
            Go through the material. Try it on your next job. If it doesn't help you paint better,
            save money, or avoid a problem email me and I'll refund you. No questions asked.
            I stand behind this completely.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Don't start painting<br />
            <span className="text-[#4da6ff]">until you watch this.</span>
          </h2>
          <p className="text-gray-400 text-xl mb-10 leading-relaxed max-w-xl mx-auto">
            The difference between a professional finish and an expensive mess is
            preparation and technique. Both are learnable. Start today.
          </p>
          <a
            href="#offer"
            className="inline-block bg-[#0066CC] hover:bg-[#0055aa] text-white text-xl font-bold px-12 py-6 rounded-xl transition-all hover:scale-105 shadow-2xl shadow-blue-900/50"
          >
            Get Instant Access $27 →
          </a>
          <p className="text-gray-600 text-sm mt-5">30-day money-back guarantee · Instant digital delivery</p>
        </div>
      </section>

      {/* ── FUNNEL FOOTER ─────────────────────────────────────────── */}
      <footer className="bg-gray-900 py-10 text-center">
        <Link href="/">
          <Image src="/logo.png" alt="Working Colours" width={160} height={50} className="h-12 w-auto mx-auto mb-4 opacity-70 hover:opacity-100 transition-opacity" />
        </Link>
        <p className="text-gray-500 text-sm mb-2">Working Colours Painting Services · Sydney Northern Beaches, Australia</p>
        <p className="text-gray-600 text-xs mb-4">18 years residential painting · Licensed & insured</p>
        <a
          href="https://wcpainting.com.au"
          className="text-[#4da6ff] text-sm hover:underline"
        >
          Need a professional? Visit our main site →
        </a>
        <div className="mt-6 pt-6 border-t border-gray-800 text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Working Colours Painting Services. All rights reserved.</p>
          <p className="mt-1">Results may vary. Testimonials reflect individual experiences.</p>
        </div>
      </footer>

    </div>
  );
}
