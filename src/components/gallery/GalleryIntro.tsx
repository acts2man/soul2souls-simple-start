/**
 * GalleryIntro — the S2S Gallery heading band (capture section b28b4f6).
 *
 * The live page has a single heading widget (c6eaf18) and NO intro copy above
 * the grid, so this band is just the centered title.
 *
 * Re-derived from the capture CSS:
 *  - Boxed container, max-width 1230px (--container-boxed), centered, 10px pad
 *    (Elementor column padding).
 *  - Heading is the theme's post <h2> (`.sr_it-single-post h2`): font Abel,
 *    uppercase, color #000, centered.
 *  - Widget font-size 55px desktop, 37px at ≤767px (element c6eaf18 rules).
 *    Abel is condensed, so the title sits on one line on desktop; leading-[1.1]
 *    keeps a two-line mobile wrap legible (theme base h2 line-height is ~1em).
 */
export function GalleryIntro() {
  return (
    <section className="pt-[40px] pb-[10px]">
      <div className="mx-auto max-w-[var(--container-boxed)] px-[10px] text-center">
        <h2 className="font-abel text-[37px] font-normal uppercase leading-[1.1] text-black min-[768px]:text-[55px]">
          S2S Listeners and Supporters!
        </h2>
      </div>
    </section>
  );
}
