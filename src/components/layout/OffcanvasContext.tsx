import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";

export type OffcanvasPanel = "subscribe" | "menu";

type OffcanvasValue = {
  panel: OffcanvasPanel | null;
  setPanel: (p: OffcanvasPanel | null) => void;
  close: () => void;
};

const OffcanvasCtx = createContext<OffcanvasValue | null>(null);

/**
 * OffcanvasProvider — holds which off-canvas panel is open, lifted to the router
 * root so the page (inside the "pusher") can be transformed by the Menu panel's
 * 3D page-push while the panels themselves render outside the pusher.
 */
export function OffcanvasProvider({ children }: { children: ReactNode }) {
  const [panel, setPanel] = useState<OffcanvasPanel | null>(null);
  const value = useMemo<OffcanvasValue>(
    () => ({ panel, setPanel, close: () => setPanel(null) }),
    [panel],
  );
  return <OffcanvasCtx.Provider value={value}>{children}</OffcanvasCtx.Provider>;
}

export function useOffcanvas() {
  const ctx = useContext(OffcanvasCtx);
  if (!ctx) throw new Error("useOffcanvas must be used within an OffcanvasProvider");
  return ctx;
}

/**
 * useMediaQuery — SSR-safe matchMedia hook. Defaults to `true` (desktop) on the
 * server / first paint so the desktop 3D push is the no-flash default; corrected
 * on mount. Only consulted at interaction time, so the value is always settled
 * before the Menu panel opens.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(true);
  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}
