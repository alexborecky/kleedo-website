'use client';
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { LeadCaptureSection } from '@/components/sections/LeadCaptureSection'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { Check, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { t } from '@/lib/translations'

const pricingPlans = [
  {
    name: "Starter",
    description: "For small businesses and starting entrepreneurs",
    price: "990",
    period: "month",
    popular: false,
    features: [
      "1 line, basic AI receptionist",
      "Instant call response",
      "Google Calendar integration",
      "SMS notifications",
      "GDPR compliant"
    ],
    cta: "I want to try it",
    ctaLink: "/demo?plan=starter"
  },
  {
    name: "Pro",
    description: "For medium and larger businesses",
    price: "1,990",
    period: "month",
    popular: true,
    features: [
      "Everything from Starter",
      "Multiple lines simultaneously",
      "WhatsApp messages & reminders",
      "Gap-free scheduling",
      "Multi-language support (CZ + EN)",
      "Statistics & reports",
      "Custom rules and automation",
    ],
    cta: "I want to be Pro",
    ctaLink: "/demo?plan=pro"
  },
  {
    name: "Business",
    description: "For large businesses and corporations",
    price: "2,990",
    period: "month",
    popular: false,
    features: [
      "Everything from Pro +",
      "Waitlist & dropout management",
      "Advanced integrations (other booking systems)",
      "Priority support",
      "Custom voice and brand settings",
    ],
    cta: "I want Business",
    ctaLink: "/demo?plan=business"
  }
]

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const choice = localStorage.getItem('kleedo_cookie_consent')
      if (!choice) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const updateConsent = (status: 'granted' | 'denied') => {
    try { localStorage.setItem('kleedo_cookie_consent', status) } catch {}
    if (typeof window !== 'undefined') {
      const w: any = window as any
      if (w.gtag) {
        w.gtag('consent', 'update', { ad_storage: status, analytics_storage: status })
      }
      document.dispatchEvent(new CustomEvent('kleedo-consent', { detail: status }))
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[95%] md:w-[720px]">
      <div className="glass shadow-xl rounded-2xl p-5 md:p-6 border border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            We use cookies to measure traffic and advertising (Google, Meta) and Leadinfo service.
            By continuing you agree, or choose the option below. More in our&nbsp;
            <a href="/en/privacy" className="underline">Privacy Policy</a>.
          </p>
          <div className="flex gap-2 shrink-0">
            <button onClick={() => updateConsent('denied')} className="btn btn-secondary button circular circular-secondary px-4 py-2 text-sm">Reject</button>
            <button onClick={() => updateConsent('granted')} className="btn btn-primary button circular circular-primary px-4 py-2 text-sm">Allow all</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CookieBanner />
      
      {/* Hero Section */}
      <section className="relative hero overflow-hidden vertical-hero-section pricing">
        <div className="hero-container">
          <div className="hero-content">
          <h1>
            Peace of mind costs less than a{' '}
            <span className="text-primary-500">lost deal</span>
          </h1>
          
          <p className="text-small mb-8 max-w-3xl mx-auto">
            Choose a plan that fits you. We offer trial access during the pilot — no commitments.
          </p>
          </div>

          {/* Hero Blobs - Full width containers */}
        <div className="absolute inset-0 w-full h-full -z-50">
            <InteractiveBlob 
              className="absolute bottom-0 left-0" 
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
              className="absolute" 
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

      {/* Pricing Plans */}
      <section className="py-20 pricing-plans page-section">
        <div className="max-w-7xl mx-auto pxsm:px-6 container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`feature-card glass relative ${
                  plan.popular 
                    ? 'border-primary-500' 
                    : 'hover:border-primary-500/50'
                } transition-all duration-300`}
              >
                <div className="stroke"></div>
                
                {/* InteractiveBlob for each card */}
                <div className="absolute inset-0 w-full h-full -z-50">
                  <InteractiveBlob 
                    className="absolute"
                    widthPercent={120} 
                    heightPercent={80}
                    leftPercent={-10}
                    topPercent={-10}
                    baseRadius={100}
                    noiseAmplitude={60}
                    noiseSpeed={0.08}
                    mouseStrength={20}
                    mouseRadius={120}
                    relax={0.8}
                    pointsCount={16}
                    gradientStart={plan.popular ? "#D1EE9E" : "#EFC5A8"}
                    gradientEnd={plan.popular ? "#4ECDC4" : "#717377"}
                    gradientDirection="45deg"
                    gradientStartOpacity={0.3}
                    gradientEndOpacity={0.1}
                    blurAmount={60}
                  />
                </div>

                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-primary-500 text-dark-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="feature-card-content relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4 text-small">{plan.description}</p>
                    
                    <div className="mb-6 price-amount">
                      <span>from {plan.price} CZK</span>
                      <span>/ {plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.ctaLink}
                    className={`py-4 px-6 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center button circular button-secondary circular-secondary ${
                      plan.popular
                        ? 'btn btn-primary inline-flex items-center justify-center button circular circular-primary'
                        : 'border border-white text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <span className="btn-fill"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 creed-section">
            <p className=" mb-4 text-center">
              Trial access during pilot — no commitments
            </p>
            <ul className="flex flex-wrap justify-center gap-6 text-small">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-400 mr-2" />
                No commitments
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-400 mr-2" />
                Quick setup (based on configuration)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <LeadCaptureSection />
      <Footer />
    </main>
  )
}
