import research1 from "@/assets/images/moveease-research-1.png";
import research2 from "@/assets/images/moveease-research-2.png";
import { Container } from "../layout/Container";
import { InsightCard, QuoteCard, SectionHeading, SectionLabel } from "./shared";

export function ResearchSection() {
  return (
    <section className="bg-[#f5f4ef] py-20 sm:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Research</SectionLabel>
            <SectionHeading>Two insights quickly became clear.</SectionHeading>
          </div>
          <p className="max-w-[420px] text-[16px] font-normal leading-[26px] text-[#3b4b59]">
            I interviewed four people who had recently moved or were preparing to move.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-4">
          <InsightCard number={1}>One person almost always carries the entire planning load alone.</InsightCard>
          <InsightCard number={2}>
            The real cost of a messy move isn't the move itself. It's the unexpected tasks that appear weeks later.
          </InsightCard>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <QuoteCard quote="I kept thinking I was done, and then another thing would come up." name="Victoria" />
          <QuoteCard quote="Everything got buried in Telegram." name="Ekaterina" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <img
            src={research1}
            alt="Research affinity mapping of interview notes"
            className="aspect-[527/474] w-full rounded-xl object-cover"
            loading="lazy"
          />
          <img
            src={research2}
            alt="Research affinity mapping grouped by theme"
            className="aspect-[527/474] w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}
