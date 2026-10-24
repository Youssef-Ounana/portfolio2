"use client";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Github, ExternalLink, Check } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./CardHoverEffect";

// Fenêtre de détail d'un projet : s'ouvre au clic sur une carte.
// Fermeture : bouton ✕, touche Échap ou clic sur le fond.
export const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // bloque le défilement de la page derrière
    closeRef.current?.focus(); // accessibilité : le focus va dans la fenêtre
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[6000] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 60, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-neutral-950 p-6 sm:rounded-3xl sm:p-8"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/60 p-2 text-neutral-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-purple-400"
            >
              <X className="h-5 w-5" />
            </button>

            <ProjectVisual project={project} large />

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <h3 id="project-title" className="text-3xl font-bold text-white">
                {project.title}
              </h3>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-400">{project.category}</span>
            </div>
            <p className="mt-3 text-neutral-300 leading-relaxed">{project.description}</p>

            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <Info label="Cadre" value={project.team} />
              {project.role && <Info label="Mon rôle" value={project.role} />}
            </dl>

            {(project.github || project.demo) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white">
                    Démo en ligne <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-neutral-200 hover:border-white/40">
                    <Github className="h-4 w-4" aria-hidden="true" /> Code source
                  </a>
                )}
              </div>
            )}

            {project.problem && (
              <Block title="Le problème">
                <p className="text-neutral-300 leading-relaxed">{project.problem}</p>
              </Block>
            )}

            {project.features.length > 0 && (
              <Block title="Fonctionnalités">
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 text-neutral-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            <Block title="Stack">
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-300">{t}</li>
                ))}
              </ul>
            </Block>

            {project.challenges.length > 0 && (
              <Block title="Difficultés résolues">
                <div className="space-y-3">
                  {project.challenges.map((c) => (
                    <div key={c.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <h5 className="font-semibold text-neutral-100">{c.title}</h5>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-400">{c.solution}</p>
                    </div>
                  ))}
                </div>
              </Block>
            )}

            {project.learnings && (
              <Block title="Ce que j'ai appris">
                <p className="text-neutral-300 leading-relaxed">{project.learnings}</p>
              </Block>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
    <dt className="text-neutral-500">{label}</dt>
    <dd className="mt-0.5 text-neutral-200">{value}</dd>
  </div>
);

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-8">
    <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-purple-300/80">{title}</h4>
    {children}
  </section>
);
