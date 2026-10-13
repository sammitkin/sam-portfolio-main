import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { projects } from "../../data/projects";
import { ProjectEntry } from "./ProjectEntry";
import { Reveal } from "../ui/Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="bg-[#f5f4ef] py-24 sm:py-36">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>Portfolio</Eyebrow>
            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-1.2px] text-[#1f1f1f] sm:text-[48px] sm:leading-[60px]">
              Selected Work
            </h2>
          </div>
          <p className="hidden pb-3 font-mono text-[12px] uppercase tracking-[0.08em] text-[#5c6370] sm:block">
            {String(projects.length).padStart(2, "0")} case studies
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-24 sm:gap-32">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <ProjectEntry project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
