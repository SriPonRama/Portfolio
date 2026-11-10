import { education } from "@/content/profile";
import { Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/fx/CountUp";

export default function Education() {
  const [degree, ...school] = education;
  return (
    <Section id="education" eyebrow="Education" title="Where I'm learning.">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="glow-card flex flex-col justify-between gap-8 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-end sm:p-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent">{degree.period}</p>
            <h3 className="mt-3 text-xl font-medium tracking-tight text-fg">{degree.degree}</h3>
            <p className="mt-1 text-sm text-muted">{degree.school}</p>
          </div>
          <div className="sm:text-right">
            <p className="text-5xl font-semibold tracking-tight text-fg tabular-nums"><CountUp value={degree.score.replace("CGPA ", "")} /></p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-subtle">CGPA · {degree.note}</p>
          </div>
        </Reveal>
        <Reveal delay={100} className="glow-card rounded-2xl border border-line p-6">
          <ul className="divide-y divide-line text-sm">
            {school.map((e) => (
              <li key={e.degree} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 py-3 first:pt-0 last:pb-0">
                <span className="text-fg">{e.degree}</span>
                <span className="font-mono text-xs text-accent tabular-nums">{e.score}</span>
                <span className="text-muted">{e.school}</span>
                <span className="font-mono text-xs text-subtle">{e.period}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
