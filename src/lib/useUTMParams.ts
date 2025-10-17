'use client'

import { useState, useEffect } from 'react'

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

export function useUTMParams(): UTMParams {
  const [utmParams, setUtmParams] = useState<UTMParams>({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Capture UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    const utmData: UTMParams = {
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined,
      utm_campaign: urlParams.get('utm_campaign') || undefined,
      utm_term: urlParams.get('utm_term') || undefined,
      utm_content: urlParams.get('utm_content') || undefined,
    }

    // Only set if we have at least one UTM parameter
    const hasUtmParams = Object.values(utmData).some(value => value !== undefined)
    
    if (hasUtmParams) {
      setUtmParams(utmData)
      
      // Store UTM parameters in sessionStorage for persistence across page navigation
      sessionStorage.setItem('kleedo-utm-params', JSON.stringify(utmData))
      
      // Track UTM parameters in analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'utm_capture', {
          utm_source: utmData.utm_source,
          utm_medium: utmData.utm_medium,
          utm_campaign: utmData.utm_campaign,
          utm_term: utmData.utm_term,
          utm_content: utmData.utm_content,
        })
      }
    } else {
      // Try to get UTM parameters from sessionStorage if not in URL
      const storedUtmParams = sessionStorage.getItem('kleedo-utm-params')
      if (storedUtmParams) {
        try {
          const parsed = JSON.parse(storedUtmParams)
          setUtmParams(parsed)
        } catch (e) {
          console.log('Failed to parse stored UTM parameters:', e)
        }
      }
    }
  }, [])

  return utmParams
}

// Utility function to get UTM parameters without hook
export function getUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {}

  // First try URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const urlUtmData: UTMParams = {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
  }

  // If we have URL UTM parameters, return them
  const hasUrlUtmParams = Object.values(urlUtmData).some(value => value !== undefined)
  if (hasUrlUtmParams) {
    return urlUtmData
  }

  // Otherwise, try sessionStorage
  const storedUtmParams = sessionStorage.getItem('kleedo-utm-params')
  if (storedUtmParams) {
    try {
      return JSON.parse(storedUtmParams)
    } catch (e) {
      console.log('Failed to parse stored UTM parameters:', e)
    }
  }

  return {}
}
