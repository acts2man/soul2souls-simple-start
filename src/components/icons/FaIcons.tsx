import type { SVGProps } from "react";

/**
 * FontAwesome Free **Solid** (fas) marks used across the site, inlined as exact
 * SVG paths (same no-runtime-dependency pattern as SocialLinks) so they match
 * the captured glyphs precisely instead of lucide stand-ins.
 *
 * Each icon keeps FontAwesome's native viewBox; size them by HEIGHT with
 * `w-auto` (e.g. `h-[25px] w-auto`) so non-square glyphs keep their aspect
 * ratio, exactly like FontAwesome (height = 1em, width follows the glyph).
 * Color comes from the current text color via `fill="currentColor"`.
 *
 * Source: @fortawesome/free-solid-svg-icons (v6 free-solid).
 */

type IconProps = SVGProps<SVGSVGElement>;

function Fa({ viewBox, children, ...props }: IconProps & { viewBox: string }) {
  return (
    <svg viewBox={viewBox} fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

// fa-podcast (header "Subscribe")
export function PodcastIcon(props: IconProps) {
  return (
    <Fa viewBox="0 0 448 512" {...props}>
      <path d="M336 359.8c39.1-32.3 64-81.1 64-135.8 0-97.2-78.8-176-176-176S48 126.8 48 224C48 278.7 72.9 327.5 112 359.8 112.4 377.4 115.2 400.2 118.4 421.6 48 383.9 0 309.5 0 224 0 100.3 100.3 0 224 0S448 100.3 448 224c0 85.6-48 159.9-118.5 197.6 3.3-21.4 6-44.2 6.4-61.8zm-14-53.4c-8.3-12.6-19.2-21.6-30.4-27.8-2.1-1.1-4.2-2.2-6.3-3.2 11.7-13.9 18.8-31.9 18.8-51.5 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 19.6 7.1 37.6 18.8 51.5-2.1 1-4.2 2-6.3 3.2-11.2 6.2-22.1 15.2-30.4 27.8-18.8-22.3-30.1-51-30.1-82.4 0-70.7 57.3-128 128-128s128 57.3 128 128c0 31.4-11.3 60.2-30.1 82.4zM224 312c32.9 0 64 8.6 64 43.8 0 33-12.9 104.1-20.6 132.9-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8 0-35.1 31.1-43.8 64-43.8zm0-128a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Fa>
  );
}

// fa-bars (header "Menu")
export function BarsIcon(props: IconProps) {
  return (
    <Fa viewBox="0 0 448 512" {...props}>
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
    </Fa>
  );
}

// fa-microphone-alt (AboutShow eyebrow)
export function MicrophoneAltIcon(props: IconProps) {
  return (
    <Fa viewBox="0 0 384 512" {...props}>
      <path d="M96 96c0-53 43-96 96-96 50.3 0 91.6 38.7 95.7 88L232 88c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 48-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l55.7 0c-4.1 49.3-45.3 88-95.7 88-53 0-96-43-96-96L96 96zM24 160c13.3 0 24 10.7 24 24l0 40c0 79.5 64.5 144 144 144s144-64.5 144-144l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 97.9-73.3 178.7-168 190.5l0 49.5 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-49.5C73.3 402.7 0 321.9 0 224l0-40c0-13.3 10.7-24 24-24z" />
    </Fa>
  );
}

// fa-headphones (Pillars: Authentic)
export function HeadphonesIcon(props: IconProps) {
  return (
    <Fa viewBox="0 0 448 512" {...props}>
      <path d="M64 224c0-88.4 71.6-160 160-160s160 71.6 160 160l0 37.5c-10-3.5-20.8-5.5-32-5.5l-16 0c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48l16 0c53 0 96-43 96-96l0-160C448 100.3 347.7 0 224 0S0 100.3 0 224L0 384c0 53 43 96 96 96l16 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-16 0c-11.2 0-22 1.9-32 5.5L64 224z" />
    </Fa>
  );
}

// fa-globe (Pillars: Global)
export function GlobeIcon(props: IconProps) {
  return (
    <Fa viewBox="0 0 512 512" {...props}>
      <path d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z" />
    </Fa>
  );
}

// fa-users (Pillars: Community)
export function UsersIcon(props: IconProps) {
  return (
    <Fa viewBox="0 0 640 512" {...props}>
      <path d="M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z" />
    </Fa>
  );
}

// fa-arrow-circle-right (AboutStory "Learn More" CTA)
export function ArrowCircleRightIcon(props: IconProps) {
  return (
    <Fa viewBox="0 0 512 512" {...props}>
      <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm41-159c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39-150.1 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l150.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80z" />
    </Fa>
  );
}

// fa-music (Hero "Join Mixcloud" button)
export function MusicIcon(props: IconProps) {
  return (
    <Fa viewBox="0 0 512 512" {...props}>
      <path d="M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z" />
    </Fa>
  );
}

// fa-long-arrow-alt-right (About CTA "Contact Us" button)
export function LongArrowRightIcon(props: IconProps) {
  return (
    <Fa viewBox="0 0 576 512" {...props}>
      <path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </Fa>
  );
}
