import { Sparkles } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import ProductCarousel from '../components/ProductCarousel'
import type { Product } from '../types/Product'
import { featuredProducts } from '../data/products'
import { useLanguage } from '../i18n/LanguageContext'

interface HomeProps {
  onProductClick: (product: Product) => void
}

export default function Home({ onProductClick }: HomeProps) {
  const shouldUseCarousel = featuredProducts.length > 3
  const { t } = useLanguage()
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-lavender-100 max-w-2xl mx-auto">
            {t('home.hero.description')}
          </p>
          <button className="bg-white text-lavender-600 px-8 py-3 rounded-lg font-bold hover:bg-lavender-50 transition-colors text-lg">
            {t('home.hero.cta')}
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-lavender-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">{t('home.featured.title')}</h2>
          </div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('home.featured.description')}
          </p>
          
          {shouldUseCarousel ? (
            <ProductCarousel products={featuredProducts} onProductClick={onProductClick} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product} 
                  onClick={() => onProductClick(product)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-lavender-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('home.features.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t('home.features.items').map((feature: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon || ['🌱', '🔬', '❤️'][index]}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
