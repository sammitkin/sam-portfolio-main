/* Case-study building blocks for Brand System v2 (Playful Precision). */
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Img } from "../../data/caseImages";
import { Evidence, Wrap } from "../layout/Wrap";
import { Zoomable, type LightboxItem } from "./Lightbox";
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
      <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0" tabIndex={0} role="region" aria-label={`Table: ${head.filter((h) => typeof h === "string" && h).join(", ")}`}>
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

export function Points({ items, columns = 3 }: { items: { title: ReactNode; body?: ReactNode; label?: ReactNode }[]; columns?: 2 | 3 }) {
  return (
    <ul className={`mt-8 grid gap-0 md:gap-6 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map((it, i) => (
        <li key={i} className="border-t-2 border-ink pb-4 pt-3 md:pb-0 md:pt-3.5">
          {it.label && <p className="mb-1.5 text-[14px] font-extrabold text-graphite">{it.label}</p>}
          <b className="text-[18px] font-extrabold tracking-[-0.02em] md:text-[20px]">{it.title}</b>
          {it.body && <div className="mt-1 text-[16px] font-medium leading-[1.5] md:text-[17px] [&>p+p]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">{it.body}</div>}
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

export function Shot({
  img,
  group,
  index,
  className = "",
  radius = "rounded-[26px] md:rounded-[30px]",
}: {
  img: Img;
  group?: LightboxItem[];
  index?: number;
  className?: string;
  radius?: string;
}) {
  return (
    <Zoomable
      img={img}
      group={group}
      index={index}
      className={`overflow-hidden shadow-[0_0_0_1px_var(--color-hair)] ${radius} ${className}`}
      imgClassName="block h-auto w-full"
    />
  );
}

/** Phone screens with captions. Scrolls sideways on phones, grid from tablet up. */
export function PhoneRow({ items, caption }: { items: { img: Img; tag?: string; label: ReactNode }[]; caption?: ReactNode }) {
  const group: LightboxItem[] = items.map((it) => ({
    img: it.img,
    caption: [it.tag, typeof it.label === "string" ? it.label : it.img.alt].filter(Boolean).join(". "),
  }));
  const rows = items.map((it, i) => (
    <li key={i} className={items.length === 2 ? "min-w-0" : "w-[236px] shrink-0 md:w-auto"}>
      <Shot img={it.img} group={group} index={i} />
      <p className="mt-3 text-[15px] font-medium leading-[1.45] md:mt-3.5 md:text-[16px]">
        {it.tag && <b className="font-extrabold">{it.tag}. </b>}
        {it.label}
      </p>
    </li>
  ));
  return (
    <figure className="mt-8">
      {/* Pairs are comparisons (before/after), so they stay side by side even on phones. Trios scroll. */}
      {items.length === 2 ? (
        <>
          <ul className="grid grid-cols-2 gap-3 md:gap-6 lg:max-w-[66%]">{rows}</ul>
          <p className="mt-3 text-[14px] font-semibold text-graphite md:hidden">Tap a screen to enlarge, then swipe to compare.</p>
        </>
      ) : (
        <div
          tabIndex={0}
          role="region"
          aria-label={`Screens: ${items.map((it) => it.tag ?? "").filter(Boolean).join(", ")}`}
          className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:overflow-visible md:px-0"
        >
          <ul className="flex gap-4 md:grid md:grid-cols-3 md:gap-4">{rows}</ul>
        </div>
      )}
      {caption && <figcaption className="mt-4 max-w-[40em] text-[15px] font-medium leading-[1.5] text-body2">{caption}</figcaption>}
    </figure>
  );
}

export function WideImage({ img, caption, minWidth }: { img: Img; caption?: ReactNode; minWidth?: number }) {
  return (
    <figure className="mt-8">
      <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0" tabIndex={minWidth ? 0 : undefined} role={minWidth ? "region" : undefined} aria-label={minWidth ? "Wide image, scrolls sideways" : undefined}>
        <div style={minWidth ? { minWidth } : undefined}>
          <Zoomable
            img={img}
            group={[{ img, caption: typeof caption === "string" ? caption : img.alt }]}
            className="bg-white shadow-[0_0_0_1px_var(--color-hair)]"
            imgClassName="block h-auto w-full"
          />
        </div>
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
        className="group block border-t-2 border-ink pt-[18px] md:pt-7 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6"
      >
        <span className="block text-[14px] font-extrabold text-graphite md:text-[16px] lg:col-span-3">Next case study</span>
        <span className="mt-2.5 flex items-center gap-3 whitespace-nowrap text-[48px] font-extrabold leading-[0.95] tracking-[-0.055em] transition-colors group-hover:text-electric md:mt-3 md:gap-5 md:text-[64px] lg:col-span-5 lg:mt-0 lg:text-[clamp(56px,5.85vw,84px)]">
          <span aria-hidden="true" className={`size-[18px] shrink-0 rounded-full md:size-7 ${color}`} />
          {name}
        </span>
        <span className="mt-2.5 block max-w-[34em] text-[16px] font-medium leading-[1.5] md:mt-4 md:text-[18px] lg:col-span-4 lg:mt-0">{line}</span>
      </Link>
    </Wrap>
  );
}

/* ---------------------------------------------------------------- page-level pieces */

export function CaseIntro({
  name,
  dot,
  kicker,
  title,
  meta,
  note,
}: {
  name: string;
  dot: string;
  kicker: string;
  title: ReactNode;
  meta: [string, string][];
  note?: ReactNode;
}) {
  return (
    <Wrap as="header" className="pt-6 md:pt-10 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:pt-12">
      <p className="text-[14px] font-bold lg:col-span-12 lg:text-[15px]">
        <Link to="/#work" className="pf-link text-graphite hover:text-ink">
          Work
        </Link>{" "}
        <span aria-hidden="true" className="text-graphite">
          /
        </span>{" "}
        {name}
      </p>
      <div className="mt-7 lg:col-span-8 lg:mt-12">
        <p className="flex items-center gap-2.5 text-[15px] font-extrabold md:gap-3 md:text-[17px]">
          <span aria-hidden="true" className={`size-3 shrink-0 rounded-full md:size-4 ${dot}`} />
          {kicker}
        </p>
        <h1 className="mt-4 text-[44px] font-extrabold leading-[0.96] tracking-[-0.055em] md:mt-6 md:text-[64px] lg:text-[clamp(64px,5.85vw,84px)] lg:leading-[0.95]">
          {title}
        </h1>
        {note && <p className="mt-5 max-w-[40em] text-[14px] font-medium leading-[1.5] text-graphite md:text-[15px]">{note}</p>}
      </div>
      <dl className="mt-7 border-t-2 border-ink md:grid md:grid-cols-2 md:gap-x-6 lg:col-span-4 lg:mt-0 lg:block">
        {meta.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 border-b border-hair py-[11px] lg:gap-4 lg:py-[13px]">
            <dt className="text-[14px] font-medium text-graphite lg:text-[15px]">{k}</dt>
            <dd className="text-right text-[14px] font-extrabold lg:text-[15px]">{v}</dd>
          </div>
        ))}
      </dl>
    </Wrap>
  );
}

/** Straight-edged, full-bleed product band with three screens, cropped at the bottom. */
export function ProductBand({ label, bg, screens }: { label: string; bg: string; screens: [Img, Img, Img] }) {
  return (
    <section aria-label={label} className={`mt-10 md:mt-14 lg:mt-16 ${bg}`}>
      <ul className="mx-auto grid h-[380px] max-w-[1440px] grid-cols-3 items-start gap-3 overflow-hidden px-5 pt-8 md:h-[520px] md:gap-6 md:px-10 md:pt-12 lg:h-[600px] lg:gap-8 lg:px-[72px] lg:pt-16">
        {screens.map((s, i) => (
          <li key={s.src} className={`mx-auto w-full max-w-[340px] ${i === 1 ? "" : "mt-10 md:mt-20"}`}>
            <img
              src={s.src}
              alt={s.alt}
              width={s.width}
              height={s.height}
              fetchPriority={i === 1 ? "high" : undefined}
              decoding="async"
              className="block w-full rounded-t-[18px] shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.5)] md:rounded-t-[32px] lg:rounded-t-[40px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Glance({ items }: { items: { label: string; kind?: "tested" | "hypothesis"; body: ReactNode }[] }) {
  return (
    <Wrap as="section" aria-label="At a glance" className="grid gap-5 pt-12 md:grid-cols-2 md:gap-6 md:pt-16 lg:grid-cols-4 lg:pt-20">
      {items.map((g) => (
        <div key={g.label} className="border-t-2 border-ink pt-4">
          {g.kind ? (
            <Evidence kind={g.kind} className="text-[15px]">
              {g.label}
            </Evidence>
          ) : (
            <p className="text-[15px] font-extrabold">{g.label}</p>
          )}
          <p className="mt-2.5 text-[16px] font-medium leading-[1.5] lg:text-[17px]">{g.body}</p>
        </div>
      ))}
    </Wrap>
  );
}

/** A labelled aside: what kind of claim this is (method, open question), then the text. */
export function Note({ label, kind, children }: { label: string; kind?: "tested" | "hypothesis"; children: ReactNode }) {
  return (
    <div className="mt-8 max-w-[44em] rounded-[22px] bg-white p-5 shadow-[0_0_0_1px_var(--color-hair)] md:p-6">
      {kind ? (
        <Evidence kind={kind} className="text-[14px]">
          {label}
        </Evidence>
      ) : (
        <p className="text-[14px] font-extrabold">{label}</p>
      )}
      <p className="mt-2 text-[16px] font-medium leading-[1.55]">{children}</p>
    </div>
  );
}

export function Chips({ items, label }: { items: string[]; label: string }) {
  return (
    <ul aria-label={label} className="mt-6 flex max-w-[44em] flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="inline-flex min-h-10 items-center rounded-full bg-white px-4 text-[15px] font-bold shadow-[inset_0_0_0_2px_var(--color-ink)]">
          {t}
        </li>
      ))}
    </ul>
  );
}

/** The case body: sticky index on desktop, sections on the right. */
export function CaseBody({ sections, active, children }: { sections: SectionDef[]; active: number; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-12 lg:gap-x-6 lg:px-[72px]">
      <DesktopIndex sections={sections} active={active} />
      <div className="min-w-0 lg:col-span-9 lg:col-start-4">{children}</div>
    </div>
  );
}

/** A tinted product panel for the key decision: before and after, side by side, with the tested result. */
export function DecisionPanel({ tint, children }: { tint: string; children: ReactNode }) {
  return <div className={`mt-7 px-5 py-9 md:mt-10 md:px-10 md:py-12 lg:p-14 ${tint}`}>{children}</div>;
}
