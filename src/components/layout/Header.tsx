import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoMark } from "../icons/Icons";
import { Container } from "./Container";
import { useSectionNav } from "./navigation";

const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const goToSection = useSectionNav();

  function handleNavClick(id: string) {
    goToSection(id);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f4ef]/95 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link
            to="/"
            aria-label="Back to home"
            className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b4b59]"
          >
            <LogoMark fillColor="#3B4B59" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-[14px] font-medium tracking-[0.35px] text-[#3b4b59] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-[#3b4b59]"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("work")}
              className="rounded-lg bg-[#3b4b59] px-5 py-[10px] text-[14px] font-medium tracking-[0.35px] text-white transition-colors hover:bg-[#2e3c47] focus-visible:outline-2 focus-visible:outline-[#3b4b59]"
            >
              View Work
            </button>
          </div>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded focus-visible:outline-2 focus-visible:outline-[#3b4b59] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className={`block h-[2px] w-6 bg-[#3b4b59] transition-all duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-6 bg-[#3b4b59] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-[#3b4b59] transition-all duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </Container>

      {open && (
        <div id="mobile-menu" className="flex flex-col gap-4 border-t border-black/5 bg-[#f5f4ef] px-6 pb-6 pt-4 sm:px-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="py-2 text-left text-[14px] font-medium text-[#3b4b59]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("work")}
            className="w-fit rounded-lg bg-[#3b4b59] px-5 py-3 text-left text-[14px] font-medium text-white"
          >
            View Work
          </button>
        </div>
      )}
    </header>
  );
}
