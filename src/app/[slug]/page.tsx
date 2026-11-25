import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { album, artist, displayDate, liveStreamingLinks, releases, siteUrl } from "@/content/site-data";

export const dynamicParams = false;
export function generateStaticParams() {
  return [...releases.map(({ slug }) => ({ slug })), { slug: "stones-of-help" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug === "stones-of-help" ? album.title : releases.find((item) => item.slug === slug)?.title;
  if (!title) return {};
  return { title, description: `${title} by Asa Cole.`, alternates: { canonical: `/${slug}` }, openGraph: { title: `${title} | Asa Cole`, url: `/${slug}` } };
}

export default async function ReleasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const isAlbum = slug === "stones-of-help";
  const release = releases.find((item) => item.slug === slug);
  if (!isAlbum && !release) notFound();
  const title = isAlbum ? album.title : release!.title;
  const date = isAlbum ? album.releaseDate : release!.date;
  const released = release?.released ?? false;
  const data = {
    "@context": "https://schema.org",
    "@type": isAlbum ? "MusicAlbum" : "MusicRecording",
    name: title,
    url: `${siteUrl}/${slug}`,
    datePublished: date,
    byArtist: { "@type": "MusicGroup", "@id": `${siteUrl}#artist`, name: artist.name },
    ...(isAlbum ? { description: album.summary, albumReleaseType: "https://schema.org/AlbumRelease" } : { inAlbum: { "@id": `${siteUrl}#stones-of-help` } }),
  };
  return <>
    <JsonLd data={data} />
    <header className="site-header"><Link className="logo" href="/">Asa Cole</Link><nav className="nav" aria-label="Primary"><Link className="nav-link" href="/music">Music</Link><Link className="nav-link" href="/">Home</Link></nav></header>
    <main className="about">
      {release && <div className="about-photo"><Image src={release.image} alt={release.imageAlt} fill sizes="(min-width: 900px) 420px, 90vw" className="cover" /></div>}
      <div className="about-copy"><h1 className="section-title">{title}</h1>
        <p>{isAlbum ? album.summary : `${title} is a single by Asa Cole from the album Stones of Help.`}</p>
        <p><strong>{released ? "Out now" : "Coming"}</strong> · {displayDate(date)}</p>
        {released && <ul className="stream-row">{liveStreamingLinks().map((link) => <li key={link.id}><a className="stream-live" href={link.href}>{link.label} artist page</a></li>)}</ul>}
        {release?.preSave && <a className="btn btn-teal" href={release.preSave}>Pre-save</a>}
        {isAlbum && <><h2>Singles</h2><ul>{releases.map((item) => <li key={item.slug}><Link href={`/${item.slug}`}>{item.title}</Link> · {item.released ? "Out now" : `Coming ${displayDate(item.date)}`}</li>)}</ul></>}
        {!isAlbum && <p><Link href="/stones-of-help">Stones of Help</Link> · <Link href="/music">All music</Link></p>}
      </div>
    </main>
  </>;
}
