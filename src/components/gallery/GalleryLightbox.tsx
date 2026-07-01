import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { GalleryImage } from "@/data/gallery";

/**
 * GalleryLightbox — a self-contained full-screen image viewer.
 *
 * No external dependency (so it stays editable in Lovable): just React state +
 * a fixed overlay. Controlled by the parent via `index` (the active manifest
 * position) and `onIndexChange` / `onClose`.
 *
 * Behaviour:
 *  - dark backdrop, centred image;
 *  - prev/next arrows that walk the manifest IN ORDER, wrapping at both ends;
 *  - closes on the X button, Escape, or a backdrop click;
 *  - ArrowLeft / ArrowRight navigate; Escape closes;
 *  - locks body scroll while open.
 *
 * Rendered through a portal to <body>: the page wrapper (PagePusher) carries
 * `will-change: transform`, which would otherwise establish a containing block
 * and trap this `position: fixed` overlay inside the (page-tall) wrapper instead
 * of the viewport. The portal escapes that so the overlay fills the real screen.
 */
export function GalleryLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  const count = images.length;

  // Wrap-around navigation — prev from the first lands on the last, and vice versa.
  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + count) % count);
  }, [index, count, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % count);
  }, [index, count, onIndexChange]);

  // Keyboard: Escape closes, arrows navigate.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goPrev, goNext]);

  // Lock body scroll while the lightbox is open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Only portal on the client (document exists); the lightbox never renders
  // during SSR because it mounts on a user click.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const image = images[index];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${count}: ${image.alt}`}
      // Backdrop click closes — but only when the click lands on the backdrop
      // itself, not on the image or the controls inside it.
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/90"
    >
      {/* Close (X) */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-[16px] top-[16px] z-[2] flex h-[44px] w-[44px] items-center justify-center text-[34px] leading-none text-white/90 transition-colors hover:text-white"
      >
        &times;
      </button>

      {/* Prev arrow */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous image"
        className="absolute left-[8px] top-1/2 z-[2] flex h-[56px] w-[56px] -translate-y-1/2 items-center justify-center text-[44px] leading-none text-white/80 transition-colors hover:text-white sm:left-[24px]"
      >
        &#8249;
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={goNext}
        aria-label="Next image"
        className="absolute right-[8px] top-1/2 z-[2] flex h-[56px] w-[56px] -translate-y-1/2 items-center justify-center text-[44px] leading-none text-white/80 transition-colors hover:text-white sm:right-[24px]"
      >
        &#8250;
      </button>

      {/* The image — centred, capped to the viewport. */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="max-h-[90vh] max-w-[92vw] object-contain shadow-[0_0_40px_rgba(0,0,0,0.6)]"
      />

      {/* Position counter */}
      <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 text-[14px] font-light text-white/80">
        {index + 1} / {count}
      </div>
    </div>,
    document.body,
  );
}
