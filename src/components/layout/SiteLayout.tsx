import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { AudioPlayerBar } from "./AudioPlayerBar";

/**
 * SiteLayout — global shell that wraps every page.
 *
 * Renders the fixed/sticky header, the page body, the footer, and the sticky
 * audio-player placeholder. The body is intentionally empty for now; page
 * sections get composed in between as they are built.
 *
 * `pb-[90px]` reserves room for the 90px fixed audio player so the footer is
 * never hidden behind it.
 */
export function SiteLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col pb-[90px]">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <AudioPlayerBar />
    </div>
  );
}
