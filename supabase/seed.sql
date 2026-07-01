-- Soul2SoulsJazz shop seed — kept in sync with src/data/shop.ts (16 products,
-- grid order). Re-runnable: upserts on slug.
insert into products (slug, name, price_cents, description, image, sort_order, in_stock) values
  ('24-oz-mia-recycled-acrylic-tumbler', '24 oz. Mia Recycled Acrylic Tumbler', 1995, '', '/images/shop/24-oz-mia-recycled-acrylic-tumbler.webp', 1, true),
  ('dj-perry-remix-gildan-softstyle-jersey-t-shirt', 'DJ Perry Remix – Gildan Softstyle Jersey T-shirt', 3500, '', '/images/shop/dj-perry-remix-gildan-softstyle-jersey-t-shirt.webp', 2, true),
  ('hoodie-ladies-white-front-logo', 'Hoodie Ladies White (Front Logo)', 8495, '', '/images/shop/hoodie-ladies-white-front-logo.webp', 3, true),
  ('hoodie-ladies-white-logo-on-back', 'Hoodie Ladies White (logo on back)', 8495, '', '/images/shop/hoodie-ladies-white-logo-on-back.webp', 4, true),
  ('hoodie-mens-black-white-tie-dye', 'Hoodie Mens Black & White Tie Dye', 8400, '', '/images/shop/hoodie-mens-black-white-tie-dye.webp', 5, true),
  ('ladies-curved-hem-tri-blend-long-sleeve-tunic-t-shirt', 'Ladies Curved Hem Tri-Blend Long Sleeve Tunic T-shirt', 5700, '', '/images/shop/ladies-curved-hem-tri-blend-long-sleeve-tunic-t-shirt.webp', 6, true),
  ('laser-engraved-15-oz-stemless-wine-glass-set-of-2', 'Laser Engraved 15 oz. Stemless Wine Glass (Set of 2)', 4995, '', '/images/shop/laser-engraved-15-oz-stemless-wine-glass-set-of-2.webp', 7, true),
  ('laser-engraved-marble-and-bamboo-coasters-set-of-4', 'Laser Engraved Marble and Bamboo Coasters (Set of 4)', 5295, '', '/images/shop/laser-engraved-marble-and-bamboo-coasters-set-of-4.webp', 8, true),
  ('s2s-10-oz-glass-coffee-mug', 'S2S 10 oz. Glass Coffee Mug', 2495, '', '/images/shop/s2s-10-oz-glass-coffee-mug.webp', 9, true),
  ('s2s-bio-washed-hat-engraved-circle-faux-leather-patch', 'S2S Bio-Washed Hat – Engraved Circle Faux Leather Patch', 4500, '', '/images/shop/s2s-bio-washed-hat-engraved-circle-faux-leather-patch.webp', 10, true),
  ('s2s-canvas-tote-bag', 'S2S Canvas Tote Bag', 5000, '', '/images/shop/s2s-canvas-tote-bag.webp', 11, true),
  ('s2s-dj-steppin-softstyle-jersey-t-shirt', 'S2S DJ Steppin’ Softstyle Jersey T-shirt', 4800, '', '/images/shop/s2s-dj-steppin-softstyle-jersey-t-shirt.webp', 12, true),
  ('s2s-jazz-logo-semi-fitted-t-shirt', 'S2S Jazz Logo Semi-fitted T Shirt', 3495, '', '/images/shop/s2s-jazz-logo-semi-fitted-t-shirt.webp', 13, true),
  ('s2s-ladies-curved-hem-adidas-upf-50-performance-shirt', 'S2S Ladies Curved Hem Adidas UPF 50 Performance Shirt', 6895, '', '/images/shop/s2s-ladies-curved-hem-adidas-upf-50-performance-shirt.webp', 14, true),
  ('s2s-ladies-flex-scoop-neck-t-shirt', 'S2S Ladies Flex Scoop Neck T-shirt', 4495, '', '/images/shop/s2s-ladies-flex-scoop-neck-t-shirt.webp', 15, true),
  ('s2s-ladies-night-round-neck-t', 'S2S Ladies Night Round Neck T', 4100, '', '/images/shop/s2s-ladies-night-round-neck-t.webp', 16, true)
on conflict (slug) do update set
  name = excluded.name,
  price_cents = excluded.price_cents,
  image = excluded.image,
  sort_order = excluded.sort_order,
  in_stock = excluded.in_stock;
