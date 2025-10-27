import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <div className="h-px bg-linear-to-r from-transparent via-[oklch(var(--border))] to-transparent" />
        <Services />
        <FeaturedProject />
        <SiteFooter />
      </main>
    </>
  );
}
