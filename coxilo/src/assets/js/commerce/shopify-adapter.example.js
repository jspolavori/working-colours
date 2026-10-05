/*
 * EXAMPLE ONLY: not loaded by the site.
 *
 * Sketch of a Shopify Storefront API adapter with the same interface as
 * local-preview-adapter.js. To use it:
 *   1. Create the product and its three variants (Single / Pair / Set of four)
 *      in Shopify, and copy each variant's GID into catalog.json as
 *      "shopifyVariantId" (e.g. "gid://shopify/ProductVariant/1234567890").
 *   2. Create a Storefront API access token (Shopify admin > Settings > Apps
 *      and sales channels > Develop apps, or the Headless channel). This token
 *      is designed to be public, but never put an Admin API token here.
 *   3. Set SHOP_DOMAIN and STOREFRONT_TOKEN below, rename this file, and load
 *      it in src/partials/layout.html instead of local-preview-adapter.js.
 *   4. Set store.checkoutConnected to true in catalog.json and update the
 *      checkout copy in src/partials/dialogs.html.
 *
 * Because the UI expects synchronous reads, this adapter keeps a local mirror
 * of the Shopify cart and notifies subscribers when the API responds.
 * Prices shown should come from Shopify once connected (cart.cost).
 */
(function () {
  "use strict";
  var SHOP_DOMAIN = "your-store.myshopify.com";
  var STOREFRONT_TOKEN = "";              // public Storefront API token
  var API = "https://" + SHOP_DOMAIN + "/api/2025-07/graphql.json";
  var CART_ID_KEY = "coxilo.shopifyCartId";

  function gql(query, variables) {
    return fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN },
      body: JSON.stringify({ query: query, variables: variables })
    }).then(function (r) { return r.json(); });
  }

  var CART_FIELDS = "id checkoutUrl totalQuantity cost { subtotalAmount { amount currencyCode } } " +
    "lines(first: 50) { nodes { id quantity merchandise { ... on ProductVariant { id } } } }";

  // cartCreate, cartLinesAdd, cartLinesUpdate, cartLinesRemove follow the
  // Storefront API reference: https://shopify.dev/docs/api/storefront
  // beginCheckout() returns { ok: true, url: cart.checkoutUrl }, which sends
  // the shopper to Shopify's hosted checkout (payments, tax, shipping).

  // ...implementation intentionally left as a guided stub...
  void gql; void CART_FIELDS; void CART_ID_KEY;
})();
