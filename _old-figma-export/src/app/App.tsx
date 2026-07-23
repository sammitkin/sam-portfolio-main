import { useState, type ReactNode } from "react";
import svgPaths from "@/imports/Portfolio/svg-phrfdy15rx";
import portraitImg from "@/imports/Portfolio/f48dbd5261b7156e16087efc60774ebd157fcfb4.png";
import screenshotImg from "@/imports/Portfolio/b4fd19348a9700868f43d80d98ff460ec1f00cae.png";
import aboutImg from "@/imports/Portfolio/f462f35a7d39f4f80537ec829ad0cec2ff85202d.png";

const LINKEDIN = "https://www.linkedin.com/in/sammitkin/";
const EMAIL = "mailto:hello@sammitkin.com";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ─── Icons ─────────────────────────────────────────────────────────────── */

function ArrowRight({ stroke = "white", size = 15 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M0.625 5H9.375" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d="M5 0.625L9.375 5L5 9.375" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function LinkedInIcon({ fill = "white" }: { fill?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d={svgPaths.p1c587500} fill={fill} />
    </svg>
  );
}

function EnvelopeIcon({ fill = "#3B4B59" }: { fill?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d={svgPaths.p1beb7400} fill={fill} />
    </svg>
  );
}

function SmLogo({ fillColor = "#3B4B59" }: { fillColor?: string }) {
  return (
    <div className="relative h-[28px] w-[48px]" aria-label="Sam Mitkin logo">
      <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 51 27.3231" aria-hidden>
        <path d={svgPaths.pa10f200} fill={fillColor} />
      </svg>
      <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 51 27.6923" style={{ left: "44.73%" }} aria-hidden>
        <path d={svgPaths.p19ca2100} fill={fillColor} />
      </svg>
    </div>
  );
}

function MoveEaseLogo() {
  return (
    <svg width="149" height="24" viewBox="0 0 149.639 24" fill="none" aria-label="MoveEase logo">
      <path d={svgPaths.p1daab500} fill="#2769B1" />
      <path d={svgPaths.p12581e80} fill="white" />
      <path d={svgPaths.p21566900} fill="black" />
      <path d={svgPaths.p10ee4000} fill="black" />
      <path d={svgPaths.p15a16c80} fill="black" />
      <path d={svgPaths.p19261e00} fill="black" />
      <path d={svgPaths.p374cf8f0} fill="black" />
      <path d={svgPaths.p27bb2900} fill="black" />
      <path d={svgPaths.p1e3e7a00} fill="black" />
      <path d={svgPaths.p105a200} fill="black" />
    </svg>
  );
}

/* ─── Header / Nav ───────────────────────────────────────────────────────── */

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f4ef]/95 backdrop-blur-sm border-b border-black/5">
      <nav
        className="max-w-[1152px] mx-auto flex items-center justify-between px-8 h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b4b59] rounded"
        >
          <div className="relative h-[28px] w-[48px]">
            <svg className="absolute inset-0" width="24" height="28" viewBox="0 0 24.6 27.32" fill="none" aria-hidden>
              <path d={svgPaths.pa10f200} fill="#3B4B59" />
            </svg>
            <svg className="absolute inset-0" style={{ left: 22 }} width="27" height="28" viewBox="0 0 26.53 27.69" fill="none" aria-hidden>
              <path d={svgPaths.p19ca2100} fill="#3B4B59" />
            </svg>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("work")} className="font-medium text-[14px] text-[#3b4b59] tracking-[0.35px] hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-[#3b4b59]">Work</button>
          <button onClick={() => scrollTo("about")} className="font-medium text-[14px] text-[#3b4b59] tracking-[0.35px] hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-[#3b4b59]">About</button>
          <button onClick={() => scrollTo("contact")} className="font-medium text-[14px] text-[#3b4b59] tracking-[0.35px] hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-[#3b4b59]">Contact</button>
          <button
            onClick={() => scrollTo("work")}
            className="bg-[#3b4b59] text-white font-medium text-[14px] tracking-[0.35px] px-5 py-[10px] rounded-lg hover:bg-[#2e3c47] transition-colors focus-visible:outline-2 focus-visible:outline-[#3b4b59]"
          >
            View Work
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded focus-visible:outline-2 focus-visible:outline-[#3b4b59]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block h-[2px] w-6 bg-[#3b4b59] transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-6 bg-[#3b4b59] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-[#3b4b59] transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-[#f5f4ef] border-t border-black/5 px-8 pb-6 pt-4 flex flex-col gap-4">
          <button onClick={() => { scrollTo("work"); setOpen(false); }} className="text-left font-medium text-[14px] text-[#3b4b59] py-2">Work</button>
          <button onClick={() => { scrollTo("about"); setOpen(false); }} className="text-left font-medium text-[14px] text-[#3b4b59] py-2">About</button>
          <button onClick={() => { scrollTo("contact"); setOpen(false); }} className="text-left font-medium text-[14px] text-[#3b4b59] py-2">Contact</button>
          <button
            onClick={() => { scrollTo("work"); setOpen(false); }}
            className="bg-[#3b4b59] text-white font-medium text-[14px] px-5 py-3 rounded-lg text-left w-fit"
          >
            View Work
          </button>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="bg-[#f5f4ef] pt-16 min-h-[862px] flex items-center">
      <div className="max-w-[1152px] mx-auto px-8 py-24 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-8">
          {/* Text block */}
          <div className="flex-1 min-w-0">
            <p className="font-medium text-[12px] text-[#cc6324] tracking-[2.4px] uppercase leading-[16px]">
              Product Designer
            </p>

            <div className="mt-10">
              <h1 className="font-bold text-[clamp(56px,8vw,96px)] text-[#1f1f1f] tracking-[-2.4px] leading-[0.95] whitespace-nowrap">
                Sam
                <br />
                Mitkin
              </h1>
            </div>

            <p className="mt-8 font-normal text-[20px] text-[#3b4b59] leading-[32.5px] max-w-[672px]">
              Product Designer focused on service design, customer experience, and research-driven solutions.
            </p>

            <p className="mt-6 font-normal text-[16px] text-[#6b7280] leading-[26px] max-w-[576px]">
              After more than 10 years building and running a service business,
              I transitioned into Product Design to combine user research, business thinking, and problem solving into meaningful digital products.
            </p>

            <div className="mt-14 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("work")}
                className="flex items-center gap-2 bg-[#3b4b59] text-white font-medium text-[14px] tracking-[0.35px] px-7 py-[14px] rounded-lg hover:bg-[#2e3c47] transition-colors"
                aria-label="View Projects"
              >
                View Projects
                <ArrowRight />
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="border border-[#3b4b59] text-[#3b4b59] font-medium text-[14px] tracking-[0.35px] px-7 py-[14px] rounded-lg hover:bg-[#3b4b59]/5 transition-colors"
                aria-label="About Me"
              >
                About Me
              </button>
            </div>
          </div>

          {/* Portrait */}
          <div className="shrink-0 w-[310px] max-w-full mx-auto md:mx-0">
            <img
              src={portraitImg}
              alt="Sam Mitkin – Product Designer"
              className="w-full aspect-[310/382] object-cover rounded-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Selected Work ──────────────────────────────────────────────────────── */

function ProjectLinkArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
      <path d="M2.70833 6.5H10.2917" stroke="#3B4B59" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
      <path d={svgPaths.p17e9b940} stroke="#3B4B59" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
    </svg>
  );
}

function WorkCard() {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-black/[0.08] flex flex-col">
      {/* Card image area */}
      <div className="bg-[#f5f5f5] h-[256px] flex flex-col items-center justify-center gap-5 p-4">
        <MoveEaseLogo />
        <img
          src={screenshotImg}
          alt="MoveEase app screenshot"
          className="w-[327px] max-w-full h-[153px] object-cover"
          loading="lazy"
        />
      </div>
      {/* Card text */}
      <div className="p-7 flex flex-col flex-1">
        <p className="font-medium text-[12px] text-[#cc6324] tracking-[1.8px] uppercase leading-[16px] mb-3">
          UX Research · UX/UI Design
        </p>
        <h3 className="font-semibold text-[20px] text-[#1f1f1f] leading-[27.5px] mb-3">MoveEase</h3>
        <p className="font-normal text-[14px] text-[#6b7280] leading-[22.75px] mb-6 flex-1">
          A mobile app that helps people moving to a new home stay ahead of address updates, deadlines, and paperwork.
        </p>
        <div className="flex items-center gap-[6px]">
          <span className="font-medium text-[14px] text-[#3b4b59] leading-[20px]">View Case Study</span>
          <ProjectLinkArrow />
        </div>
      </div>
    </article>
  );
}

function ComingSoonCard() {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-black/[0.08] flex flex-col">
      <div className="bg-[#e8e7e1] h-[256px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center size-12 relative">
            <div className="absolute inset-0 border-2 border-dashed border-[rgba(59,75,89,0.3)]" />
            <span className="font-light text-[20px] text-[rgba(59,75,89,0.3)] leading-[28px]">+</span>
          </div>
          <p className="font-medium text-[12px] text-[rgba(59,75,89,0.4)] tracking-[1.2px] uppercase leading-[16px]">
            In Progress
          </p>
        </div>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <p className="font-medium text-[12px] text-[#cc6324] tracking-[1.8px] uppercase leading-[16px] mb-3">
          Case Study in Progress
        </p>
        <h3 className="font-semibold text-[20px] text-[#1f1f1f] leading-[27.5px] mb-3">Coming Soon</h3>
        <p className="font-normal text-[14px] text-[#6b7280] leading-[22.75px] mb-6 flex-1">
          A new case study is currently in development. Check back soon for the full write-up.
        </p>
        <span className="font-medium text-[14px] text-[rgba(59,75,89,0.3)] leading-[20px]">Coming Soon</span>
      </div>
    </article>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="bg-[#f5f4ef] py-36">
      <div className="max-w-[1152px] mx-auto px-8">
        <div>
          <p className="font-medium text-[12px] text-[#cc6324] tracking-[2.4px] uppercase leading-[16px]">
            Portfolio
          </p>
          <h2 className="mt-4 font-bold text-[48px] text-[#1f1f1f] tracking-[-1.2px] leading-[60px]">
            Selected Work
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <WorkCard />
          <ComingSoonCard />
          <ComingSoonCard />
        </div>
      </div>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────────────────────── */

function About() {
  return (
    <section id="about" className="bg-white py-36">
      <div className="max-w-[1152px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Photo */}
          <div className="rounded-2xl overflow-hidden aspect-[491/614]">
            <img
              src={aboutImg}
              alt="Sam Mitkin – workspace photo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-medium text-[12px] text-[#cc6324] tracking-[2.4px] uppercase leading-[16px]">
              About
            </p>
            <h2 className="mt-5 font-bold text-[48px] text-[#1f1f1f] tracking-[-1.2px] leading-[60px]">
              Rooted in
              <br />
              real experience.
            </h2>
            <div className="mt-8 font-normal text-[16px] text-[#3b4b59] leading-[26px]">
              <p>I spent over a decade working directly with clients, building businesses, and improving customer experiences.</p>
              <p>Today I bring those same skills into Product Design through research, strategy, and user-centered problem solving.</p>
            </div>
            <p className="mt-6 font-normal text-[14px] text-[#6b7280] leading-[22.75px] max-w-[492px]">
              My background in service operations helps me see systems, people, and friction points together. I design for real constraints, not ideal conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Design Principles ──────────────────────────────────────────────────── */

type Principle = { num: string; title: string; body: string | ReactNode };

const principles: Principle[] = [
  {
    num: "01",
    title: "Clarity over complexity.",
    body: (
      <>
        <p>Good design removes friction.</p>
        <p>Every element earns its place.</p>
        <p>When in doubt, simplify.</p>
      </>
    ),
  },
  {
    num: "02",
    title: "Research before assumptions.",
    body: "Real understanding comes from listening. I build from evidence, not intuition alone.",
  },
  {
    num: "03",
    title: "Less, but better.",
    body: (
      <>
        <p>Restraint is a skill.</p>
        <p>The most enduring products do one thing exceptionally well.</p>
      </>
    ),
  },
];

function DesignPrinciples() {
  return (
    <section className="bg-[#3b4b59] py-36">
      <div className="max-w-[1152px] mx-auto px-8">
        <p className="font-medium text-[12px] text-[#cc6324] tracking-[2.4px] uppercase leading-[16px]">
          Approach
        </p>
        <h2 className="mt-5 font-bold text-[48px] text-white tracking-[-1.2px] leading-[60px]">
          Design Principles
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 bg-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {principles.map((p) => (
            <div key={p.num} className="bg-[#3b4b59] p-12 flex flex-col">
              <p className="font-medium text-[12px] text-[#cc6324] tracking-[2.4px] leading-[16px]">{p.num}</p>
              <h3 className="mt-8 font-semibold text-[20px] text-white leading-[27.5px]">{p.title}</h3>
              <div className="mt-4 font-normal text-[14px] text-white/60 leading-[22.75px] [&>p]:mb-0">
                {typeof p.body === "string" ? <p>{p.body}</p> : p.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="bg-[#f5f4ef] py-36">
      <div className="max-w-[1152px] mx-auto px-8">
        <p className="font-medium text-[12px] text-[#cc6324] tracking-[2.4px] uppercase leading-[16px]">
          Get in Touch
        </p>
        <h2 className="mt-5 font-bold text-[48px] text-[#1f1f1f] tracking-[-1.2px] leading-[60px]">
          {"Let's Build Better"}
          <br />
          Experiences.
        </h2>
        <div className="mt-6 font-normal text-[16px] text-[#3b4b59] leading-[26px] max-w-[512px]">
          <p>Currently seeking Product Design opportunities.</p>
          <p>Open to full-time, contract, and freelance work.</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-[#3b4b59] text-white font-medium text-[14px] tracking-[0.35px] px-7 py-[14px] rounded-lg hover:bg-[#2e3c47] transition-colors"
            aria-label="Connect on LinkedIn (opens in new tab)"
          >
            <LinkedInIcon fill="white" />
            LinkedIn
          </a>
          <a
            href={EMAIL}
            className="flex items-center gap-1 border border-[#3b4b59] text-[#3b4b59] font-medium text-[14px] tracking-[0.35px] px-7 py-[15px] rounded-lg hover:bg-[#3b4b59]/5 transition-colors"
            aria-label="Send email to Sam Mitkin"
          >
            <EnvelopeIcon fill="#3B4B59" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#1f1f1f] py-12">
      <div className="max-w-[1152px] mx-auto px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Logo + copyright */}
        <div className="flex flex-col gap-3">
          <div className="relative h-[28px] w-[48px]">
            <svg className="absolute inset-0" width="24" height="28" viewBox="0 0 24.6 27.32" fill="none" aria-hidden>
              <path d={svgPaths.pa10f200} fill="#F5F4EF" />
            </svg>
            <svg className="absolute inset-0" style={{ left: 22 }} width="27" height="28" viewBox="0 0 26.53 27.69" fill="none" aria-hidden>
              <path d={svgPaths.p19ca2100} fill="#F5F4EF" />
            </svg>
          </div>
          <p className="font-normal text-[12px] text-white/30 tracking-[0.3px] leading-[16px]">
            © 2026 Sam Mitkin. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:opacity-70 transition-opacity"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <LinkedInIcon fill="#797979" />
            <span className="font-medium text-[12px] text-white/40 tracking-[1.44px] uppercase leading-[16px]">LinkedIn</span>
          </a>
          <a
            href={EMAIL}
            className="flex items-center gap-1 hover:opacity-70 transition-opacity"
            aria-label="Email Sam Mitkin"
          >
            <EnvelopeIcon fill="#797979" />
            <span className="font-medium text-[12px] text-white/40 tracking-[1.44px] uppercase leading-[16px]">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ────────────────────────────────────────────────────────────────── */

export default function App() {
  return (
    <div className="font-[Inter,sans-serif] min-h-screen">
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <DesignPrinciples />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
