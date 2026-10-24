"use client";
import { motion } from "motion/react";
import { Layers, Server, Database, Wrench } from "lucide-react";
import { skills, allSkills } from "@/data/skills";
import { SpotlightCard } from "./ui/SpotlightCard";
import { InfiniteMarquee } from "./ui/InfiniteMarquee";
import { SectionHeading } from "./ui/SectionHeading";

const icons = [Layers, Server, Database, Wrench];

const Skills = () => {
  const half = Math.ceil(allSkills.length / 2);

  return (
    <section id="competences" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Compétences" title="Ma" highlight="boîte à outils" />
      </div>

      <div className="space-y-4" aria-hidden="true">
        <InfiniteMarquee items={allSkills.slice(0, half)} duration="35s" />
        <InfiniteMarquee items={allSkills.slice(half)} duration="35s" reverse />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 px-6 sm:grid-cols-2">
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <SpotlightCard className="h-full">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    <Icon className="h-5 w-5 text-purple-300" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-400">{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-white/10 bg-black px-3 py-1.5 text-sm text-neutral-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
