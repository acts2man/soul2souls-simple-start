/**
 * Sponsor — sponsorship CTA card (capture: Elementor section 4207d86 on
 * post-3050). Light band (transparent → page background #f9f9f9) with a bottom
 * shape divider and an inner card. Static (no JS).
 *
 * - Shape divider (4207d86 > .elementor-shape-bottom): SVG path
 *   "M0,6V0h1000v100L0,6z", fill #19191b, height 250px — a diagonal that bleeds
 *   into the dark area below.
 * - Card (e0dfc7b): linear-gradient(180deg,#ececec,#dddddd), radius 6px,
 *   box-shadow 0 0 20px 2px rgba(126,130,138,.5). Container max-width 900px.
 *   Two 50/50 inner columns:
 *     - left (95e3901): background image 30.webp (cover)
 *     - right (b1522fa, padding 30px):
 *         · heading (c4570f1): 28px / 34px, 800, uppercase, #000
 *         · text (c327620): 18px, letter-spacing 1px, with a purple underlined
 *           "Contact Us Today" link
 */
export function Sponsor() {
  return (
    <section className="px-4 pt-[20px]">
      <div className="mx-auto max-w-[900px]">
        <div className="overflow-hidden rounded-[6px] bg-gradient-to-b from-[#ececec] to-[#dddddd] shadow-[0px_0px_20px_2px_rgba(126,130,138,0.5)]">
          <div className="flex flex-col tablet:flex-row">
            {/* Left: vintage-mic image background (capture column 95e3901) */}
            <div
              className="min-h-[220px] bg-[url('/images/sponsor-mic.webp')] bg-cover bg-center tablet:min-h-[360px] tablet:w-1/2"
              aria-hidden="true"
            />

            {/* Right: copy */}
            <div className="p-[30px] tablet:w-1/2">
              <p className="font-sans text-[28px] font-extrabold uppercase leading-[34px] text-black">
                Would you like to become a Sponsor for our Jazz musical podcast that’s growing
                rapidly around the globe?
              </p>
              <p className="mt-[25px] text-[18px] tracking-[1px] text-black">
                Want{" "}
                <b>
                  to be a sponsor for the Jazz show?{" "}
                  <a
                    href="https://soul2soulsjazz.com/contact/"
                    className="text-brand-purple underline"
                  >
                    Contact Us Today
                  </a>{" "}
                </b>
                We’ll <strong>make you shine</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom shape divider (capture: section shape-bottom, path
          "M0,6V0h1000v100L0,6z", fill #19191b). Rendered in normal flow below
          the card as a slanted dark transition — in the capture it bleeds into a
          dark band that we skip (empty section 63e2ad6). */}
      <svg
        className="mt-[40px] block h-[120px] w-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,6V0h1000v100L0,6z" fill="#19191b" />
      </svg>
    </section>
  );
}
