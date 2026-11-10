import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredProjects, otherProjects } from "@/content/projects";
import { socials } from "@/content/profile";
import { ExternalLink, Section, TagList } from "@/components/ui/primitives";
import ProjectCover from "@/components/ui/ProjectCover";
import Reveal from "@/components/ui/Reveal";
import { GitHubIcon } from "@/components/ui/icons";
import Tilt from "@/components/fx/Tilt";
import CountUp from "@/components/fx/CountUp";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Things I've built."
      intro="Real problems, working software. Each project has a short case study — the problem, what I built and what I learned."
    >
      <ol className="space-y-20 lg:space-y-28">
        {featuredProjects.map((p, i) => (
          <Reveal as="li" key={p.slug}>
            <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <Link
                href={`/projects/${p.slug}`}
                aria-label={`${p.title} case study`}
                className={`block lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Tilt max={5} className="rounded-lg">
                  <ProjectCover project={p} sizes="(min-width: 1024px) 620px, 100vw" className="shadow-[0_30px_80px_-30px_rgb(0_0_0/0.6)]" />
                </Tilt>
              </Link>

              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="font-mono text-xs text-subtle">
                  {String(i + 1).padStart(2, "0")} · {p.year}
                  {p.context && ` · ${p.context}`}
                  {p.status === "Live" && <span className="ml-2 text-accent">● Live</span>}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                  <Link href={`/projects/${p.slug}`} className="hover:text-accent">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-1.5 text-sm font-medium text-fg/80">{p.tagline}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.summary}</p>

                <dl className="mt-6 grid grid-cols-3 divide-x divide-line rounded-lg border border-line">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="px-2 py-3 text-center">
                      <dt className="sr-only">{m.label}</dt>
                      <dd>
                        <span className="block text-lg font-semibold tracking-tight text-fg"><CountUp value={m.value} /></span>
                        <span className="block text-[11px] text-subtle">{m.label}</span>
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5">
                  <TagList items={p.stack} />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <Link href={`/projects/${p.slug}`} className="group/cs inline-flex items-center gap-1.5 font-medium text-accent">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/cs:translate-x-0.5" aria-hidden="true" />
                  </Link>
                  {p.links.live && <ExternalLink href={p.links.live} label={`${p.title} live demo`}>Live demo</ExternalLink>}
                  <ExternalLink href={p.links.repo} label={`${p.title} source code on GitHub`}>Source</ExternalLink>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>

      <div className="mt-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-fg">More projects</h3>
          <a
            href={`${socials.github.url}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-fg"
          >
            <GitHubIcon className="h-4 w-4" />
            All repositories
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {otherProjects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 70}>
              <Link
                href={`/projects/${p.slug}`}
                className="glow-card group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center justify-between font-mono text-[11px] text-subtle">
                  <span>
                    {p.year}
                    {p.status && <span className="ml-2 text-accent">{p.status}</span>}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                </span>
                <span className="mt-4 text-lg font-medium tracking-tight text-fg group-hover:text-accent">{p.title}</span>
                <span className="mt-1 text-sm font-medium text-fg/75">{p.tagline}</span>
                <span className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</span>
                {p.context && <span className="mt-3 font-mono text-[11px] text-subtle">{p.context}</span>}
                <span className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {p.stack.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[11px] leading-none text-accent">
                      {t}
                    </span>
                  ))}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
