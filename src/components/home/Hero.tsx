import portraitImg from "@/assets/images/portrait.png";
import { Container } from "../layout/Container";
import { useSectionNav } from "../layout/navigation";
import { ArrowRightIcon } from "../icons/Icons";

export function Hero() {
  const goToSection = useSectionNav();

  return (
    <section className="bg-[#f5f4ef] py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:gap-8">
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-medium uppercase leading-[16px] tracking-[2.4px] text-[#cc6324]">
              Product Designer
            </p>

            <h1 className="mt-10 text-[clamp(48px,8vw,96px)] font-bold leading-[0.95] tracking-[-2.4px] text-[#1f1f1f]">
              Sam
              <br />
              Mitkin
            </h1>

            <p className="mt-8 max-w-[672px] text-[20px] font-normal leading-[32.5px] text-[#3b4b59]">
              Product Designer focused on service design, customer experience, and research-driven solutions.
            </p>

            <p className="mt-6 max-w-[576px] text-[16px] font-normal leading-[26px] text-[#6b7280]">
              After more than 10 years building and running a service business, I transitioned into Product Design
              to combine user research, business thinking, and problem solving into meaningful digital products.
            </p>

            <div className="mt-14 flex flex-wrap gap-4">
              <button
                onClick={() => goToSection("work")}
                className="flex items-center gap-2 rounded-lg bg-[#3b4b59] px-7 py-[14px] text-[14px] font-medium tracking-[0.35px] text-white transition-colors hover:bg-[#2e3c47]"
                aria-label="View Projects"
              >
                View Projects
                <ArrowRightIcon />
              </button>
              <button
                onClick={() => goToSection("about")}
                className="rounded-lg border border-[#3b4b59] px-7 py-[14px] text-[14px] font-medium tracking-[0.35px] text-[#3b4b59] transition-colors hover:bg-[#3b4b59]/5"
                aria-label="About Me"
              >
                About Me
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[310px] shrink-0 md:mx-0">
            <img
              src={portraitImg}
              alt="Sam Mitkin – Product Designer"
              className="aspect-[310/382] w-full rounded-2xl object-cover"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
