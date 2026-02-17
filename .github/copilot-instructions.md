# Lavender Products Website - Setup Guide

This is a React + Vite website for showcasing organic lavender products (oils, beauty products, etc.).

## Project Requirements
- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Responsive design
- GitHub Pages deployment ready

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm installed
- If not installed, visit https://nodejs.org/

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure
- `src/` - React components and pages
- `public/` - Static assets
- `index.html` - Entry point
- `vite.config.ts` - Vite configuration with GitHub Pages setup

## GitHub Pages Deployment

The project is configured to deploy to GitHub Pages. To deploy:

1. Update `vite.config.ts` with your repository name:
   ```typescript
   base: '/your-repo-name/'
   ```

2. Deploy using GitHub Actions or manually:
   ```bash
   npm run build
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. In GitHub repository settings, set Pages source to `gh-pages` branch
