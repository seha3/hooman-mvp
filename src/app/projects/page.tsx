"use client";

import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import { projects as data, type Project } from "@/lib/projects";

export default function ProjectsPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | Project["status"]>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const text = q.toLowerCase();
    return data.filter(p => {
      const hit = p.title.toLowerCase().includes(text)
        || p.client.toLowerCase().includes(text)
        || p.summary.toLowerCase().includes(text);
      const ok = status === "all" ? true : p.status === status;
      return hit && ok;
    });
  }, [q, status]);

  return (
    <>
      <SiteHeader />
      <main className="min-h-[calc(100vh-56px)] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Projects</h1>
          <p className="text-neutral-600 mb-6">
            {loading ? "Loading…" : `Showing ${filtered.length} project${filtered.length === 1 ? "" : "s"}`}
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="w-full md:w-80 rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            />
            <div className="flex gap-2 text-sm">
              {(["all", "planned", "in-progress", "shipped"] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-3 py-1.5 rounded-md border ${
                    status === s ? "bg-black text-white border-black" : "border-neutral-300 hover:bg-neutral-100"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)
              : filtered.map((p) => <ProjectCard key={p.id} p={p} />)}
          </div>
        </div>
      </main>
    </>
  );
}
