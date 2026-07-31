import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github, Sparkles } from "lucide-react";
import {
  Chip,
  Counter,
  PageTransition,
  Panel,
  Reveal,
  SectionHeader,
} from "@/components/ui-kit";
import { achievements, experiences, profile, projects, skillGroups, stats } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mekha M — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Full stack developer building data-driven web products with Java, React, Node.js, MySQL and MongoDB. BCA graduate, 8.9 CGPA, Coimbatore.",
      },
      { property: "og:title", content: "Mekha M — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Full stack developer building data-driven web products with Java, React, Node.js and MongoDB.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden veil">
        <div className="absolute inset-0 grid-backdrop opacity-70" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pt-44 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Open to full-time software engineering roles
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
              {profile.name}
              <span className="block text-gradient">{profile.role}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline} BCA graduate with an 8.9 CGPA, three internships, and a habit of
              turning messy operational data into interfaces people trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="surface-panel relative p-7">
              <div className="flex items-center justify-between">
                <p className="eyebrow">Snapshot</p>
                <Sparkles className="h-4 w-4 text-violet" />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dd>
                      <Counter value={s.value} suffix={s.suffix} />
                    </dd>
                    <dt className="mt-1 text-xs text-muted-foreground">{s.label}</dt>
                  </div>
                ))}
              </dl>
              <div className="mt-7 border-t border-border pt-6">
                <p className="text-xs text-muted-foreground">Currently</p>
                <p className="mt-1 text-sm font-semibold">Java Full Stack Developer Intern</p>
                <p className="text-sm text-muted-foreground">QSpiders, Coimbatore</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Short about */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="About"
            title="Engineering that starts with the data model."
            description={profile.objective}
          />
          <Reveal delay={0.1} className="lg:pb-2">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Read the full story
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured skills */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader
            eyebrow="Skills"
            title="Core toolkit"
            description="A focused stack rather than a long list — the technologies I have actually shipped with."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.slice(0, 4).map((group, i) => (
              <Reveal key={group.title} delay={i * 0.07}>
                <Panel className="h-full">
                  <h3 className="font-display text-lg">{group.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{group.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.slice(0, 4).map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-8">
            <Link to="/skills" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              All skill categories <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects built end to end"
          description="Two systems, both taken from schema design through to a deployed interface."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="group block h-full"
              >
                <Panel className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <Chip tone={project.accent}>{project.year}</Chip>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.short}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience highlights */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader
            eyebrow="Experience"
            title="Three internships, three different lenses"
            description="Full stack Java, Python analytics, and frontend delivery."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.07}>
                <Panel className="h-full">
                  <Chip tone="primary">{exp.period}</Chip>
                  <h3 className="mt-4 font-display text-lg">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.summary}
                  </p>
                </Panel>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-8">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Full timeline <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Latest achievement */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Latest achievement"
            title={achievements[0]!.title}
            description={achievements[0]!.detail}
          />
          <Reveal delay={0.1}>
            <Panel>
              <p className="eyebrow">Certified</p>
              <h3 className="mt-3 font-display text-xl">AI Data Architect — NSDC</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Designed AI-driven data pipelines and integrated ML models, improving data
                processing efficiency by 25%.
              </p>
              <Link
                to="/certificates"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                View certificates <ArrowRight className="h-4 w-4" />
              </Link>
            </Panel>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="surface-panel relative overflow-hidden p-10 text-center sm:p-16">
            <div className="absolute inset-0 veil" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl">Let's build something solid.</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Available for full-time roles and freelance builds. I reply to every message.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
