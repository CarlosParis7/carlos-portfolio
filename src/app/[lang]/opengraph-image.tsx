import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "Carlos París — Developer & Builder";
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
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px circle at 75% 15%, rgba(6,182,212,0.35), transparent 55%), #000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#06b6d4",
            }}
          />
          {SITE.name}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Diseño y construyo software real.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {SITE.role} · SaaS · POS · IA · Panamá
        </div>
      </div>
    ),
    { ...size },
  );
}
