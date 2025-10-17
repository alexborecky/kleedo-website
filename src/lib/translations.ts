import csTranslations from '../locales/cs.json'
import enTranslations from '../locales/en.json'

const translations = {
  cs: csTranslations,
  en: enTranslations,
}

export function getTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.cs
}

export function t(locale: string, key: string, fallback?: string) {
  const translation = getTranslations(locale)
  const keys = key.split('.')
  let value: any = translation
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || fallback || key
}
