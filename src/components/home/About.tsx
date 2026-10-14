import workspaceImg from "@/assets/images/about-workspace.webp";
import { Wrap } from "../layout/Wrap";

const PRINCIPLES = [
  { title: "Clarity over complexity.", body: "Every element earns its place. When in doubt, simplify." },
  { title: "Research before assumptions.", body: "Real understanding comes from listening." },
  { title: "Less, but better.", body: "Restraint is a skill." },
];

export function About() {
  return (
    <Wrap as="section" id="about" aria-labelledby="about-title" className="pt-[88px] md:pt-32 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:pt-40">
      <h2
        id="about-title"
        className="text-[48px] font-extrabold leading-[0.95] tracking-[-0.055em] md:text-[64px] lg:col-span-5 lg:text-[clamp(64px,5.85vw,84px)]"
      >
        Rooted in real experience.
      </h2>
      <div className="mt-5 max-w-[36em] text-[17px] font-medium leading-[1.6] md:mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:text-[19px]">
        <p>
          I spent over a decade working directly with clients, building businesses, and improving customer experiences.
          Today I bring those same skills into product design through research, strategy, and user-centered problem
          solving.
        </p>
        <p className="mt-3.5 lg:mt-[18px]">
          My background in service operations helps me see systems, people, and friction points together. I design for
          real constraints, not ideal conditions.
        </p>
      </div>
      <div className="md:mt-14 md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-end md:gap-10 lg:col-span-12 lg:mt-[72px] lg:grid-cols-12 lg:gap-x-6">
        <figure className="mt-8 md:mt-0 lg:col-span-4">
          <img
            src={workspaceImg}
            width={739}
            height={898}
            loading="lazy"
            decoding="async"
            alt="Sam's workspace with Dieter Rams posters"
            className="block aspect-[4/4.4] w-full rounded-[22px] object-cover md:aspect-[4/5] lg:rounded-[28px]"
          />
          <figcaption className="mt-2.5 text-[13px] font-semibold text-graphite lg:mt-3 lg:text-[14px]">
            The desk. “Less, but better” on the wall.
          </figcaption>
        </figure>
        <ul className="mt-7 md:mt-0 lg:col-span-7 lg:col-start-6">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="border-t-2 border-ink py-4 lg:grid lg:grid-cols-2 lg:items-baseline lg:gap-6 lg:py-[22px]">
              <span className="block text-[22px] font-extrabold tracking-[-0.03em] lg:text-[30px] lg:leading-[1.05] lg:tracking-[-0.035em]">
                {p.title}
              </span>
              <span className="mt-1 block text-[15px] font-medium leading-[1.5] text-body2 lg:mt-0 lg:text-[17px]">{p.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </Wrap>
  );
}
