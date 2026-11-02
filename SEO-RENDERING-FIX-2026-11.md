# Working Colours — Google Rendering & Indexing Fix (2 Nov 2026)

Branch: `seo/google-rendering-fix`. Builds on the September work in `SEO-CHANGES.md` and `REMAINING-SEO-FIXES.md`.

## A. Root cause analysis

### Confirmed

1. **robots.txt blocked Google from every stylesheet, script and optimised image.**
   `public/robots.txt` contained `Disallow: /_next/`. Next.js serves *all* CSS (`/_next/static/...css`), JavaScript, and `next/image` output (`/_next/image?...`) from that path. Googlebot obeys robots.txt for page resources, so its renderer received bare HTML. This explains every symptom in the Search Console screenshot of `/painters/dee-why`:
   - unstyled layout, navigation as plain links → CSS blocked;
   - broken top image → the logo is a `next/image` served from `/_next/image`;
   - giant phone/WhatsApp icons → inline SVGs sized only by Tailwind classes, with no intrinsic width/height, expand to full width when CSS is missing.
   Reproduced locally with a production build and headless Chrome by aborting every `/_next/` request: the result matches Google's screenshot.

2. **Every page was server-rendered on demand instead of prerendered.**
   The root layout called `headers()` (to hide the navbar on the ad funnel), which opts the whole app into dynamic rendering. The build table showed all 64 pages as `ƒ (Dynamic)`. Each Googlebot fetch ran a serverless function instead of hitting cached static HTML: slower, and it costs crawl budget on a site Google already treats as low priority.

3. **10 suburb pages had zero internal links** — only reachable via the sitemap: Allambie Heights, Bilgola, Church Point, Curl Curl, Davidson, Forestville, Killarney Heights, Manly Vale, Narraweena, Terrey Hills.

4. **Navbar dropdown and mobile-menu links weren't in the HTML.** They were rendered only after a hover/tap (`{open && ...}`), so crawlers never saw them.

5. **The `/paint-like-a-pro` ad funnel inherited the homepage canonical** from the root layout (it had no canonical of its own).

6. **Sitemap `lastModified` was the build time for every URL**, telling Google every page changed on every deploy, so the field carries no signal.

7. Sticky mobile WhatsApp button wasn't firing the `whatsapp_click` conversion (the drawer one was).

### Hypotheses (not provable from the codebase)

- "Discovered – currently not indexed" (56 pages) means Google knows the URL but has deferred crawling it. The rendering block, dynamic rendering and weak internal linking above are the technical factors under our control. Remaining likely factors are **page quality and similarity**: the 31 suburb pages share one template with ~150–250 words of unique copy each, which Google often treats as low-value. This is the biggest remaining lever and needs real local evidence (see E).
- Could not fetch the live site from this session (network allowlist), so live behaviour was verified against the deployed source on `main`, not by live requests.

## B. Changes made

| File(s) | Change |
|---|---|
| `public/robots.txt` | Removed `Disallow: /_next/`; added `/api/` + `/admin/` disallows to the OAI-SearchBot group (a named group doesn't inherit `*` rules) |
| `src/app/layout.tsx`, `src/components/SiteChrome.tsx` (new), `src/proxy.ts` (deleted) | Funnel detection moved to a client component using `usePathname()`; `headers()` and the proxy removed → all pages now static |
| 41 component/page files | Inline SVGs given `width`/`height` matching their Tailwind size (60 icons) so they can never blow up if CSS is slow or missing |
| `src/components/Navbar.tsx` | Dropdown + mobile-menu links always in the HTML, shown/hidden with CSS; `aria-expanded`/`aria-controls` on the menu button; WhatsApp tracking on the sticky bar |
| `src/app/painters/northern-beaches/page.tsx` | Hub now links all 30 suburbs, regrouped: Manly & Southern Beaches, Dee Why & Central, Narrabeen Area, Pittwater, Forest District |
| 12 neighbouring suburb pages | Orphan suburbs added to their real neighbours' "Nearby suburbs" chips |
| All 31 `src/app/painters/*/page.tsx` | Title `Painter X \| Working Colours Painting Services` → `Painters X \| House Painting Since 2008 \| Working Colours` (matches search queries); H1 `Painter X` → `Painters in X`; breadcrumb names to match |
| `src/app/paint-like-a-pro/page.tsx` | Own canonical + `noindex, follow` |
| `src/app/sitemap.ts`, `src/app/sitemap.test.ts` (new) | Dropped fake `lastModified`; lists exported and tested against the real route folders, so a new page that's missing from the sitemap fails the tests |

No business details, reviews, statistics or claims were added or changed.

## D. Testing (this session)

- `npm ci` — succeeds
- `npx tsc --noEmit` — clean
- `npm run lint` — clean except the pre-existing errors in `src/app/paint-like-a-pro/page.tsx` (unchanged)
- `npx vitest run` — 38/38 pass (33 existing + 5 new sitemap tests)
- `npm run build` — succeeds; 65 routes `○ Static`, only `/api/enquiry` dynamic. (Local build used a mocked Google Fonts response because this sandbox can't reach fonts.googleapis.com; Vercel fetches the real font.)
- Served build checks on `/painters/dee-why`: 200, `x-nextjs-prerender: 1`, correct title/H1/canonical, no robots meta, stylesheet linked from `/_next/static`, 14 suburb links in HTML (was ~8). Hub links 31 `/painters/` URLs. Funnel: `noindex, follow`, own canonical, no site chrome. Sitemap: 60 `<loc>`, no `lastmod`.
- Headless Chrome (mobile, Googlebot UA): with `/_next/` blocked, page renders exactly like Google's screenshot; unblocked, it renders correctly on mobile and desktop.
- Not measured: Core Web Vitals on production (needs PageSpeed Insights / CrUX after deploy).

## E. Remaining actions

**Google Search Console (after deploy)**
1. URL Inspection → *Test live URL* on `/painters/dee-why`; confirm the screenshot is now styled and the "page resources" list shows no blocked `/_next/` files.
2. Resubmit `sitemap.xml`.
3. Request indexing for the priority pages in F (a handful per day; it's a hint, not a guarantee).

**Content (needs João — can't be invented)**
- The single biggest remaining lever. For the priority suburbs, add real evidence: 2–4 project photos per suburb with a one-line description (house type, what was done), any genuine Google review from that suburb (with permission), and real local notes (e.g. typical house types you paint there). Once supplied, these can be built into each page.
- Consider merging the thinnest low-demand suburb pages into the hub later if they stay unindexed after 90 days.

**Google Business Profile** — make sure the service area lists the suburbs above and the website link is `https://www.wcpainting.com.au`.

**Hosting/DNS (unchanged from September)** — `workingcolours.com.au` still needs pointing at Vercel or 301-redirecting; two Vercel projects deploy this repo; Resend env vars for the enquiry form.

**Analytics** — check in GA4/Google Ads that `whatsapp_click` now arrives from the mobile sticky bar.

## F. Indexing priorities

Request indexing (in this order): `/`, `/painters/northern-beaches`, `/painters/narrabeen`, `/services/exterior-painting`, `/services/interior-painting`, `/services/deck-staining`, `/painters/dee-why`, `/painters/frenchs-forest`, `/painters/mona-vale`, `/painters/manly`, `/services/residential-repaints`, `/blog/how-much-does-it-cost-to-paint-a-house-sydney`.

Let the sitemap handle the rest. Do **not** request: `/paint-like-a-pro` (noindex), `/api/*`, the `/painter-*` redirect URLs, `/blog/cost-paint-house-sydney-2025` (redirect), or the apex `wcpainting.com.au` URLs.

## G. Monitoring plan

Baseline (1 Sep–29 Oct 2026): 6 indexed of 67 known; 6,446 impressions; 7 clicks; 0.11% CTR; avg position 33.5.

| When | Check | Healthy signal |
|---|---|---|
| Week 1 | GSC live test on 3–4 pages; Page indexing report | Styled screenshots, no blocked resources |
| Day 30 | Indexed page count; "Crawled/Discovered – not indexed" trend; impressions for priority queries | Indexed count rising; pages moving from Discovered → Crawled → Indexed |
| Day 60 | Clicks, CTR on suburb pages; position for "painters narrabeen", "house painters northern beaches", "residential painters northern beaches" | CTR on indexed suburb pages above baseline |
| Day 90 | Qualified leads (form submissions, calls, WhatsApp clicks tagged organic); pages still unindexed | Decide which unindexed suburb pages get real-project content or get consolidated |

No ranking or traffic improvement is claimed until Search Console shows it.
