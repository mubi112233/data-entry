import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div style={{ width: 56, height: 56, background: "#16a34a", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 28 }}>D</span>
          </div>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 32 }}>DataEntry Pro</span>
        </div>

        {/* Headline */}
        <h1 style={{ color: "#fff", fontSize: 64, fontWeight: 800, lineHeight: 1.1, margin: "0 0 24px 0", maxWidth: 800 }}>
          Professional{" "}
          <span style={{ color: "#16a34a" }}>Data Entry Services</span>
        </h1>

        {/* Subtitle */}
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 28, margin: "0 0 48px 0", maxWidth: 700 }}>
          Forms, Catalogs, CRM Migrations & OCR Processing. 99.9% Accuracy. 24–72h Delivery.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "40px" }}>
          {[["5M+", "Records Processed"], ["99.9%", "Accuracy (QA)"], ["24–72h", "Avg Turnaround"]].map(([val, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ color: "#16a34a", fontSize: 36, fontWeight: 800 }}>{val}</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 18 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{ position: "absolute", bottom: 60, right: 80, color: "rgba(255,255,255,0.4)", fontSize: 22 }}>
          don-sr.com
        </div>
      </div>
    ),
    { ...size }
  );
}


