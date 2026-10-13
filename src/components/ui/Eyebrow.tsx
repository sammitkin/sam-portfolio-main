import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Short label above a heading. Orange is the signal color: darker on light surfaces, lighter on dark. */
export function Eyebrow({ children, tone = "light", className = "" }: EyebrowProps) {
  const color = tone === "dark" ? "text-[#f7b286]" : "text-[#a9501c]";
  return (
    <p className={`text-[15px] font-medium leading-[20px] ${color} ${className}`}>
      {children}
    </p>
  );
}
