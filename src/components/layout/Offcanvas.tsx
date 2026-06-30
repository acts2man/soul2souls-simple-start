import { useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { InstagramIcon, TikTokIcon, YouTubeIcon, MixcloudIcon, TwitchIcon } from "./SocialLinks";

/**
 * Off-canvas slide-in panels — global chrome wired to the SiteHeader toggles.
 *
 * Mirrors the captured Sonaar/Elementor off-canvas panels (About capture
 * index.html):
 *   - Subscribe  → panel 7a79ce2 ("Subscribe & Follow"): purple (#61258d),
 *     550px, slide from the right. Heading + "subscribe to my podcast" + a
 *     MixCloud link box + the "Hosted by JazzAmp aka DJ Perry" photo/bio.
 *   - Menu       → panel b6293f6: light (#F9F9F9), 475px, slide from the right.
 *     Logo + the full vertical nav menu + a "Follow Us" social row.
 *
 * Both panels: position fixed, slide via translateX(100%)→0 over 500ms; a black
 * backdrop fades in (capture: container:after, 500ms); close on the X button,
 * a backdrop click, or Escape; body scroll locked while open. Close button:
 * top 50px / right 20px, fill #FFFFFF (Subscribe) or #61248D (Menu), the exact
 * 32×32 "cross" glyph from the capture.
 */

export type OffcanvasPanel = "subscribe" | "menu";

// Exact close glyph from the capture (two rotated 1px rects forming an X).
function CloseGlyph(props: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <rect
        x="15.5"
        y="3.3"
        width="1"
        height="25.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.6274 16)"
      />
      <rect
        x="3.3"
        y="15.5"
        width="25.5"
        height="1"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.6274 16)"
      />
    </svg>
  );
}

function OffcanvasShell({
  open,
  onClose,
  width,
  className,
  closeClassName,
  labelId,
  children,
}: {
  open: boolean;
  onClose: () => void;
  width: number;
  className: string;
  closeClassName: string;
  labelId: string;
  children: ReactNode;
}) {
  // Escape to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop — black 40%, 500ms fade (capture container:after). */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[99999] bg-black/40 transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Panel — slides in from the right over 500ms. */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelId}
        aria-hidden={!open}
        style={{ width: `${width}px` }}
        className={`fixed right-0 top-0 z-[100000] h-full max-w-full overflow-y-auto transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        } ${className}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close panel"
          className={`absolute right-[20px] top-[50px] z-[1] ${closeClassName}`}
        >
          <CloseGlyph className="h-[36px] w-[36px]" />
        </button>
        {children}
      </aside>
    </>
  );
}

/* — Subscribe panel (7a79ce2) ------------------------------------------------ */

export function SubscribePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <OffcanvasShell
      open={open}
      onClose={onClose}
      width={550}
      className="bg-brand-purple-alt"
      closeClassName="text-white"
      labelId="offcanvas-subscribe-title"
    >
      <div className="mx-auto w-full max-w-[450px] px-[15px] pb-[40px] pt-[60px]">
        {/* Subscribe & Follow — Oswald 36px/500, uppercase, lh 0.9 */}
        <h2
          id="offcanvas-subscribe-title"
          className="mt-[5px] font-oswald text-[36px] font-medium uppercase leading-[0.9] text-white"
        >
          Subscribe
          <br />
          &amp; Follow
        </h2>

        {/* Subscribe to my podcast — Abel 18px/700, uppercase, ls .5px, lh 1.7 */}
        <h3 className="mt-[20px] font-abel text-[18px] font-bold uppercase leading-[1.7] tracking-[0.5px] text-white">
          Subscribe to my podcast
          <br />
          www.soul2soulsjazz.com
        </h3>

        {/* MixCloud link box — bg #61248d, padding 40/15/30, shadow, width 96.881% */}
        <div className="mt-[20px] w-[96.881%] bg-brand-purple px-[15px] pb-[30px] pt-[40px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]">
          <a
            href="https://www.mixcloud.com/S2SJazz25/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-white transition-colors hover:text-[#dddddd]"
          >
            <MixcloudIcon className="h-6 w-6" />
            <span className="text-[18px]">MixCloud</span>
          </a>
        </div>

        {/* Hosted-by photo + name (inner 2-col). */}
        <div className="mt-[20px] flex items-center gap-5">
          <div className="w-1/2">
            <img
              src="/images/subscribe-host.webp"
              width={500}
              height={500}
              alt="JazzAmp aka DJ Perry"
              className="w-full"
            />
          </div>
          <div className="w-1/2">
            <p className="font-abel text-[12px] uppercase leading-[1.7] tracking-[0.5px] text-white">
              Hosted by
            </p>
            <p className="mt-[5px] font-oswald text-[24px] font-medium text-white">
              JazzAmp aka DJ Perry
            </p>
          </div>
        </div>

        {/* Bio — 14px/400, lh 1.6 */}
        <p className="mt-[20px] text-[14px] font-normal leading-[1.6] text-white">
          I have created a unique Jazz Musical Podcast that reflects my God-given passion,
          creativity, and skills for blending jazz genres, as well as 20+ years of experience in the
          entertainment industry. Join us for some &ldquo;jive talk&rdquo; and unique danceable jazz
          mixes with your family, friends, and others around the globe as we kick off a new and
          entertaining musical podcast!
        </p>
      </div>
    </OffcanvasShell>
  );
}

/* — Menu panel (b6293f6) ----------------------------------------------------- */

// Full nav menu from the capture. Home/About are real routes; the rest stay
// as plain anchors (placeholder paths) until their routes exist.
const MENU_ITEMS: { label: string; to: string; route: boolean }[] = [
  { label: "Home", to: "/", route: true },
  { label: "About", to: "/about", route: true },
  { label: "Podcasts", to: "/podcasts", route: false },
  { label: "S2S Gallery", to: "/gallery", route: false },
  { label: "Events", to: "/events", route: false },
  { label: "Shop", to: "/shop", route: false },
  { label: "Presskit", to: "/presskit", route: false },
  { label: "Contact", to: "/contact", route: false },
];

const MENU_SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/soul2soulsjazz25/", Icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@soul2soulsjazz/", Icon: TikTokIcon },
  { label: "YouTube", href: "https://www.youtube.com/@JazzAmpakaDJPerry/", Icon: YouTubeIcon },
  { label: "Mixcloud", href: "https://www.mixcloud.com/S2SJazz25/", Icon: MixcloudIcon },
  { label: "Twitch", href: "https://www.twitch.tv/soul2soulsjazz/", Icon: TwitchIcon },
];

export function MenuPanel({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  // Menu link: Lato 18px/600, #741F7E, 10px vertical padding (capture 714dd97).
  const linkClass =
    "block py-[10px] text-left font-sans text-[18px] font-semibold text-[#741F7E] transition-colors hover:text-brand-purple";

  return (
    <OffcanvasShell
      open={open}
      onClose={onClose}
      width={475}
      className="bg-[#F9F9F9]"
      closeClassName="text-brand-purple"
      labelId="offcanvas-menu-title"
    >
      <div className="mx-auto w-full max-w-[500px] px-[15px] pb-[40px] pt-[50px]">
        {/* Logo (capture image widget d2347d5 — 51% of the column). */}
        <Link to="/" onClick={onClose} aria-label="Soul 2 Souls Jazz — home" className="block">
          <img
            src="/images/site-logo.webp"
            width={500}
            height={500}
            alt="Soul 2 Souls Jazz"
            className="w-[51%]"
          />
        </Link>

        {/* Full vertical nav menu. */}
        <nav id="offcanvas-menu-title" aria-label="Site" className="mt-[30px]">
          <ul>
            {MENU_ITEMS.map((item) => {
              const active = pathname === item.to;
              return (
                <li key={item.label}>
                  {item.route ? (
                    <Link
                      to={item.to as "/" | "/about"}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={linkClass}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.to} className={linkClass}>
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Follow Us — Abel 14px, uppercase, ls 4px, #323437. */}
        <p className="mt-[40px] font-abel text-[14px] font-normal uppercase leading-none tracking-[4px] text-nav-link">
          Follow Us
        </p>
        <ul className="mt-[15px] flex items-center gap-[12px]">
          {MENU_SOCIAL.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="block text-brand-purple transition-colors hover:text-nav-link"
              >
                <Icon className="h-[21px] w-[21px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </OffcanvasShell>
  );
}
