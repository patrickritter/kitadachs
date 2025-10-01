import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/kitadachs-logo.png" alt="Kitadachs Logo" className="logo-img" />
            <span className="logo-text">Kitadachs</span>
          </div>
          <div className="nav-menu" id="nav-menu">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">Über uns</a>
            <a href="#download" className="nav-link">Download</a>
            <a href="#contact" className="nav-link">Kontakt</a>
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
              Moderne <span className="gradient-text">Kindergarten-Verwaltung</span>
              <br />für das digitale Zeitalter
            </h1>
            <p className="hero-description">
              Kitadachs revolutioniert die Verwaltung von Kindergarten-Gruppen. 
              Einfach, sicher und vollständig DSGVO-konform. 
              Verwalten Sie Kinder, Gruppen und Planungen mit modernster Technologie.
            </p>
            <div className="hero-buttons">
              <Link to="/app" className="btn btn-primary">
                <span>Jetzt starten</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </Link>
              <a href="#features" className="btn btn-secondary">
                <span>Mehr erfahren</span>
              </a>
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
                "Speichern unter" für maximale Flexibilität.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z"/>
                  <path d="M21 9C21 10.1046 20.1046 11 19 11C17.8954 11 17 10.1046 17 9C17 7.89543 17.8954 7 19 7C20.1046 7 21 7.89543 21 9Z"/>
                  <path d="M7 9C7 10.1046 6.10457 11 5 11C3.89543 11 3 10.1046 3 9C3 7.89543 3.89543 7 5 7C6.10457 7 7 7.89543 7 9Z"/>
                  <path d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"/>
                </svg>
              </div>
              <h3 className="feature-title">Forecast & Planung</h3>
              <p className="feature-description">
                Planen Sie zukünftige Gruppen und Altersstrukturen. 
                Perfekt für langfristige Kindergarten-Planung.
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

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Über Kitadachs</h2>
              <p className="about-description">
                Kitadachs wurde entwickelt, um die Verwaltung von Kindergarten-Gruppen 
                zu modernisieren und zu vereinfachen. Als Reaktion auf die wachsenden 
                Anforderungen an Datenschutz und Benutzerfreundlichkeit im Kitaalltag.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="feature-check">✓</div>
                  <span>Entwickelt für Pädagogen und Leitungen</span>
                </div>
                <div className="about-feature">
                  <div className="feature-check">✓</div>
                  <span>Open Source und kostenlos</span>
                </div>
                <div className="about-feature">
                  <div className="feature-check">✓</div>
                  <span>Keine Installation oder Registrierung</span>
                </div>
                <div className="about-feature">
                  <div className="feature-check">✓</div>
                  <span>Funktioniert offline</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="code-block">
                <div className="code-header">
                  <div className="code-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                  <span className="code-title">kitadachs.js</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-comment">// DSGVO-konforme Datenspeicherung</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">const</span> <span className="code-variable">data</span> = {'{'}
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;<span className="code-property">children</span>: <span className="code-string">'lokal gespeichert'</span>,
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;<span className="code-property">groups</span>: <span className="code-string">'anpassbar'</span>,
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;<span className="code-property">privacy</span>: <span className="code-string">'100% sicher'</span>
                  </div>
                  <div className="code-line">
                    {'};'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <div className="container">
          <div className="download-content">
            <h2 className="section-title">Jetzt starten</h2>
            <p className="section-description">
              Laden Sie Kitadachs herunter und beginnen Sie sofort mit der Verwaltung Ihrer Kindergarten-Gruppen.
            </p>
            <div className="download-options">
              <div className="download-card">
                <div className="download-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"/>
                    <path d="M17 8L12 13L7 8"/>
                    <path d="M12 13V3"/>
                  </svg>
                </div>
                <h3>Direkt starten</h3>
                <p>Öffnen Sie die Anwendung direkt in Ihrem Browser. Keine Installation erforderlich.</p>
                <Link to="/app" className="btn btn-primary">
                  <span>Jetzt öffnen</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </Link>
              </div>
              <div className="download-card">
                <div className="download-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"/>
                    <path d="M14 2V8H20"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                </div>
                <h3>Quellcode</h3>
                <p>Entwickler können den Quellcode herunterladen und anpassen.</p>
                <a href="https://github.com/ihr-username/kitadachs" className="btn btn-secondary">
                  <span>GitHub öffnen</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H19C18.4696 21 17.9609 20.7893 17.5858 20.4142C17.2107 20.0391 17 19.5304 17 19V16C17 15.4696 16.7893 14.9609 16.4142 14.5858C16.0391 14.2107 15.5304 14 15 14H9C8.46957 14 7.96086 14.2107 7.58579 14.5858C7.21071 14.9609 7 15.4696 7 16V19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21H10"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="browser-support">
              <h4>Unterstützte Browser</h4>
              <div className="browser-icons">
                <div className="browser-icon">
                  <div className="browser-logo">
                    <img src="/chrome-logo.svg" alt="Chrome Logo" width="40" height="40" />
                  </div>
                  <span>Chrome</span>
                </div>
                <div className="browser-icon">
                  <div className="browser-logo">
                    <img src="/edge-logo.svg" alt="Edge Logo" width="40" height="40" />
                  </div>
                  <span>Edge</span>
                </div>
                <div className="browser-icon">
                  <div className="browser-logo">
                    <img src="/firefox-logo.svg" alt="Firefox Logo" width="40" height="40" />
                  </div>
                  <span>Firefox</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Kontakt & Support</h2>
            <p className="section-description">
              Haben Sie Fragen oder benötigen Sie Hilfe? Wir sind für Sie da.
            </p>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
                    <path d="M22 6L12 13L2 6"/>
                  </svg>
                </div>
                <h3>E-Mail</h3>
                <p>support@kitadachs.de</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H19C18.4696 21 17.9609 20.7893 17.5858 20.4142C17.2107 20.0391 17 19.5304 17 19V16C17 15.4696 16.7893 14.9609 16.4142 14.5858C16.0391 14.2107 15.5304 14 15 14H9C8.46957 14 7.96086 14.2107 7.58579 14.5858C7.21071 14.9609 7 15.4696 7 16V19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21H10"/>
                  </svg>
                </div>
                <h3>GitHub</h3>
                <p>github.com/kitadachs</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                  </svg>
                </div>
                <h3>FAQ</h3>
                <p>Häufige Fragen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/kitadachs-logo.png" alt="Kitadachs Logo" className="logo-img" />
                <span className="logo-text">Kitadachs</span>
              </div>
              <p className="footer-description">
                Moderne Kindergarten-Verwaltung für das digitale Zeitalter.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Produkt</h4>
                <a href="#features">Features</a>
                <Link to="/app">Download</Link>
                <a href="#about">Über uns</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="#contact">Kontakt</a>
                <a href="#">Dokumentation</a>
                <a href="#">FAQ</a>
              </div>
              <div className="footer-column">
                <h4>Rechtliches</h4>
                <a href="#">Datenschutz</a>
                <a href="#">Impressum</a>
                <a href="#">Lizenz</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Kitadachs. Alle Rechte vorbehalten.</p>
            <p>Entwickelt mit ❤️ für die frühkindliche Bildung</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
