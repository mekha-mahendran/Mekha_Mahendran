import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, FileDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center gap-3 rounded-3xl border border-border px-3 py-2.5 transition-all duration-300 sm:px-4",
          scrolled
            ? "bg-background/70 shadow-soft backdrop-blur-xl"
            : "bg-background/40 backdrop-blur-md",
        )}
      >
        <Link to="/" className="group flex items-center gap-2.5 pl-1 pr-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            M
          </span>
          <span className="font-display text-sm font-bold tracking-tight">{profile.name}</span>
        </Link>

        <ul className="mx-auto hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "relative block rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors",
                  isActive(link.to)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                  />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <a
            href="/resume.pdf"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FileDown className="h-4 w-4" />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-xl border border-border bg-surface text-foreground xl:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-border bg-background/95 p-3 shadow-lift backdrop-blur-xl xl:hidden"
          >
            <ul className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive(link.to)
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/resume.pdf"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
