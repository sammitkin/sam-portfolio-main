import type { ElementType, ReactNode } from "react";

/** Page width: 1440 max, outer margin 20 / 40 / 72 (Brand System v2 grid). */
export function Wrap({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: { children: ReactNode; className?: string; as?: ElementType } & Record<string, unknown>) {
  return (
    <Tag className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-[72px] ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/** A dot marking a tested result (filled) or a hypothesis (ring). */
export function Evidence({ kind = "tested", children, className = "" }: { kind?: "tested" | "hypothesis"; children: ReactNode; className?: string }) {
  return (
    <p className={`m-0 inline-flex items-center gap-2 font-bold ${className}`}>
      <span
        aria-hidden="true"
        className={`size-[9px] shrink-0 rounded-full ${kind === "tested" ? "bg-ink" : "shadow-[inset_0_0_0_2px_var(--color-ink)]"}`}
      />
      {children}
    </p>
  );
}
