export const siteUrl = "https://asacole.com";
export const voxPetraUrl = "https://voxpetra.com";

export const artist = {
  name: "Asa Cole",
  imprint: "Driven By Heaven",
  parentLabel: "Vox Petra",
  genre: ["Indie folk-pop", "Worship", "Christian"],
  description:
    "Asa Cole is a new artist on Vox Petra, an independent Christian music label. He sings bright young-tenor indie folk-pop worship: sunlit and acoustic, gospel-centered and Christ-focused, drawn from Scripture stories.",
} as const;

export const debutSingle = {
  title: "Dust and Breath",
  statusLabel: "Coming soon",
  note: "Streaming links are not live yet.",
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
    "He sings bright young-tenor indie folk-pop worship: sunlit and acoustic, with Jesus Christ at the center.",
    "The songs are gospel-centered and drawn from Scripture stories.",
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
  { number: 1, title: "Dust and Breath", image: "/images/asa-01-dust-and-breath.jpg", imageAlt: "Asa Cole in a golden field at dawn with his guitar", note: "Debut single, coming soon" },
  { number: 2, title: "Hither Road", image: "/images/asa-02-hither-road.jpg", imageAlt: "Asa Cole walking a gravel country road with his guitar" },
  { number: 3, title: "Pigpen Prayer", image: "/images/asa-03-pigpen-prayer.jpg", imageAlt: "Asa Cole grinning on a farm fence by a pig pen" },
  { number: 4, title: "Barley Field" },
  { number: 5, title: "Nineveh Bound" },
  { number: 6, title: "The Ledger" },
  { number: 7, title: "Rooster Crow", image: "/images/asa-06-rooster-crow.jpg", imageAlt: "Asa Cole on a porch at sunrise with coffee and a rooster" },
  { number: 8, title: "Bronze Serpent", image: "/images/asa-07-bronze-serpent.jpg", imageAlt: "Asa Cole looking up from a desert overlook" },
  { number: 9, title: "Jordan Water", image: "/images/asa-08-jordan-water.jpg", imageAlt: "Asa Cole laughing as he wades in a river" },
  { number: 10, title: "Gravel and Glory", image: "/images/asa-09-gravel-and-glory.jpg", imageAlt: "Asa Cole placing a stone on a roadside cairn at sunset" },
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
        image: `${siteUrl}/asa-cole-hero.jpg`,
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
  { src: "/images/asa-candid-diner.jpg", alt: "Asa Cole laughing as he writes in a notebook at a diner booth" },
  { src: "/images/asa-candid-tailgate.jpg", alt: "Asa Cole tuning his guitar on a pickup tailgate at dusk" },
  { src: "/images/asa-candid-orchard.jpg", alt: "Asa Cole smiling in an autumn orchard" },
  { src: "/images/asa-05-wrong-boat.jpg", alt: "Asa Cole with his guitar on a dock in the rain" },
  { src: "/images/asa-10-up-a-tree.jpg", alt: "Asa Cole playing guitar in a sycamore tree" },
  { src: "/images/asa-11-fresh-every-morning.jpg", alt: "Asa Cole with a mug at a kitchen window in morning light" },
] as const;
