import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PRODUCTS, formatPrice } from "@/data/shop";
import { fetchProduct } from "@/lib/shop";
import { useCart } from "@/components/cart/CartContext";

export const Route = createFileRoute("/shop/$slug")({
  head: ({ params }) => {
    const p = PRODUCTS.find((x) => x.slug === params.slug);
    const title = p ? `${p.name} — Soul 2 Souls Jazz` : "Shop — Soul 2 Souls Jazz";
    return { meta: [{ title }, { property: "og:title", content: title }] };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  return <ProductDetailView slug={slug} />;
}

export function ProductDetailView({ slug }: { slug: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const { data: product } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProduct(slug),
    initialData: PRODUCTS.find((p) => p.slug === slug) ?? null,
  });

  if (!product) {
    return (
      <SiteLayout>
        <section className="pt-[40px]">
          <div className="mx-auto max-w-[1200px] px-[10px] text-center">
            <h1 className="font-abel text-[36px] font-bold text-black">Product not found</h1>
            <Link to="/shop" className="mt-4 inline-block text-brand-purple">
              ← Back to shop
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="pt-[20px]">
        <div className="mx-auto max-w-[1200px] px-[10px]">
          <Link to="/shop" className="text-[15px] text-brand-purple">
            ← Back to shop
          </Link>

          <div className="mt-[20px] flex flex-col gap-10 tablet:flex-row tablet:items-start">
            {/* Image */}
            <div className="tablet:w-[45%]">
              <img
                src={product.image}
                alt={product.name}
                width={170}
                height={300}
                className="mx-auto block w-full max-w-[420px]"
              />
            </div>

            {/* Info */}
            <div className="tablet:w-[55%]">
              <h1 className="font-abel text-[36px] font-bold leading-[40px] text-black">
                {product.name}
              </h1>
              <p className="mt-[10px] text-[24px] text-brand-purple">
                {formatPrice(product.priceCents)}
              </p>

              {product.description && (
                <p className="mt-[20px] text-[18px] font-light leading-[26px] text-black">
                  {product.description}
                </p>
              )}

              {/* Quantity selector */}
              <div className="mt-[30px] flex items-center gap-4">
                <span className="text-[11px] font-light uppercase tracking-[3px] text-black">
                  Quantity
                </span>
                <div className="flex items-center border border-e-border">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="h-[44px] w-[44px] text-[20px] text-black transition-colors hover:bg-e-light"
                  >
                    −
                  </button>
                  <span className="w-[44px] text-center text-[16px] text-black" aria-live="polite">
                    {qty}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                    className="h-[44px] w-[44px] text-[20px] text-black transition-colors hover:bg-e-light"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  add(product, qty);
                  setAdded(true);
                }}
                className="mt-[24px] min-h-[50px] w-full max-w-[280px] bg-brand-purple px-6 font-abel text-[16px] font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-purple-hover"
              >
                Add to cart
              </button>

              {added && (
                <p className="mt-[15px] text-[15px] text-e-gray" role="status" aria-live="polite">
                  Added to cart.{" "}
                  <Link to="/cart" className="text-brand-purple underline">
                    View cart
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
