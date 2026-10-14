import {
  CaseBody,
  CaseIntro,
  Chips,
  DecisionPanel,
  Glance,
  Lesson,
  Metrics,
  MobileIndex,
  More,
  NextCase,
  Pad,
  PhoneRow,
  Points,
  ProductBand,
  Prose,
  Quote,
  Section,
  SubHeading,
  WideImage,
  useActiveSection,
  type SectionDef,
} from "../components/case2/CaseKit";
import { Evidence } from "../components/layout/Wrap";
import { img } from "../data/caseImages";
import { usePageMeta } from "../lib/usePageMeta";

const SECTIONS: SectionDef[] = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "framing", label: "Framing" },
  { id: "design", label: "Design" },
  { id: "testing", label: "Testing" },
  { id: "reflection", label: "Reflection" },
];
const IDS = SECTIONS.map((s) => s.id);

const INSTITUTIONS = ["DMV", "Bank", "Insurance", "Utilities", "Subscriptions", "Licenses", "USPS"];

export function MoveEase() {
  usePageMeta({
    title: "MoveEase Case Study — Sam Mitkin",
    description:
      "MoveEase: a mobile app that helps people handle the admin tasks after a move. Research, design and usability testing by Sam Mitkin.",
    path: "/moveease",
  });
  const active = useActiveSection(IDS);

  return (
    <>
      <MobileIndex sections={SECTIONS} active={active} />

      <CaseIntro
        name="MoveEase"
        dot="bg-move"
        kicker="MoveEase, an iOS app, research and UI"
        title="Staying ahead of the admin after a move."
        note="A mobile app that helps people moving to a new home stay ahead of address updates, deadlines, and paperwork. It surfaces hidden admin tasks after a move, in the right order, before deadlines hit."
        meta={[
          ["Role", "Solo UX/UI designer"],
          ["Duration", "4 months, 2026"],
          ["Platform", "iOS"],
          ["Context", "Designlab UX Academy, Phase 1"],
        ]}
      />

      <ProductBand
        label="MoveEase screens"
        bg="bg-move"
        screens={[
          img("moveease/tasks", "My Tasks list grouped into address updates and utilities setup"),
          img("moveease/dashboard", "MoveEase dashboard showing the next task and 3 of 12 tasks done"),
          img("moveease/calendar", "Calendar with upcoming deadlines for April"),
        ]}
      />

      <Glance
        items={[
          {
            label: "Problem",
            body: "After a move, every institution has its own deadline, process and penalty. There's no master list and no clear order.",
          },
          {
            label: "What I did",
            body: "Four interviews, a persona, information architecture, lo-fi to hi-fi design, and a usability test with five participants.",
          },
          {
            label: "Result, tested",
            kind: "tested",
            body: "Testing found two priority fixes: a labeled New Task button and a fully tappable assignment row.",
          },
          {
            label: "Not yet tested",
            kind: "hypothesis",
            body: "The shared planning experience with real couples, and the product during an active move.",
          },
        ]}
      />

      <CaseBody sections={SECTIONS} active={active}>
        {/* 1 Problem */}
        <Section id="problem" kicker="Problem" title="The real work starts after the truck leaves.">
          <Pad>
            <Prose className="mt-6">
              <p>
                Most people think moving ends when the boxes are unpacked. Then the admin starts. Each of these is a
                separate task with its own deadline, its own process and its own penalty for missing it:
              </p>
            </Prose>
            <Chips items={INSTITUTIONS} label="Institutions to update after a move" />
            <Prose className="mt-6">
              <p>
                There's no master list and no clear order. Tasks keep showing up for weeks, and people don't know how many
                are coming until they're already behind.
              </p>
            </Prose>
            <Quote by="Victoria, 29, moved within the same building">I kept thinking I was done, and then another thing would come up.</Quote>
          </Pad>
        </Section>

        {/* 2 Research */}
        <Section id="research" kicker="Research" title="Four interviews, six findings.">
          <Pad>
            <Points
              items={[
                { title: "Admin overload", body: "Too many institutions, no single source of truth." },
                { title: "No clear sequence", body: "People don't know what to do first." },
                { title: "Hidden deadlines", body: "Consequences appear only after a deadline is missed." },
                { title: "Coordination gap", body: "One partner carries the entire load alone." },
                { title: "Document chaos", body: "Files scattered across email, paper and phone notes." },
                { title: "Constant stress", body: "Not knowing what's left creates background anxiety." },
              ]}
            />
            <More label="Who I interviewed">
              <Prose>
                <p>I interviewed four people who had recently moved or were preparing to move.</p>
              </Prose>
              <Points
                columns={2}
                items={[
                  { label: "Local move", title: "Victoria", body: <><p>Admin chaos, no system.</p><p className="font-bold">“I had no idea how many places needed updating.”</p></> },
                  { label: "Structured planner", title: "Rodion", body: <><p>His wife built a spreadsheet.</p><p className="font-bold">“My wife handled all of it. I just followed the list.”</p></> },
                  { label: "Reactive coordinator", title: "Ekaterina", body: <><p>Paid over budget and lost a deposit.</p><p className="font-bold">“Everything got buried in Telegram.”</p></> },
                  { label: "First solo move", title: "Alex", body: <><p>Missed a DMV deadline.</p><p className="font-bold">“Nobody told me there was a deadline.”</p></> },
                ]}
              />
            </More>
          </Pad>
        </Section>

        {/* 3 Framing */}
        <Section id="framing" kicker="Framing" title="Designing for one person means designing for the right person.">
          <Pad>
            <figure className="mt-8 border-t-2 border-ink pt-4">
              <p className="text-[14px] font-extrabold text-graphite md:text-[15px]">How might we</p>
              <blockquote className="mt-2 max-w-[22em] text-[26px] font-extrabold leading-[1.1] tracking-[-0.035em] md:text-[36px]">
                Help people moving homes stay ahead of address updates, deadlines, and paperwork, so nothing falls through
                the cracks?
              </blockquote>
              <figcaption className="mt-3 text-[15px] font-medium text-body2">This question guided every design decision that followed.</figcaption>
            </figure>
            <Points
              columns={2}
              items={[
                {
                  label: "Primary persona",
                  title: "Victoria, 29",
                  body: (
                    <>
                      <p>Tattoo artist in Pasadena, CA. Married.</p>
                      <p className="font-bold">“I just need someone to tell me what to do next.”</p>
                    </>
                  ),
                },
                {
                  label: "Scope",
                  title: "Task organization and deadline awareness",
                  body: "Surfacing hidden admin tasks in the right order, and a shared view for couples moving together.",
                },
              ]}
            />
            <More label="More on the persona and scope">
              <Prose>
                <p>
                  <strong>Victoria's goals:</strong> finish every move task without missing anything, always know the next
                  thing to do, feel calm and in control.
                </p>
                <p>
                  <strong>Pain points:</strong> updated each institution one by one with no list, tasks appeared with no
                  clear order, documents scattered across email, paper and notes.
                </p>
              </Prose>
              <Points
                columns={2}
                items={[
                  {
                    title: "In scope",
                    body: (
                      <ul>
                        <li>Task organization and deadline awareness</li>
                        <li>Surfacing hidden admin tasks in the right order</li>
                        <li>A shared view for couples moving together</li>
                      </ul>
                    ),
                  },
                  {
                    title: "Out of scope",
                    body: (
                      <ul>
                        <li>Financial budgeting</li>
                        <li>Housing search</li>
                        <li>Emotional support</li>
                        <li>Long-distance move logistics</li>
                        <li>Mover booking</li>
                      </ul>
                    ),
                  },
                ]}
              />
            </More>
          </Pad>
        </Section>

        {/* 4 Design */}
        <Section id="design" kicker="Design" title="One dashboard, three connected branches.">
          <Pad>
            <Prose className="mt-6">
              <p>
                My first version had three entry points. Mentor feedback showed this was confusing, so I redesigned it into
                one dashboard with three connected branches. The dashboard shows the next task and the closest deadline at a
                glance.
              </p>
            </Prose>
            <PhoneRow
              items={[
                { img: img("moveease/dashboard", "MoveEase dashboard with the next task, progress and upcoming deadlines"), tag: "Dashboard", label: "Next task, progress and closest deadlines." },
                { img: img("moveease/tasks", "My Tasks list grouped into address updates and utilities setup"), tag: "My Tasks", label: "Tasks grouped into address updates and utilities." },
                { img: img("moveease/calendar", "Calendar with deadlines marked for April"), tag: "Calendar", label: "Deadlines on a month view, listed below." },
              ]}
              caption="Hi-fi screens after testing."
            />
            <More label="More on the branches, sketches and decisions">
              <Points
                items={[
                  { label: "Branch", title: "My Tasks", body: "Address updates and utilities setup." },
                  { label: "Branch", title: "Calendar", body: "Upcoming deadlines and a timeline view." },
                  { label: "Branch", title: "Shared Plan", body: "A shared dashboard and task assignment for partners." },
                ]}
              />
              <SubHeading>From sketches to a connected mid-fi.</SubHeading>
              <Prose className="mt-4">
                <p>
                  I sketched two variants of each core screen: Dashboard, My Tasks, Task Detail, Calendar and Shared Plan.
                  Then I picked one per screen and connected them into the main task flows.
                </p>
              </Prose>
              <WideImage
                img={img("moveease/lofi-overview", "Two rows of lo-fi sketches, two variants for each of five core screens")}
                caption="Ten lo-fi sketches: two variants for each of the five core screens."
              />
              <WideImage
                img={img("moveease/midfi-flow", "Mid-fi screens connected by arrows: Dashboard, My Tasks, Task detail, Calendar and Shared Plan")}
                minWidth={900}
                caption="Mid-fi flow: from the dashboard to a task, its deadline, and the shared plan."
              />
              <SubHeading>Three decisions that shaped the interface.</SubHeading>
              <Points
                items={[
                  { title: "Dashboard first", body: "Victoria has no time to dig through menus. The dashboard shows the next task and next deadline immediately." },
                  { title: "Calm visual system", body: "One blue primary, a near-white background and clear type. Green is reserved for completed tasks." },
                  { title: "Shared Plan", body: "Rodion's move worked because his wife built a spreadsheet. MoveEase had to be that shared plan." },
                ]}
              />
            </More>
          </Pad>
        </Section>

        {/* 5 Testing */}
        <Section id="testing" kicker="Testing" title="Two issues stood out.">
          <Pad>
            <Prose className="mt-6">
              <p>
                Five participants tested the core flows: finding the next task, creating a task, assigning it to a partner,
                and checking deadlines.
              </p>
            </Prose>
            <Metrics
              items={[
                { value: "5", label: "participants" },
                { value: "5", label: "task flows" },
                { value: "2", label: "priority fixes" },
                { value: "3/5", label: "stumbled on each issue" },
              ]}
            />
          </Pad>
          <DecisionPanel tint="bg-move-tint">
            <Evidence className="text-[14px] lg:text-[15px]">Found in testing, 3 of 5</Evidence>
            <SubHeading>1. The plus button caused hesitation.</SubHeading>
            <Prose className="mt-3">
              <p>3 of 5 participants looked for a text label before tapping the floating plus.</p>
            </Prose>
            <PhoneRow
              items={[
                { img: img("moveease/tasks-before", "My Tasks with an icon-only floating plus button"), tag: "Before", label: "Icon-only floating plus." },
                { img: img("moveease/tasks", "My Tasks with a labeled New Task pill button"), tag: "After", label: "A labeled “+ New Task” pill." },
              ]}
            />
            <div className="mt-12 border-t-2 border-ink pt-4">
              <Evidence className="text-[14px] lg:text-[15px]">Found in testing, 3 of 5</Evidence>
            </div>
            <SubHeading>2. The edit icon was missed.</SubHeading>
            <Prose className="mt-3">
              <p>3 of 5 participants expected the whole row to be tappable, not a small pencil icon.</p>
            </Prose>
            <PhoneRow
              items={[
                { img: img("moveease/detail-before", "Task Detail with a small pencil icon to change who the task is assigned to"), tag: "Before", label: "A small pencil to reassign the task." },
                { img: img("moveease/detail-after", "Task Detail with a Change label on a fully tappable assignment row"), tag: "After", label: "A “Change” label, and the whole row is tappable." },
              ]}
            />
          </DecisionPanel>
        </Section>

        {/* 6 Reflection */}
        <Section id="reflection" kicker="Reflection" title="Lessons from the first build.">
          <Pad>
            <Points
              items={[
                {
                  label: "What worked",
                  title: "Fewer places to look",
                  body: (
                    <ul>
                      <li>A single dashboard entry point made navigation much easier.</li>
                      <li>Two task categories reduced cognitive load.</li>
                    </ul>
                  ),
                },
                {
                  label: "What I'd do differently",
                  title: "Decide earlier",
                  body: (
                    <ul>
                      <li>Lock the color palette before designing hi-fi screens.</li>
                      <li>Validate navigation earlier with users.</li>
                    </ul>
                  ),
                },
                {
                  label: "Next steps",
                  title: "Test it for real",
                  body: (
                    <ul>
                      <li>Add completion animations.</li>
                      <li>Test the shared planning experience with real couples.</li>
                      <li>Test the product during an active move.</li>
                    </ul>
                  ),
                },
              ]}
            />
            <p className="mt-6 text-[14px] font-medium text-graphite">Tools: Figma, Google Meet.</p>
          </Pad>
        </Section>
      </CaseBody>

      <Lesson>Icon-only buttons can fail under stress. Interfaces should explain themselves without assuming calm attention.</Lesson>

      <NextCase to="/frant" name="Frant" color="bg-frant" line="A rank without a reason feels arbitrary. 42 of 45 tasks done without a hint in round two." />
    </>
  );
}
