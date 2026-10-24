"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

// Grille de projets : un fond glisse d'une carte à l'autre au survol
// (même layoutId → Motion anime le déplacement entre les cartes).
export const HoverEffect = ({
  items,
  onSelect,
  className,
}: {
  items: Project[];
  onSelect: (project: Project) => void;
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 py-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, idx) => (
        <motion.button
          type="button"
          layout
          key={item.slug}
          onClick={() => onSelect(item)}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onFocus={() => setHoveredIndex(idx)}
          onBlur={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="group relative block h-full w-full p-2 text-left focus:outline-none"
          aria-label={`Voir le détail du projet ${item.title}`}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <ProjectVisual project={item} />
            <div className="flex items-start justify-between gap-3">
              <CardTitle>{item.title}</CardTitle>
              <ArrowUpRight
                className="mt-4 h-5 w-5 shrink-0 text-neutral-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-300"
                aria-hidden="true"
              />
            </div>
            <CardDescription>{item.description}</CardDescription>
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.tech.slice(0, 4).map((t) => (
                <li key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-neutral-400">
                  {t}
                </li>
              ))}
              {item.tech.length > 4 && (
                <li className="px-1 py-1 text-xs text-neutral-500">+{item.tech.length - 4}</li>
              )}
            </ul>
          </Card>
        </motion.button>
      ))}
    </div>
  );
};

// Capture d'écran, ou visuel généré avec les initiales tant qu'il n'y en a pas
export const ProjectVisual = ({ project, large = false }: { project: Project; large?: boolean }) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-xl border border-white/10",
      large ? "aspect-[16/8]" : "aspect-[16/9]"
    )}
  >
    {project.image ? (
      <Image
        src={project.image}
        alt={`Capture d'écran de ${project.title}`}
        fill
        sizes={large ? "(min-width: 768px) 720px, 100vw" : "(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"}
        className="object-cover transition duration-500 group-hover:scale-105"
      />
    ) : (
      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.3),transparent_50%)] bg-neutral-950">
        <span className="font-mono text-4xl font-bold tracking-tighter text-white/80 transition duration-500 group-hover:scale-110">
          {project.title
            .split(/\s+/)
            .map((w) => w[0])
            .join("")
            .slice(0, 3)
            .toUpperCase()}
        </span>
      </div>
    )}
    {project.status === "en cours" && (
      <span className="absolute right-3 top-3 rounded-full border border-yellow-400/30 bg-black/70 px-2.5 py-1 text-xs text-yellow-300 backdrop-blur">
        En cours
      </span>
    )}
  </div>
);

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={cn(
      "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-white/[0.2] bg-black p-4 group-hover:border-slate-700",
      className
    )}
  >
    <div className="relative z-50">
      <div className="p-2">{children}</div>
    </div>
  </div>
);

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <h3 className={cn("mt-4 text-lg font-bold tracking-wide text-zinc-100", className)}>{children}</h3>
);

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <p className={cn("mt-3 text-sm leading-relaxed tracking-wide text-zinc-400 line-clamp-3", className)}>
    {children}
  </p>
);
