import { Fragment } from "react";
import Marquee from "@/components/fx/Marquee";

const stack = [
  "React", "Node.js", "Express", "MongoDB", "Python", "Flask", "FastAPI", "OpenCV", "Machine Learning",
  "Docker", "Kubernetes", "GitLab CI/CD", "Argo CD", "TypeScript", "Rust", "Tauri", "PostgreSQL", "Java", "C++",
];

const values = ["Build.", "Solve.", "Ship.", "Constantly learning.", "Always shipping."];

/** Full-bleed helper: breaks out of the centered container to the viewport edges. */
function FullBleed({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-[calc(50%-50vw)] w-screen ${className}`}>{children}</div>;
}

/** Thin running band of the tech I work with, right under the hero. */
export function StackBand() {
  return (
    <FullBleed className="border-y border-line bg-surface/40 py-4">
      <Marquee speed={45} label="Technologies I work with">
        {stack.map((t) => (
          <span key={t} className="flex items-center font-mono text-sm text-muted transition-colors hover:text-accent">
            <span className="px-6">{t}</span>
            <span className="text-accent" aria-hidden="true">✦</span>
          </span>
        ))}
      </Marquee>
    </FullBleed>
  );
}

/** Big outlined running text in two opposite-moving rows; letters fill with the accent on hover. */
export function MottoBand() {
  return (
    <FullBleed className="py-6">
      <div aria-hidden="true" className="space-y-2">
      {[false, true].map((reverse) => (
        <Marquee key={String(reverse)} speed={reverse ? 55 : 45} reverse={reverse}>
          {values.map((v, i) => (
            <Fragment key={v + i}>
              <span className="text-outline text-outline-hover px-6 text-6xl font-semibold tracking-tight transition-colors duration-300 sm:text-8xl">
                {v}
              </span>
              <span className="text-4xl text-accent sm:text-6xl">✦</span>
            </Fragment>
          ))}
        </Marquee>
      ))}
      </div>
    </FullBleed>
  );
}
