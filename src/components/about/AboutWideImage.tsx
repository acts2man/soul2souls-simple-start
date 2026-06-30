/**
 * AboutWideImage — full-width photo band (capture: post-1767 section ab6bfe7).
 * Light band, margin 70px top/bottom (0 on mobile). Image 40.webp (750×520),
 * centered. Static.
 */
export function AboutWideImage() {
  return (
    <section className="px-4 tablet:my-[70px]">
      <div className="mx-auto max-w-[1230px]">
        <img
          src="/images/about-wide.webp"
          width={750}
          height={520}
          alt="Soul2SoulsJazz"
          className="mx-auto w-full max-w-[750px]"
        />
      </div>
    </section>
  );
}
