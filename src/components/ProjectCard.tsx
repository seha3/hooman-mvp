import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const date = new Date(p.updatedAt).toLocaleDateString("en-CA", {
    year: "numeric", month: "short", day: "numeric",
  });
  const badge =
    p.status === "shipped" ? "bg-emerald-100 text-emerald-700" :
    p.status === "in-progress" ? "bg-amber-100 text-amber-700" :
    "bg-muted text-neutral-700";

  return (
    <Link
      href={`/projects/${p.slug}`}
      className="block p-5 border border-border rounded-xl bg-card shadow-sm hover:shadow-md transition
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
        <span className={`px-2.5 py-1 rounded-full text-xs ${badge}`}>{p.status}</span>
      </div>
      <p className="text-muted-foreground mb-4">{p.summary}</p>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Client: {p.client}</span>
        <span>Updated: {date}</span>
      </div>
    </Link>
  );
}
