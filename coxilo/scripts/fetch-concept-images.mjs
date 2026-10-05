// Downloads the hosted concept images into src/assets/images/products/ so the
// site serves them itself. Run on your own machine:  node scripts/fetch-concept-images.mjs
// (Converts nothing: files are saved as delivered. See README for optimising.)
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(join(root, "src/data/catalog.json"), "utf8"));

for (const product of catalog.products) {
  for (const img of product.images) {
    if (!img.conceptUrl) continue;
    // Keep the source format; the build looks for the exact filename in catalog.json.
    const ext = new URL(img.conceptUrl).pathname.split(".").pop();
    const dest = join(root, "src/assets/images/products", img.file.replace(/\.\w+$/, "." + ext));
    if (existsSync(dest)) { console.log("exists  ", dest); continue; }
    const res = await fetch(img.conceptUrl);
    if (!res.ok) { console.error("failed  ", img.conceptUrl, res.status); continue; }
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    console.log("saved   ", dest);
    if (ext !== img.file.split(".").pop()) console.log(`         update "file" in catalog.json to ${img.file.replace(/\.\w+$/, "." + ext)} (or convert to .jpg)`);
  }
}
