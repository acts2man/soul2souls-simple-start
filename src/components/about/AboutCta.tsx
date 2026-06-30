import { LongArrowRightIcon } from "@/components/icons/FaIcons";

/**
 * AboutCta — closing call-to-action (capture: post-1767 section ba7a213). Light
 * band, centered. margin-top 70px, margin-bottom 100px. Static.
 *
 * - "The Movement Continues" (f17ac80): Abel, 36px / 34px, 700, uppercase,
 *   letter-spacing 4px, centered, #000.
 * - "Unlock the Soul2SoulsJazz Exclusive Experience" (ee07763): Abel, 18px / 34px,
 *   weight 400, uppercase, letter-spacing 5px, centered, #000.
 * - Button (c24e40e): #61248d bg, white, 16px uppercase, radius 100px, padding
 *   15px 30px, trailing fa-long-arrow-alt-right (gap 23px), hover #28134c.
 */
export function AboutCta() {
  return (
    <section className="px-4 tablet:mt-[70px] tablet:mb-[100px]">
      <div className="mx-auto max-w-[1230px] py-12 text-center">
        <h1 className="font-abel text-[36px] font-bold uppercase leading-[34px] tracking-[4px] text-black">
          The Movement Continues
        </h1>
        <h2 className="mt-[10px] font-abel text-[18px] font-normal uppercase leading-[34px] tracking-[5px] text-black">
          Unlock the Soul2SoulsJazz Exclusive Experience
        </h2>

        <div className="mt-[50px] flex justify-center">
          <a
            href="https://soul2soulsjazz.com/contact/"
            className="inline-flex items-center gap-[23px] rounded-[100px] bg-brand-purple px-[30px] py-[15px] text-[16px] uppercase text-white transition-colors hover:bg-[#28134c]"
          >
            Contact Us
            <LongArrowRightIcon className="h-4 w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}
