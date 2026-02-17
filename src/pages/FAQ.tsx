import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-lavender-600 transition-colors"
      >
        <span className="text-lg font-bold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          size={24}
          className={`flex-shrink-0 text-lavender-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  )
}

interface FAQProps {
  onNavigate?: (page: string) => void
}

export default function FAQ({ onNavigate }: FAQProps) {
  const { t } = useLanguage()
  const faqs = t('faq.items')

  return (
    <div>
      {/* Header */}
      <section className="bg-lavender-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('faq.header.title')}</h1>
          <p className="text-gray-700">{t('faq.header.description')}</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            {faqs.map((faq: any, index: number) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center bg-lavender-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-700 mb-6">
              We're here to help! Contact us and we'll get back to you as soon as possible.
            </p>
            {onNavigate ? (
              <button
                onClick={() => onNavigate('contact')}
                className="bg-lavender-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-lavender-700 transition-colors"
              >
                Contact Us
              </button>
            ) : (
              <a
                href="#contact"
                className="inline-block bg-lavender-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-lavender-700 transition-colors"
              >
                Contact Us
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
