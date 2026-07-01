import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactForm } from "@/components/contact/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Soul 2 Souls Jazz" },
      {
        name: "description",
        content:
          "Say hello to Soul2SoulsJazz — send a message or reach out for booking. Email info@soul2soulsjazz.com.",
      },
      { property: "og:title", content: "Contact — Soul 2 Souls Jazz" },
      {
        property: "og:description",
        content: "Say hello to Soul2SoulsJazz — send a message or reach out for booking.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      {/* Capture section 2ec373fc: two columns — form (~64.3%) + booking (~35.7%). */}
      <section className="pt-[10px]">
        <div className="mx-auto max-w-[var(--container-boxed)] px-[10px]">
          <div className="flex flex-col tablet:flex-row">
            <div className="px-[30px] tablet:w-[64.297%]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
