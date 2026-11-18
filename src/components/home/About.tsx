import work1 from "@/assets/images/about/work.webp";
import work2 from "@/assets/images/about/work@2x.webp";
import work3 from "@/assets/images/about/work@3x.webp";
import soccer1 from "@/assets/images/about/soccer.webp";
import soccer2 from "@/assets/images/about/soccer@2x.webp";
import soccer3 from "@/assets/images/about/soccer@3x.webp";
import hike1 from "@/assets/images/about/hike.webp";
import hike2 from "@/assets/images/about/hike@2x.webp";
import hike3 from "@/assets/images/about/hike@3x.webp";
import { Wrap } from "../layout/Wrap";

const PHOTOS = [
  { src: [work1, work2, work3], alt: "Sam styling a model’s hair with a comb and hairspray on an outdoor Redken shoot", caption: "On set for Redken." },
  { src: [soccer1, soccer2, soccer3], alt: "Sam and a teammate in black soccer kits holding a trophy on a field in Los Angeles", caption: "City league soccer, Los Angeles." },
  { src: [hike1, hike2, hike3], alt: "Sam in a yellow rain jacket in a Yosemite meadow below misty granite cliffs", caption: "Yosemite, one of 10 national parks so far." },
];

const PRINCIPLES = [
  { title: "Clarity over complexity.", body: "Every element earns its place. When in doubt, simplify." },
  { title: "Research before assumptions.", body: "Real understanding comes from listening." },
  { title: "Less, but better.", body: "Restraint is a skill." },
];

export function About() {
  return (
    <Wrap as="section" id="about" aria-labelledby="about-title" className="pt-[88px] md:pt-32 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:pt-40">
      <h2
        id="about-title"
        className="text-[48px] font-extrabold leading-[0.95] tracking-[-0.055em] md:text-[64px] lg:col-span-5 lg:text-[clamp(64px,5.85vw,84px)]"
      >
        Eleven years behind the chair.
      </h2>
      <div className="mt-5 max-w-[36em] text-[17px] font-medium leading-[1.6] md:mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:text-[19px] [&>p+p]:mt-3.5 lg:[&>p+p]:mt-[18px]">
        <p>
          Before product design, I spent more than 11 years in the barber industry, first in Russia, then in Los
          Angeles. I ran my own studio, trained other barbers and worked as a brand ambassador for Redken (L’Oréal).
          Thousands of clients sat in my chair.
        </p>
        <p>
          That work taught me what research now gives words to: ask good questions, listen past the first request, and
          notice when someone quietly stops coming back. Over time I got more interested in the systems around the chair,
          like booking, retention and the tools that get in the way, than in any single cut. Product design lets me work
          on those problems for more people at once.
        </p>
        <p>
          I trained at Designlab’s UX Academy and design products for people and small businesses: research first, then
          the simplest thing that works. I’m looking for a product designer role in Los Angeles, on-site or hybrid, or fully remote.
        </p>
        <p>
          Off the clock I play soccer in a city league and travel to hike: 10 US national parks so far. I also ride, lift
          and finished music school in piano with honors. I speak Russian and English.
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

      <ul className="mt-10 md:mt-14 lg:col-span-12 lg:mt-[72px]">
        {PRINCIPLES.map((p) => (
          <li key={p.title} className="border-t-2 border-ink py-4 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-x-6 lg:py-[22px]">
            <span className="block text-[22px] font-extrabold tracking-[-0.03em] lg:col-span-5 lg:text-[30px] lg:leading-[1.05] lg:tracking-[-0.035em]">
              {p.title}
            </span>
            <span className="mt-1 block text-[15px] font-medium leading-[1.5] text-body2 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:text-[17px]">{p.body}</span>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}
