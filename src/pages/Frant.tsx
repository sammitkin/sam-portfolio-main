import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  DesktopIndex,
  Flow,
  Lesson,
  Metrics,
  MobileIndex,
  More,
  NextCase,
  No,
  Pad,
  PhoneRow,
  Points,
  Prose,
  Quote,
  Section,
  SubHeading,
  Table,
  WideImage,
  Yes,
  useActiveSection,
  type SectionDef,
} from "../components/case2/CaseKit";
import { Evidence, Wrap } from "../components/layout/Wrap";
import { img } from "../data/caseImages";
import { usePageMeta } from "../lib/usePageMeta";

const SECTIONS: SectionDef[] = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "decision", label: "Key decision" },
  { id: "testing", label: "Testing" },
  { id: "iteration", label: "Iteration" },
  { id: "next", label: "What’s next" },
];
const IDS = SECTIONS.map((s) => s.id);

const LOOP: [string, string][] = [
  ["Overdue", "bg-[#ffd7d0] text-[#9e2f1f]"],
  ["Contacted", "bg-[#e4ded2] text-[#262626]"],
  ["Replied", "bg-[#262626] text-white"],
  ["Rebooked", "bg-[#0b0b0b] text-white"],
  ["Visit logged", "bg-white text-ink"],
  ["✓ On track", "bg-white text-[#067647]"],
];

function Loop({ onPaper = false }: { onPaper?: boolean }) {
  return (
    <ol className="flex flex-wrap gap-2 lg:flex-col lg:items-start lg:gap-2.5">
      {LOOP.map(([label, cls]) => (
        <li key={label}>
          <span
            className={`inline-flex rounded-full px-3.5 py-[7px] font-ui text-[13px] font-semibold md:text-[15px] ${cls} ${onPaper && cls.includes("bg-white") ? "shadow-[inset_0_0_0_1px_var(--color-hair)]" : ""}`}
          >
            {label}
          </span>
        </li>
      ))}
    </ol>
  );
}

const META = [
  ["Role", "Solo UX/UI designer"],
  ["Timeline", "Sep 7 – Oct 11, 2026"],
  ["Context", "Designlab capstone, not a client project"],
  ["Status", "Prototype, not launched"],
];

const GLANCE: { label: string; kind?: "tested" | "hypothesis"; body: string }[] = [
  { label: "Problem", body: "Barbers keep each client’s rhythm in their head, so they notice a regular is gone weeks too late." },
  { label: "What I did", body: "6 interviews, a competitor review, lo-fi and hi-fi prototypes, two test rounds." },
  { label: "Result, tested", kind: "tested", body: "42 of 45 task attempts without a hint in round two. Average ease 4.6 out of 5." },
  { label: "Open risk, hypothesis", kind: "hypothesis", body: "After texting, the job felt done. New check-ins aim to fix that; they’re not tested yet." },
];

const DECISION = [
  { k: "A", title: "Sort label", body: "“Sorted by weeks past each client’s usual visit.” Added after round one, when nobody knew why Mike was first.", top: "18%", side: "left" },
  { k: "B", title: "Late badge", body: "Weeks past each client’s own rhythm, not a score.", top: "24.8%", side: "right" },
  { k: "C", title: "Rhythm bar", body: "Usual gap against time since the last visit.", top: "28.9%", side: "left" },
  { k: "D", title: "“Why this order?”", body: "Calls the ranking a suggestion. Liam didn’t want the app deciding for him.", top: "75.2%", side: "left" },
];

function Marker({ k, className = "", style }: { k: string; className?: string; style?: CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      style={style}
      className={`flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-extrabold text-white md:size-7 md:text-[13px] ${className}`}
    >
      {k}
    </span>
  );
}

export function Frant() {
  usePageMeta({
    title: "Frant Case Study — Sam Mitkin",
    description:
      "Frant: an iOS app that helps independent barbers keep their regulars. Six interviews, two rounds of usability testing, a 22-screen prototype and UI kit.",
    path: "/frant",
  });
  const active = useActiveSection(IDS);

  return (
    <>
      <MobileIndex sections={SECTIONS} active={active} />

      {/* Intro */}
      <Wrap as="header" className="pt-6 md:pt-10 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:pt-12">
        <p className="text-[14px] font-bold lg:col-span-12 lg:text-[15px]">
          <Link to="/#work" className="pf-link text-graphite hover:text-ink">
            Work
          </Link>{" "}
          <span aria-hidden="true" className="text-graphite">
            /
          </span>{" "}
          Frant
        </p>
        <div className="mt-7 lg:col-span-8 lg:mt-12">
          <p className="flex items-center gap-2.5 text-[15px] font-extrabold md:gap-3 md:text-[17px]">
            <span aria-hidden="true" className="size-3 rounded-full bg-frant md:size-4" />
            Frant, an iOS app designed end to end
          </p>
          <h1 className="mt-4 text-[44px] font-extrabold leading-[0.96] tracking-[-0.055em] md:mt-6 md:text-[64px] lg:text-[clamp(64px,5.85vw,84px)] lg:leading-[0.95]">
            Helping barbers keep their regulars, and what happens after Send.
          </h1>
        </div>
        <dl className="mt-7 border-t-2 border-ink md:grid md:grid-cols-2 md:gap-x-6 lg:col-span-4 lg:mt-0 lg:block">
          {META.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3 border-b border-hair py-[11px] lg:gap-4 lg:py-[13px]">
              <dt className="text-[14px] font-medium text-graphite lg:text-[15px]">{k}</dt>
              <dd className="text-right text-[14px] font-extrabold lg:text-[15px]">{v}</dd>
            </div>
          ))}
        </dl>
      </Wrap>

      {/* Product showcase: straight-edged Frant band */}
      <section aria-label="Frant screens" className="mt-10 bg-frant md:mt-14 lg:mt-16">
        <div className="mx-auto grid h-[400px] max-w-[1440px] grid-cols-2 items-start gap-3.5 overflow-hidden px-5 pt-8 md:h-[560px] md:grid-cols-3 md:gap-6 md:px-10 md:pt-12 lg:h-[640px] lg:grid-cols-12 lg:px-[72px] lg:pt-0">
          <img
            src={img("frant/home", "").src}
            width={440}
            height={956}
            alt="Frant Home: three regulars are past their usual visit"
            fetchPriority="high"
            className="block w-full rounded-t-[26px] md:rounded-t-[36px] lg:col-span-4 lg:mt-3 lg:max-w-[380px] lg:justify-self-center lg:rounded-t-[44px] lg:shadow-[0_-20px_60px_-30px_rgba(110,24,10,0.6)]"
          />
          <img
            src={img("frant/visit-logged", "").src}
            width={440}
            height={956}
            alt="Client profile after a visit is logged: On track"
            className="mt-12 block w-full rounded-t-[26px] md:mt-24 md:rounded-t-[36px] lg:col-span-4 lg:mt-[176px] lg:max-w-[340px] lg:justify-self-center lg:rounded-t-[40px] lg:shadow-[0_-20px_60px_-30px_rgba(110,24,10,0.6)]"
          />
          <div className="hidden md:block md:pt-6 lg:col-span-4 lg:pt-[72px]">
            <p className="mb-5 text-[18px] font-extrabold">The loop Frant tracks</p>
            <Loop />
            <p className="mt-7 text-[18px] font-bold leading-[1.45]">22 hi-fi screens, three linked flows, one UI kit.</p>
          </div>
        </div>
      </section>
      <section aria-label="The loop Frant tracks" className="px-5 pt-6 md:hidden">
        <p className="mb-3 text-[15px] font-extrabold">The loop Frant tracks</p>
        <Loop onPaper />
        <p className="mt-3.5 text-[15px] font-bold leading-[1.45]">22 hi-fi screens, three linked flows, one UI kit.</p>
      </section>

      {/* At a glance */}
      <Wrap as="section" aria-label="At a glance" className="grid gap-5 pt-12 md:grid-cols-2 md:gap-6 md:pt-16 lg:grid-cols-4 lg:pt-20">
        {GLANCE.map((g) => (
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

      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-12 lg:gap-x-6 lg:px-[72px]">
        <DesktopIndex sections={SECTIONS} active={active} />
        <div className="min-w-0 lg:col-span-9 lg:col-start-4">
          {/* 1 Problem */}
          <Section id="problem" kicker="Problem">
            <Pad>
              <Quote size="l" by="Mauri, solo barber, one of six interviews">
                Honestly, just memory. I’ve been cutting him forever. There wasn’t anything that told me.
              </Quote>
              <Points
                items={[
                  { title: "They notice too late", body: "Mauri after six weeks. Stacey, four months." },
                  { title: "They can’t tell who’s first", body: "Several late clients, no way to choose." },
                  { title: "Reaching out feels pushy", body: "A text can sound desperate." },
                ]}
              />
              <More label="More on the interviews">
                <Prose>
                  <p>
                    Frant is an iOS app that helps independent barbers notice when a regular is overdue, see why, and reach
                    out in their own words. I'm a working barber, so I started with a question from my own chair: why do
                    regular clients slip away without anyone noticing in time?
                  </p>
                  <p>
                    I interviewed six people: three solo barbers and hairstylists, two shop owners and one commission
                    barber. I wasn't testing an idea yet. I wanted to see how they notice that a regular has gone quiet.
                  </p>
                  <p>
                    The solo participants knew each client's rhythm by heart. Mauri knew one regular came every two or
                    three weeks. Liam had a color client who came every four weeks for years. None of it was written down.
                  </p>
                  <p>
                    Because the knowledge lived in memory, people noticed late and by accident. Mauri realized a regular
                    was missing after about six weeks, while looking at a slow week. Stacey only noticed a client was gone
                    when that client messaged her four months later.
                  </p>
                  <p>
                    I grouped the notes into an affinity map with nine clusters. Three problems kept showing up together,
                    and they were linked: a perfect list of overdue clients wouldn't help if the barber still felt awkward
                    sending the text. Frant had to help with noticing, choosing and reaching out.
                  </p>
                </Prose>
                <Table
                  head={["", "Detail"]}
                  rows={[
                    ["Platform", "iOS, mobile first"],
                    ["Timeline", "Sep 7 – Oct 11, 2026 · about 100 hours"],
                    ["Context", "Designlab UX Academy capstone, not a client project"],
                    ["Tools", "Figma, FigJam, Figma mobile app"],
                  ]}
                />
              </More>
            </Pad>
          </Section>

          {/* 2 Research */}
          <Section id="research" kicker="Research" title="The gap wasn’t more data. It was one clear next action.">
            <Pad>
              <Table
                head={["App", "For lapsed clients", "Ranks by each client’s rhythm", "Says why"]}
                rows={[
                  ["SQUIRE", "A count of lapsed clients", <No />, <No />],
                  ["Booksy", "“Slipping Away” group", <No />, <No />],
                  ["Vagaro", "Tags, open-slot promos", <No />, <No />],
                  [
                    <span className="inline-flex items-center gap-2.5 text-[20px] tracking-[-0.03em] md:text-[24px]">
                      <span aria-hidden="true" className="size-3 rounded-full bg-frant" />
                      Frant
                    </span>,
                    "Ranked list of overdue regulars",
                    <Yes />,
                    <Yes />,
                  ],
                ]}
                highlightLast
              />
              <More label="More on research and scope">
                <Prose>
                  <p>
                    The two shop owners challenged my first idea. Jorge already used Vagaro reports and sent filtered
                    campaigns. His problem was too much information, not too little.
                  </p>
                </Prose>
                <Quote by="Jorge, shop owner">You can spend forever looking at reports. I don't need fifty things.</Quote>
                <Quote by="Cray, shop owner">If somebody showed me one thing and said, ‘This needs attention today,’ maybe.</Quote>
                <Prose className="mt-8">
                  <p>
                    Next I compared SQUIRE, Booksy and Vagaro. All three already group lapsed clients in some way. In my
                    own SQUIRE account, the client screen showed 13 lapsed clients as a number. I couldn't open that list
                    or sort it by last visit.
                  </p>
                </Prose>
                <Table
                  head={["", "What it offers for lapsed clients", "Ranks regulars by their own rhythm", "Explains why"]}
                  rows={[
                    ["SQUIRE", "Engage and Smart Rebooking. Lapsed clients shown as a count.", <No />, <No />],
                    ["Booksy", "A “Slipping Away” client group.", <No />, <No />],
                    ["Vagaro", "Client tags and an AI tool that promotes open slots.", <No />, <No />],
                    ["Frant", "A ranked list of overdue regulars, one client at a time.", <Yes />, <Yes />],
                  ]}
                  highlightLast
                  caption="Broad lapsed buckets are common. A ranked, explained list per client was missing. That became the gap: who needs me now, why, and what do I do next?"
                />
                <Prose className="mt-8">
                  <p>
                    Owners had staff, tools and a different pain, so I focused on solo and independent barbers. My
                    personas kept every later decision honest about who Frant is for, and who it isn't for.
                  </p>
                </Prose>
                <Points
                  columns={2}
                  items={[
                    {
                      label: "Primary persona",
                      title: "Andre Ruiz, solo barber",
                      body: "A composite of Mauri, Liam and Stacey. He knows his regulars by heart, notices gaps late, and wants to reach out without sounding like marketing.",
                    },
                    {
                      label: "Secondary persona, MVP boundary",
                      title: "Devon Price, commission barber",
                      body: "Based on one commission barber. His real problem is that the shop owns his client data. Frant doesn't solve that. My first draft implied it did, so I rewrote it with a clear scope limit.",
                    },
                  ]}
                />
                <SubHeading>A retention layer, not another booking app.</SubHeading>
                <Prose className="mt-4">
                  <p>
                    I designed one loop and kept everything else light. Frant finds regulars who are past their usual
                    rhythm, explains why, helps the barber reach out and tracks what happens next.
                  </p>
                </Prose>
                <Flow steps={["See who's overdue", "Understand why", "Reach out", "Track the result"]} caption="The one loop the MVP was built around." />
                <Points
                  items={[
                    {
                      label: "Decision",
                      title: "Frant never sends on its own",
                      body: "It opens iOS Messages with an editable draft. The barber presses Send from his own number. An automatic message would make outreach feel like marketing.",
                    },
                    {
                      label: "Decision",
                      title: "A visible rule over AI",
                      body: "A client is overdue when last visit plus usual rhythm has passed. The barber sets that rhythm and can change it. No black box.",
                    },
                    {
                      label: "Decision",
                      title: "Left out on purpose",
                      body: "Booking, payments and a client marketplace. Booking apps already do those jobs, and competing would have spread 100 hours thin.",
                    },
                  ]}
                />
                <SubHeading>The scope grew first, then got smaller.</SubHeading>
                <Prose className="mt-4">
                  <p>
                    My first sitemap had only three screens. My mentor said it was too narrow to read as a real product,
                    so I added client management and onboarding, plus Schedule, Inbox and Billing as light shells.
                  </p>
                  <p>
                    In hi-fi I cut Inbox and Billing. Inbox would copy the Messages app barbers already use. Billing pulled
                    Frant toward a booking and POS product. The product got smaller, and its promise got clearer.
                  </p>
                </Prose>
                <Table
                  head={["Version", "What it covered", "Why it changed"]}
                  rows={[
                    ["Sitemap v1", "Three screens: the retention core only.", "Mentor feedback: too narrow to read as a real product."],
                    ["Sitemap v2", "Added onboarding and client management. Schedule, Inbox and Billing as light shells.", "Showed a full product shell around the same core."],
                    ["Hi-fi", "Three tabs: Home, Clients, Schedule.", "Cut Inbox and Billing. They pulled away from retention."],
                  ]}
                  highlightLast
                />
              </More>
            </Pad>
          </Section>

          {/* 3 Key decision */}
          <Section id="decision" kicker="Key decision" title="Every rank comes with its reason.">
            <div className="mt-7 bg-frant-tint px-5 py-9 md:mt-10 md:px-10 md:py-12 lg:grid lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start lg:gap-14 lg:p-14">
              <div className="relative mx-auto w-[280px] md:w-[320px] lg:w-[360px]">
                <img
                  src={img("frant/overdue", "").src}
                  width={440}
                  height={956}
                  loading="lazy"
                  decoding="async"
                  alt="Hi-fi overdue list with a sort label, late badges, rhythm bars and a Why this order note"
                  className="block w-full rounded-[32px] shadow-[0_30px_60px_-32px_rgba(110,24,10,0.45)] lg:rounded-[40px]"
                />
                {DECISION.map((d) => (
                  <Marker
                    key={d.k}
                    k={d.k}
                    style={{ top: d.top }}
                    className={`absolute shadow-[0_0_0_3px_var(--color-frant-tint)] ${d.side === "left" ? "-left-3 lg:-left-3.5" : "-right-3 lg:-right-3.5"}`}
                  />
                ))}
              </div>
              <div className="mt-8 lg:mt-0">
                <ol className="flex flex-col gap-5 lg:gap-[26px]">
                  {DECISION.map((d) => (
                    <li key={d.k} className="flex gap-3.5 md:gap-4">
                      <Marker k={d.k} />
                      <div>
                        <b className="text-[18px] font-extrabold tracking-[-0.02em] lg:text-[20px]">{d.title}</b>
                        <p className="mt-1 text-[16px] font-medium leading-[1.5] lg:text-[17px]">{d.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-7 border-t-2 border-ink pt-4 lg:mt-8 lg:pt-[18px]">
                  <Evidence className="text-[14px] lg:text-[15px]">Tested in round two</Evidence>
                  <p className="mt-2.5 text-[18px] font-bold leading-[1.4] tracking-[-0.01em] lg:mt-3 lg:text-[20px]">
                    Ease of choosing who to contact first went from 4.0 to 4.8 out of 5. All 5 testers explained why Mike
                    was first.
                  </p>
                </div>
              </div>
            </div>
            <Pad>
              <div className="mt-8 grid gap-7 md:mt-10 md:grid-cols-2 md:gap-6">
                <div className="border-t-2 border-ink pt-3.5 md:pt-4">
                  <p className="text-[14px] font-extrabold text-graphite md:text-[15px]">Also decided</p>
                  <p className="mt-2 text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] md:mt-2.5 md:text-[32px]">
                    Frant never sends a message on its own.
                  </p>
                  <p className="mt-2.5 text-[16px] font-medium leading-[1.5] md:mt-3 md:text-[17px]">
                    It opens iOS Messages with an editable draft. “I want it coming from me, not some app.” Mauri
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-3.5 md:pt-4">
                  <p className="text-[14px] font-extrabold text-graphite md:text-[15px]">The draft, before and after</p>
                  <p className="mt-2 text-[15px] font-medium leading-[1.5] text-graphite line-through md:mt-2.5 md:text-[16px]">
                    “Hey Mike, it's been a few weeks since your last cut — want me to grab you a spot this week?”
                  </p>
                  <p className="mt-2 text-[15px] font-bold leading-[1.5] md:mt-2.5 md:text-[16px]">
                    “Hey Mike, got a couple openings this week if you're due for a cut. Want me to save you a spot?”
                  </p>
                  <Evidence className="mt-3 text-[13px] md:mt-3.5 md:text-[14px]">Sent with little or no edit: 0 of 5, then 4 of 5</Evidence>
                </div>
              </div>
              <More label="More on the lo-fi test">
                <Prose>
                  <p>
                    I built a 14-screen lo-fi prototype in Figma and tested it in person on my iPhone. Each person did six
                    tasks and thought aloud. The core flow worked: all five target users finished all six tasks, and only
                    one task needed a hint. The reason box and the handoff to Messages needed no explanation.
                  </p>
                </Prose>
                <Metrics
                  size="m"
                  items={[
                    { value: "14", label: "lo-fi screens" },
                    { value: "5 + 1", label: "target users, plus one commission barber reported separately" },
                    { value: "6", label: "tasks, think-aloud, in person" },
                    { value: "1", label: "task needed a hint" },
                  ]}
                />
                <WideImage
                  img={img("frant/lofi-overview", "The 14 lo-fi screens of Frant, from onboarding to the native SMS composer")}
                  minWidth={900}
                  caption="The 14-screen lo-fi prototype, from onboarding to the handoff to Messages."
                />
                <SubHeading>1. Priority needed a reason.</SubHeading>
                <Prose className="mt-4">
                  <p>
                    Choosing who to contact first scored lowest, 4.0 out of 5. Everyone read 1, 2 and 3 as a rank, but
                    nobody knew why Mike was first. Mauri said he might text James first if James was a better client.
                  </p>
                </Prose>
                <Quote by="Liam, solo hairstylist">I don't love the idea that the app decides who I should reach out to first.</Quote>
                <PhoneRow
                  items={[
                    { img: img("frant/lofi-overdue", "Lo-fi overdue list with numbered clients and no explanation of the order"), tag: "Before", label: "Numbered list. No reason for the order." },
                    { img: img("frant/overdue", "Hi-fi overdue list with a sort label, late badges and a Why this order note"), tag: "After", label: "Sort label, late badges and a “Why this order?” note that calls the order a suggestion." },
                  ]}
                  caption="I also found a flaw in my own test: Mike and James were tied in the test data, which made the order look random. I fixed the data for round two."
                />
                <SubHeading>2. The message had to sound like the barber.</SubHeading>
                <Prose className="mt-4">
                  <p>
                    All five target users said they'd rewrite the default text. Sophia said it “sounds like I'm tracking
                    him.” Liam said it felt like “I've been watching that you haven't come back.” The new draft is short,
                    offers a spot this week and never mentions how long it's been. The barber can still edit every word.
                  </p>
                </Prose>
                <SubHeading>3. Names over numbers.</SubHeading>
                <Prose className="mt-4">
                  <p>
                    I tested two Home layouts. One led with numbers: 3 overdue clients and $240 at risk. The other showed
                    names right away. Names won, 3 to 2. The $240 figure raised questions and helped nobody decide, so I
                    removed it. The word “cadence” also made three people pause. It became “usually comes in every.”
                  </p>
                </Prose>
                <PhoneRow
                  items={[
                    { img: img("frant/lofi-home-numbers", "Lo-fi Home option that leads with 3 clients overdue and $240 revenue at risk"), tag: "Numbers first, 2 votes", label: "Big counts: 3 clients overdue, $240 at risk." },
                    { img: img("frant/lofi-home-names", "Lo-fi Home option that lists the clients who need attention by name"), tag: "Names first, 3 votes", label: "The people who need attention, right away." },
                  ]}
                  caption="The two Home options from the lo-fi test. In hi-fi, the $240 figure was removed."
                />
                <Quote by="Mauri, solo barber">If I'm opening this because I'm slow, just show me the people. I don't need a dashboard.</Quote>
              </More>
            </Pad>
          </Section>

          {/* 4 Testing */}
          <Section id="testing" kicker="Testing" title="The interface worked. The job ended at Send.">
            <Pad>
              <Metrics
                items={[
                  { value: "42/45", label: "task attempts without a hint (93%)" },
                  { value: "4.6", label: "average ease, target was 4.5" },
                  { value: "5", label: "testers, same in both rounds" },
                  { value: "2", label: "tasks only at their minimum" },
                ]}
              />
              <Prose className="mt-8 md:mt-9">
                <p>
                  Marking a client as contacted and logging a visit only reached their targets. People understood the
                  buttons; once the text was sent, the job felt done.
                </p>
              </Prose>
              <Quote by="Stacey, solo hairstylist">I already texted him. In my head I’m done.</Quote>
              <More label="More on the hi-fi test">
                <Prose>
                  <p>
                    On October 5 I tested the hi-fi prototype with the same five people, again on my iPhone. There were
                    nine tasks, from sign up to deleting a client. Before the test I set a target for every task: 80% of
                    attempts without a hint and an average ease of 4.5. All targets were met, though two only reached the
                    minimum.
                  </p>
                </Prose>
                <Metrics
                  size="m"
                  items={[
                    { value: "42/45", label: "attempts done without a hint (93%)" },
                    { value: "4.6", label: "average ease out of 5 (target 4.5)" },
                    { value: "5/5", label: "explained why Mike was first" },
                    { value: "9", label: "tasks, sign up to delete" },
                  ]}
                />
                <Table
                  head={["Task", "Round one", "Round two"]}
                  rows={[
                    ["Choose who to contact first", "Ease 4.0", "Ease 4.8"],
                    ["Send the draft as is or with a small edit", "0 of 5", "4 of 5"],
                    ["Set up and add a client alone", "4 of 5", "5 of 5"],
                    ["Mark contacted without a prompt (new)", "Not tested", "3 of 5, at target"],
                    ["Log a visit alone (new)", "Not tested", "4 of 5, at target"],
                  ]}
                  caption="The round one fixes worked. All five used the sort label, the badges or the “Why this order?” note to explain the ranking."
                />
                <SubHeading>Two tasks only reached the line.</SubHeading>
                <Prose className="mt-4">
                  <p>
                    Both asked the barber to update Frant after something had already happened outside the app. In task 5,
                    two of five didn't think to mark Mike as contacted. Mauri figured the app would know. In task 7, Mauri
                    and Stacey said they'd forget to log every visit by hand.
                  </p>
                  <p>
                    This wasn't a usability bug. People understood the buttons. The risk was behavior: once the real
                    action happened, the job felt finished. If barbers stop updating Frant, the list goes stale and the
                    product loses its value.
                  </p>
                </Prose>
              </More>
            </Pad>
          </Section>

          {/* 5 Iteration */}
          <Section id="iteration" kicker="Iteration" title="Ask at the moment it matters.">
            <Pad>
              <div className="mt-4 inline-flex min-h-10 items-center rounded-full px-4 shadow-[inset_0_0_0_2px_var(--color-ink)] md:mt-[18px]">
                <Evidence kind="hypothesis" className="text-[14px]">
                  <span className="md:hidden">Hypothesis, not yet tested</span>
                  <span className="hidden md:inline">Hypothesis, designed after the last test, not yet tested</span>
                </Evidence>
              </div>
              <PhoneRow
                items={[
                  { img: img("frant/sent-check", "Sheet asking Did you send it to Mike, with Yes, mark as contacted and Not yet"), tag: "Back from Messages", label: "“Did you send it to Mike?”" },
                  { img: img("frant/visit-check", "Home on the booking day asking Did Mike come in, with Yes, log visit and No-show"), tag: "On the booking day", label: "“Did Mike come in?”" },
                  { img: img("frant/visit-logged", "Client profile showing Visit logged, On track and the next expected visit"), tag: "After logging", label: "On track, next visit expected." },
                ]}
              />
              <More label="More on the iteration">
                <Prose>
                  <p>
                    Instead of more explanation on the buttons, I moved the question to the moment the barber needs it.
                    These changes came after the last test, so they're hypotheses for the next one.
                  </p>
                  <p>
                    The “Did you send it to Mike?” sheet admits Frant can't see the Messages app. On the booking day, Home
                    asks “Did Mike come in?” and one tap logs the visit. After logging, the profile shows a clear result:
                    On track, with the next expected visit. Stephanie expected this in testing.
                  </p>
                  <p>
                    I also added a <strong>Replied</strong> state between Contacted and Rebooked, because in both rounds
                    people judged outreach by a reply or a booking. And I changed one onboarding line: “Learns each
                    client's rhythm” became “Tracks each client's rhythm.” Sophia pointed out that she sets the rhythm
                    herself. Frant doesn't learn anything yet, so the old line promised too much.
                  </p>
                </Prose>
              </More>
            </Pad>
          </Section>

          {/* 6 What's next */}
          <Section id="next" kicker="What’s next">
            <Pad>
              <Points
                columns={2}
                items={[
                  {
                    title: "Limits",
                    body: (
                      <ul>
                        <li>The same five people took both rounds, all from my coworking space.</li>
                        <li>That made comparison easy, but may have made them faster and kinder.</li>
                        <li>Sessions lasted 15 to 20 minutes, so real habits could only be discussed.</li>
                      </ul>
                    ),
                  },
                  {
                    title: "Next",
                    body: (
                      <ul>
                        <li>Test the check-ins over a real week of work.</li>
                        <li>Recruit barbers outside my coworking space.</li>
                        <li>Measure how often barbers answer the check-ins without a reminder.</li>
                        <li>Explore Archive instead of Delete, and a suggested rhythm update the barber confirms.</li>
                      </ul>
                    ),
                  },
                ]}
              />
              <More label="Final product, reflection and how I used AI">
                <SubHeading>22 screens, three flows and one loop.</SubHeading>
                <Prose className="mt-4">
                  <p>
                    The final prototype covers the full journey from sign up to rebooking, the core retention flow, and
                    the Saturday visit check. Navigation has three tabs. Home shows who needs attention this week. Clients
                    holds the full list and the overdue view. Schedule stays light on purpose.
                  </p>
                </Prose>
                <Flow steps={["Overdue", "Contacted", "Replied", "Rebooked", "Visit logged", "On track"]} caption="The retention loop, as six client states." />
                <PhoneRow
                  items={[
                    { img: img("frant/home", "Frant Home showing three regulars past their usual visit"), tag: "Home", label: "This week's overdue regulars, names first." },
                    { img: img("frant/message", "Message draft sheet with templates and an Open in Messages button"), tag: "Reach out", label: "An editable draft that opens in iOS Messages." },
                    { img: img("frant/schedule", "Schedule with today's appointments and an open slot that links to overdue regulars"), tag: "Schedule", label: "A trigger, not a calendar: an open slot links to overdue regulars." },
                  ]}
                  caption="All five testers used the open slot. Most said they wouldn't keep a second calendar unless it synced with theirs, so Schedule stays light."
                />
                <SubHeading>A UI kit for the final visual language.</SubHeading>
                <Prose className="mt-4">
                  <p>
                    The kit has 17 color variables, 14 text styles and components for buttons, inputs, status chips,
                    client rows, navigation and feedback. Coral is the brand color, so it was easy to overuse. After a
                    mentor review I kept it for primary actions and priority signals only. Coral buttons use black labels
                    at 6.4:1, and colored text uses a deeper coral at 5.2:1.
                  </p>
                </Prose>
                <WideImage img={img("frant/kit-color", "Frant UI kit color page: brand, neutral and system colors with contrast ratios")} />
                <WideImage
                  img={img("frant/kit-status", "Frant UI kit status labels for each step of the retention loop")}
                  caption="Status labels mark each step of the retention loop. Some composite components were built after the hi-fi screens and aren't in every screen yet."
                />
                <SubHeading>A usable screen is not the same as a used product.</SubHeading>
                <Prose className="mt-4">
                  <p>
                    Manual tracking is still the biggest risk. In a native build, the iOS message composer reports whether
                    a text was sent, so Frant could mark a client as contacted on its own. Calendar sync could log visits
                    the same way.
                  </p>
                  <p>
                    Frant hasn't launched, so I have no retention or revenue results. After launch I'd measure two things:
                    how many overdue clients rebook after outreach, and how often barbers answer the check-ins. The second
                    number would show whether the loop survives real days at the chair.
                  </p>
                </Prose>
                <SubHeading>Reflection</SubHeading>
                <Prose className="mt-4">
                  <p>
                    Being a barber helped: I had easy access to participants and spoke their language. It also gave me a
                    bias. I expected the problem to be missing data. Two shop owners showed me that the real problem was
                    attention.
                  </p>
                  <p>A smaller product was stronger than a broad one. Cutting Inbox and Billing made the retention promise clearer.</p>
                </Prose>
                <SubHeading>How I used AI</SubHeading>
                <Prose className="mt-4">
                  <p>
                    I used ChatGPT and Claude to sort transcripts into patterns, draft reports from my notes and review
                    finished work. I ran every interview and test session myself, checked each claim against the
                    transcripts, rebuilt every screen in Figma, and made the final product decisions. When the two tools
                    disagreed, I went back to the source.
                  </p>
                </Prose>
              </More>
            </Pad>
          </Section>
        </div>
      </div>

      <Lesson>The hardest product problem was not on the screen. It started when the barber left the app.</Lesson>

      <NextCase to="/deals-hub" name="Deals Hub" color="bg-deals" line="Show the exact card before someone pays. 5 of 5 found it in round two." />
    </>
  );
}
