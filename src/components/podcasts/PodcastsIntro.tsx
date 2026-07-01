/**
 * PodcastsIntro — the Podcasts page intro band (capture section dccf253).
 * Light page (#f9f9f9). The page-title band above it is display:none in the
 * capture, so this is the first visible section. Centered, boxed (max 1230px).
 *
 * - Heading (4cc4d1e): Abel, 36px / 36px, 700, #000, centred.
 * - "Want more?" line (c78c8c2): Lato, 18px, 300, #000; "Want more?" bold +
 *   underlined; the Mixcloud URL is a brand-purple (#61248d) link.
 * - Credit (8f2d8f4): Lato, 16px, 300, #000.
 */
export function PodcastsIntro() {
  return (
    <section className="pt-[10px]">
      <div className="mx-auto max-w-[var(--container-boxed)] px-[10px] text-center">
        <h2 className="font-abel text-[36px] font-bold leading-[36px] text-black">
          Feel free to enjoy some of our awesome mixes. Exclusive&apos;s require a subscription to
          Soul2SoulsJazz on Mixcloud for $3.99/month
        </h2>

        <p className="mt-[20px] text-[18px] font-light leading-[22px] text-black">
          <span className="font-bold underline">Want more?</span> View all of our shows at{" "}
          <a
            href="http://www.mixcloud.com/S2SJazz25"
            target="_blank"
            rel="noreferrer"
            className="text-brand-purple"
          >
            www.mixcloud.com/S2SJazz25
          </a>
        </p>

        <p className="mt-[20px] text-[16px] font-light leading-[22px] text-black">
          Intro/outro musical sound provided by SFR beats
        </p>
      </div>
    </section>
  );
}
