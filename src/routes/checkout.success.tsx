import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { formatPrice } from "@/data/shop";

export const Route = createFileRoute("/checkout/success")({
  head: () => ({ meta: [{ title: "Order received — Soul 2 Souls Jazz" }] }),
  component: SuccessPage,
});

type LastOrder = {
  persisted: boolean;
  orderId: string | null;
  email: string;
  subtotalCents: number;
};

export function SuccessPage() {
  const [order, setOrder] = useState<LastOrder | null>(null);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem("s2s-last-order");
      if (raw) setOrder(JSON.parse(raw) as LastOrder);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <SiteLayout>
      <section className="pt-[40px]">
        <div className="mx-auto max-w-[720px] px-[10px] text-center">
          <h1 className="font-abel text-[42px] font-bold text-black">Order received</h1>
          <p className="mt-[16px] text-[18px] font-light leading-[26px] text-black">
            Thanks{order?.email ? `, we’ll email ${order.email}` : ""}! Your order has been
            recorded.
          </p>

          {order && (
            <p className="mt-[10px] text-[16px] text-e-gray">
              Order total: <span className="text-black">{formatPrice(order.subtotalCents)}</span>
              {order.orderId ? (
                <>
                  {" · "}Reference: <span className="text-black">{order.orderId.slice(0, 8)}</span>
                </>
              ) : null}
            </p>
          )}

          {/* No online payment — mirror the original store, which wasn't purchasable. */}
          <div className="mt-[24px] border border-e-border bg-e-light p-[20px] text-left">
            <p className="text-[15px] leading-[22px] text-black">
              <strong>Online payment isn’t enabled yet.</strong> The original store wasn’t
              purchasable, and no card was charged here. We’ve saved your order details and will
              reach out about payment and shipping.
            </p>
            {order && !order.persisted && (
              <p className="mt-[10px] text-[13px] leading-[20px] text-e-gray">
                Note: the shop backend isn’t configured, so this order was not saved to the database
                (Supabase env keys are missing). Add them to persist orders — see SHOP_SETUP.md.
              </p>
            )}
          </div>

          <div className="mt-[30px]">
            <Link
              to="/shop"
              className="inline-flex min-h-[50px] items-center bg-brand-purple px-8 font-abel text-[16px] font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-purple-hover"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
