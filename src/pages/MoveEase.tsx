import {
  AtAGlance,
  BeforeAfter,
  CardGrid,
  CaseHero,
  CaseSection,
  Findings,
  Lesson,
  NextProject,
  PhoneRow,
  Prose,
  Quote,
  Stats,
  SubHeading,
  TwoUp,
  WideImage,
} from "../components/case/Case";
import { img } from "../data/caseImages";
import { projects } from "../data/projects";
import { usePageMeta } from "../lib/usePageMeta";

const INDEX = 2;
const project = projects[INDEX];
const next = projects[0];

const institutions = ["DMV", "Bank", "Insurance", "Utilities", "Subscriptions", "Licenses", "USPS"];

export function MoveEase() {
  usePageMeta({
    title: "MoveEase Case Study — Sam Mitkin",
    description:
      "MoveEase: a mobile app that helps people handle the admin tasks after a move. Research, design and usability testing by Sam Mitkin.",
    path: "/moveease",
  });

  return (
    <>
      <CaseHero
        project={project}
        index={INDEX}
        intro={
          <p>
            A mobile app that helps people moving to a new home stay ahead of address updates, deadlines, and paperwork.
            It surfaces hidden admin tasks after a move, in the right order, before deadlines hit.
          </p>
        }
        meta={[
          { label: "Role", value: "Solo UX/UI designer" },
          { label: "Duration", value: "4 months · 2026" },
          { label: "Platform", value: "iOS" },
          { label: "Context", value: "Designlab UX Academy, Phase 1" },
          { label: "Tools", value: "Figma, Google Meet" },
        ]}
      />

      <AtAGlance
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
            label: "Outcome",
            body: "Testing found two priority fixes: a labeled New Task button and a fully tappable assignment row.",
          },
        ]}
      />

      {/* 01 Problem */}
      <CaseSection id="problem" number="01" label="Problem" title="The real work starts after the truck leaves.">
        <Prose>
          <p>
            Most people think moving ends when the boxes are unpacked. Then the admin starts. Each of these is a separate
            task with its own deadline, its own process and its own penalty for missing it:
          </p>
        </Prose>
        <ul className="mt-6 flex max-w-[660px] flex-wrap gap-2" aria-label="Institutions to update after a move">
          {institutions.map((name) => (
            <li key={name} className="rounded-full border border-[#1f1f1f]/15 bg-white px-4 py-2 text-[14px] font-medium text-[#1f1f1f]">
              {name}
            </li>
          ))}
        </ul>
        <Prose>
          <p>
            There's no master list and no clear order. Tasks keep showing up for weeks, and people don't know how many are
            coming until they're already behind.
          </p>
        </Prose>
        <Quote by="Victoria, 29 · moved within the same building">I kept thinking I was done, and then another thing would come up.</Quote>
      </CaseSection>

      {/* 02 Research */}
      <CaseSection id="research" number="02" label="Research" title="Four interviews, six findings." tone="white">
        <Prose>
          <p>I interviewed four people who had recently moved or were preparing to move.</p>
        </Prose>
        <CardGrid
          columns={2}
          items={[
            { eyebrow: "Local move", title: "Victoria", body: <p>Admin chaos, no system.</p>, foot: "“I had no idea how many places needed updating.”" },
            {
              eyebrow: "Structured planner",
              title: "Rodion",
              body: <p>His wife built a spreadsheet.</p>,
              foot: "“My wife handled all of it. I just followed the list.”",
            },
            {
              eyebrow: "Reactive coordinator",
              title: "Ekaterina",
              body: <p>Paid over budget and lost a deposit.</p>,
              foot: "“Everything got buried in Telegram.”",
            },
            { eyebrow: "First solo move", title: "Alex", body: <p>Missed a DMV deadline.</p>, foot: "“Nobody told me there was a deadline.”" },
          ]}
        />
        <SubHeading>What I found</SubHeading>
        <Findings
          items={[
            { title: "Admin overload", body: "Too many institutions, no single source of truth." },
            { title: "No clear sequence", body: "People don't know what to do first." },
            { title: "Hidden deadlines", body: "Consequences appear only after a deadline is missed." },
            { title: "Coordination gap", body: "One partner carries the entire load alone." },
            { title: "Document chaos", body: "Files scattered across email, paper and phone notes." },
            { title: "Constant stress", body: "Not knowing what's left creates background anxiety." },
          ]}
        />
      </CaseSection>

      {/* 03 Framing */}
      <CaseSection id="framing" number="03" label="Framing" title="Designing for one person means designing for the right person.">
        <CardGrid
          items={[
            {
              eyebrow: "Primary persona",
              title: "Victoria, 29",
              body: (
                <>
                  <p>Tattoo artist in Pasadena, CA. Married.</p>
                  <p>
                    <strong className="font-semibold text-[#1f1f1f]">Goals:</strong> finish every move task without missing
                    anything, always know the next thing to do, feel calm and in control.
                  </p>
                  <p>
                    <strong className="font-semibold text-[#1f1f1f]">Pain points:</strong> updated each institution one by
                    one with no list, tasks appeared with no clear order, documents scattered across email, paper and notes.
                  </p>
                </>
              ),
              foot: "“I just need someone to tell me what to do next.”",
            },
            {
              eyebrow: "How might we",
              title: "Help people moving homes stay ahead of address updates, deadlines, and paperwork, so nothing falls through the cracks?",
              body: <p>This question guided every design decision that followed.</p>,
            },
          ]}
        />
        <TwoUp
          left={{
            label: "In scope",
            body: (
              <ul>
                <li>Task organization and deadline awareness</li>
                <li>Surfacing hidden admin tasks in the right order</li>
                <li>A shared view for couples moving together</li>
              </ul>
            ),
          }}
          right={{
            label: "Out of scope",
            muted: true,
            body: (
              <ul>
                <li>Financial budgeting</li>
                <li>Housing search</li>
                <li>Emotional support</li>
                <li>Long-distance move logistics</li>
                <li>Mover booking</li>
              </ul>
            ),
          }}
        />
      </CaseSection>

      {/* 04 Design */}
      <CaseSection id="design" number="04" label="Design" title="One dashboard, three connected branches." tone="white">
        <Prose>
          <p>
            My first version had three entry points. Mentor feedback showed this was confusing, so I redesigned it into one
            dashboard with three connected branches. The dashboard shows the next task and the closest deadline at a
            glance.
          </p>
        </Prose>
        <CardGrid
          columns={3}
          items={[
            { eyebrow: "Branch", title: "My Tasks", body: <p>Address updates and utilities setup.</p> },
            { eyebrow: "Branch", title: "Calendar", body: <p>Upcoming deadlines and a timeline view.</p> },
            { eyebrow: "Branch", title: "Shared Plan", body: <p>A shared dashboard and task assignment for partners.</p> },
          ]}
        />
        <SubHeading>From sketches to a connected mid-fi.</SubHeading>
        <Prose>
          <p>
            I sketched two variants of each core screen: Dashboard, My Tasks, Task Detail, Calendar and Shared Plan. Then I
            picked one per screen and connected them into the main task flows.
          </p>
        </Prose>
        <WideImage
          img={img("moveease/lofi-overview", "Two rows of lo-fi sketches, two variants for each of five core screens")}
          caption="Ten lo-fi sketches: two variants for each of the five core screens."
        />
        <WideImage
          img={img("moveease/midfi-flow", "Mid-fi screens connected by arrows: Dashboard, My Tasks, Task detail, Calendar and Shared Plan")}
          scroll={460}
          caption="Mid-fi flow: from the dashboard to a task, its deadline, and the shared plan."
        />

        <SubHeading>Three decisions that shaped the interface.</SubHeading>
        <Findings
          items={[
            { title: "Dashboard first", body: "Victoria has no time to dig through menus. The dashboard shows the next task and next deadline immediately." },
            { title: "Calm visual system", body: "One blue primary, a near-white background and clear type. Green is reserved for completed tasks." },
            { title: "Shared Plan", body: "Rodion's move worked because his wife built a spreadsheet. MoveEase had to be that shared plan." },
          ]}
        />
        <PhoneRow
          items={[
            { img: img("moveease/dashboard", "MoveEase dashboard with the next task, progress and upcoming deadlines"), tag: "Dashboard", label: "Next task, progress and closest deadlines." },
            { img: img("moveease/tasks", "My Tasks list grouped into address updates and utilities setup"), tag: "My Tasks", label: "Tasks grouped into address updates and utilities." },
            { img: img("moveease/calendar", "Calendar with deadlines marked for April"), tag: "Calendar", label: "Deadlines on a month view, listed below." },
          ]}
          caption="Hi-fi screens after testing."
        />
      </CaseSection>

      {/* 05 Testing */}
      <CaseSection id="testing" number="05" label="Testing" title="Two issues stood out.">
        <Prose>
          <p>
            Five participants tested the core flows: finding the next task, creating a task, assigning it to a partner, and
            checking deadlines.
          </p>
        </Prose>
        <Stats
          items={[
            { value: "5", label: "participants" },
            { value: "5", label: "task flows" },
            { value: "2", label: "priority fixes" },
            { value: "3/5", label: "stumbled on each issue" },
          ]}
        />
        <SubHeading>1. The plus button caused hesitation.</SubHeading>
        <Prose>
          <p>3 of 5 participants looked for a text label before tapping the floating plus.</p>
        </Prose>
        <BeforeAfter
          before={{ img: img("moveease/tasks-before", "My Tasks with an icon-only floating plus button"), label: "Icon-only floating plus." }}
          after={{ img: img("moveease/tasks", "My Tasks with a labeled New Task pill button"), label: "A labeled “+ New Task” pill." }}
        />
        <SubHeading>2. The edit icon was missed.</SubHeading>
        <Prose>
          <p>3 of 5 participants expected the whole row to be tappable, not a small pencil icon.</p>
        </Prose>
        <BeforeAfter
          before={{ img: img("moveease/detail-before", "Task Detail with a small pencil icon to change who the task is assigned to"), label: "A small pencil to reassign the task." }}
          after={{ img: img("moveease/detail-after", "Task Detail with a Change label on a fully tappable assignment row"), label: "A “Change” label, and the whole row is tappable." }}
        />
      </CaseSection>

      {/* 06 Reflection */}
      <CaseSection id="reflection" number="06" label="Reflection" title="Lessons from the first build." tone="white">
        <CardGrid
          columns={3}
          items={[
            {
              eyebrow: "What worked",
              title: "Fewer places to look",
              body: (
                <ul className="list-disc space-y-2 pl-4">
                  <li>A single dashboard entry point made navigation much easier.</li>
                  <li>Two task categories reduced cognitive load.</li>
                </ul>
              ),
            },
            {
              eyebrow: "What I'd do differently",
              title: "Decide earlier",
              body: (
                <ul className="list-disc space-y-2 pl-4">
                  <li>Lock the color palette before designing hi-fi screens.</li>
                  <li>Validate navigation earlier with users.</li>
                </ul>
              ),
            },
            {
              eyebrow: "Next steps",
              title: "Test it for real",
              body: (
                <ul className="list-disc space-y-2 pl-4">
                  <li>Add completion animations.</li>
                  <li>Test the shared planning experience with real couples.</li>
                  <li>Test the product during an active move.</li>
                </ul>
              ),
            },
          ]}
        />
      </CaseSection>

      <Lesson>Icon-only buttons can fail under stress. Interfaces should explain themselves without assuming calm attention.</Lesson>

      <NextProject project={next} />
    </>
  );
}
