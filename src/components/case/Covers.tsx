import type { ReactNode } from "react";
import { img } from "../../data/caseImages";
import type { Img } from "./Case";

/*
 * Each project gets its own cover, built from its own product: the panel color comes from
 * the app's palette, and the composition shows how that product works.
 * Frant: the overdue list and the retention loop. Deals Hub: find → activate → track.
 * MoveEase: the dashboard and the calendar.
 */

export const phoneRadius = { borderRadius: "11% / 5%" };

function Screen({ image, className, eager, dark }: { image: Img; className: string; eager?: boolean; dark?: boolean }) {
  const shadow = dark
    ? "shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)]"
    : "shadow-[0_32px_64px_-28px_rgba(31,31,31,0.4),0_0_0_1px_rgba(31,31,31,0.06)]";
  return (
    <div
      className={`absolute overflow-hidden bg-white transition-transform duration-500 ease-out ${shadow} ${className}`}
      style={phoneRadius}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  );
}

function Panel({ children, className, ratio = "aspect-[4/5] sm:aspect-[16/9]" }: { children: ReactNode; className: string; ratio?: string }) {
  return <div className={`relative overflow-hidden rounded-[20px] ${ratio} ${className}`}>{children}</div>;
}

/* ------------------------------------------------------------------ */

const loop = [
  { label: "4 wks late", cls: "bg-[#ffd7d0] text-[#b83a2c]" },
  { label: "Contacted", cls: "bg-[#e4ded2] text-[#262626]" },
  { label: "Replied", cls: "bg-[#262626] text-white" },
  { label: "Rebooked", cls: "bg-[#0b0b0b] text-white" },
  { label: "On track", cls: "bg-white text-[#067647]" },
];

export function FrantCover({ eager }: { eager?: boolean }) {
  return (
    <Panel className="bg-[#efe3d9]">
      <Screen
        eager={eager}
        image={img("frant/overdue", "Frant overdue list, sorted by weeks past each client's usual visit")}
        className="left-[6%] top-[7%] w-[56%] sm:left-[8%] sm:top-[8%] sm:w-[27%] group-hover:-translate-y-2"
      />
      <Screen
        eager={eager}
        image={img("frant/profile", "Client profile explaining why Mike is on the list")}
        className="left-[54%] top-[22%] w-[52%] sm:left-[38%] sm:top-[18%] sm:w-[24%] group-hover:-translate-y-1"
      />
      <div className="absolute right-[7%] top-1/2 hidden -translate-y-1/2 sm:block" aria-hidden>
        <p className="mb-4 text-[13px] font-medium text-[#5b4a40]">What happens after Send</p>
        <ol className="relative flex flex-col gap-3 pl-5 before:absolute before:left-[5px] before:top-3 before:bottom-3 before:w-px before:bg-[#5b4a40]/30">
          {loop.map((step) => (
            <li key={step.label} className="relative">
              <span className="absolute -left-5 top-1/2 size-[11px] -translate-y-1/2 rounded-full border-2 border-[#efe3d9] bg-[#5b4a40]" />
              <span className={`inline-flex rounded-full px-3 py-1.5 text-[13px] font-semibold ${step.cls}`}>{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */

const dealsSteps = [
  { key: "deals/explore", alt: "Deals Hub Explore tab with cash back earned this year", label: "Find a deal" },
  { key: "deals/activate", alt: "Starbucks offer with the eligible card and an Activate offer button", label: "Activate it" },
  { key: "deals/offers", alt: "My Offers tracking each deal from activated to credited", label: "Track the cash back" },
];

export function DealsCover({ eager }: { eager?: boolean }) {
  const pos = [
    "left-[-8%] top-[18%] sm:left-[9%] sm:top-[12%]",
    "left-[30%] top-[10%] sm:left-[38%] sm:top-[20%]",
    "left-[68%] top-[2%] sm:left-[67%] sm:top-[28%]",
  ];
  return (
    <Panel className="bg-[#0d2a5c]">
      {dealsSteps.map((s, i) => (
        <div key={s.key}>
          <p
            className={`absolute hidden text-[13px] font-medium text-white/80 sm:block ${["sm:left-[9%] sm:top-[6%]", "sm:left-[38%] sm:top-[14%]", "sm:left-[67%] sm:top-[22%]"][i]}`}
            aria-hidden
          >
            <span className="mr-2 font-mono text-[#f7b286]">{i + 1}</span>
            {s.label}
          </p>
          <Screen
            dark
            eager={eager}
            image={img(s.key, s.alt)}
            className={`w-[40%] sm:w-[24%] ${pos[i]} group-hover:-translate-y-1.5`}
          />
        </div>
      ))}
    </Panel>
  );
}

/* ------------------------------------------------------------------ */

export function MoveCover({ eager, compact }: { eager?: boolean; compact?: boolean }) {
  return (
    <Panel className="bg-[#e3eaf2]" ratio={compact ? "aspect-[4/3]" : "aspect-[4/5] sm:aspect-[16/9]"}>
      <Screen
        eager={eager}
        image={img("moveease/dashboard", "MoveEase dashboard with the next task, progress and upcoming deadlines")}
        className={
          compact
            ? "left-[12%] top-[10%] w-[40%] group-hover:-translate-y-1.5"
            : "left-[6%] top-[8%] w-[54%] sm:left-[22%] sm:top-[9%] sm:w-[27%] group-hover:-translate-y-2"
        }
      />
      <Screen
        eager={eager}
        image={img("moveease/calendar", "MoveEase calendar with deadlines marked for April")}
        className={
          compact
            ? "left-[50%] top-[22%] w-[38%] group-hover:-translate-y-1"
            : "left-[52%] top-[20%] w-[50%] sm:left-[52%] sm:top-[19%] sm:w-[25%] group-hover:-translate-y-1"
        }
      />
    </Panel>
  );
}

export function ProjectCover({ slug, eager }: { slug: string; eager?: boolean }) {
  if (slug === "frant") return <FrantCover eager={eager} />;
  if (slug === "deals-hub") return <DealsCover eager={eager} />;
  return <MoveCover eager={eager} />;
}
