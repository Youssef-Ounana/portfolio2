"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

// Chaque mot s'éclaire au fur et à mesure que l'on fait défiler la page
export const TextReveal = ({ text, className }: { text: string; className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"], // début quand le texte entre, fin vers le milieu de l'écran
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] mt-1">
      {children}
    </motion.span>
  );
};
