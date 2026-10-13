import type { Screen } from "../../data/projects";

const phoneBase =
  "absolute overflow-hidden bg-white shadow-[0_28px_56px_-24px_rgba(31,31,31,0.35),0_0_0_1px_rgba(31,31,31,0.06)] transition-transform duration-500 ease-out";

/** Corner radius as a ratio of the screen size, so it scales with the phone. */
export const phoneRadius = { borderRadius: "11% / 5%" };

function Phone({ screen, className, eager }: { screen: Screen; className: string; eager?: boolean }) {
  return (
    <div className={`${phoneBase} ${className}`} style={phoneRadius}>
      <img
        src={screen.src}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Three phone screens on a neutral panel. The middle screen is the hero. Lifts slightly on group hover. */
export function PhoneTrio({ screens, eager }: { screens: [Screen, Screen, Screen]; eager?: boolean }) {
  const [left, center, right] = screens;
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#e9e6df] sm:aspect-[16/9]">
      <Phone
        screen={left}
        eager={eager}
        className="left-[-6%] top-[20%] w-[38%] sm:left-[12%] sm:top-[16%] sm:w-[24%] group-hover:-translate-y-1"
      />
      <Phone
        screen={right}
        eager={eager}
        className="right-[-6%] top-[20%] w-[38%] sm:right-[12%] sm:top-[16%] sm:w-[24%] group-hover:-translate-y-1"
      />
      <Phone
        screen={center}
        eager={eager}
        className="left-1/2 top-[8%] z-10 w-[46%] -translate-x-1/2 sm:top-[7%] sm:w-[28%] group-hover:-translate-y-2"
      />
    </div>
  );
}
