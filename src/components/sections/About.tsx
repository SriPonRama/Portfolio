import Image from "next/image";
import { about, site } from "@/content/profile";
import { Section } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <Section id="about" title="About">
      <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted">
        <div className="float-right ml-5 mb-3 w-24 sm:w-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line">
            <Image
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              fill
              sizes="112px"
              className="object-cover object-[center_22%]"
            />
          </div>
        </div>
        {about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
        <p className="clear-both pt-2 font-mono text-xs uppercase tracking-[0.2em] text-fg">
          {site.motto.join(" ")}
        </p>
      </Reveal>
    </Section>
  );
}
