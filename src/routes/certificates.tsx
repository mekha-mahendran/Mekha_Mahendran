import { createFileRoute } from "@tanstack/react-router";
import { Award, Download } from "lucide-react";
import { Chip, PageHeader, PageTransition, Panel, Reveal } from "@/components/ui-kit";
import { certificates } from "@/data/portfolio";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Mekha M | AI Data Architect (NSDC)" },
      {
        name: "description",
        content:
          "Certifications held by Mekha M, including AI Data Architect from the National Skill Development Corporation (NSDC).",
      },
      { property: "og:title", content: "Certificates — Mekha M" },
      {
        property: "og:description",
        content: "AI Data Architect certification from NSDC, with downloadable proof.",
      },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Certificates"
        title="Verified credentials."
        description="Formal certification that backs up the data engineering work in my projects."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.07}>
              <Panel className="h-full">
                <div className="flex h-40 items-center justify-center rounded-2xl border border-border bg-surface">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl">{cert.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <Chip tone="primary">{cert.year}</Chip>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cert.detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cert.skills.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                <a
                  href="/resume.pdf"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download certificate
                </a>
              </Panel>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
