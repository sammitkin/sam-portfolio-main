import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../brand/Logo";
import { EMAIL, EMAIL_URL, LINKEDIN_URL, RESUME_URL } from "../../data/site";
import { useSectionNav } from "./navigation";

const LINKS = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
];

/** Reading progress for case pages: a round-capped Electric Iris line under the header. */
function useReadingProgress(active: boolean) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [active]);
  return progress;
}

export function Header() {
  const { pathname } = useLocation();
  const goToSection = useSectionNav();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstMenuLink = useRef<HTMLAnchorElement>(null);
  const isCase = pathname !== "/";
  const progress = useReadingProgress(isCase);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMenuLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 md:h-20 md:px-10 lg:px-[72px]">
        <Link to="/" aria-label="Sam Mitkin, home" className="flex min-h-11 items-center">
          <Logo className="h-6 w-auto md:h-8" label="SM" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 text-[16px] font-bold md:flex">
          {LINKS.map((l) => (
            <a key={l.id} href={`/#${l.id}`} onClick={(e) => goToSection(l.id, e)} className="no-underline hover:text-electric">
              {l.label}
            </a>
          ))}
          {RESUME_URL && (
            <a href={RESUME_URL} className="no-underline hover:text-electric">
              Résumé
            </a>
          )}
          <a href={EMAIL_URL} className="pf-btn pf-btn-primary !min-h-[46px] !px-5">
            {EMAIL}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {RESUME_URL && (
            <a href={RESUME_URL} className="inline-flex min-h-11 items-center px-2.5 text-[15px] font-bold no-underline">
              Résumé
            </a>
          )}
          <button
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="min-h-11 rounded-full px-[18px] text-[15px] font-bold shadow-[inset_0_0_0_2px_var(--color-ink)]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isCase && (
        <div aria-hidden="true" className="h-1.5 px-0.5">
          <div className="h-1 rounded-full bg-electric" style={{ width: progress > 0.004 ? `max(6px, ${progress * 100}%)` : 0 }} />
        </div>
      )}
    </header>

      {/* Outside <header>: its backdrop-filter would trap a fixed child inside the header box. */}
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-paper px-5 pb-8 pt-6 md:hidden">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {[...LINKS, { label: "Contact", id: "contact" }].map((l, i) => (
                <li key={l.id} className="border-b border-hair">
                  <a
                    ref={i === 0 ? firstMenuLink : undefined}
                    href={`/#${l.id}`}
                    onClick={(e) => {
                      setOpen(false);
                      goToSection(l.id, e);
                    }}
                    className="flex min-h-[72px] items-center text-[40px] font-extrabold tracking-[-0.045em] no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-2.5">
              <a href={EMAIL_URL} className="pf-btn pf-btn-primary">
                Email me
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn-outline">
                LinkedIn
              </a>
              {RESUME_URL && (
                <a href={RESUME_URL} className="pf-btn pf-btn-outline">
                  Résumé (PDF)
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
