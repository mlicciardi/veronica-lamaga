import type { Product } from '../types/Product'

interface ProductCardProps extends Product {
  onClick?: () => void
}

export default function ProductCard({ images, name, description, category, onClick }: ProductCardProps) {
  return (
    <div 
      className="product-card bg-white flex flex-col h-full cursor-pointer hover:shadow-2xl transition-all"
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-lavender-100 h-48">
        <div className="absolute inset-0 flex items-center justify-center text-lavender-300 font-bold text-lg">
          {images[0]}
        </div>
      </div>
      <div className="flex-grow p-6">
        <p className="text-xs font-semibold text-lavender-600 uppercase tracking-widest mb-2">
          {category}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}
