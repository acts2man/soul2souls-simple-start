import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutOurStory } from "@/components/about/AboutOurStory";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutMeet } from "@/components/about/AboutMeet";

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
  return (
    <SiteLayout>
      <AboutHero />
      <AboutIntro />
      <AboutOurStory />
      <AboutMission />
      <AboutMeet />
    </SiteLayout>
  );
}
