import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { Leadinfo } from '@/components/analytics/Leadinfo'
import { CookieBanner } from '@/components/layout/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kleedo.vercel.app'),
  title: 'Blog - Kleedo | Tipy a triky pro váš business',
  description: 'Blog o AI recepční a automatizaci pro salony, ordinace a služby. Tipy, triky a novinky o růstu vašeho podniku.',
  keywords: 'AI recepční blog, automatizace, business tipy, salon marketing, ordinace management',
  openGraph: {
    title: 'Blog - Kleedo | Tipy a triky pro váš business',
    description: 'Blog o AI recepční a automatizaci pro salony, ordinace a služby. Tipy, triky a novinky o růstu vašeho podniku.',
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://kleedo.cz/blog',
    siteName: 'Kleedo',
    images: [
      {
        url: '/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Kleedo Blog - Tipy a triky pro váš business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Kleedo | Tipy a triky pro váš business',
    description: 'Blog o AI recepční a automatizaci pro salony, ordinace a služby.',
    images: ['/images/og-blog.jpg'],
  },
  alternates: {
    canonical: 'https://kleedo.cz/blog',
  },
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
