import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/** Per-project share card: title, tagline, headline metrics and stack — consistent with the site's look. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug)!;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0d0d",
          color: "#e7ecea",
          fontFamily: "sans-serif",
          backgroundImage: "radial-gradient(circle at 90% 0%, rgba(183,208,204,0.20), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#87918f" }}>
          <span style={{ color: "#b7d0cc" }}>Case study · {p.year}</span>
          <span>{site.shortName}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>{p.title}</div>
          <div style={{ fontSize: 36, marginTop: 10, color: "#a3adab" }}>{p.tagline}</div>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {p.metrics.map((m) => (
            <div
              key={m.label}
              style={{ display: "flex", flexDirection: "column", border: "1px solid #323a39", borderRadius: 16, padding: "18px 28px" }}
            >
              <span style={{ fontSize: 40, fontWeight: 700 }}>{m.value}</span>
              <span style={{ fontSize: 20, color: "#87918f" }}>{m.label}</span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "flex-end", marginLeft: "auto", fontSize: 22, color: "#b7d0cc" }}>
            {p.stack.slice(0, 4).join(" · ")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
