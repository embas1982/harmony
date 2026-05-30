import SongCard from './SongCard';
import './SongList.css';

export default function SongList({ songs, condition, onReset }) {
  return (
    <section className="song-list" aria-label={`Recomendaciones para ${condition}`}>
      <div className="song-list__header">
        <div className="song-list__title-block">
          <span className="song-list__badge" aria-hidden="true">🎵</span>
          <div>
            <h2 className="song-list__title">Tus recomendaciones</h2>
            <p className="song-list__condition">{condition}</p>
          </div>
        </div>
        <button
          className="song-list__reset-btn"
          onClick={onReset}
          type="button"
          aria-label="Volver a seleccionar condición"
        >
          ← Nueva consulta
        </button>
      </div>

      <ol className="song-list__items" aria-label="Lista de canciones recomendadas">
        {songs.map((song, i) => (
          <li key={`${song.nombre_cancion}-${song.Nombre_Artista}`}>
            <SongCard song={song} index={i} />
          </li>
        ))}
      </ol>

      <p className="song-list__disclaimer">
        Las recomendaciones son orientativas. Consulta siempre con tu profesional de salud.
      </p>
    </section>
  );
}
