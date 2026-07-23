import type { ReactNode } from "react";
import { Container } from "../layout/Container";
import { NumberCircle } from "../icons/Icons";

type Principle = { num: 1 | 2 | 3; title: string; body: ReactNode };

const principles: Principle[] = [
  {
    num: 1,
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
    num: 2,
    title: "Research before assumptions.",
    body: <p>Real understanding comes from listening. I build from evidence, not intuition alone.</p>,
  },
  {
    num: 3,
    title: "Less, but better.",
    body: (
      <>
        <p>Restraint is a skill.</p>
        <p>The most enduring products do one thing exceptionally well.</p>
      </>
    ),
  },
];

export function DesignPrinciples() {
  return (
    <section className="bg-[#3b4b59] py-24 sm:py-36">
      <Container>
        <p className="text-[12px] font-medium uppercase leading-[16px] tracking-[2.4px] text-[#cc6324]">Approach</p>
        <h2 className="mt-5 text-[36px] font-bold leading-[1.15] tracking-[-1.2px] text-white sm:text-[48px] sm:leading-[60px]">
          Design Principles
        </h2>

        <div className="mt-16 grid grid-cols-1 divide-y divide-white/10 bg-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {principles.map((p) => (
            <div key={p.num} className="flex flex-col bg-[#3b4b59] p-12">
              <NumberCircle number={p.num} />
              <h3 className="mt-8 text-[20px] font-semibold leading-[27.5px] text-white">{p.title}</h3>
              <div className="mt-4 text-[14px] font-normal leading-[22.75px] text-white/60 [&>p]:mb-0">
                {p.body}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
