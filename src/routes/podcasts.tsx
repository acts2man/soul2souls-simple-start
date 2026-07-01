import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PodcastsIntro } from "@/components/podcasts/PodcastsIntro";
import { PodcastsGrid } from "@/components/podcasts/PodcastsGrid";

export const Route = createFileRoute("/podcasts")({
  head: () => ({
    meta: [
      { title: "Podcasts — Soul 2 Souls Jazz" },
      {
        name: "description",
        content:
          "Enjoy Soul2SoulsJazz mixes — danceable jazz, R&B and soul from JazzAmp aka DJ Perry. Subscribe on Mixcloud for exclusives.",
      },
      { property: "og:title", content: "Podcasts — Soul 2 Souls Jazz" },
      {
        property: "og:description",
        content:
          "Enjoy Soul2SoulsJazz mixes — danceable jazz, R&B and soul from JazzAmp aka DJ Perry.",
      },
    ],
  }),
  component: Podcasts,
});

function Podcasts() {
  return (
    <SiteLayout>
      <PodcastsIntro />
      <PodcastsGrid />
    </SiteLayout>
  );
}
