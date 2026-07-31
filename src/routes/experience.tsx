import { createFileRoute } from "@tanstack/react-router";
import { Chip, PageHeader, PageTransition, Reveal, Timeline } from "@/components/ui-kit";
import { experiences } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mekha M | Internship Timeline" },
      {
        name: "description",
        content:
          "Internship experience of Mekha M: Java full stack at QSpiders, Python data analytics at Accent Techno Soft, and web development at Hailstone Technology.",
      },
      { property: "og:title", content: "Experience — Mekha M" },
      {
        property: "og:description",
        content: "Three internships across full stack Java, Python analytics and web development.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked and what I owned."
        description="Three internships across full stack Java development, Python data analytics and frontend delivery — all inside agile teams with documentation standards."
      />

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <Timeline
          items={experiences.map((exp) => ({
            title: exp.role,
            subtitle: exp.company,
            period: exp.period,
            body: (
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>
                <p className="mt-5 eyebrow">Responsibilities</p>
                <ul className="mt-3 space-y-2">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 eyebrow">Technologies</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Chip key={t} tone="violet">
                      {t}
                    </Chip>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-success/20 bg-success/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-success">
                    Achievement
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{exp.achievement}</p>
                </div>
              </div>
            ),
          }))}
        />
        <Reveal className="mt-10 text-sm text-muted-foreground">
          Currently interning as a Java Full Stack Developer while completing my BCA.
        </Reveal>
      </section>
    </PageTransition>
  );
}
