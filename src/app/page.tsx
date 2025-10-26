import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProject />
      <SiteFooter />
    </main>
  );
}
