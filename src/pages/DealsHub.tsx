import {
  AtAGlance,
  BeforeAfter,
  CardGrid,
  CaseHero,
  CaseSection,
  Findings,
  Flow,
  Lesson,
  NextProject,
  Note,
  PhoneRow,
  Prose,
  Stats,
  SubHeading,
  TwoUp,
  WideImage,
} from "../components/case/Case";
import { img } from "../data/caseImages";
import { projects } from "../data/projects";
import { usePageMeta } from "../lib/usePageMeta";

const INDEX = 1;
const project = projects[INDEX];
const next = projects[INDEX + 1];

export function DealsHub() {
  usePageMeta({
    title: "Deals Hub Case Study — Sam Mitkin",
    description:
      "Deals Hub: a feature concept that brings Bank of America cash back deals into one native place. Five interviews and two rounds of usability testing.",
    path: "/deals-hub",
  });

  return (
    <>
      <CaseHero
        project={project}
        index={INDEX}
        intro={
          <p>
            BankAmeriDeals hides cash back offers in an embedded web view, makes different offer types look the same,
            and buries total savings. For a Designlab capstone, I designed Deals Hub: a native feature for finding,
            activating and tracking deals inside the Bank of America app.
          </p>
        }
        note="Student concept project. Not affiliated with or endorsed by Bank of America. Merchant names and logos belong to their owners. Account balances shown are fictional."
        meta={[
          { label: "Role", value: "Solo UX/UI designer" },
          { label: "Timeline", value: "4 weeks · 75-hour budget · 2026" },
          { label: "Platform", value: "iOS" },
          { label: "Context", value: "Designlab UX Academy, Capstone 1: Add a Feature" },
          { label: "Tools", value: "Figma, FigJam" },
        ]}
      />

      <AtAGlance
        items={[
          {
            label: "Problem",
            body: "Deals live in a web view inside the native app. Offer types look identical until you tap one, and total savings are hidden two taps deep.",
          },
          {
            label: "What I did",
            body: "Audited my own account, compared Amex, Chase and Wells Fargo, interviewed five banking app users, and tested a mid-fi and a branded hi-fi prototype.",
          },
          {
            label: "Outcome",
            body: "In round one, 1 of 5 couldn't tell which card a Local Deal needed. After the fix, 5 of 5 found the eligible card on every offer type.",
          },
        ]}
      />

      {/* 01 The gap */}
      <CaseSection id="gap" number="01" label="The gap" title="A real banking app I use every day.">
        <Prose>
          <p>
            I use the Bank of America app daily, with a checking account and two credit cards, and I kept running into
            the same friction in its BankAmeriDeals offers. I explored the feature with my own account and screenshotted
            the real screens as I went, instead of relying on app store reviews.
          </p>
        </Prose>
        <Findings
          items={[
            { title: "It doesn't feel native", body: "Offers open in an embedded web view with their own header and navigation." },
            { title: "Offer types look identical", body: "Nothing in the grid tells you what each offer needs you to do before you tap in." },
            { title: "Savings are hidden", body: "Total cash back sits two taps deep, in Earning History." },
          ]}
        />
        <Prose>
          <p>
            To ground this in more than personal frustration, I compared Bank of America with American Express, Chase
            and Wells Fargo on six criteria: discoverability, visible total savings, tracking of activated offers,
            consistent activation, catalog navigation and a native feel.
          </p>
        </Prose>
        <TwoUp
          left={{ label: "Shared across the industry", muted: true, body: <p>Weak discoverability.</p> }}
          right={{
            label: "Specific to Bank of America",
            body: <p>No native feel, and inconsistent activation patterns.</p>,
          }}
          caption="Competitive analysis against American Express, Chase and Wells Fargo."
        />

        <SubHeading>The name changed. The research didn't.</SubHeading>
        <Prose>
          <p>
            I started under the working name Rewards Hub. In week one, my mentor pointed out that it read like an
            enhancement, not a new feature, so we reframed the concept around fixing the fragmentation directly. Later I
            found that Bank of America already has BofA Rewards, an account tier program unrelated to merchant offers.
            To avoid confusion, I renamed the feature Deals Hub.
          </p>
        </Prose>
        <Flow steps={["Rewards Hub", "Reframed around fragmentation", "Deals Hub"]} />
      </CaseSection>

      {/* 02 Research */}
      <CaseSection id="research" number="02" label="Research" title="Five people, four patterns." tone="white">
        <Prose>
          <p>
            I interviewed five people who use banking apps with cash back or rewards, from a barber who barely opens his
            offers to an analytical entrepreneur who reads every term before acting. A peer and my mentor reviewed my
            interview guide, and I rewrote the leading and closed questions before the first session.
          </p>
          <p>I grouped the notes into an affinity map in FigJam, color coded by participant.</p>
        </Prose>
        <Findings
          columns={2}
          items={[
            { title: "Discovery is contextual, not habitual", body: "Engagement with offers depended on the moment, not on a routine." },
            { title: "Offer mechanics create uncertainty before action", body: "Different offer types left people unsure what would happen." },
            { title: "Status visibility gaps force manual workarounds" },
            { title: "Users need different levels of control" },
          ]}
        />
        <CardGrid
          items={[
            {
              eyebrow: "Persona · The Quick Saver",
              title: "Marcus Chen, 29",
              body: <p>Event coordinator. A casual, low-effort user who wants convenience.</p>,
              foot: "“I just want the discount to show up. I'm not going to hunt for it.”",
            },
            {
              eyebrow: "Persona · The Careful Optimizer",
              title: "Diane Whitfield, 52",
              body: <p>Independent business owner. An analytical user who wants proof and control.</p>,
              foot: "“I don't trust the interface alone. If the app can't show me proof, I'll go find it myself.”",
            },
          ]}
        />
        <Note label="Method">Both personas are composites built from the five interviews.</Note>
      </CaseSection>

      {/* 03 Design */}
      <CaseSection id="design" number="03" label="Design" title="Three offer types, one clear pattern.">
        <Prose>
          <p>
            I sketched two versions of the lo-fi flow, then built a clickable mid-fi prototype in Figma. I kept all three
            offer mechanics in it, Activate, Shop online and Local Deal, because a single simplified offer wouldn't test
            the real source of confusion.
          </p>
        </Prose>
        <WideImage
          img={img("deals/midfi-overview", "Mid-fi Deals Hub screens: entry point, Explore, Activate, Shop online, Local Deal and My Offers")}
          scroll={420}
          caption="The mid-fi prototype used in round one, from the Accounts entry point to My Offers."
        />

        <SubHeading>Making it feel native, not bolted on.</SubHeading>
        <Prose>
          <p>
            Before polishing any new screens, I rebuilt the Bank of America Accounts home screen at high fidelity, since
            it holds the entry point to Deals Hub. It took longer than any other screen. I also checked the typography
            instead of guessing: I tested a font called Connections, compared it with screenshots of the live app, and
            found SF Pro was the closer match.
          </p>
          <p>
            Each offer type got its own accent color, so people can recognize the mechanic before reading any text.
          </p>
        </Prose>
        <PhoneRow
          items={[
            {
              img: img("deals/entry", "Bank of America Accounts screen with a Deals Hub row under BofA Rewards"),
              tag: "Entry point",
              label: "Deals Hub sits on the Accounts screen, next to BofA Rewards.",
            },
            {
              img: img("deals/explore", "Deals Hub Explore tab with cash back earned this year and featured deals"),
              tag: "Explore",
              label: "Cash back earned is the first thing you see. Each deal shows its action.",
            },
            {
              img: img("deals/offers", "My Offers tab tracking each deal from Activated to Credited"),
              tag: "My Offers",
              label: "Every activated deal shows where it is: Activated, Purchase detected, Pending, Credited.",
            },
          ]}
        />
        <PhoneRow
          items={[
            {
              img: img("deals/activate", "Starbucks offer with the eligible card and an Activate offer button"),
              tag: "Activate",
              label: "One tap adds the offer to the eligible card.",
            },
            {
              img: img("deals/shop", "Nike offer with a Shop online button and a note that it opens in the default browser"),
              tag: "Shop online",
              label: "Says up front that it opens in your browser.",
            },
            {
              img: img("deals/local", "Chevron Local Deal with the eligible card, a map preview and View on Map"),
              tag: "Local Deal",
              label: "Map, expiry and how cash back is applied in store.",
            },
          ]}
          caption="The three offer mechanics in hi-fi. Same structure, different action and accent color."
        />
      </CaseSection>

      {/* 04 Testing */}
      <CaseSection id="testing" number="04" label="Testing" title="One card detail decided the second round." tone="white">
        <Prose>
          <p>
            I ran round one on the mid-fi prototype with five participants. Each got specific tasks instead of open
            questions, so I could watch where they hesitated or guessed wrong.
          </p>
          <p>
            The clearest finding: the eligible card element I'd built for Activate offers like Starbucks didn't carry over
            to Local Deals like Chevron. One participant could see the words “eligible card” but couldn't tell which of
            his cards it meant. It blocked a real purchase decision, so it became the top priority for hi-fi.
          </p>
        </Prose>
        <BeforeAfter
          before={{
            img: img("deals/mid-chevron", "Mid-fi Chevron Local Deal that mentions an eligible card without saying which card"),
            label: "Mid-fi: “use your eligible card”, but which one?",
          }}
          after={{
            img: img("deals/local", "Hi-fi Chevron Local Deal with an Eligible card row showing the exact card"),
            label: "Hi-fi: the exact card, on every offer type.",
          }}
        />
        <Stats
          items={[
            { value: "1/5", label: "couldn't identify the card for a Local Deal in round one" },
            { value: "5/5", label: "found the eligible card on every offer type in round two" },
            { value: "5", label: "same participants in both rounds" },
            { value: "4", label: "targeted iterations after round two" },
          ]}
        />
        <Prose>
          <p>
            Round two used the same five participants on the branded hi-fi prototype, so I could compare reactions
            directly. Everyone, including the participant who struggled with Chevron, found the right card on all three
            offer types. Reusing people likely made round two easier for them, since
            they already knew the structure.
          </p>
        </Prose>

        <SubHeading>A finished offer should read as a status, not a button.</SubHeading>
        <Prose>
          <p>
            When I walked my mentor through the prototype, he pointed out that the activated state still looked
            pressable. A completed offer can't be undone, so I turned it into a status.
          </p>
        </Prose>
        <BeforeAfter
          before={{ img: img("deals/activate", "Starbucks offer before activation, with an Activate offer button"), label: "Before activation: one clear action." }}
          after={{
            img: img("deals/activated", "Starbucks offer after activation, showing 5% cash back added to card as a status"),
            label: "After: “5% cash back added to card”, shown as a status.",
          }}
        />

        <SubHeading>Four small iterations after round two.</SubHeading>
        <Findings
          columns={2}
          items={[
            { title: "Entry point icon", body: "A small icon next to Deals Hub on the Accounts screen, for discoverability." },
            { title: "Purchase detection copy", body: "Local Deals explain that cash back is applied automatically with the eligible card." },
            { title: "Browser behavior", body: "Shop online offers say they open in the default browser." },
            { title: "Processing time guidance", body: "A pending estimate on the tracking screen, as a concept to validate." },
          ]}
        />
        <Note label="Open question">
          How long a pending reward takes to process is still unknown. The “3–5 business days” on the My Offers screen is a
          placeholder to validate against real product rules, not a researched number.
        </Note>
      </CaseSection>

      {/* 05 Reflection */}
      <CaseSection id="reflection" number="05" label="Reflection" title="Same five people, measured twice.">
        <Prose>
          <p>
            I connected every key screen into one clickable Figma prototype, from the entry point through activation,
            redirect and tracking. A few interactions, like the merchant redirect, are intentional dead ends because in a
            real product they leave the app. I documented them so they wouldn't read as errors.
          </p>
          <p>
            Reusing the same five participants across research and both test rounds let me measure whether a specific
            change worked, instead of guessing from fresh reactions each time. The cost is familiarity bias, which I name
            rather than ignore.
          </p>
        </Prose>

        <SubHeading>How I used AI</SubHeading>
        <Prose>
          <p>
            I used Claude to structure interview notes and to check my writing for overclaiming. It caught places where I
            had generalized one participant's comment as if it applied to everyone. I used an AI image tool for early
            hi-fi concepts, then rebuilt every screen in Figma by hand. The research findings and design decisions were
            mine.
          </p>
        </Prose>
      </CaseSection>

      <Lesson>Testing the same people twice told me whether the fix worked. It also told me what it couldn't prove.</Lesson>

      <NextProject project={next} />
    </>
  );
}
