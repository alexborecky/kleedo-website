'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from '@/components/LocaleProvider'

export function LanguageSwitch() {
  const router = useRouter()
  const { locale, setLocale } = useLocale()

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale)
    // Navigate to the new locale
    if (newLocale === 'en') {
      window.location.href = '/en'
    } else {
      window.location.href = '/'
    }
  }

  return (
    <div className="flex items-center space-x-2">
      {['cs', 'en'].map((lng) => (
        <button
          key={lng}
          onClick={() => switchLanguage(lng)}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
            locale === lng
              ? 'text-primary-500 bg-primary-500/20'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
