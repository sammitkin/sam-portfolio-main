import { imageSizes } from "./imageSizes";

/** A case-study image. `srcSet` lists sharper variants (@2x, @3x) when the original Figma export allows it. */
export type Img = { src: string; alt: string; width: number; height: number; srcSet?: string };

const files = import.meta.glob<string>("/src/assets/images/case/**/*.webp", { eager: true, import: "default" });

/** Look up a case image by its key, e.g. "frant/home". Adds @2x/@3x variants to srcSet when they exist. */
export function img(key: string, alt: string): Img {
  const base = `/src/assets/images/case/${key}`;
  const src = files[`${base}.webp`];
  const size = imageSizes[key];
  if (!src || !size) throw new Error(`Missing case image: ${key}`);
  const variants = [
    [src, size[0]],
    [files[`${base}@2x.webp`], size[0] * 2],
    [files[`${base}@3x.webp`], size[0] * 3],
  ].filter(([s]) => s) as [string, number][];
  const srcSet = variants.length > 1 ? variants.map(([s, w]) => `${s} ${w}w`).join(", ") : undefined;
  return { src, alt, width: size[0], height: size[1], srcSet };
}

/** `sizes` hints: how wide a screenshot is drawn, so the browser picks the right variant for the screen density. */
export const SIZES = {
  phone: "(min-width: 1024px) 360px, (min-width: 768px) 30vw, 236px",
  pair: "(min-width: 1024px) 300px, 45vw",
  decision: "(min-width: 1024px) 360px, (min-width: 768px) 320px, 280px",
  band: "(min-width: 1024px) 340px, 30vw",
  lightbox: "min(92vw, calc((100vh - 150px) * 0.47))",
} as const;
