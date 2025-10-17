# Kitadachs |Build Status| |Coverage Status| |PyPi Version| |Codestyle|

![Kitadachs Logo](public/kitadachs-logo.png)

Willkommen bei **Kitadachs** – dem Tool für **Gruppenzuordnung** und **Forecast** von Kindern in Kitas.

"Was ist Kitadachs?"
    - Kinder gruppenweise planen  
    - Auslastung und Altersstruktur im Blick  
    - Forecast für kommende Monate

## Technische Details
- **Frontend**: React 18 mit Vite 7 als Build-Tool, React Router 7 steuert die Navigation zwischen Landingpage (`/`) und Anwendung (`/app`).
- **State & Persistenz**: React Hooks verwalten Kinder- und Gruppenlisten, `localStorage` speichert Daten lokal; Export als JSON-Datei via File System Access API.
- **Styling**: Klassische CSS-Dateien in `src/` (z. B. `src/App.css`, `src/components/LandingPage.css`) sowie im statischen Landingpage-Ordner `landing/`.
- **Konfiguration & Assets**: Tabellenvorlagen liegen in `src/config`, statische Ressourcen im Ordner `public/`.
- **Tooling**: ESLint, Vitest und Testing Library sind vorkonfiguriert; erforderlich ist Node.js ≥22 (siehe `package.json`).