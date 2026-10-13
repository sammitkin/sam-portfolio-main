import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/home/Hero";
import { SelectedWork } from "../components/home/SelectedWork";
import { About } from "../components/home/About";
import { DesignPrinciples } from "../components/home/DesignPrinciples";
import { Contact } from "../components/home/Contact";
import { scrollBehavior, usePageMeta } from "../lib/usePageMeta";
import pages from "../data/pages.json";

export function Home() {
  const location = useLocation();
  usePageMeta({ ...pages["/"], path: "/" });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <DesignPrinciples />
      <Contact />
    </>
  );
}
