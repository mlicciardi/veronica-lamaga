import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '../types/Product'

interface ProductCarouselProps {
  products: Product[]
  onProductClick: (product: Product) => void
}

export default function ProductCarousel({ products, onProductClick }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const totalPages = Math.ceil(products.length / itemsPerPage)
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < totalPages - 1

  const goToPrev = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToNext = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const visibleProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  return (
    <div className="relative">
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={`p-3 rounded-full transition-all ${
              canGoPrev
                ? 'bg-lavender-600 text-white hover:bg-lavender-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Previous products"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-lavender-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`p-3 rounded-full transition-all ${
              canGoNext
                ? 'bg-lavender-600 text-white hover:bg-lavender-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Next products"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  )
}
