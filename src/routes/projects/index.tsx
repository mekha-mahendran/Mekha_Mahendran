import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Chip, PageHeader, PageTransition, Panel, Reveal } from "@/components/ui-kit";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Mekha M | School ERP, Analytics Dashboards" },
      {
        name: "description",
        content:
          "Project gallery by Mekha M: an AI-powered School ERP & LMS on the MERN stack and a Java/SQL employee performance analytics pipeline with Power BI.",
      },
      { property: "og:title", content: "Projects — Mekha M" },
      {
        property: "og:description",
        content: "Full stack projects taken from schema design to deployed interface.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Projects"
        title="Systems I designed, built and deployed."
        description="Each project has its own page with the problem statement, architecture, challenges and what I would build next."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="group block h-full"
              >
                <Panel className="flex h-full flex-col">
                  <div
                    className={
                      project.accent === "primary"
                        ? "flex h-40 items-end rounded-2xl bg-primary/10 p-5"
                        : "flex h-40 items-end rounded-2xl bg-violet/10 p-5"
                    }
                  >
                    <span className="font-display text-5xl text-foreground/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <h2 className="font-display text-2xl">{project.title}</h2>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.short}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 6).map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
