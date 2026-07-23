import aboutImg from "@/assets/images/about-workspace.png";
import { Container } from "../layout/Container";

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="aspect-[491/614] overflow-hidden rounded-2xl">
            <img
              src={aboutImg}
              alt="Sam Mitkin – workspace photo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase leading-[16px] tracking-[2.4px] text-[#cc6324]">About</p>
            <h2 className="mt-5 text-[36px] font-bold leading-[1.15] tracking-[-1.2px] text-[#1f1f1f] sm:text-[48px] sm:leading-[60px]">
              Rooted in
              <br />
              real experience.
            </h2>
            <div className="mt-8 text-[16px] font-normal leading-[26px] text-[#3b4b59]">
              <p>I spent over a decade working directly with clients, building businesses, and improving customer experiences.</p>
              <p>Today I bring those same skills into Product Design through research, strategy, and user-centered problem solving.</p>
            </div>
            <p className="mt-6 max-w-[492px] text-[14px] font-normal leading-[22.75px] text-[#6b7280]">
              My background in service operations helps me see systems, people, and friction points together. I
              design for real constraints, not ideal conditions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
