import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const date = new Date(p.updatedAt).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const badge =
    p.status === "shipped"
      ? "bg-[oklch(0.9_0.12_150)] text-[oklch(0.25_0.09_150)] border-2 border-[oklch(0.8_0.1_150)]"
      : p.status === "in-progress"
      ? "bg-[oklch(0.95_0.09_80)] text-[oklch(0.3_0.08_80)] border-2 border-[oklch(0.85_0.08_80)]"
      : "bg-muted text-foreground/70 border-2 border-border";

return (
    <Link
      href={`/projects/${p.slug}`}
      className="
        group relative block p-5 rounded-xl border-4 border-border bg-card brutal-shadow
        transition-[transform,box-shadow,filter] duration-300 ease-out
        hover:-translate-y-0.5 hover:brightness-[1.02]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60
      "
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-[3px] rounded-[calc(var(--radius)+6px)]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-[radial-gradient(120px_40px_at_80%_-20%,oklch(var(--ring)/.30),transparent_70%)]
        "
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-extrabold text-foreground tracking-tight">
            {p.title}
          </h3>
          <span
            className={`
              px-2.5 py-1 rounded-full text-xs font-semibold
              transition-transform duration-200
              group-hover:scale-[1.03]
              ${badge}
            `}
          >
            {p.status}
          </span>
        </div>

        <p className="text-muted-foreground mb-4">{p.summary}</p>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Client: {p.client}</span>
          <span>Updated: {date}</span>
        </div>
      </div>
    </Link>
  );
}
