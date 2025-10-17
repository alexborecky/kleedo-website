'use client';
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { LeadCaptureSection } from '@/components/sections/LeadCaptureSection'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { Check, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const pricingPlans = [
  {
    name: "Starter",
    description: "Pro malé podniky a začínající podnikatele",
    price: "990",
    period: "měsíc",
    popular: false,
    features: [
      "1 linka, základní AI recepční",
      "Okamžitá odpověď na hovory",
      "Integrace do Google kalendáře",
      "SMS upozornění",
      "V souladu s GDPR"
    ],
    cta: "Chci to vyzkoušet",
    ctaLink: "/demo?plan=starter"
  },
  {
    name: "Pro",
    description: "Pro střední a větší podniky",
    price: "1 990",
    period: "měsíc",
    popular: true,
    features: [
      "Vše ze Starteru",
      "Více linek současně",
      "WhatsApp zprávy & připomínky",
      "Plánování bez mezer",
      "Podpora více jazyků (CZ + EN)",
      "Statistiky & reporty",
      "Vlastní pravidla a automatizace",
    ],
    cta: "Chci být Pro",
    ctaLink: "/demo?plan=pro"
  },
  {
    name: "Business",
    description: "Pro velké podniky a korporace",
    price: "2 990",
    period: "měsíc",
    popular: false,
    features: [
      "Vše z Pro +",
      "Čekací listina & dropout management",
      "Pokročilé integrace (další rezervační systémy)",
      "Prioritní podpora",
      "Custom nastavení hlasu a brandu",
    ],
    cta: "Chci Business",
    ctaLink: "/demo?plan=business"
  }
]

const faqs = [
  {
    question: "Může AI odmítnout hovor/zákazníka?",
    answer: "AI může odmítnout hovor pouze podle pravidel, která si nastavíte. Můžete například nastavit, že AI odmítne hovory mimo pracovní dobu nebo od neznámých čísel."
  },
  {
    question: "Potřebuji SIM kartu/fyzický telefon?",
    answer: "Ne, hovory odbavujeme online. Není potřeba SIM karta ani speciální hardware."
  },
  {
    question: "Kolik to stojí?",
    answer: "Orientačně od 990 Kč měsíčně podle plánu a objemu hovorů. Přesný ceník ladíme v pilotu — připravíme nabídku podle velikosti vašeho provozu."
  },
  {
    question: "Jak je to s ochranou?",
    answer: "Ochrana dat je priorita. Data šifrujeme, zpracováváme v EU a dodržujeme GDPR. V nastavení máte kontrolu nad uloženými údaji a můžete požádat o výmaz. Podrobnosti najdete v Zásadách ochrany soukromí."
  },
  {
    question: "Můžu si nastavit, jak Kleedo mluví s mými klienty?",
    answer: "Ano. Nastavíte tón, fráze i to, co smí nabídnout. Kdykoli můžete upravit pravidla nebo nechat hovor přepojit na vás."
  },
  {
    question: "Co když mám více firem? Stačí mi jedna?",
    answer: "Podporujeme více provozů v rámci jednoho účtu. Nastavení s vámi doladíme v pilotu."
  },
  {
    question: "Může Kleedo fungovat 24/7?",
    answer: "Ano, pokud to tak nastavíte. Mimo pracovní dobu může přijímat hovory, sbírat rezervace a posílat potvrzení podle vašich pravidel."
  },
  {
    question: "Dokáže AI rezervovat schůzky?",
    answer: "Ano, AI dokáže automaticky najít volné termíny ve vašem kalendáři a zarezervovat je za vás. Může také poslat připomínku klientovi."
  },
  {
    question: "Můžu si Kleedo vyzkoušet?",
    answer: "Ano, nabízíme zkušební přístup v rámci pilotu. Přihlaste se a domluvíme detaily podle vašeho provozu."
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
            Používáme soubory cookie pro měření návštěvnosti a reklamu (Google, Meta) a službu Leadinfo.
            Pokračováním souhlasíte, nebo si zvolte možnost níže. Více v&nbsp;
            <a href="/gdpr" className="underline">Zásadách ochrany soukromí</a>.
          </p>
          <div className="flex gap-2 shrink-0">
            <button onClick={() => updateConsent('denied')} className="btn btn-secondary button circular circular-secondary px-4 py-2 text-sm">Odmítnout</button>
            <button onClick={() => updateConsent('granted')} className="btn btn-primary button circular circular-primary px-4 py-2 text-sm">Povolit vše</button>
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
            Klid v hlavě stojí míň, než{' '}
            <span className="text-primary-500">ztracená zakázka</span>
          </h1>
          
          <p className="text-small mb-8 max-w-3xl mx-auto">
            Vyberte si plán, který sedí vám. Nabízíme zkušební přístup v rámci pilotu — bez závazků.
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
                      Nejoblíbenější
                    </span>
                  </div>
                )}

                <div className="feature-card-content relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4 text-small">{plan.description}</p>
                    
                    <div className="mb-6 price-amount">
                      <span>od {plan.price} Kč</span>
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
                    {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 creed-section">
            <p className=" mb-4 text-center">
              Zkušební přístup v rámci pilotu — bez závazků
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Bez závazků
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Rychlé spuštění (podle nastavení)
              </div>
              {/* <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                24/7 podpora
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 faq-section">
        <div className="container px-4">
          <div className="faq-wrap">
            <h2 className="faq-title">Často kladené<br/>otázky</h2>

            <div className="faq-panel glass">
              <div className="stroke"></div>
              <div className="faq-list">
                {faqs.map((faq, i) => (
                  <div className="faq-item" key={i}>
                    <input id={`pricing-faq-${i}`} type="checkbox" className="faq-check" />
                    <label htmlFor={`pricing-faq-${i}`} className="faq-summary">
                      <span className="faq-question">{faq.question}</span>
                      <span className="faq-toggle"><span className="plus">+</span><span className="minus">−</span></span>
                    </label>
                    <div className="faq-content">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <LeadCaptureSection 
        title="Vyzkoušet zdarma"
        subtitle="14denní zkušební verze bez závazků."
      />

      <Footer />
    </main>
  )
}
