"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      direction: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const density = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000));
      const colors = [
        "rgba(183, 208, 204, ", // Sage Green (#B7D0CC)
        "rgba(56, 60, 51, ",    // Olive Green (#383C33)
        "rgba(174, 174, 171, ", // Muted Grey (#AEAEAB)
        "rgba(106, 107, 105, ", // Dark Grey (#6A6B69)
      ];

      for (let i = 0; i < density; i++) {
        const size = Math.random() * 2.5 + 0.6;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color,
          alpha: Math.random() * 0.45 + 0.15,
          direction: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Radial Blob 1 (Sage Green - Top Left)
      const sageGradient = ctx.createRadialGradient(
        canvas.width * 0.25,
        canvas.height * 0.2,
        0,
        canvas.width * 0.25,
        canvas.height * 0.2,
        Math.min(canvas.width, canvas.height) * 0.65
      );
      sageGradient.addColorStop(0, "rgba(183, 208, 204, 0.06)");
      sageGradient.addColorStop(0.5, "rgba(183, 208, 204, 0.02)");
      sageGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = sageGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Radial Blob 2 (Olive Green - Bottom Right)
      const oliveGradient = ctx.createRadialGradient(
        canvas.width * 0.75,
        canvas.height * 0.8,
        0,
        canvas.width * 0.75,
        canvas.height * 0.8,
        Math.min(canvas.width, canvas.height) * 0.65
      );
      oliveGradient.addColorStop(0, "rgba(56, 60, 51, 0.05)");
      oliveGradient.addColorStop(0.5, "rgba(56, 60, 51, 0.015)");
      oliveGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = oliveGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Radial Blob 3 (Dark Grey - Center/Top Right)
      const greyGradient = ctx.createRadialGradient(
        canvas.width * 0.6,
        canvas.height * 0.45,
        0,
        canvas.width * 0.6,
        canvas.height * 0.45,
        Math.min(canvas.width, canvas.height) * 0.55
      );
      greyGradient.addColorStop(0, "rgba(106, 107, 105, 0.04)");
      greyGradient.addColorStop(0.5, "rgba(106, 107, 105, 0.01)");
      greyGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = greyGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges instead of bouncing for a smoother look
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Subtle alpha breathing
        p.alpha += 0.002 * p.direction;
        if (p.alpha > 0.6) {
          p.direction = -1;
        } else if (p.alpha < 0.15) {
          p.direction = 1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        
        ctx.shadowBlur = p.size * 2.5;
        ctx.shadowColor = p.color.includes("183, 208") 
          ? "rgba(183, 208, 204, 0.4)" 
          : p.color.includes("56, 60") 
            ? "rgba(56, 60, 51, 0.4)" 
            : "rgba(106, 107, 105, 0.4)";
            
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      });

      // Connect close particles with very faint lines
      ctx.strokeStyle = "rgba(183, 208, 204, 0.03)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
