import { MicrophoneAltIcon } from "@/components/icons/FaIcons";

/**
 * AboutShow — "About the Show" section (capture: Elementor section 80983a3 on
 * post-3050), the next content band below the "Click here to go live!" section.
 * (Between them sits an empty spacer section, c74ce09, which renders nothing.)
 *
 * Background: no background rule of its own → transparent, showing the page
 * background (#f9f9f9). Static — nothing JS-driven. CSS evidence:
 *   .elementor-element-80983a3 { margin-top:28px; margin-bottom:0px }  (no bg)
 *
 * Layout: two 50/50 columns (text left, portrait right). The right image column
 * is hidden below 768px in the capture; the text column's content is offset
 * 60px down from the section top (5069f33 populated margin-top:60px).
 *
 * Real values from post-3050 CSS (verified against the rendered capture):
 *   - eyebrow icon (a8bf521): fas fa-microphone-alt, #61248D, 25px
 *   - eyebrow text (8900639): "About the Show" — Abel, 18px, 700, uppercase, #000
 *   - welcome heading (08d0bbb): Poppins, 22px, 400, line-height 40px, #000
 *   - bio (9b4fec4): Poppins, 18px, line-height 30px, #000
 *   - portrait (bc983aa): images/56.webp, 500×666
 */
export function AboutShow() {
  return (
    <section className="mt-[28px]">
      <div className="mx-auto flex max-w-[1230px] flex-col gap-8 px-4 tablet:flex-row tablet:gap-6 tablet:px-[15px]">
        {/* Text column — offset 60px down from the section top on desktop */}
        <div className="tablet:mt-[60px] tablet:w-1/2">
          {/* Eyebrow: microphone icon + "About the Show" */}
          <div className="flex items-center gap-3">
            {/* Capture a8bf521: fas fa-microphone-alt, #61248D, 25px */}
            <MicrophoneAltIcon className="h-[25px] w-auto shrink-0 text-brand-purple" />
            <h2 className="font-abel text-[18px] font-bold uppercase text-black">About the Show</h2>
          </div>

          {/* Welcome heading */}
          <p className="mt-6 font-poppins text-[22px] font-normal leading-[40px] text-black">
            Welcome to the Soul2SoulsJazz WDJP FM (Fun Music)—more than stereo and better than 4K,
            our jazzy beat crafts a sophisticated sound synthesis.
          </p>

          {/* Bio */}
          <div className="mt-6 space-y-6 font-poppins text-[18px] leading-[30px] text-black">
            <p>
              I have created a unique Jazz Musical Podcast that reflects my God-given passion,
              creativity, and skills for blending jazz genres, as well as my over 20 years of
              experience in the entertainment industry.
            </p>
            <p>
              Join us for some “jive talk” and unique danceable jazz mixes with your family,
              friends, and others around the globe as we kick off a new and entertaining musical
              podcast!
            </p>
          </div>
        </div>

        {/* Portrait column — hidden below 768px in the capture */}
        <div className="hidden tablet:block tablet:w-1/2">
          <img
            src="/images/about-portrait.webp"
            width={500}
            height={666}
            alt="DJ Perry AKA JazzAmp in the studio"
            className="w-full max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
