import { album, artist, displayDate, liveStreamingLinks, releases, siteUrl, voxPetraUrl } from "@/content/site-data";

export const dynamic = "force-static";
export function GET() {
  const body = `# ${artist.name}\n\n${artist.description}\n\nOfficial site: ${siteUrl}\nMusic: ${siteUrl}/music\nLabel: ${voxPetraUrl}\nImprint: ${artist.imprint}\n\n## Album\n${album.title}: coming ${displayDate(album.releaseDate)}. ${album.summary}\n${siteUrl}/stones-of-help\n\n## Singles\n${releases.map((release) => `- ${release.title}: ${release.released ? "out now" : "coming"}, ${displayDate(release.date)}. ${siteUrl}/${release.slug}${release.preSave ? `\n  Pre-save: ${release.preSave}` : ""}`).join("\n")}\n\n## Artist streaming pages\n${liveStreamingLinks().map((link) => `- ${link.label}: ${link.href}`).join("\n")}\n`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
