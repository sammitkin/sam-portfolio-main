import pages from "./pages.json";

export type Project = {
  slug: string;
  path: string;
  title: string;
  type: string;
  tagline: string;
  summary: string;
  note?: string;
  featured: boolean;
  facts: { label: string; value: string }[];
  /** Used for the page title, description and link preview. */
  meta: { title: string; description: string };
};

export const projects: Project[] = [
  {
    slug: "frant",
    path: "/frant",
    title: "Frant",
    type: "iOS app, end to end · Designlab capstone",
    tagline: "Helping independent barbers keep their regulars.",
    summary:
      "An iOS app that shows which regulars are past their usual visit, explains why, and drafts a message the barber sends from their own phone.",
    featured: true,
    facts: [
      { label: "Role", value: "Solo UX/UI designer" },
      { label: "Timeline", value: "5 weeks, 2026" },
      { label: "Research", value: "6 barber interviews" },
      { label: "Testing", value: "42 of 45 tasks done without a hint" },
    ],
    meta: pages["/frant"],
  },
  {
    slug: "deals-hub",
    path: "/deals-hub",
    title: "Deals Hub",
    type: "iOS feature concept · Designlab capstone",
    tagline: "One clear, native place for bank cash back deals.",
    summary:
      "A feature concept for the Bank of America app that brings deals into one native screen, makes each deal's next step clear before the tap, and keeps earned cash back visible.",
    note: "Concept project. Not affiliated with Bank of America.",
    featured: true,
    facts: [
      { label: "Role", value: "Solo UX/UI designer" },
      { label: "Timeline", value: "4 weeks, 2026" },
      { label: "Research", value: "5 interviews, competitive analysis" },
      { label: "Testing", value: "5 of 5 found the eligible card in round 2" },
    ],
    meta: pages["/deals-hub"],
  },
  {
    slug: "moveease",
    path: "/moveease",
    title: "MoveEase",
    type: "iOS app · Designlab Phase 1",
    tagline: "Staying ahead of the admin after a move.",
    summary:
      "A mobile app that helps people moving to a new home stay ahead of address updates, deadlines, and paperwork.",
    featured: false,
    facts: [
      { label: "Role", value: "Solo UX/UI designer" },
      { label: "Timeline", value: "4 months, 2026" },
      { label: "Research", value: "4 interviews" },
      { label: "Testing", value: "5 participants, 2 priority fixes" },
    ],
    meta: pages["/moveease"],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug)!;
