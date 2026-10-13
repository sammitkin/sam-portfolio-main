import { Link } from "react-router-dom";
import type { Project, Screen } from "../../data/projects";
import { ProjectLinkArrowIcon } from "../icons/Icons";

const phoneBase =
  "absolute overflow-hidden bg-white shadow-[0_28px_56px_-24px_rgba(31,31,31,0.35),0_0_0_1px_rgba(31,31,31,0.06)] transition-transform duration-500 ease-out";

/** Corner radius as a ratio of the screen size, so it scales with the phone. */
const phoneRadius = { borderRadius: "11% / 5%" };

function Phone({ screen, className, eager }: { screen: Screen; className: string; eager?: boolean }) {
  return (
    <div className={`${phoneBase} ${className}`} style={phoneRadius}>
      <img
        src={screen.src}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  );
}

function Cover({ project, eager }: { project: Project; eager?: boolean }) {
  const [left, center, right] = project.screens;
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#e9e6df] sm:aspect-[16/9]">
      <Phone
        screen={left}
        eager={eager}
        className="left-[-6%] top-[20%] w-[38%] sm:left-[12%] sm:top-[16%] sm:w-[24%] group-hover:-translate-y-1"
      />
      <Phone
        screen={right}
        eager={eager}
        className="right-[-6%] top-[20%] w-[38%] sm:right-[12%] sm:top-[16%] sm:w-[24%] group-hover:-translate-y-1"
      />
      <Phone
        screen={center}
        eager={eager}
        className="left-1/2 top-[8%] z-10 w-[46%] -translate-x-1/2 sm:top-[7%] sm:w-[28%] group-hover:-translate-y-2"
      />
    </div>
  );
}

export function ProjectEntry({ project, index, eager }: { project: Project; index: number; eager?: boolean }) {
  const number = String(index + 1).padStart(2, "0");
  const headingId = `project-${project.slug}`;

  return (
    <article className="group relative" aria-labelledby={headingId}>
      <Cover project={project} eager={eager} />

      <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-[#5c6370] uppercase">
            <span className="text-[#a9501c]">{number}</span>
            <span aria-hidden> — </span>
            {project.type}
          </p>
          <h3 id={headingId} className="mt-4 text-[32px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1f1f1f] sm:text-[40px]">
            <Link
              to={project.path}
              className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-[#3b4b59]"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-3 text-[20px] font-medium leading-[1.4] text-[#1f1f1f]">{project.tagline}</p>
          <p className="mt-4 max-w-[560px] text-[16px] leading-[26px] text-[#3b4b59]">{project.summary}</p>
          {project.note && <p className="mt-3 text-[13px] leading-[20px] text-[#5c6370]">{project.note}</p>}
          <p className="mt-7 flex items-center gap-2 text-[14px] font-medium text-[#3b4b59]" aria-hidden>
            <span className="border-b border-[#3b4b59]/30 pb-[2px] transition-colors group-hover:border-[#3b4b59]">
              Read case study
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ProjectLinkArrowIcon />
            </span>
          </p>
        </div>

        <dl className="self-start border-t border-[#1f1f1f]/10 lg:col-span-5">
          {project.facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[96px_1fr] gap-4 border-b border-[#1f1f1f]/10 py-3">
              <dt className="font-mono text-[12px] uppercase leading-[20px] tracking-[0.08em] text-[#5c6370]">
                {fact.label}
              </dt>
              <dd className="text-[14px] leading-[20px] text-[#1f1f1f]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
