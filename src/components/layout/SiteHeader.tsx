import type { ComponentType, SVGProps } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { SocialLinks } from "./SocialLinks";
import { PodcastIcon, BarsIcon } from "@/components/icons/FaIcons";

/**
 * SiteHeader — global header / navigation (shared across pages).
 *
 * Mirrors the captured Sonaar/Elementor header:
 *   1. A thin purple top bar: contact email (left) + tagline heading (right).
 *   2. A boxed desktop nav row: spacer | horizontal menu | off-canvas toggles.
 *   3. A compact mobile bar exposing the same toggles below the desktop breakpoint.
 *   4. A fixed "Follow Us" social rail pinned to the right edge (desktop only).
 *
 * Route-aware, matching the capture's two header states:
 *   - Home ("/"): absolute overlay over the dark hero, with WHITE nav (template 7068).
 *   - Other routes (light pages, e.g. /about): in-flow (relative) with DARK nav
 *     (#323437 links, brand-purple toggles), matching template 6598's rendered nav.
 *
 * Home and About are real SPA <Link>s with an active-route underline; the
 * remaining items stay as plain anchors until their routes exist.
 *
 * NOTE (follow-ups, not in this component): the capture's light-page header also
 * shows the Soul2Souls logo and a two-row layout, and the Subscribe/Menu
 * off-canvas panels have real content — both tracked separately.
 */

// Paths that have real routes (rendered as SPA <Link>s).
type RoutePath = "/" | "/about";

const NAV_ITEMS: { label: string; to: string; route: boolean }[] = [
  { label: "Home", to: "/", route: true },
  { label: "About", to: "/about", route: true },
  { label: "Podcasts", to: "/podcasts", route: false },
  { label: "Shop", to: "/shop", route: false },
  { label: "Contact", to: "/contact", route: false },
];

function NavMenu({ dark, pathname }: { dark: boolean; pathname: string }) {
  return (
    <ul className="flex items-center">
      {NAV_ITEMS.map((item, i) => {
        const active = pathname === item.to;
        const linkClass = `group relative inline-block py-[18px] font-abel text-[18px] font-normal uppercase leading-none tracking-[2px] transition-colors ${
          dark ? "text-nav-link hover:text-brand-purple" : "text-white"
        }`;
        const underline = (
          // Sonaar "underline" pointer: 5px brand-purple bar — full-width when the
          // route is active, revealed on hover otherwise.
          <span
            className={`absolute bottom-0 left-0 h-[5px] bg-brand-purple transition-all duration-300 ${
              active ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        );
        return (
          <li key={item.label} className={i < NAV_ITEMS.length - 1 ? "mr-[40px]" : ""}>
            {item.route ? (
              <Link
                to={item.to as RoutePath}
                aria-current={active ? "page" : undefined}
                className={linkClass}
              >
                {item.label}
                {underline}
              </Link>
            ) : (
              <a href={item.to} className={linkClass}>
                {item.label}
                {underline}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function OffcanvasToggle({
  label,
  Icon,
  dark,
}: {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  dark: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 ${dark ? "text-brand-purple" : "text-white"}`}
      aria-label={label}
    >
      {/* Capture: off-canvas toggle icon font-size 25px */}
      <Icon className="h-[25px] w-auto" aria-hidden="true" />
      <span className="font-abel text-[13px] font-bold uppercase tracking-[2px]">{label}</span>
    </button>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  // Home overlays the dark hero (absolute, white nav); other pages are light, so
  // the header sits in flow with dark, visible nav.
  const dark = !isHome;

  return (
    <>
      <header className={isHome ? "absolute inset-x-0 top-0 z-[99]" : "relative z-[99]"}>
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
              <NavMenu dark={dark} pathname={pathname} />
            </nav>
            <div className="flex items-center justify-end gap-8">
              <OffcanvasToggle label="Subscribe" Icon={PodcastIcon} dark={dark} />
              <OffcanvasToggle label="Menu" Icon={BarsIcon} dark={dark} />
            </div>
          </div>
        </div>

        {/* 3 — Mobile / tablet bar ----------------------------------------- */}
        <div className="desktop:hidden">
          <div className="mx-auto flex max-w-[var(--container-boxed)] items-center justify-end gap-6 px-[10px] py-4">
            <OffcanvasToggle label="Subscribe" Icon={PodcastIcon} dark={dark} />
            <OffcanvasToggle label="Menu" Icon={BarsIcon} dark={dark} />
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
