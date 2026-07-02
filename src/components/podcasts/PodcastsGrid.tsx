import { Reveal } from "@/components/motion/Reveal";
/**
 * PodcastsGrid — the 15 Mixcloud players (capture section 688170a).
 *
 * The capture stacks the players in a single full-width column inside the boxed
 * container (content 1210px = 1230 max-width − 10px padding), each iframe 120px
 * tall, with a ~24px vertical step between them (widget spacing). Section starts
 * 60px below the intro.
 *
 * Each iframe reuses the exact Mixcloud embed approach from the homepage
 * FeaturedMix (width 100%, height 120, frameBorder 0, same allow/sandbox), with
 * hide_cover=1&light=1 per the captured feed URLs. 15 iframes is heavy, so all
 * but the first two are loading="lazy".
 */

// Mixcloud feed slugs, in capture order (frames/0..14). Rendered via .map().
const FEEDS = [
  "party-at-marvins-house",
  "soul2soulsjazz-mix-rough-cut-tribe-9-6-25",
  "whos-that-lady-steppin-out-8825",
  "hey-its-ladies-nightwell-alright-8-9-25",
  "smooth-crazy-eights-bangin-81625",
  "72625-hot-coolsville-mix",
  "this-time-a-roundjazz-and-rb",
  "too-good-2-let-golets-bounce",
  "runnin-hotwell-alright-9-13-25",
  "aways-remember-the-girl-in-the-red-dress-9-5-25",
  "rock-out-bam-bam-8-30-25",
  "up-and-awayi-am-blessed-8-24-25",
  "im-gonna-love-you-freelyits-the-way-8-22-25",
  "sweet-homejokers-chelbis-get-it-on-chicago-buckle-up",
  "s2sjazz-mix",
] as const;

const MIX_WIDGET =
  "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FS2SJazz25%2F";

export function PodcastsGrid() {
  return (
    <section className="mt-[60px]">
      <Reveal variant="fadeInUp">
        <div className="mx-auto flex max-w-[var(--container-boxed)] flex-col gap-[24px] px-[10px]">
          {FEEDS.map((slug, i) => (
            <iframe
              key={slug}
              title={`Soul2SoulsJazz Mixcloud player — ${slug}`}
              width="100%"
              height="120"
              frameBorder="0"
              // 15 iframes is heavy — lazy-load all but the first two.
              {...(i >= 2 ? { loading: "lazy" as const } : {})}
              allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
              sandbox="allow-popups allow-top-navigation-by-user-activation allow-scripts"
              src={`${MIX_WIDGET}${slug}%2F`}
              className="block w-full"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
