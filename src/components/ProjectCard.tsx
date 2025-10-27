import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const date = new Date(p.updatedAt).toLocaleDateString();
  const badge =
    p.status === "shipped" ? "bg-emerald-100 text-emerald-700" :
    p.status === "in-progress" ? "bg-amber-100 text-amber-700" :
    "bg-neutral-100 text-neutral-700";

  return (
    <article className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium">{p.title}</h3>
        <span className={`px-2.5 py-1 rounded-full text-xs ${badge}`}>{p.status}</span>
      </div>
      <p className="text-neutral-600 mb-4">{p.summary}</p>
      <div className="flex items-center justify-between text-sm text-neutral-500">
        <span>Client: {p.client}</span>
        <span>Updated: {date}</span>
      </div>
    </article>
  );
}
