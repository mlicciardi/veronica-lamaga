export enum ProductCategory {
  ESSENTIAL_OIL = 'Essential Oil',
  BATH_BODY = 'Bath & Body',
  BEAUTY = 'Beauty',
  TEA_WELLNESS = 'Tea & Wellness',
  DRIED_FLOWERS = 'Dried Flowers',
  HOME = 'Home'
}

export interface Product {
  id: string
  slug: string
  images: string[]
  name: string
  description: string
  category: ProductCategory
  featured?: boolean
}

export interface ProductDetailed extends Product {
  longDescription?: string
  benefits?: string[]
  usage?: string
  ingredients?: string
  volume?: string
}
