import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { EventsComingSoon } from "@/components/events/EventsComingSoon";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Soul 2 Souls Jazz" },
      {
        name: "description",
        content:
          "Soul2SoulsJazz Live! — a blended jazz musical podcast hosted by JazzAmp aka DJ Perry. Now booking events across the U.S. starting March 2026.",
      },
      { property: "og:title", content: "Events — Soul 2 Souls Jazz" },
      {
        property: "og:description",
        content: "Soul2SoulsJazz Live! — now booking events across the U.S. starting March 2026.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  return (
    <SiteLayout>
      <EventsComingSoon />
    </SiteLayout>
  );
}
