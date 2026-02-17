# Deployment Guide

This project is configured for deployment to GitHub Pages.

## Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and deploys your site whenever you push to the `main` branch.

### Setup Steps

1. **Clone the repository**:
   ```bash
   git clone git@github.com:mlicciardi/veronica-lamaga.git
   cd veronica-lamaga
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Build and deployment setup"
   git push origin main
   ```

2. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - GitHub Pages will automatically use the workflow to deploy

3. **View your site**:
   - Once the workflow completes, your site will be at: `https://mlicciardi.github.io/veronica-lamaga/`
   - GitHub will show the URL in Settings → Pages

### How it Works

The `.github/workflows/deploy.yml` workflow:
- Triggers on every push to `main`
- Installs dependencies with `npm install`
- Builds the project with `npm run build`
- Deploys the `dist/` folder to GitHub Pages

## Manual Deployment

If you prefer to deploy manually using `gh-pages` package:

1. **Install gh-pages** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deployment scripts** to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## Environment Variables

Currently, no environment variables are required for deployment. All configuration is in:
- `src/config/site.config.ts` - Site information
- `src/i18n/*.json` - Translations
- `vite.config.ts` - Build configuration

## Troubleshooting

### Blank page after deployment?
- Ensure the base path in `vite.config.ts` is set to `/veronica-lamaga/`
- Check that files loaded correctly in browser DevTools (Network tab)
- Verify the GitHub Pages source is set to "GitHub Actions"

### Workflow fails?
- Check the "Actions" tab in your GitHub repository for error logs
- Ensure Node.js version in workflow matches your development version
- Verify `npm run build` works locally

### Build issues?
- Run `npm install` locally
- Run `npm run build` to test the build locally
- Fix any TypeScript or build errors before pushing

## Domain Configuration

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. In GitHub repository settings → Pages, enter your custom domain
3. Configure your domain's DNS to point to GitHub Pages

## More Information

- [GitHub Pages Documentation](https://pages.github.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
