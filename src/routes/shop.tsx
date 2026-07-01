import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProductCard } from "@/components/shop/ProductCard";
import { PRODUCTS } from "@/data/shop";
import { fetchProducts } from "@/lib/shop";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Soul 2 Souls Jazz" },
      {
        name: "description",
        content: "Official Soul2SoulsJazz merch — tees, hoodies, hats, drinkware and more.",
      },
      { property: "og:title", content: "Shop — Soul 2 Souls Jazz" },
      { property: "og:description", content: "Official Soul2SoulsJazz merch." },
    ],
  }),
  component: Shop,
});

function Shop() {
  // Prefer Supabase; render the static catalog immediately and on fallback.
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialData: PRODUCTS,
  });

  return (
    <SiteLayout>
      <section className="pt-[10px]">
        <div className="mx-auto max-w-[1200px] px-[10px]">
          {/* Capture page-description heading. */}
          <h1 className="text-center font-abel text-[42px] font-bold text-black">Coming Soon!</h1>
          <p className="mt-[8px] text-center text-[15px] font-light text-e-gray">
            This shop is a preview — items aren’t available for purchase yet.
          </p>

          {/* WooCommerce columns-4 grid. */}
          <div className="mt-[40px] grid grid-cols-2 gap-x-[45px] gap-y-[40px] tablet:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
