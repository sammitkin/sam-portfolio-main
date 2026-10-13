import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Small mono label used above headings. Orange is the signal color: darker on light surfaces, lighter on dark. */
export function Eyebrow({ children, tone = "light", className = "" }: EyebrowProps) {
  const color = tone === "dark" ? "text-[#f7b286]" : "text-[#a9501c]";
  return (
    <p className={`font-mono text-[12px] font-medium uppercase leading-[16px] tracking-[0.12em] ${color} ${className}`}>
      {children}
    </p>
  );
}
