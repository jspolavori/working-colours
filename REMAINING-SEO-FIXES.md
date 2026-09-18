# Working Colours — SEO / Accessibility / Enquiry-Form Fixes: Deployed & Verified

Date: 2026-09-19. This supersedes the previous version of this file. All the code-level work described here was already implemented locally in the prior session; **this round's real work was finding out why none of it had gone live, fixing that, and independently verifying the fix in production.**

## What was actually wrong

All the code for items 1–8 below already existed in the repo, committed and pushed to `origin/main` (commit `942dfc7`), before this session started. But the live site at `https://www.wcpainting.com.au` was still showing old behaviour (old WhatsApp wording, the old FAQ error, no direct enquiry form). Checking git history alone wouldn't explain this, so I checked what was actually deployed:

- This repo is linked to Vercel (`.vercel/project.json`) and connected via GitHub's Deployments API to **two** Vercel projects that both build from this repo: "wc-new" and "working-colours".
- Using GitHub's public Deployments API (`/repos/jspolavori/working-colours/deployments`), I found that the deployment triggered by commit `942dfc7` **failed on both projects**. The two commits before it (`26dc00f`, `7dadede`) had deployed successfully — so the live site was frozen at `7dadede`, one commit behind everything in the previous round's report.
- Reproduced the failure locally: `npm ci` (what Vercel's build actually runs) failed with an ERESOLVE error. The previous session had installed `vitest`/`vite` with `--legacy-peer-deps` to get around a conflict where `package.json` still declared `"@types/node": "^20"` but `vitest@5` requires `^22`/`>=24`. `--legacy-peer-deps` made it work *locally* but the underlying conflict was still in `package.json`/`package-lock.json`, and Vercel's build (a clean `npm ci`, no override flag) hit it every time.

**Fix:** bumped `@types/node` to `^24` and regenerated the lockfile with a plain `npm install` (no override flag needed anymore). Verified `npm ci` now succeeds cleanly. This also surfaced one new, unrelated lint error (`react-hooks/set-state-in-effect`, from a newer transitive `eslint-plugin-react-hooks` picked up by the fresh install) in the Contact page's no-JS-fallback effect — the setState there is deliberate and hydration-safe, so it's suppressed with a one-line justification rather than restructured.

Committed as `ff8efc0` and pushed. **Both connected Vercel projects rebuilt successfully this time** (confirmed via the Deployments API, not assumed).

## Production deployment identifiers

- Commit deployed: `ff8efc0` on `main`
- GitHub deployment IDs: `6533585170` (environment "Production – wc-new") and `6533584106` (environment "Production – working-colours") — both `state: success`
- Preview URLs from that build: `https://wc-7i2kw2gkg-jspolavoris-projects.vercel.app` and `https://working-colours-92vmx49a3-jspolavoris-projects.vercel.app`
- Public production URL: `https://www.wcpainting.com.au`

**Note for you:** having two separate Vercel projects both connected to this one GitHub repo is unusual and worth checking in your Vercel dashboard — I can see both exist and both deploy successfully, but I don't have dashboard access to tell you why there are two, whether one is redundant, or whether that's costing you double build minutes. Not something I can fix from the CLI/repo side.

## Verified live (not just "should work" — actually checked against https://www.wcpainting.com.au just now)

- **Contact page**: real direct-enquiry form present (name, phone, email, suburb, service, message), with the copy *"Sends your enquiry directly to Working Colours. We typically respond within a few hours."* A separate "Prefer WhatsApp or email?" section uses the accurate wording *"Open WhatsApp with your project details, then press Send to message us."* — confirmed via a fresh (cache-busted) fetch of the live page.
- **Interior painting FAQ**: live text now reads *"Low-sheen paint is a practical choice for many interior walls because it balances appearance and washability. It generally shows imperfections less than gloss finishes. Flat or matt finishes can help conceal surface imperfections, while washability depends on the specific product..."* — the old "hides imperfections better than flat" claim is gone.
- **Cost-guide consolidation**: `https://www.wcpainting.com.au/blog/cost-paint-house-sydney-2025` returns `HTTP/1.1 308 Permanent Redirect` → `https://www.wcpainting.com.au/blog/how-much-does-it-cost-to-paint-a-house-sydney` (checked with `curl -D -`, not just visually). The retained guide's live content includes the new "Why we don't publish a generic price range" section and no dollar-figure ranges.
- **Old-domain suburb redirects**, checked live with `curl -D -` (raw HTTP headers, not rendered content):
  - `/painter-manly` → 308 → `/painters/manly`
  - `/painter-mona-vale` → 308 → `/painters/mona-vale`
  - `/painter-dee-why` → 308 → `/painters/dee-why`
  - `/painter-narrabeen` → 308 → `/painters/narrabeen`
  - `/painter-palm-beach` → 308 → `/painters/palm-beach`
- **Apex domain**: `http://wcpainting.com.au/` → 308 → `https://www.wcpainting.com.au/`
- **Genuine 404**: a made-up path returns `HTTP/1.1 404 Not Found`.
- **Homepage preserved**: H1 still reads "House Painters on Sydney's Northern Beaches" — untouched by this round, confirmed live.
- **Business hours reconciled**: the live `LocalBusiness` structured data now contains both the weekday (`Mon–Fri 07:00–17:00`) *and* Saturday (`07:00–12:00`) `OpeningHoursSpecification` entries, matching what `/contact` has always shown.
- **Social image**: `https://www.wcpainting.com.au/og-image.jpg` returns `200`.
- **robots.txt / sitemap.xml**: both live, valid, `www`-based, OAI-SearchBot explicitly allowed, GPTBot policy untouched, retired blog slug absent from the sitemap.
- **No accidental noindex**: checked the interior-painting page's live `<head>` — canonical tag present, no `<meta name="robots">` noindex tag.

**What "verified" means here**: every claim above came from directly curling or fetching the live public URL during this session (with cache-busting query params where I'd fetched the same URL earlier and risked a stale cached copy from my own tooling), not from reading the code and assuming it would work once deployed.

## Still honestly blocked — not deployed further, not faked

**The enquiry form cannot send real email yet.** `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, and `ENQUIRY_FROM_EMAIL` are not set anywhere (checked: no `.env` file in the repo, and I have no access to your Vercel project's environment variable settings). Right now, live, if someone submits the form, they get an honest failure message directing them to call or WhatsApp instead — **I have not set these and cannot verify email delivery**, because:
1. I don't have a Resend account/API key for this business, and
2. Even if I did, sending a real test enquiry to your live inbox without your authorisation is exactly what I was told not to do.

**What you need to do:** create a Resend account (or tell me if you already use another provider), verify a sending domain, then add these three as Environment Variables in the Vercel dashboard for both connected projects (Project → Settings → Environment Variables):
```
RESEND_API_KEY=<your Resend API key>
ENQUIRY_TO_EMAIL=<the inbox that should receive enquiries>
ENQUIRY_FROM_EMAIL=<a sender address on your verified domain>
```
No redeploy of code is needed for this — Vercel picks up new environment variables on the next deploy (a small redeploy, or just adding the vars and redeploying, will activate it). Tell me once these are set and I can trigger a redeploy and verify a real, successful send end-to-end (with your explicit go-ahead before anything hits your real inbox).

## External hosting steps still required (cannot be done from here)

**`workingcolours.com.au`** is still live, still on separate hosting, still serving old content — confirmed again this session (unchanged from the previous report). This repository's redirects only take effect for requests that actually reach *this* deployment; they do nothing for a domain hosted elsewhere. You need to either:
1. Point `workingcolours.com.au`'s DNS at this same Vercel deployment (add it as a domain in whichever of the two Vercel projects owns `www.wcpainting.com.au`) — the redirect rule already in `next.config.ts` will then take over automatically and send it to `https://www.wcpainting.com.au` at the same path, or
2. If it's staying where it is, add a 301 redirect in that host's own configuration from `workingcolours.com.au/*` to `https://www.wcpainting.com.au/*`.

I don't have access to that domain's DNS or hosting panel, so this genuinely cannot be finished from here.

## Test and build results (this session)

- `npx tsc --noEmit` — clean
- `npm run lint` — clean on every file in scope (the only remaining errors are pre-existing ones in `src/app/paint-like-a-pro/page.tsx`, an unrelated ad-funnel page out of scope for this brief)
- `npx vitest run` — 33/33 tests passing (form validation, mocked email success/failure/missing-config, redirect mappings including the retired cost-article route — these test files already existed from the previous session; re-run this session to confirm they still pass with the dependency fix)
- `npm run build` — production build succeeds
- `npm ci` — **specifically re-verified this session**, since it's what actually broke the deploy; now succeeds

## Files changed this session

- `package.json`, `package-lock.json` — `@types/node` `^20` → `^24`
- `src/app/contact/page.tsx` — one-line lint suppression with justification (no behavioural change)

Everything else referenced in this report (the enquiry form, WhatsApp wording, FAQ fix, cost-guide consolidation, redirects, business-hours schema, etc.) was code from the previous session — this session's job was making it actually reach production and proving that it did.

## Owner information still needed

1. Resend (or preferred alternative) account + verified sending domain + the three environment variables above, so the enquiry form can actually deliver email.
2. Whether the two Vercel projects ("wc-new" and "working-colours") are both meant to exist, or one is a leftover you'd like cleaned up.
3. `workingcolours.com.au` — point its DNS here, or apply a 301 on its current host (see above).
4. Everything still open from the previous report: verified Google Business Profile review URL, confirmation the three homepage testimonials are real/consented, confirmation of "500+ homes painted"/"5.0 rating" claims, suburb/job details for any gallery photo you'd like turned into a real project example, and whether blog attribution should stay generic ("Published by Working Colours Painting Services") or become a named, John-specific byline.

## What I did not do

- Did not send a real enquiry through the live form (no email credentials exist yet, and I wasn't authorised to test with real delivery even if they did).
- Did not touch DNS, create a new hosting project, or change which Vercel project(s) own the custom domain.
- Did not claim or check search-ranking or ChatGPT-recommendation impact — nothing in this report should be read as evidence of either.
