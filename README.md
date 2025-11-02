# Kitadachs

![Kitadachs Logo](public/kitadachs-logo.png)

**Kitadachs** is a modern kindergarten management application for digital management of kindergarten groups. Simple, secure, and fully GDPR-compliant.

**📄 [Deutsche Version / German Version](README.de.md)**

## 🚀 Live Demo

The application is live available at: **[GitHub Pages](https://patrickritter.github.io/kitadachs/)**

## License
This project is licensed under the [MIT License](./LICENSE).

## 🛠️ Technical Details

### Prerequisites
- **Node.js** 22.x or higher
- **npm** (comes with Node.js)

### Local Development

1. **Clone repository**
   ```bash
   git clone https://github.com/ihr-username/kitadachs.git
   cd kitadachs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The application is then available at: `http://localhost:5173`

4. **Additional available commands**
   ```bash
   npm run build      # Create production build
   npm run preview    # Test build locally
   npm run test       # Run tests
   npm run lint       # Check code quality
   ```

## 🌐 Routing

- **`/`** - Landing Page
- **`/app`** - Main application (Kindergarten Management)

## 🚀 Deployment

The project is automatically deployed to GitHub Pages via GitHub Actions:

- **Trigger**: Push to `main` branch

## 🔧 Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM
- **Styling**: CSS3
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint
- **Deployment**: GitHub Pages + GitHub Actions

## 📱 Browser Support

- ✅ Chrome
- ✅ Firefox  
- ✅ Edge
