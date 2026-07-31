import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeader, PageTransition, Panel, Reveal } from "@/components/ui-kit";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mekha M — Full Stack Developer" },
      {
        name: "description",
        content:
          "Get in touch with Mekha M, full stack developer in Tirupur, India. Email, phone, GitHub, LinkedIn and a direct message form.",
      },
      { property: "og:title", content: "Contact Mekha M — Full Stack Developer" },
      {
        property: "og:description",
        content: "Reach out about full-time roles, freelance builds or collaboration.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Github, label: "GitHub", value: "View repositories", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: profile.linkedin },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio enquiry",
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client", {
      description: "Your message is prefilled and ready to send.",
    });
  };

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        description="Open to full-time software engineering roles, internships and freelance builds. I reply to every genuine message."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              {details.map((d) => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium">{d.value}</p>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a
                    key={d.label}
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block surface-panel p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={d.label} className="surface-panel p-5">
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Panel className="hover:translate-y-0">
              <h2 className="font-display text-2xl">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill this in and your email client opens with everything prefilled.
              </p>
              <form onSubmit={onSubmit} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={`mt-2 ${field}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className={`mt-2 ${field}`}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Role, project or collaboration"
                    className={`mt-2 ${field}`}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me a little about what you're building."
                    className={`mt-2 resize-none ${field}`}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <Send className="h-4 w-4" /> Send message
                </button>
              </form>
            </Panel>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
