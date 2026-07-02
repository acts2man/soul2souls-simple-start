import { Reveal } from "@/components/motion/Reveal";
/**
 * ChartTopping — "Chart-Topping Success!" band (capture: Elementor section
 * 4454a95 on post-3050). Dark purple band. Static (no JS).
 *
 * Background: solid #190924 (`.elementor-element-4454a95 { background-color:#190924 }`).
 *
 * Contents (all centered):
 *   - h2 "Chart-Topping Success!" — Abel, 36px/36px, 700, uppercase, #fff (4144c51)
 *   - h2 "From Soul2SoulsJazz WDJP - FM (Fun Music)" — 20px, #CFCFCF, uppercase (3114abf)
 *   - card (39b7c22 → 3b07d2d): translucent yellow #F7FF0047, radius 10px, padding 40px,
 *       max-width 801px — "Trending Week Over Week" (24px, #fff, 8430473) + the
 *       genre line.
 *   - h2 "Soul2SoulsJazz Musical Podcast Making Waves Globally" — Abel 36px, #fff (e61b68e)
 *   - paragraph (061563f) — Poppins, line-height 35px, #fff
 */
export function ChartTopping() {
  return (
    <section className="bg-[#190924] px-4 py-[60px] text-white">
      <Reveal variant="fadeInUp">
        <div className="mx-auto max-w-[1230px] text-center">
          <h2 className="font-abel text-[36px] font-bold uppercase leading-[36px]">
            Chart-Topping Success!
          </h2>
          <h2 className="mt-2 font-abel text-[20px] uppercase text-[#cfcfcf]">
            From Soul2SoulsJazz WDJP - FM (Fun Music)
          </h2>

          {/* Translucent yellow highlight card */}
          <div className="mx-auto mt-10 max-w-[801px] rounded-[10px] bg-[#F7FF0047] p-10">
            <h2 className="font-abel text-[24px] uppercase text-white">
              Trending Week Over Week
              <br />
              <br />
              DANCEABLE JAZZ, VOCAL JAZZ, CONTEMPORARY JAZZ, R&amp;B, SOUL JAZZ AND LATIN JAZZ
            </h2>
          </div>

          <h2 className="mt-5 font-abel text-[36px] font-bold uppercase leading-[36px]">
            Soul2SoulsJazz Musical Podcast Making Waves Globally
          </h2>

          <p className="mx-auto mt-6 max-w-[1100px] font-poppins leading-[35px]">
            We’re thrilled to announce that our danceable Jazz creations continue to rapidly advance
            on the global charts! A huge thank you to our amazing listeners and supporters around
            the world – your love for jazz keeps the soul in the music alive. Our mixes blend smooth
            rhythms, vibrant melodies and cool Jazz grooves that are clearly resonating throughout
            communities around the globe. If you haven’t heard it yet, now’s the perfect time to
            dive into the vibe. Let’s keep the momentum going, fingers snapping and continue to
            advance rapidly in the entertainment sectors! Stay tuned, stay blessed and stay soulful!
          </p>
        </div>
      </Reveal>
    </section>
  );
}
