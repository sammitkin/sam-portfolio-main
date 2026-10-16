import { useId, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Evidence, Wrap } from "../layout/Wrap";

type ClientId = "mike" | "james" | "jordan";

/* Data from the Frant prototype and test notes. Names and dates are the prototype's test data. */
const R2: { id: ClientId; n: number; name: string; first: string; meta: string; late: string; reason: string }[] = [
  { id: "mike", n: 1, name: "Mike Reyes", first: "Mike", meta: "Every 3 wks · last visit Aug 13", late: "4 wks late", reason: "Usually comes in every 3 weeks. Last visit Aug 13, so about 4 weeks later than usual." },
  { id: "james", n: 2, name: "James Turner", first: "James", meta: "Every 2 wks · last visit Aug 27", late: "3 wks late", reason: "Usually comes in every 2 weeks. Last visit Aug 27, so about 3 weeks later than usual." },
  { id: "jordan", n: 3, name: "Jordan Lee", first: "Jordan", meta: "Every 4 wks · last visit Aug 20", late: "2 wks late", reason: "Usually comes in every 4 weeks. Last visit Aug 20, so about 2 weeks later than usual." },
];

/** Annotation marker pinned to the product UI; the matching note sits beside the screen. */
function Mark({ k, className = "" }: { k: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute flex size-6 items-center justify-center rounded-full bg-ink font-sans text-[12px] font-extrabold text-white shadow-[0_0_0_3px_var(--color-frant)] ${className}`}
    >
      {k}
    </span>
  );
}

const SCREEN = "rounded-[32px] px-5 py-6 font-ui shadow-[0_48px_80px_-32px_rgba(110,24,10,0.55),0_0_0_1px_rgba(0,0,0,0.04)]";

function Screen({ open, setOpen }: { open: ClientId | null; setOpen: (id: ClientId | null) => void }) {
  const uid = useId();
  return (
    <div className={`bg-[#f8f5f0] ${SCREEN}`}>
      <p className="text-[28px] font-bold tracking-[-0.02em] text-[#0b0b0b]">Clients</p>
      <p className="mb-3.5 mt-2 flex items-center gap-1.5 text-[13px] text-[#5f5a56]">
        <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="6.5" fill="none" stroke="#9e2f1f" strokeWidth="1.4" />
          <path d="M8 7v4M8 5v.01" stroke="#9e2f1f" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        Sorted by weeks past each client's usual visit
      </p>
      <ul>
        {R2.map((c) => {
          const isOpen = open === c.id;
          const panel = `${uid}-${c.id}`;
          return (
            <li
              key={c.id}
              className={`mt-2 rounded-[18px] bg-white transition-shadow duration-200 ${isOpen ? "shadow-[0_0_0_2px_var(--color-frant)]" : "shadow-[0_0_0_1px_rgba(11,11,11,0.08)]"}`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? null : c.id)}
                className="flex min-h-[62px] w-full items-center gap-2.5 rounded-[18px] px-3.5 py-3 text-left"
              >
                <span
                  className={`flex size-[22px] shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${c.n === 1 ? "bg-frant text-[#0b0b0b]" : "bg-[#0b0b0b] text-white"}`}
                >
                  {c.n}
                </span>
                <span className="flex-1">
                  <b className="block text-[16px] text-[#0b0b0b]">{c.name}</b>
                  <span className="text-[13px] text-[#5f5a56]">{c.meta}</span>
                </span>
                <span className="relative whitespace-nowrap rounded-full bg-[#ffd7d0] px-[9px] py-1 text-[12.5px] font-semibold text-[#9e2f1f]">
                  {c.late}
                  {c.n === 1 && <Mark k="A" className="-right-[11px] -top-[11px]" />}
                </span>
              </button>
              <div id={panel} className="pf-expand" data-open={isOpen}>
                <div>
                  <div className="relative px-3.5 pb-3.5">
                    <p className="rounded-xl bg-[#ffe9e5] p-3 text-[14px] leading-[1.5] text-[#2a2522]">
                      <span className="mb-1 block text-[11.5px] font-semibold tracking-[0.04em] text-[#9e2f1f]">Why {c.first} is on your list</span>
                      {c.reason}
                    </p>
                    {isOpen && <Mark k="B" className="-top-2 right-1" />}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="relative mt-3.5 rounded-[14px] bg-[#ece6dc] px-3.5 py-3 text-[13px] leading-[1.45] text-[#3d3833]">
        <b className="text-[#0b0b0b]">Why this order?</b> Clients who are furthest past their own rhythm come first. It's a suggestion. You can reach out to anyone.
        <Mark k="C" className="-right-[11px] -top-[11px]" />
      </div>
    </div>
  );
}

function Note({ k, title, children }: { k: string; title: string; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3.5">
      <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-extrabold text-white">
        {k}
      </span>
      <span className="text-[16px] leading-[1.45] lg:text-[17px]">
        <b className="block font-extrabold">{title}</b>
        {children}
      </span>
    </li>
  );
}

function Notes() {
  return (
    <div>
      <ol className="flex flex-col gap-[18px] lg:gap-[22px]">
        <Note k="A" title="Late against their own rhythm.">Not a score. Weeks past each client’s usual visit.</Note>
        <Note k="B" title="The reason, in plain words.">One tap opens it.</Note>
        <Note k="C" title="A suggestion, not an order.">You can reach out to anyone.</Note>
      </ol>
      <div className="mt-7 border-t-2 border-ink pt-[18px]">
        <Evidence className="text-[13px]">Tested with the same 5 barbers</Evidence>
        <p className="mt-3 flex items-baseline gap-1.5 text-[44px] font-extrabold leading-[0.9] tracking-[-0.05em] tabular-nums lg:text-[56px]">
          4.0 → 4.8
          <span className="text-[17px] font-bold tracking-normal">/ 5</span>
        </p>
        <p className="mt-2.5 text-[16px] font-semibold leading-[1.45] lg:text-[17px]">
          Ease of choosing who to contact first, lo-fi to hi-fi. All 5 could explain why Mike was first.
        </p>
      </div>
    </div>
  );
}

export function FrantFeature() {
  const [open, setOpen] = useState<ClientId | null>("mike");

  return (
    <section id="frant" aria-labelledby="frant-title" className="bg-frant">
      <Wrap className="pb-14 pt-12 md:pb-24 md:pt-20 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:pb-28 lg:pt-[104px]">
        <p className="text-[15px] font-extrabold lg:col-span-8 lg:text-[17px]">
          Frant, featured case study <span className="font-semibold">· Designlab UX Academy, 2026</span>
        </p>
        <h2
          id="frant-title"
          className="mt-[18px] max-w-[14em] text-[44px] font-extrabold leading-[0.96] tracking-[-0.055em] md:text-[64px] lg:col-span-8 lg:col-start-1 lg:row-start-2 lg:mt-7 lg:text-[clamp(64px,5.85vw,84px)] lg:leading-[0.95]"
        >
          A rank without a reason feels arbitrary.
        </h2>
        <div className="mt-4 max-w-[36em] lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:mt-9">
          <p className="text-[16px] font-medium leading-[1.55] lg:text-[18px]">
            Frant helps independent barbers see which regulars are overdue and reach out in their own words.
            <span className="lg:hidden"> Solo UX/UI, 5 weeks, 6 interviews, 2 test rounds.</span>
          </p>
          <dl className="mt-5 hidden grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[15px] lg:grid">
            <dt className="font-medium">Role</dt>
            <dd className="font-extrabold">Solo UX/UI designer</dd>
            <dt className="font-medium">Time</dt>
            <dd className="font-extrabold">5 weeks, about 100 hours</dd>
            <dt className="font-medium">Research</dt>
            <dd className="font-extrabold">6 interviews, 2 test rounds</dd>
          </dl>
        </div>

        <div className="mt-6 md:mt-10 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-x-10 lg:col-span-12 lg:row-start-3 lg:mt-14 xl:col-span-10 xl:col-start-2 xl:mt-20 xl:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] xl:gap-x-16">
          <div className="xl:px-5">
            <p className="mb-3.5 inline-flex min-h-[34px] items-center gap-2 rounded-full bg-ink px-3.5 text-[14px] font-bold text-white">
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Try it: tap a client to see the reason
            </p>
            <Screen open={open} setOpen={setOpen} />
          </div>
          <div className="mt-8 md:mt-12 xl:mt-4">
            <Notes />
            <Link to="/frant" className="pf-btn pf-btn-primary mt-7 w-full md:w-auto lg:mt-8">
              Read the Frant case study
            </Link>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
