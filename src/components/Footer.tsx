import { Heart, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { siteConfig } from '../config'

interface FooterProps {
  onNavigate: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-lavender-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Heart size={20} />
              {t('footer.about.title')}
            </h3>
            <p className="text-lavender-100 text-sm">
              {t('footer.about.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3 text-sm text-lavender-100">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <a 
                  href={siteConfig.contact.location.mapsUrl}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.contact.location.label}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm text-lavender-100">
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors text-left">
                  {t('footer.privacy')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors text-left">
                  {t('footer.terms')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors text-left">
                  {t('footer.faq')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lavender-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-lavender-200 text-sm">
            {t('footer.copyright').replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-4">
            <a 
              href={siteConfig.social.instagram.url} 
              className="text-lavender-200 hover:text-white transition-colors" 
              aria-label={siteConfig.social.instagram.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={siteConfig.social.facebook.url} 
              className="text-lavender-200 hover:text-white transition-colors" 
              aria-label={siteConfig.social.facebook.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
