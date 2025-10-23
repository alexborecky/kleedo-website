'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { LeadCaptureSection } from '@/components/sections/LeadCaptureSection'
import { t } from '@/lib/translations'
import Link from 'next/link'
import { useLocale } from '@/components/LocaleProvider'

export default function AboutPage() {
  const { locale } = useLocale()
  
  // Force Czech locale for the about page
  const currentLocale = 'cs'

  return (
    <main className="min-h-screen about-page">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-6 hero overflow-hidden">
        <div className="hero-container">
          <div className="hero-content">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Naším cílem je pomáhat podnikatelům soustředit se na to, v čem jsou skvělí – a mít jistotu, že o telefon je postaráno.
              </h1>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg rounded-full">
                  <img src="/images/alex.jpg" alt="Alexandr Borecký" width={64} height={64} />
                  </span>
                </div>
                <div className="text-left">
                  <a href="https://www.linkedin.com/in/alexborecky/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-lg">
                  Alexandr Borecký
                  </a>
                  <div className="text-gray-400 text-sm">Founder</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Blobs */}
          <div className="absolute inset-0 w-full h-full -z-50">
            <InteractiveBlob 
              className="absolute bottom-0 left-0 mobile-blob" 
              widthPercent={120} 
              heightPercent={70}
              leftPercent={-30}
              bottomPercent={-20}
              baseRadius={200}
              noiseAmplitude={120}
              noiseSpeed={0.06}
              mouseStrength={100}
              mouseRadius={240}
              relax={0.08}
              pointsCount={12}
              gradientStart="#D2D6DD"
              gradientEnd="#717377"
              gradientDirection="35deg"
              gradientStartOpacity={.4}
              gradientEndOpacity={0}
              blurAmount={80}
            />
            <InteractiveBlob 
              className="absolute mobile-blob" 
              widthPercent={100} 
              heightPercent={40}
              rightPercent={-40}
              baseRadius={200}
              noiseAmplitude={120}
              noiseSpeed={0.08}
              mouseStrength={4}
              mouseRadius={240}
              relax={0.06}
              pointsCount={12}
              gradientStart="#EFC5A8"
              gradientEnd="#4ECDC4"
              gradientDirection="135deg"
              gradientStartOpacity={.64}
              gradientEndOpacity={0.2}
              blurAmount={80}
            />
          </div>
        </div>
      </section>

      {/* Text Section - Using Features Styling */}
      <section className="py-20 page-section features-section">
        <div className="container">
          <div className="sticky-col">
            {/* Blob behind headline - no clipping */}
            <div className="absolute inset-0 w-full h-full z-0" style={{ overflow: 'visible' }}>
              <InteractiveBlob
                className="absolute mobile-blob"
                widthPercent={180} 
                heightPercent={120}
                leftPercent={-50}
                topPercent={-10}
                baseRadius={180}
                noiseAmplitude={200}
                noiseSpeed={0.04}
                mouseStrength={4}
                mouseRadius={240}
                relax={0.06}
                pointsCount={12}
                gradientStart="#D1EE9E"
                gradientEnd="#4ECDC4"
                gradientDirection="135deg"
                gradientStartOpacity={.48}
                gradientEndOpacity={0.24}
                blurAmount={80}
              />
            </div>
            <div className="mb-16">
              <h2 className="feature-section-h2">
                Lidé, kteří věří, že technologie má sloužit lidem, ne naopak.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto statement-section">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <p className="text-gray-300 text-base leading-relaxed">
                  Společně s odborníky z oborů businessu, vývoje a designu. Testujeme, ladíme a zkoumáme, jak může AI pomáhat podnikům každý den.
                </p>
            </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-300 text-base leading-relaxed">
                  Projekt je zatím v pilotní fázi – postupně roste a přibírá partnery i nové nápady.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Middle CTA Section */}
      <section className="page-section cta-section cta-section-small overflow-hidden">
        <div className="container mask-container">
          <div className="absolute inset-0 w-full h-full -z-50">
            <InteractiveBlob 
              className="absolute"
              widthPercent={60} 
              heightPercent={40}
              rightPercent={-20}
              topPercent={0}
              baseRadius={200}
              noiseAmplitude={160}
              noiseSpeed={0.06}
              mouseStrength={10}
              mouseRadius={240}
              relax={1}
              pointsCount={10}
              gradientStart="#EFC5A8"
              gradientEnd="#7F8960"
              gradientDirection="80deg"
              gradientStartOpacity={1}
              gradientEndOpacity={0.4}
              blurAmount={120}
            />
            <InteractiveBlob 
              className="absolute bottom-0 right-0" 
              widthPercent={100} 
              heightPercent={100}
              leftPercent={-30}
              topPercent={-10}
              baseRadius={80}
              noiseAmplitude={40}
              noiseSpeed={0.14}
              mouseStrength={32}
              mouseRadius={110}
              relax={0.08}
              pointsCount={36}
              gradientStart="#C5FFF2"
              gradientEnd="#717377"
              gradientDirection="30deg"
              gradientStartOpacity={1}
              gradientEndOpacity={.4}
              blurAmount={80}
            />
          </div>
          <div className="cta-section-content text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Máte nápad, nebo chcete vědět více o týmu?
            </h2>
            <a href="mailto:info@kleedo.app" className="btn-primary text-lg px-8 py-4 button circular circular-primary" tabIndex={-1}>
              <span>Ozvěte se nám</span>
              <span className="btn-fill"></span>
            </a>
          </div>
        </div>
      </section>

      {/* <LeadCaptureSection 
        title="Vyzkoušet zdarma"
        subtitle="14denní zkušební verze bez závazků."
      /> */}

      <Footer />
    </main>
  )
}
