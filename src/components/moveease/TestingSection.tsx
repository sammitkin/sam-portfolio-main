import testingImg from "@/assets/images/moveease-testing-v2.png";
import { Container } from "../layout/Container";
import { ChangeCard, FindingCard, SectionHeading, SectionLabel } from "./shared";

export function TestingSection() {
  return (
    <section className="bg-white py-20 sm:py-36">
      <Container>
        <SectionLabel>Testing &amp; Iteration</SectionLabel>
        <SectionHeading>Two issues stood out.</SectionHeading>

        <div className="mt-10 flex flex-col gap-3">
          <FindingCard number={1}>
            Three participants hesitated before finding the New Task button because it was icon-only.
          </FindingCard>
          <FindingCard number={2}>
            Three participants missed a small edit icon used to assign a task to a partner.
          </FindingCard>
        </div>

        <div className="mt-16 flex flex-col gap-6">
          <ChangeCard
            before={<p>New Task button — icon only, no label.</p>}
            after={
              <>
                <p>New Task button — labeled pill button.</p>
                <p>Clear affordance, instantly scannable.</p>
              </>
            }
          />
          <ChangeCard
            before={<p>Assignment interaction — small icon, easy to miss.</p>}
            after={<p>Assignment interaction — fully tappable row.</p>}
          />
        </div>

        <div className="mt-16 rounded-xl bg-[#f5f4f0] pt-5">
          <img
            src={testingImg}
            alt="Before and after comparison of the My Tasks and Task Detail screens showing the final UI refinements"
            className="aspect-[1079/360] w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}
