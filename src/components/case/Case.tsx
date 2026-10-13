import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { ProjectLinkArrowIcon } from "../icons/Icons";
import { PhoneTrio, phoneRadius } from "./PhoneTrio";
import type { Project } from "../../data/projects";

/* ------------------------------------------------------------------ */
/* Image type used across case pages                                   */
/* ------------------------------------------------------------------ */

export type Img = { src: string; alt: string; width: number; height: number };

const mono = "font-mono text-[12px] uppercase tracking-[0.08em]";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function CaseHero({
  project,
  index,
  intro,
  meta,
  note,
}: {
  project: Project;
  index: number;
  intro: ReactNode;
  meta: { label: string; value: ReactNode }[];
  note?: ReactNode;
}) {
  return (
    <header className="bg-[#f5f4ef] pt-10 pb-16 sm:pt-14 sm:pb-24">
      <Container>
        <Link
          to="/#work"
          className={`${mono} inline-flex items-center gap-2 text-[#5c6370] transition-colors hover:text-[#1f1f1f]`}
        >
          <span aria-hidden>←</span> All work
        </Link>

        <div className="mt-12 sm:mt-16">
          <Eyebrow>
            Case study {String(index + 1).padStart(2, "0")} · {project.type}
          </Eyebrow>
          <h1 className="mt-5 text-[clamp(52px,9vw,112px)] font-bold leading-[0.95] tracking-[-0.035em] text-[#1f1f1f]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-[820px] text-[clamp(22px,2.6vw,30px)] font-medium leading-[1.3] tracking-[-0.01em] text-[#1f1f1f]">
            {project.tagline}
          </p>
          <div className="mt-6 max-w-[680px] text-[17px] leading-[28px] text-[#3b4b59] [&>p+p]:mt-4">{intro}</div>
          {note && <p className="mt-4 max-w-[680px] text-[13px] leading-[20px] text-[#5c6370]">{note}</p>}
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[#1f1f1f]/10 pt-6 sm:grid-cols-3 lg:grid-cols-5">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className={`${mono} text-[#5c6370]`}>{m.label}</dt>
              <dd className="mt-2 text-[15px] leading-[22px] text-[#1f1f1f]">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14">
          <PhoneTrio screens={project.screens} eager />
        </div>
      </Container>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* At a glance: problem / approach / outcome                          */
/* ------------------------------------------------------------------ */

export function AtAGlance({ items }: { items: { label: string; body: ReactNode }[] }) {
  return (
    <section aria-label="At a glance" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <p className={`${mono} text-[#a9501c]`}>{item.label}</p>
              <div className="mt-3 text-[16px] leading-[26px] text-[#1f1f1f]">{item.body}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section: number + label on the left, content on the right           */
/* ------------------------------------------------------------------ */

export function CaseSection({
  id,
  number,
  label,
  title,
  children,
  tone = "light",
}: {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
  tone?: "light" | "white";
}) {
  const bg = tone === "white" ? "bg-white" : "bg-[#f5f4ef]";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${bg} border-t border-[#1f1f1f]/[0.08] py-20 sm:py-28`}>
      <Container>
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className={`${mono} text-[#a9501c]`}>
                {number} <span className="text-[#5c6370]">— {label}</span>
              </p>
            </div>
          </div>
          <div className="min-w-0 lg:col-span-9">
            <Reveal>
              <h2
                id={`${id}-title`}
                className="max-w-[760px] text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.12] tracking-[-0.025em] text-[#1f1f1f]"
              >
                {title}
              </h2>
            </Reveal>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Body copy. Use inside a CaseSection. */
export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal
      className={`mt-6 max-w-[660px] text-[17px] leading-[28px] text-[#3b4b59] [&_strong]:font-semibold [&_strong]:text-[#1f1f1f] [&>p+p]:mt-4 ${className}`}
    >
      {children}
    </Reveal>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <h3 className="mt-16 max-w-[660px] text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#1f1f1f]">
        {children}
      </h3>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Quote                                                               */
/* ------------------------------------------------------------------ */

export function Quote({ children, by }: { children: ReactNode; by: string }) {
  return (
    <Reveal as="figure" className="mt-10 max-w-[720px] border-l-2 border-[#cc6324] pl-6 sm:pl-8">
      <blockquote className="text-[clamp(21px,2.2vw,26px)] font-medium leading-[1.4] tracking-[-0.01em] text-[#1f1f1f]">
        “{children}”
      </blockquote>
      <figcaption className={`${mono} mt-4 text-[#5c6370]`}>{by}</figcaption>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Numbered list of findings / problems                                */
/* ------------------------------------------------------------------ */

export function Findings({ items, columns = 3 }: { items: { title: string; body?: ReactNode }[]; columns?: 2 | 3 }) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#1f1f1f]/10 bg-[#1f1f1f]/10 ${cols}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 60} className="bg-white p-6 sm:p-7">
          <p className="font-mono text-[13px] font-medium text-[#a9501c]">{String(i + 1).padStart(2, "0")}</p>
          <p className="mt-3 text-[17px] font-semibold leading-[1.35] text-[#1f1f1f]">{item.title}</p>
          {item.body && <div className="mt-2 text-[15px] leading-[24px] text-[#3b4b59]">{item.body}</div>}
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

export function Stats({ items }: { items: { value: string; label: ReactNode }[] }) {
  return (
    <Reveal as="dl" className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-[#1f1f1f]/10 py-8 sm:grid-cols-4">
      {items.map((s) => (
        <div key={s.value + String(s.label)} className="flex flex-col-reverse">
          <dt className="mt-3 text-[14px] leading-[20px] text-[#5c6370]">{s.label}</dt>
          <dd className="font-mono text-[clamp(30px,3.4vw,40px)] font-medium leading-none tracking-[-0.02em] text-[#1f1f1f]">
            {s.value}
          </dd>
        </div>
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Figures                                                             */
/* ------------------------------------------------------------------ */

function Caption({ children }: { children: ReactNode }) {
  return <figcaption className="mt-4 max-w-[660px] text-[14px] leading-[22px] text-[#5c6370]">{children}</figcaption>;
}

/** A single screen in a phone-shaped frame. */
export function PhoneShot({ img, className = "" }: { img: Img; className?: string }) {
  return (
    <div
      className={`overflow-hidden bg-white shadow-[0_20px_40px_-24px_rgba(31,31,31,0.35),0_0_0_1px_rgba(31,31,31,0.08)] ${className}`}
      style={phoneRadius}
    >
      <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" className="block h-auto w-full" />
    </div>
  );
}

/** Two to four phone screens in a row, each with a short label. */
export function PhoneRow({
  items,
  caption,
}: {
  items: { img: Img; label: ReactNode; tag?: string }[];
  caption?: ReactNode;
}) {
  const cols = items.length === 2 ? "grid-cols-2" : items.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3";
  const width = items.length === 2 ? "max-w-[620px]" : "";
  return (
    <Reveal as="figure" className="mt-10">
      <div className="rounded-2xl bg-[#e9e6df] px-5 py-8 sm:px-10 sm:py-12">
        <div className={`mx-auto grid ${cols} ${width} gap-x-5 gap-y-10 sm:gap-x-8`}>
          {items.map((item) => (
            <div key={item.img.src}>
              <PhoneShot img={item.img} />
              <div className="mt-4">
                {item.tag && <p className={`${mono} text-[11px] text-[#a9501c]`}>{item.tag}</p>}
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

/** Before and after, side by side. */
export function BeforeAfter({
  before,
  after,
  caption,
}: {
  before: { img: Img; label: ReactNode };
  after: { img: Img; label: ReactNode };
  caption?: ReactNode;
}) {
  return (
    <Reveal as="figure" className="mt-10">
      <div className="rounded-2xl bg-[#e9e6df] px-5 py-8 sm:px-10 sm:py-12">
        <div className="mx-auto grid max-w-[620px] grid-cols-2 gap-5 sm:gap-10">
          {[
            { ...before, tag: "Before" },
            { ...after, tag: "After" },
          ].map((side) => (
            <div key={side.tag}>
              <p className={`${mono} mb-3 text-[11px] ${side.tag === "After" ? "text-[#a9501c]" : "text-[#5c6370]"}`}>{side.tag}</p>
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

/** A wide image. When `scroll` is set, it keeps a readable height and scrolls sideways on small screens. */
export function WideImage({ img, caption, scroll, frame = true }: { img: Img; caption?: ReactNode; scroll?: number; frame?: boolean }) {
  const box = frame ? "rounded-2xl border border-[#1f1f1f]/[0.08] bg-white" : "";
  return (
    <Reveal as="figure" className="mt-10">
      {scroll ? (
        <div className={`${box} overflow-x-auto`} tabIndex={0} role="region" aria-label={`${img.alt} (scrollable)`}>
          <img
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
            decoding="async"
            style={{ height: scroll, width: "auto", maxWidth: "none" }}
            className="block"
          />
        </div>
      ) : (
        <div className={`${box} overflow-hidden`}>
          <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" className="block h-auto w-full" />
        </div>
      )}
      {(caption || scroll) && (
        <Caption>
          {caption}
          {scroll ? <span className={`${mono} ml-2 text-[11px]`}>Scroll →</span> : null}
        </Caption>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Text-based diagrams                                                 */
/* ------------------------------------------------------------------ */

/** A row of steps joined by arrows. Wraps on small screens. */
export function Flow({ steps, caption, loop }: { steps: string[]; caption?: ReactNode; loop?: boolean }) {
  return (
    <Reveal as="figure" className="mt-10">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 rounded-2xl border border-[#1f1f1f]/[0.08] bg-white p-5 sm:p-7">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-full border border-[#1f1f1f]/15 bg-[#f5f4ef] px-4 py-2 text-[14px] font-medium text-[#1f1f1f]">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden className="font-mono text-[14px] text-[#5c6370]">
                →
              </span>
            )}
          </li>
        ))}
        {loop && (
          <li className="flex items-center gap-2 font-mono text-[12px] text-[#5c6370]">
            <span aria-hidden>↺</span> repeats
          </li>
        )}
      </ol>
      {caption && <Caption>{caption}</Caption>}
    </Reveal>
  );
}

/** Simple comparison table. First column is the row label. */
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
    <Reveal as="figure" className="mt-10">
      <div className="overflow-x-auto rounded-2xl border border-[#1f1f1f]/[0.08] bg-white">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead>
            <tr>
              {head.map((h) => (
                <th key={h} scope="col" className={`${mono} border-b border-[#1f1f1f]/10 px-5 py-4 text-[11px] font-medium text-[#5c6370]`}>
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
                      <th
                        key={c}
                        scope="row"
                        className="border-b border-[#1f1f1f]/[0.06] px-5 py-4 align-top text-[15px] font-semibold text-[#1f1f1f]"
                      >
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
    </Reveal>
  );
}

/** Yes / no marks for tables. */
export const Yes = () => (
  <span className="font-mono text-[13px] font-medium text-[#1f6b45]">
    <span aria-hidden>●</span> Yes
  </span>
);
export const No = () => (
  <span className="font-mono text-[13px] text-[#5c6370]">
    <span aria-hidden>○</span> No
  </span>
);

/** Cards in a grid, e.g. personas, participants, decisions. */
export function CardGrid({
  items,
  columns = 2,
}: {
  items: { eyebrow?: string; title: ReactNode; body: ReactNode; foot?: ReactNode }[];
  columns?: 2 | 3 | 4;
}) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2" }[columns];
  return (
    <div className={`mt-10 grid grid-cols-1 gap-4 ${cols}`}>
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 60} className="flex flex-col rounded-2xl border border-[#1f1f1f]/[0.08] bg-white p-6 sm:p-7">
          {item.eyebrow && <p className={`${mono} text-[11px] text-[#a9501c]`}>{item.eyebrow}</p>}
          <p className="mt-2 text-[19px] font-semibold leading-[1.3] text-[#1f1f1f]">{item.title}</p>
          <div className="mt-3 flex-1 text-[15px] leading-[24px] text-[#3b4b59] [&>p+p]:mt-3">{item.body}</div>
          {item.foot && <div className="mt-5 border-t border-[#1f1f1f]/[0.08] pt-4 text-[14px] leading-[22px] text-[#1f1f1f]">{item.foot}</div>}
        </Reveal>
      ))}
    </div>
  );
}

/** Two text columns side by side, e.g. old vs new copy, in vs out of scope. */
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
    <Reveal as="figure" className="mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[left, right].map((side) => (
          <div
            key={side.label}
            className={`rounded-2xl border p-6 sm:p-7 ${side.muted ? "border-[#1f1f1f]/[0.08] bg-[#ebe9e3]" : "border-[#1f1f1f]/[0.08] bg-white"}`}
          >
            <p className={`${mono} text-[11px] ${side.muted ? "text-[#5c6370]" : "text-[#a9501c]"}`}>{side.label}</p>
            <div className="mt-3 text-[16px] leading-[26px] text-[#1f1f1f] [&_li+li]:mt-2 [&_li]:pl-4 [&_li]:-indent-4 [&_li]:before:content-['–_'] [&_li]:before:text-[#5c6370]">
              {side.body}
            </div>
          </div>
        ))}
      </div>
      {caption && <Caption>{caption}</Caption>}
    </Reveal>
  );
}

/** A plain-language note, e.g. a limitation or a disclaimer. */
export function Note({ label = "Note", children }: { label?: string; children: ReactNode }) {
  return (
    <Reveal className="mt-10 max-w-[660px] rounded-xl bg-[#ebe9e3] px-5 py-4 text-[15px] leading-[24px] text-[#3b4b59]">
      <span className={`${mono} mr-2 text-[11px] text-[#5c6370]`}>{label}</span>
      {children}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Closing: lesson + next project                                      */
/* ------------------------------------------------------------------ */

export function Lesson({ children }: { children: ReactNode }) {
  return (
    <section className="on-dark bg-[#3b4b59] py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow tone="dark">Main lesson</Eyebrow>
          <p className="mt-6 max-w-[900px] text-[clamp(28px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.025em] text-white">
            {children}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function NextProject({ project }: { project: Project }) {
  return (
    <section className="bg-[#f5f4ef] py-20 sm:py-28">
      <Container>
        <Link to={project.path} className="group block">
          <p className={`${mono} text-[#5c6370]`}>Next case study</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[clamp(40px,6vw,72px)] font-bold leading-none tracking-[-0.03em] text-[#1f1f1f]">{project.title}</p>
              <p className="mt-4 max-w-[560px] text-[18px] leading-[28px] text-[#3b4b59]">{project.tagline}</p>
            </div>
            <span className="flex items-center gap-2 text-[15px] font-medium text-[#3b4b59]">
              <span className="border-b border-[#3b4b59]/30 pb-[2px] transition-colors group-hover:border-[#3b4b59]">Read case study</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ProjectLinkArrowIcon />
              </span>
            </span>
          </div>
          <div className="mt-10">
            <PhoneTrio screens={project.screens} />
          </div>
        </Link>
      </Container>
    </section>
  );
}
