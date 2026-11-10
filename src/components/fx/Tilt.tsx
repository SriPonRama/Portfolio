import type { ReactNode } from "react";

/**
 * 3D tilt toward the cursor with a soft light glare.
 * Pure markup — PageFx sets --rx/--ry/--gx/--gy on [data-tilt] elements from one delegated listener.
 */
export default function Tilt({ children, max = 6, className = "" }: { children: ReactNode; max?: number; className?: string }) {
  return (
    <div style={{ perspective: "1000px" }} className={className}>
      <div
        data-tilt={max}
        className="group/tilt relative transition-transform duration-300 ease-out [transform:rotateX(var(--rx,0))_rotateY(var(--ry,0))] [transform-style:preserve-3d]"
      >
        {children}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{
            background: "radial-gradient(500px circle at var(--gx,50%) var(--gy,50%), rgb(255 255 255 / 0.12), transparent 45%)",
          }}
        />
      </div>
    </div>
  );
}
