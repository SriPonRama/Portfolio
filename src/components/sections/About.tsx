import { about, site } from "@/content/profile";
import { projects } from "@/content/projects";
import { Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import Terminal from "@/components/fx/Terminal";

const lines = [
  { cmd: "whoami", out: [`${site.name} — ${site.role}`] },
  { cmd: "cat focus.txt", out: ["Applied AI · Full-stack (MERN) · DevOps"] },
  { cmd: "ls ~/projects", out: [projects.map((p) => p.slug).join("  ")] },
  { cmd: "cat now.txt", out: ["Building NOVA — a privacy-first AI desktop companion (Rust + Tauri)"] },
  { cmd: "echo $STATUS", out: [site.status] },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Problems first, then code.">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal className="stagger space-y-5 text-base leading-relaxed text-muted sm:text-[17px]">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="pt-2 font-mono text-xs uppercase tracking-[0.2em] text-fg">{site.motto.join(" ")}</p>
        </Reveal>

        <Reveal delay={120} className="h-fit lg:sticky lg:top-28">
          <Terminal lines={lines} />
        </Reveal>
      </div>
    </Section>
  );
}
