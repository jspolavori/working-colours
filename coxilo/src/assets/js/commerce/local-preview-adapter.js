/*
 * Coxilo commerce adapter: local preview.
 *
 * The storefront UI (app.js) only talks to `window.CoxiloCommerce`, never to
 * storage or a backend directly. To connect Shopify later, replace this file
 * with an adapter that exposes the same methods and backs them with the
 * Shopify Storefront API cart (see shopify-adapter.example.js).
 *
 * Interface
 *   name                       string
 *   checkoutAvailable          boolean
 *   getCart()                  -> Cart
 *   addLine(variantId, qty)    -> Cart
 *   setQuantity(variantId, n)  -> Cart   (n <= 0 removes the line)
 *   removeLine(variantId)      -> Cart
 *   subscribe(fn)              -> unsubscribe function; fn(cart) on every change
 *   beginCheckout()            -> { ok: false, reason } | { ok: true, url }
 *
 * Cart
 *   { lines: [{ variantId, quantity, variant, product, unitPrice, lineTotal, pillows }],
 *     setCount, pillowCount, subtotal }   (money in AUD cents)
 *
 * The cart stores only variant IDs and quantities. Prices always come from
 * the catalogue, so a price change applies to bags that are already saved.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "coxilo.cart.v1";
  var MAX_QTY = 20;
  var catalog = window.COXILO_CATALOG;
  var listeners = [];

  var variants = {};
  catalog.products.forEach(function (product) {
    if (product.status !== "active") return;
    product.variants.forEach(function (v) { variants[v.id] = { variant: v, product: product }; });
  });

  function read() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];
      // Drop anything no longer in the catalogue and clamp quantities.
      return parsed
        .filter(function (l) { return l && variants[l.variantId] && Number.isFinite(l.quantity); })
        .map(function (l) { return { variantId: l.variantId, quantity: clamp(Math.floor(l.quantity)) }; })
        .filter(function (l) { return l.quantity > 0; });
    } catch (e) {
      return memory.slice();
    }
  }

  // Fallback when storage is unavailable (private mode, blocked site data).
  var memory = [];
  function write(lines) {
    memory = lines.slice();
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines)); } catch (e) { /* in-memory only */ }
    notify();
  }

  function clamp(n) { return Math.max(0, Math.min(MAX_QTY, n)); }

  function hydrate(lines) {
    var cart = { lines: [], setCount: 0, pillowCount: 0, subtotal: 0 };
    lines.forEach(function (l) {
      var entry = variants[l.variantId];
      var line = {
        variantId: l.variantId,
        quantity: l.quantity,
        variant: entry.variant,
        product: entry.product,
        unitPrice: entry.variant.price,
        lineTotal: entry.variant.price * l.quantity,
        pillows: entry.variant.pillows * l.quantity
      };
      cart.lines.push(line);
      cart.setCount += line.quantity;
      cart.pillowCount += line.pillows;
      cart.subtotal += line.lineTotal;
    });
    return cart;
  }

  function notify() {
    var cart = api.getCart();
    listeners.forEach(function (fn) { fn(cart); });
  }

  var api = {
    name: "local-preview",
    checkoutAvailable: false,
    maxQuantity: MAX_QTY,

    getCart: function () { return hydrate(read()); },

    addLine: function (variantId, qty) {
      if (!variants[variantId]) throw new Error("Unknown variant " + variantId);
      var lines = read();
      var existing = lines.find(function (l) { return l.variantId === variantId; });
      var add = Math.max(1, Math.floor(qty || 1));
      if (existing) existing.quantity = clamp(existing.quantity + add);
      else lines.push({ variantId: variantId, quantity: clamp(add) });
      write(lines);
      return api.getCart();
    },

    setQuantity: function (variantId, n) {
      var lines = read();
      var q = clamp(Math.floor(n));
      lines = q > 0
        ? lines.map(function (l) { return l.variantId === variantId ? { variantId: variantId, quantity: q } : l; })
        : lines.filter(function (l) { return l.variantId !== variantId; });
      write(lines);
      return api.getCart();
    },

    removeLine: function (variantId) { return api.setQuantity(variantId, 0); },

    subscribe: function (fn) {
      listeners.push(fn);
      return function () { listeners = listeners.filter(function (x) { return x !== fn; }); };
    },

    beginCheckout: function () {
      return { ok: false, reason: "not-connected" };
    }
  };

  // Keep several open tabs in sync.
  window.addEventListener("storage", function (e) { if (e.key === STORAGE_KEY) notify(); });

  window.CoxiloCommerce = api;
})();
