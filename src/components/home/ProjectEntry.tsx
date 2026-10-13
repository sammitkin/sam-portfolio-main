import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import { MoveCover, ProjectCover } from "../case/Covers";

function Facts({ project }: { project: Project }) {
  return (
    <dl className="self-start border-t border-[#1f1f1f]/10">
      {project.facts.map((fact) => (
        <div key={fact.label} className="grid grid-cols-[92px_1fr] gap-4 border-b border-[#1f1f1f]/10 py-3">
          <dt className="font-mono text-[12px] leading-[20px] text-[#5c6370]">{fact.label}</dt>
          <dd className="text-[14px] leading-[20px] text-[#1f1f1f]">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Stretches the title link over the whole entry, so the cover is clickable too. */
const stretched =
  "after:absolute after:inset-0 after:rounded-[20px] after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-[#3b4b59]";

function ReadLink() {
  return (
    <p className="mt-6 text-[15px] font-medium text-[#3b4b59]" aria-hidden>
      <span className="border-b border-[#3b4b59]/30 pb-[2px] transition-colors group-hover:border-[#3b4b59]">Read the case study</span>
    </p>
  );
}

export function ProjectEntry({ project, eager }: { project: Project; eager?: boolean }) {
  const headingId = `project-${project.slug}`;
  return (
    <article className="group relative" aria-labelledby={headingId}>
      <ProjectCover slug={project.slug} eager={eager} />
      <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="text-[14px] text-[#5c6370]">{project.type}</p>
          <h3 id={headingId} className="mt-2 text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1f1f1f] sm:text-[44px]">
            <Link to={project.path} className={stretched}>
              {project.title}
            </Link>
          </h3>
          <p className="mt-3 text-[20px] font-medium leading-[1.4] text-[#1f1f1f]">{project.tagline}</p>
          <p className="mt-3 max-w-[560px] text-[16px] leading-[26px] text-[#3b4b59]">{project.summary}</p>
          {project.note && <p className="mt-3 text-[13px] leading-[20px] text-[#5c6370]">{project.note}</p>}
          <ReadLink />
        </div>
        <div className="lg:col-span-5">
          <Facts project={project} />
        </div>
      </div>
    </article>
  );
}

/** Smaller entry for earlier work. */
export function CompactEntry({ project }: { project: Project }) {
  const headingId = `project-${project.slug}`;
  return (
    <article className="group relative grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12" aria-labelledby={headingId}>
      <div className="md:col-span-5">
        <MoveCover compact />
      </div>
      <div className="md:col-span-7">
        <p className="text-[14px] text-[#5c6370]">{project.type}</p>
        <h3 id={headingId} className="mt-2 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1f1f1f]">
          <Link to={project.path} className={stretched}>
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-[520px] text-[16px] leading-[26px] text-[#3b4b59]">{project.summary}</p>
        <ReadLink />
      </div>
    </article>
  );
}
