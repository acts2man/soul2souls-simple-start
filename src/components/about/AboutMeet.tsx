/**
 * AboutMeet — "Meet JazzAmp aka DJ Perry" (capture: post-1767 section b2cbb12).
 * Light band. Two columns: image left (39.webp, 500×285), bio + career list +
 * quote right. Static.
 *
 * - Heading: Abel, 36px / 36px, 700, uppercase, #000, left.
 * - Body / list: Lato, 18px, #7e828a. Career Highlights is a nested list
 *   (one lead item with sub-items, as in the capture).
 * - Quote box: light panel, italic, left brand-purple border.
 */
const SUB_HIGHLIGHTS = [
  "Mixing of Souls INC. (Production) Charlotte, NC",
  "Created and implemented radio drops for “Zo’s Morning Show” on WOGR 1540 AM; WGAS 1420 AM; WOGR 93.3 FM",
  "WGIV 1370 AM – Radio broadcast DJ mix (SC)",
  "En Sound Internet Radio Broadcast DJ mix (Christian)",
  "EMERGE Entertainment Booking Artist & Management Agency. Here are just a few of the artists that Mr. Perry booked or sub booked for clients & concert tour dates – Lorenzo-Alpha Intl. /,, Freddie Jackson-Hush (FAJ) Records, Rome – MCA Records, Myron – Island Records, Horace Brown – MCA Records, Today – Motown Records, Comedian – Leon Redbone and Fred Hammond – Gospel R&P and others.",
  "WQXL 1470 AM Columbia, SC Christian Radio (Glory Communications) – Radio Announcer",
  "WOIC 1320 AM, Columbia, SC – R&B Radio (Willis Broadcasting) – Radio Announcer",
  "The Fountain Bleu Night Club – Pro House DJ (SC)",
];

export function AboutMeet() {
  return (
    <section className="px-4">
      <div className="mx-auto mt-[50px] flex max-w-[1230px] flex-col gap-10 tablet:flex-row tablet:items-start">
        {/* Image */}
        <div className="tablet:w-[42%]">
          <img
            src="/images/about-remix-2.webp"
            width={500}
            height={285}
            alt="DJ Perry Remix"
            className="w-full"
          />
        </div>

        {/* Bio + highlights + quote */}
        <div className="tablet:w-[58%]">
          <h2 className="font-abel text-[36px] font-bold uppercase leading-[36px] text-black">
            Meet JazzAmp aka DJ Perry
          </h2>

          <div className="mt-6 space-y-4 text-[18px] leading-[1.6] text-e-gray">
            <p>
              JazzAmp aka DJ Perry, the voice and vision behind Soul2Souls Jazz, has spent over 20
              years shaping the entertainment landscape in radio, comedy, and artist management.
            </p>
            <p>Career Highlights:</p>
          </div>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] leading-[1.5] text-e-gray">
            <li>
              Managed Regional Comedian Greg Lowe and arranging comedy bits (Virgil the Virgo,
              Impressions) for the Don “Early Bird” Allen Show, WWDM 101.3 FM Columbia, SC and WWWZ
              Z 93.9 FM Charleston, SC
              <ul className="mt-2 list-disc space-y-2 pl-6">
                {SUB_HIGHLIGHTS.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          </ul>

          <p className="mt-6 text-[18px] text-e-gray">Quote Box:</p>
          <blockquote className="mt-3 border-l-2 border-brand-purple bg-e-light/40 px-5 py-4 text-[18px] italic leading-[1.6] text-e-gray">
            “I’m not in this for fame—I’m here to build a community around the culture of sound.
            Soul2Souls is my way of giving back to the music that shaped me.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
