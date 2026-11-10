import Image from "next/image";
import type { Project } from "@/content/projects";

/**
 * Project visual: a real screenshot when one exists, otherwise a clean typographic cover
 * (never fake UI) built from the project's own name and headline metric.
 */
export default function ProjectCover({
  project,
  sizes,
  priority = false,
  className = "",
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface-2 ${className}`}>
      {project.image ? (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <div
          role="img"
          aria-label={`${project.title} — ${project.tagline}`}
          className="absolute inset-0 flex flex-col justify-between p-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            backgroundPosition: "-1px -1px",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/40 to-transparent" />
          <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
            {project.year} · {project.tagline}
          </span>
          <div className="relative">
            <p className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{project.title}</p>
            <p className="mt-2 font-mono text-xs text-accent">{project.stack.slice(0, 4).join(" · ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
