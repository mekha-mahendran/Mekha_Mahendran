import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Chip, PageHeader, PageTransition, Panel, Reveal } from "@/components/ui-kit";
import { skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Mekha M | Java, React, Node.js, SQL" },
      {
        name: "description",
        content:
          "Technical skills of Mekha M across programming, frontend, backend, databases, tools, strengths, soft skills and languages.",
      },
      { property: "og:title", content: "Skills — Mekha M" },
      {
        property: "og:description",
        content: "Categorised technical skills: Java, JavaScript, React, Node.js, MySQL, MongoDB.",
      },
    ],
  }),
  component: Skills;
});

function Skills() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Technical skills"
        title="The toolkit, grouped by where it gets used."
        description="Every item here is something I have used in coursework, an internship or a shipped project — not a list of tutorials watched."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <Panel className="h-full">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-lg">{group.title}</h2>
                  <span className="font-display text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{group.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: j * 0.04 }}
                      whileHover={{ y: -2 }}
                    >
                      <Chip tone={j % 3 === 0 ? "primary" : j % 3 === 1 ? "violet" : "default"}>
                        {item}
                      </Chip>
                    </motion.li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
