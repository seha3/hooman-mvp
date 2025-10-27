export type Project = {
  id: string;
  title: string;
  client: string;
  status: "planned" | "in-progress" | "shipped";
  updatedAt: string; // ISO
  summary: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Creative Brief Dashboard",
    client: "Internal",
    status: "in-progress",
    updatedAt: "2025-07-01T10:00:00Z",
    summary: "Dashboard to manage briefs and handoffs with clean UX.",
  },
  {
    id: "p2",
    title: "Brand Website Revamp",
    client: "Studio Client",
    status: "shipped",
    updatedAt: "2025-06-28T12:00:00Z",
    summary: "Marketing site with Next.js, a11y and great Core Web Vitals.",
  },
  {
    id: "p3",
    title: "Mobile Concept (teaser)",
    client: "Internal",
    status: "planned",
    updatedAt: "2025-06-30T09:00:00Z",
    summary: "Companion mobile app concept using Expo/NativeWind.",
  },
];
