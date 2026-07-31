import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, GraduationCap, Target, Trophy } from "lucide-react";
import { PageHeader, PageTransition, Panel, Reveal, SectionHeader } from "@/components/ui-kit";
import { education, profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mekha M — Full Stack Developer" },
      {
        name: "description",
        content:
          "The story behind Mekha M: career objective, engineering journey, vision, and why I'd be a strong hire for a product team.",
      },
      { property: "og:title", content: "About Mekha M — Full Stack Developer" },
      {
        property: "og:description",
        content: "Career objective, journey, vision and education summary of Mekha M.",
      },
    ],
  }),
  component: About,
});

const journey = [
  {
    year: "2023",
    title: "Started BCA",
    body: "Joined Dr.SNS Rajalakshmi College and got hooked on how databases actually hold an application together.",
  },
  {
    year: "2024",
    title: "First internship",
    body: "Built responsive pages and touched backend integration for the first time at Hailstone Technology.",
  },
  {
    year: "2025",
    title: "Analytics and full stack",
    body: "Cleaned and visualised large datasets with Python at Accent Techno Soft, then moved into Java full stack work at QSpiders.",
  },
  {
    year: "2025",
    title: "Shipped real systems",
    body: "Deployed a School ERP & LMS with role-based portals and an AI assistant, plus a Java/Power BI analytics pipeline.",
  },
];

const whyHire = [
  {
    icon: Target,
    title: "I finish things",
    body: "Both of my major projects are deployed, documented and demonstrable — not half-built repos.",
  },
  {
    icon: Compass,
    title: "Data-first thinking",
    body: "I design the schema and the query paths before the UI, which keeps features cheap to extend later.",
  },
  {
    icon: Trophy,
    title: "Proven consistency",
    body: "8.9 CGPA maintained while running three internships in parallel with coursework.",
  },
  {
    icon: GraduationCap,
    title: "Fast to onboard",
    body: "Comfortable across Java, JavaScript, SQL and MongoDB, and used to agile process and documentation standards.",
  },
];

function About() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="About me"
        title="A developer who cares as much about the schema as the screen."
        description="I'm Mekha, a full stack developer from Tirupur working across Java, React, Node.js and MongoDB. I like problems where messy real-world data has to become something a person can act on in one glance."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeader eyebrow="Professional story" title="How I got here" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                My route into engineering was through data. Early in my BCA I spent more time in
                MySQL than in any framework, and that shaped how I build: define the entities, get
                the relationships honest, then design the interface around what the data can
                actually answer.
              </p>
              <p>
                Three internships pushed that in different directions. Web development taught me
                responsive layout discipline. Python analytics taught me that most reporting
                problems are really data-cleaning problems. Java full stack work taught me how to
                keep an API predictable when several roles read the same records.
              </p>
              <p>
                Those threads met in my School ERP & LMS project — four role-based portals, a
                JWT-secured API, MongoDB Atlas, and a Gemini-powered assistant, deployed across
                Vercel and Render.
              </p>
            </div>
          </div>

          <Reveal delay={0.1}>
            <Panel>
              <p className="eyebrow">Career objective</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {profile.objective}
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="eyebrow">My vision</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To become an engineer who owns systems end to end — data model, API, interface and
                  the analytics that prove the thing works — inside a team that ships to real users.
                </p>
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader eyebrow="Journey" title="Four years, compressed" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
                <Panel className="h-full">
                  <span className="font-display text-3xl text-primary/40">{step.year}</span>
                  <h3 className="mt-3 font-display text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Why hire me" title="What you get on day one" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {whyHire.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <Panel className="h-full">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader eyebrow="Education summary" title="Academic background" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {education.map((item, i) => (
              <Reveal key={item.institution} delay={i * 0.07}>
                <Panel className="h-full">
                  <p className="text-sm text-primary">{item.period}</p>
                  <h3 className="mt-2 font-display text-lg">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                  <p className="mt-4 text-sm font-semibold">{item.result}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-8">
            <Link
              to="/education"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Education details <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
