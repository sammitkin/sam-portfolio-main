import {
  CaseBody,
  CaseIntro,
  DecisionPanel,
  ExternalButton,
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
  Table,
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
const PROTOTYPE_URL =
  "https://www.figma.com/proto/bYIUhkfblHIR1kaMVnRbJg/Tasky-MVP-Prototype-%7C-DesignLab-Capstone?node-id=2290-7583&starting-point-node-id=2290-7583&scaling=scale-down";

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
        note="Team project with two other UX designers. I led research and synthesis, owned the worker flow (about 35 screens and states), and joined the three flows into one clickable prototype, then checked every path before the client review. My teammates owned the poster and staff flows. Shared with the client’s permission."
        link={{ href: PROTOTYPE_URL, label: "Try the prototype" }}
        meta={[
          ["Client", "PlanIt! Efficiency Solutions"],
          ["My role", "Research lead, worker flow owner"],
          ["Team", "3 UX designers"],
          ["Timeline", "5 weeks, Oct–Nov 2026"],
          ["Platform", "Android, mobile-first"],
          ["Client feedback", "5/5"],
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
              className="md:max-w-[560px]"
              img={img("tasky/affinity", "Affinity map with 10 clusters, from finding work and workers to profiles and reviews, followed by questions and assumptions to validate and the client’s decisions")}
              caption="The full affinity map: 10 clusters, then the questions to validate and the client’s decisions. Yellow notes are quotes, blue notes are observations. Click the map to zoom in."
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
              label="Worker journey map"
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
            </More>
          </Pad>
        </Section>

        {/* 3 Scope */}
        <Section id="scope" kicker="Scope" title="A big client vision, cut to a five-week MVP.">
          <Pad>
            <Prose className="mt-6">
              <p>
                The client’s vision was a full local work platform: verified profiles, GPS check-in, payment evidence,
                SMS, automatic trust scores, a business portal and a government dashboard. We had five weeks and three
                designers to deliver a clickable prototype, not a launched product.
              </p>
            </Prose>
            <SubHeading>How we decided what stayed</SubHeading>
            <Points
              items={[
                {
                  title: "The brief set the frame",
                  body: <p>One primary flow: a worker finds work, understands it and shows interest. Plus posting, choosing a worker, safety reports and light staff review. Payments, ID checks, GPS, messaging and matching were out.</p>,
                },
                {
                  title: "Each feature had to solve a research problem",
                  body: <p>Our priority list tied every feature to a problem from interviews: finding work, trust, safety, and local context like cash and landmark addresses.</p>,
                },
                {
                  title: "A smaller version over no version",
                  body: <p>When the need was real but the full feature was out of scope, we designed a simpler version the prototype could show.</p>,
                },
              ]}
            />
            <Prose className="mt-8">
              <p>
                My part came first. Before our team’s priority list, I compared the client’s pitch deck with the brief and
                proposed the split: follow the deck’s MVP direction, and keep verification, payments and business accounts
                in the backlog.
              </p>
            </Prose>
            <Table
              head={["The client asked for", "The need behind it", "What the MVP does instead, and why it’s enough"]}
              rows={[
                ["GPS check-in", "Confirm the right worker showed up, and record the start", "The worker taps “I have arrived” and enters a one-time code the poster gives them. Only the poster has the code, so a valid code means the right worker met the poster at the work."],
                ["ID and background checks", "Know which workers can be trusted", "Staff approve every post before it goes live, and badges show trust levels as visual states. That gives trust signals without building verification. How to check ID at sign-up is the client’s Phase 2 decision."],
                ["In-app payments", "Stop a poster from confirming the work alone or lowering the pay", "The poster pays in cash. The completion code appears only after the poster confirms the work is done and paid, so it proves both. With no code or no pay, the worker can still finish and report it to staff."],
                ["SMS alerts", "Keep both sides informed, including people with basic phones", "In-app alerts for interest, selection, approval and status changes, which the client agreed to for the MVP. SMS stays the strongest later option for basic phones."],
                ["Sending work straight to past workers", "Fill a job with workers the poster already knows", "The poster chooses from interested workers, with no ranking. Sending posts to past workers needs a new flow and matching, both outside the brief."],
                ["Automatic trust scores", "Reward reliable workers", "Two-way ratings on five qualities, hidden until both sides submit. Reputation builds from patterns, so one bad day doesn’t define someone, and staff can remove an unfair rating after review."],
                ["A desktop dashboard", "Give staff and businesses a view from a desk", "Mobile staff screens with queues for posts to approve, fees to confirm and reported issues. A business dashboard serves users we never interviewed, so it needs its own research first."],
                ["Contractor quotes", "Cover skilled jobs", "Level 1 work, with pay agreed before the work starts. Skilled and licensed work carries liability, and a quote after a site visit doesn’t fit a flow where pay is set first."],
              ]}
              caption="The brief excluded payments, ID checks, GPS, messaging and matching, so the question was how to meet each need without them. Everything in the left column went into the Phase 2 list in our handoff, along with in-app messaging (designed as a concept only) and the government dashboard."
            />
            <Prose className="mt-8">
              <p>
                We reviewed these decisions with the client on weekly calls and in written feedback, so nothing was cut by
                surprise. One decision went the other way: the posting fee was cut from our first priority list, then came
                back as a display-only screen once the client explained that the fee is paid outside the app.
              </p>
              <p>
                To keep three designers consistent, I built a sitemap and a conceptual data model. They gave us one
                shared set of statuses, such as In review, Live, Selected and Standby, before anyone drew a screen.
              </p>
            </Prose>
            <WideImage
              img={img("tasky/sitemap", "MVP sitemap with columns for start, worker, work poster, PlanIt staff and shared screens")}
              minWidth={760}
              label="MVP sitemap"
              caption="MVP sitemap for workers, posters and staff. Ideas for later are listed bottom right."
            />
            <More label="More on the data model">
              <WideImage
                img={img("tasky/datamodel", "Conceptual data model: user, worker and poster profiles, work post, interest, work session, rating, report, payment confirmation and receipt")}
                minWidth={760}
                label="Conceptual data model"
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
            <SubHeading>Mid-fi first, in grayscale.</SubHeading>
            <Prose className="mt-4">
              <p>
                I built the worker flow in grayscale mid-fi before moving to hi-fi. The order of facts on each post stayed. Two
                things changed: “I’m interested” became “I am interested,” once we dropped contractions with the client. And
                the finish step changed twice: a personal PIN in mid-fi, a completion code in hi-fi, then, after testing, a
                code the poster holds.
              </p>
            </Prose>
            <PhoneRow
              items={[
                { img: img("tasky/mid-find", "Mid-fi Find work list with three grayscale work cards showing pay, day and town"), tag: "Mid-fi, Find work", label: "Pay, day and town on every card from the start." },
                { img: img("tasky/mid-details", "Mid-fi Work details with Listen to the details, pay, when, how long and where, and an I'm interested button"), tag: "Mid-fi, Work details", label: "The same order of facts carried into hi-fi." },
                { img: img("tasky/mid-finish", "Mid-fi Finish work asking whether the worker got EC$40 in cash and for the worker's own 4-digit PIN"), tag: "Mid-fi, Finish work", label: "The worker’s own PIN, later replaced." },
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
        <Section id="testing" kicker="Key decision" title="Testing showed a confusing code. We made one simple rule.">
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
                The client wanted codes for security: neither side can confirm the work alone. So instead of removing them,
                we made them simple.
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
              We couldn’t recruit a worker for testing, so this rule was tested with posters and the client, not with
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
                  { img: img("tasky/old-finish", "Old Finish work screen asking Did you get EC$40 in cash and for the completion code"), tag: "Old finish work", label: "The code then had to be typed in here, from memory." },
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
            <ExternalButton href={PROTOTYPE_URL} label="Try the clickable prototype" className="mt-8" />
            <Quote size="l" by="Kara Morgan, Founder, COO and Lead Innovator, PlanIt! Efficiency Solutions · Riipen review, 5/5">
              Each team member contributed complementary skills and delivered a very impressive final product.
            </Quote>
            <Prose className="mt-6">
              <p>She rated the team 5 out of 5 for communication, creativity, critical thinking and professionalism.</p>
            </Prose>
          </Pad>
        </Section>

        {/* 7 My exploration */}
        <Section id="exploration" kicker="My exploration" title="A bolder visual direction I explored on my own.">
          <Pad>
            <Prose className="mt-6">
              <p>
                Alongside the team design, I explored a bolder direction: work photos, category colors and a stronger
                header. The team chose the simpler version for lower data use and readability, and the client never
                reviewed mine. So it stays an exploration and was not part of the final client handoff.
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
              caption="My exploration, not part of the final client handoff. The photos are sample images, AI-generated."
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
        to="/deals-hub"
        name="Deals Hub"
        color="bg-deals"
        line="Show the exact card before someone pays. 5 of 5 found it in round two."
      />
    </>
  );
}
