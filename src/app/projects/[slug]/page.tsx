import ProjectPage from "@/components/ProjectPage";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function Page({ params }: Props) {
    const { slug } = await params;
    console.log("route params.slug=", slug);
    return <ProjectPage slug={slug} />;
}

// 🧠 dynamic SEO by proyect
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.title} — Silvia · Frontend`,
    description: p.summary,
  };
}

// ⚡ Generates routes for each proyect
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
