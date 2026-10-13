import {
  AtAGlance,
  BeforeAfter,
  CardGrid,
  CaseBody,
  CaseHero,
  CaseSection,
  Lesson,
  More,
  NextProject,
  PhoneRow,
  Points,
  Prose,
  Quote,
  Stats,
  SubHeading,
  TwoUp,
  WideImage,
} from "../components/case/Case";
import { img } from "../data/caseImages";
import { projectBySlug } from "../data/projects";
import { usePageMeta } from "../lib/usePageMeta";

const project = projectBySlug("moveease");
const next = projectBySlug("frant");
const blue = "bg-[#e3eaf2]";
const institutions = ["DMV", "Bank", "Insurance", "Utilities", "Subscriptions", "Licenses", "USPS"];

const sections = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "testing", label: "Testing" },
  { id: "reflection", label: "Reflection" },
];

export function MoveEase() {
  usePageMeta({ ...project.meta, path: project.path });

  return (
    <>
      <CaseHero
        project={project}
        intro={
          <p>
            A mobile app that helps people moving to a new home stay ahead of address updates, deadlines, and paperwork.
            It surfaces hidden admin tasks in the right order, before deadlines hit.
          </p>
        }
        meta={[
          { label: "Role", value: "Solo UX/UI designer" },
          { label: "Duration", value: "4 months, 2026" },
          { label: "Platform", value: "iOS" },
          { label: "Context", value: "Designlab UX Academy, Phase 1" },
          { label: "Tools", value: "Figma, Google Meet" },
        ]}
      />

      <AtAGlance
        items={[
          { label: "Problem", body: "After a move, every institution has its own deadline and process. No master list, no order." },
          { label: "What I did", body: "Four interviews, a persona, information architecture, lo-fi to hi-fi, a test with five people." },
          { label: "Outcome", body: "Two priority fixes: a labeled New Task button and a fully tappable assignment row." },
        ]}
      />

      <CaseBody sections={sections}>
        <CaseSection id="problem" number="01" label="Problem" title="The real work starts after the truck leaves.">
          <Prose>
            <p>Each of these has its own deadline, process and penalty. There's no master list and no clear order.</p>
          </Prose>
          <ul className="mt-6 flex max-w-[640px] flex-wrap gap-2" aria-label="Institutions to update after a move">
            {institutions.map((name) => (
              <li key={name} className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#1f1f1f] shadow-[0_0_0_1px_rgba(31,31,31,0.12)]">
                {name}
              </li>
            ))}
          </ul>
          <Quote by="Victoria, moved within the same building">I kept thinking I was done, and then another thing would come up.</Quote>
        </CaseSection>

        <CaseSection id="research" number="02" label="Research" title="Four interviews, six findings.">
          <Points
            items={[
              { title: "Admin overload", body: "Too many institutions, no single source of truth." },
              { title: "No clear sequence", body: "People don't know what to do first." },
              { title: "Hidden deadlines", body: "Consequences show up only after a miss." },
              { title: "Coordination gap", body: "One partner carries the whole load." },
              { title: "Document chaos", body: "Email, paper and phone notes." },
              { title: "Constant stress", body: "Not knowing what's left." },
            ]}
          />
          <CardGrid
            items={[
              {
                kicker: "Primary persona",
                title: "Victoria, 29, tattoo artist",
                body: <p>Wants to finish every task without missing anything and always know what's next.</p>,
                foot: "“I just need someone to tell me what to do next.”",
              },
              {
                kicker: "How might we",
                title: "Help people moving homes stay ahead of address updates, deadlines, and paperwork?",
                body: <p>So nothing falls through the cracks.</p>,
              },
            ]}
          />
          <More label="The four interviews and scope">
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Victoria</strong>, local move, no system: “I had no idea how many places needed updating.”</li>
              <li><strong>Rodion</strong>, his wife built a spreadsheet: “My wife handled all of it. I just followed the list.”</li>
              <li><strong>Ekaterina</strong>, paid over budget, lost a deposit: “Everything got buried in Telegram.”</li>
              <li><strong>Alex</strong>, first solo move, missed a DMV deadline: “Nobody told me there was a deadline.”</li>
            </ul>
            <TwoUp
              left={{ label: "In scope", body: <ul><li>Tasks and deadline awareness</li><li>Hidden admin tasks, in order</li><li>A shared view for couples</li></ul> }}
              right={{ label: "Out of scope", muted: true, body: <ul><li>Budgeting, housing search</li><li>Emotional support</li><li>Long-distance logistics, movers</li></ul> }}
            />
          </More>
        </CaseSection>

        <CaseSection id="design" number="03" label="Design" title="One dashboard, three connected branches.">
          <Prose>
            <p>
              My first version had three entry points. Mentor feedback showed it was confusing, so the dashboard became the
              one entry: next task, closest deadline, progress. My Tasks, Calendar and Shared Plan branch from it.
            </p>
          </Prose>
          <PhoneRow
            tint={blue}
            items={[
              { img: img("moveease/dashboard", "MoveEase dashboard with the next task, progress and upcoming deadlines"), tag: "Dashboard", label: "Next task and deadlines first." },
              { img: img("moveease/tasks", "My Tasks grouped into address updates and utilities setup"), tag: "My Tasks", label: "Two categories, not one long list." },
              { img: img("moveease/calendar", "Calendar with deadlines marked for April"), tag: "Calendar", label: "Deadlines on a month view." },
            ]}
          />
          <More label="From sketches to mid-fi">
            <p>
              I sketched two variants of each core screen, picked one per screen, and connected them into the main flows.
              The visual system stayed calm: one blue, a near-white background, green only for completed tasks.
            </p>
            <WideImage img={img("moveease/lofi-overview", "Two lo-fi variants for each of five core screens")} caption="Ten lo-fi sketches, two per screen." />
            <WideImage img={img("moveease/midfi-flow", "Mid-fi screens connected into the main task flows")} caption="Mid-fi flow." />
          </More>
        </CaseSection>

        <CaseSection id="testing" number="04" label="Testing" title="Two issues stood out.">
          <Stats
            items={[
              { value: "5", label: "participants" },
              { value: "5", label: "task flows" },
              { value: "2", label: "priority fixes" },
              { value: "3/5", label: "stumbled on each issue" },
            ]}
          />
          <SubHeading>The plus button caused hesitation</SubHeading>
          <BeforeAfter
            tint={blue}
            before={{ img: img("moveease/tasks-before", "My Tasks with an icon-only floating plus button"), label: "Icon-only plus." }}
            after={{ img: img("moveease/tasks", "My Tasks with a labeled New Task pill button"), label: "A labeled “+ New Task”." }}
          />
          <SubHeading>The edit icon was missed</SubHeading>
          <BeforeAfter
            tint={blue}
            before={{ img: img("moveease/detail-before", "Task Detail with a small pencil icon to reassign the task"), label: "A small pencil." }}
            after={{ img: img("moveease/detail-after", "Task Detail with a Change label on a fully tappable row"), label: "“Change”, whole row tappable." }}
          />
        </CaseSection>

        <CaseSection id="reflection" number="05" label="Reflection" title="Lessons from the first build.">
          <TwoUp
            left={{ label: "What worked", body: <ul><li>One dashboard entry point made navigation easier.</li><li>Two task categories reduced cognitive load.</li></ul> }}
            right={{ label: "Next time", muted: true, body: <ul><li>Lock the color palette before hi-fi.</li><li>Validate navigation earlier.</li><li>Test with real couples, during an active move.</li></ul> }}
          />
        </CaseSection>
      </CaseBody>

      <Lesson>Icon-only buttons can fail under stress. Interfaces should explain themselves without assuming calm attention.</Lesson>

      <NextProject project={next} />
    </>
  );
}
