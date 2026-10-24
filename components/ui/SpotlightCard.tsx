"use client";
import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

// Carte avec un halo lumineux qui suit la souris
export const SpotlightCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.18), transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20",
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};
