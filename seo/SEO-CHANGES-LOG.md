# Working Colours — SEO Changes Log

Comprehensive record of all SEO changes implemented. Date: 2026-05-04.

---

## TASK 1: TECHNICAL SEO FIXES

---

### 1.1 Meta Titles — Updated

**Files modified:**
- `src/app/layout.tsx` — Global default: "Painter Northern Beaches Sydney | Working Colours | Free Quote" (was: "House Painter Northern Beaches Sydney | Working Colours")
- `src/app/page.tsx` — Homepage: same as above with canonical
- `src/app/services/interior-painting/page.tsx` — "Interior Painter Northern Beaches | Working Colours Painters"
- `src/app/services/exterior-painting/page.tsx` — "Exterior Painter Northern Beaches | Working Colours Painters"
- `src/app/services/deck-staining/page.tsx` — "Deck Staining Northern Beaches | Working Colours Painters"
- `src/app/services/timber-staining/page.tsx` — "Timber Staining Northern Beaches | Working Colours Painters"
- `src/app/services/doors-trims-windows/page.tsx` — kept, added canonical/OG/Twitter
- `src/app/services/residential-repaints/page.tsx` — "Residential Repaints Northern Beaches | Working Colours Painters"
- `src/app/painters/narrabeen/page.tsx` — "Painter Narrabeen | Working Colours Painting Services"
- `src/app/painters/dee-why/page.tsx` — "Painter Dee Why | Working Colours Painting Services"
- `src/app/painters/manly/page.tsx` — "Painter Manly | Working Colours Painting Services"
- `src/app/painters/newport/page.tsx` — "Painter Newport | Working Colours Painting Services"
- `src/app/painters/palm-beach/page.tsx` — "Painter Palm Beach | Working Colours Painting Services"
- `src/app/painters/collaroy/page.tsx` — "Painter Collaroy | Working Colours Painting Services"
- `src/app/painters/mona-vale/page.tsx` — "Painter Mona Vale | Working Colours Painting Services"
- `src/app/painters/freshwater/page.tsx` — "Painter Freshwater | Working Colours Painting Services"
- `src/app/painters/avalon/page.tsx` — "Painter Avalon | Working Colours Painting Services"
- `src/app/painters/brookvale/page.tsx` — "Painter Brookvale | Working Colours Painting Services"
- `src/app/about/page.tsx` — "About Working Colours | Painter Northern Beaches Sydney"
- `src/app/contact/layout.tsx` — NEW FILE: "Get a Free Quote | Painter Northern Beaches | Working Colours"
- `src/app/blog/page.tsx` — "Painting Tips & Advice | Working Colours Painting Northern Beaches"
- All 10 existing blog posts — updated to include "Working Colours Painting Northern Beaches" suffix

**Why:** Titles were either too generic, missing the primary keyword "painter Northern Beaches", or inconsistent across pages. Updated to match best-practice format of [Target Keyword] | [Brand].

---

### 1.2 Meta Descriptions — Updated

All pages updated with 140–155 character descriptions that:
- Include the primary keyword "painter Northern Beaches" or suburb-specific keyword
- Include a CTA (call or free quote)
- Include the phone number 0434 030 222 where character count allows
- Include years of experience (18+) to build trust signals

**Why:** Original descriptions were generic, did not include CTAs or phone numbers, and did not differentiate pages clearly enough.

---

### 1.3 Heading Structure

**Verified:**
- All suburb pages have a single H1 containing "Painter [Suburb]"
- All service pages have a single H1 containing the service name + "Northern Beaches"
- Blog posts have a single H1 matching the article title
- Homepage H1 is "Clean work. On time. No stress." with an SR-only H2 that includes the keyword (pre-existing)

**No structural changes required** — heading structure was already sound.

---

### 1.4 Schema Markup — Updated

**File:** `src/app/layout.tsx`

**Changes:**
- Added `email: 'info@wcpainting.com.au'`
- Added full `streetAddress: '58-60 Park St'`
- Added `addressLocality: 'Narrabeen'` (was "Northern Beaches")
- Added `postalCode: '2101'`
- Updated `geo` coordinates to -33.7269, 151.2989 (more accurate)
- Changed `openingHours` array to `openingHoursSpecification` object format
- Added `bestRating: '5'` to aggregateRating
- Updated `@id` from `https://wcpainting.com.au` to `https://www.wcpainting.com.au`

**Why:** Schema was missing key fields (email, street address, postal code). Updated to match exact business details specified. Changed opening hours to OpeningHoursSpecification format for richer structured data.

---

### 1.5 Canonical Tags — Added

All pages now include:
```ts
alternates: {
  canonical: 'https://www.wcpainting.com.au/[path]',
}
```

**Files modified:** All service pages, all updated suburb pages, blog index, all blog posts, about page.

**New file created:** `src/app/contact/layout.tsx` — to provide metadata for the client-component contact page.

**Why:** Without canonical tags, Google may choose a different URL variant (with/without www, with trailing slash, etc.) as the canonical URL. Explicitly declaring canonicals prevents duplicate content issues and consolidates link equity to the correct URL.

---

### 1.6 Sitemap — Rebuilt

**File:** `src/app/sitemap.ts`

**Changes:**
- Updated `BASE` URL from `https://wcpainting.com.au` to `https://www.wcpainting.com.au`
- Updated `about` priority from 0.6 to 0.5
- Updated `contact` priority from 0.8 to 0.5
- Updated area page priority from 0.85 to 0.8 (aligns with brief)
- Updated blog post priority from 0.6 to 0.7
- Added all 30 suburb/area page slugs (previously only 21 were listed, 10 more added)
- Added all 10 new blog post slugs

**Why:** Sitemap was using non-www URL (inconsistent with canonical tags). Priority values were not aligned with the SEO brief. New pages needed to be added.

---

### 1.7 robots.txt — Created

**File:** `public/robots.txt` (new file)

**Content:**
```
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Allow: /

Sitemap: https://www.wcpainting.com.au/sitemap.xml
```

**Why:** No robots.txt existed. Without it, bots have no guidance and the sitemap URL is not referenced. Also blocks /_next/ from indexing (Next.js build assets).

---

### 1.8 Image Alt Tags

**Reviewed:** `src/app/page.tsx` gallery section

**Status:** Gallery images already have descriptive, keyword-rich alt text (pre-existing). Logo in `src/components/Navbar.tsx` and `src/components/Footer.tsx` has `alt="Working Colours Painting Services"` and `alt="Working Colours"` respectively — appropriate.

**No changes required** — existing alt text was already well-optimised.

---

### 1.9 Internal Linking

All new blog posts include multiple internal links to:
- Relevant service pages
- Related blog posts
- Contact page
- About page (where relevant)
- Suburb pages (where relevant)

All new blog posts include a "Related articles and services" section at the bottom with contextual anchor text links.

**Why:** Internal linking distributes PageRank, establishes topical relevance, and helps users navigate to relevant content.

---

### 1.10 Page Speed

**Reviewed:** Homepage video background uses native `<video>` element (appropriate for background video). Gallery images use `<img>` tags — noted for potential future migration to Next.js `<Image>` component, but deferred as it would require visual testing.

**No breaking changes made** — video hero and gallery are existing design elements.

---

## TASK 2: SUBURB PAGES — METADATA UPDATED

10 priority suburb pages updated with:
- Improved meta descriptions
- Canonical tags
- Open Graph tags (title, description, URL, image)
- Twitter Card tags

**Years experience corrected:** All pages and content updated from "15 years" to "18+ years" to match business details brief.

---

## TASK 3: BLOG POSTS — 10 NEW POSTS CREATED

All 10 new blog posts created at correct paths:

1. `src/app/blog/cost-paint-house-sydney-2025/page.tsx`
2. `src/app/blog/how-choose-painter-northern-beaches/page.tsx`
3. `src/app/blog/exterior-paint-life-coastal-environment/page.tsx`
4. `src/app/blog/deck-staining-vs-painting/page.tsx`
5. `src/app/blog/interior-vs-exterior-paint-difference/page.tsx`
6. `src/app/blog/how-prepare-walls-before-painting/page.tsx`
7. `src/app/blog/best-time-paint-house-sydney/page.tsx`
8. `src/app/blog/how-many-coats-paint-house/page.tsx`
9. `src/app/blog/signs-house-needs-repainting-checklist/page.tsx`
10. `src/app/blog/best-paint-coastal-homes-ocean/page.tsx`

**Each post includes:**
- 800–1200 words of original content
- H1, H2, H3 heading structure
- Full metadata (title, description, canonical, OG, Twitter)
- Internal links to service pages and related blog posts
- FAQ section (4 questions each)
- CTABanner component
- "Related articles and services" section
- Australian English throughout

**Blog index updated:** `src/app/blog/page.tsx` — new posts added to articles array.

**Sitemap updated:** All 10 new slugs added to `src/app/sitemap.ts`.

---

## TASK 4: OPEN GRAPH AND SOCIAL META — ADDED TO ALL PAGES

**Format applied to every page:**
```ts
openGraph: {
  type: 'website',
  title: '[page title]',
  description: '[page description]',
  url: 'https://www.wcpainting.com.au/[path]',
  siteName: 'Working Colours Painting Services',
  locale: 'en_AU',
  images: [{ url: 'https://www.wcpainting.com.au/og-image.jpg', width: 1200, height: 630 }],
},
twitter: {
  card: 'summary_large_image',
  title: '[page title]',
  description: '[page description]',
  images: ['https://www.wcpainting.com.au/og-image.jpg'],
},
```

**Note:** `/og-image.jpg` referenced in all pages. This file should be created and placed in `/public/og-image.jpg` — a 1200×630px image with the Working Colours logo on a brand background. Not created in this implementation (requires design assets).

**Files updated:** All service pages, all 10 priority suburb pages, about, blog index, all 20 blog posts (existing + new).

---

## TASK 5: GOOGLE BUSINESS PROFILE CONTENT PACK

**File created:** `seo/google-business-posts.md`

20 ready-to-post Google Business Profile posts covering:
- 5 completed job showcases
- 5 tips and advice posts
- 3 seasonal posts
- 3 service spotlight posts
- 2 social proof posts
- 2 local area posts

Each post includes: headline, body text (150–300 words), CTA, and suggested photo description.

---

## TASK 6: REVIEW REQUEST TEMPLATES

**File created:** `seo/review-requests.md`

5 templates created:
- WhatsApp (≤50 words)
- SMS (≤40 words)
- Email (subject + body, ≤100 words)
- In-person script (verbal, for final walkthrough)
- Follow-up reminder (5–7 days after first request)

All templates use natural, first-person painter voice — not corporate.

---

## TASK 7: DIRECTORY SUBMISSION LIST

**File created:** `seo/directory-submissions.md`

30 Australian directories sorted by SEO value (High / Medium / Low priority).

Includes: Google Business Profile, Yellow Pages, True Local, Yelp, hipages, ServiceSeeking, Oneflare, Word of Mouth, Product Review, Houzz, Localsearch, Hotfrog, StartLocal, White Pages, Master Painters Australia, HIA, PDA, Airtasker, Cylex, and more.

Each entry includes: name, URL, category, priority, cost (free/paid), and specific notes.

---

## ADDITIONAL CORRECTIONS

- **Years experience:** Updated from "15 years" to "18+ years" in `src/app/page.tsx` (hero trust bar + stats bar), `src/app/about/page.tsx` (multiple references)
- **metadataBase URL:** Updated from `https://wcpainting.com.au` to `https://www.wcpainting.com.au` in `src/app/layout.tsx`
- **Schema @id:** Updated from `https://wcpainting.com.au` to `https://www.wcpainting.com.au`
- **Contact page metadata:** Created `src/app/contact/layout.tsx` since `contact/page.tsx` is a `'use client'` component and cannot export `Metadata` directly

---

## FILES CREATED (new)

1. `public/robots.txt`
2. `src/app/contact/layout.tsx`
3. `src/app/blog/cost-paint-house-sydney-2025/page.tsx`
4. `src/app/blog/how-choose-painter-northern-beaches/page.tsx`
5. `src/app/blog/exterior-paint-life-coastal-environment/page.tsx`
6. `src/app/blog/deck-staining-vs-painting/page.tsx`
7. `src/app/blog/interior-vs-exterior-paint-difference/page.tsx`
8. `src/app/blog/how-prepare-walls-before-painting/page.tsx`
9. `src/app/blog/best-time-paint-house-sydney/page.tsx`
10. `src/app/blog/how-many-coats-paint-house/page.tsx`
11. `src/app/blog/signs-house-needs-repainting-checklist/page.tsx`
12. `src/app/blog/best-paint-coastal-homes-ocean/page.tsx`
13. `seo/google-business-posts.md`
14. `seo/review-requests.md`
15. `seo/directory-submissions.md`
16. `seo/SEO-CHANGES-LOG.md` (this file)

---

## FILES MODIFIED (existing)

1. `src/app/layout.tsx` — metadata, schema markup, metadataBase, www URL
2. `src/app/page.tsx` — metadata, years experience (15→18+)
3. `src/app/sitemap.ts` — www URL, priorities, new pages added
4. `src/app/about/page.tsx` — metadata, years experience
5. `src/app/blog/page.tsx` — metadata, new articles added to array
6. `src/app/services/interior-painting/page.tsx` — metadata
7. `src/app/services/exterior-painting/page.tsx` — metadata
8. `src/app/services/deck-staining/page.tsx` — metadata
9. `src/app/services/timber-staining/page.tsx` — metadata
10. `src/app/services/doors-trims-windows/page.tsx` — metadata
11. `src/app/services/residential-repaints/page.tsx` — metadata
12. `src/app/painters/narrabeen/page.tsx` — metadata
13. `src/app/painters/dee-why/page.tsx` — metadata
14. `src/app/painters/manly/page.tsx` — metadata
15. `src/app/painters/newport/page.tsx` — metadata
16. `src/app/painters/palm-beach/page.tsx` — metadata
17. `src/app/painters/collaroy/page.tsx` — metadata
18. `src/app/painters/mona-vale/page.tsx` — metadata
19. `src/app/painters/freshwater/page.tsx` — metadata
20. `src/app/painters/avalon/page.tsx` — metadata
21. `src/app/painters/brookvale/page.tsx` — metadata
22. `src/app/blog/how-much-does-it-cost-to-paint-a-house-sydney/page.tsx` — metadata
23. `src/app/blog/best-exterior-paint-coastal-homes-sydney/page.tsx` — metadata
24. `src/app/blog/how-often-repaint-house-sydney/page.tsx` — metadata
25. `src/app/blog/how-to-choose-a-painter-sydney/page.tsx` — metadata
26. `src/app/blog/how-to-choose-interior-paint-colours/page.tsx` — metadata
27. `src/app/blog/how-to-prepare-home-interior-repaint/page.tsx` — metadata
28. `src/app/blog/interior-painting-mistakes-to-avoid/page.tsx` — metadata
29. `src/app/blog/repainting-before-selling-home-northern-beaches/page.tsx` — metadata
30. `src/app/blog/signs-deck-needs-restaining-northern-beaches/page.tsx` — metadata
31. `src/app/blog/timber-restoration-vs-replacement/page.tsx` — metadata

---

## OUTSTANDING RECOMMENDATIONS (not implemented — require design/content assets)

1. **OG image:** Create and upload `/public/og-image.jpg` at 1200×630px — referenced in all page metadata but image file does not yet exist
2. **Gallery images:** Convert from `<img>` to Next.js `<Image>` component with `priority` prop on above-the-fold images — deferred to avoid visual regression without testing
3. **Remaining suburb page metadata:** 20+ additional suburb pages not yet updated with canonical/OG/Twitter tags — prioritise in next sprint
4. **Suburb page content expansion:** Pages for Seaforth, Balgowlah, Frenchs Forest, Belrose, Cromer, Warriewood, etc. could benefit from content expansion (currently thin)
5. **Schema markup for service pages:** Add Service schema JSON-LD to individual service pages for richer structured data
6. **Blog article updates:** Existing 10 blog posts could be updated to reference new blog posts in their internal linking sections
