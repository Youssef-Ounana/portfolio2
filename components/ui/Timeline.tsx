"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";
import type { ExperienceItem } from "@/data/experience";

// Frise verticale : un rayon lumineux se remplit au fil du défilement
export const Timeline = ({ items }: { items: ExperienceItem[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      {/* Ligne de fond + ligne animée */}
      <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        style={{ height }}
        className="absolute left-5 top-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:left-1/2"
      />

      <ol className="space-y-12">
        {items.map((item, i) => {
          const Icon = item.type === "formation" ? GraduationCap : Briefcase;
          const left = i % 2 === 0; // alternance gauche / droite sur grand écran
          return (
            <motion.li
              key={`${item.title}-${item.place}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative pl-14 md:w-1/2 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
            >
              <span
                className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black ${
                  left ? "md:left-auto md:-right-5" : "md:-left-5"
                }`}
              >
                <Icon className="h-4 w-4 text-purple-300" aria-hidden="true" />
              </span>

              <time className="font-mono text-xs uppercase tracking-widest text-purple-300/80">{item.period}</time>
              <h3 className="mt-1 text-xl font-semibold text-neutral-100">{item.title}</h3>
              <p className="text-neutral-400">{item.place}</p>
              {item.details && <p className="mt-3 leading-relaxed text-neutral-300">{item.details}</p>}
              {item.tags && (
                <ul className={`mt-3 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-300">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};
