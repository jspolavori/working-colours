# Coxilo storefront

*Comfort comes home.* The preview storefront for Coxilo, launching in Australia with the Coxilo Contour Pillow.

This folder is a standalone project. It's separate from the Working Colours Next.js site in the repository root and doesn't change it.

**Status:** this is a working front end with a working preview bag. **Checkout is not connected yet.** The site takes no payments and places no orders.

## Run it

You need Node 18 or later. There are no dependencies to install.

```bash
cd coxilo
npm start            # builds into dist/ and serves it at http://localhost:4321
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the site into `dist/`, with clean URLs such as `/products/contour-pillow/` |
| `npm run build:preview` | Builds into `preview/`, with links ending in `index.html` (for file browsing or sandboxed previews) |
| `npm run serve` | Serves `dist/` without rebuilding |

## Deploy

`dist/` is a plain static site, so any static host works.

- **Vercel:** create a new project from this repo and set *Root Directory* to `coxilo`, *Build Command* to `npm run build`, and *Output Directory* to `dist`. Keep it separate from the Working Colours project.
- **Netlify or Cloudflare Pages:** set the base directory to `coxilo`, the build command to `npm run build` and the publish directory to `dist`.

The hosts above serve `404.html` automatically.

## Where things live

```
coxilo/
  src/data/catalog.json        store settings, products, variants, PRICES (in cents), image slots
  src/pages/                   one HTML file per route (front matter sets title and description)
  src/partials/                header, footer, dialogs, FAQ blocks, bundle cards, layout
  src/assets/css/styles.css    design tokens (colours, type) at the top
  src/assets/js/app.js         UI: menu, bag drawer, product options, gallery, sticky bar
  src/assets/js/commerce/      commerce adapter (local preview now, Shopify later)
  src/assets/images/products/  drop real product photos here
  build.mjs                    dependency-free builder
```

### Changing prices

Edit `variants[].price` in `src/data/catalog.json`. Prices are in AUD cents, so `13900` is A$139. Then rebuild. Every price on the site and in the bag comes from this file, and per-pillow prices are calculated from it.

When final prices are confirmed, also update `store.pricingNote` and remove the "Preview pricing" tags.

### Replacing the concept images

Each product image has a named slot in `catalog.json`:

| Slot (filename) | Shot |
| --- | --- |
| `coxilo-contour-pillow-01-studio.jpg` | Clean studio product shot (main gallery and shop image) |
| `coxilo-contour-pillow-02-linen-bedding.jpg` | Pillow on neutral linen bedding |
| `coxilo-contour-pillow-03-contour-detail.jpg` | Close-up of the contour and fabric texture (portrait, 4:5) |
| `coxilo-contour-pillow-04-bedroom.jpg` | Wide bedroom lifestyle shot (hero, 16:9) |

To use real supplier photographs:

1. Export each image at about 2000px on the long edge, as JPEG at quality 80 (or WebP).
2. Save it in `src/assets/images/products/` using the slot filename above.
3. Set `"concept": false` for that image in `catalog.json`, and update its `alt` text if needed.
4. Rebuild. A local file always takes priority over the hosted concept image.

Until a local file exists, the site uses the hosted concept image (`conceptUrl`), which was generated with Higgsfield. If an image can't load, the page shows a labelled placeholder with the slot filename instead of a broken image. To keep copies of the concept images, run `node scripts/fetch-concept-images.mjs` on your own machine.

### Adding products later

Add a product to `catalog.json` with `"status": "active"` and a `collection` handle, add its page in `src/pages/products/`, and add a card in `src/pages/collections/all.html`. Pillowcases and sleep accessories already have collection entries. Keep a product's status as anything other than `active` until it's real, so it can't be added to the bag.

## Connecting real commerce

The UI only calls `window.CoxiloCommerce` (see `src/assets/js/commerce/local-preview-adapter.js`). To move to Shopify, swap that one script for a Storefront API adapter with the same methods. `shopify-adapter.example.js` shows the outline. Product pages and components don't need to change.

The connected Shopify account is a separate store (with no Coxilo products), so nothing was created in Shopify.

### Before you can accept real orders

1. **Supplier products and variants.** Confirm the actual product with your supplier: dimensions, fill, firmness, cover fabric, colour, care instructions and any certifications (with documents). Fill in the Specifications table and the Materials and care section, and replace the concept images with real photographs.
2. **Final prices and inventory.** Set final prices from landed cost, fees and margin, and decide how stock is tracked (supplier feed or manual).
3. **Commerce backend.** Create a Shopify store for Coxilo (or a separate store on your account), add the product with Single, Pair and Set of four variants, connect the Storefront API adapter, and set `store.checkoutConnected` to `true`.
4. **Payments.** Turn on Shopify Payments (or another provider) in Shopify. The site never handles card details itself.
5. **Fulfilment and tracking.** Connect your dropshipping supplier app or fulfilment partner, test an order end to end, and check that tracking emails are sent.
6. **Policies.** Publish verified delivery costs and timeframes, a returns policy that complies with the Australian Consumer Law, a full privacy policy and terms of sale. Replace the drafts in `src/pages/policies/` and add a real contact email in `store.contactEmail`.

Also: register a domain, add analytics only with an updated privacy policy, and only add reviews once real customers have written them.
