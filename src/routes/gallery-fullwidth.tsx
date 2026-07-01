import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { GalleryIntro } from "@/components/gallery/GalleryIntro";

export const Route = createFileRoute("/gallery-fullwidth")({
  head: () => ({
    meta: [
      { title: "S2S Listeners and Supporters — Soul 2 Souls Jazz" },
      {
        name: "description",
        content:
          "A gallery of Soul2SoulsJazz listeners and supporters — the community behind the music, hosted by JazzAmp aka DJ Perry.",
      },
      {
        property: "og:title",
        content: "S2S Listeners and Supporters — Soul 2 Souls Jazz",
      },
      {
        property: "og:description",
        content:
          "A gallery of Soul2SoulsJazz listeners and supporters — the community behind the music.",
      },
    ],
  }),
  component: GalleryFullwidth,
});

function GalleryFullwidth() {
  return (
    <SiteLayout>
      <GalleryIntro />
    </SiteLayout>
  );
}
