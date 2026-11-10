import { ImageResponse } from "next/og";
import { site } from "@/content/profile";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b0d0d",
          color: "#e7ecea",
          fontFamily: "sans-serif",
          backgroundImage: "radial-gradient(circle at 85% 10%, rgba(183,208,204,0.18), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#b7d0cc" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#b7d0cc" }} />
          {site.status}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ fontSize: 40, marginTop: 12, color: "#a3adab" }}>{site.role}</div>
          <div style={{ fontSize: 30, marginTop: 28, color: "#e7ecea" }}>{site.headline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#87918f" }}>
          <span>{site.motto.join(" ")}</span>
          <span>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
