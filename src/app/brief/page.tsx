import SiteHeader from "@/components/SiteHeader";

export default function BriefPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-16">
        <article className="prose prose-neutral max-w-3xl mx-auto px-4 md:px-0">
          <h1>Creative Brief</h1>
          <p>
            This sample brief demonstrates readable typography, headings hierarchy, and a clean content rhythm.
          </p>
          <h2>Goals</h2>
          <ul>
            <li>Deliver an elegant, accessible frontend.</li>
            <li>Translate design into clean, typed components.</li>
            <li>Ship a minimal, high-quality MVP.</li>
          </ul>
          <h2>Constraints</h2>
          <p>Timeboxed implementation, simple stack, and strong attention to detail.</p>
        </article>
      </main>
    </>
  );
}
