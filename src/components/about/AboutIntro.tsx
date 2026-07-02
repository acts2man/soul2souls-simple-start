import { Reveal } from "@/components/motion/Reveal";
/**
 * AboutIntro — tagline + lead statement (capture: post-1767 section 63196a1).
 * Light band. Boxed to 900px, centered block; static.
 *
 * - Eyebrow (8cc9a0b): Abel, 14px, weight 400, uppercase, line-height 34px,
 *   letter-spacing 1px, centered, #000.
 * - Lead (903c149): Abel, 30px / line-height 38px, weight 700, #000, left-aligned.
 */
export function AboutIntro() {
  return (
    <section className="px-4">
      <Reveal variant="fadeInUp">
        <div className="mx-auto mt-[60px] max-w-[900px] tablet:mt-[100px]">
          <p className="text-center font-abel text-[14px] font-normal uppercase leading-[34px] tracking-[1px] text-black">
            Amplifying Jazz, One Soul at a Time.
          </p>
          <h2 className="mt-5 font-abel text-[30px] font-bold leading-[38px] text-black">
            Founded by Mr. Perry (JazzAmp aka DJ Perry), Soul2SoulsJazz is a multi-dimensional
            musical podcast that celebrates the sound, spirit, and stories of jazz culture.
          </h2>
        </div>
      </Reveal>
    </section>
  );
}
