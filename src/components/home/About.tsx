import work1 from "@/assets/images/about/work.webp";
import work2 from "@/assets/images/about/work@2x.webp";
import work3 from "@/assets/images/about/work@3x.webp";
import soccer1 from "@/assets/images/about/soccer.webp";
import soccer2 from "@/assets/images/about/soccer@2x.webp";
import soccer3 from "@/assets/images/about/soccer@3x.webp";
import hike1 from "@/assets/images/about/hike.webp";
import hike2 from "@/assets/images/about/hike@2x.webp";
import hike3 from "@/assets/images/about/hike@3x.webp";
import chair1 from "@/assets/images/about/chair.webp";
import chair2 from "@/assets/images/about/chair@2x.webp";
import { Wrap } from "../layout/Wrap";
import { SectionRule } from "./SectionRule";

const PHOTOS = [
  { src: [work1, work2, work3], alt: "Sam styling a model’s hair with a comb and hairspray on an outdoor Redken shoot", caption: "On set for Redken." },
  { src: [soccer1, soccer2, soccer3], alt: "Sam and a teammate in black soccer kits holding the championship trophy on a field in Los Angeles", caption: "Fall 2025 champions, LA Municipal Soccer League." },
  { src: [hike1, hike2, hike3], alt: "Sam in a yellow rain jacket in a Yosemite meadow below misty granite cliffs", caption: "Yosemite, one of 10 national parks so far." },
];


export function About() {
  return (
    <Wrap as="section" id="about" aria-labelledby="about-title" className="scroll-mt-[-88px] pt-[88px] md:scroll-mt-[-128px] md:pt-32 lg:scroll-mt-[-160px] lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:pt-40">
      <SectionRule label="About" className="md:mb-10 lg:mb-14" />
      <div className="lg:col-span-5 lg:flex lg:flex-col lg:self-stretch">
        <h2
          id="about-title"
          className="text-[48px] font-extrabold leading-[0.95] tracking-[-0.055em] md:text-[64px] lg:text-[clamp(64px,5.85vw,84px)]"
        >
          Eleven years behind the chair.
        </h2>
        {/* Desktop only: fills the column under the title with the work itself. */}
        <figure className="mt-10 hidden w-[80%] flex-1 flex-col lg:flex">
          <img
            src={chair1}
            srcSet={`${chair1} 560w, ${chair2} 1120w`}
            sizes="420px"
            width={560}
            height={571}
            loading="lazy"
            decoding="async"
            alt="Sam sitting in a barber chair in his studio"
            className="block h-0 min-h-[360px] w-full flex-1 rounded-[28px] object-cover object-[50%_40%]"
          />
          <figcaption className="mt-2.5 text-[14px] font-semibold leading-[1.35] text-graphite">In the studio.</figcaption>
        </figure>
      </div>
      <div className="mt-5 max-w-[36em] text-[17px] font-medium leading-[1.6] md:mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:text-[19px] [&>p+p]:mt-3.5 lg:[&>p+p]:mt-[18px]">
        <p>
          I spent more than 11 years in the barber industry, first in Russia and later in Los Angeles. I ran my own
          studio, trained other barbers and worked as a brand ambassador for Redken (L’Oréal). Thousands of clients sat
          in my chair.
        </p>
        <p>
          That work taught me what research now gives words to: ask good questions, listen past the first request, and
          notice when someone quietly stops coming back. Over time I got more interested in the systems around the chair,
          like booking, retention and the tools that get in the way, than in any single cut. Product design lets me work
          on those problems for more people at once.
        </p>
        <p>
          I studied product design at Designlab’s UX Academy. I design for people and small businesses: research first,
          then the simplest thing that works. I’m based in Los Angeles and open to on-site or hybrid roles here, as well
          as remote roles across the U.S.
        </p>
        <p>
          Off the clock I play in the Los Angeles Municipal Soccer League and lift weights. I travel a lot and try to
          hike wherever I go: 10 U.S. national parks so far. I also graduated from music school
          with honors, where I studied piano. I speak Russian and English.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-3 gap-2.5 md:mt-14 md:gap-5 lg:col-span-12 lg:mt-[72px] lg:gap-6">
        {PHOTOS.map((p) => (
          <li key={p.caption}>
            <figure>
              <img
                src={p.src[0]}
                srcSet={`${p.src[0]} 400w, ${p.src[1]} 800w, ${p.src[2]} 1200w`}
                sizes="(min-width: 1024px) 400px, 31vw"
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                alt={p.alt}
                className="block aspect-[4/5] w-full rounded-[16px] object-cover md:rounded-[22px] lg:rounded-[28px]"
              />
              <figcaption className="mt-2 text-[12px] font-semibold leading-[1.35] text-graphite md:mt-2.5 md:text-[14px]">{p.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

    </Wrap>
  );
}
