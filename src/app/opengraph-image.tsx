import { ImageResponse } from "next/og";

export const alt = "Asa Cole, debut single Dust and Breath, coming soon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F6F0E4",
          color: "#1C2B24",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -40,
            top: -80,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "#F0B84A",
            opacity: 0.85,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 4 }}>
            VOX PETRA · DRIVEN BY HEAVEN
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 92, lineHeight: 0.9 }}>
              Asa Cole
            </div>
            <div style={{ display: "flex", marginTop: 18, fontSize: 48 }}>
              Dust and Breath
            </div>
            <div style={{ display: "flex", marginTop: 16, fontSize: 28 }}>
              Coming soon · Stones of Help
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24 }}>
            1 Samuel 7:12 · Ebenezer
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
