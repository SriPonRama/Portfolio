import type { ReactNode } from "react";

/** Pulls its child slightly toward the cursor (driven by PageFx via [data-magnetic]). */
export default function Magnetic({ children }: { children: ReactNode }) {
  return (
    <span data-magnetic="" className="inline-block transition-transform duration-300 [transition-timing-function:var(--ease-spring)]">
      {children}
    </span>
  );
}
