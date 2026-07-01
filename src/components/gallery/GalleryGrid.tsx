import { galleryImages } from "@/data/gallery";

/**
 * GalleryGrid — the S2S "Listeners and Supporters" photo grid
 * (capture section 127dc76, WordPress classic `[gallery]` shortcode).
 *
 * Layout re-derived from the capture CSS (widget-image-gallery.min.css):
 *  - `gallery-columns-3`: 3 columns ≥768px, 2 columns 480–767px, 1 column
 *    <480px (max-width 33.33% / 50% / 100% per item).
 *  - Items are flush — the classic gallery has no inter-item gap (only a
 *    `.gallery{margin-left:-4px}` nudge and 33.33% item widths), so gap = 0.
 *  - Each `<img>` keeps its natural aspect ratio (width:100%, height:auto).
 *    The live page clears the float every 3rd item and top-aligns cells; a CSS
 *    grid with `items-start` reproduces that exactly — each implicit row is as
 *    tall as its tallest photo and shorter photos sit at the top of their cell.
 *  - Boxed container, max-width 1230px (--container-boxed), 10px padding.
 *
 * Rendered strictly from the ordered manifest via .map() — index 0 first,
 * index 88 last — so on-screen order === manifest order === live DOM order.
 * The first row (3) is eager; everything offscreen is loading="lazy".
 */
export function GalleryGrid() {
  return (
    <section className="mt-[20px] pb-[40px]">
      <div className="mx-auto max-w-[var(--container-boxed)] px-[10px]">
        <div className="grid grid-cols-1 items-start gap-0 min-[480px]:grid-cols-2 min-[768px]:grid-cols-3">
          {galleryImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading={i < 3 ? "eager" : "lazy"}
              decoding="async"
              className="block h-auto w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
