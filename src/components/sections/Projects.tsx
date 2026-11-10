import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredProjects, otherProjects } from "@/content/projects";
import { socials } from "@/content/profile";
import { ExternalLink, Section, TagList } from "@/components/ui/primitives";
import ProjectCover from "@/components/ui/ProjectCover";
import Reveal from "@/components/ui/Reveal";
import { GitHubIcon } from "@/components/ui/icons";

export default function Projects() {
  return (
    <Section id="projects" title="Selected Work">
      <ol className="space-y-16">
        {featuredProjects.map((p, i) => (
          <Reveal as="li" key={p.slug}>
            <article className="group relative">
              <Link href={`/projects/${p.slug}`} className="block" aria-label={`${p.title} case study`}>
                <ProjectCover project={p} sizes="(min-width: 1024px) 560px, 100vw" priority={i === 0} />
              </Link>

              <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium tracking-tight text-fg">
                  <Link href={`/projects/${p.slug}`} className="hover:text-accent">
                    {p.title}
                  </Link>
                </h3>
                <p className="font-mono text-xs text-subtle">
                  {p.year}
                  {p.status === "Live" && <span className="ml-2 text-accent">● Live</span>}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-fg/80">{p.tagline}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.summary}</p>

              <dl className="mt-5 grid grid-cols-3 divide-x divide-line rounded-lg border border-line">
                {p.metrics.map((m) => (
                  <div key={m.label} className="px-3 py-3 text-center">
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <span className="block text-lg font-semibold tracking-tight text-fg tabular-nums">{m.value}</span>
                      <span className="block text-[11px] text-subtle">{m.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5">
                <TagList items={p.stack} />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <Link href={`/projects/${p.slug}`} className="group/cs inline-flex items-center gap-1.5 font-medium text-accent">
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/cs:translate-x-0.5" aria-hidden="true" />
                </Link>
                {p.links.live && <ExternalLink href={p.links.live} label={`${p.title} live demo`}>Live demo</ExternalLink>}
                <ExternalLink href={p.links.repo} label={`${p.title} source code on GitHub`}>Source</ExternalLink>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-20">
        <h3 className="mb-4 text-sm font-medium text-fg">More projects</h3>
        <ul className="divide-y divide-line border-y border-line">
          {otherProjects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span>
                  <span className="font-medium text-fg group-hover:text-accent">{p.title}</span>
                  {p.status && <span className="ml-2 font-mono text-[11px] text-accent">{p.status}</span>}
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{p.summary}</span>
                  {p.context && <span className="mt-1 block font-mono text-[11px] text-subtle">{p.context}</span>}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-subtle">
                  {p.year}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={`${socials.github.url}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-fg"
        >
          <GitHubIcon className="h-4 w-4" />
          All repositories on GitHub
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </Reveal>
    </Section>
  );
}
