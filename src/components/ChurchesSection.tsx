import { churchSongs, LABEL_CHURCHES_URL } from "@/content/churches";

export function ChurchesSection() {
  return (
    <section id="churches" className="questions churches-section" aria-labelledby="churches-heading">
      <div>
          <p className="churches-kicker">For Churches</p>
          <h2 id="churches-heading">Free for your congregation.</h2>
          <p className="churches-intro">
            Download a lyric sheet for any released Asa Cole song to use in worship, small groups, or prayer.
          </p>
        </div>
      <div className="churches-list">
        {churchSongs.map((song) => (
          <article key={song.title}>
            <h3>{song.title}</h3>
            <p>{song.detail}</p>
            <div className="churches-links">
              <a href={song.lyricsPdf} download>
                Lyrics PDF
              </a>
              {song.chordsPdf ? (
                <a href={song.chordsPdf} download>
                  Chords PDF
                </a>
              ) : (
                <span>Lyric sheet only</span>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="churches-more">
        <a href={LABEL_CHURCHES_URL} target="_blank" rel="noopener noreferrer">
          Vox Petra for churches
        </a>
      </p>
    </section>
  );
}
