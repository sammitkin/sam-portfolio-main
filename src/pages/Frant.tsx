import {
  AtAGlance,
  BeforeAfter,
  CardGrid,
  CaseBody,
  CaseHero,
  CaseSection,
  CompareTable,
  Flow,
  Lesson,
  More,
  NextProject,
  No,
  Note,
  PhoneRow,
  Points,
  Prose,
  Quote,
  Stats,
  SubHeading,
  TwoUp,
  WideImage,
  Yes,
} from "../components/case/Case";
import { img } from "../data/caseImages";
import { projectBySlug } from "../data/projects";
import { usePageMeta } from "../lib/usePageMeta";

const project = projectBySlug("frant");
const next = projectBySlug("deals-hub");
const warm = "bg-[#efe3d9]";

const sections = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "scope", label: "Scope" },
  { id: "lofi-test", label: "Lo-fi test" },
  { id: "hifi-test", label: "Hi-fi test" },
  { id: "iteration", label: "Iteration" },
  { id: "final", label: "Final product" },
  { id: "next", label: "What's next" },
];

export function Frant() {
  usePageMeta({ ...project.meta, path: project.path });

  return (
    <>
      <CaseHero
        project={project}
        intro={
          <p>
            I'm a working barber, so I started with a question from my own chair: why do regular clients slip away
            without anyone noticing in time? Frant helps barbers see who's overdue, why, and reach out in their own words.
          </p>
        }
        meta={[
          { label: "Role", value: "Solo UX/UI designer" },
          { label: "Timeline", value: "Sep 7 – Oct 11, 2026, about 100 hours" },
          { label: "Platform", value: "iOS, mobile first" },
          { label: "Context", value: "Designlab UX Academy capstone, not a client project" },
          { label: "Tools", value: "Figma, FigJam, Figma mobile app" },
        ]}
      />

      <AtAGlance
        items={[
          { label: "Problem", body: "Solo barbers keep each client's rhythm in their head, so they notice a regular is gone weeks too late." },
          { label: "What I did", body: "6 interviews, a competitor review, lo-fi and hi-fi prototypes, two rounds of testing with the same five barbers." },
          { label: "Outcome", body: "42 of 45 tasks done without a hint in round two. And a new risk: after texting, the job felt done." },
        ]}
      />

      <CaseBody sections={sections}>
        <CaseSection id="problem" number="01" label="Problem" title="Regulars were slipping away, and barbers only noticed by accident.">
          <Prose>
            <p>
              Six interviews: three solo barbers and stylists, two shop owners, one commission barber. Solo barbers knew
              each client's rhythm by heart, but nothing was written down. They noticed a missing regular late, and by
              accident.
            </p>
          </Prose>
          <Quote by="Mauri, solo barber">Honestly, just memory. I've been cutting him forever. There wasn't anything that told me.</Quote>
          <Points
            items={[
              { title: "They notice too late", body: "Mauri found out after about six weeks, on a slow day. Stacey, four months later." },
              { title: "They can't tell who comes first", body: "When several clients are late, there's no way to choose." },
              { title: "Reaching out feels pushy", body: "A text can feel pushy or desperate." },
            ]}
          />
          <More>
            <p>
              I grouped the notes into an affinity map with nine clusters. These three problems kept showing up together,
              and they were linked: a perfect list of overdue clients wouldn't help if the barber still felt awkward
              sending the text. So Frant had to help with noticing, choosing and reaching out.
            </p>
          </More>
        </CaseSection>

        <CaseSection id="research" number="02" label="Research" title="The gap wasn't more data. It was one clear next action.">
          <Prose>
            <p>
              Shop owners already had reports and rarely opened them. Competitors group lapsed clients, but none rank
              regulars by their own rhythm or say why one comes first.
            </p>
          </Prose>
          <Quote by="Jorge, shop owner">You can spend forever looking at reports. I don't need fifty things.</Quote>
          <CompareTable
            head={["", "For lapsed clients", "Ranks by each client's rhythm", "Explains why"]}
            rows={[
              ["SQUIRE", "Engage, Smart Rebooking. Lapsed clients shown as a count.", <No />, <No />],
              ["Booksy", "A “Slipping Away” client group.", <No />, <No />],
              ["Vagaro", "Client tags, AI promotion of open slots.", <No />, <No />],
              ["Frant", "A ranked list of overdue regulars.", <Yes />, <Yes />],
            ]}
            highlightLast
          />
          <More>
            <p>
              Cray had retention tools in SQUIRE but rarely opened them: “If somebody showed me one thing and said, ‘This
              needs attention today,’ maybe.” In my own SQUIRE account, 13 lapsed clients showed up as a number I couldn't
              open or sort.
            </p>
            <p>
              Owners had staff, tools and a different pain, so I focused on solo barbers. <strong>Andre Ruiz</strong>, my
              primary persona, combines Mauri, Liam and Stacey. <strong>Devon Price</strong>, a commission barber whose
              shop owns his client data, marks the MVP boundary. My first Devon draft implied Frant solved his problem, so
              I rewrote it with a clear limit.
            </p>
          </More>
        </CaseSection>

        <CaseSection id="scope" number="03" label="Scope" title="A retention layer, not another booking app.">
          <Prose>
            <p>One loop, everything else light. Booking, payments and a marketplace stayed out on purpose.</p>
          </Prose>
          <Flow steps={["See who's overdue", "Understand why", "Reach out", "Track the result"]} />
          <CardGrid
            columns={3}
            items={[
              { title: "Never sends on its own", body: <p>It opens iOS Messages with an editable draft. The barber presses Send.</p> },
              { title: "A visible rule, not AI", body: <p>Overdue means last visit plus usual rhythm has passed. The barber sets the rhythm.</p> },
              { title: "Smaller beat broader", body: <p>Inbox and Billing were cut in hi-fi. Three tabs stayed: Home, Clients, Schedule.</p> },
            ]}
          />
          <Quote by="Mauri, during the hi-fi test">I want it coming from me, not some app.</Quote>
          <More>
            <p>
              My first sitemap had three screens. My mentor said it was too narrow to read as a real product, so I added
              onboarding, client management, and Schedule, Inbox and Billing as light shells. In hi-fi I cut Inbox, which
              would copy the Messages app, and Billing, which pulled Frant toward a POS product. The promise got clearer.
            </p>
          </More>
        </CaseSection>

        <CaseSection id="lofi-test" number="04" label="Lo-fi test" title="A rank without a reason feels arbitrary.">
          <Prose>
            <p>
              14 lo-fi screens, tested in person on my iPhone. All five target users finished all six tasks; one task
              needed a hint. Three things changed.
            </p>
          </Prose>

          <SubHeading>1. Priority needed a reason</SubHeading>
          <Prose>
            <p>“Who to contact first” scored lowest, 4.0 out of 5. People saw a rank but not why Mike was first.</p>
          </Prose>
          <BeforeAfter
            tint={warm}
            before={{
              img: img("frant/lofi-overdue", "Lo-fi overdue list with numbered clients and no explanation of the order"),
              label: "A numbered list, no reason.",
            }}
            after={{
              img: img("frant/overdue", "Hi-fi overdue list with a sort label, late badges and a Why this order note"),
              label: "Sort label, late badges, and “Why this order?”",
            }}
          />
          <Quote by="Liam, solo hairstylist">I don't love the idea that the app decides who I should reach out to first.</Quote>

          <SubHeading>2. The message had to sound like the barber</SubHeading>
          <Prose>
            <p>All five would rewrite the default text. Sophia: it “sounds like I'm tracking him.”</p>
          </Prose>
          <TwoUp
            left={{ label: "Lo-fi draft", muted: true, body: <p>“Hey Mike, it's been a few weeks since your last cut — want me to grab you a spot this week?”</p> }}
            right={{ label: "Hi-fi draft", body: <p>“Hey Mike, got a couple openings this week if you're due for a cut. Want me to save you a spot?”</p> }}
          />

          <SubHeading>3. Names over numbers</SubHeading>
          <Prose>
            <p>Two Home layouts. Names first won, 3 to 2. The $240 “at risk” figure helped nobody decide, so it went.</p>
          </Prose>
          <BeforeAfter
            tint={warm}
            labels={["Numbers first · 2 votes", "Names first · 3 votes"]}
            before={{ img: img("frant/lofi-home-numbers", "Lo-fi Home option that leads with 3 clients overdue and $240 at risk"), label: "Big counts first." }}
            after={{ img: img("frant/lofi-home-names", "Lo-fi Home option that lists the clients who need attention by name"), label: "The people first." }}
          />
          <More>
            <p>
              I also found a flaw in my own test: Mike and James were tied in the test data, which made the order look
              random. I fixed it for round two. And “cadence” made three people pause, so it became “usually comes in
              every.”
            </p>
            <p>Mauri: “If I'm opening this because I'm slow, just show me the people. I don't need a dashboard.”</p>
          </More>
        </CaseSection>

        <CaseSection id="hifi-test" number="05" label="Hi-fi test" title="The interface worked. The job ended at Send.">
          <Prose>
            <p>Same five people, nine tasks, targets set before the test: 80% without a hint, ease 4.5.</p>
          </Prose>
          <Stats
            items={[
              { value: "42/45", label: "tasks without a hint (93%)" },
              { value: "4.6", label: "average ease out of 5" },
              { value: "4.0→4.8", label: "ease of choosing who's first" },
              { value: "0→4", label: "of 5 sent the draft with little or no edit" },
            ]}
          />
          <Prose>
            <p>
              But two tasks only reached the line: marking a client as contacted and logging a visit. People understood the
              buttons. Once the text was sent, the job just felt done. If barbers stop updating Frant, the list goes stale.
            </p>
          </Prose>
          <Quote by="Stacey, solo hairstylist">I already texted him. In my head I'm done.</Quote>
          <More label="See all results">
            <CompareTable
              head={["Task", "Round one", "Round two"]}
              rows={[
                ["Choose who to contact first", "Ease 4.0", "Ease 4.8"],
                ["Send the draft as is or with a small edit", "0 of 5", "4 of 5"],
                ["Set up and add a client alone", "4 of 5", "5 of 5"],
                ["Mark contacted without a prompt (new)", "Not tested", "3 of 5, at target"],
                ["Log a visit alone (new)", "Not tested", "4 of 5, at target"],
              ]}
            />
          </More>
        </CaseSection>

        <CaseSection id="iteration" number="06" label="Iteration" title="I redesigned the moments after the barber leaves the app.">
          <Prose>
            <p>Instead of more explanation on buttons, Frant asks the question at the moment it matters.</p>
          </Prose>
          <PhoneRow
            tint={warm}
            items={[
              { img: img("frant/sent-check", "Sheet asking Did you send it to Mike, with Yes, mark as contacted and Not yet"), tag: "Back from Messages", label: "“Did you send it to Mike?”" },
              { img: img("frant/visit-check", "Home on the booking day asking Did Mike come in, with Yes, log visit and No-show"), tag: "On the booking day", label: "“Did Mike come in?”" },
              { img: img("frant/visit-logged", "Client profile showing Visit logged, On track and the next expected visit"), tag: "After logging", label: "On track, next visit expected." },
            ]}
          />
          <Note label="Not validated">Designed after the last test. These are hypotheses for the next round.</Note>
          <More>
            <p>
              I added a Replied state between Contacted and Rebooked, because people judged outreach by a reply or a
              booking. And “Learns each client's rhythm” became “Tracks each client's rhythm”: Sophia pointed out she sets
              the rhythm herself.
            </p>
          </More>
        </CaseSection>

        <CaseSection id="final" number="07" label="Final product" title="22 screens, three flows, one loop.">
          <Flow steps={["Overdue", "Contacted", "Replied", "Rebooked", "Visit logged", "On track"]} />
          <PhoneRow
            tint={warm}
            items={[
              { img: img("frant/home", "Frant Home showing three regulars past their usual visit"), tag: "Home", label: "This week's overdue regulars." },
              { img: img("frant/message", "Message draft sheet with templates and an Open in Messages button"), tag: "Reach out", label: "A draft that opens in Messages." },
              { img: img("frant/schedule", "Schedule with an open slot that links to overdue regulars"), tag: "Schedule", label: "An open slot links to overdue regulars." },
            ]}
          />
          <SubHeading>A UI kit with one accent</SubHeading>
          <Prose>
            <p>
              17 color variables, 14 text styles, components for every state in the loop. Coral is kept for primary actions
              and priority only; buttons pass at 6.4:1.
            </p>
          </Prose>
          <WideImage img={img("frant/kit-status", "Frant UI kit status labels for each step of the retention loop")} />
          <More label="See the color system">
            <WideImage img={img("frant/kit-color", "Frant UI kit color page: brand, neutral and system colors with contrast ratios")} />
            <p>Some composite components were built after the hi-fi screens and aren't in every screen yet.</p>
          </More>
        </CaseSection>

        <CaseSection id="next" number="08" label="What's next" title="A usable screen is not the same as a used product.">
          <Prose>
            <p>
              Frant hasn't launched, so there are no retention results. In a native build, the iOS composer reports whether
              a text was sent, so Frant could mark contacts on its own.
            </p>
          </Prose>
          <TwoUp
            left={{
              label: "Limits",
              muted: true,
              body: (
                <ul>
                  <li>Same five testers both rounds, all from my coworking space.</li>
                  <li>15–20 minute sessions, so real habits were only discussed.</li>
                </ul>
              ),
            }}
            right={{
              label: "Next",
              body: (
                <ul>
                  <li>Test the check-ins over a real week of work.</li>
                  <li>Recruit barbers outside my coworking space.</li>
                  <li>Measure rebooks after outreach and check-in answer rate.</li>
                </ul>
              ),
            }}
          />
          <More label="Reflection and AI use">
            <p>
              Being a barber gave me access and a shared language, and a bias: I expected missing data. Two shop owners
              showed me the real problem was attention.
            </p>
            <p>
              I used ChatGPT and Claude to sort notes and review finished work. I ran every interview and test, checked
              claims against transcripts, rebuilt every screen in Figma, and made the product decisions.
            </p>
          </More>
        </CaseSection>
      </CaseBody>

      <Lesson>The hardest product problem was not on the screen. It started when the barber left the app.</Lesson>

      <NextProject project={next} />
    </>
  );
}
