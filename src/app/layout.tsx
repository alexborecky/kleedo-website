import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { FacebookPixel } from '@/components/analytics/FacebookPixel'
import { Leadinfo } from '@/components/analytics/Leadinfo'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { LocaleProvider } from '@/components/LocaleProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kleedo.vercel.app'),
  title: 'Kleedo - AI Recepční, která nezmešká klienta',
  description: 'AI recepční, která vždy zvedne telefon a nikdy nemá špatnou náladu. Ideální pro salony, ordinace a služby.',
  keywords: 'AI recepční, virtuální asistent, automatický telefon, salon, ordinace, zubař, kadeřnictví, fyzioterapeut',
  authors: [{ name: 'Kleedo' }],
  creator: 'Kleedo',
  publisher: 'Kleedo',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Kleedo - AI Recepční pro váš business',
    description: 'Nikdy nezmeškejte klienta. AI recepční dostupná 24/7.',
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://kleedo.cz',
    siteName: 'Kleedo',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kleedo - AI Recepční pro váš business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kleedo - AI Recepční pro váš business',
    description: 'Nikdy nezmeškejte klienta. AI recepční dostupná 24/7.',
    images: ['/images/og-image.jpg'],
    creator: '@kleedo_cz',
  },
  alternates: {
    canonical: 'https://kleedo.cz',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kleedo",
    "description": "AI recepční, která vždy zvedne telefon a nikdy nemá špatnou náladu. Ideální pro salony, ordinace a služby.",
    "url": "https://kleedo.cz",
    "logo": "https://kleedo.cz/images/kleedo-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420-702-031-717",
      "contactType": "customer service",
      "availableLanguage": ["Czech", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/kleedo",
      "https://www.linkedin.com/company/kleedo/"
    ],
    "offers": {
      "@type": "Offer",
      "name": "AI Recepční služba",
      "description": "AI recepční dostupná 24/7 pro váš business",
      "price": "990",
      "priceCurrency": "CZK",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "990",
        "priceCurrency": "CZK",
        "billingIncrement": "1"
      }
    }
  }

  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D1EE9E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Kleedo" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <FacebookPixel />
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
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}