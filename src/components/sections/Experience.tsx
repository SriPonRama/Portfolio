import { experience } from "@/content/profile";
import { ExternalLink, Section, TagList } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role} delay={i * 60} className="grid gap-2 sm:grid-cols-[96px_1fr] sm:gap-6">
            <p className="pt-0.5 font-mono text-xs uppercase tracking-wider text-subtle">{job.period}</p>
            <div>
              <h3 className="text-base font-medium leading-snug text-fg">
                {job.role}
                {job.org && (
                  <>
                    <span className="text-subtle"> · </span>
                    {job.orgUrl ? <ExternalLink href={job.orgUrl}>{job.org}</ExternalLink> : job.org}
                  </>
                )}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{job.summary}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {job.highlights.map((h) => (
                  <li key={h} className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-line-strong">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <TagList items={job.stack} />
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
