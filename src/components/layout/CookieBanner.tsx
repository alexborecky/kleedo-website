'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

// Extend Window interface for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    leadinfo?: (...args: any[]) => void
  }
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    
    // Enable analytics and ads
    if (typeof window !== 'undefined') {
      // Enable Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted'
        })
      }
      
      // Enable Leadinfo
      if (window.leadinfo && typeof window.leadinfo === 'function') {
        try {
          window.leadinfo('consent', 'granted')
        } catch (e) {
          console.log('Leadinfo consent setting failed:', e)
        }
      }
    }
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
    
    // Explicitly deny analytics and ads
    if (typeof window !== 'undefined') {
      // Deny Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        })
      }
      
      // Deny Leadinfo
      if (window.leadinfo && typeof window.leadinfo === 'function') {
        try {
          window.leadinfo('consent', 'denied')
        } catch (e) {
          console.log('Leadinfo consent setting failed:', e)
        }
      }
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-800 border-t border-dark-700 p-4 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-300">
            Tento web používá cookies k analýze návštěvnosti a zlepšení uživatelského zážitku. 
            <a href="/ochrana-osobnich-udaju" className="text-primary-400 hover:underline ml-1">
              Více informací
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Odmítnout
          </button>
          <button
            onClick={acceptCookies}
            className="btn-primary text-sm"
          >
            Přijmout
          </button>
        </div>
      </div>
    </div>
  )
}
