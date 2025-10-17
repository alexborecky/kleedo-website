'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ConsentPreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieManager() {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  })
  const [showManager, setShowManager] = useState(false)

  useEffect(() => {
    // Check if user is coming from cookie management link
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('manage') === 'true') {
      setShowManager(true)
    }

    // Load existing preferences
    const consent = localStorage.getItem('kleedo-cookie-consent')
    if (consent) {
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)
      } catch (e) {
        console.log('Failed to parse saved preferences')
      }
    }
  }, [])

  const saveConsent = (consentPreferences: ConsentPreferences) => {
    const timestamp = new Date().toISOString()
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
    
    // Show success message
    alert('Nastavení cookies bylo uloženo.')
    setShowManager(false)
    
    // Remove the manage=true parameter from URL
    const url = new URL(window.location.href)
    url.searchParams.delete('manage')
    window.history.replaceState({}, '', url.toString())
  }

  const togglePreference = (category: keyof ConsentPreferences) => {
    if (category === 'necessary') return // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const acceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    saveConsent(allAccepted)
  }

  const rejectAll = () => {
    const allRejected: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    setPreferences(allRejected)
    saveConsent(allRejected)
  }

  if (!showManager) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-800 rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Nastavení cookies</h2>
          <button
            onClick={() => setShowManager(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          Můžete kdykoliv změnit svá nastavení cookies. Nezbytné cookies jsou vždy aktivní, 
          protože jsou potřebné pro základní funkce webu.
        </p>

        <div className="space-y-4 mb-6">
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
            onClick={rejectAll}
            className="flex-1 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors border border-gray-600 rounded"
          >
            Odmítnout vše
          </button>
          <button
            onClick={() => saveConsent(preferences)}
            className="flex-1 px-4 py-2 text-sm bg-primary-500 hover:bg-primary-600 text-white rounded transition-colors"
          >
            Uložit nastavení
          </button>
          <button
            onClick={acceptAll}
            className="flex-1 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors border border-gray-600 rounded"
          >
            Přijmout vše
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Více informací v{' '}
          <a href="/cookies" className="text-primary-500 hover:underline">
            Zásadách používání cookies
          </a>
        </p>
      </div>
    </div>
  )
}
