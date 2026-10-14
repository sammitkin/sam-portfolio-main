import portraitImg from "@/assets/images/portrait.webp";
import { EMAIL_URL, LINKEDIN_URL, RESUME_URL } from "../../data/site";
import { useSectionNav } from "../layout/navigation";

/** Color portrait in an arch, traced once by a single round-capped line (the Pure Flow principle). */
function Portrait() {
  return (
    <figure className="relative m-0">
      <div className="pf-arch aspect-[4/5.2] overflow-hidden bg-[#b9a8f5]">
        <img
          src={portraitImg}
          alt="Sam Mitkin"
          width={640}
          height={800}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="block size-full origin-[50%_32%] scale-[1.16] object-cover object-[50%_26%] [filter:saturate(0.9)_contrast(1.04)]"
        />
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 400 520"
        preserveAspectRatio="none"
        className="pf-arch-line pointer-events-none absolute inset-0 size-full overflow-visible"
      >
        <path
          pathLength={1}
          d="M -40 515 L -25 515 A 25 25 0 0 0 0 490 L 0 200 A 200 200 0 0 1 400 200 L 400 420"
          fill="none"
          stroke="#15171a"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="pf-draw"
        />
      </svg>
    </figure>
  );
}

export function Hero() {
  const goToSection = useSectionNav();
  return (
    <section aria-labelledby="hero-name" className="mx-auto max-w-[1440px] px-2 md:px-3 lg:px-4">
      <div className="rounded-[28px] bg-iris px-5 pb-7 pt-5 md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-x-10 md:rounded-[32px] md:p-10 lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:rounded-[40px] lg:px-14 lg:pb-16 lg:pt-10">
        <p className="m-0 inline-flex min-h-9 items-center gap-2.5 justify-self-start rounded-full bg-white pl-3 pr-3.5 text-[13px] font-bold md:col-span-2 md:min-h-10 md:pl-3.5 md:pr-4 md:text-[14px] lg:col-span-6 lg:row-start-1">
          <span aria-hidden="true" className="size-2 rounded-full bg-electric md:size-[9px]" />
          Open to product design roles
        </p>
        <a
          href="/#work"
          onClick={(e) => goToSection("work", e)}
          className="pf-link pf-link-quiet hidden whitespace-nowrap text-[14px] font-bold lg:col-span-2 lg:col-start-7 lg:row-start-1 lg:block lg:self-center lg:justify-self-end"
        >
          Jump to case studies
        </a>

        <h1
          id="hero-name"
          className="mt-7 whitespace-nowrap text-[23.6vw] font-extrabold leading-[0.86] tracking-[-0.065em] md:col-span-2 md:mt-12 md:text-[17.5vw] lg:col-span-8 lg:row-start-2 lg:mt-14 lg:text-[min(14.72vw,212px)] lg:leading-[0.84]"
        >
          <span className="pf-rise block">Sam</span>
          <span className="pf-rise-2 block pl-[0.3em] md:pl-[0.45em] lg:pl-[0.52em]">Mitkin</span>
        </h1>

        <div className="ml-auto mr-1.5 mt-10 w-[74%] md:col-start-2 md:row-start-3 md:ml-0 md:mr-3 md:mt-12 md:w-auto md:justify-self-stretch lg:col-span-4 lg:col-start-9 lg:row-span-3 lg:row-start-1 lg:mr-0 lg:mt-16">
          <Portrait />
        </div>

        <div className="md:col-start-1 md:row-start-3 md:mt-12 md:self-end lg:col-span-8 lg:row-start-3 lg:mt-14 lg:grid lg:grid-cols-8 lg:items-start lg:gap-x-6 lg:self-start">
          <div className="lg:col-span-3">
            <p className="mt-8 text-[32px] font-extrabold leading-none tracking-[-0.045em] md:mt-0 md:text-[40px] lg:text-[clamp(32px,3.05vw,44px)]">
              Product Designer
            </p>
            <p className="mt-2.5 text-[15px] font-semibold leading-[1.45] text-on-iris lg:mt-3.5 lg:text-[16px]">
              Research, service design and interface craft
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="mt-[18px] max-w-[34em] text-[17px] font-medium leading-[1.55] lg:mt-0 lg:text-[19px]">
              Before design, I spent 10+ years running a client-facing service business. Now I bring that closeness to
              customers into research, service design and product decisions.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-[16px] font-bold md:flex-row md:flex-wrap md:items-center md:gap-3 lg:mt-7">
              <a href={EMAIL_URL} className="pf-btn pf-btn-primary">
                Email me
              </a>
              {RESUME_URL && (
                <a href={RESUME_URL} className="pf-btn pf-btn-outline">
                  Résumé (PDF)
                </a>
              )}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-btn pf-btn-outline md:!min-h-0 md:!px-0 md:ml-3 md:!shadow-none md:underline md:decoration-2 md:underline-offset-[5px] md:hover:!bg-transparent md:hover:decoration-[3px]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
