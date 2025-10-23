'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { t } from '@/lib/translations'
import Link from 'next/link'
import { useLocale } from '@/components/LocaleProvider'

export default function AboutPage() {
  const { locale } = useLocale()
  
  // Force English locale for the about page
  const currentLocale = 'en'

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-6 hero overflow-hidden">
        <div className="hero-container">
          <div className="hero-content">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Our goal is to help entrepreneurs focus on what they're good at – and be sure that the phone is taken care of.
              </h1>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">AB</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">Alexandr Borecký</div>
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
                People who believe that technology should serve people, not the other way around.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <p className="text-gray-300 text-base leading-relaxed">
                  Together with experts from business, development, and design. We test, fine-tune, and explore how AI can help businesses every day.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <p className="text-gray-300 text-base leading-relaxed">
                  The project is currently in its pilot phase – it is gradually growing and attracting partners and new ideas.
                </p>
              </div>
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
              Do you have an idea, or do you want to know more about the team?
            </h2>
            <a href="mailto:info@kleedo.app" className="btn-primary text-lg px-8 py-4 button circular circular-primary" tabIndex={-1}>
              <span>Contact us</span>
              <span className="btn-fill"></span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 page-section cta-section cta-section-big overflow-hidden">
        <div className="container mask-container">
          <div className="absolute inset-0 w-full h-full -z-50">
            <InteractiveBlob 
              className="absolute" 
              widthPercent={100} 
              heightPercent={120}
              leftPercent={-40}
              bottomPercent={-20}
              fill="#D1EE9E0D"
              baseRadius={120}
              noiseAmplitude={120}
              noiseSpeed={0.11}
              mouseStrength={32}
              mouseRadius={60}
              relax={0.05}
              pointsCount={46}
              gradientStart="#C5FFF2"
              gradientEnd="#717377"
              gradientDirection="to bottom right"
              gradientStartOpacity={0.42}
              gradientEndOpacity={0.12}
              blurAmount={60}
            />
            <InteractiveBlob 
              className="absolute" 
              widthPercent={80} 
              heightPercent={80}
              rightPercent={-30}
              topPercent={-20}
              fill="#D1EE9E0D"
              baseRadius={160}
              noiseAmplitude={80}
              noiseSpeed={0.05}
              mouseStrength={24}
              mouseRadius={120}
              relax={0.07}
              pointsCount={36}
              gradientStart="#C5FFF2"
              gradientEnd="#7F8960"
              gradientDirection="to top left"
              gradientStartOpacity={0.6}
              gradientEndOpacity={0.2}
              blurAmount={80}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                No more missed clients.
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                An AI receptionist with a human voice will immediately answer the phone and take care of the client just as you would. No busy lines, no voicemails.
              </p>
            </div>
            
            <div>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
