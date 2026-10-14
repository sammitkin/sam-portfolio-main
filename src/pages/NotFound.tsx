import { Link } from "react-router-dom";
import { Wrap } from "../components/layout/Wrap";
import { usePageMeta } from "../lib/usePageMeta";

export function NotFound() {
  usePageMeta({
    title: "Page not found — Sam Mitkin",
    description: "This page doesn't exist.",
    path: "/404",
    noindex: true,
  });

  return (
    <Wrap as="section" className="pt-16 md:pt-24">
      <p className="text-[15px] font-extrabold text-graphite">404</p>
      <h1 className="mt-4 max-w-[12em] text-[48px] font-extrabold leading-[0.95] tracking-[-0.055em] md:text-[84px]">
        This page doesn't exist.
      </h1>
      <p className="mt-6 max-w-[34em] text-[17px] font-medium leading-[1.55] md:text-[19px]">
        The link may be old or mistyped. The work is on the homepage.
      </p>
      <Link to="/" className="pf-btn pf-btn-primary mt-8">
        Back to home
      </Link>
    </Wrap>
  );
}
