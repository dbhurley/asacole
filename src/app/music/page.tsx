import Link from "next/link";
import type { Metadata } from "next";
import { album, displayDate, releases } from "@/content/site-data";

export const metadata: Metadata = { title: "Music", description: "Explore music by Asa Cole.", alternates: { canonical: "/music" } };

export default function MusicPage() {
  return <><header className="site-header"><Link className="logo" href="/">Asa Cole</Link><nav className="nav" aria-label="Primary"><Link className="nav-link" href="/">Home</Link></nav></header>
    <main className="about"><div className="about-copy"><h1 className="section-title">Music</h1>
      <h2><Link href="/stones-of-help">{album.title}</Link></h2><p>Debut album · Coming {displayDate(album.releaseDate)}</p>
      <h2>Singles</h2><ul>{releases.map((release) => <li key={release.slug}><Link href={`/${release.slug}`}>{release.title}</Link> · {release.released ? "Out now" : `Coming ${displayDate(release.date)}`}</li>)}</ul>
    </div></main></>;
}
