import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Chip, PageTransition, Panel, Reveal, SectionHeader } from "@/components/ui-kit";
import { projects, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Project by Mekha M` },
          { name: "description", content: loaderData.short },
          { property: "og:title", content: `${loaderData.title} — Project by Mekha M` },
          { property: "og:description", content: loaderData.short },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData() as Project;
  const related = projects.filter((p) => p.slug !== project.slug);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border veil">
        <div className="absolute inset-0 grid-backdrop opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Chip tone={project.accent}>{project.year}</Chip>
              <Chip>Full stack</Chip>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.short}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" /> Live demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <div
              className={
                project.accent === "primary"
                  ? "surface-panel flex h-52 items-end bg-primary/10 p-7 sm:h-72"
                  : "surface-panel flex h-52 items-end bg-violet/10 p-7 sm:h-72"
              }
            >
              <p className="font-display text-4xl leading-tight text-foreground/20 sm:text-6xl">
                {project.stack.slice(0, 3).join(" · ")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview + problem */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeader eyebrow="Overview" title="What it does" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {project.overview}
            </p>
            <h3 className="mt-10 font-display text-xl">Problem statement</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {project.problem}
            </p>
          </div>
          <Reveal delay={0.1}>
            <Panel>
              <p className="eyebrow">Tech stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <Chip key={t} tone="primary">
                    {t}
                  </Chip>
                ))}
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader eyebrow="Features" title="What's inside" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <li className="surface-panel flex h-full gap-3 p-5">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-success" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Architecture"
          title="How the pieces connect"
          description="A simple layered flow — client, API, data, and the external services hanging off it."
        />
        <Reveal className="mt-10">
          <div className="surface-panel overflow-x-auto p-6 sm:p-8">
            <div className="flex min-w-max items-center gap-4">
              {project.architecture.map((layer, i) => (
                <div key={layer} className="flex items-center gap-4">
                  <div className="w-56 rounded-2xl border border-border bg-surface p-4">
                    <span className="eyebrow">Layer {i + 1}</span>
                    <p className="mt-2 text-sm leading-relaxed">{layer}</p>
                  </div>
                  {i < project.architecture.length - 1 && (
                    <span className="h-px w-8 shrink-0 bg-border" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Screenshots */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader eyebrow="Screens" title="Interface walkthrough" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {project.screenshots.map((shot, i) => (
              <Reveal key={shot.title} delay={i * 0.06}>
                <Panel className="h-full">
                  <div
                    className={
                      project.accent === "primary"
                        ? "flex h-36 items-end rounded-xl bg-primary/10 p-4"
                        : "flex h-36 items-end rounded-xl bg-violet/10 p-4"
                    }
                  >
                    <span className="font-display text-2xl text-foreground/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg">{shot.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{shot.note}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Challenges & solutions" title="Where it got hard" />
        <div className="mt-10 space-y-5">
          {project.challenges.map((c, i) => (
            <Reveal key={c.challenge} delay={i * 0.06}>
              <Panel>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow">Challenge</p>
                    <p className="mt-2 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-success">
                      Solution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.solution}
                    </p>
                  </div>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Future */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader eyebrow="Roadmap" title="Future improvements" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.future.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <div className="surface-panel h-full p-5 text-sm leading-relaxed text-muted-foreground">
                  {f}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Related" title="More work" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block h-full">
                <Panel className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl">{p.title}</h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.short}</p>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
