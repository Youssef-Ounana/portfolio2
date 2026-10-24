"use client";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MyButton from "./ui/MyButton";
import { site } from "@/data/site";

const Hero = () => {
  return (
    <div className="flex justify-center px-5 pt-28 pb-20">
      <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60rem]">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs text-emerald-300 sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {site.availability}
        </motion.span>

        <h1 className="sr-only">Youssef Ounana, développeur Full-Stack et DevOps : je donne vie à vos idées, du pixel au serveur.</h1>
        <TextGenerateEffect
          ariaHidden
          className="text-center text-[40px] md:text-6xl lg:text-7xl"
          words="Je donne vie à vos idées, du pixel au serveur."
          highlight={[4, 5]}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="max-w-2xl text-center text-base leading-relaxed text-neutral-300 md:text-lg"
        >
          Moi c&apos;est <span className="font-semibold text-white">Youssef</span>, développeur Full-Stack &amp; DevOps.
          Je conçois des interfaces animées et soignées, et les applications qui tournent derrière.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MyButton href="#projets" title="Voir mes projets" icon={<ArrowDown className="h-4 w-4" aria-hidden="true" />} />
          <MyButton href={site.cv} external variant="ghost" title="Mon CV" icon={<Download className="h-4 w-4" aria-hidden="true" />} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
