import { Link } from "react-router-dom";
import { img, SIZES } from "../../data/caseImages";
import { Wrap } from "../layout/Wrap";

const dealsMid = img("deals/mid-chevron", "Mid-fi Chevron Local Deal that does not say which card is eligible");
const dealsLocal = img("deals/local", "Hi-fi Chevron Local Deal showing the exact eligible card");
const moveDash = img("moveease/dashboard", "MoveEase dashboard");
const moveCal = img("moveease/calendar", "MoveEase calendar");
const MOVE_SIZES = "(min-width: 768px) 180px, 100px";

/** Product windows: square corners, product color inside only (Brand System v2 shape rule). */
export function MoreWork() {
  return (
    <Wrap as="section" aria-label="More work" className="pt-[72px] md:pt-28 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:pt-32">
      <article id="deals" aria-labelledby="deals-title" className="lg:col-span-7">
        <div className="-mx-5 grid h-[380px] grid-cols-2 gap-3.5 overflow-hidden bg-deals px-5 pt-7 md:mx-0 md:h-[520px] md:gap-7 md:px-12 md:pt-10 lg:h-[540px]">
          <figure>
            <figcaption className="mb-2.5 text-[13px] font-bold text-deals-soft md:mb-3.5 md:text-[14px]">Round 1, mid-fi</figcaption>
            <img
              src={dealsMid.src}
              srcSet={dealsMid.srcSet}
              sizes={SIZES.pair}
              width={390}
              height={844}
              loading="lazy"
              decoding="async"
              alt={dealsMid.alt}
              className="block w-full rounded-t-[18px] md:rounded-t-[26px]"
            />
          </figure>
          <figure>
            <figcaption className="mb-2.5 text-[13px] font-bold text-white md:mb-3.5 md:text-[14px]">Round 2, hi-fi</figcaption>
            <img
              src={dealsLocal.src}
              srcSet={dealsLocal.srcSet}
              sizes={SIZES.pair}
              width={390}
              height={844}
              loading="lazy"
              decoding="async"
              alt={dealsLocal.alt}
              className="block w-full rounded-t-[18px] md:rounded-t-[26px]"
            />
          </figure>
        </div>
        <div className="mt-6 md:mt-7 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,4fr)] md:gap-6">
          <div>
            <h2 id="deals-title" className="text-[34px] font-extrabold leading-none tracking-[-0.04em] md:text-[40px]">
              Deals Hub
            </h2>
            <p className="mt-2 text-[20px] font-bold leading-[1.2] tracking-[-0.02em] md:mt-2.5 md:text-[22px]">
              Show the exact card before someone pays.
            </p>
          </div>
          <div>
            <p className="mt-3 text-[16px] font-medium leading-[1.55] md:mt-0 md:text-[17px]">
              In round one, 1 of 5 couldn't tell which card a Local Deal needed. After the fix, 5 of 5 found it on every
              offer type.
            </p>
            <p className="mt-2 text-[13px] font-medium text-graphite md:mt-2.5 md:text-[14px]">
              Student concept. Not affiliated with Bank of America.
            </p>
            <Link to="/deals-hub" className="pf-link mt-1.5 inline-flex min-h-11 items-center text-[16px] font-extrabold md:mt-2">
              Read the Deals Hub case study
            </Link>
          </div>
        </div>
      </article>

      <article
        id="moveease"
        aria-labelledby="moveease-title"
        className="mt-14 grid grid-cols-[132px_1fr] items-start gap-[18px] border-t-2 border-ink pt-5 md:mt-24 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10 md:border-t-0 md:pt-0 lg:col-span-4 lg:col-start-9 lg:mt-40 lg:block"
      >
        <div className="grid h-[176px] grid-cols-1 gap-[18px] overflow-hidden bg-move px-4 pt-[18px] md:h-[420px] md:grid-cols-2 md:px-9 md:pt-10">
          <img
            src={moveDash.src}
            srcSet={moveDash.srcSet}
            sizes={MOVE_SIZES}
            width={390}
            height={844}
            loading="lazy"
            decoding="async"
            alt={moveDash.alt}
            className="block w-full rounded-t-[14px] md:rounded-t-[22px]"
          />
          <img
            src={moveCal.src}
            srcSet={moveCal.srcSet}
            sizes={MOVE_SIZES}
            width={390}
            height={844}
            loading="lazy"
            decoding="async"
            alt={moveCal.alt}
            className="mt-12 hidden w-full rounded-t-[22px] md:block"
          />
        </div>
        <div>
          <p className="text-[13px] font-bold text-graphite md:text-[14px] lg:mt-7">Earlier work</p>
          <h2 id="moveease-title" className="mt-1 text-[28px] font-extrabold leading-none tracking-[-0.04em] md:mt-1.5 md:text-[40px]">
            MoveEase
          </h2>
          <p className="mt-2 text-[15px] font-medium leading-[1.5] md:mt-3 md:text-[17px] md:leading-[1.55]">
            <span className="hidden md:inline">Staying ahead of the admin after a move. </span>
            Testing led to two fixes: a labeled New Task button and a fully tappable row.
          </p>
          <Link to="/moveease" className="pf-link inline-flex min-h-11 items-center text-[15px] font-extrabold md:mt-2 md:text-[16px]">
            <span className="md:hidden">Read the case study</span>
            <span className="hidden md:inline">Read the MoveEase case study</span>
          </Link>
        </div>
      </article>
    </Wrap>
  );
}
