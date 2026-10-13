import svgPaths from "./svgPaths";

export function ArrowRightIcon({ stroke = "white", size = 15 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M0.625 5H9.375" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d="M5 0.625L9.375 5L5 9.375" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

export function ProjectLinkArrowIcon({ stroke = "#3B4B59", size = 13 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" aria-hidden>
      <path d="M2.70833 6.5H10.2917" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
      <path d={svgPaths.p17e9b940} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
    </svg>
  );
}

export function LinkedInIcon({ fill = "white" }: { fill?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d={svgPaths.p1c587500} fill={fill} />
    </svg>
  );
}

export function EnvelopeIcon({ fill = "#3B4B59" }: { fill?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d={svgPaths.p1beb7400} fill={fill} />
    </svg>
  );
}

export function LogoMark({ fillColor = "#3B4B59", height = 24 }: { fillColor?: string; height?: number }) {
  return (
    <svg
      height={height}
      width={(height * 94.6) / 37.9}
      viewBox="0 0 94.6 37.9"
      fill="none"
      role="img"
      aria-label="Sam Mitkin"
      className="block shrink-0"
    >
      <path
        d="M5.6 31.9 L28.9 31.9 A6 6 0 0 0 31.81 20.66 L26.64 17.78 A6.5 6.5 0 0 1 29.8 5.6 L39.5 5.6 A9 9 0 0 1 47.2 9.94 L53.94 21.07 A6.5 6.5 0 0 0 64.7 21.6 L74.24 8.88 A8.2 8.2 0 0 1 89 13.8 L89 32.3"
        stroke={fillColor}
        strokeWidth="11.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
