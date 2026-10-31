import { isLiveLink, streamingLinks, type StreamingLink } from "@/content/site-data";

export function StreamingLinks({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={compact ? "stream-row" : "stream-grid"}>
      {streamingLinks.filter((link) => isLiveLink(link.href)).map((link) => (
        <li key={link.id}>
          <StreamingSlot link={link} />
        </li>
      ))}
    </ul>
  );
}

function StreamingSlot({ link }: { link: StreamingLink }) {
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
