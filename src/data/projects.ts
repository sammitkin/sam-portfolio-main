import frantHome from "@/assets/images/case/frant/home.webp";
import frantProfile from "@/assets/images/case/frant/profile.webp";
import frantMessage from "@/assets/images/case/frant/message.webp";
import dealsExplore from "@/assets/images/case/deals/explore.webp";
import dealsActivate from "@/assets/images/case/deals/activate.webp";
import dealsOffers from "@/assets/images/case/deals/offers.webp";
import moveDashboard from "@/assets/images/case/moveease/dashboard.webp";
import moveTasks from "@/assets/images/case/moveease/tasks.webp";
import moveCalendar from "@/assets/images/case/moveease/calendar.webp";

export type Screen = { src: string; alt: string; width: number; height: number };

export type Project = {
  slug: string;
  path: string;
  title: string;
  type: string;
  tagline: string;
  summary: string;
  note?: string;
  facts: { label: string; value: string }[];
  /** Left, center, right. The center screen is the hero. */
  screens: [Screen, Screen, Screen];
};

export const projects: Project[] = [
  {
    slug: "frant",
    path: "/frant",
    title: "Frant",
    type: "iOS app · End-to-end",
    tagline: "Helping independent barbers keep their regulars.",
    summary:
      "An iOS app that shows which regulars are past their usual visit, explains why, and drafts a message the barber sends from their own phone.",
    facts: [
      { label: "Role", value: "Solo UX/UI designer" },
      { label: "Context", value: "Designlab capstone · 5 weeks" },
      { label: "Research", value: "6 barber interviews" },
      { label: "Testing", value: "42 of 45 tasks done without a hint" },
    ],
    screens: [
      { src: frantHome, alt: "Frant home screen: three regulars are past their usual visit", width: 440, height: 956 },
      {
        src: frantProfile,
        alt: "Client profile explaining why Mike is on the list: he is about four weeks later than usual",
        width: 440,
        height: 956,
      },
      { src: frantMessage, alt: "Editable message draft that opens in the barber's own Messages app", width: 440, height: 956 },
    ],
  },
  {
    slug: "deals-hub",
    path: "/deals-hub",
    title: "Deals Hub",
    type: "iOS feature concept · Banking",
    tagline: "One clear, native place for bank cash back deals.",
    summary:
      "A feature concept for the Bank of America app that brings deals into one native screen, makes each deal's next step clear before the tap, and keeps earned cash back visible.",
    note: "Concept project. Not affiliated with Bank of America.",
    facts: [
      { label: "Role", value: "Solo UX/UI designer" },
      { label: "Context", value: "Designlab capstone · 4 weeks" },
      { label: "Research", value: "5 interviews, competitive analysis" },
      { label: "Testing", value: "5 of 5 found the eligible card in round 2" },
    ],
    screens: [
      { src: dealsActivate, alt: "Starbucks offer with the eligible card and an Activate offer button", width: 390, height: 844 },
      { src: dealsExplore, alt: "Deals Hub explore screen with cash back earned year to date", width: 388, height: 844 },
      { src: dealsOffers, alt: "My Offers screen tracking each deal from activated to credited", width: 388, height: 844 },
    ],
  },
  {
    slug: "moveease",
    path: "/moveease",
    title: "MoveEase",
    type: "iOS app · UX research + UI",
    tagline: "Staying ahead of the admin after a move.",
    summary:
      "A mobile app that helps people moving to a new home stay ahead of address updates, deadlines, and paperwork.",
    facts: [
      { label: "Role", value: "Solo UX/UI designer" },
      { label: "Context", value: "Designlab Phase 1 project" },
      { label: "Research", value: "4 interviews" },
      { label: "Testing", value: "5 participants, 2 priority fixes" },
    ],
    screens: [
      { src: moveTasks, alt: "My Tasks list grouped into address updates and utilities setup", width: 390, height: 844 },
      { src: moveDashboard, alt: "MoveEase dashboard showing the next task and 3 of 12 tasks done", width: 390, height: 844 },
      { src: moveCalendar, alt: "Calendar with upcoming deadlines for April", width: 390, height: 844 },
    ],
  },
];
