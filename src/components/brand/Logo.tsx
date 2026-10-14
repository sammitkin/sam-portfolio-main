/** Pure Flow SM mark. The path is fixed brand geometry: scale it, never edit it. */
export const LOGO_PATH =
  "M5.6 31.9 L28.9 31.9 A6 6 0 0 0 31.81 20.66 L26.64 17.78 A6.5 6.5 0 0 1 29.8 5.6 L39.5 5.6 A9 9 0 0 1 47.2 9.94 L53.94 21.07 A6.5 6.5 0 0 0 64.7 21.6 L74.24 8.88 A8.2 8.2 0 0 1 89 13.8 L89 32.3";

type LogoProps = {
  /** Ink, White or Iris only (Brand System v2). */
  color?: string;
  className?: string;
  label?: string;
  pathClassName?: string;
};

export function Logo({ color = "#15171a", className = "", label = "Sam Mitkin", pathClassName }: LogoProps) {
  return (
    <svg viewBox="0 0 94.6 37.9" fill="none" role="img" aria-label={label} className={`block ${className}`}>
      <path
        d={LOGO_PATH}
        stroke={color}
        strokeWidth="11.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={pathClassName ? 1 : undefined}
        className={pathClassName}
      />
    </svg>
  );
}
