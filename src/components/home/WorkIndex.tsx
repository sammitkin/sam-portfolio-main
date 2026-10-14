import { Wrap } from "../layout/Wrap";
import { useSectionNav } from "../layout/navigation";

const ROWS = [
  {
    id: "frant",
    name: "Frant",
    color: "bg-frant",
    desc: "A retention app that helps independent barbers notice who’s overdue and reach out in their own words.",
    num: "42 of 45",
    label: "tasks without a hint, round two",
    short: "tasks without a hint",
  },
  {
    id: "deals",
    name: "Deals Hub",
    color: "bg-deals",
    desc: "A native place for bank cash back deals. Concept, not affiliated with Bank of America.",
    num: "5 of 5",
    label: "found the eligible card, round two",
    short: "found the card",
  },
  {
    id: "moveease",
    name: "MoveEase",
    color: "bg-move",
    desc: "Staying ahead of address updates, deadlines and paperwork after a move.",
    num: "2 fixes",
    label: "from testing with 5 people",
    short: "from testing",
  },
];

export function WorkIndex() {
  const goToSection = useSectionNav();
  return (
    <Wrap as="section" id="work" aria-labelledby="work-title" className="pb-[72px] pt-16 md:pb-24 md:pt-24 lg:pb-28 lg:pt-[104px]">
      <div className="flex items-baseline justify-between border-b-2 border-ink pb-3 md:pb-4">
        <h2 id="work-title" className="text-[17px] font-extrabold md:text-[18px]">
          Selected work
        </h2>
        <p className="text-[13px] font-semibold text-graphite md:text-[15px]">
          <span className="md:hidden">Designlab, 2026</span>
          <span className="hidden md:inline">Case studies from Designlab UX Academy, 2026</span>
        </p>
      </div>
      <ul>
        {ROWS.map((r) => (
          <li key={r.id} className="border-b border-hair">
            <a
              href={`/#${r.id}`}
              onClick={(e) => goToSection(r.id, e)}
              className="group flex items-center justify-between gap-3 py-[18px] no-underline md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,3fr)] md:gap-6 md:py-[22px]"
            >
              <span className="flex items-center gap-3 whitespace-nowrap text-[28px] font-extrabold tracking-[-0.04em] transition-colors group-hover:text-electric md:gap-4 md:text-[clamp(32px,2.8vw,40px)]">
                <span aria-hidden="true" className={`size-3.5 shrink-0 rounded-full md:size-[18px] ${r.color}`} />
                {r.name}
              </span>
              <span className="hidden text-[17px] font-medium leading-[1.45] text-body2 md:block">{r.desc}</span>
              <span className="text-right text-[13px] font-semibold leading-[1.35] text-body2 md:text-[15px] md:leading-[1.4]">
                <b className="block text-[17px] font-extrabold tracking-[-0.02em] text-ink md:text-[22px]">{r.num}</b>
                <span className="md:hidden">{r.short}</span>
                <span className="hidden md:inline">{r.label}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}
