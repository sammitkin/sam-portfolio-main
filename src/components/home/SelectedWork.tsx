import { Container } from "../layout/Container";
import { ComingSoonCard, WorkCard } from "./WorkCard";

export function SelectedWork() {
  return (
    <section id="work" className="bg-[#f5f4ef] py-24 sm:py-36">
      <Container>
        <p className="text-[12px] font-medium uppercase leading-[16px] tracking-[2.4px] text-[#cc6324]">Portfolio</p>
        <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-1.2px] text-[#1f1f1f] sm:text-[48px] sm:leading-[60px]">
          Selected Work
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <WorkCard />
          <ComingSoonCard />
          <ComingSoonCard />
        </div>
      </Container>
    </section>
  );
}
