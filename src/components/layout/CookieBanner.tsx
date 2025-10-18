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
    analytics: true, // Default to true for better tracking
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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[95%] md:w-[720px]">
      <div className="glass shadow-xl rounded-2xl p-5 md:p-6 border border-white/10">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                Tento web používá cookies k analýze návštěvnosti a zlepšení uživatelského zážitku. 
                <a href="/cookies" className="underline">
                  Více informací
                </a>
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={rejectAllCookies}
                className="btn btn-secondary button circular circular-secondary px-4 py-2 text-sm"
              >
                Odmítnout
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="btn btn-secondary button circular circular-secondary px-4 py-2 text-sm flex items-center gap-1"
              >
                <Settings className="h-4 w-4" />
                Nastavení
              </button>
              <button
                onClick={acceptAllCookies}
                className="btn btn-primary button circular circular-primary px-4 py-2 text-sm"
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
                className="btn btn-secondary button circular circular-secondary px-4 py-2 text-sm"
              >
                Odmítnout vše
              </button>
              <button
                onClick={saveCustomPreferences}
                className="btn btn-primary button circular circular-primary px-4 py-2 text-sm"
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
