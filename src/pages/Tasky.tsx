import {
  CaseBody,
  CaseIntro,
  Chips,
  DecisionPanel,
  Flow,
  Glance,
  Lesson,
  Metrics,
  MobileIndex,
  More,
  NextCase,
  Note,
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
  { id: "problem", label: "The problem" },
  { id: "research", label: "Research" },
  { id: "scope", label: "Scope" },
  { id: "flow", label: "Worker flow" },
  { id: "testing", label: "Key decision" },
  { id: "handoff", label: "Handoff" },
  { id: "exploration", label: "My exploration" },
  { id: "reflection", label: "Reflection" },
];
const IDS = SECTIONS.map((s) => s.id);

export function Tasky() {
  usePageMeta({
    title: "Tasky Case Study — Sam Mitkin",
    description:
      "Tasky: a client project for PlanIt! Efficiency Solutions. A mobile-first app for finding short-term local work in small towns where pay is in cash and homes have no street numbers.",
    path: "/tasky",
  });
  const active = useActiveSection(IDS);

  return (
    <>
      <MobileIndex sections={SECTIONS} active={active} />

      <CaseIntro
        name="Tasky"
        dot="bg-tasky"
        kicker="Tasky, a client project for PlanIt! Efficiency Solutions"
        title="Finding local work people can trust."
        note="Team project with two other UX designers. I led research and synthesis, owned the worker flow (about 35 screens and states), and joined and tested our clickable prototype. My teammates owned the poster and staff flows. Shared with the client’s permission."
        meta={[
          ["Client", "PlanIt! Efficiency Solutions"],
          ["My role", "Research lead, worker flow owner"],
          ["Team", "3 UX designers"],
          ["Timeline", "5 weeks, Oct–Nov 2026"],
          ["Platform", "Android, mobile-first"],
          ["Outcome", "Client rated it 5/5"],
        ]}
      />

      <ProductBand
        label="Tasky worker screens"
        bg="bg-tasky"
        screens={[
          img("tasky/find", "Find work list with three work posts near the worker, each with pay and date"),
          img("tasky/details", "Work details for Clear a backyard: pay, date, how long and the town, with an I am interested button"),
          img("tasky/paid", "You were paid EC$40 receipt with times and a Rate the poster button"),
        ]}
      />

      <Glance
        items={[
          {
            label: "Problem",
            body: "Local work travels by word of mouth, pay is in cash and homes have no street numbers. Workers risk not being paid, and people who post work struggle to find someone they trust.",
          },
          {
            label: "What I did",
            body: "Led research and synthesis, owned the worker flow from finding work to getting paid, and joined three flows into one clickable prototype.",
          },
          {
            label: "Found in testing",
            kind: "tested",
            body: "Our first completion code confused people. One tester called it “tedious.” We kept the codes and made one simple rule: the poster holds them.",
          },
          {
            label: "Open question, to validate",
            kind: "hypothesis",
            body: "No real worker tested the worker flow. The code rule and the location reveal still need testing with 3 to 5 workers.",
          },
        ]}
      />

      <CaseBody sections={SECTIONS} active={active}>
        {/* 1 The problem */}
        <Section id="problem" kicker="The problem" title="Local work runs on trust, cash and word of mouth.">
          <Pad>
            <Prose className="mt-6">
              <p>
                Tasky is for adults aged 18 to 65 in small towns of a small island nation in the Eastern Caribbean.
                According to the client, towns are about two miles long, and people say that if you don’t know someone,
                you know of them. The work is short and practical: clearing a yard, packing shop shelves, helping at an
                event or looking after animals.
              </p>
              <p>
                Today this work moves through friends, Facebook posts and WhatsApp. That works if you are well connected,
                and it leaves everyone else out. Three facts shaped the whole project.
              </p>
            </Prose>
            <Points
              items={[
                { title: "Cash", body: "Most people are paid in cash and many don’t use banks. One worker had been left unpaid several times." },
                { title: "No street numbers", body: "People give directions by landmarks, like “the blue house near the school.”" },
                { title: "Expensive data", body: "Most people have an Android phone but a small data plan, so screens must load fast and work text first." },
              ]}
            />
            <Note label="The challenge">
              How might we help workers find, understand and safely complete local work, and get paid, in a community that
              runs on trust, cash and word of mouth?
            </Note>
            <More label="More on the client and the brief">
              <Prose>
                <p>
                  Our client, PlanIt! Efficiency Solutions, didn’t want another job board. They wanted a trusted local work
                  system, where a local business center reviews every post, holds both sides accountable and steps in when
                  something goes wrong.
                </p>
                <p>
                  The project ran for five weeks, from October 5 to November 6, 2026, through Designlab and Riipen. We met
                  the client every week and confirmed decisions with her as we went.
                </p>
              </Prose>
              <Note label="Tools">Figma, FigJam, Google Docs and Sheets, WhatsApp.</Note>
            </More>
          </Pad>
        </Section>

        {/* 2 Research */}
        <Section id="research" kicker="Research" title="The problem was finding people, not a lack of them.">
          <Pad>
            <Metrics
              size="m"
              items={[
                { value: "5", label: "interviews" },
                { value: "3", label: "workers" },
                { value: "2", label: "people who post work" },
                { value: "10", label: "clusters in the affinity map" },
              ]}
            />
            <Prose className="mt-8">
              <p>
                Our team ran five interviews. I synthesized them in an affinity map with 10 clusters, and I kept the
                client’s input in a separate color, so we could see what users said versus what we were told.
              </p>
              <p>
                The pattern was clear: people do want to hire and to work. The hard part is finding someone you can trust,
                agreeing on clear terms and making sure the pay arrives.
              </p>
            </Prose>
            <Quote by="Person who posts work, interview">There’s no platform, there’s no place for informal work.</Quote>
            <WideImage
              img={img("tasky/affinity-1", "Affinity map, clusters 1 to 5: finding work and workers, trust, clear expectations, communication and reliability")}
              caption="Affinity map, clusters 1 to 5 of 10. Yellow notes are quotes, blue notes are observations, and each cluster ends with an insight and a possible opportunity."
            />

            <SubHeading>Mapping the work day showed where trust breaks: outside the app.</SubHeading>
            <Prose className="mt-4">
              <p>
                I built journey maps for workers and for posters, comparing today with the future state. Every note is
                tagged by source: research, client or hypothesis. The riskiest moments happen away from the screen.
              </p>
            </Prose>
            <Points
              items={[
                { title: "Arriving", body: "Without street numbers, how does a worker find the place, and how does the poster know they came?" },
                { title: "Finishing", body: "Who decides the work is done, and what proves it?" },
                { title: "Getting paid", body: "What happens when the cash doesn’t arrive?" },
              ]}
            />
            <WideImage
              img={img("tasky/journey", "Worker journey map in eight stages, from Discover to Paid and rated, with rows for today, actions, thoughts, emotions, pain points and opportunities")}
              minWidth={760}
              caption="Worker journey map. These moments became our core design ideas: an arrival code, a completion code, a location shown only after selection, and a simple way to report a problem."
            />
            <More label="More on the research">
              <SubHeading>Market and competitive scan</SubHeading>
              <Prose className="mt-4">
                <p>
                  I reviewed gig platforms and local channels to see what fails in low-tech, cash-based places. Most apps
                  assume card payments, street addresses and strangers who rely on star ratings. None of that fits a town
                  where trust is personal.
                </p>
              </Prose>
              <SubHeading>An interview guide in two versions</SubHeading>
              <Prose className="mt-4">
                <p>
                  I wrote a full call script and a short WhatsApp version, because many participants preferred to answer
                  by text. The client reviewed the guide, and we used her wording, such as “work” instead of “task.”
                </p>
              </Prose>
              <WideImage
                img={img("tasky/affinity-2", "Affinity map, clusters 6 to 10: proof that the job is done, payments, transportation and location, safety and risk, and profiles and reviews")}
                caption="Affinity map, clusters 6 to 10."
              />
            </More>
          </Pad>
        </Section>

        {/* 3 Scope */}
        <Section id="scope" kicker="Scope" title="A big client vision, cut to a five-week MVP.">
          <Pad>
            <Prose className="mt-6">
              <p>
                After our first calls, the client shared a full product vision. It was a strong vision, and much bigger
                than five weeks.
              </p>
            </Prose>
            <Chips
              label="Moved to Phase 2"
              items={["ID checks", "GPS check-in", "SMS alerts", "In-app payments", "Trust scores", "Government dashboards"]}
            />
            <Prose className="mt-6">
              <p>
                We agreed on one primary flow, a worker who finds work, understands it and shows interest, plus the flows
                that make it work: posting, choosing a worker, safety reports and light staff review. The rest went into a
                Phase 2 list. We confirmed decisions with the client every week, so nothing was cut by surprise.
              </p>
              <p>
                To keep three designers consistent, I built a sitemap and a conceptual data model. They gave us one
                shared set of statuses, such as In review, Live, Selected and Standby, before anyone drew a screen.
              </p>
            </Prose>
            <WideImage
              img={img("tasky/sitemap", "MVP sitemap with columns for start, worker, work poster, PlanIt staff and shared screens")}
              minWidth={760}
              caption="MVP sitemap for workers, posters and staff. Ideas for later are listed bottom right."
            />
            <More label="More on the data model">
              <WideImage
                img={img("tasky/datamodel", "Conceptual data model: user, worker and poster profiles, work post, interest, work session, rating, report, payment confirmation and receipt")}
                minWidth={760}
                caption="Conceptual data model. What Tasky keeps track of, and how each part connects. Conceptual only, not a database design."
              />
            </More>
          </Pad>
        </Section>

        {/* 4 Worker flow */}
        <Section id="flow" kicker="Worker flow" title="Designed for low data, mixed literacy and landmark addresses.">
          <Pad>
            <Prose className="mt-6">
              <p>I owned the worker flow, from the home screen to the receipt: about 35 screens and states.</p>
            </Prose>
            <Flow steps={["Find work", "Work details", "I am interested", "Selected", "Start work", "Finish work", "Paid"]} />
            <Points
              columns={2}
              items={[
                { title: "Decide before you commit", body: "Each post shows pay, date, hours and the town up front. “I am interested” sends a request, not a booking, because the poster chooses." },
                { title: "Words people already use", body: "With the client we chose “work” instead of “job” and removed contractions, since many users speak other languages." },
                { title: "Built for cheap phones", body: "Text and icons first, large tap targets, one fixed main button, and “Listen to the details” for people who prefer to listen." },
                { title: "Privacy for posters", body: "Workers see only the town. The exact place shows only to the chosen worker, 24 hours before the work." },
              ]}
            />
            <PhoneRow
              items={[
                { img: img("tasky/details", "Work details with Listen to the details, the poster’s rating, pay, date, how long and the town"), tag: "Work details", label: "Everything needed to decide, before any commitment." },
                { img: img("tasky/confirm", "Send your interest dialog explaining that the poster chooses and this is not a booking"), tag: "Confirm interest", label: "Says plainly that this is a request, not a booking." },
                { img: img("tasky/sent", "Interest sent with a Pending status and three numbered steps for what happens next"), tag: "Interest sent", label: "Every status has a word, a color and an icon, plus what happens next." },
              ]}
            />
            <More label="More on the work day screens">
              <PhoneRow
                items={[
                  { img: img("tasky/early", "You are selected, more than 24 hours before: the exact place is locked until Friday at 9 AM"), tag: "Selected, early", label: "The exact place stays locked until 24 hours before." },
                  { img: img("tasky/selected", "You are selected with the arrival code boxes, the landmark Blue house near the school and what to bring"), tag: "Selected", label: "The landmark appears, with what to bring." },
                  { img: img("tasky/start", "Start work with the arrival code entered and two checks: the place matches and I agree to do the work"), tag: "Start work", label: "The poster gives the arrival code in person." },
                ]}
              />
            </More>
          </Pad>
        </Section>

        {/* 5 Key decision */}
        <Section id="testing" kicker="Key decision" title="Testing turned a confusing code into one simple rule.">
          <DecisionPanel tint="bg-tasky-tint">
            <Prose>
              <p>
                We tested the hi-fi prototype in moderated video sessions. The client played a staff member, and two
                community members who post work ran the poster tasks. Posting and paying the fee went smoothly. One step
                didn’t: the completion code showed on one screen and was used on another, so people had to remember it.
              </p>
            </Prose>
            <PhoneRow
              items={[
                { img: img("tasky/old-finish", "Old Finish work screen asking the worker to enter a code shown on a different screen"), tag: "Before", label: "Enter a code shown on another screen." },
                { img: img("tasky/code", "New screen: Work complete, please ask the poster for the completion code, with Did not get a code"), tag: "After", label: "Ask the poster for the code, after the work is checked and paid." },
              ]}
            />
            <div className="mt-8 max-w-[44em] border-t-2 border-ink pt-4">
              <Evidence className="text-[14px] lg:text-[15px]">Found in moderated testing</Evidence>
              <p className="mt-2.5 text-[18px] font-bold leading-[1.4] lg:text-[20px]">
                The completion code confused people. One tester called it “tedious” because you had to remember it.
              </p>
            </div>
          </DecisionPanel>
          <Pad>
            <Prose className="mt-8">
              <p>
                The client wanted codes for security: they stop one side from confirming for the other and lowering the
                pay. So instead of removing them, we made them simple.
              </p>
            </Prose>
            <Points
              items={[
                { title: "The poster holds the codes", body: "They give each one to the worker in person." },
                { title: "The code comes last", body: "It appears only after the poster confirms the work is done and paid." },
                { title: "No code, no dead end", body: "“Did not get a code?” lets the worker finish anyway and sends the issue straight to staff." },
              ]}
            />
            <Note label="Open question, to validate" kind="hypothesis">
              We couldn’t recruit a worker for testing, so this rule is tested with posters and the client, not with
              workers. It’s the first thing I’d test next.
            </Note>
            <More label="More on what testing changed">
              <Prose>
                <p>
                  Other changes from testing and client feedback: “Choose” instead of “Select,” a shorter posting step, and
                  rating questions that name who is being rated.
                </p>
              </Prose>
              <SubHeading>The new end of the flow</SubHeading>
              <PhoneRow
                items={[
                  { img: img("tasky/active", "You have started the work, with Done when and three steps for how you get paid"), tag: "Active work", label: "How you get paid, in three steps, before the work ends." },
                  { img: img("tasky/code", "Work complete, please ask the poster for the completion code"), tag: "Completion code", label: "The poster gives the code after paying." },
                  { img: img("tasky/paid", "You were paid EC$40 receipt with times and a Rate the poster button"), tag: "Paid", label: "A receipt both sides confirmed." },
                ]}
              />
              <SubHeading>The old flow, before testing</SubHeading>
              <PhoneRow
                items={[
                  { img: img("tasky/old-current", "Old Current work screen showing the worker’s own completion code 5826"), tag: "Old current work", label: "The code showed here, while the work was in progress." },
                  { img: img("tasky/old-finish", "Old Finish work screen asking Did you get EC$40 in cash and for the completion code"), tag: "Old finish work", label: "And had to be typed in here, from memory." },
                ]}
              />
            </More>
          </Pad>
        </Section>

        {/* 6 Handoff */}
        <Section id="handoff" kicker="Handoff" title="A prototype and handoff ready for developers.">
          <Pad>
            <Prose className="mt-6">
              <p>
                Each designer owned a flow, so I joined all three into one clickable prototype with a start screen for the
                worker, poster and staff flows. Before the final review I checked every flow in Present mode. Automated
                checks said the links were fine, but clicking through found cut-off text above fixed buttons, cards that
                opened the wrong screen and a hidden home screen. I fixed them before the final client review.
              </p>
            </Prose>
            <Points
              items={[
                { label: "Delivered", title: "Figma file", body: "All screens marked ready for development." },
                { label: "Delivered", title: "UI kit", body: "Colors, type, icons and components." },
                { label: "Delivered", title: "Handoff doc", body: "Scope, design decisions, acceptance criteria, open questions and Phase 2 recommendations." },
              ]}
            />
            <Quote size="l" by="Client sponsor, PlanIt! Efficiency Solutions · rated the project 5/5">
              The final product, the Tasky app exceeded all of my expectation and I will gladly work with this team again.
            </Quote>
          </Pad>
        </Section>

        {/* 7 My exploration */}
        <Section id="exploration" kicker="My exploration" title="A bolder visual direction I explored on my own.">
          <Pad>
            <Prose className="mt-6">
              <p>
                Alongside the team design, I explored a bolder direction: work photos, category colors and a stronger
                header. The team chose the simpler version for lower data use and readability, and the client never
                reviewed mine. So it stays an exploration, not the shipped design.
              </p>
              <p>
                Looking back, it also slipped into a contraction, “I’m interested,” which we had ruled out with the client.
                A good reminder that visual polish can’t override decisions made with users.
              </p>
            </Prose>
            <PhoneRow
              items={[
                { img: img("tasky/v2-home", "Exploration: worker home with a dark teal header, a Find work card and work photos"), tag: "Worker home", label: "Photos answer “what is this work” before any reading." },
                { img: img("tasky/v2-find", "Exploration: Find work with category chips and large work photos"), tag: "Find work", label: "Category colors make the list scannable." },
                { img: img("tasky/v2-details", "Exploration: work details with a large photo and the pay in a dark card"), tag: "Work details", label: "Pay and date in one block at the top." },
              ]}
              caption="My exploration, not shipped. The photos are sample images, AI-generated."
            />
          </Pad>
        </Section>

        {/* 8 Reflection */}
        <Section id="reflection" kicker="Reflection" title="What I learned, and what I’d do differently.">
          <Pad>
            <Points
              columns={2}
              items={[
                { title: "Design for the experience outside the app", body: "Cash, landmarks and face-to-face moments shaped the screens more than any UI pattern did." },
                { title: "Security and simplicity can work together", body: "We kept the client’s codes and made the rule easy to follow." },
                { title: "Check a prototype by using it", body: "Clicking through like a real user found problems that structure checks missed." },
                { title: "Be honest about limits", body: "We couldn’t recruit a worker for testing, so I documented it and recommended testing with 3 to 5 workers next." },
              ]}
            />
            <SubHeading>Next time</SubHeading>
            <Points
              columns={2}
              items={[
                { title: "Recruit from week one", body: "Start recruiting participants in the first week, with a backup channel. Client feedback isn’t usability testing." },
                { title: "Agree how the team decides", body: "At kickoff, agree who decides, who plays PM, and that we bring one direction to the client." },
              ]}
            />
            <Note label="Next steps" kind="hypothesis">
              Test the worker flow with real workers, pilot in one town, and decide with the client on messaging and
              identity checks.
            </Note>
          </Pad>
        </Section>
      </CaseBody>

      <Lesson>The riskiest moments happened away from the screen. That’s where the design had to start.</Lesson>

      <NextCase
        to="/frant"
        name="Frant"
        color="bg-frant"
        line="Helping independent barbers keep their regulars."
      />
    </>
  );
}
