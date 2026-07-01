import type { ComponentType, SVGProps } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { SocialLinks } from "./SocialLinks";
import { useOffcanvas } from "./OffcanvasContext";
import { useCart } from "@/components/cart/CartContext";
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
 * The Subscribe and Menu toggles open the two global off-canvas panels via the
 * OffcanvasContext; the panels themselves render at the router root (see
 * OffcanvasLayer) so the Menu's 3D page-push can transform the page.
 */

// Paths that have real routes (rendered as SPA <Link>s).
type RoutePath = "/" | "/about" | "/podcasts" | "/shop" | "/contact";

const NAV_ITEMS: { label: string; to: string; route: boolean }[] = [
  { label: "Home", to: "/", route: true },
  { label: "About", to: "/about", route: true },
  { label: "Podcasts", to: "/podcasts", route: true },
  { label: "Shop", to: "/shop", route: true },
  { label: "Contact", to: "/contact", route: true },
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

// Cart link + item-count badge, matching the off-canvas toggle colouring
// (brand-purple on light pages, white over the dark home hero).
function HeaderCart({ dark }: { dark: boolean }) {
  const { count } = useCart();
  return (
    <Link
      to="/cart"
      aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
      className={`relative flex items-center ${dark ? "text-brand-purple" : "text-white"}`}
    >
      {/* FontAwesome solid "shopping-cart", sized like the 25px toggle icons. */}
      <svg viewBox="0 0 576 512" className="h-[25px] w-auto" fill="currentColor" aria-hidden="true">
        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 416c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-[10px] -top-[8px] flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-purple px-[5px] text-[11px] font-bold leading-none text-white ring-2 ring-white">
          {count}
        </span>
      )}
    </Link>
  );
}

function OffcanvasToggle({
  label,
  Icon,
  dark,
  onClick,
}: {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  dark: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
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

  // Subscribe + Menu toggles drive the shared off-canvas state (panels render at
  // the router root).
  const { setPanel } = useOffcanvas();

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
        {isHome ? (
          // Home (template 7068): single row, no logo, white nav, over the hero.
          <div className="hidden desktop:block">
            <div className="mx-auto grid max-w-[var(--container-boxed)] grid-cols-3 items-center px-[30px] pb-[30px] pt-[60px]">
              <div aria-hidden="true" />
              <nav role="navigation" aria-label="Primary" className="flex justify-center">
                <NavMenu dark={dark} pathname={pathname} />
              </nav>
              <div className="flex items-center justify-end gap-8">
                <OffcanvasToggle
                  label="Subscribe"
                  Icon={PodcastIcon}
                  dark={dark}
                  onClick={() => setPanel("subscribe")}
                />
                <OffcanvasToggle
                  label="Menu"
                  Icon={BarsIcon}
                  dark={dark}
                  onClick={() => setPanel("menu")}
                />
                <HeaderCart dark={dark} />
              </div>
            </div>
          </div>
        ) : (
          // Light pages (template 6598): three columns — logo (17.642%, centered),
          // menu (56.864%, bottom-aligned, giving the "two-row" look), toggles
          // (24.719%, centered/right). padding 60/30, margin-bottom 75px.
          <div className="hidden desktop:block">
            <div className="mx-auto flex max-w-[var(--container-boxed)] px-[30px] pb-[30px] pt-[60px] tablet:mb-[75px]">
              {/* Logo column — vertically centered; image at 91.87% of the column */}
              <div className="flex w-[17.642%] items-center">
                <Link to="/" aria-label="Soul 2 Souls Jazz — home" className="block w-[91.87%]">
                  <img
                    src="/images/site-logo.webp"
                    width={500}
                    height={500}
                    alt="Soul 2 Souls Jazz"
                    className="w-full"
                  />
                </Link>
              </div>
              {/* Menu column — bottom-aligned and horizontally centered */}
              <nav
                role="navigation"
                aria-label="Primary"
                className="flex w-[56.864%] items-end justify-center"
              >
                <NavMenu dark={dark} pathname={pathname} />
              </nav>
              {/* Toggles column — vertically centered, right-aligned */}
              <div className="flex w-[24.719%] items-center justify-end gap-8">
                <OffcanvasToggle
                  label="Subscribe"
                  Icon={PodcastIcon}
                  dark={dark}
                  onClick={() => setPanel("subscribe")}
                />
                <OffcanvasToggle
                  label="Menu"
                  Icon={BarsIcon}
                  dark={dark}
                  onClick={() => setPanel("menu")}
                />
                <HeaderCart dark={dark} />
              </div>
            </div>
          </div>
        )}

        {/* 3 — Mobile / tablet bar ----------------------------------------- */}
        <div className="desktop:hidden">
          <div
            className={`mx-auto flex max-w-[var(--container-boxed)] items-center gap-6 px-[10px] py-4 ${
              isHome ? "justify-end" : "justify-between"
            }`}
          >
            {/* Light pages show the logo here too (left); home stays toggles-only. */}
            {!isHome && (
              <Link to="/" aria-label="Soul 2 Souls Jazz — home" className="block">
                <img
                  src="/images/site-logo.webp"
                  width={500}
                  height={500}
                  alt="Soul 2 Souls Jazz"
                  className="h-[64px] w-auto"
                />
              </Link>
            )}
            <div className="flex items-center gap-6">
              <OffcanvasToggle
                label="Subscribe"
                Icon={PodcastIcon}
                dark={dark}
                onClick={() => setPanel("subscribe")}
              />
              <OffcanvasToggle
                label="Menu"
                Icon={BarsIcon}
                dark={dark}
                onClick={() => setPanel("menu")}
              />
              <HeaderCart dark={dark} />
            </div>
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
