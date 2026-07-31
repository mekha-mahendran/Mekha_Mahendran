import { createFileRoute } from "@tanstack/react-router";
import { Counter, PageHeader, PageTransition, Panel, Reveal, Chip } from "@/components/ui-kit";
import { achievements, stats } from "@/data/portfolio";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Mekha M | Leadership & Workshops" },
      {
        name: "description",
        content:
          "Achievements of Mekha M: class representative leadership, LeetCode workshop participation, college event volunteering and an 8.9 CGPA.",
      },
      { property: "og:title", content: "Achievements — Mekha M" },
      {
        property: "og:description",
        content: "Leadership, workshops, volunteering and academic results.",
      },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Achievements"
        title="Beyond the code."
        description="Leadership roles, workshops and volunteering that shaped how I work with people, not just systems."
      />

      <section className="border-b border-border bg-surface/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <Panel className="h-full">
                <Chip tone={i % 2 === 0 ? "primary" : "violet"}>{item.category}</Chip>
                <h2 className="mt-4 font-display text-xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
