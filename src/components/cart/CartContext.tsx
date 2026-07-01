import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/data/shop";

/**
 * CartContext — client-side cart persisted to localStorage. Lives at the router
 * root so the catalog, product-detail, cart and checkout routes all share it.
 */

export type CartItem = {
  slug: string;
  name: string;
  priceCents: number;
  image: string;
  qty: number;
};

type CartValue = {
  items: CartItem[];
  add: (product: Product, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
  subtotalCents: number;
};

const CartCtx = createContext<CartValue | null>(null);
const STORAGE_KEY = "s2s-cart-v1";

function loadInitial(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadInitial);

  // Persist on every change.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota / private-mode errors */
    }
  }, [items]);

  const value = useMemo<CartValue>(() => {
    const add: CartValue["add"] = (product, qty = 1) => {
      setItems((cur) => {
        const existing = cur.find((i) => i.slug === product.slug);
        if (existing) {
          return cur.map((i) => (i.slug === product.slug ? { ...i, qty: i.qty + qty } : i));
        }
        return [
          ...cur,
          {
            slug: product.slug,
            name: product.name,
            priceCents: product.priceCents,
            image: product.image,
            qty,
          },
        ];
      });
    };

    const setQty: CartValue["setQty"] = (slug, qty) => {
      setItems((cur) =>
        qty <= 0
          ? cur.filter((i) => i.slug !== slug)
          : cur.map((i) => (i.slug === slug ? { ...i, qty } : i)),
      );
    };

    const remove: CartValue["remove"] = (slug) =>
      setItems((cur) => cur.filter((i) => i.slug !== slug));

    const clear = () => setItems([]);

    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotalCents = items.reduce((n, i) => n + i.qty * i.priceCents, 0);

    return { items, add, setQty, remove, clear, count, subtotalCents };
  }, [items]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
