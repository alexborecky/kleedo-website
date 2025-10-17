'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const LocaleContext = createContext<{
  locale: string
  setLocale: (locale: string) => void
}>({
  locale: 'cs',
  setLocale: () => {}
})

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState('cs')

  useEffect(() => {
    // Get locale from URL or default to 'cs'
    const path = window.location.pathname
    if (path.startsWith('/en')) {
      setLocale('en')
    } else {
      setLocale('cs')
    }
  }, [])

  useEffect(() => {
    // Listen for route changes
    const handleRouteChange = () => {
      const path = window.location.pathname
      if (path.startsWith('/en')) {
        setLocale('en')
      } else {
        setLocale('cs')
      }
    }

    // Listen for both popstate and pushstate
    window.addEventListener('popstate', handleRouteChange)
    
    // Override pushState to detect navigation
    const originalPushState = history.pushState
    history.pushState = function(...args) {
      originalPushState.apply(history, args)
      setTimeout(handleRouteChange, 0)
    }
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      history.pushState = originalPushState
    }
  }, [])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
