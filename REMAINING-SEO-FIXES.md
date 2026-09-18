# Working Colours — Remaining SEO / Accessibility / Enquiry-Form Fixes

Date: 2026-09-18. This is a follow-up pass on top of `SEO-CHANGES.md` (the previous round). It does not repeat what that file already covers — read that one for the earlier homepage/metadata/structured-data/domain work.

## 1. Old-domain migration

**What this repo actually controls:** only requests that reach *this* Next.js deployment. I confirmed directly (live fetch) that `workingcolours.com.au` is still hosted separately — it serves an older, pre-existing build of the business's content (old H1, a "Not the cheapest" section this codebase removed a while ago). DNS for that domain is not pointed at this app, so no code change here can redirect it today.

**Implemented in `next.config.ts`:**
- Host-agnostic redirects for every known old suburb URL (`/painter-manly`, `/painter-mona-vale`, `/painter-dee-why`, `/painter-narrabeen`, `/painter-palm-beach`, plus the same `/painter-{slug}` pattern for all other suburbs this site serves) → the matching `/painters/{slug}` page. These fire regardless of which host the request arrives on, so they resolve in one hop.
- The suburb-page list on `workingcolours.com.au` was confirmed by fetching it directly — only 5 suburb pages plus a single-page home (`/`, with `#services`/`#about`/`#contact` anchors, not separate routes) are actually linked there. If more old URLs turn up later, add them to the `oldSuburbSlugs` array using the same pattern.
- A permanent redirect for the retired blog article (see §4).
- The existing apex→www redirect (from the previous round), now ordered *after* the specific old-URL rules so those resolve in a single hop instead of chaining through apex→www→new-path.
- A **new, currently no-op** rule: if `workingcolours.com.au` is ever pointed at this same deployment, it will immediately redirect everything to `www.wcpainting.com.au` at the same path. Harmless today; ready for the day the domain is migrated.

**What still requires action outside this repo:** either point `workingcolours.com.au`'s DNS at this deployment (then the rule above takes over automatically), or — if it's staying on its current host — add a domain-level 301 there from `workingcolours.com.au/*` to `https://www.wcpainting.com.au/*`, preserving the path. I can't do either from here; I don't have access to that domain's DNS/hosting panel.

Query strings (e.g. old campaign/source parameters like `?src=vst_...` seen on the live old site) are preserved automatically by Next's redirect handling — nothing extra was needed for that.

## 2. Direct enquiry form

**Found:** no existing backend, API route, or email-sending library in the project (plain Next.js app, `package.json` had only `next`/`react`/`react-dom`). Built one from scratch, keeping it dependency-light.

**New files:**
- `src/app/api/enquiry/route.ts` — server-side handler. Validates input, checks two anti-spam signals (honeypot field + minimum fill time), applies a basic in-memory per-IP rate limit and short-window duplicate-submission guard, then sends the email.
- `src/lib/enquiry.ts` — pure validation logic (name; suburb; service; project description all required; at least one of phone/email; field length limits) and bot-detection heuristics. Fully unit tested.
- `src/lib/email.ts` — sends via [Resend](https://resend.com)'s HTTP API using plain `fetch` (no SDK dependency). Injectable config/fetch implementation for testing.
- `src/lib/business.ts` — centralised business details (see §6).
- `.env.example` — documents the three required environment variables, no secret values.

**Behaviour:**
- Success is only reported once the email provider has accepted the message — never simulated. Verified: with no `RESEND_API_KEY`/`ENQUIRY_TO_EMAIL`/`ENQUIRY_FROM_EMAIL` set, a real, valid submission gets an honest `503` with the message *"We can't send this automatically right now. Please call 0434 030 222 or message us on WhatsApp instead."* — confirmed by running the server and posting to it directly.
- Reply-To is only set when the customer's email passes validation.
- No customer details are ever put in a URL, in an analytics event, or logged — the server code contains no `console.log` of form contents.
- Duplicate-submission guard: client-side (submit button disabled while sending) plus a short server-side de-dupe window keyed to the enquiry content.
- Rate limiting and de-dupe use an in-memory `Map`. **This only works within a single, long-lived server process.** On serverless hosting (Vercel etc.) each instance has its own memory, so this is a best-effort layer, not a guarantee. If this matters at your scale, the next step is a shared store (Upstash Redis or Vercel KV) — flagging rather than adding another dependency speculatively.
- **No-JS fallback:** the form has `method="post" action="/api/enquiry"` so if JavaScript fails, the browser's native submission still reaches the same validated, spam-checked server endpoint (instead of leaking every field into the page URL via a default GET). The endpoint detects a native form submission (`application/x-www-form-urlencoded`) vs the JS path (`application/json`) and, for the native case, redirects back to `/contact?enquiry=sent` or `?enquiry=error` instead of returning raw JSON. Verified end-to-end with a running server (both the JSON and the native-form path).

**Environment variables needed (see `.env.example`):**
```
RESEND_API_KEY=        # Resend API key — server-only, never exposed to the browser
ENQUIRY_TO_EMAIL=      # the inbox that should receive enquiries
ENQUIRY_FROM_EMAIL=    # a sender address/domain verified in Resend
```
None of these are set anywhere in this repo. Until they are, the form is honest about not being able to send automatically and points people to phone/WhatsApp instead — it does not pretend to work.

## 3. WhatsApp handoffs and form accessibility

- Reworded every place that implied a click = a sent message. New copy: *"Open WhatsApp with your project details, then press Send to message us."* (Contact page and homepage quick form.)
- Homepage quick form (`src/components/HeroForm.tsx`): added visible-to-screen-readers (`sr-only`) `<label>`s for name/phone/suburb (previously placeholder-only), `autoComplete` (`name`, `tel`, `address-level2`), and `inputMode="tel"` on the phone field. It also removed an incorrect `form_submit` conversion fire — opening WhatsApp is a handoff, not a submission, so it now only fires `whatsapp_click`.
- The Contact page's fields already had visible `<label>`s from the earlier round; this pass added `autoComplete`, `maxLength`, `aria-invalid`/`aria-describedby` wiring to per-field error text, and an `aria-live` status region for the whole form.
- **GET-fallback data leak, fixed on both forms:** previously neither the homepage quick form nor the Contact form set a `method`/`action`, so if JavaScript failed, a native submit would default to a `GET` on the current page URL — appending name/phone/suburb/etc. to the address bar, browser history and any URL-based analytics/logs. Both forms now use `method="post" action="/api/enquiry"` as a real, working fallback (see §2) rather than just switching GET→POST into a dead end.
- Analytics: `src/lib/gtag.ts` now has a distinct `enquiry_submitted` event (fired only after the server confirms delivery) separate from `whatsapp_click`/`phone_call` (handoffs) — reviewed every call site (`grep`), no duplicate/double-fired events.

## 4. Cost-article consolidation

- Compared `how-much-does-it-cost-to-paint-a-house-sydney` (kept, evergreen URL) and `cost-paint-house-sydney-2025` (retired).
- **Removed the specific dollar ranges from both** rather than picking one arbitrarily — neither was owner-verified, and they disagreed with each other ($4,000–$8,000 vs $5,000–$10,000 for the same job type). The retained guide now explains *why* it doesn't publish a generic number and focuses on the qualitative factors that actually drive price (merged in "coastal exposure" and "timber features" from the retired article, which weren't explicit factors in the original list).
- **Removed unsupported claims** that were unique to the retired article: paint-price inflation figures ("10–15%"), "add 10–20% to old quotes", cost multipliers by storey count ("20–40% higher"), and an absolute exterior-paint lifespan claim ("eight to twelve years... a rushed job might last three"). None of these were sourced.
- Retained/merged the genuinely useful, non-numeric content: the "best value isn't the cheapest quote" FAQ, and the framing "a quote is a statement of how much preparation the painter plans to do."
- `/blog/cost-paint-house-sydney-2025` is deleted from the codebase and permanently redirects (308) to the retained URL — verified live against a running server.
- Updated: `src/app/blog/page.tsx` (removed its card), `src/app/sitemap.ts` (removed its entry), and the two other posts that linked to it (`how-choose-painter-northern-beaches`, `how-many-coats-paint-house`) now link to the retained guide instead.
- Added `dateModified: "2026-09-18"` to the retained article's `Article` schema for this substantive revision. No `datePublished` is set — the true original publish date isn't known, and I'm not inventing one.
- Reviewed other overlapping topics (repainting-before-selling, exterior-paint-lifespan articles, etc.) for the same kind of unsupported absolute claims — found none; those are left as-is.

## 5. Project evidence on local/service pages

Built `src/components/ProjectExample.tsx` — a reusable card (photo, confirmed suburb, work type, preparation, optional product/finish, outcome, service + contact links) — but **did not add any actual project cards to Manly, Mona Vale, interior-painting or residential-repaints**, because I have no verified suburb/job/preparation details for any specific photo in the repo. Per your instructions, I won't infer a suburb from a photo or publish an empty/"coming soon" section.

**What I'd need from you to actually populate this**, per photo you want used:
- Which suburb the job was in
- What the job was (e.g. "full exterior repaint", "deck restaining")
- A one-line description of the surface condition/preparation done
- The product/finish used, if you want that mentioned
- Which of the existing `public/gallery/job-*.jpg` or `public/gallery/pro-*.jpg` files corresponds to it (the `pro-*.jpg` files in particular aren't used anywhere yet and I don't know what they show)

Once you give me that for even 2–3 photos, I can wire them into the relevant suburb/service pages properly.

## 6. Reviews and business-detail consistency

- **Google review link:** no verified Google Business Profile/review URL exists anywhere in the repo or prior context, so I have not added one, and did not construct/guess one. `src/lib/business.ts` has a `googleReviewsUrl: null` field with a comment explaining it should only be set to a real URL. The homepage's review section (`src/app/page.tsx`) now checks this: if you give me the real URL, it automatically becomes a clickable "Read our Google reviews" link instead of the current plain "5.0 — Based on Google Reviews" badge — no further code change needed, just supply the URL.
- **Testimonial provenance:** the three homepage testimonials (Sarah M. / Luke T. / Simone P.) predate this and the previous round (confirmed via `git diff` against the last commit before any of this work started) — I still can't verify they're real, consented quotes. Flagging again rather than silently removing real content or inventing new copy.
- **Saturday hours:** these were already publicly displayed on `/contact` (7:00am–12:00pm) before this round; I made the site-wide `LocalBusiness` schema in `src/app/layout.tsx` consistent with what's already shown there (previously the schema only had the weekday hours). **Please confirm these Saturday hours are still accurate** — I aligned the schema to existing public copy, I did not independently verify the hours themselves.
- **Centralised business details** into `src/lib/business.ts` — name, phone (display + tel: + WhatsApp), public email, a separate schema email (kept distinct deliberately, per your note that this is fine when intentional), service area, weekday + Saturday hours, address, and the (currently null) Google reviews URL. Wired into `layout.tsx`'s structured data, the enquiry form/API, and the homepage review link. Not yet propagated to every one of the ~50 suburb/service/blog pages that still hard-code the phone number and years-of-experience text inline — that's a larger mechanical refactor I've deliberately scoped out of this pass; the phone number itself is consistent everywhere already (checked in the previous round).
- No self-serving review schema was added — the site-level schema still deliberately omits `aggregateRating` (as set in the previous round) until a real review count is available.

## 7. Paint-finish FAQ correction

`src/app/services/interior-painting/page.tsx` — replaced the FAQ claim that low-sheen "hides imperfections better than flat" (backwards — flatter finishes conceal surface imperfections better; low-sheen is a washability/appearance trade-off, not a superior imperfection-hider) with the wording you supplied. Scanned the same page and its FAQ neighbours for other unqualified absolute claims — found none needing correction beyond this one.

## 8. Article authorship and dates

Built `src/components/ArticleByline.tsx` — renders *"Published by Working Colours Painting Services"* (linked to `/about`) plus an optional last-updated date, shown only when a real date is supplied. This is deliberately organisational, not a personal "reviewed by John" claim, because I have no way to confirm which specific articles John personally wrote or reviewed — inventing that per-article would be exactly the kind of unestablished claim you told me not to make.

**Applied so far:** only to `how-much-does-it-cost-to-paint-a-house-sydney`, the one article I substantively revised this round (with `dateModified: "2026-09-18"`).

**Not yet rolled out** to the other ~19 blog posts — the component is ready, but I didn't want to bulk-insert it via a script across every post's differently-structured JSX without a clear answer to: should this say "Published by Working Colours Painting Services" (safe, generic, ready now) or a named "Reviewed by John Spolavori" byline (needs your confirmation of which posts he actually wrote/reviewed, plus real publish dates if you have them)? Tell me which you'd like and I'll apply it site-wide.

## 9. robots.txt, sitemap, crawling

Verified directly (not just by inspecting code) by running the production build and a real server:
- `public/robots.txt` — valid, unchanged from the previous round (still allows `OAI-SearchBot` explicitly, doesn't touch `GPTBot`'s implicit allow under `*` — no change made to that policy, per your instruction not to alter a deliberate training preference without being told to).
- `src/app/sitemap.ts` — regenerated after removing the retired blog post; every URL uses `https://www.wcpainting.com.au`; the retired article and the old `/painter-*` URLs are correctly absent (they're redirects, not indexable pages).
- Confirmed live against a running production build (`npm run build && npm start`):
  - `GET /sitemap.xml` → 200
  - `GET /robots.txt` → 200
  - `GET /painter-manly` → 308 → `https://www.wcpainting.com.au/painters/manly`
  - `GET /blog/cost-paint-house-sydney-2025` → 308 → the retained guide
  - `GET /this-page-does-not-exist` → genuine 404
- **Cannot verify from here:** actual Google indexing/ranking behaviour, or whether Google Search Console has picked up the sitemap — that requires deployment + Search Console access, which I don't have. Do not treat anything in this file as evidence of ranking improvement.

## 10. Validation results

- `npx tsc --noEmit` — clean.
- `npm run lint` — clean on every file this round touched. The only remaining lint errors are pre-existing ones in `src/app/paint-like-a-pro/page.tsx` (a separate ad-funnel page, out of scope for this brief, unchanged by either round).
- `npm run build` — production build succeeds; new `/api/enquiry` route registers correctly alongside all existing routes.
- **New: `npm test` (Vitest, added as a dev dependency)** — 33 tests, all passing, covering:
  - `src/lib/enquiry.test.ts` — form validation (valid input, missing name, missing both contact methods, invalid phone/email, missing suburb/service/message, oversized fields) and bot detection (honeypot, too-fast submission, normal submission).
  - `src/lib/email.test.ts` — mocked delivery: honest failure with no credentials (and confirms `fetch` is never even called), partial credentials, successful send, provider-rejected send, network failure, Reply-To only set for a valid email, and that customer details never appear in the request URL.
  - `next.config.test.ts` — every listed old-suburb redirect resolves to the right destination, the retired cost article redirects to the retained one, the apex→www and (no-op) workingcolours.com.au rules exist, no rule points a source back at itself, and no two rules can both match the same request.
- Also manually verified against a real running server (not just tests): a fully-valid enquiry with no credentials configured gets an honest `503`; a honeypot-triggered submission gets silently accepted (`200`) without sending anything; the native (no-JS) form-encoded path redirects correctly.
- **Not verified (no browser tooling in this session):** actual rendered layout on desktop/mobile, visual tap-target sizing, colour contrast, or keyboard-only navigation flow. Everything above was checked via curl/build output/unit tests, not a real browser. Please click through `/contact` yourself, including with your keyboard only and with your browser's JS disabled, before relying on this.

## Files changed this round

New: `src/app/api/enquiry/route.ts`, `src/lib/business.ts`, `src/lib/enquiry.ts`, `src/lib/email.ts`, `src/lib/enquiry.test.ts`, `src/lib/email.test.ts`, `src/components/ArticleByline.tsx`, `src/components/ProjectExample.tsx`, `.env.example`, `vitest.config.ts`, `next.config.test.ts`.

Modified: `next.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/contact/page.tsx`, `src/components/HeroForm.tsx`, `src/lib/gtag.ts`, `src/app/services/interior-painting/page.tsx`, `src/app/blog/page.tsx`, `src/app/sitemap.ts`, `src/app/blog/how-much-does-it-cost-to-paint-a-house-sydney/page.tsx`, `src/app/blog/how-choose-painter-northern-beaches/page.tsx`, `src/app/blog/how-many-coats-paint-house/page.tsx`, `package.json`, `.gitignore`.

Deleted: `src/app/blog/cost-paint-house-sydney-2025/page.tsx`.

## Business information still needed from you

1. Resend account + verified sending domain, so `RESEND_API_KEY` / `ENQUIRY_TO_EMAIL` / `ENQUIRY_FROM_EMAIL` can actually be set (in your hosting provider's environment variables, not committed to the repo).
2. Whether the three homepage testimonials are real, consented quotes.
3. A verified Google Business Profile review URL (to light up the "Read our Google reviews" link).
4. Confirmation the Saturday hours (7am–12pm) are still correct.
5. Whether `workingcolours.com.au` should be pointed at this deployment's DNS, or get its own 301 rule wherever it's currently hosted.
6. Suburb/job/preparation details for any of the existing gallery photos you'd like turned into real project examples (§5).
7. Whether blog authorship should say "Published by Working Colours Painting Services" (ready now) or a named, John-specific byline (needs your confirmation per article) — see §8.

## How to preview

```bash
npm install
cp .env.example .env.local   # fill in Resend credentials to test real email delivery
npm run dev
```

Then check `/contact` (try submitting with and without JS, and with your keyboard only), a redirected old URL like `/painter-manly`, and `npm test` / `npm run build` for the automated checks. Nothing has been deployed, committed to git, or pushed — this is all local, uncommitted work ready for your review.
