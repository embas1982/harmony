import './Header.css';

export default function Header() {
  return (
    <header className="app-header" role="banner">
      <div className="container">
        <div className="header-inner">
          <a href="#main" className="header-logo" aria-label="Harmony – inicio">
            <span className="logo-icon" aria-hidden="true">♪</span>
            <span className="logo-text">Harmony</span>
          </a>
          <p className="header-tagline">Música terapéutica personalizada</p>
        </div>
      </div>
    </header>
  );
}
