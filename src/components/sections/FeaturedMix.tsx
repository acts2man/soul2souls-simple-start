import { Play } from "lucide-react";

/**
 * FeaturedMix — "Friday's Featured Lunch Vibe Mix" (capture: Elementor sections
 * e72d613 [heading] + 9e8d79f [Mixcloud embed], combined here as one unit since
 * the embed has no meaning without its heading). Light band (transparent → page
 * background #f9f9f9).
 *
 * - Heading (2337b9d): Playfair Display, 45px, 600, centered, #000.
 * - Embed (0695273): the capture renders a Mixcloud <iframe> (width 100%,
 *   height 120) loading an external player. Per task scope, this is a third-party
 *   embed rendered here as a STATIC placeholder.
 *   TODO: replace the placeholder with the real Mixcloud iframe embed when wiring
 *   live audio (https://www.mixcloud.com/S2SJazz25/).
 */
export function FeaturedMix() {
  return (
    <section className="px-4 py-[40px]">
      <div className="mx-auto max-w-[1230px]">
        <h2 className="text-center font-playfair-display text-[45px] font-semibold text-black">
          Friday’s Featured Lunch Vibe Mix
        </h2>

        {/* Static placeholder for the Mixcloud player embed (height 120 like the capture) */}
        <a
          href="https://www.mixcloud.com/S2SJazz25/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex h-[120px] w-full items-center gap-4 rounded-md bg-e-dark px-6 text-white transition-colors hover:bg-black"
          aria-label="Open the featured mix on Mixcloud"
        >
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-purple">
            <Play className="size-6" fill="currentColor" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-abel text-[18px] leading-tight">
              Friday’s Featured Lunch Vibe Mix
            </span>
            <span className="block text-sm text-white/70">
              Listen on Mixcloud — player embed coming soon
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
