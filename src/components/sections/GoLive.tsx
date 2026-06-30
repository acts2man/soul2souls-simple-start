/**
 * GoLive — the "Click here to go live!" band directly below the hero
 * (capture: Elementor section 18c8025 on post-3050).
 *
 * Background: the section has NO background rule of its own
 * (`.elementor-element-18c8025` → background-color: rgba(0,0,0,0)); it is
 * transparent and shows the page background (#f9f9f9). So this is a light band
 * sitting between the dark hero above and later dark sections below. Static —
 * nothing JS-driven here.
 *
 * Layout (content vertically centered — "elementor-section-content-middle"):
 *   - Left column (53.394% ≥768px): heading, left-aligned, with a 149px inner
 *     left margin (794d32b populated margin-left:149px).
 *   - Right column (45.939%): the CTA button, centered (556aa72 align-center).
 *   Below 768px the columns stack full-width and center.
 *
 * Real values from post-3050 CSS:
 *   - section: margin 40px 0 (top & bottom)
 *   - h2 (c315b3f): inherits theme h2 → Abel, 700, uppercase, #000;
 *     overridden to font-size 32px, line-height 45px; text-align start
 *   - button (46c4c6e): bg #61248D (e-global fb73db1), #fff, inherits Lato 26px,
 *     weight 600, border-radius 3px (Elementor default), padding 30px
 */
export function GoLive() {
  return (
    <section className="my-[40px]">
      <div className="mx-auto flex max-w-[1230px] flex-col items-center px-4 tablet:flex-row tablet:px-[15px]">
        {/* Heading column */}
        <div className="w-full text-center tablet:w-[53.394%] tablet:text-start">
          <h2 className="font-abel text-[32px] font-bold uppercase leading-[45px] text-black tablet:ml-[149px]">
            Click here to go live!
            <br />
            Fridays at 12pm noon CST &amp; Saturdays at 9:30pm CST
          </h2>
        </div>

        {/* CTA column */}
        <div className="mt-6 flex w-full justify-center tablet:mt-0 tablet:w-[45.939%]">
          <a
            href="https://www.mixcloud.com/S2SJazz25/"
            className="inline-block rounded-[3px] bg-brand-purple px-[30px] py-[30px] text-center font-sans text-[26px] font-semibold text-white"
          >
            Sign Up to Chat and Go Live!
          </a>
        </div>
      </div>
    </section>
  );
}
