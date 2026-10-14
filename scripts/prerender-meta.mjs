// After `vite build`, writes one HTML file per page with its own title, description and
// link-preview image, so LinkedIn, Slack and iMessage show the right card for each case study.
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "https://www.sammitkin.com";
const pages = JSON.parse(readFileSync(new URL("../src/data/pages.json", import.meta.url), "utf8"));
const base = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const setMeta = (html, attr, key, value) => {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`, "s");
  if (!re.test(html)) throw new Error(`Missing meta ${attr}=${key} in index.html`);
  return html.replace(re, `$1${esc(value)}$2`);
};

for (const [path, meta] of Object.entries(pages)) {
  const url = `${SITE}${path}`;
  let html = base.replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`);
  html = setMeta(html, "name", "description", meta.description);
  html = setMeta(html, "property", "og:title", meta.title);
  html = setMeta(html, "property", "og:description", meta.description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:image", `${SITE}${meta.image}`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  writeFileSync(new URL(`../dist/${file}`, import.meta.url), html);
  console.log(`meta: ${path} -> dist/${file}`);
}
