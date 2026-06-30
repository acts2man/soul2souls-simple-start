/**
 * AboutHero — About page title (capture: post-1767 section 23f45a6). Light band
 * (transparent → page background #f9f9f9). Static.
 *
 * - Title (6e68456): Abel, 36px / line-height 34px, weight 700, uppercase,
 *   letter-spacing 4px, centered, #000, preceded by the saxophone emoji (36.svg).
 * - Divider (0332ddc): 1px solid #000, 60px wide, centered, 50px padding above/below.
 */
export function AboutHero() {
  return (
    <section className="px-4 pt-[40px] text-center">
      <h1 className="mt-[50px] flex flex-wrap items-center justify-center gap-3 font-abel text-[36px] font-bold uppercase leading-[34px] tracking-[4px] text-black">
        <img src="/images/sax-emoji.svg" alt="" aria-hidden="true" className="h-[34px] w-auto" />
        About Soul2SoulsJazz Musical Podcast
      </h1>
      <div className="mx-auto my-[50px] h-px w-[60px] bg-black" />
    </section>
  );
}
