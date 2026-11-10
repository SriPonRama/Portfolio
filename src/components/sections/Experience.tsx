import { experience } from "@/content/profile";
import { ExternalLink, Section, TagList } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've shipped.">
      <ol className="grid gap-6 lg:grid-cols-2">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role} delay={i * 80} className="glow-card flex flex-col rounded-2xl border border-line bg-surface p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">{job.period}</p>
            <h3 className="mt-3 text-xl font-medium leading-snug tracking-tight text-fg">
              {job.role}
              {job.org && (
                <>
                  <span className="text-subtle"> · </span>
                  {job.orgUrl ? <ExternalLink href={job.orgUrl}>{job.org}</ExternalLink> : job.org}
                </>
              )}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{job.summary}</p>
            <ul className="stagger mt-4 space-y-2 text-sm leading-relaxed text-muted">
              {job.highlights.map((h) => (
                <li key={h} className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent">
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <TagList items={job.stack} />
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
