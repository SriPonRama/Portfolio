import { education } from "@/content/profile";
import { Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Education() {
  const [degree, ...school] = education;
  return (
    <Section id="education" title="Education">
      <Reveal className="rounded-xl border border-line bg-surface p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-subtle">{degree.period}</p>
            <h3 className="mt-2 text-base font-medium text-fg">{degree.degree}</h3>
            <p className="mt-1 text-sm text-muted">{degree.school}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-semibold tracking-tight text-fg tabular-nums">{degree.score.replace("CGPA ", "")}</p>
            <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">CGPA · {degree.note}</p>
          </div>
        </div>
      </Reveal>
      <ul className="mt-4 divide-y divide-line text-sm">
        {school.map((e) => (
          <li key={e.degree} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 py-3">
            <span className="text-fg">{e.degree}</span>
            <span className="font-mono text-xs text-accent tabular-nums">{e.score}</span>
            <span className="text-muted">{e.school}</span>
            <span className="font-mono text-xs text-subtle">{e.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
