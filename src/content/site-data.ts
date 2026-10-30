export const siteUrl = "https://asacole.com";
export const voxPetraUrl = "https://voxpetra.com";

export const artist = {
  name: "Asa Cole",
  imprint: "Driven By Heaven",
  parentLabel: "Vox Petra",
  genre: ["Pop", "Worship", "Christian"],
  description:
    "Asa Cole is a new artist on Vox Petra, an independent Christian music label. He sings loud, joyful, colorful pop worship: big hooks, bright tenor vocals, gospel-centered and Christ-focused, drawn from Scripture stories.",
} as const;

export const debutSingle = {
  title: "Dust and Breath",
  statusLabel: "Coming soon",
  note: "Streaming links are not live yet.",
} as const;

/**
 * Dust and Breath lyric video. The MP4 is not committed to git.
 * Set NEXT_PUBLIC_DUST_AND_BREATH_VIDEO_URL to the hosted file (Vercel Blob URL).
 * Local fallback: public/video/dust-and-breath-lyric-video.mp4 (gitignored).
 */
export const lyricVideo = {
  title: "Dust and Breath (Lyric Video)",
  src:
    process.env.NEXT_PUBLIC_DUST_AND_BREATH_VIDEO_URL ||
    "/video/dust-and-breath-lyric-video.mp4",
  poster: "/images/dust-and-breath-lyric-video-poster.jpg",
  width: 1920,
  height: 1080,
  captions: "/video/dust-and-breath.vtt",
} as const;

export const album = {
  title: "Stones of Help",
  kind: "Debut album",
  scripture: "1 Samuel 7:12",
  stoneName: "Ebenezer",
  verse:
    "Then Samuel took a stone, and set it between Mizpeh and Shen, and called the name of it Ebenezer, saying, Hitherto hath the LORD helped us.",
  summary:
    "Stones of Help is the debut album from Asa Cole. The title comes from 1 Samuel 7:12, the stone Samuel named Ebenezer.",
} as const;

export const about = {
  heading: "About Asa",
  paragraphs: [
    "Asa Cole is a new artist on Vox Petra, an independent Christian music label.",
    "He sings loud, joyful, colorful pop worship with big hooks, bright tenor vocals, and Jesus Christ at the center.",
    "The songs are gospel-centered and drawn from Scripture stories, told with a grin: a runaway in a pig pen, a prophet on the wrong boat, a rooster that will not stay silent.",
  ],
} as const;

export const faith = {
  heading: "Faith",
  statement:
    "Asa Cole's music is gospel-centered and Christ-focused. The songs are drawn from Scripture stories, and Jesus Christ is the center. Stones of Help remembers the help of the Lord: the Ebenezer stone of 1 Samuel 7:12.",
} as const;

export const labelCredit = {
  heading: "Contact",
  imprint: artist.imprint,
  parentLabel: artist.parentLabel,
  parentUrl: voxPetraUrl,
  summary:
    "Asa Cole is on Vox Petra, an independent Christian music label, under the Driven By Heaven imprint.",
} as const;

export type StreamingLink = {
  id: "spotify" | "appleMusic" | "youTube";
  label: string;
  /**
   * Public URL. PLACEHOLDER: leave "" until Dust and Breath has a live link.
   * An empty string renders as a non-link Coming soon placeholder.
   */
  href: string;
};

/**
 * STREAMING PLACEHOLDERS
 * Dust and Breath is coming soon. Do not add guessed URLs.
 * When a platform link is public, set href to the full https URL.
 */
export const streamingLinks: StreamingLink[] = [
  {
    id: "spotify",
    label: "Spotify",
    href: "", // PLACEHOLDER: Spotify URL
  },
  {
    id: "appleMusic",
    label: "Apple Music",
    href: "", // PLACEHOLDER: Apple Music URL
  },
  {
    id: "youTube",
    label: "YouTube",
    href: "", // PLACEHOLDER: YouTube URL
  },
];

export function isLiveLink(href: string) {
  return href.trim().length > 0;
}

export function liveStreamingLinks() {
  return streamingLinks.filter((link) => isLiveLink(link.href));
}

export const tracks = [
  { number: 1, title: "Dust and Breath", image: "/images/asa-v2-01-dust-and-breath-garden-mural.jpg", imageAlt: "Asa Cole with eyes closed and arms open in front of a bright garden mural with clouds of color", note: "Debut single, coming soon" },
  { number: 2, title: "Hither Road", image: "/images/asa-v2-02-hither-road-convertible.jpg", imageAlt: "Asa Cole in a red vintage convertible on a palm-lined Hollywood street, looking at the camera" },
  { number: 3, title: "Pigpen Prayer", image: "/images/asa-v2-03-pigpen-prayer-pink-suit.jpg", imageAlt: "Asa Cole in a pink suit sitting on a curb beside a pig statue" },
  { number: 4, title: "Wrong Boat", image: "/images/asa-v2-04-wrong-boat-swan-whale.jpg", imageAlt: "Asa Cole as a sea captain at the wheel of a colorful fishing boat beside a giant inflatable whale" },
  { number: 5, title: "Rooster Crow", image: "/images/asa-v2-05-rooster-crow-sunrise-rooftop.jpg", imageAlt: "Asa Cole waking up in bed under a rooster print blanket, alarm clock at 4:30" },
  { number: 6, title: "Bronze Serpent", image: "/images/asa-v2-06-bronze-serpent-neon-sign.jpg", imageAlt: "Asa Cole looking up at a glowing bronze serpent sign" },
  { number: 7, title: "Jordan Water", image: "/images/asa-v2-07-jordan-water-fountain.jpg", imageAlt: "Asa Cole looking up with both hands raised in a city fountain" },
  { number: 8, title: "Gravel and Glory", image: "/images/asa-v2-08-gravel-and-glory-gold-sequins.jpg", imageAlt: "Asa Cole walking a backstage hall of gold streamers in a gold sequin jacket" },
] as const;

export const facts = [
  ["Artist", artist.name],
  ["Single", `${debutSingle.title} · ${debutSingle.statusLabel}`],
  ["Album", album.title],
  ["Label", `${artist.parentLabel} · ${artist.imprint}`],
] as const;

export const questions = [
  {
    id: "who-is-asa-cole",
    question: "Who is Asa Cole?",
    answer: artist.description,
  },
  {
    id: "what-is-stones-of-help",
    question: "What is Stones of Help?",
    answer: `${album.summary} Scripture: ${album.verse}`,
  },
  {
    id: "what-is-the-debut-single",
    question: "What is the debut single?",
    answer:
      "Dust and Breath is the debut single. It is coming soon, and no streaming link is live yet.",
  },
  {
    id: "where-can-i-listen",
    question: "Where can I listen?",
    answer:
      "Dust and Breath is coming soon. Spotify, Apple Music, and YouTube are shown here as Coming soon placeholders. No streaming link is live yet.",
  },
  {
    id: "who-releases-the-music",
    question: "Who releases the music?",
    answer: labelCredit.summary,
  },
] as const;

export function getStructuredData() {
  const liveLinks = liveStreamingLinks();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${voxPetraUrl}#organization`,
        name: artist.parentLabel,
        url: voxPetraUrl,
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}#imprint`,
        name: artist.imprint,
        url: siteUrl,
        parentOrganization: { "@id": `${voxPetraUrl}#organization` },
      },
      {
        "@type": "MusicGroup",
        "@id": `${siteUrl}#artist`,
        name: artist.name,
        url: siteUrl,
        description: artist.description,
        genre: artist.genre,
        image: `${siteUrl}/asa-cole-og.jpg`,
        recordLabel: { "@id": `${siteUrl}#imprint` },
        publisher: { "@id": `${voxPetraUrl}#organization` },
        ...(liveLinks.length
          ? { sameAs: liveLinks.map((link) => link.href) }
          : {}),
        album: { "@id": `${siteUrl}#stones-of-help` },
      },
      {
        "@type": "MusicAlbum",
        "@id": `${siteUrl}#stones-of-help`,
        name: album.title,
        description: album.summary,
        albumReleaseType: "https://schema.org/AlbumRelease",
        byArtist: { "@id": `${siteUrl}#artist` },
        recordLabel: { "@id": `${siteUrl}#imprint` },
        numTracks: tracks.length,
        url: `${siteUrl}#album`,
        track: tracks.map((track) => ({
          "@type": "ListItem",
          position: track.number,
          item: { "@id": `${siteUrl}#track-${track.number}` },
        })),
      },
      ...tracks.map((track) => ({
        "@type": "MusicRecording",
        "@id": `${siteUrl}#track-${track.number}`,
        position: track.number,
        name: track.title,
        description:
          "note" in track
            ? `${track.title}. ${track.note}.`
            : track.title,
        byArtist: { "@id": `${siteUrl}#artist` },
        inAlbum: { "@id": `${siteUrl}#stones-of-help` },
        url: `${siteUrl}#track-${track.number}`,
      })),
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}#faq`,
        mainEntity: questions.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: artist.name,
        url: siteUrl,
        publisher: { "@id": `${siteUrl}#imprint` },
        about: { "@id": `${siteUrl}#artist` },
      },
    ],
  };
}

export const gallery = [
  { src: "/images/asa-v2-headshot-square.jpg", alt: "Asa Cole smiling in a blue and orange jacket against a pink and yellow mural" },
  { src: "/images/asa-v2-neon-diner-portrait.jpg", alt: "Asa Cole smiling at the camera in a neon diner booth with a milkshake" },
  { src: "/images/asa-v2-laundromat-portrait.jpg", alt: "Asa Cole reading on a dryer in a pink and mint laundromat" },
  { src: "/images/asa-v2-about-record-shop-portrait.jpg", alt: "Asa Cole flipping through vinyl in a record shop" },
  { src: "/images/asa-v2-06-bronze-serpent-neon-sign.jpg", alt: "Asa Cole under a glowing serpent sign at dusk" },
  { src: "/images/asa-v2-07-jordan-water-fountain.jpg", alt: "Asa Cole with hands raised in a city fountain" },
] as const;
