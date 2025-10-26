export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building beautiful, accessible, and performant interfaces using React, Next.js, and TypeScript.",
    },
    {
      title: "UI Engineering",
      description:
        "Translating Figma designs into pixel-perfect, responsive interfaces using Tailwind CSS.",
    },
    {
      title: "Prototyping & Animations",
      description:
        "Creating interactive, motion-rich experiences to enhance user engagement.",
    },
    {
      title: "Design Collaboration",
      description:
        "Working closely with designers to ensure seamless integration of design systems and code.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-neutral-900 mb-10 text-center">
          What I Do
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-medium text-neutral-800 mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
