import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/** Small mono pill for tech stacks. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[11px] leading-none text-accent">
      {children}
    </li>
  );
}

export function TagList({ items, label = "Technologies used" }: { items: readonly string[]; label?: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </ul>
  );
}

/**
 * Section wrapper. On mobile a sticky heading labels the section;
 * on desktop the sidebar nav does that job, so the heading is visually hidden but kept for screen readers.
 */
export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-20 lg:scroll-mt-24 ${className}`}>
      <div className="sticky top-14 z-10 -mx-6 mb-6 bg-bg/85 px-6 py-4 backdrop-blur md:-mx-10 md:px-10 lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 id={`${id}-title`} className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fg lg:text-subtle">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

/** Inline external link with an arrow that nudges on hover. */
export function ExternalLink({
  href,
  children,
  className = "",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group/link inline-flex items-center gap-1 font-medium text-fg underline-offset-4 hover:text-accent hover:underline ${className}`}
    >
      {children}
      <ArrowUpRight
        className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        aria-hidden="true"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
