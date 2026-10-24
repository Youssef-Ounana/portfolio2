import { cn } from "@/lib/utils";

// Bandeau qui défile à l'infini (animation CSS, définie dans globals.css).
// La liste est dupliquée : quand la 1re moitié est sortie, la 2e est à sa place → boucle invisible.
export const InfiniteMarquee = ({
  items,
  reverse = false,
  duration = "40s",
  className,
}: {
  items: string[];
  reverse?: boolean;
  duration?: string;
  className?: string;
}) => (
  <div
    className={cn(
      "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
      className
    )}
    style={{ "--marquee-duration": duration } as React.CSSProperties}
  >
    <ul
      className={cn(
        "flex w-max shrink-0 animate-marquee gap-4 py-2 group-hover:[animation-play-state:paused]",
        reverse && "[animation-direction:reverse]"
      )}
    >
      {[...items, ...items].map((item, i) => (
        <li
          key={`${item}-${i}`}
          aria-hidden={i >= items.length}
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-neutral-300"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
