import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/kitadachs/kitadachs-logo.png" alt="Kitadachs Logo" className="logo-img" />
            <span className="logo-text">Kitadachs</span>
          </div>
          <div className="nav-menu" id="nav-menu">
            
          </div>
          <div className="hamburger" id="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Moderne Kindergarten-Verwaltung
              <br />für das digitale Zeitalter
            </h1>
            <p className="hero-description">
              Kitadachs revolutioniert die Verwaltung von Kindergarten-Gruppen. 
              Einfach, sicher und vollständig DSGVO-konform. 
              Verwalten Sie Kinder, Gruppen und Planungen mit modernster Technologie.
            </p>
            <div className="hero-buttons">
              <Link to="/app" className="btn btn-primary">
                <span>Demo starten</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">DSGVO-konform</span>
              </div>
              <div className="stat">
                <span className="stat-number">0</span>
                <span className="stat-label">Server benötigt</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Kinder verwalten</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="app-preview">
              <div className="app-window">
                <div className="app-header">
                  <div className="app-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                  <div className="app-title">Kitadachs</div>
                </div>
                <div className="app-content">
                  <div className="preview-groups">
                    <div className="preview-group">
                      <h3>Wiesenkinder</h3>
                      <div className="preview-cards">
                        <div className="preview-card">Max Mustermann</div>
                        <div className="preview-card">Emma Schmidt</div>
                        <div className="preview-card">Lukas Weber</div>
                      </div>
                    </div>
                    <div className="preview-group">
                      <h3>Waldwichtel</h3>
                      <div className="preview-cards">
                        <div className="preview-card">Sophie Müller</div>
                        <div className="preview-card">Noah Klein</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Warum Kitadachs?</h2>
            <p className="section-description">
              Moderne Technologie trifft auf benutzerfreundliches Design
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <h3 className="feature-title">Gruppen-Management</h3>
              <p className="feature-description">
                Verwalten Sie unbegrenzt viele Gruppen mit individuellen Namen. 
                Drag & Drop für einfache Zuordnung.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12L11 14L15 10"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                </svg>
              </div>
              <h3 className="feature-title">DSGVO-konform</h3>
              <p className="feature-description">
                100% lokale Datenspeicherung. Keine Server, keine Cloud, 
                keine Datenübertragung an Dritte.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"/>
                  <path d="M14 2V8H20"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                  <path d="M10 9H8"/>
                </svg>
              </div>
              <h3 className="feature-title">Datei-Export</h3>
              <p className="feature-description">
                Speichern Sie Ihre Daten als JSON-Datei. 
                &quot;Speichern unter&quot; für maximale Flexibilität.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                </svg>
              </div>
              <h3 className="feature-title">Sicherheit</h3>
              <p className="feature-description">
                Moderne Browser-Sicherheit mit File System Access API. 
                Ihre Daten bleiben immer unter Ihrer Kontrolle.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
                </svg>
              </div>
              <h3 className="feature-title">Performance</h3>
              <p className="feature-description">
                Blitzschnelle React-Anwendung mit Vite. 
                Optimiert für moderne Browser und Geräte.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
          <p>&copy; 2025 Kitadachs. Alle Rechte vorbehalten.</p>
            <p>Entwickelt mit ❤️ für die Bildung</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
