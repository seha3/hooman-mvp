import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function FeaturedProject({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <header className="flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs px-2 py-1 rounded bg-muted inline-block mb-2">Featured</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{p.title}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">{p.summary}</p>
          </div>

          <div className="flex gap-2 shrink-0">
            <Link
              href={`/projects/${p.slug}`}
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                         border border-border bg-card hover:bg-accent/10 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              View details
            </Link>
            {p.repoUrl && (
              <a
                href={p.repoUrl}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                           border border-border bg-card hover:bg-accent/10 transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                View Source
              </a>
            )}
            {p.demoUrl && (
              <a
                href={p.demoUrl}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                           bg-primary text-primary-foreground hover:brightness-110 transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                Live Demo
              </a>
            )}
          </div>
        </header>

        {/* Preview: iframe > image > placeholder */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          {p.demoUrl ? (
            <iframe
              src={p.demoUrl}
              className="aspect-video w-full border-0"
              loading="lazy"
              allow="fullscreen; clipboard-read; clipboard-write; encrypted-media;"
            />
          ) : typeof p.image === "string" ? (
            <div className="aspect-video w-full relative">
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
