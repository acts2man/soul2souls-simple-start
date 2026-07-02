import { Reveal } from "@/components/motion/Reveal";
/**
 * EventsComingSoon — the Events page "Coming Soon!" placeholder (capture
 * sections ce24efd [heading] + 7805f90 [text block]). Light page (#f9f9f9),
 * transparent sections, centred, boxed.
 *
 * - Heading "Coming Soon!" (1537bb2): Abel, 36px / 36, 700, #000, centred.
 * - Text block (f9f6eb4, 46px below): Lato, 24px, 400, #000, centred, lh 22px,
 *   with inline Twemoji SVGs (24px = 1em) and brand-purple (#61248d) links.
 *   The capture stacks the lines as <div>s with &nbsp; spacer rows between them.
 */

// Inline emoji, mirroring WordPress's img.emoji (1em square, slight negative
// baseline offset), so it renders identically to the capture's Twemoji SVGs.
function Emoji({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className="mx-[0.07em] inline h-[1em] w-[1em] align-[-0.1em]"
    />
  );
}

const TADA = "/images/emoji-tada.svg";
const DIZZY = "/images/emoji-dizzy.svg";
const SPARKLES = "/images/emoji-sparkles.svg";
const MIC = "/images/emoji-mic.svg";

export function EventsComingSoon() {
  return (
    <section className="pt-[10px]">
      <div className="mx-auto max-w-[var(--container-boxed)] px-[10px]">
        {/* Coming Soon! — Abel 36px/700, centred. */}
        <Reveal variant="fadeInUp">
          <h1 className="text-center font-abel text-[36px] font-bold leading-[36px] text-black">
            Coming Soon!
          </h1>
        </Reveal>

        {/* Text block — Lato 24px, centred, 46px below the heading. */}
        <Reveal variant="fadeInUp" delay={150}>
          <div className="mt-[46px] text-center text-[24px] font-normal leading-[22px] text-black">
            <div>
              <Emoji src={TADA} alt="🎉" />
              Soul2SoulsJazz Live!
              <Emoji src={DIZZY} alt="💫" />
            </div>
            <div>&nbsp;</div>
            <div>A Blended Jazz Musical Podcast. Host, JazzAmp aka DJ Perry!</div>
            <div>&nbsp;</div>
            <div>
              <Emoji src={SPARKLES} alt="✨" /> 80’s – 2000’s old school R&amp;B and Danceable Jazz.
              <Emoji src={SPARKLES} alt="✨" />
            </div>
            <div>&nbsp;</div>
            <div>
              <Emoji src={MIC} alt="🎙️" />
              Have an upcoming Event? Contact Us! Now booking throughput the U.S.
            </div>
            <div>starting in March 2026!</div>
            <div>&nbsp;</div>
            <div>
              <Emoji src={DIZZY} alt="💫" />
              <a
                href="http://www.soul2soulsjazz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple"
              >
                www.Soul2SoulsJazz.com
              </a>
              <Emoji src={DIZZY} alt="💫" />
            </div>
            <div>
              <a
                href="mailto:info@soul2soulsjazz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple"
              >
                info@soul2soulsjazz.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
