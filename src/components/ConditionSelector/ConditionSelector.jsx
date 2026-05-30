import './ConditionSelector.css';

const PROFILES = {
  relajacion: { label: 'Relajación Profunda', color: 'cyan', icon: '🔇' },
  calma:      { label: 'Calma Moderada',      color: 'teal', icon: '🎧' },
  activacion: { label: 'Activación Moderada', color: 'yellow', icon: '🎵' },
  energia:    { label: 'Alta Energía',         color: 'pink', icon: '⚡' },
};

const CONDITIONS = [
  { label: 'Ansiedad Generalizada',                              profile: 'relajacion', icon: '🧘' },
  { label: 'Ataques de Pánico / Estrés Agudo',                  profile: 'relajacion', icon: '💨' },
  { label: 'Insomnio',                                           profile: 'relajacion', icon: '🌙' },
  { label: 'Fibromialgia (Sueño y dolor)',                       profile: 'relajacion', icon: '💤' },
  { label: 'TEA (Autismo) – Regulación',                        profile: 'relajacion', icon: '🌀' },
  { label: 'Trastorno de Estrés Postraumático (TEPT)',           profile: 'relajacion', icon: '🛡️' },
  { label: 'Migraña',                                            profile: 'relajacion', icon: '🌫️' },
  { label: 'Cáncer (Ansiedad y dolor)',                          profile: 'calma',      icon: '🌸' },
  { label: 'Hipertensión Arterial',                              profile: 'calma',      icon: '❤️' },
  { label: 'Cardiopatía / Rehabilitación Cardíaca (Reposo)',     profile: 'calma',      icon: '🫀' },
  { label: 'Diabetes (Control de estrés)',                       profile: 'calma',      icon: '🍃' },
  { label: 'Demencia (Agitación)',                               profile: 'calma',      icon: '🧠' },
  { label: 'Dolor Crónico',                                      profile: 'calma',      icon: '🌿' },
  { label: 'Tinnitus (Acúfenos)',                                profile: 'calma',      icon: '👂' },
  { label: 'Esquizofrenia',                                      profile: 'calma',      icon: '🔮' },
  { label: 'Síndrome de Down (Relajacion)',                      profile: 'calma',      icon: '🌈' },
  { label: 'TOC (Reducción de Síntomas)',                        profile: 'calma',      icon: '🔄' },
  { label: 'Enfermedad Renal Crónica (Hemodiálisis)',            profile: 'calma',      icon: '💧' },
  { label: 'Gastritis / Síndrome de Intestino Irritable',       profile: 'calma',      icon: '🌱' },
  { label: 'TEA – Intervención Conductual',                     profile: 'activacion', icon: '🎯' },
  { label: 'Depresión Leve-Moderada',                           profile: 'activacion', icon: '🌤️' },
  { label: 'Rehabilitación de Ictus (Movilidad)',               profile: 'activacion', icon: '🚶' },
  { label: 'Esclerosis Múltiple (Marcha)',                      profile: 'activacion', icon: '🦋' },
  { label: 'Asma / EPOC',                                       profile: 'activacion', icon: '🫁' },
  { label: 'Síndrome de Down (Actividades)',                    profile: 'activacion', icon: '🎨' },
  { label: 'TEA – Estimulación Social',                        profile: 'activacion', icon: '🤝' },
  { label: 'TDAH (Concentración)',                              profile: 'activacion', icon: '🎯' },
  { label: 'Cardiopatía / Rehabilitación Cardíaca(Ejercicio)',  profile: 'energia',    icon: '🏃' },
  { label: 'Parkinson (Marcha)',                                profile: 'energia',    icon: '🚶‍♂️' },
  { label: 'TDAH (Energía/Estimulación)',                      profile: 'energia',    icon: '⚡' },
  { label: 'Obesidad (Control de apetito)',                     profile: 'energia',    icon: '🥗' },
  { label: 'Epilepsia (Efecto Mozart)',                         profile: 'energia',    icon: '🎼' },
];

const PROFILE_GROUPS = Object.entries(PROFILES).map(([key, meta]) => ({
  key,
  ...meta,
  conditions: CONDITIONS.filter(c => c.profile === key),
}));

export default function ConditionSelector({ selected, onSelect }) {
  return (
    <section className="condition-selector" aria-label="Seleccionar condición médica">
      <div className="condition-selector__header">
        <h2 className="condition-selector__title">
          ¿Cuál es tu condición médica?
        </h2>
        <p className="condition-selector__subtitle">
          Selecciona una condición para recibir una lista personalizada de canciones terapéuticas.
        </p>
      </div>

      {PROFILE_GROUPS.map(group => (
        <div key={group.key} className={`profile-group profile-group--${group.color}`}>
          <div className="profile-group__heading" aria-hidden="true">
            <span className="profile-group__icon">{group.icon}</span>
            <span className="profile-group__label">{group.label}</span>
          </div>

          <div
            className="condition-grid"
            role="radiogroup"
            aria-label={`Condiciones de ${group.label}`}
          >
            {group.conditions.map(cond => {
              const isSelected = selected === cond.label;
              return (
                <button
                  key={cond.label}
                  role="radio"
                  aria-checked={isSelected}
                  className={`condition-card condition-card--${group.color}${isSelected ? ' condition-card--selected' : ''}`}
                  onClick={() => onSelect(cond.label)}
                  type="button"
                >
                  <span className="condition-card__icon" aria-hidden="true">{cond.icon}</span>
                  <span className="condition-card__label">{cond.label}</span>
                  {isSelected && (
                    <span className="condition-card__check" aria-hidden="true">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
