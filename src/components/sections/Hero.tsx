import { Music } from "lucide-react";

/**
 * Hero — first content section below the header (capture: Elementor section
 * 5b343a3 on post-3050). Dark band with the audio-visualizer "peaks" graphic.
 *
 * Peaks background: STATIC IMAGE, not animation. The capture sets it via CSS:
 *   .elementor-element-5b343a3 { background-color:#19191b;
 *     background-image:url(images/29.webp); background-size:cover; ... }
 * We reuse that exact asset (public/images/hero-peaks-bg.webp). When the audio
 * player is built later, this can be swapped for a live visualizer.
 *
 * Values (colors, fonts, sizes, paddings) are taken verbatim from post-3050 CSS:
 *   - section: bg #19191b + peaks image, padding 200px 0 50px, color #fff
 *   - overlay: #000 @ 0.55 opacity
 *   - container: max-width 950px, min-height 750px
 *   - inner column panel: margin-top 90px, padding-right 40px, bg rgba(0,0,0,.3)
 *   - logo image (54.webp): width 69%
 *   - h1 (b940335): Playfair 32px/800, line-height 1.3em, #fff
 *   - subtext (ae96050): Poppins 21px (16px ≤767), line-height 1.2em, ls 1px
 *   - "Join Mixcloud" button (f5cc07e): #fff bg, #000 text, radius 0 30 30 30
 *   - jazzamp image (55.webp), "Listen Now" button (7ba8208): #B69A00 bg, abel
 */

const SUBTEXT_LINES = [
  "Experience Danceable Jazz, Contemporary, Smooth & Soul also",
  "Latin-infused jazz mixes—crafted with rhythms that move the body and",
  "keep the spirit of jazz alive. We celebrate jazz’s timeless essence",
  "while embracing fresh, innovative sounds that inspire movement, spark",
  "joy, and connect listeners across generations. Each mix delivers energy,",
  "sophistication, and danceable grooves that carry jazz confidently into",
  "the future.",
];

export function Hero() {
  return (
    <section
      className="relative bg-e-dark bg-[url('/images/hero-peaks-bg.webp')] bg-cover bg-center px-4 pb-[50px] pt-[200px] text-white tablet:px-0"
      // TODO: replace the static peaks image with a live audio visualizer once
      // the Sonaar audio player is wired up.
    >
      {/* Overlay — #000 @ 0.55 (capture .elementor-background-overlay) */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Boxed container: max-width 950px, min-height 750px */}
      <div className="relative z-10 mx-auto flex min-h-[750px] max-w-[950px] flex-col">
        {/* Inner column panel: margin-top 90px, padding-right 40px, bg rgba(0,0,0,.3) */}
        <div className="mt-[90px] flex flex-col items-center bg-black/30 pr-[40px] text-center tablet:items-end tablet:text-start desktop:items-center desktop:text-center">
          {/* Logo (54.webp) — width 69% */}
          <img
            src="/images/hero-logo.webp"
            width={851}
            height={262}
            alt="Soul 2 Souls — Premier Jazz"
            className="w-[69%]"
          />

          {/* Heading (b940335) */}
          <h1 className="mt-6 font-playfair text-[32px] font-extrabold leading-[1.3em] text-white">
            Danceable Jazz – Evolving for Tomorrow
          </h1>

          {/* Subtext (ae96050) */}
          <div className="mt-4 font-poppins text-[16px] leading-[1.2em] tracking-[1px] tablet:text-[21px]">
            {SUBTEXT_LINES.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>

          {/* Buttons + image row (inner section 920f899) */}
          <div className="mt-10 grid w-full grid-cols-1 items-center gap-6 tablet:grid-cols-3">
            {/* Join Mixcloud (f5cc07e) — right-aligned on desktop */}
            <div className="flex justify-center tablet:justify-end">
              <a
                href="https://www.mixcloud.com/S2SJazz25/"
                className="inline-flex items-center gap-[20px] rounded-[20px] bg-white px-[30px] py-[15px] font-poppins font-semibold text-black tablet:rounded-[0px_30px_30px_30px]"
              >
                <Music className="size-5 shrink-0" aria-hidden="true" />
                <span>Join Mixcloud</span>
              </a>
            </div>

            {/* JazzAmp image (55.webp) — overflows its column in the capture */}
            <div className="flex justify-center">
              <img
                src="/images/hero-jazzamp.webp"
                width={750}
                height={492}
                alt="Soul 2 Souls — hosted by JazzAmp"
                className="w-full max-w-[360px] tablet:w-[122%] tablet:max-w-none"
              />
            </div>

            {/* Listen Now (7ba8208) — desktop only in the capture */}
            <div className="hidden justify-center desktop:flex">
              <a
                href="https://soul2soulsjazz.com/podcasts/"
                className="inline-flex items-center rounded-[30px_30px_0px_30px] bg-brand-gold px-[30px] py-[15px] text-center font-abel font-extrabold uppercase tracking-[2px] text-e-dark transition-colors hover:bg-[#321551] hover:text-white"
              >
                Listen Now to Creatively blended Mixes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
