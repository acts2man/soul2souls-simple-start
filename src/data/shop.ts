/**
 * Soul2SoulsJazz shop catalog — 21 products in sort order (WooCommerce pages 1+2).
 * Products 1–16 from the page-1 capture, 17–21 from the page-2 capture; descriptions
 * are the live product copy. The 3 hoodies have no description on the live site.
 *
 * Source of truth for the seed (supabase/seed.sql) and the offline fallback
 * (src/lib/shop.ts). The original store showed a "Coming Soon!" banner — items are
 * not purchasable; there is no online payment here.
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
    description:
      "Experience the perfect blend of style and sustainability—this tumbler is made entirely from 100% recycled acrylic, making it an eco-friendly choice for your drinkware collection. Keep your cold drinks at the optimal temperature with its double-wall construction that not only maintains your beverage's chill but also significantly reduces condensation on the outside, ensuring a comfortable grip. Designed for those on the move, the slender shape fits snugly into standard cup holders, while the swivel lid and angled straw prevent spills during transport, ensuring your hydration is as convenient as it is secure.",
  },
  {
    id: 2,
    slug: "dj-perry-remix-gildan-softstyle-jersey-t-shirt",
    name: "DJ Perry Remix – Gildan Softstyle Jersey T-shirt",
    priceCents: 3500,
    image: "/images/shop/dj-perry-remix-gildan-softstyle-jersey-t-shirt.webp",
    description:
      "Trendy and budget-friendly – what's not to love about this style? Try this on for size: a lightweight and comfortable fabric with an exciting color palette",
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
    description:
      "Women's Tri-Blend Long Sleeve Tunic T-shirt offers an irresistible combination of comfort, style, and functionality. With a soft tri-blend fabric, raglan sleeves, and a fashionable long length, this tunic is perfect for any casual outing or relaxed office look. The wider rib neck adds a touch of sophistication while maintaining a laid-back vibe. A perfect addition to any wardrobe, it combines style with comfort in every wear.",
  },
  {
    id: 7,
    slug: "laser-engraved-15-oz-stemless-wine-glass-set-of-2",
    name: "Laser Engraved 15 oz. Stemless Wine Glass (Set of 2)",
    priceCents: 4995,
    image: "/images/shop/laser-engraved-15-oz-stemless-wine-glass-set-of-2.webp",
    description:
      "Elegant stemless wine glass set with laser-engraved Soul2Souls Jazz logo. Enjoy your favorite wines in style! The customizable Laser Engraved 15 oz. Stemless Wine Glass set features a sleek design and laser-engraved personalization that's perfect for special occasions, corporate gifts, or personal use.",
  },
  {
    id: 8,
    slug: "laser-engraved-marble-and-bamboo-coasters-set-of-4",
    name: "Laser Engraved Marble and Bamboo Coasters (Set of 4)",
    priceCents: 5295,
    image: "/images/shop/laser-engraved-marble-and-bamboo-coasters-set-of-4.webp",
    description:
      "Introducing the Laser Engraved Marble and Bamboo Coasters, a set of 4 perfect for the discerning homeowner or event host. Featuring a blend of marble's natural beauty and bamboo's warm tones, these coasters add sophisticated elegance to any setting while protecting your surfaces.",
  },
  {
    id: 9,
    slug: "s2s-10-oz-glass-coffee-mug",
    name: "S2S 10 oz. Glass Coffee Mug",
    priceCents: 2495,
    image: "/images/shop/s2s-10-oz-glass-coffee-mug.webp",
    description:
      "Whether you're sipping hot cocoa by the fire, serving up a round of drinks, or toasting your friends, you'll want to do it with this unique style that can hold both hot and cold drinks.",
  },
  {
    id: 10,
    slug: "s2s-bio-washed-hat-engraved-circle-faux-leather-patch",
    name: "S2S Bio-Washed Hat – Engraved Circle Faux Leather Patch",
    priceCents: 4500,
    image: "/images/shop/s2s-bio-washed-hat-engraved-circle-faux-leather-patch.webp",
    description:
      "Cap off your look! The Engraved Bio-Washed Hat – Circle Faux Leather Patch is treated to give it a slightly broken-in feel. This low-profile hat comes with a pre-curved visor and an adjustable buckle closure.",
  },
  {
    id: 11,
    slug: "s2s-canvas-tote-bag",
    name: "S2S Canvas Tote Bag",
    priceCents: 5000,
    image: "/images/shop/s2s-canvas-tote-bag.webp",
    description:
      "Tackle every convention in style with this durable tote! The Starboard Large Cotton Canvas Tote Bag combines attractive looks with functional storage. This rugged tote bag is perfect for events or getaways with friends and has plenty of space for everything you need for a successful trip!\n\nSize 13″ H x 20.5″ W x 7″ D",
  },
  {
    id: 12,
    slug: "s2s-dj-steppin-softstyle-jersey-t-shirt",
    name: "S2S DJ Steppin' Softstyle Jersey T-shirt",
    priceCents: 4800,
    image: "/images/shop/s2s-dj-steppin-softstyle-jersey-t-shirt.webp",
    description:
      "Trendy and budget-friendly – what's not to love about this style? Try this on for size: a lightweight and comfortable fabric with an exciting color palette.",
  },
  {
    id: 13,
    slug: "s2s-jazz-logo-semi-fitted-t-shirt",
    name: "S2S Jazz Logo Semi-Fitted T Shirt",
    priceCents: 3495,
    image: "/images/shop/s2s-jazz-logo-semi-fitted-t-shirt.webp",
    description:
      "Comfortable fabric with an exciting color palette. An excellent choice for your next event",
  },
  {
    id: 14,
    slug: "s2s-ladies-curved-hem-adidas-upf-50-performance-shirt",
    name: "S2S Ladies Curved Hem Adidas UPF 50 Performance Shirt",
    priceCents: 6895,
    image: "/images/shop/s2s-ladies-curved-hem-adidas-upf-50-performance-shirt.webp",
    description:
      "This performance t-shirt will not disappoint! Stay dry, protected from the sun and looking great in this Adidas performance t-shirt. High-quality fabric with subtle styling details makes this a shirt you will love to wear!",
  },
  {
    id: 15,
    slug: "s2s-ladies-flex-scoop-neck-t-shirt",
    name: "S2S Ladies Flex Scoop Neck T-shirt",
    priceCents: 4495,
    image: "/images/shop/s2s-ladies-flex-scoop-neck-t-shirt.webp",
    description:
      "This Ladies' Flex Scoop Neck T-shirt provides unmatched comfort and style with a touch of stretch for a flattering fit. Made from high-quality fabric, this t-shirt boasts a scoop neck design that complements any casual wardrobe. Its unique blend offers flexibility and maintains shape after wear and washing, ensuring it remains a staple in your daily attire.",
  },
  {
    id: 16,
    slug: "s2s-ladies-night-round-neck-t",
    name: "S2S Ladies Night Round Neck T",
    priceCents: 4100,
    image: "/images/shop/s2s-ladies-night-round-neck-t.webp",
    description:
      "This performance tee has UPF 50 sun protection and Dry Zone moisture wicking technology. It is lightweight and has either a removable or tag-free label. Combat the sun with this soft and stylish shirt. Breeze through your daily activities with this comfortable shirt that's built to move with you.",
  },
  {
    id: 17,
    slug: "s2s-ladies-v-neck-t-shirt",
    name: "S2S Ladies V-Neck T Shirt",
    priceCents: 4700,
    image: "/images/shop/s2s-ladies-v-neck-t-shirt.webp",
    description:
      "The perfect v-neck tee for a polished look!\n\nDiscover effortless style and exceptional comfort with the District Women's Perfect Weight V-Neck T-shirt, designed to be your go-to garment for any occasion. Crafted from a blend of soft and lightweight materials, this T-shirt offers a flattering fit and promises lasting durability.",
  },
  {
    id: 18,
    slug: "s2s-next-level-jersey-blend-t-shirt",
    name: "S2S Next Level Jersey Blend T-shirt",
    priceCents: 4500,
    image: "/images/shop/s2s-next-level-jersey-blend-t-shirt.webp",
    description:
      "Take your style to the Next Level in this contemporary style! Enjoy all-day comfort in this T Shirt – features a blend of cotton and polyester for a soft, breathable feel. Perfect for teams, events, or everyday wear, this t-shirt combines comfort with durability.",
  },
  {
    id: 19,
    slug: "s2s-port-company-womens-upf-50-performance-shirt",
    name: "S2S Port & Company Women's UPF 50 Performance Shirt",
    priceCents: 4800,
    image: "/images/shop/s2s-port-company-womens-upf-50-performance-shirt.webp",
    description:
      "This performance tee has UPF 50 sun protection and Dry Zone moisture wicking technology. The Port & Company Women's UPF 50 Performance Shirt is the ideal companion for active women who want both style and protection. With its UPF 50 rating, it effectively shields you from harmful sun exposure and offers a flattering fit that moves with you, ensuring comfort and freedom throughout your day.",
  },
  {
    id: 20,
    slug: "s2s-port-authority-tote-bag",
    name: "S2S Port Authority Tote Bag",
    priceCents: 4500,
    image: "/images/shop/s2s-port-authority-tote-bag.webp",
    description:
      "Medium Colorblock Cotton Tote Bag blends fashion with function, offering a stylish and practical solution for everyday needs. Its modern colorblock design adds a touch of trendiness, making it perfect for groups, events, or personal use. Whether you're heading to the beach, store, or office, this tote is a reliable companion due to its robust structure and spacious capacity.",
  },
  {
    id: 21,
    slug: "s2s-sport-tek-competitor-united-performance-jersey",
    name: "S2S Sport-Tek Competitor United Performance Jersey",
    priceCents: 5200,
    image: "/images/shop/s2s-sport-tek-competitor-united-performance-jersey.webp",
    description:
      "The Sport-Tek Competitor United Performance Jersey is made of lightweight poly fabric with PosiCharge technology that prevents our logo from fading. It is UPF 30+ and has contrasting color blocks on the shoulders.",
  },
];

/** Format cents as a USD price string, e.g. 1995 -> "$19.95". */
export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
