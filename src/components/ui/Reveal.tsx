import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Delay in ms, for small staggers inside a group. */
  delay?: number;
};

/**
 * Fades content in once when it scrolls into view. Content is visible by default
 * (no JS, reduced motion, or no IntersectionObserver) and only animates when motion is allowed.
 */
export function Reveal({ children, as: Tag = "div", className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return; // already on screen: never hide it

    setState("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const motion =
    state === "idle"
      ? ""
      : state === "hidden"
        ? "translate-y-4 opacity-0"
        : "translate-y-0 opacity-100 transition-[opacity,translate] duration-700 ease-out";

  return (
    <Tag ref={ref} className={`${motion} ${className}`} style={delay && state === "shown" ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
