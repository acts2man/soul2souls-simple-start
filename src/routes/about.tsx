import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Soul 2 Souls Jazz" },
      {
        name: "description",
        content:
          "About Soul2SoulsJazz Musical Podcast — founded and hosted by JazzAmp aka DJ Perry. Amplifying jazz, one soul at a time.",
      },
      { property: "og:title", content: "About — Soul 2 Souls Jazz" },
      {
        property: "og:description",
        content:
          "About Soul2SoulsJazz Musical Podcast — founded and hosted by JazzAmp aka DJ Perry.",
      },
    ],
  }),
  component: About,
});

function About() {
  return <SiteLayout>{/* sections added per commit */}</SiteLayout>;
}
