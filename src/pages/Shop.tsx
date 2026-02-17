import ProductCard from '../components/ProductCard'
import type { Product } from '../types/Product'
import { ProductCategory } from '../types/Product'
import { products } from '../data/products'
import { Filter } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

interface ShopProps {
  onProductClick: (product: Product) => void
}

export default function Shop({ onProductClick }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all')
  const { t } = useLanguage()

  const categories: Array<{ id: ProductCategory | 'all'; label: string }> = [
    { id: 'all', label: t('shop.filter.all') },
    { id: ProductCategory.ESSENTIAL_OIL, label: t('shop.filter.essentialOils') },
    { id: ProductCategory.BATH_BODY, label: t('shop.filter.bathBody') },
    { id: ProductCategory.BEAUTY, label: t('shop.filter.beauty') },
    { id: ProductCategory.TEA_WELLNESS, label: t('shop.filter.teaWellness') },
    { id: ProductCategory.DRIED_FLOWERS, label: t('shop.filter.driedFlowers') },
    { id: ProductCategory.HOME, label: t('shop.filter.home') },
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div>
      {/* Header */}
      <section className="bg-lavender-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('shop.header.title')}</h1>
          <p className="text-gray-700">{t('shop.header.description')}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={20} className="text-lavender-600" />
              <h2 className="text-lg font-bold text-gray-900">{t('shop.filter.title')}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-lavender-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                {...product} 
                onClick={() => onProductClick(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">{t('shop.noProducts')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
