'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { Phone, Calendar, FileText, MessageSquare, Settings, Globe, Users, DollarSign, Clock, Shield, CheckCircle, Star, ArrowRight, AlertTriangle, TrendingDown, Building, Scissors, Stethoscope, RefreshCw } from 'lucide-react'
import { t } from '@/lib/translations'
import Link from 'next/link'
import { useLocale } from '@/components/LocaleProvider'

export default function HomePage() {
  const { locale } = useLocale()
  
  // Force Czech locale for the main page
  const currentLocale = 'cs'

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-6 hero overflow-hidden">
        <div className="hero-container">
          <div className="hero-content">
            <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
              {t(currentLocale, 'home.hero.badge')}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t(currentLocale, 'home.hero.headline')}
              {/* <span className="text-primary-500">{t(currentLocale, 'home.hero.highlight')}</span> */}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t(currentLocale, 'home.hero.subline')}
            </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="demo-cta-buttons">
              <a href="/demo" className="btn btn-primary button circular circular-primary">
                <span className="flex items-center">
                  {/* <Phone className="h-4 w-4 mr-2" /> */}
                  Přihlásit se do pilotu
                </span>
                <span className="btn-fill"></span>
              </a>
              <a href="tel:+420910927821" className="btn btn-secondary button circular circular-secondary">
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Zavolat Kleedu zdarma
                </span>
                <span className="btn-fill"></span>
              </a>
            </div>
          </div>
          </div>
            <img
              src="/images/hero-illustration.png"
              alt="Kleedo AI Assistant"
              className='hero-illustration'
            />
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

      {/* Features Section 1 */}
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
                {t(currentLocale, 'home.features.title')}
              </h2>
            </div>
          </div>

          <div className="feature-cards">
            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Phone className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t(currentLocale, 'home.features.phone.title')}</h3>
                <p className="text-gray-400 text-sm">
                  {t(currentLocale, 'home.features.phone.description')}
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Clock className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t(currentLocale, 'home.features.scheduling.title')}</h3>
                <p className="text-gray-400 text-sm">
                  {t(currentLocale, 'home.features.scheduling.description')}
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <RefreshCw className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Záchrana termínu</h3>
                <p className="text-gray-400 text-sm">
                  Když někdo zruší, automaticky kontaktuje čekající na waitlistě a zaplní uvolněný termín. Žádné mezery v kalendáři.
                </p>
              </div>
            </div>
            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Calendar className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t(currentLocale, 'home.features.communication.title')}</h3>
                <p className="text-gray-400 text-sm">
                  {t(currentLocale, 'home.features.communication.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 page-section problem-section">
        <div className="container mask-container">
          <div className="absolute inset-0 w-full h-full -z-50">
            <InteractiveBlob 
              className="absolute mobile-blob"
              widthPercent={80} 
              heightPercent={60}
              leftPercent={-20}
              topPercent={0}
              baseRadius={200}
              noiseAmplitude={160}
              noiseSpeed={0.06}
              mouseStrength={10}
              mouseRadius={240}
              relax={1}
              pointsCount={10}
              gradientStart="#D2D6DD"
              gradientEnd="#BC3C3C"
              gradientDirection="80deg"
              gradientStartOpacity={.4}
              gradientEndOpacity={0.4}
              blurAmount={120}
            />
            <InteractiveBlob 
              className="absolute bottom-0 right-0 mobile-blob" 
              widthPercent={100} 
              heightPercent={60}
              rightPercent={-40}
              bottomPercent={-10}
              baseRadius={120}
              noiseAmplitude={26}
              noiseSpeed={0.10}
              mouseStrength={32}
              mouseRadius={110}
              relax={0.08}
              pointsCount={26}
              gradientStart="#EFC5A8"
              gradientEnd="#4ECDC4"
              gradientDirection="135deg"
              gradientStartOpacity={.64}
              gradientEndOpacity={0.2}
              blurAmount={100}
            />
          </div>
          <div className="text-center problem-section-content mb-16">
            <h2 className="">
              {t(currentLocale, 'home.problem.title')}
            </h2>
            
            <p className="text-large">
              {t(currentLocale, 'home.problem.subtitle')}
            </p>
            
            <p className="text-medium">
              {t(currentLocale, 'home.problem.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience & Benefits Section */}
      <section className="page-section features-section py-20">
        <div className="container">
          <div className="sticky-col">
            <div className="mb-16">
              <h2 className="feature-section-h2">
                {t(currentLocale, 'home.benefits.title')}
              </h2>
            </div>
            {/* Blob behind headline - inside sticky column */}
            <div className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              <InteractiveBlob 
                className="absolute mobile-blob"
                widthPercent={140} 
                heightPercent={100}
                leftPercent={-20}
                bottomPercent={0}
                fill="#D1EE9E0D"
                baseRadius={200}
                noiseAmplitude={240}
                noiseSpeed={0.14}
                mouseStrength={30}
                mouseRadius={150}
                relax={0.06}
                pointsCount={34}
                gradientStart="#FF9A9E"
                gradientEnd="#FECFEF"
                gradientDirection="270deg"
                gradientStartOpacity={0.35}
                gradientEndOpacity={0.35}
                blurAmount={80}
              />
            </div>
          </div>

          <div className="grid">
            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <DollarSign className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="">{t(currentLocale, 'home.benefits.cards.0.title')}</h3>
                <p className="text-gray-400 text-sm">
                  {t(currentLocale, 'home.benefits.cards.0.description')}
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Clock className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="">{t(currentLocale, 'home.benefits.cards.1.title')}</h3>
                <p className="text-gray-400">
                  {t(currentLocale, 'home.benefits.cards.1.description')}
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Settings className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="">{t(currentLocale, 'home.benefits.cards.2.title')}</h3>
                <p className="text-gray-400">
                  {t(currentLocale, 'home.benefits.cards.2.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Tiles Section */}
      <section className="py-20 page-section industries-section">
        <div className="container mask-container">
          <div className="text-center mb-16 section-header">
            <h2 className="">
              {t(currentLocale, 'home.industries.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t(currentLocale, 'home.industries.subtitle')}
            </p>
          </div>

          <div className="feature-cards industry-tiles">
            <div className="group dentist">
              <div className="feature-card glass hover:border-primary-500/50 transition-all duration-300">
                <div className="absolute inset-0 w-full h-full -z-50 mobile-blob">
                  <InteractiveBlob 
                    className="absolute mobile-blob"
                    widthPercent={160} 
                    heightPercent={80}
                    leftPercent={-80}
                    topPercent={-20}
                    baseRadius={240}
                    noiseAmplitude={220}
                    noiseSpeed={0.06}
                    mouseStrength={10}
                    mouseRadius={0}
                    relax={1}
                    pointsCount={40}
                    gradientStart="#79CCBA"
                    gradientEnd="#3F7267"
                    gradientDirection="35deg"
                    gradientStartOpacity={.4}
                    gradientEndOpacity={0.24}
                    blurAmount={40}
                  />
                </div>
                <div className="stroke"></div>
                <div className="flex flex-col feature-card-content">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 feature-card-icon">
                    <Stethoscope className="h-8 w-8" stroke="white" fill="none" strokeWidth="2" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t(currentLocale, 'home.industries.dentists.title')}</h3>
                  <p className="text-gray-400 text-sm">
                    {t(currentLocale, 'home.industries.dentists.description')}
                  </p>
                  <a href="/pro-zubare" className="mt-4 btn btn-secondary button circular circular-secondary" tabIndex={-1}>
                    <span>{t(currentLocale, 'home.industries.learn_more')}</span>
                    <span className="btn-fill"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="group salon">
              <div className="feature-card glass hover:border-primary-500/50 transition-all duration-300">
                <div className="absolute inset-0 w-full h-full -z-50 mobile-blob">
                  <InteractiveBlob 
                    className="absolute mobile-blob"
                    widthPercent={200} 
                    heightPercent={100}
                    rightPercent={-100}
                    topPercent={-30}
                    baseRadius={160}
                    noiseAmplitude={120}
                    noiseSpeed={0.06}
                    mouseStrength={10}
                    mouseRadius={0}
                    relax={1}
                    pointsCount={32}
                    gradientStart="#F58BBC"
                    gradientEnd="#9F3960"
                    gradientDirection="35deg"
                    gradientStartOpacity={.24}
                    gradientEndOpacity={0.08}
                    blurAmount={24}
                  />
                </div>
                <div className="stroke"></div>
                <div className="flex flex-col feature-card-content">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 feature-card-icon">
                    <Scissors className="h-8 w-8" stroke="white" fill="none" strokeWidth="2" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t(currentLocale, 'home.industries.salons.title')}</h3>
                  <p className="text-gray-400 text-sm">
                    {t(currentLocale, 'home.industries.salons.description')}
                  </p>
                  <a href="/pro-salony" className="mt-4 btn btn-secondary button circular circular-secondary" tabIndex={-1}>
                    <span>{t(currentLocale, 'home.industries.learn_more')}</span>
                    <span className="btn-fill"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="group smb">
              <div className="feature-card glass">
                <div className="absolute inset-0 w-full h-full -z-50 mobile-blob">
                  <InteractiveBlob 
                    className="absolute"
                    widthPercent={180} 
                    heightPercent={80}
                    rightPercent={-80}
                    bottomPercent={-20}
                    baseRadius={160}
                    noiseAmplitude={120}
                    noiseSpeed={0.06}
                    mouseStrength={10}
                    mouseRadius={0}
                    relax={1}
                    pointsCount={40}
                    gradientStart="#5D88E6"
                    gradientEnd="#39548C"
                    gradientDirection="35deg"
                    gradientStartOpacity={.64}
                    gradientEndOpacity={0.24}
                    blurAmount={40}
                  />
                </div>
                <div className="stroke"></div>
                <div className="flex flex-col feature-card-content">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 feature-card-icon">
                    <Building className="h-8 w-8" stroke="white" fill="none" strokeWidth="2" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t(currentLocale, 'home.industries.businesses.title')}</h3>
                  <p className="text-gray-400 text-sm">
                    {t(currentLocale, 'home.industries.businesses.description')}
                  </p>
                  <a href="/pro-firmy" className="mt-4 btn btn-secondary button circular circular-secondary" tabIndex={-1}>
                    <span>{t(currentLocale, 'home.industries.learn_more')}</span>
                    <span className="btn-fill"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 page-section testimonials-section">
        <div className="container px-4">
          <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
            {t(currentLocale, 'home.testimonials.badge')}
          </div>
          <div className="testimonials-title text-center">
            <h2>
              Zpětná vazba z pilotního provozu
            </h2>
            <p className="text-gray-300 text-lg mt-3">Anonymizované citace od prvních uživatelů — bez jmen, zato upřímně.</p>
          </div>

          <div className="testimonials-grid">
            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">{t(currentLocale, 'home.testimonials.cards.0.quote')}</p>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">{t(currentLocale, 'home.testimonials.cards.1.quote')}</p>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">{t(currentLocale, 'home.testimonials.cards.2.quote')}</p>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">{t(currentLocale, 'home.testimonials.cards.3.quote')}</p>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">{t(currentLocale, 'home.testimonials.cards.4.quote')}</p>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">{t(currentLocale, 'home.testimonials.cards.5.quote')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
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
              {t(currentLocale, 'home.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t(currentLocale, 'home.cta.subtitle')}
            </p>
            <div className="demo-cta-buttons">
              <a href="/demo" className="btn btn-primary button circular circular-primary">
                <span className="flex items-center">
                  {/* <Phone className="h-4 w-4 mr-2" /> */}
                  Přihlásit se do pilotu
                </span>
                <span className="btn-fill"></span>
              </a>
              <a href="tel:+420910927821" className="btn btn-secondary button circular circular-secondary">
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Zavolat Kleedu zdarma
                </span>
                <span className="btn-fill"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 faq-section">
        <div className="container px-4">
          <div className="faq-wrap">
            <h2 className="faq-title">
              {t(currentLocale, 'home.faq.headline')}
              <br />
              {t(currentLocale, 'home.faq.headline2')}
            </h2>

            <div className="faq-panel glass">
              <div className="stroke"></div>
              <div className="faq-list">
                {t(currentLocale, 'home.faq.items').map((item: any, i: number) => (
                  <div className="faq-item" key={i}>
                    <input id={`faq-${i}`} type="checkbox" className="faq-check" />
                    <label htmlFor={`faq-${i}`} className="faq-summary">
                      <span className="faq-question">{item.question}</span>
                      <span className="faq-toggle"><span className="plus">+</span><span className="minus">−</span></span>
                    </label>
                    <div className="faq-content">{item.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 page-section cta-section cta-section-big overflow-hidden">
        <div className="container mask-container text-center">
          <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
            {t(currentLocale, 'home.finalCta.badge')}
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            {t(currentLocale, 'home.finalCta.headline')}
          </h2>
          
          <p className="text-small text-gray-300 mb-8 leading-relaxed">
            {t(currentLocale, 'home.finalCta.description')}
          </p>

          <div className="demo-cta-buttons">
            <a href="/demo" className="btn btn-primary button circular circular-primary">
              <span className="flex items-center">
                {/* <Phone className="h-4 w-4 mr-2" /> */}
                Přihlásit se do pilotu
              </span>
              <span className="btn-fill"></span>
            </a>
            <a href="tel:+420910927821" className="btn btn-secondary button circular circular-secondary">
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Zavolat Kleedu zdarma
              </span>
              <span className="btn-fill"></span>
            </a>
          </div>
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
        </div>
      </section>

      <Footer />
    </main>
  )
}