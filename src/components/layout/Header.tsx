'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { t } from '@/lib/translations'
import { LanguageSwitch } from './LanguageSwitch'
import { useLocale } from '@/components/LocaleProvider'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale } = useLocale()
  
  // Use locale from context or default to 'cs'
  const currentLocale = locale || 'cs'

  return (
    <header className="fixed header top-0 z-50" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <div className="container">
        <nav className="nav">
          {/* Stroke layer */}
          <div className="stroke"></div>
          
          {/* Logo */}
          <Link href={currentLocale === 'en' ? '/en' : '/'} className="brand" tabIndex={-1}>
            <Image
              src="/images/kleedo-logo.svg"
              alt="Kleedo"
              width={80}
              height={20}
              className="h-5 w-auto"
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="links">
            <Link href={currentLocale === 'en' ? '/en/for-dentists' : '/pro-zubare'} className="hover:text-white transition-colors" tabIndex={-1}>
              {t(currentLocale, 'navigation.proZubare')}
            </Link>
            <Link href={currentLocale === 'en' ? '/en/for-salons' : '/pro-salony'} className="hover:text-white transition-colors" tabIndex={-1}>
              {t(currentLocale, 'navigation.proSalony')}
            </Link>
            <Link href={currentLocale === 'en' ? '/en/for-businesses' : '/pro-firmy'} className="hover:text-white transition-colors" tabIndex={-1}>
              {t(currentLocale, 'navigation.proFirmy')}
            </Link>
            <Link href={currentLocale === 'en' ? '/en/pricing' : '/cenik'} className="hover:text-white transition-colors" tabIndex={-1}>
              {t(currentLocale, 'navigation.cenik')}
            </Link>
            <Link href={currentLocale === 'en' ? '/en/blog' : '/blog'} className="hover:text-white transition-colors" tabIndex={-1}>
              {t(currentLocale, 'navigation.blog')}
            </Link>
            <Link href={currentLocale === 'en' ? '/en/about' : '/o-nas'} className="hover:text-white transition-colors" tabIndex={-1}>
              {t(currentLocale, 'navigation.oNas')}
            </Link>
          </div>

          <div className="right-side-actions">
            {/* Language Switcher - Desktop Only */}
            <div className="hidden language-switch">
              <LanguageSwitch />
            </div>
            {/* CTA Button - Desktop */}
            <Link href="/demo" className="cta button btn btn-primary circular circular-primary desktop-nav-cta" tabIndex={-1}>
              <span>{t(currentLocale, 'navigation.vyzkousetZdarma')}</span>
              <span className="btn-fill"></span>
            </Link>
          </div>

          <div className="mobile-cta-container">
            {/* Mobile CTA Button */}
            <Link href="/demo" className="mobile-cta button btn btn-primary circular circular-primary" tabIndex={-1}>
              <span>{t(currentLocale, 'navigation.demo')}</span>
              <span className="btn-fill"></span>
            </Link>

            {/* Hamburger Menu Button */}
            <button 
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              tabIndex={-1}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>


        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            <div className="background-layer"></div>
            <div className="mobile-menu glass">
              <div className="stroke"></div>
              <div className="mobile-menu-content">
                <Link 
                  href={currentLocale === 'en' ? '/en/for-dentists' : '/pro-zubare'} 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  {t(currentLocale, 'navigation.proZubare')}
                </Link>
                <Link 
                  href={currentLocale === 'en' ? '/en/for-salons' : '/pro-salony'} 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  {t(currentLocale, 'navigation.proSalony')}
                </Link>
                <Link 
                  href={currentLocale === 'en' ? '/en/for-businesses' : '/pro-firmy'} 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  {t(currentLocale, 'navigation.proFirmy')}
                </Link>
                <Link 
                  href={currentLocale === 'en' ? '/en/pricing' : '/cenik'} 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  {t(currentLocale, 'navigation.cenik')}
                </Link>
                <Link 
                  href={currentLocale === 'en' ? '/en/blog' : '/blog'} 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  {t(currentLocale, 'navigation.blog')}
                </Link>
                <Link 
                  href={currentLocale === 'en' ? '/en/about' : '/o-nas'} 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  {t(currentLocale, 'navigation.oNas')}
                </Link>
                <div className="mobile-menu-link">
                  <LanguageSwitch />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
