# Product Data Model

## Types

### `ProductCategory`
Enum defining all available product categories.

**Values:**
- `ESSENTIAL_OIL` - 'Essential Oil'
- `BATH_BODY` - 'Bath & Body'
- `BEAUTY` - 'Beauty'
- `TEA_WELLNESS` - 'Tea & Wellness'
- `DRIED_FLOWERS` - 'Dried Flowers'
- `HOME` - 'Home'

**Usage:**
```typescript
import { ProductCategory } from './types/Product'

const category = ProductCategory.ESSENTIAL_OIL
```

### `Product`
The base product type used throughout the application.

**Properties:**
- `id: string` - Unique product identifier
- `slug: string` - URL-friendly product identifier
- `images: string[]` - Array of product images (emojis or image URLs)
- `name: string` - Product name
- `description: string` - Short product description
- `category: ProductCategory` - Product category
- `featured?: boolean` - Optional flag to mark product as featured on homepage

**Usage:**
```typescript
import type { Product } from './types/Product'
import { ProductCategory } from './types/Product'

const product: Product = {
  id: '1',
  slug: 'pure-lavender-oil',
  images: ['🌿', '💧', '🌱'],
  name: 'Pure Lavender Oil',
  description: 'Organic, cold-pressed lavender essential oil',
  category: ProductCategory.ESSENTIAL_OIL,
  featured: true
}
```

**Image Gallery:**
- Products support multiple images for showcasing different angles or uses
- The first image (`images[0]`) is used as the primary/thumbnail image
- Product detail pages display an image gallery with thumbnails

**Featured Products:**
- Mark products as featured by setting `featured: true`
- Featured products appear in the homepage carousel
- If fewer than 3 products are marked as featured, the system automatically selects random products to fill the quota
- When more than 3 products are featured, a carousel with navigation is displayed
- When 3 or fewer products are featured, they are displayed in a grid

### `ProductDetailed`
Extended product type with additional detailed information for product detail pages.

**Properties:**
Extends `Product` with optional fields:
- `longDescription?: string` - Detailed product description
- `benefits?: string[]` - Array of product benefits
- `usage?: string` - Usage instructions
- `ingredients?: string` - Ingredients list
- `volume?: string` - Product volume/size

**Usage:**
```typescript
import type { ProductDetailed } from './types/Product'
```

## Data

### Product Catalog
All products are centrally managed in `/src/data/products.ts`

**Available exports:**
- `products` - Array of all available products (9 items)
- `featuredProducts` - Array of featured products displayed on home page (3 items)

**Helper Functions:**
- `getProductBySlug(slug: string): Product | undefined` - Find product by URL slug
- `getProductById(id: string): Product | undefined` - Find product by ID
- `getProductsByCategory(category: ProductCategory): Product[]` - Filter products by category

**Usage:**
```typescript
import { products, featuredProducts, getProductBySlug } from './data/products'
import { ProductCategory } from './types/Product'

// Get all products
const allProducts = products

// Get featured products
const featured = featuredProducts

// Find by slug
const product = getProductBySlug('pure-lavender-oil')

// Find by ID
const product = getProductById('1')

// Filter by category
const beautyProducts = getProductsByCategory(ProductCategory.BEAUTY)
```

## Categories

Product categories include:
- **Essential Oil** - Pure lavender essential oils
- **Bath & Body** - Bath salts, soaps, and body care
- **Beauty** - Face creams, lotions, and beauty products
- **Tea & Wellness** - Herbal teas and wellness products
- **Dried Flowers** - Dried lavender buds and flowers
- **Home** - Room sprays and home fragrance products
