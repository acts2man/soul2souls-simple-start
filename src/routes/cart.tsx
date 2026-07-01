import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { formatPrice } from "@/data/shop";
import { useCart } from "@/components/cart/CartContext";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Soul 2 Souls Jazz" }] }),
  component: CartPage,
});

export function CartPage() {
  const { items, setQty, remove, subtotalCents } = useCart();

  return (
    <SiteLayout>
      <section className="pt-[20px]">
        <div className="mx-auto max-w-[1000px] px-[10px]">
          <h1 className="font-abel text-[42px] font-bold text-black">Cart</h1>

          {items.length === 0 ? (
            <div className="mt-[30px]">
              <p className="text-[18px] font-light text-black">Your cart is empty.</p>
              <Link
                to="/shop"
                className="mt-4 inline-block font-abel text-[18px] text-brand-purple"
              >
                ← Continue shopping
              </Link>
            </div>
          ) : (
            <>
              <ul className="mt-[30px] divide-y divide-e-border border-y border-e-border">
                {items.map((item) => (
                  <li key={item.slug} className="flex items-center gap-4 py-[20px]">
                    <Link to="/shop/$slug" params={{ slug: item.slug }} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={80}
                        className="h-[80px] w-[64px] object-cover"
                      />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link
                        to="/shop/$slug"
                        params={{ slug: item.slug }}
                        className="font-abel text-[18px] font-bold text-black hover:text-brand-purple"
                      >
                        {item.name}
                      </Link>
                      <p className="text-[15px] text-e-gray">{formatPrice(item.priceCents)}</p>
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center border border-e-border">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => setQty(item.slug, item.qty - 1)}
                        className="h-[40px] w-[40px] text-[18px] text-black transition-colors hover:bg-e-light"
                      >
                        −
                      </button>
                      <span className="w-[40px] text-center text-[15px] text-black">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => setQty(item.slug, item.qty + 1)}
                        className="h-[40px] w-[40px] text-[18px] text-black transition-colors hover:bg-e-light"
                      >
                        +
                      </button>
                    </div>

                    <div className="w-[90px] text-right font-abel text-[18px] text-black">
                      {formatPrice(item.priceCents * item.qty)}
                    </div>

                    <button
                      type="button"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => remove(item.slug)}
                      className="text-[13px] uppercase tracking-[1px] text-e-gray transition-colors hover:text-[#c0392b]"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              {/* Subtotal + checkout */}
              <div className="mt-[30px] flex flex-col items-end gap-4">
                <p className="text-[20px] text-black">
                  Subtotal:{" "}
                  <span className="font-abel font-bold">{formatPrice(subtotalCents)}</span>
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/shop"
                    className="flex min-h-[50px] items-center px-6 font-abel text-[16px] text-brand-purple"
                  >
                    Continue shopping
                  </Link>
                  <Link
                    to="/checkout"
                    className="flex min-h-[50px] items-center bg-brand-purple px-8 font-abel text-[16px] font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-purple-hover"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
