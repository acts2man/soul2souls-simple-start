import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/shop";
import { useCart } from "@/components/cart/CartContext";

/**
 * ProductCard — one WooCommerce-style grid card (capture li.product):
 * portrait image + title (Abel 18px/700 #000, centred) + price (Lato ~15px,
 * brand-purple #61248d, centred) + an "Add to cart" action (purple, centred).
 */
export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="text-center">
      <Link
        to="/shop/$slug"
        params={{ slug: product.slug }}
        className="block"
        aria-label={product.name}
      >
        <img
          src={product.image}
          alt={product.name}
          width={170}
          height={300}
          loading="lazy"
          className="block w-full"
        />
        <h2 className="py-[9px] font-abel text-[18px] font-bold leading-tight text-black">
          {product.name}
        </h2>
      </Link>
      <p className="text-[15px] text-brand-purple">{formatPrice(product.priceCents)}</p>
      <button
        type="button"
        onClick={() => add(product)}
        className="mt-[10px] px-[20px] py-[8px] font-abel text-[18px] text-brand-purple transition-colors hover:text-brand-purple-hover"
      >
        Add to cart
      </button>
    </div>
  );
}
