import type { Img } from "../components/case/Case";
import { imageSizes } from "./imageSizes";

const files = import.meta.glob<string>("/src/assets/images/case/**/*.webp", { eager: true, import: "default" });

/** Look up a case image by its key, e.g. "frant/home". */
export function img(key: string, alt: string): Img {
  const src = files[`/src/assets/images/case/${key}.webp`];
  const size = imageSizes[key];
  if (!src || !size) throw new Error(`Missing case image: ${key}`);
  return { src, alt, width: size[0], height: size[1] };
}
