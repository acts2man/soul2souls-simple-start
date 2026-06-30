/**
 * Mission — "Our mission is simple:" band (capture: Elementor section 2b270eb on
 * post-3050). Black band. Static (no JS).
 *
 * Background: solid #000 (`.elementor-element-2b270eb { background-color:#000000 }`),
 * padding 20px 0 15px, margin-top 50px.
 *
 * - Heading (6353c8d): Playfair, 70px / line-height 65px, with a vertical text
 *   gradient #670093 → #FFD800 (clipped to the text). Mobile: 33px / line-height 1em.
 * - Paragraph (2114150): Poppins, line-height 35px, #fff, centered, 150px side
 *   padding on desktop.
 */
export function Mission() {
  return (
    <section className="mt-[50px] bg-black px-4 pb-[15px] pt-[20px] text-white">
      <div className="mx-auto max-w-[1230px] text-center">
        <h2 className="mt-[34px] bg-gradient-to-b from-[#670093] to-brand-yellow bg-clip-text font-playfair text-[33px] leading-[1em] text-transparent tablet:text-[70px] tablet:leading-[65px]">
          Our mission is simple:
          <br />
          Authentic Jazz for the Global Soul
        </h2>

        <p className="mx-auto mt-6 max-w-[900px] font-poppins leading-[35px] tablet:px-[150px]">
          Amidst a world of digital beats and synthetic sounds, Soul2SoulsJazz delivers the real
          thing – live professional performances by DJ Perry – creatively blending digital music on
          the wheels of steel by implementing straight-ahead, danceable Jazz music with an emerging
          Latin flair. Music that celebrates tradition while keeping the rhythm alive – celebrating
          Jazz’s timeless essence.
        </p>
      </div>
    </section>
  );
}
