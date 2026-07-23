import designClarityImg from "@/assets/images/moveease-design-clarity.png";
import designFullImg from "@/assets/images/moveease-design-full.png";
import { Container } from "../layout/Container";
import { SectionHeading, SectionLabel } from "./shared";

export function DesignSection() {
  return (
    <section className="bg-[#f5f4ef] py-20 sm:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Design</SectionLabel>
            <SectionHeading>Built for clarity under stress.</SectionHeading>
          </div>
          <p className="max-w-[380px] text-[16px] font-normal leading-[26px] text-[#3b4b59]">
            I explored 10 lo-fi sketches before refining the final interface through multiple design iterations.
          </p>
        </div>

        <div className="mt-16 rounded-xl border border-[rgba(31,31,31,0.08)] bg-white p-[49px]">
          <p className="text-[16px] font-normal leading-[26px] text-[#3b4b59]">
            The interface was intentionally designed to reduce cognitive load. A near-white background keeps the
            experience calm, blue highlights primary actions, and green is reserved only for completed tasks. Every
            screen was designed to make the next step immediately clear.
          </p>
          <div className="mt-10 rounded-xl bg-[#f7f8f5] py-5">
            <img
              src={designClarityImg}
              alt="MoveEase app screens showing the calm, low-cognitive-load interface"
              className="aspect-[981/300] w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <img
          src={designFullImg}
          alt="Full set of MoveEase app screens"
          className="mt-6 aspect-[1079/360] w-full rounded-xl object-cover"
          loading="lazy"
        />
      </Container>
    </section>
  );
}
