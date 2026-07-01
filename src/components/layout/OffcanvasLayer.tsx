import { useEffect, useState, type ReactNode, type TransitionEvent } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SubscribePanel, MenuPanel } from "./Offcanvas";
import { useOffcanvas, useMediaQuery } from "./OffcanvasContext";

/**
 * The Menu panel uses the original's 3D page-push: the hero recedes and tilts on
 * a purple stage while the light Menu panel slides in. Desktop-only (≥768px) — on
 * mobile there's no room for perspective, so the Menu falls back to a plain slide.
 *
 * Transform read directly from the live site: rotateY(30deg) around a 35%-from-
 * left pivot plus a deep translateZ that pushes the page back through the 1000px
 * perspective — i.e. translate3d(-9px, 0, -1344px) rotateY(30deg). Pivots at 35%
 * × the viewport vertical centre, over 500ms.
 *
 * Only the hero (top viewport) is captured: while pushing, the content is clipped
 * to 100vh so the sections below the hero don't fan into the card. The Menu toggle
 * lives in the (non-sticky) header, so the menu can only be opened at the top of
 * the page — scrollY is ≈0 whenever the push engages.
 */
const PUSH_QUERY = "(min-width: 768px)";

function useMenuPush() {
  const { panel } = useOffcanvas();
  const isDesktop = useMediaQuery(PUSH_QUERY);
  return { active: panel === "menu" && isDesktop, isDesktop };
}

/** Wraps the whole page; applies the 3D hero push when the Menu is open. */
export function PagePusher({ children }: { children: ReactNode }) {
  const { active } = useMenuPush();
  // Pivot around the centre of the current viewport.
  const [originY, setOriginY] = useState(0);
  // `engaged` keeps the perspective + hero clip mounted through the *closing*
  // transition too, so the page slides back in 3D (one smooth motion with the
  // panel) instead of the perspective being torn down instantly (a "blink"). It
  // is released only once the transform transition finishes.
  const [engaged, setEngaged] = useState(false);

  useEffect(() => {
    if (active) {
      setOriginY(window.scrollY + window.innerHeight / 2);
      setEngaged(true);
    }
  }, [active]);

  const handleTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && e.propertyName === "transform" && !active) {
      setEngaged(false);
    }
  };

  return (
    // perspective lives on the parent and is only applied while engaged, so it
    // never establishes a containing block for the page's fixed elements (e.g.
    // the "Follow Us" rail) when the menu is closed. perspective-origin sits at
    // the viewport centre — while engaged the child clips to 100vh, so the parent
    // is viewport-tall and its centre already IS the viewport centre.
    <div
      className="relative z-[50]"
      style={engaged ? { perspective: "1000px", perspectiveOrigin: `50% ${originY}px` } : undefined}
    >
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          // Clip to one viewport so only the hero is captured (not the sections
          // below it). Kept through the close transition via `engaged`.
          height: engaged ? "100vh" : undefined,
          overflow: engaged ? "hidden" : undefined,
          transformOrigin: `35% ${originY}px`,
          // = translate3d(-9px, 0, -1344px) rotateY(30deg), read verbatim from
          // the live site (pushed back through the parent's 1000px perspective).
          transform: active
            ? "matrix3d(0.866025, 0, -0.5, 0, 0, 1, 0, 0, 0.5, 0, 0.866025, 0, -9, 0, -1344, 1)"
            : "none",
          transition: "transform 500ms ease",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Off-canvas layer — the purple push stage + both panels, rendered at the router
 * root OUTSIDE the pusher so the panels never tilt with the page.
 */
export function OffcanvasLayer() {
  const { panel, close } = useOffcanvas();
  const { active: menuPush, isDesktop } = useMenuPush();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      {/* Purple stage revealed behind the receding page (desktop Menu only).
          #7200d0 — brighter than the topbar's #61248d so the topbar doesn't
          drown into the background. */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[40] bg-[#7200d0] transition-opacity duration-500 ${
          menuPush ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <SubscribePanel open={panel === "subscribe"} onClose={close} />
      <MenuPanel
        open={panel === "menu"}
        onClose={close}
        pathname={pathname}
        isDesktop={isDesktop}
      />
    </>
  );
}
