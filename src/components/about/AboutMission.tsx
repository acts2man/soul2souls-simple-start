/**
 * AboutMission — "The Mission" split (capture: post-1767 section 4a42f7d). Light
 * band. Two columns: text left, image right (38.webp, 749×429). Static.
 *
 * - "THE MISSION": Abel, 36px / 36px, 700, uppercase, centered, #000.
 * - "MORE THAN MUSIC. A MOVEMENT.": Abel, 22px / 36px, 700, uppercase, centered.
 * - "We exist to:" + bullet list: Lato, 18px, #7e828a.
 * - Pull-quote: italic, left brand-purple border.
 */
const POINTS = [
  "Celebrate Jazz and R&B across all subgenres",
  "Amplify underrepresented artists, producers, and voices in the jazz community",
  "Provide a platform for storytelling, discovery, and soul-stirring soundscapes",
  "Connect listeners with live mixes, exclusive content, and unforgettable moments",
];

export function AboutMission() {
  return (
    <section className="px-4">
      <div className="mx-auto mt-[50px] flex max-w-[1230px] flex-col gap-10 tablet:flex-row tablet:items-center">
        {/* Text column */}
        <div className="tablet:w-1/2">
          <h2 className="text-center font-abel text-[36px] font-bold uppercase leading-[36px] text-black">
            The Mission
          </h2>
          <h3 className="mt-2 text-center font-abel text-[22px] font-bold uppercase leading-[36px] text-black">
            More Than Music. A Movement.
          </h3>

          <p className="mt-8 text-[18px] text-e-gray">We exist to:</p>
          <ul className="mt-3 list-disc space-y-3 pl-6 text-[18px] leading-[1.5] text-e-gray">
            {POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <blockquote className="mt-8 border-l-2 border-brand-purple pl-5 text-[18px] italic leading-[1.6] text-e-gray">
            “It’s not just about what you hear—it’s about what you feel.” – JazzAmp aka DJ Perry
          </blockquote>
        </div>

        {/* Image column */}
        <div className="tablet:w-1/2">
          <img
            src="/images/about-mission.webp"
            width={749}
            height={429}
            alt="JazzAmp in the studio"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
