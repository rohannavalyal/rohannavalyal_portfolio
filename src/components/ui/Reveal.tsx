import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

/*****
 * Reveal: wraps children and applies enter animation when scrolled into view
 * - Uses Tailwind classes you already defined (animate-fade-in)
 * - Adds optional delay and custom className
 *****/
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: keyof JSX.IntrinsicElements;
  delay?: number; // seconds
  className?: string;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({ threshold: 0.15, once: true });

  return (
    <Tag
      ref={ref as any}
      className={cn(
        "opacity-0 translate-y-6 will-change-transform",
        inView && "animate-fade-in opacity-100 translate-y-0",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}