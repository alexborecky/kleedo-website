import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { Leadinfo } from '@/components/analytics/Leadinfo'
import { CookieBanner } from '@/components/layout/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kleedo - AI Recepční, která nezmešká klienta',
  description: 'AI recepční, která vždy zvedne telefon a nikdy nemá špatnou náladu. Ideální pro salony, ordinace a služby.',
  keywords: 'AI recepční, virtuální asistent, automatický telefon, salon, ordinace',
  openGraph: {
    title: 'Kleedo - AI Recepční pro váš business',
    description: 'Nikdy nezmeškejte klienta. AI recepční dostupná 24/7.',
    type: 'website',
  },
}

export default function RootLayout({
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
