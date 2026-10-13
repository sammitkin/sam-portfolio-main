import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { Link } from "react-router-dom";
import { Container } from "../layout/Container";
import { Reveal } from "../ui/Reveal";
import { ProjectCover, phoneRadius } from "./Covers";
import type { Project } from "../../data/projects";

/* ------------------------------------------------------------------ */
/* Shared types                                                        */
/* ------------------------------------------------------------------ */

export type Img = { src: string; alt: string; width: number; height: number };
export type SectionRef = { id: string; label: string };

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function CaseHero({
  project,
  intro,
  meta,
  note,
}: {
  project: Project;
  intro: ReactNode;
  meta: { label: string; value: ReactNode }[];
  note?: ReactNode;
}) {
  return (
    <header className="bg-[#f5f4ef] pt-10 pb-16 sm:pt-14 sm:pb-20">
      <Container>
        <Link to="/#work" className="inline-flex items-center gap-2 text-[14px] text-[#5c6370] transition-colors hover:text-[#1f1f1f]">
          <span aria-hidden>←</span> All work
        </Link>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 sm:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[15px] text-[#5c6370]">{project.type}</p>
            <h1 className="mt-3 text-[clamp(52px,9vw,112px)] font-bold leading-[0.95] tracking-[-0.035em] text-[#1f1f1f]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-[760px] text-[clamp(22px,2.6vw,30px)] font-medium leading-[1.3] tracking-[-0.01em] text-[#1f1f1f]">
              {project.tagline}
            </p>
            <div className="mt-5 max-w-[640px] text-[17px] leading-[28px] text-[#3b4b59]">{intro}</div>
            {note && <p className="mt-4 max-w-[640px] text-[13px] leading-[20px] text-[#5c6370]">{note}</p>}
          </div>
          <dl className="self-end border-t border-[#1f1f1f]/10 lg:col-span-4">
            {meta.map((m) => (
              <div key={m.label} className="grid grid-cols-[92px_1fr] gap-4 border-b border-[#1f1f1f]/10 py-3">
                <dt className="font-mono text-[12px] leading-[20px] text-[#5c6370]">{m.label}</dt>
                <dd className="text-[14px] leading-[20px] text-[#1f1f1f]">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 sm:mt-16">
          <ProjectCover slug={project.slug} eager />
        </div>
      </Container>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* At a glance                                                         */
/* ------------------------------------------------------------------ */

export function AtAGlance({ items }: { items: { label: string; body: ReactNode }[] }) {
  return (
    <section aria-label="At a glance" className="bg-white py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {items.map((item) => (
            <div key={item.label}>
              <p className="text-[14px] font-semibold text-[#a9501c]">{item.label}</p>
              <div className="mt-2 text-[16px] leading-[26px] text-[#1f1f1f]">{item.body}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Body with sticky index and reading progress                        */
/* ------------------------------------------------------------------ */

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function ReadingProgress({ target }: { target: RefObject<HTMLElement | null> }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = target.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0);
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
  }, [target]);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden>
      <div className="h-full origin-left bg-[#cc6324]" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

export function CaseBody({ sections, children }: { sections: SectionRef[]; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const ids = useRef(sections.map((s) => s.id)).current;
  const active = useActiveSection(ids);
  return (
    <div ref={ref} className="bg-[#f5f4ef]">
      <ReadingProgress target={ref} />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-12">
          <nav aria-label="Case study sections" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-28 mt-24 flex flex-col gap-1">
              {sections.map((s, i) => {
                const on = s.id === active;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={on ? "true" : undefined}
                      className={`flex items-baseline gap-3 rounded-md py-1.5 text-[14px] transition-colors ${
                        on ? "text-[#1f1f1f]" : "text-[#5c6370] hover:text-[#1f1f1f]"
                      }`}
                    >
                      <span className={`font-mono text-[12px] ${on ? "text-[#a9501c]" : ""}`}>{String(i + 1).padStart(2, "0")}</span>
                      <span className={on ? "font-medium" : ""}>{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
          <div className="min-w-0 lg:col-span-9">{children}</div>
        </div>
      </Container>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function CaseSection({
  id,
  number,
  label,
  title,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-t border-[#1f1f1f]/[0.08] py-20 first:border-t-0 sm:py-24">
      <p className="text-[14px] text-[#5c6370]">
        <span className="mr-2 font-mono text-[13px] text-[#a9501c]">{number}</span>
        {label}
      </p>
      <h2
        id={`${id}-title`}
        className="mt-3 max-w-[760px] text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.12] tracking-[-0.025em] text-[#1f1f1f]"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`mt-5 max-w-[640px] text-[17px] leading-[28px] text-[#3b4b59] [&_strong]:font-semibold [&_strong]:text-[#1f1f1f] [&>p+p]:mt-4 ${className}`}
    >
      {children}
    </div>
  );
}

/** Extra detail, closed by default. */
export function More({ children, label = "Read more" }: { children: ReactNode; label?: string }) {
  return (
    <details className="group mt-5 max-w-[640px]">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded text-[15px] font-medium text-[#3b4b59] [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden
          className="flex size-5 items-center justify-center rounded-full border border-[#3b4b59]/40 font-mono text-[13px] leading-none transition-transform group-open:rotate-45"
        >
          +
        </span>
        <span className="border-b border-[#3b4b59]/30 pb-[1px] group-open:hidden">{label}</span>
        <span className="hidden border-b border-[#3b4b59]/30 pb-[1px] group-open:inline">Show less</span>
      </summary>
      <div className="mt-4 text-[16px] leading-[27px] text-[#3b4b59] [&_strong]:font-semibold [&_strong]:text-[#1f1f1f] [&>*+*]:mt-4">{children}</div>
    </details>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="mt-14 max-w-[640px] text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#1f1f1f]">{children}</h3>;
}

export function Quote({ children, by }: { children: ReactNode; by: string }) {
  return (
    <figure className="mt-10 max-w-[720px] border-l-2 border-[#cc6324] pl-6 sm:pl-8">
      <blockquote className="text-[clamp(21px,2.2vw,26px)] font-medium leading-[1.4] tracking-[-0.01em] text-[#1f1f1f]">“{children}”</blockquote>
      <figcaption className="mt-3 text-[14px] text-[#5c6370]">{by}</figcaption>
    </figure>
  );
}

/** A short list of points, e.g. problems or findings. Not numbered: these are not steps. */
export function Points({ items, columns = 3 }: { items: { title: string; body?: ReactNode }[]; columns?: 2 | 3 }) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`mt-10 grid grid-cols-1 gap-x-10 gap-y-8 ${cols}`}>
      {items.map((item) => (
        <li key={item.title} className="border-t-2 border-[#1f1f1f] pt-4">
          <p className="text-[17px] font-semibold leading-[1.35] text-[#1f1f1f]">{item.title}</p>
          {item.body && <div className="mt-2 text-[15px] leading-[24px] text-[#3b4b59]">{item.body}</div>}
        </li>
      ))}
    </ul>
  );
}

export function Stats({ items }: { items: { value: string; label: ReactNode }[] }) {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-[#1f1f1f]/10 py-8 sm:grid-cols-4">
      {items.map((s) => (
        <div key={s.value + String(s.label)} className="flex flex-col-reverse">
          <dt className="mt-3 text-[14px] leading-[20px] text-[#5c6370]">{s.label}</dt>
          <dd className="font-mono text-[clamp(30px,3.4vw,40px)] font-medium leading-none tracking-[-0.02em] text-[#1f1f1f]">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------------ */
/* Images with tap-to-zoom                                             */
/* ------------------------------------------------------------------ */

function Zoomable({ img, children, className = "" }: { img: Img; children: ReactNode; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className={`group/zoom relative block w-full cursor-zoom-in text-left ${className}`}
        aria-label={`Enlarge: ${img.alt}`}
      >
        {children}
        <span
          aria-hidden
          className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-[#1f1f1f]/70 text-[16px] text-white opacity-0 transition-opacity group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100 max-sm:opacity-100"
        >
          +
        </span>
      </button>
      <dialog
        ref={dialog}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
        className="m-auto max-h-[94vh] max-w-[94vw] overflow-visible bg-transparent p-0 backdrop:bg-[#1f1f1f]/85"
      >
        <img src={img.src} alt={img.alt} className="block max-h-[90vh] max-w-[94vw] rounded-xl object-contain" />
        <form method="dialog" className="absolute -top-12 right-0">
          <button className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#1f1f1f]">Close</button>
        </form>
      </dialog>
    </>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return <figcaption className="mt-4 max-w-[640px] text-[14px] leading-[22px] text-[#5c6370]">{children}</figcaption>;
}

export function PhoneShot({ img }: { img: Img }) {
  return (
    <Zoomable img={img}>
      <div className="overflow-hidden bg-white shadow-[0_20px_40px_-24px_rgba(31,31,31,0.35),0_0_0_1px_rgba(31,31,31,0.08)]" style={phoneRadius}>
        <img src={img.src} alt="" width={img.width} height={img.height} loading="lazy" decoding="async" className="block h-auto w-full" />
      </div>
    </Zoomable>
  );
}

const panel = "rounded-[20px] px-5 py-8 sm:px-10 sm:py-12";

export function PhoneRow({
  items,
  caption,
  tint = "bg-[#e9e6df]",
}: {
  items: { img: Img; label: ReactNode; tag?: string }[];
  caption?: ReactNode;
  tint?: string;
}) {
  const cols = items.length === 2 ? "grid-cols-2 max-w-[620px]" : items.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3";
  return (
    <Reveal as="figure" className="mt-10">
      <div className={`${panel} ${tint}`}>
        <div className={`mx-auto grid ${cols} gap-x-5 gap-y-10 sm:gap-x-8`}>
          {items.map((item) => (
            <div key={item.img.src}>
              <PhoneShot img={item.img} />
              <div className="mt-4">
                {item.tag && <p className="text-[13px] font-semibold text-[#1f1f1f]">{item.tag}</p>}
                <p className="mt-1 text-[13px] leading-[19px] text-[#3b4b59]">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {caption && <Caption>{caption}</Caption>}
    </Reveal>
  );
}

export function BeforeAfter({
  before,
  after,
  caption,
  tint = "bg-[#e9e6df]",
  labels = ["Before", "After"],
}: {
  before: { img: Img; label: ReactNode };
  after: { img: Img; label: ReactNode };
  caption?: ReactNode;
  tint?: string;
  labels?: [string, string];
}) {
  return (
    <Reveal as="figure" className="mt-10">
      <div className={`${panel} ${tint}`}>
        <div className="mx-auto grid max-w-[620px] grid-cols-2 gap-5 sm:gap-10">
          {[
            { ...before, tag: labels[0], on: false },
            { ...after, tag: labels[1], on: true },
          ].map((side) => (
            <div key={side.tag}>
              <p className={`mb-3 text-[13px] font-semibold ${side.on ? "text-[#a9501c]" : "text-[#5c6370]"}`}>{side.tag}</p>
              <PhoneShot img={side.img} />
              <p className="mt-4 text-[13px] leading-[19px] text-[#3b4b59]">{side.label}</p>
            </div>
          ))}
        </div>
      </div>
      {caption && <Caption>{caption}</Caption>}
    </Reveal>
  );
}

export function WideImage({ img, caption }: { img: Img; caption?: ReactNode }) {
  return (
    <Reveal as="figure" className="mt-10">
      <Zoomable img={img} className="overflow-hidden rounded-[20px] border border-[#1f1f1f]/[0.08] bg-white">
        <img src={img.src} alt="" width={img.width} height={img.height} loading="lazy" decoding="async" className="block h-auto w-full" />
      </Zoomable>
      {caption && <Caption>{caption}</Caption>}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Text diagrams                                                       */
/* ------------------------------------------------------------------ */

export function Flow({ steps, caption }: { steps: string[]; caption?: ReactNode }) {
  return (
    <figure className="mt-10">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#1f1f1f] shadow-[0_0_0_1px_rgba(31,31,31,0.12)]">
              {step}
            </span>
            {i < steps.length - 1 && (
              <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden className="text-[#5c6370]">
                <path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            )}
          </li>
        ))}
      </ol>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

export function CompareTable({
  head,
  rows,
  caption,
  highlightLast,
}: {
  head: string[];
  rows: ReactNode[][];
  caption?: ReactNode;
  highlightLast?: boolean;
}) {
  return (
    <figure className="mt-10">
      <div className="overflow-x-auto rounded-[20px] border border-[#1f1f1f]/[0.08] bg-white">
        <table className="w-full min-w-[600px] border-collapse text-left">
          <thead>
            <tr>
              {head.map((h) => (
                <th key={h} scope="col" className="border-b border-[#1f1f1f]/10 px-5 py-4 text-[13px] font-semibold text-[#5c6370]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => {
              const hl = highlightLast && r === rows.length - 1;
              return (
                <tr key={r} className={hl ? "bg-[#f5f4ef]" : ""}>
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row" className="border-b border-[#1f1f1f]/[0.06] px-5 py-4 align-top text-[15px] font-semibold text-[#1f1f1f]">
                        {cell}
                      </th>
                    ) : (
                      <td key={c} className="border-b border-[#1f1f1f]/[0.06] px-5 py-4 align-top text-[15px] leading-[22px] text-[#3b4b59]">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

export const Yes = () => <span className="text-[14px] font-semibold text-[#1f6b45]">Yes</span>;
export const No = () => <span className="text-[14px] text-[#5c6370]">No</span>;

export function CardGrid({
  items,
  columns = 2,
}: {
  items: { kicker?: string; title: ReactNode; body: ReactNode; foot?: ReactNode }[];
  columns?: 2 | 3;
}) {
  const cols = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`mt-10 grid grid-cols-1 gap-4 ${cols}`}>
      {items.map((item, i) => (
        <div key={i} className="flex flex-col rounded-[20px] bg-white p-6 sm:p-7">
          {item.kicker && <p className="text-[13px] font-semibold text-[#a9501c]">{item.kicker}</p>}
          <p className="mt-1 text-[19px] font-semibold leading-[1.3] text-[#1f1f1f]">{item.title}</p>
          <div className="mt-3 flex-1 text-[15px] leading-[24px] text-[#3b4b59] [&>p+p]:mt-3">{item.body}</div>
          {item.foot && <div className="mt-5 border-t border-[#1f1f1f]/[0.08] pt-4 text-[15px] leading-[23px] text-[#1f1f1f]">{item.foot}</div>}
        </div>
      ))}
    </div>
  );
}

export function TwoUp({
  left,
  right,
  caption,
}: {
  left: { label: string; body: ReactNode; muted?: boolean };
  right: { label: string; body: ReactNode; muted?: boolean };
  caption?: ReactNode;
}) {
  return (
    <figure className="mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[left, right].map((side) => (
          <div key={side.label} className={`rounded-[20px] p-6 sm:p-7 ${side.muted ? "bg-[#ebe9e3]" : "bg-white"}`}>
            <p className={`text-[13px] font-semibold ${side.muted ? "text-[#5c6370]" : "text-[#a9501c]"}`}>{side.label}</p>
            <div className="mt-3 text-[16px] leading-[26px] text-[#1f1f1f] [&_li+li]:mt-2 [&_li]:pl-4 [&_li]:-indent-4 [&_li]:before:text-[#5c6370] [&_li]:before:content-['–_']">
              {side.body}
            </div>
          </div>
        ))}
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

export function Note({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className="mt-8 max-w-[640px] rounded-xl bg-[#ebe9e3] px-5 py-4 text-[15px] leading-[24px] text-[#3b4b59]">
      <strong className="mr-1 font-semibold text-[#1f1f1f]">{label}.</strong>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Closing                                                             */
/* ------------------------------------------------------------------ */

export function Lesson({ children }: { children: ReactNode }) {
  return (
    <section className="on-dark bg-[#3b4b59] py-20 sm:py-28">
      <Container>
        <p className="text-[15px] font-medium text-[#f7b286]">Main lesson</p>
        <p className="mt-5 max-w-[900px] text-[clamp(28px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.025em] text-white">{children}</p>
      </Container>
    </section>
  );
}

export function NextProject({ project }: { project: Project }) {
  return (
    <section className="bg-[#f5f4ef] py-20 sm:py-28">
      <Container>
        <Link to={project.path} className="group block">
          <p className="text-[15px] text-[#5c6370]">Next case study</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[clamp(40px,6vw,72px)] font-bold leading-none tracking-[-0.03em] text-[#1f1f1f]">{project.title}</p>
              <p className="mt-4 max-w-[560px] text-[18px] leading-[28px] text-[#3b4b59]">{project.tagline}</p>
            </div>
            <span className="border-b border-[#3b4b59]/30 pb-[2px] text-[15px] font-medium text-[#3b4b59] transition-colors group-hover:border-[#3b4b59]">
              Read the case study
            </span>
          </div>
          <div className="mt-10">
            <ProjectCover slug={project.slug} />
          </div>
        </Link>
      </Container>
    </section>
  );
}
