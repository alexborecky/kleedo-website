'use client'

import { useState, useEffect } from 'react'
import { X, Settings } from 'lucide-react'

// Extend Window interface for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    leadinfo?: (...args: any[]) => void
  }
}

interface ConsentPreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('kleedo-cookie-consent')
    const consentTimestamp = localStorage.getItem('kleedo-consent-timestamp')
    const consentId = localStorage.getItem('kleedo-consent-id')
    
    if (!consent) {
      setShowBanner(true)
      // Generate unique consent ID for audit trail
      if (!consentId) {
        localStorage.setItem('kleedo-consent-id', crypto.randomUUID())
      }
    } else {
      // Load existing preferences
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)
      } catch (e) {
        // If parsing fails, show banner again
        setShowBanner(true)
      }
    }
  }, [])

  const saveConsent = (consentPreferences: ConsentPreferences, timestamp: string) => {
    const consentId = localStorage.getItem('kleedo-consent-id') || crypto.randomUUID()
    
    // Save consent preferences
    localStorage.setItem('kleedo-cookie-consent', JSON.stringify(consentPreferences))
    localStorage.setItem('kleedo-consent-timestamp', timestamp)
    localStorage.setItem('kleedo-consent-id', consentId)
    
    // Update Google Consent Mode v2
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consentPreferences.analytics ? 'granted' : 'denied',
        ad_storage: consentPreferences.marketing ? 'granted' : 'denied',
        ad_user_data: consentPreferences.marketing ? 'granted' : 'denied',
        ad_personalization: consentPreferences.marketing ? 'granted' : 'denied'
      })
    }
    
    // Update Leadinfo
    if (typeof window !== 'undefined' && window.leadinfo && typeof window.leadinfo === 'function') {
      try {
        window.leadinfo('consent', consentPreferences.marketing ? 'granted' : 'denied')
      } catch (e) {
        console.log('Leadinfo consent setting failed:', e)
      }
    }
    
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptAllCookies = () => {
    const timestamp = new Date().toISOString()
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    saveConsent(allAccepted, timestamp)
  }

  const rejectAllCookies = () => {
    const timestamp = new Date().toISOString()
    const allRejected: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    saveConsent(allRejected, timestamp)
  }

  const saveCustomPreferences = () => {
    const timestamp = new Date().toISOString()
    saveConsent(preferences, timestamp)
  }

  const togglePreference = (category: keyof ConsentPreferences) => {
    if (category === 'necessary') return // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-800 border-t border-dark-700 p-4 z-50">
      <div className="max-w-4xl mx-auto">
        {!showSettings ? (
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-300">
                Tento web používá cookies k analýze návštěvnosti a zlepšení uživatelského zážitku. 
                <a href="/cookies" className="text-primary-400 hover:underline ml-1">
                  Více informací
                </a>
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={rejectAllCookies}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Odmítnout
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <Settings className="h-4 w-4" />
                Nastavení
              </button>
              <button
                onClick={acceptAllCookies}
                className="btn-primary text-sm"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Nastavení cookies</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Nezbytné cookies</div>
                  <div className="text-sm text-gray-400">Umožňují základní funkce webu</div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="w-4 h-4"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Analytické cookies</div>
                  <div className="text-sm text-gray-400">Pomáhají měřit návštěvnost</div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => togglePreference('analytics')}
                  className="w-4 h-4"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Marketingové cookies</div>
                  <div className="text-sm text-gray-400">Slouží pro cílení reklam</div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => togglePreference('marketing')}
                  className="w-4 h-4"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={rejectAllCookies}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Odmítnout vše
              </button>
              <button
                onClick={saveCustomPreferences}
                className="btn-primary text-sm"
              >
                Uložit nastavení
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
