import { Leaf, Award, Globe, Users } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  return (
    <div>
      {/* Header */}
      <section className="bg-lavender-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('about.header.title')}</h1>
          <p className="text-gray-700">{t('about.header.description')}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h2>
              {t('about.story.paragraphs').map((para: string, idx: number) => (
                <p key={idx} className="text-gray-700 mb-4 text-lg">
                  {para}
                </p>
              ))}
            </div>
            <div className="bg-lavender-100 p-8 rounded-lg flex items-center justify-center h-80">
              <div className="text-6xl">🌾</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-lavender-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t('about.values.items').map((value: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center shadow-md">
                <div className="text-lavender-600 mb-4 flex justify-center text-4xl">
                  {[<Leaf size={32} />, <Award size={32} />, <Globe size={32} />, <Users size={32} />][index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Organic Cultivation',
                description: 'Our lavender is grown in the Mediterranean climate with natural methods, no synthetic pesticides or fertilizers.'
              },
              {
                step: '02',
                title: 'Careful Harvesting',
                description: 'We handpick lavender at peak bloom to ensure maximum potency and fragrance.'
              },
              {
                step: '03',
                title: 'Natural Processing',
                description: 'Using traditional and modern techniques, we extract oils and create products with minimal processing.'
              },
              {
                step: '04',
                title: 'Quality Testing',
                description: 'Every batch is tested for purity, potency, and safety before reaching our customers.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-lavender-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
