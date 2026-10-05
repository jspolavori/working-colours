#!/usr/bin/env node
// Coxilo static site builder. No dependencies: Node 18+ only.
//
//   node build.mjs              -> dist/     (clean URLs, for static hosting)
//   node build.mjs --preview    -> preview/  (links end in index.html, so pages
//                                             also work from a file listing or a
//                                             sandboxed preview host)
//
// Templates live in src/pages (one file per route) and src/partials.
// Tokens:
//   {{> partial}}               include src/partials/partial.html
//   {{root}}                    relative path back to the site root
//   {{link:some/path/}}         internal link (adds index.html in preview mode)
//   {{price:variant-id}}        formatted price, e.g. A$139
//   {{each:variant-id}}         price per pillow, e.g. A$69.50
//   {{pillows:variant-id}}      pillows in that variant
//   {{from:product-handle}}     lowest variant price
//   {{image:handle:index:mode}} product image slot (mode: eager | lazy)
//   {{thumb:handle:index}}      small decorative image for thumbnails
//   {{store:key}}               value from catalog.store
//   {{year}}

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync, rmSync, cpSync } from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "src");
const preview = process.argv.includes("--preview");
const out = join(here, preview ? "preview" : "dist");

const catalog = JSON.parse(readFileSync(join(src, "data", "catalog.json"), "utf8"));
const { store } = catalog;
const warnings = [];

// ---------- catalogue helpers ----------
const variants = new Map();
for (const p of catalog.products) for (const v of p.variants) variants.set(v.id, { ...v, product: p });

function money(cents) {
  const dollars = cents / 100;
  const text = Number.isInteger(dollars) ? String(dollars) : dollars.toFixed(2);
  return `${store.currencySymbol}${text.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
function variant(id) {
  const v = variants.get(id);
  if (!v) throw new Error(`Unknown variant "${id}"`);
  return v;
}
function product(handle) {
  const p = catalog.products.find((x) => x.handle === handle);
  if (!p) throw new Error(`Unknown product "${handle}"`);
  return p;
}

// Use a supplied photo from src/assets/images/products when it exists,
// otherwise fall back to the hosted concept image.
for (const p of catalog.products) {
  for (const img of p.images) {
    const local = join(src, "assets", "images", "products", img.file);
    if (existsSync(local)) {
      img.src = `assets/images/products/${img.file}`;
      img.local = true;
    } else {
      img.src = img.conceptUrl || "";
      img.local = false;
      warnings.push(`Image slot "${img.file}" has no local file; using ${img.conceptUrl ? "hosted concept image" : "placeholder"}.`);
    }
  }
}

function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function thumb(handle, index, root) {
  const img = product(handle).images[Number(index)];
  if (!img) throw new Error(`No image ${index} for ${handle}`);
  const url = img.local ? root + img.src : img.src;
  return `<span class="thumb-media" data-slot="${escapeAttr(img.file)}"><img src="${escapeAttr(url)}" alt="" loading="lazy" decoding="async"></span>`;
}

function imageSlot(handle, index, mode, root) {
  const img = product(handle).images[Number(index)];
  if (!img) throw new Error(`No image ${index} for ${handle}`);
  const url = img.local ? root + img.src : img.src;
  const eager = mode === "eager";
  return [
    `<figure class="media" style="aspect-ratio:${img.ratio}" data-slot="${escapeAttr(img.file)}">`,
    `<img src="${escapeAttr(url)}" alt="${escapeAttr(img.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`,
    img.concept ? `<span class="concept-tag">Concept image</span>` : "",
    `</figure>`,
  ].join("");
}

// ---------- templating ----------
const partialCache = new Map();
function partial(name) {
  if (!partialCache.has(name)) partialCache.set(name, readFileSync(join(src, "partials", `${name}.html`), "utf8"));
  return partialCache.get(name);
}

function link(path, root) {
  let [bare, hash] = path.trim().split("#");
  if (preview && (bare === "" || bare.endsWith("/"))) bare += "index.html";
  const href = root + bare;
  return (href || "./") + (hash !== undefined ? `#${hash}` : "");
}

function render(template, root, depth = 0) {
  if (depth > 8) throw new Error("Partial nesting too deep");
  let html = template.replace(/\{\{>\s*([\w-]+)\s*\}\}/g, (_, name) => render(partial(name), root, depth + 1));
  html = html.replace(/\{\{([^{}]+)\}\}/g, (match, expr) => {
    const [key, ...args] = expr.trim().split(":");
    switch (key) {
      case "root": return root;
      case "year": return String(new Date().getFullYear());
      case "link": return link(args.join(":"), root);
      case "price": return money(variant(args[0]).price);
      case "each": { const v = variant(args[0]); return money(Math.round(v.price / v.pillows)); }
      case "pillows": return String(variant(args[0]).pillows);
      case "from": return money(Math.min(...product(args[0]).variants.map((v) => v.price)));
      case "image": return imageSlot(args[0], args[1], args[2], root);
      case "thumb": return thumb(args[0], args[1], root);
      case "store": {
        if (!(args[0] in store)) throw new Error(`Unknown store key ${args[0]}`);
        return String(store[args[0]]);
      }
      default: return match; // leave unknown tokens (e.g. inside inline scripts) untouched
    }
  });
  return html;
}

function parsePage(text) {
  const meta = {};
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (m) {
    for (const line of m[1].split("\n")) {
      const i = line.indexOf(":");
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
    text = text.slice(m[0].length);
  }
  return { meta, body: text };
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

// ---------- build ----------
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(src, "assets"), join(out, "assets"), { recursive: true });

// Browser copy of the catalogue (same data the templates used).
writeFileSync(
  join(out, "assets", "js", "catalog.js"),
  `/* Generated by build.mjs from src/data/catalog.json. Do not edit. */\nwindow.COXILO_CATALOG = ${JSON.stringify(catalog, null, 2)};\n`
);

const layout = partial("layout");
const pagesDir = join(src, "pages");
const routes = [];

for (const file of walk(pagesDir).filter((f) => f.endsWith(".html"))) {
  const rel = relative(pagesDir, file).split(sep).join("/");
  const { meta, body } = parsePage(readFileSync(file, "utf8"));

  // index.html -> /, 404.html -> /404.html, a/b.html -> /a/b/index.html
  let outRel;
  if (rel === "index.html" || rel === "404.html") outRel = rel;
  else outRel = rel.replace(/\.html$/, "/index.html");

  const depth = outRel.split("/").length - 1;
  const root = rel === "404.html" ? "/" : "../".repeat(depth);

  const isArtifactEntry = preview && outRel === "index.html";
  let page = layout
    .replace("{{content}}", body)
    .replace(/\{\{title\}\}/g, escapeAttr(meta.title || store.name))
    .replace(/\{\{description\}\}/g, escapeAttr(meta.description || ""))
    .replace(/\{\{page\}\}/g, meta.page || "page");
  page = render(page, root);

  // The artifact host wraps its entry page in its own document skeleton.
  if (isArtifactEntry) {
    page = page
      .replace(/<!doctype html>\s*/i, "")
      .replace(/<html[^>]*>\s*/i, "")
      .replace(/<\/?head>\s*/gi, "")
      .replace(/<body[^>]*>\s*/i, "")
      .replace(/<\/body>\s*<\/html>\s*$/i, "")
      .replace(/<meta charset[^>]*>\s*/i, "")
      .replace(/<meta name="viewport"[^>]*>\s*/i, "");
  }

  const dest = join(out, outRel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, page);
  routes.push("/" + outRel.replace(/index\.html$/, ""));
}

const leftover = routes.length && walk(out).filter((f) => f.endsWith(".html")).filter((f) => /\{\{[^}]+\}\}/.test(readFileSync(f, "utf8").replace(/<script[\s\S]*?<\/script>/g, "")));
if (leftover.length) warnings.push(`Unresolved tokens in: ${leftover.map((f) => relative(out, f)).join(", ")}`);

console.log(`Built ${routes.length} pages into ${relative(here, out)}/`);
for (const r of routes.sort()) console.log("  " + r);
for (const w of warnings) console.warn("  note: " + w);
