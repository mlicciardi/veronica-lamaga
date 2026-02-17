# Veronica Lamaga - Organic Lavender Products

A beautiful, responsive React website showcasing organic lavender products. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with Tailwind CSS
- 🚀 Lightning-fast development with Vite
- 📱 Mobile-first responsive layout
- 🛒 Product showcase with filtering
- 📝 Blog and content pages
- 💬 Contact form
- 🌐 GitHub Pages ready

## Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone git@github.com:mlicciardi/veronica-lamaga.git
cd veronica-lamaga
```

2. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── pages/               # Page components
│   ├── Home.tsx
│   ├── Shop.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind

public/                  # Static assets
index.html              # HTML entry point
tailwind.config.js      # Tailwind configuration
vite.config.ts          # Vite configuration
```

## GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup & Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Start:**
1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at: `https://YOUR-USERNAME.github.io/veronica-lamaga/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## License

MIT
