/**
 * AboutOurStory — "Our Story" split (capture: post-1767 section eccff54). Light
 * band. Two columns: portrait image left (37.webp, 407×459, col 42.464%) and
 * text right (col 57.454%). Static.
 *
 * - "OUR STORY" (903c149-style): Abel, 36px / 36px, 700, uppercase, #000, left.
 * - "A Legacy Rooted in Rhythm and Radio": Abel, 22px / 36px, 700, #000, left.
 * - Bio: Lato (body), 18px, #000.
 */
export function AboutOurStory() {
  return (
    <section className="px-4">
      <div className="mx-auto mt-[60px] flex max-w-[1230px] flex-col gap-10 tablet:flex-row tablet:items-start">
        <div className="tablet:w-[42.464%]">
          <img
            src="/images/about-our-story.webp"
            width={407}
            height={459}
            alt="JazzAmp aka DJ Perry"
            className="w-full"
          />
        </div>

        <div className="tablet:w-[57.454%]">
          <h2 className="font-abel text-[36px] font-bold uppercase leading-[36px] text-black">
            Our Story
          </h2>
          <h3 className="mt-2 font-abel text-[22px] font-bold leading-[36px] text-black">
            A Legacy Rooted in Rhythm and Radio
          </h3>
          <div className="mt-6 space-y-5 text-[18px] leading-[1.7] text-black">
            <p>
              Soul2Souls Jazz Musical Podcast LLC was born from a deep love for the art of sound.
              Founded and hosted by JazzAmp, a veteran of the entertainment and broadcasting
              industries, the platform is designed to deliver immersive, high-quality jazz
              experiences that blend curated playlists, artist interviews, and live show vibes.
            </p>
            <p>
              With over two decades of hands-on experience in radio, production, and artist
              management, JazzAmp brings a unique flavor to every episode — one that’s grounded in
              authenticity, musical excellence, and soulful storytelling.
            </p>
            <p>
              Whether you’re catching a live mix or listening on demand, Soul2Souls is more than a
              podcast — it’s a movement of music lovers, creators, and fans around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
