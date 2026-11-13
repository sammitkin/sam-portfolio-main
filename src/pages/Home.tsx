import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/home/Hero";
import { FrantFeature } from "../components/home/FrantFeature";
import { MoreWork } from "../components/home/MoreWork";
import { About } from "../components/home/About";
import { scrollBehavior, usePageMeta } from "../lib/usePageMeta";

export function Home() {
  const location = useLocation();
  usePageMeta({
    title: "Sam Mitkin — Product Designer",
    description:
      "Sam Mitkin is a product designer focused on service design, customer experience, and research-driven product decisions.",
    path: "/",
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() }));
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      {/* Work starts right after the hero: Frant first, then Deals Hub and MoveEase. */}
      <div id="work">
        <FrantFeature />
        <MoreWork />
      </div>
      <About />
    </>
  );
}
