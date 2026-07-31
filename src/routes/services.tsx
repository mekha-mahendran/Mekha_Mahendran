import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader, PageTransition, Panel, Reveal } from "@/components/ui-kit";
import { services } from "@/data/portfolio";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mekha M | Full Stack & Data Engineering" },
      {
        name: "description",
        content:
          "Services offered by Mekha M: full stack web development, data analytics dashboards, API and database engineering, and responsive UI work.",
      },
      { property: "og:title", content: "Services — Mekha M" },
      {
        property: "og:description",
        content: "Full stack builds, dashboards, API design and responsive UI engineering.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Services"
        title="What I can build for you."
        description="Freelance and contract work across the full stack, with a bias toward projects where the data layer matters."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <Panel className="flex h-full flex-col">
                <span className="font-display text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.detail}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-success/15 text-success">
                        <Check className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="surface-panel flex flex-wrap items-center justify-between gap-6 p-8 sm:p-10">
            <div>
              <h2 className="text-2xl">Have something in mind?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell me the problem and I'll tell you honestly whether I'm the right fit.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Contact me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
