import { Container } from "../layout/Container";
import { ReflectionCard } from "./shared";

export function ReflectionSection() {
  return (
    <section className="bg-[#3b4b59] py-20 sm:py-36">
      <Container>
        <p className="text-[12px] font-medium uppercase leading-[16px] tracking-[2.4px] text-[#cc6324]">
          Reflection &amp; Next Steps
        </p>
        <h2 className="mt-4 text-[32px] font-bold leading-[1.2] tracking-[-1.2px] text-white sm:text-[48px] sm:leading-[60px]">
          Lessons from the first build.
        </h2>

        <div className="mt-16 rounded-xl border border-[rgba(204,99,36,0.3)] bg-[rgba(204,99,36,0.15)] p-[49px]">
          <p className="text-[11px] font-medium uppercase leading-[16.5px] tracking-[2px] text-[#cc6324]">
            Biggest Lesson
          </p>
          <h3 className="mt-4 text-[24px] font-bold leading-[1.35] tracking-[-0.5px] text-white sm:text-[28px] sm:leading-[38px]">
            Icon-only buttons can fail under stress.
          </h3>
          <p className="mt-3 max-w-[560px] text-[16px] font-normal leading-[26px] text-white/65">
            Interfaces should explain themselves without assuming calm attention.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ReflectionCard
            number={1}
            title="What worked"
            items={[
              "A single dashboard entry point made navigation much easier.",
              "Two task categories reduced cognitive load.",
            ]}
          />
          <ReflectionCard
            number={2}
            title="What I'd do differently"
            items={["Lock the color palette before designing hi-fi screens.", "Validate navigation earlier with users."]}
          />
          <ReflectionCard
            number={3}
            title="Next Steps"
            items={[
              "Add completion animations.",
              "Test the shared planning experience with real couples.",
              "Test the product during an active move.",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
