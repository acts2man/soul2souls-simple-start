/**
 * PresskitComingSoon — the Presskit page placeholder. Light page (#f9f9f9),
 * transparent section, centred, boxed.
 *
 * The live Presskit page is a placeholder whose only page-specific content is a
 * single centred heading. It reuses the Events "Coming Soon!" heading treatment
 * verbatim — Abel, 36px / 36 line-height, 700, #000, centred, in the same
 * pt-[10px] boxed section — so the two pages match. The only differences from
 * Events: the text reads "Presskit Info Coming Soon!" and there is no
 * emoji/subtext block (Presskit is heading-only).
 */
export function PresskitComingSoon() {
  return (
    <section className="pt-[10px]">
      <div className="mx-auto max-w-[var(--container-boxed)] px-[10px]">
        {/* Presskit Info Coming Soon! — Abel 36px/700, centred (mirrors Events). */}
        <h1 className="text-center font-abel text-[36px] font-bold leading-[36px] text-black">
          Presskit Info Coming Soon!
        </h1>
      </div>
    </section>
  );
}
