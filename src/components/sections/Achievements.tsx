import Image from "next/image";
import { Trophy } from "lucide-react";
import { achievements } from "@/content/profile";
import { Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Achievements() {
  const withPhotos = achievements.filter((a) => a.image);
  const rest = achievements.filter((a) => !a.image);

  return (
    <Section id="achievements" title="Achievements">
      <div className="grid gap-6 sm:grid-cols-2">
        {withPhotos.map((a, i) => (
          <Reveal as="article" key={a.event} delay={i * 80} className="group overflow-hidden rounded-xl border border-line bg-surface">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={a.image!.src}
                alt={a.image!.alt}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {a.title} · {a.year}
              </p>
              <h3 className="mt-1.5 text-[15px] font-medium leading-snug text-fg">{a.event}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <ul className="mt-6 space-y-3">
        {rest.map((a) => (
          <Reveal as="li" key={a.event} className="flex gap-4 rounded-xl border border-line p-5">
            <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h3 className="text-[15px] font-medium text-fg">
                {a.title} — <span className="font-normal text-muted">{a.event}</span>
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{a.detail}</p>
            </div>
            <span className="ml-auto font-mono text-xs text-subtle">{a.year}</span>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
