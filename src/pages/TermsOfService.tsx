import { useLanguage } from '../i18n/LanguageContext'

export default function TermsOfService() {
  const { t } = useLanguage()
  return (
    <div>
      {/* Header */}
      <section className="bg-lavender-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('terms.header.title')}</h1>
          <p className="text-gray-700">{t('terms.header.lastUpdated')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using the Veronica Lamaga website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Use of Website</h2>
            <p className="text-gray-700 mb-4">
              You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website.
            </p>
            <p className="text-gray-700 mb-6">
              Prohibited activities include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Using the website to transmit harmful or malicious code</li>
              <li>Copying, reproducing, or republishing content without permission</li>
              <li>Using automated systems to access the website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Product Information</h2>
            <p className="text-gray-700 mb-6">
              We strive to provide accurate product descriptions and information. However, we do not warrant that product descriptions or other content on our website is accurate, complete, reliable, current, or error-free.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on this website, including text, graphics, logos, images, and software, is the property of Veronica Lamaga and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Veronica Lamaga shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or products.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of changes constitutes acceptance of those changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              For questions about these Terms of Service, please contact us at info@veronica-lamaga.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
