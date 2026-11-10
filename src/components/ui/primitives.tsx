import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { nav } from "@/content/site";
import Reveal from "./Reveal";

/** Small mono pill for tech stacks. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="cursor-default rounded-md bg-accent-soft px-2 py-1 font-mono text-[11px] leading-none text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-fill hover:text-accent-on">
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

/** Full-width section with a numbered eyebrow, a title and an optional one-line intro. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  const n = nav.findIndex((s) => s.id === id) + 1;
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 ${className}`}>
      <Reveal as="header" className="mb-10 lg:mb-14">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {n > 0 && <span className="text-subtle">{String(n).padStart(2, "0")}</span>}
          <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={`${id}-title`} aria-label={title} className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
          {title.split(" ").map((word, w) => (
            <span key={w} aria-hidden="true" className="word-mask mr-[0.25em] last:mr-0">
              <span className="word" style={{ "--w": w } as React.CSSProperties}>
                {word}
              </span>
            </span>
          ))}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{intro}</p>}
      </Reveal>
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
