import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { usePageMeta } from "../lib/usePageMeta";

export function NotFound() {
  usePageMeta({
    title: "Page not found — Sam Mitkin",
    description: "This page doesn't exist.",
    path: "/404",
    noindex: true,
  });

  return (
    <section className="bg-[#f5f4ef] py-24 sm:py-32">
      <Container>
        <p className="text-[12px] font-medium uppercase tracking-[2.4px] text-[#a9501c]">404</p>
        <h1 className="mt-6 text-[clamp(36px,6vw,56px)] font-bold leading-[1.05] tracking-[-1.2px] text-[#1f1f1f]">
          This page doesn't exist.
        </h1>
        <p className="mt-6 max-w-[520px] text-[17px] leading-[28px] text-[#5c6370]">
          The link may be old or mistyped. The work is on the homepage.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex rounded-lg bg-[#3b4b59] px-7 py-[14px] text-[14px] font-medium tracking-[0.35px] text-white transition-colors hover:bg-[#2e3c47]"
        >
          Back to home
        </Link>
      </Container>
    </section>
  );
}
