import userflowImg from "@/assets/images/moveease-userflow.png";
import { Container } from "../layout/Container";
import { HighlightCard, SectionHeading, SectionLabel } from "./shared";

export function DesignDirectionSection() {
  return (
    <section className="bg-white py-20 sm:py-36">
      <Container>
        <SectionLabel>Design Direction</SectionLabel>
        <SectionHeading>From research to design principles.</SectionHeading>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <HighlightCard
            eyebrow="POV"
            heading={
              <p>People moving into a new home need a clear way to know what comes next, in what order, and by when.</p>
            }
            body={<p>Because the hardest part of moving isn't the boxes — it's the scattered deadlines with no clear sequence.</p>}
          />
          <HighlightCard
            eyebrow="HMW"
            heading={<p>How might we help people moving homes stay ahead of address updates, deadlines, and paperwork?</p>}
            body={<p>So people always know what to do next.</p>}
          />
        </div>

        <div className="mt-16 rounded-xl border border-[rgba(31,31,31,0.06)] bg-[#f5f4ef] p-[49px]">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-[48px]">
            <div className="w-full lg:w-[420px] lg:shrink-0">
              <p className="text-[11px] font-medium uppercase leading-[16.5px] tracking-[1.8px] text-[#cc6324]">
                User Flow Iteration
              </p>
              <h3 className="mt-4 text-[18px] font-semibold leading-[28px] text-[#1f1f1f]">
                One entry point, not three.
              </h3>
              <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#3b4b59]">
                My first version had three entry points. Mentor feedback showed this was confusing, so I redesigned
                it into one dashboard with three connected branches.
              </p>
            </div>
            <img
              src={userflowImg}
              alt="User flow diagram showing one dashboard entry point branching into three flows"
              className="aspect-[513/280] w-full rounded-xl object-cover lg:h-[280px] lg:w-[513px] lg:flex-none"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
