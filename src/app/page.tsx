import Image from "next/image";
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
  gallery,
  voxPetraUrl,
} from "@/content/site-data";

const nav = [
  { href: "#about", label: "About" },
  { href: "#album", label: "Album" },
  { href: "#gallery", label: "Photos" },
  { href: "#faith", label: "Faith" },
  { href: "#contact", label: "Contact" },
];

const trackColors = ["c-pink", "c-yellow", "c-teal", "c-red", "c-yellow", "c-teal", "c-pink", "c-red"];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Hero />
        <Marquee />
        <About />
        <Album />
        <Stage />
        <Gallery />
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
      <a href="#top" className="logo" aria-label="Asa Cole home">
        Asa Cole
      </a>
      <nav className="nav" aria-label="Primary">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <h1 className="hero-title">
          <span className="wobble w1">Asa</span>
          <span className="wobble w2">Cole</span>
        </h1>
        <p className="hero-lede">
          Loud, joyful, colorful pop worship on Vox Petra. Big hooks, bright
          jackets, and Jesus Christ at the center.
        </p>
        <div id="single" className="single-card">
          <p className="single-name">{debutSingle.title}</p>
          <span className="sticker sticker-yellow">{debutSingle.statusLabel}</span>
          <p className="single-note">{debutSingle.note}</p>
          <StreamingLinks />
        </div>
        <div className="hero-actions">
          <a className="btn btn-red" href="#album">
            Stones of Help
          </a>
          <a className="btn btn-teal" href="#about">
            Meet Asa
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <Image
          src="/images/asa-v2-hero-rooftop-wide.jpg"
          alt="Asa Cole walking across a sunny rooftop in a red bomber jacket and lime sneakers"
          fill
          priority
          sizes="(min-width: 900px) 60vw, 100vw"
          className="cover"
        />
        <span className="sticker sticker-pink hero-sticker" aria-hidden="true">
          Debut single soon
        </span>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [...tracks.map((t) => t.title)];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...words, ...words].map((w, i) => (
          <span key={i}>
            {w} <b>★</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="about-photo tilt-left">
        <Image
          src="/images/asa-v2-about-record-shop-portrait.jpg"
          alt="Asa Cole grinning with a vinyl record in a colorful record shop"
          fill
          sizes="(min-width: 900px) 420px, 90vw"
          className="cover"
        />
      </div>
      <div className="about-copy">
        <h2 className="section-title">{about.heading}</h2>
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <ul className="facts">
          {facts.map(([label, value], i) => (
            <li key={label} className={`fact ${trackColors[i]}`}>
              <strong>{label}</strong>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="about-headshot tilt-right">
        <Image
          src="/images/asa-v2-headshot-square.jpg"
          alt="Asa Cole headshot, smiling in a blue and orange jacket against a pink and yellow mural"
          fill
          sizes="220px"
          className="cover"
        />
      </div>
    </section>
  );
}

function Album() {
  return (
    <section id="album" className="album">
      <div className="album-head">
        <h2 className="section-title">{album.title}</h2>
        <p>{album.summary}</p>
      </div>
      <ol className="track-grid">
        {tracks.map((track, i) => (
          <li key={track.number} id={`track-${track.number}`} className={`track-card ${trackColors[i]}`}>
            <div className="track-img">
              <Image src={track.image} alt={track.imageAlt} fill sizes="(min-width: 1100px) 260px, (min-width: 640px) 45vw, 90vw" className="cover" />
              <span className="track-num">{String(track.number).padStart(2, "0")}</span>
            </div>
            <h3 className="track-title">{track.title}</h3>
            {"note" in track ? <span className="sticker sticker-yellow small">{track.note}</span> : null}
          </li>
        ))}
      </ol>
      <figure className="verse-card">
        <blockquote>{album.verse}</blockquote>
        <figcaption>
          Ebenezer, stone of help. Thus far the Lord has helped us. {album.scripture}
        </figcaption>
      </figure>
    </section>
  );
}

function Stage() {
  return (
    <div className="stage">
      <Image
        src="/images/asa-v2-banner-confetti-stage-wide.jpg"
        alt="Asa Cole singing in a magenta sequin suit as colorful confetti falls on stage"
        fill
        sizes="100vw"
        className="cover"
      />
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="section-title">Photos</h2>
      <div className="collage">
        {gallery.map((photo, i) => (
          <figure key={photo.src} className={`polaroid p${i}`}>
            <div className="polaroid-img">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 900px) 320px, 45vw" className="cover" />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Faith() {
  return (
    <section id="faith" className="faith">
      <h2 className="section-title">{faith.heading}</h2>
      <p>{faith.statement}</p>
    </section>
  );
}

function Questions() {
  return (
    <section id="questions" className="questions" aria-labelledby="questions-heading">
      <h2 id="questions-heading" className="section-title">Questions</h2>
      <dl>
        {questions.map((item, i) => (
          <div key={item.id} className={`qa ${trackColors[i]}`}>
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div>
        <h2 className="section-title">{labelCredit.heading}</h2>
        <p>{labelCredit.summary}</p>
        <p className="contact-line">
          Imprint: <strong>{labelCredit.imprint}</strong>
        </p>
        <p className="contact-line">
          Label: <a href={voxPetraUrl}>{labelCredit.parentLabel}</a>
        </p>
      </div>
      <div className="contact-card">
        <h3 className="track-title">{debutSingle.title}</h3>
        <p>{debutSingle.note}</p>
        <StreamingLinks />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="logo">Asa Cole</p>
      <p>
        {album.title} · {artist.imprint} · © {new Date().getFullYear()} Asa Cole
      </p>
      <a href={voxPetraUrl} className="footer-label">
        <Image src="/brand/vox-petra-brandmark-alabaster.svg" alt="" width={18} height={24} className="h-6 w-auto" />
        Vox Petra
      </a>
    </footer>
  );
}
