import './SongCard.css';

function MetaBadge({ label, value, unit = '' }) {
  return (
    <div className="meta-badge">
      <span className="meta-badge__label">{label}</span>
      <span className="meta-badge__value">
        {value}
        {unit && <span className="meta-badge__unit">{unit}</span>}
      </span>
    </div>
  );
}

export default function SongCard({ song, index }) {
  const {
    nombre_cancion,
    Nombre_Artista,
    ritmo,
    energia,
    acustica,
    intensidad_sonora,
    genero,
    url_youtube,
  } = song;

  return (
    <article className="song-card" aria-label={`${nombre_cancion} de ${Nombre_Artista}`}>
      <div className="song-card__rank" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>

      <div className="song-card__body">
        <div className="song-card__header">
          <div className="song-card__info">
            <h3 className="song-card__title">{nombre_cancion}</h3>
            <p className="song-card__artist">{Nombre_Artista}</p>
          </div>
          <span className="song-card__genre">{genero}</span>
        </div>

        <div className="song-card__meta" role="list" aria-label="Características musicales">
          <MetaBadge label="Tempo" value={ritmo} unit=" BPM" />
          <MetaBadge label="Energía" value={energia.toFixed(3)} />
          <MetaBadge label="Acústica" value={acustica.toFixed(3)} />
          <MetaBadge label="Intensidad" value={`${intensidad_sonora} dB`} />
        </div>

        <a
          href={url_youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="song-card__play-btn"
          aria-label={`Escuchar ${nombre_cancion} de ${Nombre_Artista} en YouTube`}
        >
          <span className="play-icon" aria-hidden="true">▶</span>
          Escuchar en YouTube
        </a>
      </div>
    </article>
  );
}
