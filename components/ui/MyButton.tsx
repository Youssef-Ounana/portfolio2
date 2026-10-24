import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  variant?: "gradient" | "ghost";
  className?: string;
};

// Bouton à bordure dégradée. Rend un <a> si "href" est fourni, sinon un <button>.
// (Un <button> à l'intérieur d'un <a> n'est pas du HTML valide.)
const MyButton = ({ title, icon, href, external, onClick, variant = "gradient", className }: Props) => {
  const inner =
    variant === "gradient" ? (
      <>
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
        <span className="relative flex items-center gap-2 rounded-[6px] bg-black px-7 py-2.5 text-white transition duration-200 group-hover:bg-transparent">
          {title}
          {icon}
        </span>
      </>
    ) : (
      <span className="relative flex items-center gap-2 rounded-lg border border-white/15 px-7 py-2.5 text-neutral-200 transition duration-200 group-hover:border-white/40 group-hover:bg-white/5">
        {title}
        {icon}
      </span>
    );

  const classes = cn(
    "group relative inline-flex p-[3px] font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 rounded-lg",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {inner}
    </button>
  );
};

export default MyButton;
