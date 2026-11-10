import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock, FileText, MapPin } from "lucide-react";
import { site } from "@/content/site";
import Socials from "@/components/site/Socials";
import CopyEmail from "@/components/site/CopyEmail";
import ScrambleWords from "@/components/fx/ScrambleWords";
import Magnetic from "@/components/fx/Magnetic";
import Tilt from "@/components/fx/Tilt";
import LocalTime from "@/components/fx/LocalTime";

const building = [
  "practical AI systems.",
  "full-stack web apps.",
  "computer-vision tools.",
  "DevOps pipelines.",
  "things people actually use.",
];

/** Splits the name into letters that rise in one after another (screen readers read the whole name). */
function AnimatedName({ text }: { text: string }) {
  let i = 0;
  return (
    <h1 aria-label={text} className="text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-[5.25rem] lg:leading-[1.02]">
      {text.split(" ").map((word, w) => (
        <span key={w} aria-hidden="true" className="word-mask mr-[0.22em] whitespace-nowrap last:mr-0">
          {word.split("").map((ch) => (
            <span key={i} className="letter" style={{ "--i": i++ } as React.CSSProperties}>
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative">
      {/* dotted grid + soft glow behind the hero */}
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-x-[-50vw] -top-16 bottom-0 -z-10 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[620px] w-[620px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)" }}
      />

      <div className="grid items-center gap-14 pt-32 pb-16 md:pt-40 lg:grid-cols-[1fr_auto] lg:gap-20 lg:pb-24">
        <div>
          <div className="rise mb-7 flex flex-wrap items-center gap-3" style={{ "--d": "0ms" } as React.CSSProperties}>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {site.status}
            </p>
          </div>

          <AnimatedName text={site.name} />

          <p className="rise mt-5 text-xl font-medium tracking-tight text-fg/90 sm:text-2xl" style={{ "--d": "120ms" } as React.CSSProperties}>
            {site.role}. I build <span className="whitespace-nowrap font-mono text-[0.92em] text-accent"><ScrambleWords words={building} /></span>
          </p>

          <p className="rise mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg" style={{ "--d": "180ms" } as React.CSSProperties}>
            {site.intro}
          </p>

          <p className="rise mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-subtle" style={{ "--d": "240ms" } as React.CSSProperties}>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {site.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <LocalTime />
            </span>
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ "--d": "300ms" } as React.CSSProperties}>
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent-fill px-5 py-3 text-sm font-medium text-accent-on shadow-[0_8px_30px_-8px_var(--accent)] transition-shadow hover:shadow-[0_12px_40px_-6px_var(--accent)]"
              >
                <span className="roll">
                  <span>View my work</span>
                  <span aria-hidden="true">View my work</span>
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Magnetic>
            <CopyEmail className="py-3" />
          </div>
          <div className="rise mt-5 flex flex-wrap items-center gap-x-4 gap-y-2" style={{ "--d": "360ms" } as React.CSSProperties}>
            <Socials className="-ml-2.5" />
            <span className="h-5 w-px bg-line" aria-hidden="true" />
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Résumé
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="rise relative mx-auto w-60 sm:w-64 lg:w-72" style={{ "--d": "100ms" } as React.CSSProperties}>
          <Tilt max={8}>
            <div className="beam-border rounded-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[15px] bg-surface">
                <Image
                  src={site.photo}
                  alt={`Portrait of ${site.name}`}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 288px, 256px"
                  className="object-cover object-[center_22%]"
                />
              </div>
            </div>
          </Tilt>

          {/* floating facts around the portrait */}
          <div className="float absolute -left-10 top-8 z-10 hidden rounded-xl border border-line bg-surface px-3 py-2 shadow-lg sm:block">
            <p className="font-mono text-[10px] uppercase tracking-wider text-accent">2nd prize</p>
            <p className="text-xs font-medium text-fg">Project Expo 2026</p>
          </div>
          <div
            className="float absolute -right-8 top-1/2 z-10 hidden rounded-xl border border-line bg-surface px-3 py-2 shadow-lg sm:block"
            style={{ animationDelay: "-3s" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-accent">Now building</p>
            <p className="text-xs font-medium text-fg">NOVA · Rust + Tauri</p>
          </div>
          <div className="absolute -bottom-5 left-1/2 z-10 w-max -translate-x-1/2 rounded-xl border border-line bg-surface px-4 py-2.5 text-center shadow-lg">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">B.Tech AI &amp; DS · 2024–28</p>
            <p className="mt-0.5 text-xs font-medium text-fg">Sri Eshwar College of Engineering</p>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="fade-up mx-auto mb-4 hidden w-fit flex-col items-center gap-2 text-subtle hover:text-fg lg:flex"
        style={{ "--d": "1400ms" } as React.CSSProperties}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_1.8s_ease-in-out_infinite] bg-accent" />
        </span>
      </a>
    </section>
  );
}
