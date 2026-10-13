import {
  AtAGlance,
  BeforeAfter,
  CardGrid,
  CaseBody,
  CaseHero,
  CaseSection,
  Flow,
  Lesson,
  More,
  NextProject,
  Note,
  PhoneRow,
  Points,
  Prose,
  Stats,
  SubHeading,
  TwoUp,
  WideImage,
} from "../components/case/Case";
import { img } from "../data/caseImages";
import { projectBySlug } from "../data/projects";
import { usePageMeta } from "../lib/usePageMeta";

const project = projectBySlug("deals-hub");
const next = projectBySlug("moveease");
const cool = "bg-[#e3e8f0]";

const sections = [
  { id: "gap", label: "The gap" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "testing", label: "Testing" },
  { id: "reflection", label: "Reflection" },
];

export function DealsHub() {
  usePageMeta({ ...project.meta, path: project.path });

  return (
    <>
      <CaseHero
        project={project}
        intro={
          <p>
            BankAmeriDeals hides cash back offers in a web view, makes different offer types look the same, and buries
            total savings. Deals Hub brings finding, activating and tracking deals into the native app.
          </p>
        }
        note="Student concept. Not affiliated with or endorsed by Bank of America. Merchant names and logos belong to their owners. Balances shown are fictional."
        meta={[
          { label: "Role", value: "Solo UX/UI designer" },
          { label: "Timeline", value: "4 weeks, 75-hour budget, 2026" },
          { label: "Platform", value: "iOS" },
          { label: "Context", value: "Designlab UX Academy, Capstone 1: Add a Feature" },
          { label: "Tools", value: "Figma, FigJam" },
        ]}
      />

      <AtAGlance
        items={[
          { label: "Problem", body: "Deals live in a web view inside the native app. Offer types look identical until you tap one." },
          { label: "What I did", body: "Audited my own account, compared three banks, interviewed five users, tested mid-fi and hi-fi." },
          { label: "Outcome", body: "Round one: 1 of 5 couldn't tell which card a Local Deal needed. Round two: 5 of 5 found it." },
        ]}
      />

      <CaseBody sections={sections}>
        <CaseSection id="gap" number="01" label="The gap" title="A banking app I use every day.">
          <Prose>
            <p>I use the Bank of America app daily and kept hitting the same friction in its deals. So I explored it with my own account.</p>
          </Prose>
          <Points
            items={[
              { title: "It doesn't feel native", body: "Offers open in a web view with their own header and navigation." },
              { title: "Offer types look identical", body: "Nothing says what an offer needs from you before you tap in." },
              { title: "Savings are hidden", body: "Total cash back sits two taps deep." },
            ]}
          />
          <More>
            <p>
              Compared with American Express, Chase and Wells Fargo, weak discoverability turned out to be industry-wide.
              The missing native feel and inconsistent activation were specific to Bank of America.
            </p>
            <p>
              The project started as Rewards Hub. My mentor said that read like an enhancement, so we reframed it around
              the fragmentation. Then I found Bank of America already has BofA Rewards, so I renamed it Deals Hub. The
              research didn't change.
            </p>
            <Flow steps={["Rewards Hub", "Reframed around fragmentation", "Deals Hub"]} />
          </More>
        </CaseSection>

        <CaseSection id="research" number="02" label="Research" title="Five people, four patterns.">
          <Prose>
            <p>Five banking app users, from a barber who barely opens his offers to an entrepreneur who reads every term.</p>
          </Prose>
          <Points
            columns={2}
            items={[
              { title: "Discovery is contextual, not habitual" },
              { title: "Offer mechanics create uncertainty before action" },
              { title: "Status gaps force manual workarounds" },
              { title: "Users need different levels of control" },
            ]}
          />
          <CardGrid
            items={[
              {
                kicker: "The Quick Saver",
                title: "Marcus Chen, 29",
                body: <p>Event coordinator. Wants convenience.</p>,
                foot: "“I just want the discount to show up. I'm not going to hunt for it.”",
              },
              {
                kicker: "The Careful Optimizer",
                title: "Diane Whitfield, 52",
                body: <p>Business owner. Wants proof and control.</p>,
                foot: "“I don't trust the interface alone. If the app can't show me proof, I'll go find it myself.”",
              },
            ]}
          />
          <More>
            <p>
              A peer and my mentor reviewed the interview guide, and I rewrote leading and closed questions before the first
              session. Both personas are composites of the five interviews.
            </p>
          </More>
        </CaseSection>

        <CaseSection id="design" number="03" label="Design" title="Three offer types, one clear pattern.">
          <Prose>
            <p>
              Each offer type has its own action and accent color, so you know what will happen before you tap. The whole
              feature starts from the Accounts screen, rebuilt to match the live app.
            </p>
          </Prose>
          <PhoneRow
            tint={cool}
            items={[
              { img: img("deals/activate", "Starbucks offer with the eligible card and an Activate offer button"), tag: "Activate", label: "One tap adds it to the card." },
              { img: img("deals/shop", "Nike offer with a Shop online button that opens the default browser"), tag: "Shop online", label: "Says it opens your browser." },
              { img: img("deals/local", "Chevron Local Deal with the eligible card, map preview and View on Map"), tag: "Local Deal", label: "Map, expiry, how cash back applies." },
            ]}
          />
          <PhoneRow
            tint={cool}
            items={[
              { img: img("deals/entry", "Bank of America Accounts screen with a Deals Hub row"), tag: "Entry point", label: "On the Accounts screen." },
              { img: img("deals/explore", "Deals Hub Explore tab with cash back earned this year"), tag: "Explore", label: "Cash back earned comes first." },
              { img: img("deals/offers", "My Offers tracking each deal from Activated to Credited"), tag: "My Offers", label: "Activated → Credited, in view." },
            ]}
          />
          <More>
            <p>
              I kept all three mechanics in the mid-fi prototype, because one simplified offer wouldn't test the real
              confusion. For typography, I tested a font called Connections against screenshots of the live app; SF Pro was
              the closer match.
            </p>
            <WideImage img={img("deals/midfi-overview", "Mid-fi Deals Hub screens from the entry point to My Offers")} caption="The mid-fi prototype from round one." />
          </More>
        </CaseSection>

        <CaseSection id="testing" number="04" label="Testing" title="One card detail decided round two.">
          <Prose>
            <p>
              In round one, the eligible card worked on Starbucks but not on Chevron. One participant saw “eligible card”
              and couldn't tell which of his cards it meant. That became the top fix.
            </p>
          </Prose>
          <BeforeAfter
            tint={cool}
            before={{ img: img("deals/mid-chevron", "Mid-fi Chevron Local Deal that doesn't say which card is eligible"), label: "“Use your eligible card.” Which one?" }}
            after={{ img: img("deals/local", "Hi-fi Chevron Local Deal showing the exact eligible card"), label: "The exact card, on every offer type." }}
          />
          <Stats
            items={[
              { value: "1/5", label: "couldn't find the card in round one" },
              { value: "5/5", label: "found it on every offer type in round two" },
              { value: "5", label: "same participants in both rounds" },
              { value: "4", label: "small iterations after round two" },
            ]}
          />
          <SubHeading>A finished offer is a status, not a button</SubHeading>
          <Prose>
            <p>My mentor pointed out the activated state still looked pressable. It can't be undone, so it became a status.</p>
          </Prose>
          <BeforeAfter
            tint={cool}
            before={{ img: img("deals/activate", "Starbucks offer with an Activate offer button"), label: "One clear action." }}
            after={{ img: img("deals/activated", "Starbucks offer after activation, shown as a status"), label: "“5% cash back added to card.”" }}
          />
          <Note label="Open question">
            The “3–5 business days” on My Offers is a placeholder to validate against real product rules, not a researched
            number.
          </Note>
          <More label="The four iterations">
            <TwoUp
              left={{ label: "Discoverability", body: <ul><li>An icon next to Deals Hub on Accounts.</li><li>Shop online says it opens the browser.</li></ul> }}
              right={{ label: "Clarity", body: <ul><li>Local Deals explain that cash back applies automatically.</li><li>A pending-time estimate, as a concept.</li></ul> }}
            />
          </More>
        </CaseSection>

        <CaseSection id="reflection" number="05" label="Reflection" title="Same five people, measured twice.">
          <Prose>
            <p>
              Reusing participants let me see whether a specific fix worked. It also made round two easier for them, since
              they knew the structure. Both are true.
            </p>
          </Prose>
          <More label="Prototype and AI use">
            <p>
              The clickable Figma prototype covers entry, activation, redirect and tracking. The merchant redirect is an
              intentional dead end, documented as such.
            </p>
            <p>
              I used Claude to structure notes and check my writing for overclaiming, and an AI image tool for early hi-fi
              concepts. Every screen was rebuilt in Figma by hand.
            </p>
          </More>
        </CaseSection>
      </CaseBody>

      <Lesson>Testing the same people twice showed whether the fix worked, and what it couldn't prove.</Lesson>

      <NextProject project={next} />
    </>
  );
}
