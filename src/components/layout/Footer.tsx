'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { t } from '@/lib/translations'
import { useLocale } from '@/components/LocaleProvider'

export function Footer() {
  const { locale } = useLocale()
  
  // Use locale from context or default to 'cs'
  const currentLocale = locale || 'cs'
  
  return (
    <footer className="border-t w-full">
      <div className="w-full footer-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 footer-container-inner">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="brand"><img src="/images/kleedo-logo.svg" alt="Kleedo" className="h-7 w-auto" /></Link>
            <p className="text-gray-400 mb-4 max-w-md text-small">
              {t(currentLocale, 'footer.description')}
            </p>
            <div className="flex space-x-4">
              {/* <a href="mailto:info@kleedo.app" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t(currentLocale, 'footer.product')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pro-firmy" className="text-gray-400 hover:text-white transition-colors">
                  {t(currentLocale, 'footer.proFirmy')}
                </Link>
              </li>
              <li>
                <Link href="/pro-salony" className="text-gray-400 hover:text-white transition-colors">
                  {t(currentLocale, 'footer.proSalony')}
                </Link>
              </li>
              <li>
                <Link href="/pro-zubare" className="text-gray-400 hover:text-white transition-colors">
                  {t(currentLocale, 'footer.proZubare')}
                </Link>
              </li>
              <li>
                <Link href="/cenik" className="text-gray-400 hover:text-white transition-colors">
                  {t(currentLocale, 'footer.cenik')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t(currentLocale, 'footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/obchodni-podminky" className="text-gray-400 hover:text-white transition-colors">
                  {t(currentLocale, 'footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="/ochrana-osobnich-udaju" className="text-gray-400 hover:text-white transition-colors">
                  {t(currentLocale, 'footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/cookies?manage=true" className="text-gray-400 hover:text-white transition-colors">
                  {t(currentLocale, 'footer.cookieSettings')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t text-center copyright">
          <p className="text-gray-400 text-small">
            {t(currentLocale, 'footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
