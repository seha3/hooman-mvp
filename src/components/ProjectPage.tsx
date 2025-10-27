import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectPage({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug);
  console.log("ProjectPage slug=", slug);
  console.log("Project found?", Boolean(p));
  if (!p) {
    return (
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-14">
        <h1 className="text-2xl font-semibold mb-2">Not found</h1>
        <p className="text-muted-foreground">This project does not exist.</p>
        <Link href="/projects" className="inline-block mt-6 text-sm underline">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  const date = new Date(p.updatedAt).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <main className="max-w-4xl mx-auto px-4 md:px-8 py-14">
      <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
        ← Back to Projects
      </Link>

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 text-foreground">
        {p.title}
      </h1>
      <p className="text-muted-foreground mt-2">{p.description}</p>

      {/* 🌐 Links to demo / repo */}
      <div className="mt-4 flex gap-3 flex-wrap">
        {p.demoUrl && (
          <a
            href={p.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                       bg-primary text-primary-foreground hover:brightness-110 transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            🌐 View Live Demo
          </a>
        )}
        {p.repoUrl && (
          <a
            href={p.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                       border border-border bg-card hover:bg-accent/10 transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            🧩 View Source on GitHub
          </a>
        )}
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <iframe
            src={p.demoUrl}
            className="aspect-video w-full border-0 rounded-t-xl"
            allowFullScreen
        />
        <div className="p-5 flex items-center justify-between gap-3 flex-wrap">
          <div className="text-sm text-muted-foreground">
            <span className="mr-2">Client:</span>
            <span className="text-foreground">{p.client}</span>
            <span className="ml-3">Updated: {date}</span>
          </div>
          <ul className="flex gap-2 flex-wrap">
            {p.tech.map((t) => (
              <li key={t} className="px-2 py-1 rounded bg-muted text-xs text-foreground/80">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold mb-4">More projects</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects
            .filter((x) => x.slug !== p.slug)
            .slice(0, 2)
            .map((x) => (
              <Link
                key={x.slug}
                href={`/projects/${x.slug}`}
                className="rounded-xl border border-border bg-card p-4 hover:bg-accent/10 transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                <h3 className="font-medium text-foreground">{x.title}</h3>
                <p className="text-sm text-muted-foreground">{x.summary}</p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
