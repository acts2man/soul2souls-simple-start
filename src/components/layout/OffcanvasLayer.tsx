import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SubscribePanel, MenuPanel } from "./Offcanvas";
import { useOffcanvas, useMediaQuery } from "./OffcanvasContext";

/**
 * The Menu panel uses the original's 3D page-push: the page (everything inside
 * <PagePusher/>) recedes and tilts on a purple stage while the light Menu panel
 * slides in. The push is desktop-only (≥768px) — on mobile there's no room for
 * perspective, so the Menu falls back to a plain slide.
 *
 * Final transform (tuned to the reference): the page scales to 0.72 and rotates
 * -8deg around Y (right edge receding, away from the incoming drawer), pivoting
 * at 35% × the viewport centre, over 500ms.
 */
const PUSH_QUERY = "(min-width: 768px)";

function useMenuPush() {
  const { panel } = useOffcanvas();
  const isDesktop = useMediaQuery(PUSH_QUERY);
  return { active: panel === "menu" && isDesktop, isDesktop };
}

/** Wraps the whole page; applies the 3D push transform when the Menu is open. */
export function PagePusher({ children }: { children: ReactNode }) {
  const { active } = useMenuPush();
  // Pivot the scale/rotate around the centre of the current viewport (the page
  // is taller than the viewport and scroll is locked while open, so capture the
  // offset when the push engages).
  const [originY, setOriginY] = useState(0);
  useEffect(() => {
    if (active) setOriginY(window.scrollY + window.innerHeight / 2);
  }, [active]);

  return (
    // perspective lives on the parent and is only applied while pushing, so it
    // never establishes a containing block for the page's fixed elements (e.g.
    // the "Follow Us" rail) when the menu is closed.
    <div className="relative z-[50]" style={active ? { perspective: "1000px" } : undefined}>
      <div
        style={{
          transformOrigin: `35% ${originY}px`,
          transform: active ? "scale(0.72) rotateY(-8deg)" : "none",
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
      {/* Purple stage revealed behind the receding page (desktop Menu only). */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[40] bg-brand-purple transition-opacity duration-500 ${
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
