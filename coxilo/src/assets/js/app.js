/* Coxilo storefront UI. Talks to window.CoxiloCommerce for everything cart-related. */
(function () {
  "use strict";

  var catalog = window.COXILO_CATALOG;
  var store = catalog.store;
  var commerce = window.CoxiloCommerce;
  var site = document.querySelector(".site");
  var page = site ? site.getAttribute("data-page") : "";
  var announcer = document.querySelector("[data-announcer]");

  // ---------- helpers ----------
  function money(cents) {
    var dollars = cents / 100;
    var text = dollars % 1 === 0 ? String(dollars) : dollars.toFixed(2);
    return store.currencySymbol + text.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }
  function findVariant(id) {
    for (var i = 0; i < catalog.products.length; i++) {
      var p = catalog.products[i];
      for (var j = 0; j < p.variants.length; j++) if (p.variants[j].id === id) return { product: p, variant: p.variants[j] };
    }
    return null;
  }
  function announce(msg) {
    if (!announcer) return;
    announcer.textContent = "";
    window.setTimeout(function () { announcer.textContent = msg; }, 30);
  }
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }
  function root() {
    var s = document.querySelector('script[src$="assets/js/app.js"]');
    return s ? s.getAttribute("src").replace(/assets\/js\/app\.js$/, "") : "";
  }
  function imageUrl(img) { return img.local ? root() + img.src : img.src; }

  // ---------- image slots: show a named placeholder if a photo can't load ----------
  function watchImage(img) {
    var holder = img.closest(".media, .thumb-media");
    if (!holder) return;
    function missing() { holder.classList.add("is-missing"); }
    function loaded() { holder.classList.remove("is-missing"); }
    img.addEventListener("error", missing);
    img.addEventListener("load", loaded);
    if (!img.getAttribute("src")) missing();
    else if (img.complete && img.naturalWidth === 0) missing();
  }
  document.querySelectorAll(".media img, .thumb-media img").forEach(watchImage);

  // ---------- current nav item ----------
  var navMap = { collection: "shop", product: "shop", story: "story", faqs: "faqs" };
  if (navMap[page]) {
    var current = document.querySelector('[data-nav="' + navMap[page] + '"]');
    if (current) current.setAttribute("aria-current", "page");
  }

  // ---------- dialogs (menu, cart, lightbox) ----------
  var lastOpener = null;
  function openDialog(dialog, opener) {
    if (!dialog || dialog.open) return;
    document.querySelectorAll("dialog[open]").forEach(function (d) { d.close(); });
    lastOpener = opener || document.activeElement;
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
  }
  document.querySelectorAll("dialog").forEach(function (dialog) {
    dialog.addEventListener("close", function () {
      // Another dialog may have opened in its place; leave scroll lock and focus to it.
      if (document.querySelector("dialog[open]")) return;
      document.documentElement.style.overflow = "";
      if (lastOpener && document.contains(lastOpener)) lastOpener.focus();
    });
    // Clicking the dimmed backdrop closes the dialog.
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
    dialog.querySelectorAll("[data-close-dialog]").forEach(function (btn) {
      btn.addEventListener("click", function () { dialog.close(); });
    });
  });
  var menuDialog = document.getElementById("menu-dialog");
  var cartDialog = document.getElementById("cart-dialog");
  document.querySelectorAll("[data-open-menu]").forEach(function (b) { b.addEventListener("click", function () { openDialog(menuDialog, b); }); });
  document.querySelectorAll("[data-open-cart]").forEach(function (b) { b.addEventListener("click", function () { openCart(b); }); });
  // Following a link in the menu should leave the page unlocked if it is an in-page anchor.
  if (menuDialog) menuDialog.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { menuDialog.close(); }); });

  function openCart(opener) {
    openDialog(cartDialog, opener);
    var title = document.getElementById("cart-title");
    if (title) title.focus();
  }

  // ---------- cart rendering ----------
  var countEls = document.querySelectorAll("[data-cart-count]");
  var labelEls = document.querySelectorAll("[data-cart-label]");
  var linesEl = document.querySelector("[data-cart-lines]");
  var emptyEl = document.querySelector("[data-cart-empty]");
  var footEl = document.querySelector("[data-cart-foot]");
  var subtotalEl = document.querySelector("[data-cart-subtotal]");
  var summaryEl = document.querySelector("[data-cart-summary]");
  var checkoutBtn = document.querySelector("[data-checkout]");
  var checkoutStatus = document.querySelector("[data-checkout-status]");

  function lineNode(line) {
    var img = line.product.images[0];
    var media = el("span", { class: "thumb-media" }, [el("img", { src: imageUrl(img), alt: "", loading: "lazy", decoding: "async" })]);
    watchImage(media.querySelector("img"));
    var name = line.variant.label;
    var per = plural(line.variant.pillows, "pillow", "pillows") + " per set";

    var dec = el("button", { type: "button", class: "stepper__btn", "aria-label": "Decrease quantity of " + name, text: "−" });
    var inc = el("button", { type: "button", class: "stepper__btn", "aria-label": "Increase quantity of " + name, text: "+" });
    var val = el("span", { class: "stepper__value", "aria-live": "polite", "aria-label": "Quantity " + line.quantity + (line.quantity === 1 ? " set" : " sets"), text: String(line.quantity) });
    if (line.quantity >= commerce.maxQuantity) inc.disabled = true;
    dec.addEventListener("click", function () {
      var next = line.quantity - 1;
      commerce.setQuantity(line.variantId, next);
      announce(next > 0 ? name + " quantity " + next : name + " removed from your bag");
      focusAfterRender(line.variantId, next > 0 ? "dec" : null);
    });
    inc.addEventListener("click", function () {
      commerce.setQuantity(line.variantId, line.quantity + 1);
      announce(name + " quantity " + (line.quantity + 1));
      focusAfterRender(line.variantId, "inc");
    });
    var remove = el("button", { type: "button", class: "cart-line__remove", text: "Remove", "aria-label": "Remove " + line.product.title + ", " + name });
    remove.addEventListener("click", function () {
      commerce.removeLine(line.variantId);
      announce(line.product.title + ", " + name + " removed from your bag");
      focusAfterRender(line.variantId, null);
    });

    return el("li", { class: "cart-line", "data-line": line.variantId }, [
      media,
      el("div", { class: "cart-line__body" }, [
        el("div", { class: "cart-line__top" }, [
          el("span", { class: "cart-line__title", text: line.product.title }),
          el("span", { class: "cart-line__total", text: money(line.lineTotal) })
        ]),
        el("span", { class: "cart-line__variant", text: name + " · " + per + " · " + money(line.unitPrice) + " each set" }),
        el("span", { class: "cart-line__variant", text: plural(line.quantity, "set", "sets") + " = " + plural(line.pillows, "pillow", "pillows") }),
        el("div", { class: "cart-line__controls" }, [
          el("div", { class: "stepper stepper--sm", role: "group", "aria-label": "Quantity of " + name }, [dec, val, inc]),
          remove
        ])
      ])
    ]);
  }

  // Keep keyboard focus somewhere sensible after the list re-renders.
  var pendingFocus = null;
  function focusAfterRender(variantId, which) { pendingFocus = { variantId: variantId, which: which }; }

  function renderCart(cart) {
    var count = cart.setCount;
    countEls.forEach(function (c) {
      c.textContent = String(count);
      c.setAttribute("data-empty", count === 0 ? "true" : "false");
    });
    labelEls.forEach(function (l) {
      l.textContent = count === 0 ? "Shopping bag, empty" : "Shopping bag, " + plural(count, "set", "sets") + ", " + plural(cart.pillowCount, "pillow", "pillows");
    });
    if (!linesEl) return;

    var empty = cart.lines.length === 0;
    emptyEl.hidden = !empty;
    linesEl.hidden = empty;
    footEl.hidden = empty;
    linesEl.textContent = "";
    cart.lines.forEach(function (line) { linesEl.appendChild(lineNode(line)); });
    subtotalEl.textContent = money(cart.subtotal);
    summaryEl.textContent = plural(cart.setCount, "set", "sets") + " · " + plural(cart.pillowCount, "pillow", "pillows");

    if (pendingFocus) {
      var target = null;
      var row = linesEl.querySelector('[data-line="' + pendingFocus.variantId + '"]');
      if (row && pendingFocus.which) {
        var btns = row.querySelectorAll(".stepper__btn");
        target = pendingFocus.which === "dec" ? btns[0] : btns[1];
        if (target && target.disabled) target = btns[0];
      }
      if (!target) target = empty ? emptyEl.querySelector("a") : linesEl.querySelector(".stepper__btn");
      if (target) target.focus();
      pendingFocus = null;
    }
  }

  function bump() {
    countEls.forEach(function (c) {
      c.classList.add("is-bumped");
      window.setTimeout(function () { c.classList.remove("is-bumped"); }, 250);
    });
  }

  commerce.subscribe(renderCart);
  renderCart(commerce.getCart());

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      var result = commerce.beginCheckout();
      if (result.ok && result.url) { window.location.href = result.url; return; }
      checkoutStatus.hidden = false;
      checkoutBtn.setAttribute("aria-expanded", "true");
      checkoutStatus.focus();
    });
  }

  function addToBag(variantId, qty, opener) {
    var found = findVariant(variantId);
    if (!found) return;
    commerce.addLine(variantId, qty);
    bump();
    if (checkoutStatus) { checkoutStatus.hidden = true; checkoutBtn.setAttribute("aria-expanded", "false"); }
    announce("Added " + plural(qty, "set", "sets") + " of " + found.variant.label + " to your bag");
    openCart(opener);
  }

  document.querySelectorAll("[data-add-variant]").forEach(function (btn) {
    btn.addEventListener("click", function () { addToBag(btn.getAttribute("data-add-variant"), 1, btn); });
  });

  // ---------- product page ----------
  var form = document.querySelector("[data-buy-form]");
  if (form) {
    var productEl = document.querySelector("[data-product]");
    var product = catalog.products.find(function (p) { return p.handle === productEl.getAttribute("data-product"); });
    var qtyInput = form.querySelector("[data-qty-input]");
    var radios = form.querySelectorAll('input[name="bundle"]');
    var priceEl = document.querySelector("[data-price]");
    var priceMetaEl = document.querySelector("[data-price-meta]");
    var summary = form.querySelector("[data-buy-summary]");
    var addTotal = form.querySelector("[data-add-total]");
    var stickyMeta = document.querySelector("[data-sticky-meta]");
    var decBtn = form.querySelector('[data-qty-step="-1"]');
    var incBtn = form.querySelector('[data-qty-step="1"]');

    var selected = function () {
      var r = form.querySelector('input[name="bundle"]:checked');
      return product.variants.find(function (v) { return v.id === (r ? r.value : product.defaultVariant); });
    };
    var qty = function () {
      var n = parseInt(qtyInput.value, 10);
      return Math.max(1, Math.min(commerce.maxQuantity, isNaN(n) ? 1 : n));
    };

    var update = function () {
      var v = selected();
      var q = qty();
      var each = Math.round(v.price / v.pillows);
      priceEl.textContent = money(v.price);
      priceMetaEl.textContent = v.pillows === 1 ? "1 pillow" : v.pillows + " pillows · " + money(each) + " per pillow";
      summary.textContent = q + " × " + v.label + " · " + plural(v.pillows * q, "pillow", "pillows") + " · " + money(v.price * q);
      addTotal.textContent = money(v.price * q);
      if (stickyMeta) stickyMeta.textContent = (q > 1 ? q + " × " : "") + v.label + " · " + money(v.price * q);
      decBtn.disabled = q <= 1;
      incBtn.disabled = q >= commerce.maxQuantity;
    };

    radios.forEach(function (r) { r.addEventListener("change", update); });
    form.querySelectorAll("[data-qty-step]").forEach(function (b) {
      b.addEventListener("click", function () {
        qtyInput.value = String(Math.max(1, Math.min(commerce.maxQuantity, qty() + Number(b.getAttribute("data-qty-step")))));
        update();
      });
    });
    qtyInput.addEventListener("input", update);
    qtyInput.addEventListener("change", function () { qtyInput.value = String(qty()); update(); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      qtyInput.value = String(qty());
      addToBag(selected().id, qty(), form.querySelector("[data-add-button]"));
    });

    // Preselect a bundle from links such as #bundle-pair.
    var preselect = function () {
      var m = /^#bundle-([\w-]+)$/.exec(window.location.hash);
      if (!m) return;
      var v = product.variants.find(function (x) { return x.handle === m[1]; });
      if (!v) return;
      var r = form.querySelector('input[value="' + v.id + '"]');
      if (r) { r.checked = true; update(); }
    };
    preselect();
    window.addEventListener("hashchange", preselect);
    update();

    // Sticky purchase bar on small screens once the main button scrolls away.
    var sticky = document.querySelector("[data-sticky-buy]");
    var mainBtn = form.querySelector("[data-add-button]");
    if (sticky) {
      var mq = window.matchMedia("(max-width: 959px)");
      var ticking = false;
      var sync = function () {
        ticking = false;
        // Only show once the main button has scrolled above the viewport, not before reaching it.
        var show = mq.matches && mainBtn.getBoundingClientRect().bottom < 0;
        if (sticky.hidden === !show) return;
        sticky.hidden = !show;
        document.body.classList.toggle("has-sticky-buy", show);
      };
      var onScroll = function () { if (!ticking) { ticking = true; window.requestAnimationFrame(sync); } };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      sync();
      if (mq.addEventListener) mq.addEventListener("change", sync);
      sticky.querySelector("[data-sticky-add]").addEventListener("click", function (e) {
        addToBag(selected().id, qty(), e.currentTarget);
      });
    }

    // Open the specs panel when linked directly.
    var openFromHash = function () {
      var target = window.location.hash && document.getElementById(window.location.hash.slice(1));
      if (target && target.tagName === "DETAILS") target.open = true;
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
  }

  // ---------- gallery + lightbox ----------
  var gallery = document.querySelector("[data-gallery]");
  if (gallery) {
    var gProduct = catalog.products.find(function (p) { return p.handle === document.querySelector("[data-product]").getAttribute("data-product"); });
    var images = gProduct.images;
    var mainFigure = gallery.querySelector("[data-gallery-main] .media");
    var mainImg = mainFigure.querySelector("img");
    var thumbs = gallery.querySelectorAll("[data-gallery-thumb]");
    var index = 0;

    var show = function (i) {
      index = (i + images.length) % images.length;
      var img = images[index];
      mainFigure.classList.remove("is-missing");
      mainFigure.setAttribute("data-slot", img.file);
      mainImg.src = imageUrl(img);
      mainImg.alt = img.alt;
      var tag = mainFigure.querySelector(".concept-tag");
      if (tag) tag.hidden = !img.concept;
      thumbs.forEach(function (t, n) {
        if (n === index) t.setAttribute("aria-current", "true");
        else t.removeAttribute("aria-current");
      });
    };
    thumbs.forEach(function (t) {
      t.addEventListener("click", function () { show(Number(t.getAttribute("data-gallery-thumb"))); });
    });
    // Arrow keys move between thumbnails.
    gallery.querySelector(".gallery__thumbs").addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      show(index + (e.key === "ArrowRight" ? 1 : -1));
      thumbs[index].focus();
    });

    var lightbox = document.getElementById("lightbox-dialog");
    var stage = lightbox.querySelector("[data-lightbox-stage]");
    var counter = lightbox.querySelector("[data-lightbox-count]");
    var renderLightbox = function () {
      var img = images[index];
      stage.textContent = "";
      var fig = el("figure", { class: "media", "data-slot": img.file, style: "aspect-ratio:" + img.ratio }, [
        el("img", { src: imageUrl(img), alt: img.alt, decoding: "async" }),
        img.concept ? el("span", { class: "concept-tag", text: "Concept image" }) : null
      ]);
      stage.appendChild(fig);
      watchImage(fig.querySelector("img"));
      counter.textContent = (index + 1) + " of " + images.length;
    };
    var openLightbox = function (opener) {
      renderLightbox();
      openDialog(lightbox, opener);
    };
    gallery.querySelector("[data-gallery-zoom]").addEventListener("click", function (e) { openLightbox(e.currentTarget); });
    mainFigure.addEventListener("click", function () { openLightbox(gallery.querySelector("[data-gallery-zoom]")); });
    lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", function () { show(index - 1); renderLightbox(); });
    lightbox.querySelector("[data-lightbox-next]").addEventListener("click", function () { show(index + 1); renderLightbox(); });
    lightbox.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { show(index + 1); renderLightbox(); }
      if (e.key === "ArrowLeft") { show(index - 1); renderLightbox(); }
    });
  }

  // ---------- contact page ----------
  var contactBox = document.querySelector("[data-contact-email]");
  if (contactBox && store.contactEmail) {
    contactBox.hidden = false;
    document.querySelector("[data-contact-pending]").hidden = true;
    var a = contactBox.querySelector("[data-contact-link]");
    a.href = "mailto:" + store.contactEmail;
    contactBox.querySelector("[data-contact-text]").textContent = store.contactEmail;
  }
})();
