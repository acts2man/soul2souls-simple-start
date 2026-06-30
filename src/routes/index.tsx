import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { GoLive } from "@/components/sections/GoLive";
import { AboutShow } from "@/components/sections/AboutShow";
import { ChartTopping } from "@/components/sections/ChartTopping";
import { FeaturedMix } from "@/components/sections/FeaturedMix";
import { Mission } from "@/components/sections/Mission";
import { Pillars } from "@/components/sections/Pillars";
import { AboutStory } from "@/components/sections/AboutStory";
import { Sponsor } from "@/components/sections/Sponsor";
import { PlayerFeature } from "@/components/sections/PlayerFeature";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soul 2 Souls Jazz" },
      {
        name: "description",
        content: "Soul 2 Souls Jazz — musical podcast, exclusive mixes, merch and more.",
      },
      { property: "og:title", content: "Soul 2 Souls Jazz" },
      {
        property: "og:description",
        content: "Soul 2 Souls Jazz — musical podcast, exclusive mixes, merch and more.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <GoLive />
      <AboutShow />
      <ChartTopping />
      <FeaturedMix />
      <Mission />
      <Pillars />
      <AboutStory />
      <Sponsor />
      <PlayerFeature />
    </SiteLayout>
  );
}
