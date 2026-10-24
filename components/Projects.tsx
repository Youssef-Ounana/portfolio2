"use client";
import { useCallback, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { projects, type Project, type Category } from "@/data/projects";
import { HoverEffect } from "./ui/CardHoverEffect";
import { ProjectModal } from "./ui/ProjectModal";
import { SectionHeading } from "./ui/SectionHeading";

const categories: ("Tous" | Category)[] = ["Tous", ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tous");
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  const visible = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projets" className="mx-auto max-w-7xl px-4 py-28 sm:px-6">
      <SectionHeading eyebrow="Réalisations" title="Une sélection de" highlight="mes projets" />

      {/* Filtres : la pastille active glisse d'un bouton à l'autre (layoutId) */}
      <LayoutGroup>
        <div className="mx-auto mb-6 flex w-fit flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className="relative rounded-full px-4 py-2 text-sm text-neutral-300 transition hover:text-white"
            >
              {filter === cat && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>
      </LayoutGroup>

      <AnimatePresence mode="popLayout">
        <HoverEffect key={filter} items={visible} onSelect={setSelected} />
      </AnimatePresence>

      <p className="mt-4 text-center text-sm text-neutral-500">Cliquez sur un projet pour voir le détail.</p>

      <ProjectModal project={selected} onClose={close} />
    </section>
  );
};

export default Projects;
