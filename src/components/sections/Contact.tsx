import { ArrowUpRight, Mail } from "lucide-react";
import { site, socials } from "@/content/profile";
import { Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import CopyEmail from "@/components/site/CopyEmail";

export default function Contact() {
  const links = [socials.github, socials.linkedin, socials.leetcode, socials.skillrack];
  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <h3 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">Let&apos;s build something useful.</h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
          I&apos;m looking for internships and collaborations in AI, full-stack and DevOps. If you have a role, a project or a
          problem worth solving, my inbox is always open.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-fill px-4 py-2.5 text-sm font-medium text-accent-on transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Say hello
          </a>
          <CopyEmail />
        </div>
        <p className="mt-3 break-all font-mono text-xs text-subtle">{site.email}</p>

        <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {links.map((l) => (
            <li key={l.label} className="bg-bg">
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-1 p-4 transition-colors hover:bg-surface"
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
