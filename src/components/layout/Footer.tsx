import { Link } from "react-router-dom";
import { EnvelopeIcon, LinkedInIcon, LogoMark } from "../icons/Icons";
import { Container } from "./Container";

export const LINKEDIN_URL = "https://www.linkedin.com/in/sammitkin/";
export const EMAIL_URL = "mailto:hello@sammitkin.com";

export function Footer() {
  return (
    <footer className="on-dark bg-[#263340] py-12">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-3">
          <Link to="/" aria-label="Back to home">
            <LogoMark fillColor="#F5F4EF" />
          </Link>
          <p className="text-[12px] font-normal tracking-[0.3px] text-white/60">© 2026 Sam Mitkin. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-opacity hover:opacity-70"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <LinkedInIcon fill="rgba(255,255,255,0.75)" />
            <span className="text-[12px] font-medium uppercase tracking-[1.44px] text-white/75">LinkedIn</span>
          </a>
          <a href={EMAIL_URL} className="flex items-center gap-1 transition-opacity hover:opacity-70" aria-label="Email Sam Mitkin">
            <EnvelopeIcon fill="rgba(255,255,255,0.75)" />
            <span className="text-[12px] font-medium uppercase tracking-[1.44px] text-white/75">Email</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
