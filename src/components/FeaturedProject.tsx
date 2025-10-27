import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function FeaturedProject({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <header className="mb-6 grid gap-4 md:grid-cols-[1fr,auto] md:items-end">
          <div>
            <p className="text-xs px-2 py-1 rounded bg-muted inline-block mb-2">Featured</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-pretty">
              {p.title}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl text-pretty">
              {p.summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
            <Link
              href={`/projects/${p.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                         border border-border bg-card hover:bg-accent/10 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              View details
            </Link>

            {p.repoUrl && (
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                           border border-border bg-card hover:bg-accent/10 transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                View Source
              </a>
            )}

            {p.demoUrl && (
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                           bg-primary text-primary-foreground hover:brightness-110 transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                Live Demo
              </a>
            )}
          </div>
        </header>

        <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
          {p.demoUrl ? (
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={p.demoUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                title={`${p.title} demo`}
                allow="fullscreen; clipboard-read; clipboard-write; encrypted-media;"
              />
            </div>
          ) : typeof p.image === "string" ? (
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={false}
              />
            </div>
          ) : (
            <div className="aspect-video w-full bg-[radial-gradient(1000px_280px_at_80%_-40%,oklch(var(--primary)/.12),transparent_70%)]" />
          )}
        </div>
      </div>
    </section>
  );
}
