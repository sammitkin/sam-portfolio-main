import { Container } from "../layout/Container";
import { SectionHeading, SectionLabel } from "./shared";

export function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionLabel>The Problem</SectionLabel>
            <SectionHeading>Most people think moving means packing boxes.</SectionHeading>
          </div>
          <div className="flex flex-col gap-5 text-[16px] font-normal leading-[26px] text-[#3b4b59]">
            <p>Most people think moving ends when the boxes are unpacked. The real difficulty starts after the truck leaves.</p>
            <p>DMV, bank, insurance, utilities, subscriptions. Each has its own deadline and penalty for missing it.</p>
            <p>
              There is no master list and no clear order. Tasks show up for weeks after the move, and people don't
              know how many are coming until they're already behind.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
