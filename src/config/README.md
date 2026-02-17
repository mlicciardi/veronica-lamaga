# Site Configuration

This directory contains all site-level configuration that was previously hardcoded throughout the application.

## Files

### `site.config.ts`
Central configuration file containing:
- **name**: Site name
- **description**: Site description
- **contact**: Contact information (email, location)
- **social**: Social media links (Instagram, Facebook)
- **links**: Internal app links (privacy policy, terms, FAQ)

## Usage

Import the configuration in any component:

```typescript
import { siteConfig } from '../config'

// Access configuration values
const email = siteConfig.contact.email
const instagram = siteConfig.social.instagram.url
```

## Updating Configuration

To update site information (email, location, social links, etc.), simply edit the values in `site.config.ts`. All components that use these values will automatically reflect the changes.

## Benefits

- **Single Source of Truth**: All configuration in one place
- **Easy to Update**: Change once, updates everywhere
- **Type-Safe**: TypeScript provides autocomplete and type checking
- **Maintainable**: No need to hunt through components for hardcoded values
