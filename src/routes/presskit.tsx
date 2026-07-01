import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PresskitComingSoon } from "@/components/presskit/PresskitComingSoon";

export const Route = createFileRoute("/presskit")({
  head: () => ({
    meta: [
      { title: "Presskit — Soul 2 Souls Jazz" },
      {
        name: "description",
        content:
          "Presskit for Soul2SoulsJazz — a blended jazz musical podcast hosted by JazzAmp aka DJ Perry. More info coming soon.",
      },
      { property: "og:title", content: "Presskit — Soul 2 Souls Jazz" },
      {
        property: "og:description",
        content:
          "Presskit for Soul2SoulsJazz — hosted by JazzAmp aka DJ Perry. More info coming soon.",
      },
    ],
  }),
  component: Presskit,
});

function Presskit() {
  return (
    <SiteLayout>
      <PresskitComingSoon />
    </SiteLayout>
  );
}
