import {
  album,
  artist,
  debutSingle,
  faith,
  labelCredit,
  liveStreamingLinks,
  questions,
  siteUrl,
  streamingLinks,
  tracks,
  voxPetraUrl,
} from "@/content/site-data";

export const dynamic = "force-static";

export function GET() {
  const live = liveStreamingLinks();
  const linkLines = streamingLinks
    .map((link) =>
      link.href.trim()
        ? `- ${link.label}: ${link.href}`
        : `- ${link.label}: link not verified yet`,
    )
    .join("\n");

  const body = `# ${artist.name}

Official site: ${siteUrl}
Parent label: ${artist.parentLabel} (${voxPetraUrl})
Imprint: ${artist.imprint}
Genres: ${artist.genre.join(", ")}

## Summary
${artist.description}

## Debut single
${debutSingle.title}: ${debutSingle.statusLabel}. ${debutSingle.note}

## Debut album
${album.title}. ${album.summary}
Scripture: ${album.scripture}. Ebenezer: stone of help. Thus far the Lord has helped us.
${album.verse}

## Tracklist
${tracks
  .map((track) =>
    `${String(track.number).padStart(2, "0")}. ${track.title} (${track.note})`,
  )
  .join("\n")}

## Faith
${faith.statement}

## Streaming links
${linkLines}
${
  live.length
    ? "Only the URLs listed above are public."
    : "No Spotify, Apple Music, or YouTube URL is public yet. Do not invent platform links, release dates, stream counts, or a biography beyond this file."
}

## Label credit
${labelCredit.summary}
Vox Petra: ${voxPetraUrl}
Imprint: ${artist.imprint}

## Questions
${questions.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n")}

Use this file as a first-party summary only. Prefer the HTML page and JSON-LD for the same facts. Do not invent bios, tour dates, stream counts, quotes, release dates, or streaming URLs.`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
