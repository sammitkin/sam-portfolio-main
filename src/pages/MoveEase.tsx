import { CaseStudyHero } from "../components/moveease/CaseStudyHero";
import { ProblemSection } from "../components/moveease/ProblemSection";
import { ResearchSection } from "../components/moveease/ResearchSection";
import { DesignDirectionSection } from "../components/moveease/DesignDirectionSection";
import { DesignSection } from "../components/moveease/DesignSection";
import { TestingSection } from "../components/moveease/TestingSection";
import { ReflectionSection } from "../components/moveease/ReflectionSection";
import { usePageMeta } from "../lib/usePageMeta";

export function MoveEase() {
  usePageMeta({
    title: "MoveEase Case Study — Sam Mitkin",
    description:
      "MoveEase: a mobile app that helps people handle the admin tasks after a move. Research, design and usability testing by Sam Mitkin.",
    path: "/moveease",
  });

  return (
    <>
      <CaseStudyHero />
      <ProblemSection />
      <ResearchSection />
      <DesignDirectionSection />
      <DesignSection />
      <TestingSection />
      <ReflectionSection />
    </>
  );
}
