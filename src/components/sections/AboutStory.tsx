import { ArrowCircleRightIcon } from "@/components/icons/FaIcons";
import { Reveal } from "@/components/motion/Reveal";

/**
 * AboutStory — "— About the show" origin-story split (capture: Elementor section
 * c36bf18 on post-3050). Light band (transparent → page background #f9f9f9),
 * padding-bottom 150px, content aligned to top. Static (no JS).
 *
 * Two 50/50 columns:
 *   Left (e8739a9): image 57.webp (500×285) + "Learn More" button (7f6dc0f):
 *     transparent bg, Abel 24px/800 uppercase, letter-spacing 2px, #61248d
 *     (hover #34144f), radius 30/30/0/30, arrow-circle-right icon, right-aligned.
 *   Right (84462b8, margin 25px 70px 0 0):
 *     - eyebrow h5 (c0a91ba): "— About the show" — Abel 14px/700 uppercase #61248d
 *     - bio (b3f2313): justified, 18px / line-height 36px, #7e828a, bold accents.
 */
export function AboutStory() {
  return (
    <section className="px-4 pb-[150px] pt-[40px]">
      <div className="mx-auto flex max-w-[1230px] flex-col gap-10 tablet:flex-row">
        {/* Left: image + Learn More */}
        <Reveal variant="fadeInUp">
          <div className="tablet:w-1/2">
            <img
              src="/images/about-remix.webp"
              width={500}
              height={285}
              alt="DJ Perry Remix — smooth, straight-ahead, Latin, classic jazz blend"
              className="w-full max-w-[500px]"
            />
            <div className="mt-6 flex justify-center tablet:justify-end">
              <a
                href="https://soul2soulsjazz.com/about-example-1/"
                className="inline-flex items-center gap-3 rounded-[30px_30px_0px_30px] font-abel text-[24px] font-extrabold uppercase tracking-[2px] text-brand-purple transition-colors hover:text-[#34144f]"
              >
                {/* Capture 7f6dc0f: fas fa-arrow-circle-right */}
                <ArrowCircleRightIcon className="h-6 w-auto shrink-0" />
                Learn More
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right: eyebrow + bio */}
        <Reveal variant="fadeInUp" delay={150}>
          <div className="tablet:mr-[70px] tablet:mt-[25px] tablet:w-1/2">
            <h5 className="font-abel text-[14px] font-bold uppercase text-brand-purple">
              — About the show
            </h5>
            <div className="mt-6 space-y-6 text-justify text-[18px] font-normal leading-[36px] text-e-gray">
              <p>
                Soul2Souls Jazz Musical Podcast LLC was born from a deep love for the art of sound.
                Founded and hosted by <strong>JazzAmp</strong>, a veteran of the entertainment and
                broadcasting industries, the platform is designed to deliver{" "}
                <strong>immersive, high-quality jazz experiences</strong> that blend various genres
                of jazz and live show vibes.
              </p>
              <p>
                With over two decades of hands-on experience in{" "}
                <strong>radio, production, and artist management</strong>, JazzAmp brings a unique
                flavor to every episode — one that’s grounded in authenticity, musical excellence,
                and soulful storytelling.
              </p>
              <p>
                Whether you’re catching a live mix or listening on demand, Soul2Souls is more than a
                podcast — it’s a movement of music lovers, creators, and fans around the world.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
