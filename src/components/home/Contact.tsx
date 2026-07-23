import { EnvelopeIcon, LinkedInIcon } from "../icons/Icons";
import { LINKEDIN_URL, EMAIL_URL } from "../layout/Footer";
import { Container } from "../layout/Container";

export function Contact() {
  return (
    <section id="contact" className="bg-[#f5f4ef] py-24 sm:py-36">
      <Container>
        <p className="text-[12px] font-medium uppercase leading-[16px] tracking-[2.4px] text-[#cc6324]">Get in Touch</p>
        <h2 className="mt-5 text-[36px] font-bold leading-[1.15] tracking-[-1.2px] text-[#1f1f1f] sm:text-[48px] sm:leading-[60px]">
          Let's Build Better
          <br />
          Experiences.
        </h2>
        <div className="mt-6 max-w-[512px] text-[16px] font-normal leading-[26px] text-[#3b4b59]">
          <p>Currently seeking Product Design opportunities.</p>
          <p>Open to full-time, contract, and freelance work.</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg bg-[#3b4b59] px-7 py-[14px] text-[14px] font-medium tracking-[0.35px] text-white transition-colors hover:bg-[#2e3c47]"
            aria-label="Connect on LinkedIn (opens in new tab)"
          >
            <LinkedInIcon fill="white" />
            LinkedIn
          </a>
          <a
            href={EMAIL_URL}
            className="flex items-center gap-1 rounded-lg border border-[#3b4b59] px-7 py-[15px] text-[14px] font-medium tracking-[0.35px] text-[#3b4b59] transition-colors hover:bg-[#3b4b59]/5"
            aria-label="Send email to Sam Mitkin"
          >
            <EnvelopeIcon fill="#3B4B59" />
            Email
          </a>
        </div>
      </Container>
    </section>
  );
}
