import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const pricingPlans = [
  {
    name: "Starter",
    description: "Pro malé podniky a začínající podnikatele",
    price: "990",
    period: "měsíc",
    popular: false,
    features: [
      "Základní telefonní linka",
      "Přesměrování hovorů",
      "Integrace do Google kalendáře",
      "SMS upozornění",
      "24/7 podpora",
      "Základní statistiky"
    ],
    cta: "Chci to vyzkoušet",
    ctaLink: "/demo?plan=starter"
  },
  {
    name: "Pro",
    description: "Pro střední a větší podniky",
    price: "2 490",
    period: "měsíc",
    popular: true,
    features: [
      "Vše ze Starteru",
      "Virtuální asistentka",
      "Pokročilá správa hovorů",
      "Prioritní podpora (24/7)",
      "Statistiky a reporty",
      "Vlastní telefonní číslo",
      "Pouze pro firmy s IČO"
    ],
    cta: "Chci být Pro",
    ctaLink: "/demo?plan=pro"
  },
  {
    name: "Business",
    description: "Pro velké podniky a korporace",
    price: "4 990",
    period: "měsíc",
    popular: false,
    features: [
      "Vše z Pro",
      "Zákaznická linka & Account management",
      "Integrace do CRM systémů",
      "Školení a implementace",
      "Dedikovaný tým",
      "Vlastní branding",
      "API přístup"
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
    answer: "Ne, Kleedo funguje přes internetové připojení. Nepotřebujete žádnou SIM kartu ani fyzický telefon. Vše funguje online."
  },
  {
    question: "Kolik to stojí?",
    answer: "Ceny začínají od 990 Kč měsíčně za základní plán. Máme tři úrovně: Starter (990 Kč), Pro (2 490 Kč) a Business (4 990 Kč)."
  },
  {
    question: "Jak je to s ochranou?",
    answer: "Všechna data jsou šifrována, ukládána v EU a plně v souladu s GDPR. Máte plnou kontrolu nad svými daty a můžete je kdykoli smazat."
  },
  {
    question: "Můžu si nastavit, jak Kleedo odpovídá klienty?",
    answer: "Ano, máte plnou kontrolu nad tím, jak Kleedo komunikuje. Můžete nastavit tón komunikace, fráze, které má používat, a dokonce i to, jaké služby má nabízet."
  },
  {
    question: "Co když mám více firem? Stačí mi jedna?",
    answer: "Ano, jeden účet Kleedo může spravovat více firem. Každá firma má své vlastní nastavení, ceník a kalendář."
  },
  {
    question: "Může Kleedo fungovat 24/7?",
    answer: "Ano, Kleedo je dostupné 24 hodin denně, 7 dní v týdnu. Nikdy nebere dovolenou, nemá nemoc a vždy zvedne telefon."
  },
  {
    question: "Dokáže AI rezervovat schůzky?",
    answer: "Ano, AI dokáže automaticky najít volné termíny ve vašem kalendáři a zarezervovat je za vás. Může také poslat připomínku klientovi."
  },
  {
    question: "Můžu si Kleedo vyzkoušet?",
    answer: "Ano, nabízíme 14denní zkušební verzi zdarma. Můžete si vyzkoušet všechny funkce bez závazků."
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero overflow-hidden vertical-hero-section pricing">
        <div className="hero-container">
          <div className="hero-content">
          <h1>
            Klid v hlavě stojí míň, než{' '}
            <span className="text-primary-500">ztracená zakázka</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Vyberte si plán, který sedí vám. Všechny plány obsahují 14denní zkušební verzi zdarma.
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
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`card relative ${
                  plan.popular 
                    ? 'border-primary-500 ring-2 ring-primary-500/20' 
                    : 'hover:border-primary-500/50'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-dark-900 px-4 py-1 rounded-full text-sm font-medium">
                      Nejoblíbenější
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">od {plan.price} Kč</span>
                    <span className="text-gray-400 ml-2">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-center transition-colors duration-200 inline-flex items-center justify-center ${
                    plan.popular
                      ? 'bg-primary-500 hover:bg-primary-600 text-dark-900'
                      : 'border border-white text-white hover:bg-white hover:text-dark-900'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Všechny plány obsahují 14denní zkušební verzi zdarma
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Bez závazků
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Okamžité spuštění
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                24/7 podpora
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Title */}
            <div className="flex items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Často kladené otázky
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Máte další otázky? Neváhejte nás kontaktovat. 
                  Rádi vám pomůžeme najít řešení, které bude vyhovovat vašemu podniku.
                </p>
              </div>
            </div>

            {/* Right side - FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-dark-700 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-700/50 transition-colors cursor-pointer">
                      <span className="text-white font-medium pr-4">{faq.question}</span>
                      <div className="flex-shrink-0">
                        <ArrowRight className="h-5 w-5 text-primary-500 group-open:rotate-90 transition-transform" />
                      </div>
                    </summary>
                    
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Už žádný zmeškaný klient
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            AI recepční s lidským mozkem okamžitě zvedne telefon a postará se o klienta 
            tak, jak byste to udělali vy. Žádné otravné linky, žádné neschopné schránky.
          </p>
          
          <div className="max-w-md mx-auto">
            <LeadCaptureForm
              title="Vyzkoušet zdarma"
              subtitle="14denní zkušební verze bez závazků."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
