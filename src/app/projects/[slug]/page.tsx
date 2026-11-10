import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/profile";
import Navbar from "@/components/site/Navbar";
import PageFx from "@/components/fx/PageFx";
import Tilt from "@/components/fx/Tilt";
import Footer from "@/components/site/Footer";
import ProjectCover from "@/components/ui/ProjectCover";
import { ExternalLink, TagList } from "@/components/ui/primitives";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${p.tagline}`,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${p.slug}`,
      title: `${p.title} — case study by ${site.shortName}`,
      description: p.summary,
    },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-line pt-8 sm:grid-cols-[160px_1fr] sm:gap-8">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">{title}</h2>
      <div className="text-[15px] leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <PageFx />
      <Navbar home={false} />
      <div className="mx-auto max-w-3xl px-6 pt-28 md:px-10">
        <Link href="/#projects" className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-fg">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          All projects
        </Link>

        <main id="main" className="page-in pt-10">
          <header>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              Case study · {p.year}
              {p.context && ` · ${p.context}`}
              {p.status && <span className="text-accent"> · {p.status}</span>}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">{p.title}</h1>
            <p className="mt-3 text-lg text-fg/80">{p.tagline}</p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">{p.summary}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {p.links.live && <ExternalLink href={p.links.live}>Live demo</ExternalLink>}
              <ExternalLink href={p.links.repo}>Source on GitHub</ExternalLink>
            </div>
          </header>

          <Tilt max={4} className="mt-10 rounded-lg">
            <ProjectCover project={p} sizes="(min-width: 768px) 720px, 100vw" eager />
          </Tilt>

          <dl className="mt-6 grid grid-cols-3 divide-x divide-line rounded-lg border border-line">
            {p.metrics.map((m) => (
              <div key={m.label} className="px-3 py-4 text-center">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block text-xl font-semibold tracking-tight text-fg tabular-nums">{m.value}</span>
                  <span className="block text-xs text-subtle">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 space-y-10">
            <Block title="The problem">
              <p>{p.problem}</p>
            </Block>
            <Block title="What I built">
              <ol className="space-y-3">
                {p.approach.map((a, i) => (
                  <li key={a} className="grid grid-cols-[28px_1fr]">
                    <span className="font-mono text-xs leading-relaxed text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ol>
            </Block>
            <Block title="Key features">
              <ul className="grid gap-2 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="rounded-lg border border-line px-3 py-2.5 text-sm text-fg">
                    {f}
                  </li>
                ))}
              </ul>
            </Block>
            <Block title="Stack">
              <TagList items={p.stack} />
            </Block>
            {p.learnings && (
              <Block title="What I learned">
                <p>{p.learnings}</p>
              </Block>
            )}
            {p.credit && (
              <Block title="Credit">
                <p>{p.credit}</p>
              </Block>
            )}
          </div>

          <Link
            href={`/projects/${next.slug}`}
            className="glow-card group mt-20 flex items-center justify-between rounded-xl border border-line p-6 transition-colors hover:bg-surface"
          >
            <span>
              <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Next project</span>
              <span className="mt-1 block text-lg font-medium text-fg">{next.title}</span>
              <span className="block text-sm text-muted">{next.tagline}</span>
            </span>
            <ArrowRight className="h-5 w-5 text-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
          </Link>

          <Footer />
        </main>
      </div>
    </>
  );
}
