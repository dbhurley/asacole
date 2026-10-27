import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#F6F0E4",
          color: "#FF2D6F",
          fontSize: 72,
          fontWeight: 650,
        }}
      >
        AC
      </div>
    ),
    { ...size },
  );
}
