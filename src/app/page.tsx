import Image from "next/image";
import Link from "next/link";
import { StreamingLinks } from "@/components/StreamingLinks";
import {
  about,
  album,
  artist,
  debutSingle,
  facts,
  faith,
  labelCredit,
  questions,
  tracks,
  voxPetraUrl,
} from "@/content/site-data";

const nav = [
  { href: "#about", label: "About" },
  { href: "#album", label: "Album" },
  { href: "#faith", label: "Faith" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Hero />
        <FactBar />
        <About />
        <Album />
        <Faith />
        <Questions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="#top" className="flex items-center gap-3" aria-label="Asa Cole home">
          <span className="h-2.5 w-2.5 rounded-full bg-sun" aria-hidden />
          <span className="flex flex-col">
            <span className="display text-[1.65rem] leading-none text-ink">Asa Cole</span>
            <span className="label mt-1 text-[9px] text-olive">Indie folk-pop worship</span>
          </span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label nav-link hidden text-[10px] sm:inline"
            >
              {item.label}
            </a>
          ))}
          <a href="#single" className="label sun-pill text-[10px]">
            Coming soon
          </a>
        </nav>
      </div>
      <nav className="flex gap-4 overflow-x-auto px-4 pb-3 sm:hidden" aria-label="Sections">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="label nav-link text-[10px]">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-photo">
      <Image
        src="/asa-cole-hero.jpg"
        alt="Asa Cole with his guitar in a golden field"
        fill
        priority
        sizes="100vw"
        className="hero-photo-img"
      />
      <div className="hero-photo-shade" aria-hidden="true" />
      <div className="hero-photo-copy">
        <h1 className="display hero-title text-paper">
          Asa
          <span className="block">Cole</span>
        </h1>
        <p className="single-title mt-5 text-sun">{debutSingle.title}</p>
        <p className="mt-4 max-w-xl text-lg leading-8 text-paper/85">
          Bright young-tenor indie folk-pop worship on Vox Petra. Sunlit,
          acoustic, and centered on Jesus Christ.
        </p>
        <div id="single" className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="coming-badge">{debutSingle.statusLabel}</span>
            <p className="text-sm text-paper/80">{debutSingle.note}</p>
          </div>
          <StreamingLinks />
          <p className="mt-3 max-w-xl text-sm leading-6 text-paper/75">
            Spotify, Apple Music, and YouTube will be linked here when the
            single is out. Until then, each one is a Coming soon placeholder.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="button button-primary" href="#album">
            Stones of Help
          </a>
          <a className="button button-secondary" href="#about">
            About Asa
          </a>
        </div>
      </div>
    </section>
  );
}

function FactBar() {
  return (
    <section className="fact-grid" aria-label="Release facts">
      {facts.map(([label, value]) => (
        <div key={label} className="px-5 py-5 sm:px-6">
          <p className="label text-[10px] text-olive">{label}</p>
          <p className="mt-2 text-sm font-semibold text-ink">{value}</p>
        </div>
      ))}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <h2 className="display text-5xl text-ink sm:text-7xl">{about.heading}</h2>
        <div className="space-y-5 text-lg leading-8 text-ink-soft">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <figure className="stone-note">
            <blockquote className="verse text-2xl text-ink sm:text-3xl">
              {album.verse}
            </blockquote>
            <figcaption className="mt-5 border-t border-ink/10 pt-5">
              <p className="text-2xl text-ink">Ebenezer: stone of help</p>
              <p className="mt-2 text-base leading-7">Thus far the Lord has helped us.</p>
              <p className="mt-2 text-sm text-olive">{album.scripture}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Album() {
  return (
    <section id="album" className="border-y border-ink/10 bg-paper/55">
      <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-6 border-b border-ink/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="display text-5xl text-ink sm:text-7xl">{album.title}</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-ink-soft">{album.summary}</p>
        </div>
        <ol className="mt-2">
          {tracks.map((track) => (
            <li
              key={track.number}
              id={`track-${track.number}`}
              className="track-row"
            >
              <span className="track-index">{String(track.number).padStart(2, "0")}</span>
              <h3 className="display flex flex-wrap items-center gap-x-3 gap-y-2 text-3xl text-ink sm:text-4xl">
                {track.title}
                {"note" in track ? <span className="coming-badge">{track.note}</span> : null}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faith() {
  return (
    <section id="faith" className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 sm:py-24">
      <div className="panel px-6 py-10 sm:px-10 sm:py-14">
        <h2 className="display text-5xl text-ink sm:text-6xl">{faith.heading}</h2>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-ink-soft">{faith.statement}</p>
        <p className="mt-6 max-w-3xl text-base leading-7 text-ink-soft">
          {album.scripture}. The Ebenezer stone. Thus far the Lord has helped us.
        </p>
      </div>
    </section>
  );
}

function Questions() {
  return (
    <section id="questions" className="mx-auto max-w-[1180px] px-4 pb-8 sm:px-6" aria-labelledby="questions-heading">
      <div className="border-b border-ink/10 pb-6">
        <h2 id="questions-heading" className="display text-5xl text-ink sm:text-6xl">
          Questions
        </h2>
      </div>
      <dl className="divide-y divide-ink/10">
        {questions.map((item) => (
          <div key={item.id} className="grid gap-3 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
            <dt className="verse text-2xl text-ink">{item.question}</dt>
            <dd className="text-base leading-7 text-ink-soft">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <h2 className="display text-5xl text-ink sm:text-7xl">{labelCredit.heading}</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">{labelCredit.summary}</p>
          <dl className="mt-8 space-y-4">
            <div>
              <dt className="label text-[10px] text-olive">Imprint</dt>
              <dd className="mt-1 text-xl text-ink">{labelCredit.imprint}</dd>
            </div>
            <div>
              <dt className="label text-[10px] text-olive">Label</dt>
              <dd className="mt-1">
                <a
                  href={voxPetraUrl}
                  className="text-xl text-ink underline decoration-sun decoration-2 underline-offset-4"
                >
                  {labelCredit.parentLabel}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="panel p-6 sm:p-8">
          <h3 className="display text-4xl text-ink">{debutSingle.title}</h3>
          <p className="mt-3 text-sm leading-6 text-ink-soft">{debutSingle.note}</p>
          <div className="mt-5">
            <StreamingLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="display text-3xl text-ink">Asa Cole</p>
          <p className="label mt-2 text-[10px] text-ink-soft">
            {album.title} · {artist.imprint}
          </p>
        </div>
        <p className="text-sm text-ink-soft">© {new Date().getFullYear()} Asa Cole</p>
        <a
          href={voxPetraUrl}
          className="label inline-flex items-center gap-2 text-[10px] text-ink-soft transition hover:text-clay"
        >
          <Image
            src="/brand/vox-petra-brandmark-obsidian.svg"
            alt=""
            width={18}
            height={24}
            className="h-6 w-auto"
          />
          Vox Petra
        </a>
      </div>
    </footer>
  );
}
