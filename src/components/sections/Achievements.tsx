import Image from "next/image";
import { Trophy } from "lucide-react";
import { achievements } from "@/content/profile";
import { Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition along the way.">
      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal as="article" key={a.event} delay={i * 80} className="glow-card group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-transform duration-300 hover:-translate-y-1">
            {a.image ? (
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={a.image.src}
                  alt={a.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-[1.05] group-hover:grayscale-0"
                />
              </div>
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center border-b border-line bg-surface-2">
                <Trophy className="float h-10 w-10 text-accent transition-transform duration-500 group-hover:scale-125" strokeWidth={1.25} aria-hidden="true" />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {a.title} · {a.year}
              </p>
              <h3 className="mt-2 text-base font-medium leading-snug text-fg">{a.event}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
