import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen icon: the same "SR" monogram as the favicon. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d0d",
          color: "#b7d0cc",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -3,
          fontFamily: "sans-serif",
        }}
      >
        SR
      </div>
    ),
    size,
  );
}
