import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";

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
    </SiteLayout>
  );
}
