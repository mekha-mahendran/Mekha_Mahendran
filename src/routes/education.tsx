import { createFileRoute } from "@tanstack/react-router";
import { Chip, PageHeader, PageTransition, Timeline } from "@/components/ui-kit";
import { education } from "@/data/portfolio";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Mekha M | BCA, 8.9 CGPA" },
      {
        name: "description",
        content:
          "Education of Mekha M: Bachelor of Computer Applications at Dr.SNS Rajalakshmi College with 8.9 CGPA, and higher secondary schooling in Tirupur.",
      },
      { property: "og:title", content: "Education — Mekha M" },
      {
        property: "og:description",
        content: "BCA with 8.9 CGPA at Dr.SNS Rajalakshmi College of Arts and Science, Coimbatore.",
      },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Education"
        title="Academic foundation."
        description="A computer applications degree kept close to practice — coursework paired with internships and shipped project work throughout."
      />

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <Timeline
          items={education.map((item) => ({
            title: item.degree,
            subtitle: item.institution,
            period: item.period,
            body: (
              <div>
                <Chip tone="success">{item.result}</Chip>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            ),
          }))}
        />
      </section>
    </PageTransition>
  );
}
