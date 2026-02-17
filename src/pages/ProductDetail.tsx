import { ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import type { Product } from '../types/Product'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'

interface ProductDetailProps {
  product: Product
  onBack: () => void
  onProductClick?: (product: Product) => void
}

export default function ProductDetail({ product, onBack, onProductClick }: ProductDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(1)
  
  // Reset selected image and zoom when product changes
  useEffect(() => {
    setSelectedImageIndex(0)
    setZoomLevel(1)
  }, [product.id])
  
  const goToPrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  }
  
  const goToNextImage = () => {
    setSelectedImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))
  }
  
  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2))
  }
  
  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 1))
  }
  
  const resetZoom = () => {
    setZoomLevel(1)
  }
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)
  const detailedInfo = {
    '🌿': {
      longDescription: 'Our Pure Lavender Essential Oil is cold-pressed from the finest organic lavender flowers grown in the Mediterranean region. This premium oil captures the full essence of lavender with its calming, floral aroma. Perfect for aromatherapy, massage, or adding to your diffuser.',
      benefits: [
        'Promotes relaxation and better sleep',
        'Natural stress and anxiety relief',
        'Can be used in aromatherapy diffusers',
        'Pure, undiluted essential oil',
        '100% organic and therapeutic grade'
      ],
      usage: 'Add 3-5 drops to a diffuser, or dilute with carrier oil for topical application. Never apply undiluted essential oil directly to skin.',
      ingredients: '100% Pure Lavandula Angustifolia (Lavender) Oil',
      volume: '10ml'
    },
    '✨': {
      longDescription: 'Indulge in a luxurious bathing experience with our Lavender Bath Soak. These mineral-rich bath salts are infused with dried lavender flowers and pure lavender essential oil to create a spa-like atmosphere in your own home.',
      benefits: [
        'Soothes tired, aching muscles',
        'Softens and nourishes skin',
        'Creates a relaxing aromatherapy experience',
        'Contains natural sea salts and Epsom salts',
        'Infused with organic lavender flowers'
      ],
      usage: 'Add 2-3 tablespoons to warm running bath water. Soak for 20-30 minutes for best results.',
      ingredients: 'Sea Salt, Epsom Salt, Dried Lavender Flowers, Lavender Essential Oil',
      volume: '300g'
    },
    '💜': {
      longDescription: 'Our Lavender Face Cream is a nourishing daily moisturizer enriched with organic lavender extract and natural botanicals. This lightweight formula absorbs quickly, leaving your skin soft, hydrated, and delicately scented.',
      benefits: [
        'Deeply hydrates and nourishes skin',
        'Anti-inflammatory properties soothe irritation',
        'Suitable for all skin types',
        'Non-greasy, fast-absorbing formula',
        'Natural antioxidants protect skin'
      ],
      usage: 'Apply to clean face and neck morning and evening. Gently massage until fully absorbed.',
      ingredients: 'Aqua, Aloe Vera, Lavender Extract, Jojoba Oil, Shea Butter, Vitamin E, Natural Preservatives',
      volume: '50ml'
    },
    '🛁': {
      longDescription: 'Handcrafted with care, our Lavender Soap Bar combines organic lavender buds with nourishing natural oils. This gentle cleanser creates a rich lather while providing a calming aromatherapy experience.',
      benefits: [
        'Gentle cleansing for face and body',
        'Natural lavender provides calming scent',
        'Moisturizing formula with organic oils',
        'Handmade in small batches',
        'Long-lasting bar soap'
      ],
      usage: 'Lather with water and apply to skin. Rinse thoroughly. Store in a dry place between uses.',
      ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lavender Essential Oil, Dried Lavender Buds, Natural Colorants',
      volume: '100g'
    },
    '💆': {
      longDescription: 'Luxurious Lavender Body Oil blends pure lavender essential oil with nourishing jojoba and sweet almond oils. Perfect for massage or as a daily body moisturizer.',
      benefits: [
        'Deep skin hydration',
        'Perfect for massage therapy',
        'Calming aromatherapy benefits',
        'Non-greasy, absorbs well',
        'Promotes skin elasticity'
      ],
      usage: 'Apply to slightly damp skin after bathing. Massage gently until absorbed. Can also be used for massage.',
      ingredients: 'Jojoba Oil, Sweet Almond Oil, Lavender Essential Oil, Vitamin E',
      volume: '100ml'
    },
    '🫖': {
      longDescription: 'Our premium Lavender Tea Blend features organic dried lavender flowers, carefully harvested and processed to preserve their delicate flavor and calming properties.',
      benefits: [
        'Promotes relaxation and calm',
        'Supports better sleep quality',
        'Natural digestive aid',
        'Caffeine-free herbal tea',
        'Rich in antioxidants'
      ],
      usage: 'Steep 1-2 teaspoons in hot water for 5-7 minutes. Enjoy before bedtime or any time you need to relax.',
      ingredients: '100% Organic Dried Lavender Flowers (Lavandula Angustifolia)',
      volume: '50g'
    },
    '🌸': {
      longDescription: 'Premium dried lavender buds, perfect for crafts, sachets, potpourri, or culinary use. Hand-harvested at peak bloom and carefully dried to preserve color and fragrance.',
      benefits: [
        'Natural air freshener',
        'Perfect for DIY projects',
        'Long-lasting fragrance',
        'Culinary grade quality',
        'Beautiful purple color retained'
      ],
      usage: 'Use in sachets, potpourri, crafts, or add to baked goods and desserts. Store in an airtight container.',
      ingredients: '100% Dried Organic Lavender Flowers',
      volume: '75g'
    },
    '🧴': {
      longDescription: 'Our rich Lavender Hand Lotion provides instant hydration with a non-greasy formula that absorbs quickly. Infused with lavender extract and natural moisturizers.',
      benefits: [
        'Intense hand hydration',
        'Fast-absorbing, non-greasy',
        'Soothes dry, cracked skin',
        'Gentle enough for frequent use',
        'Pleasant lavender scent'
      ],
      usage: 'Apply to hands as needed throughout the day. Massage into skin until absorbed.',
      ingredients: 'Aqua, Glycerin, Lavender Extract, Shea Butter, Almond Oil, Vitamin E, Natural Preservatives',
      volume: '75ml'
    },
    '🪴': {
      longDescription: 'Natural Lavender Room Spray brings the fresh scent of lavender fields into your home. Made with pure lavender essential oil and natural ingredients.',
      benefits: [
        'Freshens any room instantly',
        'Natural odor eliminator',
        'Promotes peaceful atmosphere',
        'Non-toxic formula',
        'Long-lasting fragrance'
      ],
      usage: 'Shake well before use. Spray 2-3 times in the air or on linens. Avoid direct contact with furniture.',
      ingredients: 'Purified Water, Lavender Essential Oil, Natural Emulsifier, Preservative',
      volume: '100ml'
    }
  }

  const info = detailedInfo[product.images[0] as keyof typeof detailedInfo] || {
    longDescription: product.description,
    benefits: [],
    usage: '',
    ingredients: '',
    volume: ''
  }

  return (
    <div>
      {/* Back Button */}
      <section className="bg-lavender-100 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-lavender-600 hover:text-lavender-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </button>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image Gallery */}
            <div>
              {/* Main Image with Zoom Controls */}
              <div className="relative mb-4">
                <div className="bg-lavender-100 rounded-lg flex items-center justify-center p-12 h-96 overflow-hidden relative group">
                  <div 
                    className="text-9xl transition-transform duration-200 cursor-zoom-in"
                    style={{ transform: `scale(${zoomLevel})` }}
                  >
                    {product.images[selectedImageIndex]}
                  </div>
                  
                  {/* Image Navigation Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={goToPrevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={24} className="text-lavender-600" />
                      </button>
                      <button
                        onClick={goToNextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next image"
                      >
                        <ChevronRight size={24} className="text-lavender-600" />
                      </button>
                    </>
                  )}
                </div>

                {/* Zoom Controls */}
                <div className="flex gap-2 justify-center mb-4">
                  <button
                    onClick={zoomOut}
                    disabled={zoomLevel === 1}
                    className="bg-lavender-600 hover:bg-lavender-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <ZoomOut size={18} />
                    Zoom Out
                  </button>
                  <span className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={zoomIn}
                    disabled={zoomLevel === 2}
                    className="bg-lavender-600 hover:bg-lavender-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <ZoomIn size={18} />
                    Zoom In
                  </button>
                  {zoomLevel !== 1 && (
                    <button
                      onClick={resetZoom}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>

              {/* Image Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedImageIndex(index)
                        setZoomLevel(1)
                      }}
                      className={`bg-lavender-100 rounded-lg p-4 h-20 w-20 flex-shrink-0 flex items-center justify-center text-3xl transition-all ${
                        selectedImageIndex === index
                          ? 'ring-2 ring-lavender-600 bg-lavender-200'
                          : 'hover:bg-lavender-200'
                      }`}
                    >
                      {img}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm font-semibold text-lavender-600 uppercase tracking-widest mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-700 mb-6">{info.longDescription}</p>

              {info.volume && (
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Volume: </span>
                  <span className="text-sm font-semibold text-gray-900">{info.volume}</span>
                </div>
              )}

              {info.benefits.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Key Benefits</h2>
                  <ul className="space-y-2">
                    {info.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-lavender-600 mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {info.usage && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">How to Use</h2>
                  <p className="text-gray-700">{info.usage}</p>
                </div>
              )}

              {info.ingredients && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Ingredients</h2>
                  <p className="text-gray-700">{info.ingredients}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-lavender-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-bold text-gray-900 mb-2">100% Organic</h3>
              <p className="text-sm text-gray-600">Certified organic ingredients, sustainably sourced</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Tested</h3>
              <p className="text-sm text-gray-600">Rigorously tested for purity and safety</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="font-bold text-gray-900 mb-2">Made with Care</h3>
              <p className="text-sm text-gray-600">Handcrafted in small batches with love</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  {...relatedProduct}
                  onClick={() => onProductClick && onProductClick(relatedProduct)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
