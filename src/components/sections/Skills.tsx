import { certifications, problemSolving, skills } from "@/content/profile";
import { ExternalLink, Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Problem Solving">
      <Reveal>
        <dl className="divide-y divide-line border-y border-line">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-1 py-3.5 sm:grid-cols-[120px_1fr] sm:gap-6">
              <dt className="font-mono text-xs uppercase tracking-wider text-subtle sm:pt-0.5">{s.group}</dt>
              <dd className="text-[15px] text-fg">{s.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {problemSolving.map((p, i) => (
          <Reveal key={p.platform} delay={i * 80} className="rounded-xl border border-line bg-surface p-5">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-medium text-fg">{p.platform}</h3>
              <ExternalLink href={p.url} className="text-xs" label={`${p.platform} profile`}>
                Profile
              </ExternalLink>
            </div>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-fg tabular-nums">{p.headline}</p>
            <p className="text-sm text-muted">{p.caption}</p>
            <ul className="mt-4 space-y-1 text-sm text-muted">
              {p.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <h3 className="mb-3 text-sm font-medium text-fg">Certifications</h3>
        <ul className="divide-y divide-line border-y border-line text-sm">
          {certifications.map((c) => (
            <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
              <span className="text-fg">
                {c.name}
                {c.note && <span className="ml-2 font-mono text-xs text-accent">{c.note}</span>}
              </span>
              <span className="font-mono text-xs text-subtle">
                {c.issuer} · {c.year}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
