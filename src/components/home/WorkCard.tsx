import { Link } from "react-router-dom";
import coverImg from "@/assets/images/moveease-card-cover.png";
import { ProjectLinkArrowIcon } from "../icons/Icons";

export function WorkCard() {
  return (
    <Link to="/moveease" className="group flex flex-col overflow-hidden rounded-lg border border-black/[0.08] bg-white">
      <div className="h-[256px] overflow-hidden bg-[#f5f5f5]">
        <img
          src={coverImg}
          alt="MoveEase app screens shown on three phones"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="mb-3 text-[12px] font-medium uppercase leading-[16px] tracking-[1.8px] text-[#cc6324]">
          UX Research · UX/UI Design
        </p>
        <h3 className="mb-3 text-[20px] font-semibold leading-[27.5px] text-[#1f1f1f]">MoveEase</h3>
        <p className="mb-6 flex-1 text-[14px] font-normal leading-[22.75px] text-[#6b7280]">
          A mobile app that helps people moving to a new home stay ahead of address updates, deadlines, and
          paperwork.
        </p>
        <div className="flex items-center gap-[6px]">
          <span className="text-[14px] font-medium leading-[20px] text-[#3b4b59]">View Case Study</span>
          <ProjectLinkArrowIcon />
        </div>
      </div>
    </Link>
  );
}

export function ComingSoonCard() {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-black/[0.08] bg-white">
      <div className="flex h-[256px] items-center justify-center bg-[#e8e7e1]">
        <div className="flex flex-col items-center gap-3">
          <div className="relative flex size-12 items-center justify-center">
            <div className="absolute inset-0 border-2 border-dashed border-[rgba(59,75,89,0.3)]" />
            <span className="text-[20px] font-light leading-[28px] text-[rgba(59,75,89,0.3)]">+</span>
          </div>
          <p className="text-[12px] font-medium uppercase leading-[16px] tracking-[1.2px] text-[rgba(59,75,89,0.4)]">
            In Progress
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="mb-3 text-[12px] font-medium uppercase leading-[16px] tracking-[1.8px] text-[#cc6324]">
          Case Study in Progress
        </p>
        <h3 className="mb-3 text-[20px] font-semibold leading-[27.5px] text-[#1f1f1f]">Coming Soon</h3>
        <p className="mb-6 flex-1 text-[14px] font-normal leading-[22.75px] text-[#6b7280]">
          A new case study is currently in development. Check back soon for the full write-up.
        </p>
        <span className="text-[14px] font-medium leading-[20px] text-[rgba(59,75,89,0.3)]">Coming Soon</span>
      </div>
    </article>
  );
}
