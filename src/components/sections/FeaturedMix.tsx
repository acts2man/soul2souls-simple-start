/**
 * FeaturedMix — "Friday's Featured Lunch Vibe Mix" (capture: Elementor sections
 * e72d613 [heading] + 9e8d79f [Mixcloud embed], combined here as one unit).
 * Light band (transparent → page background #f9f9f9).
 *
 * - Heading (2337b9d): Playfair Display, 45px, 600, centered, #000.
 * - Embed (0695273): the live Mixcloud widget iframe. The captured <iframe>
 *   attributes are reproduced exactly (width 100%, height 120, frameborder 0,
 *   the same allow/sandbox lists); its saved src pointed at the captured frame
 *   feed /S2SJazz25/20-sec-into-the-mix-i-new-you-where-a-pro/, wired here to
 *   the real Mixcloud widget URL.
 */
export function FeaturedMix() {
  return (
    <section className="px-4 py-[40px]">
      <div className="mx-auto max-w-[1230px]">
        <h2 className="text-center font-playfair-display text-[45px] font-semibold text-black">
          Friday’s Featured Lunch Vibe Mix
        </h2>

        <iframe
          title="Friday’s Featured Lunch Vibe Mix — Mixcloud player"
          width="100%"
          height="120"
          frameBorder="0"
          allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
          sandbox="allow-popups allow-top-navigation-by-user-activation allow-scripts"
          src="https://www.mixcloud.com/widget/iframe/?feed=%2FS2SJazz25%2F20-sec-into-the-mix-i-new-you-where-a-pro%2F"
          className="mt-6 block w-full"
        />
      </div>
    </section>
  );
}
