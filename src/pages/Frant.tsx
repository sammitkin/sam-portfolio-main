import {
  AtAGlance,
  BeforeAfter,
  CardGrid,
  CaseHero,
  CaseSection,
  CompareTable,
  Findings,
  Flow,
  Lesson,
  NextProject,
  No,
  Note,
  PhoneRow,
  Prose,
  Quote,
  Stats,
  SubHeading,
  TwoUp,
  WideImage,
  Yes,
} from "../components/case/Case";
import { img } from "../data/caseImages";
import { projects } from "../data/projects";
import { usePageMeta } from "../lib/usePageMeta";

const INDEX = 0;
const project = projects[INDEX];
const next = projects[INDEX + 1];

export function Frant() {
  usePageMeta({
    title: "Frant Case Study — Sam Mitkin",
    description:
      "Frant: an iOS app that helps independent barbers keep their regulars. Six interviews, two rounds of usability testing, a 22-screen prototype and UI kit.",
    path: "/frant",
  });

  return (
    <>
      <CaseHero
        project={project}
        index={INDEX}
        intro={
          <>
            <p>
              Frant is an iOS app that helps independent barbers notice when a regular is overdue, see why, and reach out
              in their own words. I'm a working barber, so I started with a question from my own chair: why do regular
              clients slip away without anyone noticing in time?
            </p>
          </>
        }
        meta={[
          { label: "Role", value: "Solo UX/UI designer" },
          { label: "Timeline", value: "Sep 7 – Oct 11, 2026 · about 100 hours" },
          { label: "Platform", value: "iOS, mobile first" },
          { label: "Context", value: "Designlab UX Academy capstone, not a client project" },
          { label: "Tools", value: "Figma, FigJam, Figma mobile app" },
        ]}
      />

      <AtAGlance
        items={[
          {
            label: "Problem",
            body: "Solo barbers keep each client's rhythm in their head. They notice a regular is gone weeks too late, can't tell who to contact first, and reaching out feels pushy.",
          },
          {
            label: "What I did",
            body: "Six interviews, a competitor review, a 14-screen lo-fi and a 22-screen hi-fi prototype, and two rounds of usability testing with the same five barbers and stylists.",
          },
          {
            label: "Outcome",
            body: "In round two, 42 of 45 task attempts were done without a hint, with an average ease of 4.6 out of 5. Testing also showed the real risk: after texting, the job felt done.",
          },
        ]}
      />

      {/* 01 Problem */}
      <CaseSection id="problem" number="01" label="Problem" title="Regulars were slipping away, and barbers only noticed by accident.">
        <Prose>
          <p>
            I interviewed six people: three solo barbers and hairstylists, two shop owners and one commission barber. I
            wasn't testing an idea yet. I wanted to see how they notice that a regular has gone quiet.
          </p>
          <p>
            The solo participants knew each client's rhythm by heart. Mauri knew one regular came every two or three
            weeks. Liam had a color client who came every four weeks for years. None of it was written down.
          </p>
          <p>
            Because the knowledge lived in memory, people noticed late and by accident. Mauri realized a regular was
            missing after about six weeks, while looking at a slow week. Stacey only noticed a client was gone when that
            client messaged her four months later.
          </p>
        </Prose>
        <Quote by="Mauri, solo barber">Honestly, just memory. I've been cutting him forever. There wasn't anything that told me.</Quote>
        <Prose>
          <p>
            I grouped the notes into an affinity map with nine clusters. Three problems kept showing up together, and
            they were linked: a perfect list of overdue clients wouldn't help if the barber still felt awkward sending
            the text. Frant had to help with noticing, choosing and reaching out.
          </p>
        </Prose>
        <Findings
          items={[
            { title: "Barbers notice too late", body: "Nothing tells them a regular is overdue. They find out on a slow day." },
            { title: "They can't tell who comes first", body: "When several clients are late, there's no way to decide who to contact." },
            { title: "Reaching out feels pushy", body: "Outreach can feel pushy or desperate, even to a regular." },
          ]}
        />
      </CaseSection>

      {/* 02 Research */}
      <CaseSection
        id="research"
        number="02"
        label="Research"
        title="The gap wasn't more data. It was one clear next action."
        tone="white"
      >
        <Prose>
          <p>
            The two shop owners challenged my first idea. Jorge already used Vagaro reports and sent filtered campaigns.
            His problem was too much information, not too little.
          </p>
        </Prose>
        <Quote by="Jorge, shop owner">You can spend forever looking at reports. I don't need fifty things.</Quote>
        <Quote by="Cray, shop owner">If somebody showed me one thing and said, ‘This needs attention today,’ maybe.</Quote>
        <Prose>
          <p>
            Next I compared SQUIRE, Booksy and Vagaro. All three already group lapsed clients in some way. In my own
            SQUIRE account, the client screen showed 13 lapsed clients as a number. I couldn't open that list or sort it
            by last visit.
          </p>
        </Prose>
        <CompareTable
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
        <Prose>
          <p>
            Owners had staff, tools and a different pain, so I focused on solo and independent barbers. My personas kept
            every later decision honest about who Frant is for, and who it isn't for.
          </p>
        </Prose>
        <CardGrid
          items={[
            {
              eyebrow: "Primary persona",
              title: "Andre Ruiz, solo barber",
              body: (
                <p>
                  A composite of Mauri, Liam and Stacey. He knows his regulars by heart, notices gaps late, and wants to
                  reach out without sounding like marketing.
                </p>
              ),
            },
            {
              eyebrow: "Secondary persona · MVP boundary",
              title: "Devon Price, commission barber",
              body: (
                <p>
                  Based on one commission barber. His real problem is that the shop owns his client data. Frant doesn't
                  solve that. My first draft implied it did, so I rewrote it with a clear scope limit.
                </p>
              ),
            },
          ]}
        />
      </CaseSection>

      {/* 03 Scope */}
      <CaseSection id="scope" number="03" label="Scope" title="A retention layer, not another booking app.">
        <Prose>
          <p>
            I designed one loop and kept everything else light. Frant finds regulars who are past their usual rhythm,
            explains why, helps the barber reach out and tracks what happens next.
          </p>
        </Prose>
        <Flow steps={["See who's overdue", "Understand why", "Reach out", "Track the result"]} loop caption="The one loop the MVP was built around." />
        <CardGrid
          columns={3}
          items={[
            {
              eyebrow: "Decision",
              title: "Frant never sends on its own",
              body: (
                <p>
                  It opens iOS Messages with an editable draft. The barber presses Send from his own number. An automatic
                  message would make outreach feel like marketing.
                </p>
              ),
            },
            {
              eyebrow: "Decision",
              title: "A visible rule over AI",
              body: (
                <p>
                  A client is overdue when last visit plus usual rhythm has passed. The barber sets that rhythm and can
                  change it. No black box.
                </p>
              ),
            },
            {
              eyebrow: "Decision",
              title: "Left out on purpose",
              body: (
                <p>
                  Booking, payments and a client marketplace. Booking apps already do those jobs, and competing would have
                  spread 100 hours thin.
                </p>
              ),
            },
          ]}
        />
        <Quote by="Mauri, during the hi-fi test">I want it coming from me, not some app.</Quote>

        <SubHeading>The scope grew first, then got smaller.</SubHeading>
        <Prose>
          <p>
            My first sitemap had only three screens. My mentor said it was too narrow to read as a real product, so I
            added client management and onboarding, plus Schedule, Inbox and Billing as light shells.
          </p>
          <p>
            In hi-fi I cut Inbox and Billing. Inbox would copy the Messages app barbers already use. Billing pulled Frant
            toward a booking and POS product. The product got smaller, and its promise got clearer.
          </p>
        </Prose>
        <CompareTable
          head={["Version", "What it covered", "Why it changed"]}
          rows={[
            ["Sitemap v1", "Three screens: the retention core only.", "Mentor feedback: too narrow to read as a real product."],
            [
              "Sitemap v2",
              "Added onboarding and client management. Schedule, Inbox and Billing as light shells.",
              "Showed a full product shell around the same core.",
            ],
            ["Hi-fi", "Three tabs: Home, Clients, Schedule.", "Cut Inbox and Billing. They pulled away from retention."],
          ]}
          highlightLast
        />
      </CaseSection>

      {/* 04 Lo-fi test */}
      <CaseSection
        id="lofi-test"
        number="04"
        label="Lo-fi test"
        title="Lo-fi testing showed that a rank without a reason feels arbitrary."
        tone="white"
      >
        <Prose>
          <p>
            I built a 14-screen lo-fi prototype in Figma and tested it in person on my iPhone. Each person did six tasks
            and thought aloud. The core flow worked: all five target users finished all six tasks, and only one task
            needed a hint. The reason box and the handoff to Messages needed no explanation.
          </p>
        </Prose>
        <Stats
          items={[
            { value: "14", label: "lo-fi screens" },
            { value: "5 + 1", label: "target users, plus one commission barber reported separately" },
            { value: "6", label: "tasks, think-aloud, in person" },
            { value: "1", label: "task needed a hint" },
          ]}
        />
        <WideImage
          img={img("frant/lofi-overview", "The 14 lo-fi screens of Frant, from onboarding to the native SMS composer")}
          scroll={340}
          caption="The 14-screen lo-fi prototype, from onboarding to the handoff to Messages."
        />

        <SubHeading>1. Priority needed a reason.</SubHeading>
        <Prose>
          <p>
            Choosing who to contact first scored lowest, 4.0 out of 5. Everyone read 1, 2 and 3 as a rank, but nobody
            knew why Mike was first. Mauri said he might text James first if James was a better client.
          </p>
        </Prose>
        <Quote by="Liam, solo hairstylist">I don't love the idea that the app decides who I should reach out to first.</Quote>
        <BeforeAfter
          before={{
            img: img("frant/lofi-overdue", "Lo-fi overdue list with numbered clients and no explanation of the order"),
            label: "Numbered list. No reason for the order.",
          }}
          after={{
            img: img("frant/overdue", "Hi-fi overdue list with a sort label, late badges and a Why this order note"),
            label: "Sort label, late badges and a “Why this order?” note that calls the order a suggestion.",
          }}
          caption="I also found a flaw in my own test: Mike and James were tied in the test data, which made the order look random. I fixed the data for round two."
        />

        <SubHeading>2. The message had to sound like the barber.</SubHeading>
        <Prose>
          <p>
            All five target users said they'd rewrite the default text. Sophia said it “sounds like I'm tracking him.”
            Liam said it felt like “I've been watching that you haven't come back.” The new draft is short, offers a spot
            this week and never mentions how long it's been. The barber can still edit every word.
          </p>
        </Prose>
        <TwoUp
          left={{
            label: "Lo-fi draft",
            muted: true,
            body: <p>“Hey Mike, it's been a few weeks since your last cut — want me to grab you a spot this week?”</p>,
          }}
          right={{
            label: "Hi-fi draft",
            body: <p>“Hey Mike, got a couple openings this week if you're due for a cut. Want me to save you a spot?”</p>,
          }}
          caption="From tracking to an easy offer."
        />

        <SubHeading>3. Names over numbers.</SubHeading>
        <Prose>
          <p>
            I tested two Home layouts. One led with numbers: 3 overdue clients and $240 at risk. The other showed names
            right away. Names won, 3 to 2. The $240 figure raised questions and helped nobody decide, so I removed it.
            The word “cadence” also made three people pause. It became “usually comes in every.”
          </p>
        </Prose>
        <PhoneRow
          items={[
            {
              img: img("frant/lofi-home-numbers", "Lo-fi Home option that leads with 3 clients overdue and $240 revenue at risk"),
              tag: "Numbers first · 2 votes",
              label: "Big counts: 3 clients overdue, $240 at risk.",
            },
            {
              img: img("frant/lofi-home-names", "Lo-fi Home option that lists the clients who need attention by name"),
              tag: "Names first · 3 votes",
              label: "The people who need attention, right away.",
            },
          ]}
          caption="The two Home options from the lo-fi test. In hi-fi, the $240 figure was removed."
        />
        <Quote by="Mauri, solo barber">If I'm opening this because I'm slow, just show me the people. I don't need a dashboard.</Quote>
      </CaseSection>

      {/* 05 Hi-fi test */}
      <CaseSection id="hifi-test" number="05" label="Hi-fi test" title="The interface worked. The job ended at Send.">
        <Prose>
          <p>
            On October 5 I tested the hi-fi prototype with the same five people, again on my iPhone. There were nine
            tasks, from sign up to deleting a client. Before the test I set a target for every task: 80% of attempts
            without a hint and an average ease of 4.5. All targets were met, though two only reached the minimum.
          </p>
        </Prose>
        <Stats
          items={[
            { value: "42/45", label: "attempts done without a hint (93%)" },
            { value: "4.6", label: "average ease out of 5 (target 4.5)" },
            { value: "5/5", label: "explained why Mike was first" },
            { value: "9", label: "tasks, sign up to delete" },
          ]}
        />
        <CompareTable
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
        <Prose>
          <p>
            Both asked the barber to update Frant after something had already happened outside the app. In task 5, two
            of five didn't think to mark Mike as contacted. Mauri figured the app would know. In task 7, Mauri and Stacey
            said they'd forget to log every visit by hand.
          </p>
          <p>
            This wasn't a usability bug. People understood the buttons. The risk was behavior: once the real action
            happened, the job felt finished. If barbers stop updating Frant, the list goes stale and the product loses
            its value.
          </p>
        </Prose>
        <Quote by="Stacey, solo hairstylist">I already texted him. In my head I'm done.</Quote>
      </CaseSection>

      {/* 06 Iteration */}
      <CaseSection
        id="iteration"
        number="06"
        label="Iteration"
        title="I redesigned the moments after the barber leaves the app."
        tone="white"
      >
        <Prose>
          <p>
            Instead of more explanation on the buttons, I moved the question to the moment the barber needs it. These
            changes came after the last test, so they're hypotheses for the next one.
          </p>
        </Prose>
        <PhoneRow
          items={[
            {
              img: img("frant/sent-check", "Sheet asking Did you send it to Mike, with Yes, mark as contacted and Not yet"),
              tag: "Back from Messages",
              label: "“Did you send it to Mike?” The sheet admits Frant can't see the Messages app.",
            },
            {
              img: img("frant/visit-check", "Home on the booking day asking Did Mike come in, with Yes, log visit and No-show"),
              tag: "On the booking day",
              label: "Home asks “Did Mike come in?” One tap logs the visit.",
            },
            {
              img: img("frant/visit-logged", "Client profile showing Visit logged, On track and the next expected visit"),
              tag: "After logging",
              label: "A clear result: On track, with the next expected visit. Stephanie expected this in testing.",
            },
          ]}
        />
        <Prose>
          <p>
            I also added a <strong>Replied</strong> state between Contacted and Rebooked, because in both rounds people
            judged outreach by a reply or a booking. And I changed one onboarding line: “Learns each client's rhythm”
            became “Tracks each client's rhythm.” Sophia pointed out that she sets the rhythm herself. Frant doesn't
            learn anything yet, so the old line promised too much.
          </p>
        </Prose>
        <Note label="Not validated">These changes were designed after the last round of testing and haven't been tested yet.</Note>
      </CaseSection>

      {/* 07 Final */}
      <CaseSection id="final" number="07" label="Final product" title="22 screens, three flows and one loop.">
        <Prose>
          <p>
            The final prototype covers the full journey from sign up to rebooking, the core retention flow, and the
            Saturday visit check. Navigation has three tabs. Home shows who needs attention this week. Clients holds the
            full list and the overdue view. Schedule stays light on purpose.
          </p>
        </Prose>
        <Flow steps={["Overdue", "Contacted", "Replied", "Rebooked", "Visit logged", "On track"]} caption="The retention loop, as six client states." />
        <PhoneRow
          items={[
            {
              img: img("frant/home", "Frant Home showing three regulars past their usual visit"),
              tag: "Home",
              label: "This week's overdue regulars, names first.",
            },
            {
              img: img("frant/message", "Message draft sheet with templates and an Open in Messages button"),
              tag: "Reach out",
              label: "An editable draft that opens in iOS Messages.",
            },
            {
              img: img("frant/schedule", "Schedule with today's appointments and an open slot that links to overdue regulars"),
              tag: "Schedule",
              label: "A trigger, not a calendar: an open slot links to overdue regulars.",
            },
          ]}
          caption="All five testers used the open slot. Most said they wouldn't keep a second calendar unless it synced with theirs, so Schedule stays light."
        />

        <SubHeading>A UI kit for the final visual language.</SubHeading>
        <Prose>
          <p>
            The kit has 17 color variables, 14 text styles and components for buttons, inputs, status chips, client
            rows, navigation and feedback. Coral is the brand color, so it was easy to overuse. After a mentor review I
            kept it for primary actions and priority signals only. Coral buttons use black labels at 6.4:1, and colored
            text uses a deeper coral at 5.2:1.
          </p>
        </Prose>
        <WideImage img={img("frant/kit-color", "Frant UI kit color page: brand, neutral and system colors with contrast ratios")} />
        <WideImage
          img={img("frant/kit-status", "Frant UI kit status labels for each step of the retention loop")}
          caption="Status labels mark each step of the retention loop. Some composite components were built after the hi-fi screens and aren't in every screen yet."
        />
      </CaseSection>

      {/* 08 Next */}
      <CaseSection
        id="next"
        number="08"
        label="What's next"
        title="A usable screen is not the same as a used product."
        tone="white"
      >
        <Prose>
          <p>
            Manual tracking is still the biggest risk. In a native build, the iOS message composer reports whether a text
            was sent, so Frant could mark a client as contacted on its own. Calendar sync could log visits the same way.
          </p>
          <p>
            Frant hasn't launched, so I have no retention or revenue results. After launch I'd measure two things: how
            many overdue clients rebook after outreach, and how often barbers answer the check-ins. The second number
            would show whether the loop survives real days at the chair.
          </p>
        </Prose>
        <TwoUp
          left={{
            label: "Limits of my testing",
            muted: true,
            body: (
              <ul>
                <li>The same five people took both rounds, all from my coworking space.</li>
                <li>That made comparison easy, but may have made them faster and kinder.</li>
                <li>Sessions lasted 15 to 20 minutes, so real habits could only be discussed.</li>
              </ul>
            ),
          }}
          right={{
            label: "Next steps",
            body: (
              <ul>
                <li>Test the check-ins over a real week of work.</li>
                <li>Recruit barbers outside my coworking space.</li>
                <li>Measure how often barbers answer the check-ins without a reminder.</li>
                <li>Explore Archive instead of Delete, and a suggested rhythm update the barber confirms.</li>
              </ul>
            ),
          }}
        />

        <SubHeading>Reflection</SubHeading>
        <Prose>
          <p>
            Being a barber helped: I had easy access to participants and spoke their language. It also gave me a bias. I
            expected the problem to be missing data. Two shop owners showed me that the real problem was attention.
          </p>
          <p>
            A smaller product was stronger than a broad one. Cutting Inbox and Billing made the retention promise
            clearer.
          </p>
        </Prose>

        <SubHeading>How I used AI</SubHeading>
        <Prose>
          <p>
            I used ChatGPT and Claude to sort transcripts into patterns, draft reports from my notes and review finished
            work. I ran every interview and test session myself, checked each claim against the transcripts, rebuilt
            every screen in Figma, and made the final product decisions. When the two tools disagreed, I went back to the
            source.
          </p>
        </Prose>
      </CaseSection>

      <Lesson>The hardest product problem was not on the screen. It started when the barber left the app.</Lesson>

      <NextProject project={next} />
    </>
  );
}
