import { isLiveLink, streamingLinks, type StreamingLink } from "@/content/site-data";

export function StreamingLinks({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={compact ? "stream-row" : "stream-grid"}>
      {streamingLinks.map((link) => (
        <li key={link.id}>
          <StreamingSlot link={link} />
        </li>
      ))}
    </ul>
  );
}

function StreamingSlot({ link }: { link: StreamingLink }) {
  if (isLiveLink(link.href)) {
    return (
      <a
        className="stream-live"
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        <span>{link.label}</span>
        <span>Listen</span>
      </a>
    );
  }

  return (
    <span
      className="stream-slot"
      role="group"
      aria-label={`${link.label} placeholder. Coming soon. No link yet.`}
    >
      <span className="stream-name">{link.label}</span>
      <span className="stream-status">Coming soon</span>
      <span className="stream-flag">Placeholder</span>
    </span>
  );
}
