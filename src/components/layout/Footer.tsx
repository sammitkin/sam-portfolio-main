import { useEffect, useRef, useState } from "react";
import { Logo } from "../brand/Logo";
import { EMAIL, EMAIL_URL, LINKEDIN_URL, RESUME_URL } from "../../data/site";
import { prefersReducedMotion } from "../../lib/usePageMeta";

/** The footer mark draws once, the first time 40% of it is visible. */
function useDrawOnce() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "pending" | "drawn">("idle");
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    // Only hide the line if it starts below the fold, so it never flashes empty on screen.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setState("pending");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("drawn");
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const cls = state === "pending" ? "pf-draw-pending" : state === "drawn" ? "pf-draw-footer" : undefined;
  return { ref, cls };
}

function CopyEmail({ className }: { className: string }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
          } catch {
            window.location.href = EMAIL_URL;
          }
        }}
      >
        {copied ? "Copied" : "Copy email"}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
}

export function Footer() {
  const draw = useDrawOnce();
  return (
    <footer id="contact" className="on-dark mx-auto max-w-[1440px] px-2 pb-2 md:px-3 md:pb-3 lg:px-4 lg:pb-4">
      <div className="rounded-[28px] bg-night px-5 pb-6 pt-14 text-white md:rounded-[32px] md:px-10 md:pt-20 lg:rounded-[40px] lg:px-14 lg:pb-10 lg:pt-[104px]">
        <p className="inline-flex items-center gap-2.5 text-[14px] font-bold text-iris md:text-[16px]">
          <span aria-hidden="true" className="size-2 rounded-full bg-iris md:size-[9px]" />
          Currently seeking product design opportunities
        </p>
        <h2 className="mt-5 max-w-[11em] text-[56px] font-extrabold leading-[0.92] tracking-[-0.06em] md:mt-7 md:text-[clamp(72px,8.9vw,128px)] md:leading-[0.9]">
          Let's build better experiences.
        </h2>

        <div className="mt-9 flex flex-col gap-5 md:mt-16 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-6">
          <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:items-center">
            <a
              href={EMAIL_URL}
              className="text-[26px] font-extrabold tracking-[-0.03em] text-white underline decoration-iris decoration-2 underline-offset-8 transition-colors hover:decoration-white md:text-[clamp(36px,3.6vw,52px)] md:tracking-[-0.04em] md:decoration-[3px] md:underline-offset-[12px]"
            >
              {EMAIL}
            </a>
            <CopyEmail className="min-h-[52px] rounded-full bg-iris px-[22px] text-[16px] font-extrabold text-ink transition-colors hover:bg-white md:min-h-12 md:text-[15px]" />
          </div>
          <div className="grid grid-cols-2 gap-2.5 md:flex md:gap-3">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={`pf-btn pf-btn-outline-dark !min-h-[52px] !px-6 ${RESUME_URL ? "" : "col-span-2"}`}>
              LinkedIn
            </a>
            {RESUME_URL && (
              <a href={RESUME_URL} className="pf-btn pf-btn-outline-dark !min-h-[52px] !px-6">
                Résumé (PDF)
              </a>
            )}
          </div>
        </div>

        <div ref={draw.ref} className="mt-16 lg:mt-[120px]">
          <Logo color="#c7b8ff" label="SM, Sam Mitkin" className="h-auto w-full" pathClassName={draw.cls} />
        </div>

        <div className="mt-7 flex justify-between text-[13px] font-semibold text-on-night md:text-[14px] lg:mt-10">
          <span>© 2026 Sam Mitkin</span>
          <a href="#top" className="text-on-night underline decoration-1 underline-offset-4 hover:text-white" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" }); document.getElementById("main")?.focus({ preventScroll: true }); }}>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
