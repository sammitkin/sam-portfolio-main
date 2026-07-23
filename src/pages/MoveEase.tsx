import { CaseStudyHero } from "../components/moveease/CaseStudyHero";
import { ProblemSection } from "../components/moveease/ProblemSection";
import { ResearchSection } from "../components/moveease/ResearchSection";
import { DesignDirectionSection } from "../components/moveease/DesignDirectionSection";
import { DesignSection } from "../components/moveease/DesignSection";
import { TestingSection } from "../components/moveease/TestingSection";
import { ReflectionSection } from "../components/moveease/ReflectionSection";

export function MoveEase() {
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
