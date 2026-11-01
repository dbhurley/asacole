export const LABEL_CHURCHES_URL = "https://voxpetra.com/churches";

export type ChurchSong = {
  title: string;
  detail: string;
  lyricsPdf: string;
  chordsPdf: string | null;
};

// Released songs only. Lyrics copied from the released masters; no chord charts yet.
export const churchSongs: ChurchSong[] = [
  {
    title: "Dust and Breath",
    detail: "Stones of Help",
    lyricsPdf: "/churches/dust-and-breath-lyrics.pdf",
    chordsPdf: null,
  },
];
