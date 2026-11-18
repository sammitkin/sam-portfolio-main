/** A thin ink rule with an index number: separates projects and About without boxes or new colors. */
export function SectionRule({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`col-span-full mb-5 border-t-2 border-ink pt-3 text-[14px] font-extrabold tabular-nums md:mb-7 md:text-[15px] ${className}`}
    >
      {label}
    </div>
  );
}
