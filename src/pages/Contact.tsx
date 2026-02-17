import { Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { siteConfig } from '../config'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Header */}
      <section className="bg-lavender-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('contact.header.title')}</h1>
          <p className="text-gray-700">{t('contact.header.description')}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.getInTouch.title')}</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Mail className="text-lavender-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t('contact.getInTouch.email')}</h3>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-lavender-600 hover:text-lavender-700 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="text-lavender-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t('contact.getInTouch.location')}</h3>
                    <a 
                      href={siteConfig.contact.location.mapsUrl}
                      className="text-lavender-600 hover:text-lavender-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {siteConfig.contact.location.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
