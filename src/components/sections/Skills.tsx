import { certifications, problemSolving, skills } from "@/content/profile";
import { ExternalLink, Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/fx/CountUp";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills & problem solving" title="The toolkit.">
      <Reveal>
        <dl className="stagger grid gap-x-12 border-t border-line md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="group grid gap-1 border-b border-line py-4 transition-colors hover:border-accent sm:grid-cols-[110px_1fr] sm:gap-6">
              <dt className="font-mono text-xs uppercase tracking-wider text-subtle transition-colors group-hover:text-accent sm:pt-0.5">{s.group}</dt>
              <dd className="text-[15px] text-fg transition-transform duration-300 group-hover:translate-x-1">{s.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr_1.3fr]">
        {problemSolving.map((p, i) => (
          <Reveal key={p.platform} delay={i * 80} className="glow-card rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-medium text-fg">{p.platform}</h3>
              <ExternalLink href={p.url} className="text-xs" label={`${p.platform} profile`}>
                Profile
              </ExternalLink>
            </div>
            <p className="mt-5 text-5xl font-semibold tracking-tight text-fg tabular-nums"><CountUp value={p.headline} /></p>
            <p className="mt-1 text-sm text-muted">{p.caption}</p>
            <ul className="mt-5 space-y-1 text-sm text-muted">
              {p.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal delay={160} className="glow-card rounded-2xl border border-line bg-surface p-6">
          <h3 className="text-sm font-medium text-fg">Certifications</h3>
          <ul className="stagger mt-3 divide-y divide-line text-sm">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-4 py-2.5">
                <span className="text-fg">
                  {c.name}
                  {c.note && <span className="ml-2 font-mono text-xs text-accent">{c.note}</span>}
                </span>
                <span className="shrink-0 font-mono text-[11px] text-subtle">
                  {c.issuer} · {c.year}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
