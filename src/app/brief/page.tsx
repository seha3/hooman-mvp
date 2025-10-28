import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, Clock, Gauge, Workflow, Blocks, ExternalLink } from "lucide-react";

export default function BriefPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-12 md:py-16">
        <article className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Intro */}
          <header className="mb-8 md:mb-10">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded bg-muted">Brief</span>
              <span className="px-2 py-1 rounded bg-muted">MVP</span>
              <span className="px-2 py-1 rounded bg-muted">1 day</span>
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Creative Brief
            </h1>
            <p className="mt-2 text-muted-foreground text-balance">
              This sample brief demonstrates readable typography, headings hierarchy, and a clean content rhythm.
            </p>
          </header>

          {/* Two-column grid on desktop */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Goals */}
            <section className="rounded-xl border border-border bg-card p-5 md:p-6 shadow-sm">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Goals
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                <li>Deliver an elegant, accessible frontend.</li>
                <li>Translate design into clean, typed components.</li>
                <li>Ship a minimal, high-quality MVP.</li>
              </ul>
            </section>

            {/* Constraints */}
            <section className="rounded-xl border border-border bg-card p-5 md:p-6 shadow-sm">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> Constraints
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                <li>Timeboxed implementation (single day).</li>
                <li>Simple stack and clear scope.</li>
                <li>Strong attention to detail and a11y.</li>
              </ul>
            </section>

            {/* Scope / Deliverables */}
            <section className="rounded-xl border border-border bg-card p-5 md:p-6 shadow-sm md:col-span-2">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Workflow className="h-5 w-5" /> Deliverables (MVP)
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border/60 p-4">
                  <h3 className="font-medium">Landing + Featured</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Hero, featured project embed, services section, and dark/light theme toggle.
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 p-4">
                  <h3 className="font-medium">Projects</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Listing with filters and accessible cards. Dynamic route for project details.
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 p-4">
                  <h3 className="font-medium">Brief page</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Clear content rhythm using semantic sections and compact UI.
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 p-4">
                  <h3 className="font-medium">Deployment</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Production deploy on Vercel with a stable public URL.
                  </p>
                </div>
              </div>
            </section>

            {/* Stack */}
            <section className="rounded-xl border border-border bg-card p-5 md:p-6 shadow-sm">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Blocks className="h-5 w-5" /> Tech Stack
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "lucide-react", "Vercel"].map((t) => (
                  <li key={t} className="px-2.5 py-1 rounded bg-muted text-xs">{t}</li>
                ))}
              </ul>
              <div className="mt-3 text-xs text-muted-foreground">
                Accessible defaults, focus rings, semantic HTML, and responsive layout.
              </div>
            </section>

            {/* Timeline / Quality */}
            <section className="rounded-xl border border-border bg-card p-5 md:p-6 shadow-sm">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5" /> Timeline & Quality
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                <li><strong>Timeline:</strong> 1-day MVP suitable for review.</li>
                <li className="flex items-start gap-2">
                  <Gauge className="h-4 w-4 mt-0.5 shrink-0" />
                  <span><strong>Perf/A11y:</strong> fast first paint, keyboard navigation, and visible focus styles.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Links */}
          <footer className="mt-8 flex flex-wrap items-center gap-3">
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium 
                        border border-border bg-card hover:bg-accent/10 transition"
            >
                <ExternalLink className="h-4 w-4" />
                View Projects
            </Link>

            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium 
                        bg-primary text-primary-foreground hover:brightness-110 transition"
            >
                Home
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
