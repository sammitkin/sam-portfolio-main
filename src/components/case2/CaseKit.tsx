/* Case-study building blocks for Brand System v2 (Playful Precision). */
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Img } from "../case/Case";
import { Wrap } from "../layout/Wrap";
import { scrollBehavior } from "../../lib/usePageMeta";

export type SectionDef = { id: string; label: string };

/** Index of the section crossing the upper part of the viewport, or -1 before the first one. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(-1);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let idx = -1;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) idx = i;
      });
      setActive(idx);
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
  }, [ids]);
  return active;
}

function jump(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: scrollBehavior() });
  window.history.replaceState(null, "", `#${id}`);
  // Move keyboard focus with the jump, without a second scroll.
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}

export function DesktopIndex({ sections, active }: { sections: SectionDef[]; active: number }) {
  return (
    <nav aria-label="Case study sections" className="hidden pt-32 lg:col-span-2 lg:block">
      <ol className="sticky top-[120px] flex flex-col gap-0.5 text-[15px]">
        {sections.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={on ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  jump(s.id);
                }}
                className={`flex min-h-9 items-center gap-2.5 transition-colors ${on ? "font-extrabold text-ink" : "pl-8 font-semibold text-graphite hover:text-ink"}`}
              >
                {on && (
                  <svg aria-hidden="true" width="22" height="6" viewBox="0 0 22 6">
                    <line x1="3" y1="3" x2="19" y2="3" stroke="#5a3fe0" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                )}
                {s.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Mobile and tablet: a sticky pill that names the section on screen and opens the list. */
export function MobileIndex({ sections, active }: { sections: SectionDef[]; active: number }) {
  const [open, setOpen] = useState(false);
  const current = active >= 0 ? sections[active] : null;
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <div className="sticky top-[70px] z-40 bg-paper/94 px-5 py-2 backdrop-blur-md md:top-[86px] md:px-10 lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="case-sections"
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-12 w-full items-center justify-between rounded-full bg-ink px-[18px] text-[15px] font-extrabold text-white"
      >
        <span>{current ? current.label : "Jump to a section"}</span>
        <span className="inline-flex items-center gap-2.5 font-semibold text-iris">
          {current ? `${active + 1} of ${sections.length}` : `${sections.length} sections`}
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
            <path d="M4 6l4 4 4-4" fill="none" stroke="#c7b8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <ol id="case-sections" className="absolute inset-x-5 top-full -mt-1 overflow-hidden rounded-[22px] md:inset-x-10 bg-white shadow-[0_0_0_1px_var(--color-hair),0_24px_48px_-24px_rgba(21,23,26,0.35)]">
          {sections.map((s, i) => (
            <li key={s.id} className="border-b border-hair last:border-b-0">
              <a
                href={`#${s.id}`}
                aria-current={i === active ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  jump(s.id);
                }}
                className={`flex min-h-12 items-center justify-between px-[18px] text-[16px] ${i === active ? "font-extrabold" : "font-semibold text-body2"}`}
              >
                {s.label}
                <span className="text-[14px] font-semibold text-graphite">{i + 1}</span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-[15px] font-extrabold text-graphite md:text-[16px]">{children}</p>;
}

export function Section({ id, kicker, title, children }: { id: string; kicker: string; title?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-10 pt-20 focus:outline-none md:pt-28 lg:scroll-mt-2 lg:pt-32">
      <div className="px-5 md:px-10 lg:px-0">
        <Kicker>
          <span id={`${id}-title`}>{kicker}</span>
        </Kicker>
        {title && (
          <h2 className="mt-3 max-w-[15em] text-[36px] font-extrabold leading-none tracking-[-0.05em] md:mt-3.5 md:text-[48px] lg:text-[56px]">{title}</h2>
        )}
      </div>
      {children}
    </section>
  );
}

/** Horizontal padding for content inside a section on small screens (sections can also bleed). */
export function Pad({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`px-5 md:px-10 lg:px-0 ${className}`}>{children}</div>;
}

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-[38em] text-[16px] font-medium leading-[1.6] md:text-[17px] lg:text-[18px] [&>p+p]:mt-4 [&_strong]:font-extrabold ${className}`}>
      {children}
    </div>
  );
}

export function Quote({ children, by, size = "m" }: { children: ReactNode; by: string; size?: "l" | "m" }) {
  return (
    <figure className="mt-8">
      <blockquote
        className={`font-bold tracking-[-0.035em] ${size === "l" ? "text-[30px] leading-[1.1] md:text-[44px] lg:text-[56px] lg:leading-[1.05] lg:tracking-[-0.04em]" : "text-[24px] leading-[1.15] md:text-[32px] lg:text-[36px]"}`}
      >
        “{children}”
      </blockquote>
      <figcaption className="mt-3 text-[14px] font-semibold text-graphite md:text-[16px]">{by}</figcaption>
    </figure>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="mt-12 text-[22px] font-extrabold leading-[1.15] tracking-[-0.025em] md:text-[26px]">{children}</h3>;
}

export function Table({ head, rows, caption, highlightLast }: { head: ReactNode[]; rows: ReactNode[][]; caption?: ReactNode; highlightLast?: boolean }) {
  return (
    <figure className="mt-8">
      <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0" tabIndex={0} role="region" aria-label="Table, scrolls sideways on small screens">
        <table className="w-full min-w-[560px] border-collapse text-left text-[15px] md:text-[16px]">
          <thead>
            <tr className="border-b-2 border-ink text-[14px] md:text-[15px]">
              {head.map((h, i) => (
                <th key={i} scope="col" className="py-3 pr-4 font-extrabold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const last = highlightLast && i === rows.length - 1;
              return (
                <tr key={i} className={last ? "border-b-2 border-ink" : "border-b border-hair"}>
                  {r.map((c, j) =>
                    j === 0 ? (
                      <th key={j} scope="row" className={`py-4 pr-4 align-top ${last ? "font-extrabold" : "font-bold"}`}>
                        {c}
                      </th>
                    ) : (
                      <td key={j} className={`py-4 pr-4 align-top ${last ? "font-bold" : "font-medium"}`}>
                        {c}
                      </td>
                    ),
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {caption && <figcaption className="mt-4 max-w-[40em] text-[15px] font-medium leading-[1.5] text-body2">{caption}</figcaption>}
    </figure>
  );
}

export const Yes = () => <span className="font-extrabold">Yes</span>;
export const No = () => <span className="text-graphite">No</span>;

export function Points({ items, columns = 3 }: { items: { title: ReactNode; body: ReactNode; label?: ReactNode }[]; columns?: 2 | 3 }) {
  return (
    <ul className={`mt-8 grid gap-0 md:gap-6 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map((it, i) => (
        <li key={i} className="border-t-2 border-ink pb-4 pt-3 md:pb-0 md:pt-3.5">
          {it.label && <p className="mb-1.5 text-[14px] font-extrabold text-graphite">{it.label}</p>}
          <b className="text-[18px] font-extrabold tracking-[-0.02em] md:text-[20px]">{it.title}</b>
          <div className="mt-1 text-[16px] font-medium leading-[1.5] md:text-[17px] [&>p+p]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">{it.body}</div>
        </li>
      ))}
    </ul>
  );
}

export function Metrics({ items, size = "l" }: { items: { value: string; label: string }[]; size?: "l" | "m" }) {
  return (
    <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-6">
      {items.map((m) => (
        <div key={m.label} className="flex flex-col-reverse border-t-2 border-ink pt-3.5 md:pt-[18px]">
          <dt className="mt-2 text-[14px] font-semibold leading-[1.4] text-graphite md:mt-2.5 md:text-[15px]">{m.label}</dt>
          <dd
            className={`font-extrabold leading-[0.9] tracking-[-0.06em] tabular-nums ${size === "l" ? "text-[48px] md:text-[60px] lg:text-[72px]" : "text-[36px] md:text-[44px]"}`}
          >
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Shot({ img, className = "", radius = "rounded-[26px] md:rounded-[30px]" }: { img: Img; className?: string; radius?: string }) {
  return (
    <img
      src={img.src}
      alt={img.alt}
      width={img.width}
      height={img.height}
      loading="lazy"
      decoding="async"
      className={`block h-auto w-full shadow-[0_0_0_1px_var(--color-hair)] ${radius} ${className}`}
    />
  );
}

/** Phone screens with captions. Scrolls sideways on phones, grid from tablet up. */
export function PhoneRow({ items, caption }: { items: { img: Img; tag?: string; label: ReactNode }[]; caption?: ReactNode }) {
  return (
    <figure className="mt-8">
      <ul className={`-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:overflow-visible md:px-0 ${items.length === 2 ? "md:grid-cols-2 lg:max-w-[66%]" : "md:grid-cols-3"}`}>
        {items.map((it, i) => (
          <li key={i} className="w-[236px] shrink-0 md:w-auto">
            <Shot img={it.img} />
            <p className="mt-3 text-[15px] font-medium leading-[1.45] md:mt-3.5 md:text-[16px]">
              {it.tag && <b className="font-extrabold">{it.tag}. </b>}
              {it.label}
            </p>
          </li>
        ))}
      </ul>
      {caption && <figcaption className="mt-4 max-w-[40em] text-[15px] font-medium leading-[1.5] text-body2">{caption}</figcaption>}
    </figure>
  );
}

export function WideImage({ img, caption, minWidth }: { img: Img; caption?: ReactNode; minWidth?: number }) {
  return (
    <figure className="mt-8">
      <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0" tabIndex={minWidth ? 0 : undefined} role={minWidth ? "region" : undefined} aria-label={minWidth ? "Wide image, scrolls sideways" : undefined}>
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading="lazy"
          decoding="async"
          style={minWidth ? { minWidth } : undefined}
          className="block h-auto w-full bg-white shadow-[0_0_0_1px_var(--color-hair)]"
        />
      </div>
      {caption && <figcaption className="mt-3 max-w-[40em] text-[15px] font-medium leading-[1.5] text-body2">{caption}</figcaption>}
    </figure>
  );
}

export function Flow({ steps, caption }: { steps: string[]; caption?: ReactNode }) {
  return (
    <figure className="mt-8">
      <ol className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className="inline-flex min-h-10 items-center rounded-full px-4 text-[15px] font-bold shadow-[inset_0_0_0_2px_var(--color-ink)]">{s}</span>
            {i < steps.length - 1 && (
              <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden="true">
                <path d="M1 5h15M12 1l4 4-4 4" fill="none" stroke="#15171a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </li>
        ))}
      </ol>
      {caption && <figcaption className="mt-3 text-[15px] font-medium text-body2">{caption}</figcaption>}
    </figure>
  );
}

/** Full case-study detail, one tap away. Keeps every researched fact without a wall of text. */
export function More({ label, children }: { label: string; children: ReactNode }) {
  return (
    <details className="pf-details mt-10 border-y-2 border-ink">
      <summary className="flex min-h-14 items-center justify-between gap-4 text-[17px] font-extrabold transition-colors hover:text-electric md:text-[18px]">
        {label}
        <svg className="pf-details-chevron shrink-0 transition-transform duration-200" width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="pb-10 pt-2">{children}</div>
    </details>
  );
}

export function Lesson({ children }: { children: ReactNode }) {
  return (
    <section aria-label="Main lesson" className="mx-auto mt-[88px] max-w-[1440px] px-2 md:mt-32 md:px-3 lg:mt-40 lg:px-4">
      <div className="rounded-[28px] bg-iris px-5 pb-12 pt-11 md:rounded-[32px] md:px-10 md:py-20 lg:rounded-[40px] lg:px-14 lg:pb-[104px] lg:pt-24">
        <p className="text-[15px] font-extrabold md:text-[17px]">Main lesson</p>
        <p className="mt-4 max-w-[17em] text-[36px] font-extrabold leading-none tracking-[-0.05em] md:mt-6 md:text-[56px] lg:text-[72px] lg:leading-[0.98]">
          {children}
        </p>
      </div>
    </section>
  );
}

export function NextCase({ to, name, color, line }: { to: string; name: string; color: string; line: string }) {
  return (
    <Wrap className="pt-16 md:pt-24">
      <Link
        to={to}
        className="group block border-t-2 border-ink pt-[18px] md:grid md:grid-cols-12 md:items-end md:gap-x-6 md:pt-7"
      >
        <span className="block text-[14px] font-extrabold text-graphite md:col-span-3 md:text-[16px]">Next case study</span>
        <span className="mt-2.5 flex items-center gap-3 text-[48px] font-extrabold leading-[0.95] tracking-[-0.055em] transition-colors group-hover:text-electric md:col-span-5 md:mt-0 md:gap-5 md:text-[64px] lg:text-[84px]">
          <span aria-hidden="true" className={`size-[18px] shrink-0 rounded-full md:size-7 ${color}`} />
          {name}
        </span>
        <span className="mt-2.5 block text-[16px] font-medium leading-[1.5] md:col-span-4 md:mt-0 md:text-[18px]">{line}</span>
      </Link>
    </Wrap>
  );
}
