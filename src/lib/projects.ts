export type Project = {
  image: string | Blob | undefined;
  id: string;
  slug: string;
  title: string;
  client: string;
  status: "planned" | "in-progress" | "shipped";
  updatedAt: string;
  summary: string;
  description: string;
  tech: string[];
  featured?: boolean;
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  // 🚀 Shipped
  {
    image: undefined,
    id: "rickandmorty",
    slug: "rick-and-morty-app",
    title: "Rick and Morty App",
    client: "Personal",
    status: "shipped",
    updatedAt: "Feb 2, 2020",
    summary:
      "A fun app to explore the Rick and Morty API with filters, pagination, and responsive cards.",
    description:
      "Single-page application built with React and the Rick and Morty API. It includes filters by status and species, dynamic routing, and clean pagination. The UI is simple, responsive, and designed for clarity over complexity.",
    tech: ["React", "Vite", "TypeScript", "API Fetching", "CSS Modules"],
    featured: true,
    repoUrl: "https://github.com/seha3/RickAndMorty",
    demoUrl: "https://priceless-meninsky-c2ccff.netlify.app/",
  },

  // 🧠 In Progress
  {
    image: undefined,
    id: "tone-piano",
    slug: "tone-piano",
    title: "Tone.js Piano",
    client: "Personal",
    status: "in-progress",
    updatedAt: "Jan 21, 2024",
    summary:
      "A small experimental piano built with Tone.js to explore sound synthesis in the browser.",
    description:
      "This project explores audio synthesis using Tone.js. It generates notes from user input, mapping them to oscillator nodes and ADSR envelopes. The UI is intentionally minimal to focus on timing and audio feedback, not visuals.",
    tech: ["React", "Tone.js", "TypeScript", "Vite"],
    repoUrl: "https://github.com/seha3/tone-js-project",
  },

  // 🌱 Planned
  {
    image: undefined,
    id: "brief-dashboard",
    slug: "creative-brief-dashboard",
    title: "Creative Brief Dashboard (teaser)",
    client: "Internal",
    status: "planned",
    updatedAt: "2025-06-30T10:00:00Z",
    summary:
      "A compact dashboard to manage briefs and handoffs, exploring clean layouts and typography.",
    description:
      "Teaser project for a creative-brief manager app. The goal is to design a clean interface for creating, viewing, and tracking creative briefs, with thoughtful use of space and tokens. This project is in the design and prototyping stage.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
  },
];
