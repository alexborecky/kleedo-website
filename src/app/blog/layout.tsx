import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { Leadinfo } from '@/components/analytics/Leadinfo'
import { CookieBanner } from '@/components/layout/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog - Kleedo',
  description: 'Blog o AI recepční a automatizaci pro salony, ordinace a služby.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Leadinfo />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PH4JKMXM"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        <CookieBanner />
        {children}
      </body>
    </html>
  )
}
