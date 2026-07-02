import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";

type RevealVariant = "fadeIn" | "fadeInUp";

type RevealProps = {
  /** The single element to reveal. Its layout is preserved — no wrapper is added. */
  children: ReactNode;
  /** Entrance animation, mirroring the original site's Elementor motions. */
  variant?: RevealVariant;
  /** Stagger delay in ms (matches the original's 400 / 800 cascades). */
  delay?: number;
  /** Override the animation duration in ms. */
  duration?: number;
  /** Reveal only once (default) or re-run every time it re-enters the viewport. */
  once?: boolean;
  /** Visible fraction (0–1) that triggers the reveal. */
  amount?: number;
};

/** Props we merge onto the child element. */
type RevealableProps = {
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLElement>;
  "data-reveal"?: RevealVariant;
};

/**
 * Reveal — eases its child in (fade / fade-up) once it scrolls into view,
 * restoring the entrance motion the original Elementor site had on headings,
 * text, images and buttons.
 *
 * It clones the single child rather than wrapping it, so the existing layout
 * (flex/grid/spacing) is untouched — only `data-reveal`, a ref, an `is-revealed`
 * class and the timing CSS vars are merged in. The actual keyframes and the
 * no-JS / reduced-motion guards live in styles.css.
 *
 * Usage: <Reveal variant="fadeInUp" delay={200}><h2 className="…">Title</h2></Reveal>
 */
export function Reveal({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration,
  once = true,
  amount = 0.15,
}: RevealProps) {
  const child = Children.only(children);
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: reveal immediately, skip the observer entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) io.disconnect();
          } else if (!once) {
            setRevealed(false);
          }
        }
      },
      { threshold: amount, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, amount]);

  if (!isValidElement(child)) return <>{children}</>;
  const element = child as ReactElement<RevealableProps>;
  const prev = element.props;

  const style: CSSProperties = { ...(prev.style ?? {}) };
  // CSS custom properties aren't in CSSProperties' typed keys — set via a view.
  const vars = style as Record<string, string>;
  if (delay) vars["--reveal-delay"] = `${delay}ms`;
  if (duration) vars["--reveal-duration"] = `${duration}ms`;

  return cloneElement(element, {
    ref,
    "data-reveal": variant,
    className:
      [prev.className, revealed ? "is-revealed" : ""].filter(Boolean).join(" ") || undefined,
    style,
  });
}
