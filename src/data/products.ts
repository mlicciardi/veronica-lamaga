import type { Product } from '../types/Product'
import { ProductCategory } from '../types/Product'

export const products: Product[] = [
  {
    id: '1',
    slug: 'pure-lavender-oil',
    images: ['🌿', '💧', '🌱'],
    name: 'Pure Lavender Oil',
    description: 'Organic, cold-pressed lavender essential oil',
    category: ProductCategory.ESSENTIAL_OIL,
    featured: true
  },
  {
    id: '2',
    slug: 'lavender-bath-soak',
    images: ['✨', '🛀', '💜'],
    name: 'Lavender Bath Soak',
    description: 'Relaxing bath salts with dried lavender flowers',
    category: ProductCategory.BATH_BODY,
    featured: true
  },
  {
    id: '3',
    slug: 'lavender-face-cream',
    images: ['💜', '✨', '🌸'],
    name: 'Lavender Face Cream',
    description: 'Moisturizing beauty cream with lavender extract',
    category: ProductCategory.BEAUTY,
    featured: true
  },
  {
    id: '4',
    slug: 'lavender-soap-bar',
    images: ['🛁', '🧼', '🌿'],
    name: 'Lavender Soap Bar',
    description: 'Handmade organic soap with lavender buds',
    category: ProductCategory.BATH_BODY,
    featured: true
  },
  {
    id: '5',
    slug: 'lavender-body-oil',
    images: ['💆', '✨', '🌸'],
    name: 'Lavender Body Oil',
    description: 'Luxurious massage oil with lavender and jojoba',
    category: ProductCategory.BEAUTY
  },
  {
    id: '6',
    slug: 'lavender-tea-blend',
    images: ['🫖', '🌿', '☕'],
    name: 'Lavender Tea Blend',
    description: 'Organic dried lavender for calming herbal tea',
    category: ProductCategory.TEA_WELLNESS
  },
  {
    id: '7',
    slug: 'dried-lavender-buds',
    images: ['🌸', '💐', '🌿'],
    name: 'Dried Lavender Buds',
    description: 'Premium dried lavender for crafts and decoration',
    category: ProductCategory.DRIED_FLOWERS
  },
  {
    id: '8',
    slug: 'lavender-hand-lotion',
    images: ['🧴', '💜', '✨'],
    name: 'Lavender Hand Lotion',
    description: 'Soft, nourishing hand cream with lavender',
    category: ProductCategory.BEAUTY
  },
  {
    id: '9',
    slug: 'lavender-room-spray',
    images: ['🪴', '✨', '🌿'],
    name: 'Lavender Room Spray',
    description: 'Natural room freshener with pure lavender essence',
    category: ProductCategory.HOME
  },
]

export const featuredProducts: Product[] = (() => {
  const featured = products.filter(p => p.featured)
  
  // If we have at least 3 featured products, return them all
  if (featured.length >= 3) {
    return featured
  }
  
  // Otherwise, pick random products to fill up to 3
  const shuffled = [...products].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 3)
})()

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug)
}

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id)
}

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(p => p.category === category)
}
