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
    <>
      <section className="relative px-4 pb-[120px] pt-[20px]">
        {/* Shape-bottom divider (capture: path "M0,6V0h1000v100L0,6z", fill
          #19191b, height 250px), anchored to the section bottom BEHIND the card.
          Elementor rotates shape-bottom 180° (transform: matrix(-1,0,0,-1,0,0)),
          so the dark is tall on the LEFT and full-width at the seam — matching
          the capture. It shows around the card's lower half and bleeds straight
          into the dark band (63e2ad6) below. */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 block h-[250px] w-full rotate-180"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,6V0h1000v100L0,6z" fill="#19191b" />
        </svg>

        <div className="relative z-10 mx-auto max-w-[900px]">
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
      </section>

      {/* Dark band below the section (capture: empty spacer section 63e2ad6 —
          background-color #19191b, padding 100px 0; collapses to 0 on mobile).
          The shape divider above bleeds straight into this band. */}
      <div className="bg-[#19191b] tablet:py-[100px]" aria-hidden="true" />
    </>
  );
}
