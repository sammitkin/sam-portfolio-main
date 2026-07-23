import heroImg from "@/assets/images/moveease-hero.png";
import { Container } from "../layout/Container";
import { MetaCard, SectionLabel } from "./shared";

export function CaseStudyHero() {
  return (
    <section className="bg-[#f5f4ef] pb-16 pt-16 sm:pb-[120px] sm:pt-[80px]">
      <Container>
        <SectionLabel>Case Study</SectionLabel>
        <div className="mt-4 flex flex-col-reverse gap-12 lg:flex-row lg:items-start lg:gap-20">
          <div className="min-w-0 flex-1 lg:max-w-[600px]">
            <h1 className="text-[48px] font-bold leading-[1.05] tracking-[-2px] text-[#1f1f1f] sm:text-[80px] sm:leading-[84px]">
              MoveEase
            </h1>
            <div className="mt-5 text-[20px] font-semibold leading-[32px] text-[#3b4b59]">
              <p className="sm:hidden">
                Helping people stay organized before,
                <br />
                during, and after a move.
              </p>
              <p className="hidden sm:block">Helping people stay organized before, during,</p>
              <p className="hidden sm:block">and after a move.</p>
            </div>
            <div className="mt-4 text-[16px] font-normal leading-[26px] text-[#3b4b59]">
              <p className="sm:hidden">
                A mobile app that surfaces hidden admin tasks after a move, in the right order, before deadlines hit.
              </p>
              <p className="hidden sm:block">A mobile app that surfaces hidden admin tasks after a move,</p>
              <p className="hidden sm:block">in the right order, before deadlines hit.</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:flex">
              <MetaCard label="Duration" value="4 months" />
              <MetaCard label="Role" value="Solo Designer" />
              <MetaCard label="Team" value="Solo" />
              <MetaCard
                label="Tools"
                value={
                  <>
                    Figma
                    <br />
                    Google Meet
                  </>
                }
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px] shrink-0 lg:mx-0">
            <img
              src={heroImg}
              alt="MoveEase app screens shown on two phones"
              className="aspect-[420/460] w-full rounded-xl object-cover"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
