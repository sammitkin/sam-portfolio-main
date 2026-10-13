import { Container } from "../layout/Container";
import { projects } from "../../data/projects";
import { CompactEntry, ProjectEntry } from "./ProjectEntry";

const featured = projects.filter((p) => p.featured);
const earlier = projects.filter((p) => !p.featured);

export function SelectedWork() {
  return (
    <section id="work" className="bg-[#f5f4ef] py-24 sm:py-32">
      <Container>
        <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1f1f1f] sm:text-[48px] sm:leading-[60px]">
          Selected work
        </h2>

        <div className="mt-12 flex flex-col gap-24 sm:mt-16 sm:gap-32">
          {featured.map((project) => (
            <ProjectEntry key={project.slug} project={project} />
          ))}
        </div>

        {earlier.length > 0 && (
          <div className="mt-24 border-t border-[#1f1f1f]/10 pt-10 sm:mt-32">
            <h2 className="text-[20px] font-semibold text-[#1f1f1f]">Earlier work</h2>
            <div className="mt-8">
              {earlier.map((project) => (
                <CompactEntry key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
