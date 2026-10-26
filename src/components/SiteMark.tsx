import { useId } from "react";

export function SiteMark({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const sky = `${uid}-sky`;
  const sun = `${uid}-sun`;
  const stone = `${uid}-stone`;

  return (
    <svg
      className={className}
      viewBox="0 0 560 680"
      role="img"
      aria-label="Stacked stones under a morning sun, a mark for Stones of Help"
    >
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8EC" />
          <stop offset="55%" stopColor="#F6E4C4" />
          <stop offset="100%" stopColor="#E7D3B0" />
        </linearGradient>
        <radialGradient id={sun} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF3C9" />
          <stop offset="55%" stopColor="#F0B84A" />
          <stop offset="100%" stopColor="#E08A28" />
        </radialGradient>
        <linearGradient id={stone} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF9F1" />
          <stop offset="100%" stopColor="#CDBFA8" />
        </linearGradient>
      </defs>

      <rect width="560" height="680" rx="36" fill={`url(#${sky})`} />
      <circle cx="392" cy="168" r="118" fill="#F6C15A" opacity="0.28" />
      <g stroke="#E39A2E" strokeWidth="4" strokeLinecap="round">
        {Array.from({ length: 12 }, (_, index) => {
          const angle = (Math.PI * 2 * index) / 12 - Math.PI / 2;
          const inner = 92;
          const outer = 118;
          const cx = 392;
          const cy = 158;
          return (
            <line
              key={index}
              x1={cx + Math.cos(angle) * inner}
              y1={cy + Math.sin(angle) * inner}
              x2={cx + Math.cos(angle) * outer}
              y2={cy + Math.sin(angle) * outer}
            />
          );
        })}
      </g>
      <circle cx="392" cy="158" r="72" fill={`url(#${sun})`} />

      <path
        d="M0 470C90 430 150 452 230 468C320 486 390 430 560 456V680H0Z"
        fill="#E4C99A"
      />
      <path
        d="M0 530C120 500 210 548 320 528C410 512 470 548 560 524V680H0Z"
        fill="#6E7D52"
        opacity="0.28"
      />

      <path
        d="M78 560C86 470 92 390 104 318"
        fill="none"
        stroke="#5E6C45"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g fill="#C9A24A">
        <ellipse cx="112" cy="312" rx="7" ry="14" transform="rotate(-18 112 312)" />
        <ellipse cx="124" cy="332" rx="6" ry="12" transform="rotate(16 124 332)" />
        <ellipse cx="108" cy="348" rx="6" ry="12" transform="rotate(-24 108 348)" />
        <ellipse cx="126" cy="366" rx="5" ry="11" transform="rotate(20 126 366)" />
      </g>

      <ellipse cx="286" cy="548" rx="168" ry="28" fill="#B89A72" opacity="0.35" />
      <ellipse cx="274" cy="536" rx="154" ry="48" fill="#D9C7AE" />
      <ellipse cx="274" cy="522" rx="154" ry="40" fill={`url(#${stone})`} />
      <ellipse cx="270" cy="478" rx="116" ry="36" fill="#E7D8C2" />
      <ellipse cx="270" cy="466" rx="116" ry="30" fill="#F4EBDD" />
      <ellipse cx="276" cy="424" rx="78" ry="28" fill="#EFE4D2" />
      <ellipse cx="276" cy="414" rx="78" ry="22" fill="#FBF6EE" />
      <ellipse cx="278" cy="378" rx="34" ry="14" fill="#F7F1E6" />

      <path
        d="M40 612C120 598 180 626 270 612C360 598 430 628 530 608"
        fill="none"
        stroke="#3E6E78"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}
