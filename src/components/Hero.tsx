"use client";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Button } from "@/components/Button";

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 } as Transition,
  },
};

export default function HeroAnimated() {
  return (
    <section className="relative isolate py-24 md:py-36 text-center grain bg-background overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-5xl md:text-6xl font-extrabold" variants={item}>
          Human-centred web experiences.
        </motion.h1>

        <motion.p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto" variants={item}>
          A tiny showcase of modern frontend craft with Next.js, TypeScript, and Tailwind.
        </motion.p>

        <motion.div className="mt-10 flex items-center justify-center gap-4 flex-wrap" variants={item}>
          <Button href="/projects" className="px-6 py-3 text-sm">View Projects</Button>
          <Button href="/brief" variant="outline" className="px-6 py-3 text-sm">Read the Brief</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
