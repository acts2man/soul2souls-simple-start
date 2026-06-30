import { HeadphonesIcon, GlobeIcon, UsersIcon } from "@/components/icons/FaIcons";

/**
 * Pillars — three value props (capture: Elementor section fa1f392 on post-3050).
 * Black band. Static (no JS).
 *
 * Background: solid #000 (`.elementor-element-fa1f392 { background-color:#000000 }`),
 * padding-bottom 50px.
 *
 * Three icon boxes (844bfa4 / 1d59864 / e74cee5), each col-33, icon-above-title,
 * centered:
 *   - icon: gold #FFD800 (e-global 804b9a7), 50px
 *   - title (h3): Abel, 30px / 32px, 700, #fff
 *   - description: body (Lato) 18px / 22px, #fff
 *   - icon→content gap 15px
 */
// Capture fa1f392: fas fa-headphones / fa-globe / fa-users
const PILLARS = [
  {
    Icon: HeadphonesIcon,
    title: "Authentic",
    desc: "Every performance is crafted for both listening and dancing.",
  },
  {
    Icon: GlobeIcon,
    title: "Global",
    desc: "From New Orleans to Nigeria, Australia to California – we celebrate Jazz as a universal language that connects cultures.",
  },
  {
    Icon: UsersIcon,
    title: "Community",
    desc: "Building Jazz artist awareness and listeners, creating spaces where jazz lovers gather to discover, discuss, and celebrate.",
  },
];

export function Pillars() {
  return (
    <section className="bg-black px-4 pb-[50px] pt-[40px] text-white">
      <div className="mx-auto grid max-w-[1230px] grid-cols-1 gap-10 tablet:grid-cols-3">
        {PILLARS.map(({ Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center gap-[15px] text-center">
            {/* Capture: icon gold #FFD800, 50px */}
            <Icon className="h-[50px] w-auto text-brand-yellow" aria-hidden="true" />
            <h3 className="font-abel text-[30px] font-bold leading-[32px] text-white">{title}</h3>
            <p className="text-[18px] leading-[22px] text-white">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
