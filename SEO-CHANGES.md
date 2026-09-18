# Working Colours — SEO & Local Search Changes

Date: 2026-09-18. This file replaces the previous, out-of-date version of `SEO-CHANGES.md`. A separate, more granular log from an earlier pass also exists at `seo/SEO-CHANGES-LOG.md` — some of its "outstanding" items were already done by the time this pass started; this file reflects the actual current state of the code.

## Starting point

A large amount of SEO work was already sitting **uncommitted** in the working tree before this session started (homepage rewrite, canonical tags on all pages, sitemap, robots.txt, 10 new blog posts, analytics event tracking, etc.). Nothing was reverted or redone — this session verified what was already there against the brief, fixed real gaps, and added the items below. Everything is still uncommitted, ready for your review before you commit/deploy.

## Changes implemented this session

**Structured data**
- Added a `BreadcrumbList` JSON-LD block to all 6 service pages, all 31 suburb pages, and all 20 blog posts (56 files), reflecting the site's real navigation path (Home → Service, Home → Northern Beaches Painters → Suburb, Home → Blog → Article). No fabricated fields — only real URLs and page names.
- Added `Article` JSON-LD to all 20 blog posts (headline, description, url, author/publisher as the business). **Deliberately left out `datePublished`/`dateModified`** — inventing dates would violate the "no fabricated structured data" rule. Add real dates once you have them (see checklist).
- Left the site-wide `LocalBusiness` schema's `aggregateRating` removed (already done before this session, correctly, pending a verified review count).
- Did **not** add `FAQPage` schema to the visual FAQ accordions — kept them visual-only, per the instruction not to chase FAQ rich results for a painting business.

**Technical SEO / indexing**
- Created `public/og-image.jpg` (1200×630) — previously referenced in every page's Open Graph/Twitter metadata but the file didn't exist, so every social share was broken. Built it from your real logo (`public/logo.png`) and brand colours only — no stock imagery, no invented claims.
- Added an explicit `User-agent: OAI-SearchBot` `Allow: /` block to `public/robots.txt`, as requested. GPTBot is not specifically restricted (it falls under the general `Allow: /` for `*`) — that's a content/training-data policy decision for you to make explicitly if you want to opt out (see checklist).
- **Apex → www redirect**: `wcpainting.com.au` and `www.wcpainting.com.au` currently both resolve live and serve identical content with no redirect between them — a duplicate-content risk. Added a permanent (308) redirect in `next.config.ts` from the apex host to `www.wcpainting.com.au` (matching your existing canonical tags/sitemap), using Next's `redirects()` host matching. This works because both hostnames already point at this deployment; no DNS change needed on your end.
- Migrated `src/middleware.ts` → `src/proxy.ts` (Next.js 16 deprecated the `middleware` file convention in favour of `proxy`; same logic, just renamed per the framework's own migration guide). This removed a build-time deprecation warning.

**Domain consolidation (workingcolours.com.au)**
- Checked directly: **workingcolours.com.au is still live** and serving an older build of this same business's content (old H1 "Clean work. On time. No stress.", and it still shows the "Not the cheapest — and proud of it" section that was removed from this codebase in commit `fc8c3fb`). It is not the same deployment as wcpainting.com.au — it's genuinely a separate, stale hosting target, so this is a real duplicate-content issue, not just a stale search result.
- I **cannot** fix this from this repository — it's on different hosting. See the checklist below for the exact action needed.

**Consistency fixes**
- Standardised every phone link across the whole `src/` tree to the international format `tel:+61434030222` (several pages/components mixed `tel:0434030222` and `tel:+61434030222`).
- Fixed the Footer copyright year to update automatically (`{new Date().getFullYear()}`) instead of a hardcoded "© 2025".
- Converted the homepage "Our Work" gallery from plain `<img>` tags to `next/image` with `fill`, a `sizes` attribute for responsive `srcset`, and default lazy-loading. The source JPEGs are large (1–4.6MB); Next will now serve resized, modern-format, lazy-loaded versions instead of the full-resolution originals on every device.
- Added an internal "Popular Northern Beaches areas we service" link block (8 priority suburbs + "All Northern Beaches") to the bottom of all 6 service pages, so service pages link to suburb pages as well as to each other (this matches the internal linking structure the business's SEO playbook calls for, and wasn't there before).
- Added a plain-language disclaimer under the specific dollar-figure price ranges in `blog/how-much-does-it-cost-to-paint-a-house-sydney` and `blog/cost-paint-house-sydney-2025`, making clear these are general Sydney market indicators, not a Working Colours quote. The underlying figures are still estimates written by a previous pass, not sourced from your actual job history — see checklist.
- Removed an unused `CTABanner` import and fixed a handful of pre-existing ESLint `react/no-unescaped-entities` errors (raw `"`/`'` in JSX text) in `src/app/page.tsx` and two blog posts, so `npm run lint` passes cleanly on every file this task touches.

## Files changed this session

- `next.config.ts` — apex→www redirect
- `src/proxy.ts` (new) / `src/middleware.ts` (removed) — proxy migration
- `public/robots.txt` — OAI-SearchBot rule
- `public/og-image.jpg` (new)
- `src/components/Footer.tsx` — dynamic copyright year, `tel:` fix
- `src/components/Navbar.tsx` — `tel:` fix
- `src/app/page.tsx` — gallery → `next/image`, unescaped apostrophe, unused import
- All 6 files in `src/app/services/*/page.tsx` — breadcrumb schema, suburb links
- All 31 files in `src/app/painters/*/page.tsx` — breadcrumb schema, `tel:` fix
- All 20 files in `src/app/blog/*/page.tsx` — breadcrumb + Article schema, `tel:` fix; 2 of them also got the pricing disclaimer and 2 got unescaped-quote fixes

## Validation performed

- `npx tsc --noEmit` — clean, no type errors.
- `npm run lint` — clean on every file touched by this task. (Pre-existing errors remain in `src/app/paint-like-a-pro/page.tsx`, a separate ad-funnel landing page unrelated to this SEO brief — left untouched, out of scope.)
- `npm run build` — production build succeeds, all 67 routes generate, `sitemap.xml` and the default Next.js 404 (`/_not-found`) are present.
- Not verified: live rendering in a browser (no browser tooling available in this session) — see "How to preview" below to check the mobile layout, contrast and tap targets yourself before shipping.

## Things I checked and deliberately left alone

- **Contact form**: already accurately represents itself — the main form only opens WhatsApp with URL-encoded, pre-filled text (no fake "message sent" confirmation), and the email fallback is a plain `mailto:` form that opens the visitor's email client. Both are accurately labelled in the UI already. No customer data is placed in this site's own query string.
- **Analytics**: `phone_call`, `whatsapp_click` and `form_submit` events already push to `dataLayer` and fire a Google Ads conversion (`src/lib/gtag.ts`), with no PII included. This was already implemented before this session.
- **FAQ content**: kept visual-only (no `FAQPage` schema), per instruction.
- **Reviews/stats on the homepage** (Sarah M. / Luke T. / Simone P. testimonials, "500+ Homes Painted", "5.0 Google Rating", "18+ Years", "Licensed & Insured"): these already existed in the last committed version of the site (verified via `git diff HEAD`) — they are not something invented in this pass. I have no way to verify them, so I left them in place rather than silently deleting real content or inventing different numbers. See the checklist — this is the single biggest trust/compliance item outstanding.
- **`paint-like-a-pro`**: a separate ad-funnel landing page, out of scope for this organic/local SEO brief. It has no canonical tag and isn't in the sitemap — that's probably intentional for a paid-only landing page, but flagged below in case you want it excluded from indexing explicitly.

## Remaining technical blockers

- Next.js reads `headers()` in `src/app/layout.tsx` (to detect the `/paint-like-a-pro` funnel and hide the navbar/footer there), which forces **every** route in the app to render dynamically on every request (`ƒ` in the build output) instead of being pre-rendered as static HTML. For a mostly-static marketing site this is a real performance cost. The clean fix is to move the funnel page into its own route group with its own layout (so the root layout can go back to being static), but that reorganises where most page files live — too large a structural change to make inside this pass without your sign-off. Flagging it as the top follow-up performance item.
- `sitemap.ts` stamps every URL with the current build time as `lastModified`, since there's no CMS or per-page date source. This is honest (it reflects "as of the last deploy") but not the same as a true per-page last-modified date.

## Business facts, photos or links needed from you

1. ~~**Years of experience**~~ — **Confirmed: 18 years.** Every "18+" reference across the site (32 files: homepage, About, layout schema, all suburb pages, service pages, blog posts) has been changed to the exact figure "18 years" to match. "500+ homes painted" and the "5.0 Google rating" stat are still unconfirmed — please verify those two specifically.
2. **The three homepage testimonials** (Sarah M., Luke T., Simone P.) — are these real customers who agreed to be quoted? If not, they need to come down; if yes, no action needed, but a link to the real review can only be shown once you give me the URL (next point).
3. **Google Business Profile review link** — send me the correct URL and I'll add a visible "Read our reviews on Google" link near the review section and in the footer.
4. **John's photo on the About page** — code is ready (`src/app/about/page.tsx` now renders a real `next/image` instead of the placeholder box), but I can't extract a pasted chat image into the filesystem from this session. **Please save the photo you shared as `public/about/john-spolavori.jpg`** (create the `public/about/` folder if it's not there) and it will appear on the About page automatically — no further code change needed.
5. **Business address for schema** (`58-60 Park St, Narrabeen NSW 2101`) — confirm this is the correct, public-facing address before it goes out in structured data.
6. **Pricing ranges** in the two cost-guide blog posts — confirm whether the dollar ranges are broadly in line with what you actually quote, or give me corrected ranges. I've added a disclaimer in the meantime so they read as general market guidance rather than a Working Colours quote.
7. **NSW contractor-licence threshold** ("jobs over $5,000 require a licence") in `blog/how-to-choose-a-painter-sydney` — this is a specific regulatory claim I can't independently verify from here; please confirm it's current before publishing, or I can soften it to "check current NSW Fair Trading thresholds."
8. **GPTBot / AI training crawler policy** — decide if you want ChatGPT and similar tools training on your site content. Current `robots.txt` allows it implicitly (via the general `*` rule). If you want to opt out, tell me and I'll add an explicit `Disallow` block for `GPTBot`.
9. **The 6 unused `public/gallery/pro-*.jpg` photos** — these are sitting in the repo but not used on any page (they look like real job photos, but I don't know the location/suburb or the work done in each one). Tell me what each one shows and I can add them to the gallery or a relevant suburb/service page with an accurate caption.

## External domain / hosting / Google Search Console steps (cannot be done from this repo)

1. **workingcolours.com.au** is live on separate hosting and is serving stale/duplicate content (confirmed by direct fetch — see above). You need to either: (a) point that domain's DNS at the same hosting as wcpainting.com.au and let the new apex→www redirect in this repo take it from there, or (b) if it stays on its current host, set up a domain-level 301 redirect there from `workingcolours.com.au/*` to `https://www.wcpainting.com.au/*` (preserving the path), not a blanket redirect to the homepage. I can't do either of these from this codebase — they require access to that domain's DNS/hosting panel.
2. **Google Search Console**: once this deploys, submit `https://www.wcpainting.com.au/sitemap.xml` in GSC for both the www property (primary) and request re-indexing of the homepage. If workingcolours.com.au has its own GSC property with indexed URLs, use the Removals tool there once the redirect in step 1 is live.
3. **Google Business Profile**: add the review link (checklist item 3) once available, and make sure the listed address/phone match what's now in the site's structured data.

## How to preview locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000` — check the homepage hero (H1, CTAs, mobile layout), `/contact` (WhatsApp/email handoff), a suburb page and a service page (new breadcrumb schema + suburb links at the bottom), and a blog post (new Article schema). Use your browser's "View Page Source" or a rich-results testing tool to confirm the JSON-LD blocks are present and valid.

To build exactly as production will: `npm run build && npm start`.
