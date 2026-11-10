import { ArrowUpRight, Mail } from "lucide-react";
import { site, socials } from "@/content/profile";
import { Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import CopyEmail from "@/components/site/CopyEmail";
import Magnetic from "@/components/fx/Magnetic";

export default function Contact() {
  const links = [socials.github, socials.linkedin, socials.leetcode, socials.skillrack];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something useful.">
      <Reveal className="glow-card grid gap-10 rounded-2xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m looking for internships and collaborations in AI, full-stack and DevOps. If you have a role, a project or a
            problem worth solving, my inbox is always open.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-lg bg-accent-fill px-5 py-3 text-sm font-medium text-accent-on shadow-[0_8px_30px_-8px_var(--accent)]"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
                <span className="roll">
                  <span>Say hello</span>
                  <span aria-hidden="true">Say hello</span>
                </span>
              </a>
            </Magnetic>
            <CopyEmail className="py-3" />
          </div>
          <p className="mt-3 break-all font-mono text-xs text-subtle">{site.email}</p>
        </div>

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
          {links.map((l) => (
            <li key={l.label} className="bg-surface">
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-1 p-5 transition-colors hover:bg-surface-2"
              >
                <span className="flex items-center justify-between text-sm font-medium text-fg">
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                </span>
                <span className="truncate font-mono text-[11px] text-subtle">@{l.handle}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
