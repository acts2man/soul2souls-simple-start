/**
 * gallery.ts — the S2S "Listeners and Supporters" gallery manifest.
 *
 * The ORDER of this array is authoritative: it is the exact DOM order of the
 * lightbox links on the live WordPress page (soul2soulsjazz.com/gallery-fullwidth/),
 * derived from the offline capture in _reference/gallery-capture/ and verified
 * against gallery-order.txt (89 items). Index 0 renders first, index 88 last.
 * Do NOT sort, dedupe, or reorder — display order === array order.
 *
 * Each image is self-hosted under /images/gallery/gallery-NN.webp, where NN is
 * the 1-based line position in gallery-order.txt (zero-padded). The site's CDN
 * (Jetpack Photon) serves every gallery image as WebP, so all files are .webp
 * regardless of the source URL's extension (`originalFile` records that source).
 *
 * `width`/`height` are the intrinsic pixel dimensions of the served image; they
 * let the grid reserve space (aspect-ratio) and avoid layout shift.
 */
export type GalleryImage = {
  /** Public path to the self-hosted image. */
  src: string;
  /** Accessible description. */
  alt: string;
  /** Intrinsic width in px. */
  width: number;
  /** Intrinsic height in px. */
  height: number;
  /** Original source filename on soul2soulsjazz.com (for provenance). */
  originalFile: string;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/gallery-01.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 1", width: 300, height: 507, originalFile: "IMG_4867.webp" },
  { src: "/images/gallery/gallery-02.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 2", width: 750, height: 622, originalFile: "IMG_5054-1.webp" },
  { src: "/images/gallery/gallery-03.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 3", width: 500, height: 513, originalFile: "IMG_4844.webp" },
  { src: "/images/gallery/gallery-04.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 4", width: 750, height: 604, originalFile: "IMG_4645.webp" },
  { src: "/images/gallery/gallery-05.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 5", width: 1024, height: 881, originalFile: "6-1.png" },
  { src: "/images/gallery/gallery-06.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 6", width: 500, height: 666, originalFile: "IMG_66091.webp" },
  { src: "/images/gallery/gallery-07.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 7", width: 750, height: 636, originalFile: "design-01jvhzv9wc-1747586467.webp" },
  { src: "/images/gallery/gallery-08.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 8", width: 500, height: 667, originalFile: "IMG_4680.webp" },
  { src: "/images/gallery/gallery-09.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 9", width: 750, height: 648, originalFile: "IMG_4598.webp" },
  { src: "/images/gallery/gallery-10.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 10", width: 750, height: 608, originalFile: "IMG_4635.webp" },
  { src: "/images/gallery/gallery-11.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 11", width: 500, height: 603, originalFile: "IMG_4684.webp" },
  { src: "/images/gallery/gallery-12.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 12", width: 768, height: 1024, originalFile: "IMG_20251104_120316-scaled.jpg" },
  { src: "/images/gallery/gallery-13.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 13", width: 500, height: 515, originalFile: "IMG_4724.webp" },
  { src: "/images/gallery/gallery-14.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 14", width: 500, height: 666, originalFile: "IMG_4253.webp" },
  { src: "/images/gallery/gallery-15.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 15", width: 1024, height: 853, originalFile: "7.png" },
  { src: "/images/gallery/gallery-16.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 16", width: 500, height: 500, originalFile: "RemixDJPerryLogoNew.webp" },
  { src: "/images/gallery/gallery-17.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 17", width: 500, height: 603, originalFile: "Doc3.webp" },
  { src: "/images/gallery/gallery-18.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 18", width: 750, height: 520, originalFile: "IMG_53652.webp" },
  { src: "/images/gallery/gallery-19.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 19", width: 1024, height: 872, originalFile: "5-1.png" },
  { src: "/images/gallery/gallery-20.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 20", width: 776, height: 436, originalFile: "IMG_4284.webp" },
  { src: "/images/gallery/gallery-21.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 21", width: 750, height: 417, originalFile: "IMG_6830.webp" },
  { src: "/images/gallery/gallery-22.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 22", width: 890, height: 465, originalFile: "IMG_E4288.webp" },
  { src: "/images/gallery/gallery-23.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 23", width: 750, height: 562, originalFile: "IMG_1454.webp" },
  { src: "/images/gallery/gallery-24.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 24", width: 437, height: 440, originalFile: "437x913.webp" },
  { src: "/images/gallery/gallery-25.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 25", width: 612, height: 437, originalFile: "DJPerry.webp" },
  { src: "/images/gallery/gallery-26.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 26", width: 500, height: 500, originalFile: "SoulSteppin.webp" },
  { src: "/images/gallery/gallery-27.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 27", width: 750, height: 566, originalFile: "IMG_4690.webp" },
  { src: "/images/gallery/gallery-28.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 28", width: 300, height: 497, originalFile: "IMG_4730.webp" },
  { src: "/images/gallery/gallery-29.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 29", width: 500, height: 666, originalFile: "IMG_4882.webp" },
  { src: "/images/gallery/gallery-30.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 30", width: 500, height: 648, originalFile: "IMG_4668.webp" },
  { src: "/images/gallery/gallery-31.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 31", width: 300, height: 524, originalFile: "IMG_4734.webp" },
  { src: "/images/gallery/gallery-32.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 32", width: 300, height: 497, originalFile: "IMG_4898.webp" },
  { src: "/images/gallery/gallery-33.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 33", width: 500, height: 536, originalFile: "IMG_4632.webp" },
  { src: "/images/gallery/gallery-34.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 34", width: 500, height: 696, originalFile: "IMG_5347.webp" },
  { src: "/images/gallery/gallery-35.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 35", width: 500, height: 455, originalFile: "design-01jvmdy4yp-1747753778.webp" },
  { src: "/images/gallery/gallery-36.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 36", width: 500, height: 666, originalFile: "IMG_4726.webp" },
  { src: "/images/gallery/gallery-37.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 37", width: 750, height: 627, originalFile: "IMG_4699.webp" },
  { src: "/images/gallery/gallery-38.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 38", width: 300, height: 476, originalFile: "IMG_4639.webp" },
  { src: "/images/gallery/gallery-39.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 39", width: 500, height: 500, originalFile: "design-01jvsva6fg-1747850403.webp" },
  { src: "/images/gallery/gallery-40.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 40", width: 500, height: 666, originalFile: "IMG_5185.webp" },
  { src: "/images/gallery/gallery-41.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 41", width: 500, height: 492, originalFile: "IMG_4643.webp" },
  { src: "/images/gallery/gallery-42.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 42", width: 750, height: 600, originalFile: "IMG_4704.webp" },
  { src: "/images/gallery/gallery-43.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 43", width: 750, height: 585, originalFile: "IMG_48481.webp" },
  { src: "/images/gallery/gallery-44.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 44", width: 750, height: 663, originalFile: "IMG_4849.webp" },
  { src: "/images/gallery/gallery-45.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 45", width: 500, height: 496, originalFile: "IMG_4750.webp" },
  { src: "/images/gallery/gallery-46.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 46", width: 235, height: 195, originalFile: "Picture4.webp" },
  { src: "/images/gallery/gallery-47.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 47", width: 500, height: 666, originalFile: "IMG_4881.webp" },
  { src: "/images/gallery/gallery-48.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 48", width: 500, height: 514, originalFile: "IMG_4735.webp" },
  { src: "/images/gallery/gallery-49.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 49", width: 500, height: 669, originalFile: "IMG_5064.webp" },
  { src: "/images/gallery/gallery-50.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 50", width: 1024, height: 419, originalFile: "Picture2-1.webp" },
  { src: "/images/gallery/gallery-51.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 51", width: 300, height: 581, originalFile: "IMG_4957-1.webp" },
  { src: "/images/gallery/gallery-52.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 52", width: 500, height: 494, originalFile: "IMG_6859-1.webp" },
  { src: "/images/gallery/gallery-53.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 53", width: 544, height: 177, originalFile: "design-01jvjmd2cc-1747611981-Copy.webp" },
  { src: "/images/gallery/gallery-54.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 54", width: 500, height: 666, originalFile: "IMG_4899.webp" },
  { src: "/images/gallery/gallery-55.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 55", width: 750, height: 562, originalFile: "IMG_6857-1.webp" },
  { src: "/images/gallery/gallery-56.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 56", width: 300, height: 499, originalFile: "IMG_4878-1-1.webp" },
  { src: "/images/gallery/gallery-57.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 57", width: 750, height: 566, originalFile: "IMG_4688-1.webp" },
  { src: "/images/gallery/gallery-58.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 58", width: 300, height: 461, originalFile: "IMG_6846-1.webp" },
  { src: "/images/gallery/gallery-59.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 59", width: 500, height: 666, originalFile: "IMG_5012-1.webp" },
  { src: "/images/gallery/gallery-60.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 60", width: 500, height: 667, originalFile: "IMG_2367-1.webp" },
  { src: "/images/gallery/gallery-61.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 61", width: 500, height: 537, originalFile: "IMG_5056-1.webp" },
  { src: "/images/gallery/gallery-62.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 62", width: 385, height: 199, originalFile: "Screenshot2025-08-23223411-1.webp" },
  { src: "/images/gallery/gallery-63.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 63", width: 750, height: 562, originalFile: "IMG_5187-1.webp" },
  { src: "/images/gallery/gallery-64.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 64", width: 750, height: 562, originalFile: "IMG_4972-1.webp" },
  { src: "/images/gallery/gallery-65.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 65", width: 750, height: 604, originalFile: "IMG_5018-1.webp" },
  { src: "/images/gallery/gallery-66.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 66", width: 300, height: 550, originalFile: "IMG_4876-1-1.webp" },
  { src: "/images/gallery/gallery-67.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 67", width: 269, height: 75, originalFile: "LiveonMixcloud8-16-25-1.webp" },
  { src: "/images/gallery/gallery-68.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 68", width: 750, height: 619, originalFile: "IMG_5051-1.webp" },
  { src: "/images/gallery/gallery-69.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 69", width: 750, height: 492, originalFile: "IMG_4606-1.webp" },
  { src: "/images/gallery/gallery-70.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 70", width: 749, height: 429, originalFile: "DJ-Perry-2.jpeg" },
  { src: "/images/gallery/gallery-71.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 71", width: 500, height: 604, originalFile: "IMG_6832-1.webp" },
  { src: "/images/gallery/gallery-72.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 72", width: 750, height: 562, originalFile: "IMG_6852-1.webp" },
  { src: "/images/gallery/gallery-73.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 73", width: 500, height: 666, originalFile: "IMG_5178-1.webp" },
  { src: "/images/gallery/gallery-74.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 74", width: 300, height: 524, originalFile: "IMG_4885.webp" },
  { src: "/images/gallery/gallery-75.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 75", width: 300, height: 581, originalFile: "IMG_4957.webp" },
  { src: "/images/gallery/gallery-76.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 76", width: 1024, height: 872, originalFile: "5.png" },
  { src: "/images/gallery/gallery-77.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 77", width: 750, height: 562, originalFile: "IMG_6857.webp" },
  { src: "/images/gallery/gallery-78.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 78", width: 750, height: 562, originalFile: "IMG_4972.webp" },
  { src: "/images/gallery/gallery-79.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 79", width: 500, height: 667, originalFile: "IMG_2367.webp" },
  { src: "/images/gallery/gallery-80.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 80", width: 500, height: 666, originalFile: "IMG_5012.webp" },
  { src: "/images/gallery/gallery-81.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 81", width: 750, height: 619, originalFile: "IMG_5051.webp" },
  { src: "/images/gallery/gallery-82.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 82", width: 750, height: 562, originalFile: "IMG_5179.webp" },
  { src: "/images/gallery/gallery-83.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 83", width: 500, height: 666, originalFile: "IMG_5026.webp" },
  { src: "/images/gallery/gallery-84.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 84", width: 750, height: 621, originalFile: "IMG_5050.webp" },
  { src: "/images/gallery/gallery-85.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 85", width: 500, height: 666, originalFile: "IMG_4646.webp" },
  { src: "/images/gallery/gallery-86.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 86", width: 750, height: 462, originalFile: "IMG_5303.webp" },
  { src: "/images/gallery/gallery-87.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 87", width: 500, height: 716, originalFile: "IMG_5057.webp" },
  { src: "/images/gallery/gallery-88.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 88", width: 500, height: 500, originalFile: "NewS2SLogoStudioNew25.webp" },
  { src: "/images/gallery/gallery-89.webp", alt: "Soul 2 Souls listeners and supporters \u2014 photo 89", width: 750, height: 671, originalFile: "SNRX5420.webp" },
];
