import { useState } from 'react';
import Header from './components/Header/Header';
import ConditionSelector from './components/ConditionSelector/ConditionSelector';
import SongList from './components/SongList/SongList';
import { useRecommendations } from './hooks/useRecommendations';
import './App.css';

export default function App() {
  const [selectedCondition, setSelectedCondition] = useState(null);
  const { songs, loading, error, fetchRecommendations, reset } = useRecommendations();

  function handleSelectCondition(condition) {
    setSelectedCondition(condition);
    reset();
  }

  function handleSubmit() {
    if (selectedCondition) fetchRecommendations(selectedCondition);
  }

  function handleReset() {
    setSelectedCondition(null);
    reset();
  }

  const showResults = songs || loading || error;

  return (
    <>
      <Header />

      <main id="main" className="app-main" tabIndex={-1}>
        <div className="container">

          {/* ── Hero ── */}
          <section className="hero" aria-label="Bienvenida">
            <h1 className="hero__title">
              Música que<br />
              <span className="hero__title--gradient">sana y calma</span>
            </h1>
            <p className="hero__description">
              Selecciona tu condición médica y recibe 5 canciones seleccionadas
              por su perfil terapéutico — tempo, energía y acústica — para
              acompañar tu bienestar.
            </p>
          </section>

          {/* ── Step indicator ── */}
          <div className="steps" aria-label="Pasos de la consulta">
            <div className={`step ${!showResults ? 'step--active' : 'step--done'}`}>
              <span className="step__num">1</span>
              <span className="step__text">Elige tu condición</span>
            </div>
            <div className="step-divider" aria-hidden="true" />
            <div className={`step ${showResults ? 'step--active' : ''}`}>
              <span className="step__num">2</span>
              <span className="step__text">Escucha tus canciones</span>
            </div>
          </div>

          {/* ── Content area ── */}
          <div className="content-area">
            {!showResults ? (
              <>
                <ConditionSelector
                  selected={selectedCondition}
                  onSelect={handleSelectCondition}
                />

                {selectedCondition && (
                  <div className="submit-bar">
                    <p className="submit-bar__selected">
                      <span className="submit-bar__dot" aria-hidden="true" />
                      {selectedCondition}
                    </p>
                    <button
                      className="submit-btn"
                      onClick={handleSubmit}
                      type="button"
                      aria-label={`Obtener recomendaciones para ${selectedCondition}`}
                    >
                      Obtener recomendaciones →
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                {loading && (
                  <div className="state-loading" role="status" aria-live="polite" aria-label="Cargando recomendaciones">
                    <div className="loading-spinner" aria-hidden="true">
                      <div className="spinner-ring" />
                      <div className="spinner-note" aria-hidden="true">♪</div>
                    </div>
                    <p className="state-loading__text">Buscando canciones terapéuticas…</p>
                    <p className="state-loading__sub">Analizando perfil para <strong>{selectedCondition}</strong></p>
                  </div>
                )}

                {error && !loading && (
                  <div className="state-error" role="alert" aria-live="assertive">
                    <span className="state-error__icon" aria-hidden="true">⚠️</span>
                    <p className="state-error__title">No pudimos obtener tus recomendaciones</p>
                    <p className="state-error__message">{error}</p>
                    <div className="state-error__actions">
                      <button className="btn-retry" onClick={handleSubmit} type="button">
                        Reintentar
                      </button>
                      <button className="btn-ghost" onClick={handleReset} type="button">
                        Cambiar condición
                      </button>
                    </div>
                  </div>
                )}

                {songs && !loading && (
                  <SongList
                    songs={songs}
                    condition={selectedCondition}
                    onReset={handleReset}
                  />
                )}
              </>
            )}
          </div>

        </div>
      </main>

      <footer className="app-footer" role="contentinfo">
        <div className="container">
          <p>Proyecto Harmony · Música terapéutica para el bienestar</p>
        </div>
      </footer>
    </>
  );
}
