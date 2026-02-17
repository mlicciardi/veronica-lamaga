import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import FAQ from './pages/FAQ'
import ProductDetail from './pages/ProductDetail'
import type { Product } from './types/Product'
import { LanguageProvider } from './i18n/LanguageContext'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [currentPage])

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setCurrentPage('product-detail')
  }

  const handleBackFromProduct = () => {
    setSelectedProduct(null)
    setCurrentPage('shop')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onProductClick={handleProductClick} />
      case 'shop':
        return <Shop onProductClick={handleProductClick} />
      case 'about':
        return <About />
      case 'privacy':
        return <PrivacyPolicy />
      case 'terms':
        return <TermsOfService />
      case 'faq':
        return <FAQ onNavigate={setCurrentPage} />
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackFromProduct}
            onProductClick={handleProductClick}
          />
        ) : (
          <Home onProductClick={handleProductClick} />
        )
      default:
        return <Home onProductClick={handleProductClick} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
