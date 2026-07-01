import { supabase } from "./supabase";
import { PRODUCTS, type Product } from "@/data/shop";

/**
 * Shop data access. Every read prefers Supabase and falls back to the static
 * catalog (src/data/shop.ts) when Supabase env is missing or a query fails, so
 * the shop always renders.
 */

type ProductRow = {
  slug: string;
  name: string;
  price_cents: number;
  description: string | null;
  image: string | null;
  sort_order: number | null;
};

function fromRow(r: ProductRow): Product {
  return {
    id: r.sort_order ?? 0,
    slug: r.slug,
    name: r.name,
    priceCents: r.price_cents,
    image: r.image ?? "",
    description: r.description ?? "",
  };
}

export async function fetchProducts(): Promise<Product[]> {
  if (!supabase) return PRODUCTS;
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error || !data || data.length === 0) return PRODUCTS;
  return (data as ProductRow[]).map(fromRow);
}

export async function fetchProduct(slug: string): Promise<Product | null> {
  const staticMatch = PRODUCTS.find((p) => p.slug === slug) ?? null;
  if (!supabase) return staticMatch;
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error || !data) return staticMatch;
  return fromRow(data as ProductRow);
}

export type OrderItemInput = {
  slug: string;
  name: string;
  qty: number;
  unitPriceCents: number;
};

export type OrderInput = {
  email: string;
  fullName: string;
  shippingAddress: Record<string, string>;
  subtotalCents: number;
  items: OrderItemInput[];
};

/**
 * Persist a guest order (status 'pending_payment') + its line items. No payment
 * is taken. Returns { persisted: false } when Supabase isn't configured or the
 * insert fails, so checkout can still confirm and clear the cart.
 *
 * TODO(payment): before/after this insert is where a Stripe PaymentIntent (or a
 * Supabase edge function that creates one) would attach; status would then move
 * off 'pending_payment' on a successful charge.
 */
export async function createOrder(
  input: OrderInput,
): Promise<{ persisted: boolean; orderId?: string }> {
  if (!supabase) return { persisted: false };

  const { data: order, error } = await supabase
    .from("orders")
    .insert({
      email: input.email,
      full_name: input.fullName,
      shipping_address: input.shippingAddress,
      subtotal_cents: input.subtotalCents,
      status: "pending_payment",
    })
    .select("id")
    .single();

  if (error || !order) return { persisted: false };

  const rows = input.items.map((i) => ({
    order_id: order.id,
    product_slug: i.slug,
    name: i.name,
    qty: i.qty,
    unit_price_cents: i.unitPriceCents,
  }));
  const { error: itemsError } = await supabase.from("order_items").insert(rows);
  if (itemsError) return { persisted: true, orderId: order.id as string };

  return { persisted: true, orderId: order.id as string };
}
