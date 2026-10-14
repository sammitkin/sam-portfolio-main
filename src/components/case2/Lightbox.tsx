/* Tap-to-enlarge for product screenshots. Native <dialog>: modal focus trap, Escape to close,
   background made inert by the browser. Arrow keys and swipe move within a group. */
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { SIZES, type Img } from "../../data/caseImages";

export type LightboxItem = { img: Img; caption?: string };

type Ctx = { open: (items: LightboxItem[], index: number, trigger: HTMLElement | null) => void };
const LightboxContext = createContext<Ctx | null>(null);

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [index, setIndex] = useState(0);

  const open = useCallback((list: LightboxItem[], i: number, from: HTMLElement | null) => {
    trigger.current = from;
    setItems(list);
    setIndex(i);
  }, []);

  // Show the dialog once items are set.
  useEffect(() => {
    const d = dialog.current;
    if (!d || items.length === 0 || d.open) return;
    d.showModal();
    document.documentElement.style.overflow = "hidden";
    closeBtn.current?.focus();
  }, [items]);

  const close = useCallback(() => dialog.current?.close(), []);
  const go = useCallback((delta: number) => setIndex((i) => Math.min(items.length - 1, Math.max(0, i + delta))), [items.length]);

  const onClose = () => {
    document.documentElement.style.overflow = "";
    setItems([]);
    trigger.current?.focus();
  };

  const item = items[index];
  const many = items.length > 1;

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialog}
        aria-label={item ? `Enlarged image: ${item.img.alt}` : "Enlarged image"}
        onClose={onClose}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            // Keep focus cycling inside the dialog instead of escaping to the browser UI.
            const els = [...(dialog.current?.querySelectorAll<HTMLElement>("button:not([disabled])") ?? [])].filter(
              (el) => el.offsetParent !== null,
            );
            if (els.length === 0) return;
            const i = els.indexOf(document.activeElement as HTMLElement);
            const next = e.shiftKey ? (i <= 0 ? els.length - 1 : i - 1) : i === els.length - 1 ? 0 : i + 1;
            e.preventDefault();
            els[next].focus();
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
          }
        }}
        onClick={(e) => {
          // Click on the dark backdrop (the dialog itself, not its content) closes.
          if (e.target === e.currentTarget) close();
        }}
        className="pf-lightbox fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-night p-0 text-white backdrop:bg-transparent"
      >
        {item && (
          <div className="flex h-full flex-col" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="flex items-center justify-between gap-4 px-4 pb-2 pt-4 md:px-8 md:pt-6">
              <p className="text-[14px] font-bold text-on-night" aria-live="polite">
                {many ? `${index + 1} of ${items.length}` : ""}
              </p>
              <button
                ref={closeBtn}
                type="button"
                onClick={close}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-[18px] text-[15px] font-extrabold text-ink hover:bg-iris"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                Close
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-24"
              onClick={(e) => e.target === e.currentTarget && close()}
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchX.current == null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                touchX.current = null;
                if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              }}
            >
              <img
                key={item.img.src}
                src={item.img.src}
                srcSet={item.img.srcSet}
                sizes={item.img.srcSet ? SIZES.lightbox : undefined}
                alt={item.img.alt}
                width={item.img.width}
                height={item.img.height}
                decoding="async"
                className="pf-fade block h-auto max-h-full w-auto max-w-full rounded-[20px] object-contain md:rounded-[28px]"
              />
              {many && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    disabled={index === 0}
                    aria-label="Previous image"
                    className="absolute left-6 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink hover:bg-iris disabled:opacity-30 md:flex"
                  >
                    <Chevron dir="left" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    disabled={index === items.length - 1}
                    aria-label="Next image"
                    className="absolute right-6 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink hover:bg-iris disabled:opacity-30 md:flex"
                  >
                    <Chevron dir="right" />
                  </button>
                </>
              )}
            </div>

            <div className="flex items-center gap-3 px-4 pb-6 pt-3 md:justify-center md:px-8 md:pb-8">
              {many && (
                <button
                  type="button"
                  onClick={() => go(-1)}
                  disabled={index === 0}
                  aria-label="Previous image"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-ink disabled:opacity-30 md:hidden"
                >
                  <Chevron dir="left" />
                </button>
              )}
              <p className="min-w-0 flex-1 text-center text-[15px] font-semibold leading-[1.4] md:max-w-[44em] md:flex-none md:text-[16px]">
                {item.caption ?? item.img.alt}
              </p>
              {many && (
                <button
                  type="button"
                  onClick={() => go(1)}
                  disabled={index === items.length - 1}
                  aria-label="Next image"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-ink disabled:opacity-30 md:hidden"
                >
                  <Chevron dir="right" />
                </button>
              )}
            </div>
          </div>
        )}
      </dialog>
    </LightboxContext.Provider>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
      <path d={dir === "left" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A screenshot that opens the lightbox. Falls back to a plain image outside the provider. */
export function Zoomable({
  img,
  group,
  index = 0,
  className = "",
  imgClassName = "",
  loading = "lazy",
  sizes,
  children,
}: {
  img: Img;
  group?: LightboxItem[];
  index?: number;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
  children?: ReactNode;
}) {
  const lb = useLightbox();
  const image = (
    <img src={img.src} srcSet={img.srcSet} sizes={img.srcSet ? sizes : undefined} alt={img.alt} width={img.width} height={img.height} loading={loading} decoding="async" className={imgClassName} />
  );
  if (!lb) return <div className={`relative ${className}`}>{image}{children}</div>;
  return (
    <button
      type="button"
      onClick={(e) => lb.open(group ?? [{ img }], index, e.currentTarget)}
      aria-label={`View larger: ${img.alt}`}
      className={`group relative block w-full cursor-zoom-in text-left ${className}`}
    >
      {image}
      <span
        aria-hidden="true"
        className="absolute bottom-2.5 right-2.5 flex size-8 items-center justify-center rounded-full bg-ink/80 text-white opacity-90 transition-opacity group-hover:bg-ink group-hover:opacity-100 md:bottom-3 md:right-3"
      >
        <svg width="14" height="14" viewBox="0 0 16 16">
          <path d="M9.5 2.5h4v4M6.5 13.5h-4v-4M13.5 2.5L9 7M2.5 13.5L7 9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </button>
  );
}
