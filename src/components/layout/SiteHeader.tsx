import type { ComponentType, SVGProps } from "react";
import { SocialLinks } from "./SocialLinks";
import { PodcastIcon, BarsIcon } from "@/components/icons/FaIcons";

/**
 * SiteHeader — global header / navigation.
 *
 * Mirrors the captured Sonaar/Elementor header (template 7068):
 *   1. A thin purple top bar: contact email (left) + tagline heading (right).
 *   2. A boxed desktop nav row: spacer | horizontal menu | off-canvas toggles.
 *   3. A compact mobile bar exposing the same toggles below the desktop breakpoint.
 *   4. A fixed "Follow Us" social rail pinned to the right edge (desktop only).
 *
 * All colors, fonts and spacing come from the design tokens in styles.css,
 * which were extracted from the live capture (see _reference/capture/).
 */

const NAV_ITEMS = [
  { label: "Home", href: "/", current: true },
  { label: "About", href: "/about" },
  { label: "Podcasts", href: "/podcasts" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

function NavMenu() {
  return (
    <ul className="flex items-center">
      {NAV_ITEMS.map((item, i) => (
        <li key={item.label} className={i < NAV_ITEMS.length - 1 ? "mr-[40px]" : ""}>
          <a
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className="group relative inline-block py-[18px] font-abel text-[18px] font-normal uppercase leading-none tracking-[2px] text-white transition-colors"
          >
            {item.label}
            {/* Sonaar "underline" pointer: 5px brand-purple bar revealed on hover.
                Over the dark hero the link text stays white (matching the capture's
                rendered nav); the purple bar is the active/hover indicator. */}
            <span
              className={`absolute bottom-0 left-0 h-[5px] bg-brand-purple transition-all duration-300 ${
                item.current ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

function OffcanvasToggle({
  label,
  Icon,
}: {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <button type="button" className="flex items-center gap-2 text-white" aria-label={label}>
      {/* Capture: off-canvas toggle icon font-size 25px */}
      <Icon className="h-[25px] w-auto" aria-hidden="true" />
      <span className="font-abel text-[13px] font-bold uppercase tracking-[2px]">{label}</span>
    </button>
  );
}

export function SiteHeader() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-[99]">
        {/* 1 — Top bar -------------------------------------------------------- */}
        <div className="bg-brand-purple text-white">
          <div className="mx-auto flex max-w-[var(--container-boxed)] items-center justify-between gap-4 px-4">
            <p className="py-2 text-center text-[18px]">info@soul2soulsjazz.com</p>
            <h2 className="hidden py-2 text-center font-abel text-[18px] font-normal uppercase tablet:block">
              It&apos;s the weekennnnd baby!
            </h2>
          </div>
        </div>

        {/* 2 — Desktop nav row (boxed) --------------------------------------- */}
        <div className="hidden desktop:block">
          <div className="mx-auto grid max-w-[var(--container-boxed)] grid-cols-3 items-center px-[30px] pb-[30px] pt-[60px]">
            <div aria-hidden="true" />
            <nav role="navigation" aria-label="Primary" className="flex justify-center">
              <NavMenu />
            </nav>
            <div className="flex items-center justify-end gap-8">
              <OffcanvasToggle label="Subscribe" Icon={PodcastIcon} />
              <OffcanvasToggle label="Menu" Icon={BarsIcon} />
            </div>
          </div>
        </div>

        {/* 3 — Mobile / tablet bar ----------------------------------------- */}
        <div className="desktop:hidden">
          <div className="mx-auto flex max-w-[var(--container-boxed)] items-center justify-end gap-6 px-[10px] py-4">
            <OffcanvasToggle label="Subscribe" Icon={PodcastIcon} />
            <OffcanvasToggle label="Menu" Icon={BarsIcon} />
          </div>
        </div>
      </header>

      {/* 4 — Fixed "Follow Us" social rail (desktop only) ------------------ */}
      {/* Rendered as a page-level sibling of <header> (not nested inside it):
          the header is an absolute z-[99] stacking context, so a rail nested
          within it can never paint above the z-[8000] footer. At the page root
          its own z-[9999] wins. Pinned to the right edge of the viewport
          (capture element 8cb3fbd: right:0; top:40vh). The wrapper is a
          content-sized fixed block so the purple panel never collapses; panel
          chrome lives on the inner div. */}
      <div className="fixed right-0 top-[40vh] z-[9999] hidden desktop:block">
        {/* Rotated "Follow Us" tab (capture element 968e2fb), left of the panel */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 -rotate-90">
          <div className="rounded-[6px_6px_0px_6px] bg-brand-purple-dark px-5 pb-[10px] pt-[5px] whitespace-nowrap">
            <span className="font-abel text-[14px] uppercase tracking-[1.3px] text-white">
              Follow Us
            </span>
          </div>
        </div>

        {/* Purple icon panel: bg #61248D, padding 40/15/30/15, shadow (no radius) */}
        <div className="bg-brand-purple pb-[30px] pl-[15px] pr-[15px] pt-[40px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
