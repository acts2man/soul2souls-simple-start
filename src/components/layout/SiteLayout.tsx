import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/**
 * SiteLayout — global shell that wraps every page.
 *
 * Renders the fixed/sticky header, the page body, and the footer. The sticky
 * AudioPlayerBar is mounted at the router root (outside the route outlet) so it
 * persists across navigation — not here.
 *
 * `pb-[90px]` reserves room for the 90px fixed audio player so the footer is
 * never hidden behind it.
 *
 * `bg-page-bg` gives the page an OWN opaque background (matching the body's
 * #f9f9f9). Light pages otherwise inherit their white from the body, so the
 * Menu 3D push — which transforms the page onto the purple stage — would show a
 * transparent card that blends into the purple. An opaque page keeps the pushed
 * card solid.
 */
export function SiteLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-page-bg pb-[90px]">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
