/**
 * Soul2SoulsJazz shop catalog — extracted from the WooCommerce archive capture
 * (_reference/shop-capture) in grid order. 16 simple products.
 *
 * This static list is the source of truth for the seed (supabase/seed.sql) and
 * the offline fallback when Supabase env is not configured (see src/lib/shop.ts).
 * The original store showed a "Coming Soon!" banner — products were not
 * purchasable; there is no online payment here either.
 */
export type Product = {
  id: number;
  slug: string;
  name: string;
  priceCents: number;
  image: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "24-oz-mia-recycled-acrylic-tumbler",
    name: "24 oz. Mia Recycled Acrylic Tumbler",
    priceCents: 1995,
    image: "/images/shop/24-oz-mia-recycled-acrylic-tumbler.webp",
    description: "",
  },
  {
    id: 2,
    slug: "dj-perry-remix-gildan-softstyle-jersey-t-shirt",
    name: "DJ Perry Remix – Gildan Softstyle Jersey T-shirt",
    priceCents: 3500,
    image: "/images/shop/dj-perry-remix-gildan-softstyle-jersey-t-shirt.webp",
    description: "",
  },
  {
    id: 3,
    slug: "hoodie-ladies-white-front-logo",
    name: "Hoodie Ladies White (Front Logo)",
    priceCents: 8495,
    image: "/images/shop/hoodie-ladies-white-front-logo.webp",
    description: "",
  },
  {
    id: 4,
    slug: "hoodie-ladies-white-logo-on-back",
    name: "Hoodie Ladies White (logo on back)",
    priceCents: 8495,
    image: "/images/shop/hoodie-ladies-white-logo-on-back.webp",
    description: "",
  },
  {
    id: 5,
    slug: "hoodie-mens-black-white-tie-dye",
    name: "Hoodie Mens Black & White Tie Dye",
    priceCents: 8400,
    image: "/images/shop/hoodie-mens-black-white-tie-dye.webp",
    description: "",
  },
  {
    id: 6,
    slug: "ladies-curved-hem-tri-blend-long-sleeve-tunic-t-shirt",
    name: "Ladies Curved Hem Tri-Blend Long Sleeve Tunic T-shirt",
    priceCents: 5700,
    image: "/images/shop/ladies-curved-hem-tri-blend-long-sleeve-tunic-t-shirt.webp",
    description: "",
  },
  {
    id: 7,
    slug: "laser-engraved-15-oz-stemless-wine-glass-set-of-2",
    name: "Laser Engraved 15 oz. Stemless Wine Glass (Set of 2)",
    priceCents: 4995,
    image: "/images/shop/laser-engraved-15-oz-stemless-wine-glass-set-of-2.webp",
    description: "",
  },
  {
    id: 8,
    slug: "laser-engraved-marble-and-bamboo-coasters-set-of-4",
    name: "Laser Engraved Marble and Bamboo Coasters (Set of 4)",
    priceCents: 5295,
    image: "/images/shop/laser-engraved-marble-and-bamboo-coasters-set-of-4.webp",
    description: "",
  },
  {
    id: 9,
    slug: "s2s-10-oz-glass-coffee-mug",
    name: "S2S 10 oz. Glass Coffee Mug",
    priceCents: 2495,
    image: "/images/shop/s2s-10-oz-glass-coffee-mug.webp",
    description: "",
  },
  {
    id: 10,
    slug: "s2s-bio-washed-hat-engraved-circle-faux-leather-patch",
    name: "S2S Bio-Washed Hat – Engraved Circle Faux Leather Patch",
    priceCents: 4500,
    image: "/images/shop/s2s-bio-washed-hat-engraved-circle-faux-leather-patch.webp",
    description: "",
  },
  {
    id: 11,
    slug: "s2s-canvas-tote-bag",
    name: "S2S Canvas Tote Bag",
    priceCents: 5000,
    image: "/images/shop/s2s-canvas-tote-bag.webp",
    description: "",
  },
  {
    id: 12,
    slug: "s2s-dj-steppin-softstyle-jersey-t-shirt",
    name: "S2S DJ Steppin’ Softstyle Jersey T-shirt",
    priceCents: 4800,
    image: "/images/shop/s2s-dj-steppin-softstyle-jersey-t-shirt.webp",
    description: "",
  },
  {
    id: 13,
    slug: "s2s-jazz-logo-semi-fitted-t-shirt",
    name: "S2S Jazz Logo Semi-fitted T Shirt",
    priceCents: 3495,
    image: "/images/shop/s2s-jazz-logo-semi-fitted-t-shirt.webp",
    description: "",
  },
  {
    id: 14,
    slug: "s2s-ladies-curved-hem-adidas-upf-50-performance-shirt",
    name: "S2S Ladies Curved Hem Adidas UPF 50 Performance Shirt",
    priceCents: 6895,
    image: "/images/shop/s2s-ladies-curved-hem-adidas-upf-50-performance-shirt.webp",
    description: "",
  },
  {
    id: 15,
    slug: "s2s-ladies-flex-scoop-neck-t-shirt",
    name: "S2S Ladies Flex Scoop Neck T-shirt",
    priceCents: 4495,
    image: "/images/shop/s2s-ladies-flex-scoop-neck-t-shirt.webp",
    description: "",
  },
  {
    id: 16,
    slug: "s2s-ladies-night-round-neck-t",
    name: "S2S Ladies Night Round Neck T",
    priceCents: 4100,
    image: "/images/shop/s2s-ladies-night-round-neck-t.webp",
    description: "",
  },
];

/** Format cents as a USD price string, e.g. 1995 -> "$19.95". */
export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
