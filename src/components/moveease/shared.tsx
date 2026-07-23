import type { ReactNode } from "react";
import { NumberCircle } from "../icons/Icons";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-[12px] font-medium uppercase leading-[16px] tracking-[2.4px] text-[#cc6324]">{children}</p>;
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 text-[32px] font-bold leading-[1.2] tracking-[-1.2px] text-[#1f1f1f] sm:text-[48px] sm:leading-[60px]">
      {children}
    </h2>
  );
}

export function MetaCard({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex-1 rounded-lg border border-[rgba(31,31,31,0.08)] bg-white p-[21px]">
      <p className="text-[11px] font-medium uppercase leading-[16.5px] tracking-[1.8px] text-[#cc6324]">{label}</p>
      <p className="mt-1.5 text-[14px] font-semibold leading-[20px] text-[#1f1f1f]">{value}</p>
    </div>
  );
}

export function InsightCard({ number, children }: { number: 1 | 2 | 3; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-[rgba(31,31,31,0.08)] bg-white p-[33px]">
      <NumberCircle number={number} />
      <p className="text-[16px] font-normal leading-[26px] text-[#3b4b59]">{children}</p>
    </div>
  );
}

export function QuoteCard({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[rgba(31,31,31,0.2)] bg-[#f5f4ef] p-[37px]">
      <p className="text-[20px] font-normal leading-[32px] text-[#1f1f1f]">"{quote}"</p>
      <p className="text-[13px] font-medium uppercase leading-[19.5px] tracking-[1.6px] text-[#cc6324]">{name}</p>
    </div>
  );
}

export function HighlightCard({ eyebrow, heading, body }: { eyebrow: string; heading: ReactNode; body: ReactNode }) {
  return (
    <div className="rounded-xl bg-[#3b4b59] p-[48px]">
      <p className="text-[11px] font-medium uppercase leading-[16.5px] tracking-[2px] text-[#cc6324]">{eyebrow}</p>
      <div className="mt-5 max-w-[432px] text-[18px] font-semibold leading-[28px] text-white">{heading}</div>
      <div className="mt-4 max-w-[432px] text-[15px] font-normal leading-[24px] text-white/65">{body}</div>
    </div>
  );
}

export function FindingCard({ number, children }: { number: 1 | 2 | 3; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 rounded-lg bg-[#f5f4ef] p-7">
      <NumberCircle number={number} />
      <p className="text-[14px] font-normal leading-[22.75px] text-[#6b7280]">{children}</p>
    </div>
  );
}

export function ChangeCard({
  before,
  after,
}: {
  before: ReactNode;
  after: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-lg border border-[rgba(31,31,31,0.2)] sm:h-[120px] sm:grid-cols-2">
      <div className="bg-white p-6">
        <p className="text-[11px] font-medium uppercase leading-[16.5px] tracking-[1.8px] text-[#cc6324]">Before</p>
        <div className="mt-2 text-[14px] font-normal leading-[22.75px] text-[#6b7280]">{before}</div>
      </div>
      <div className="bg-[#3b4b59] p-6">
        <p className="text-[11px] font-medium uppercase leading-[16.5px] tracking-[1.8px] text-[#cc6324]">After</p>
        <div className="mt-2 text-[14px] font-normal leading-[22.75px] text-white/75">{after}</div>
      </div>
    </div>
  );
}

export function ReflectionCard({ number, title, items }: { number: 1 | 2 | 3; title: string; items: string[] }) {
  return (
    <div className="rounded-xl bg-white/[0.07] p-[40px]">
      <NumberCircle number={number} />
      <h3 className="mt-4 text-[18px] font-semibold leading-[26px] text-white">{title}</h3>
      <ul className="mt-5 flex flex-col gap-[10px]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-[10px]">
            <span className="mt-[9px] size-1 shrink-0 rounded-full bg-[#cc6324]" />
            <span className="text-[14px] font-normal leading-[22.75px] text-white/65">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
