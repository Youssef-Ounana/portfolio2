"use client";
import { motion } from "motion/react";

// Titre de section qui apparaît en glissant quand il entre dans l'écran
export const SectionHeading = ({
  eyebrow,
  title,
  highlight,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mb-14 text-center"
  >
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-purple-300/80">{eyebrow}</p>
    <h2 className="text-4xl font-bold tracking-tight text-neutral-100 md:text-5xl lg:text-6xl">
      {title}{" "}
      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {highlight}
      </span>
    </h2>
  </motion.div>
);
