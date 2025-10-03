import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { 
  Building, Clock, Users, TrendingUp, CheckCircle, Star, Shield, 
  Calendar, Phone, MessageSquare, Settings, Globe, FileText, 
  Scissors, Stethoscope, AlertTriangle, XCircle, Zap, 
  DollarSign, UserX, PhoneOff, AlertCircle
} from 'lucide-react'

// Icon mapping
const iconMap = {
  Building,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Shield,
  Calendar,
  Phone,
  MessageSquare,
  Settings,
  Globe,
  FileText,
  Scissors,
  Stethoscope,
  AlertTriangle,
  XCircle,
  Zap,
  DollarSign,
  UserX,
  PhoneOff,
  AlertCircle
}

interface VerticalPageTemplateProps {
  content: {
    hero: {
      badge: string
      badgeIcon: string
      headline: string
      headlineHighlight: string
      subline: string
    }
    painPoint: {
      headline: string
      headlineHighlight: string
      description: string
      points: string[]
      emoji: string
      emojiLabel: string
    }
    solution: {
      emoji: string
      emojiLabel: string
      headline: string
      headlineHighlight: string
      description: string
      points: string[]
    }
    benefits: {
      headline: string
      cards: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    testimonials: {
      headline: string
      cards: Array<{
        quote: string
        author: string
      }>
    }
    faq: {
      headline: string
      items: Array<{
        question: string
        answer: string
      }>
    }
    cta: {
      headline: string
      description: string
      button: string
    }
  }
}

export default function VerticalPageTemplate({ content }: VerticalPageTemplateProps) {
  const BadgeIcon = iconMap[content.hero.badgeIcon as keyof typeof iconMap] || Building

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-6 hero overflow-hidden vertical-hero-section">
        {/* Centered Hero Content */}
        <div className="hero-container">
          <div className="hero-content">
            <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
              {/* <BadgeIcon className="h-4 w-4 mr-2" /> */}
              {content.hero.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {content.hero.headline.split(content.hero.headlineHighlight).map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-primary-500">{content.hero.headlineHighlight}</span>
                  )}
                </span>
              ))}
            </h1>
            
            <p className="text-small">
              {content.hero.subline}
            </p>

            <div className="vertical-hero-section-buttons flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/demo" className="btn btn-primary inline-flex items-center justify-center group button circular circular-primary">
                <span>Chci Kleedo na svém telefonu</span>
                <span className="btn-fill"></span>
              </a>
              {/* <a href="/test" className="btn btn-secondary inline-flex items-center justify-center group button circular circular-secondary">
                <span>Chci se přidat do pilotu</span>
                <span className="btn-fill"></span>
              </a> */}
            </div>
          </div>
          
          {/* Hero illustration centered below */}
          {/* <img
            src="/images/hero-illustration.png"
            alt="Kleedo AI Assistant"
            className='hero-illustration'
          /> */}
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

      {/* Pain Point Section */}
      <section className="py-24 page-section problem-section pain-point-section">
        <div className="container">
          {/* <div className="absolute inset-0 w-full h-full -z-50">
            <InteractiveBlob 
              className="absolute"
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
              gradientStart="#D2D6DD"
              gradientEnd="#BC3C3C"
              gradientDirection="135deg"
              gradientStartOpacity={.24}
              gradientEndOpacity={0.16}
              blurAmount={120}
            />
          </div> */}
          <div className="gap-16 items-center problem-section-content">
            <div className="pain-point-content">
              <h2 className="text-4xl font-bold text-white mb-6">
                {content.painPoint.headline.split(content.painPoint.headlineHighlight).map((part, index, array) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="text-red-400">{content.painPoint.headlineHighlight}</span>
                    )}
                  </span>
                ))}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {content.painPoint.description}
              </p>
              <div className="pain-point-cards">
                {content.painPoint.points.map((point, index) => {
                  // Map pain points to appropriate icons
                  const getPainPointIcon = (pointText: string) => {
                    const text = pointText.toLowerCase()
                    if (text.includes('hovor') || text.includes('telefon') || text.includes('volání')) return 'PhoneOff'
                    if (text.includes('peníze') || text.includes('tržby') || text.includes('příjmy') || text.includes('ztráta')) return 'DollarSign'
                    if (text.includes('klient') || text.includes('zákazník')) return 'UserX'
                    if (text.includes('čas') || text.includes('přerušení') || text.includes('odběh')) return 'Clock'
                    if (text.includes('stres') || text.includes('problém') || text.includes('obtíž')) return 'AlertTriangle'
                    if (text.includes('zmeškan') || text.includes('chybí') || text.includes('chybějící')) return 'XCircle'
                    return 'AlertCircle' // Default icon
                  }
                  
                  const IconComponent = iconMap[getPainPointIcon(point) as keyof typeof iconMap] || AlertCircle
                  
                  return (
                    <div key={index} className="feature-card glass">
                      <div className="stroke"></div>
                      <div className="flex flex-col items-start">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                          <div className="stroke"></div>
                          <IconComponent className="h-4 w-4 text-red-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 leading-relaxed">
                          {point}
                        </h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* <div className="text-center">
              <div className="text-6xl mb-4">{content.painPoint.emoji}</div>
              <p className="text-gray-400">{content.painPoint.emojiLabel}</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      {/* <section className="py-20 bg-dark-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <div className="text-6xl mb-4">{content.solution.emoji}</div>
              <p className="text-gray-400">{content.solution.emojiLabel}</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {content.solution.headline.split(content.solution.headlineHighlight).map((part, index, array) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="text-primary-500">{content.solution.headlineHighlight}</span>
                    )}
                  </span>
                ))}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {content.solution.description}
              </p>
              <div className="space-y-4">
                {content.solution.points.map((point, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-20 page-section features-section">
        <div className="container">
          <div className="sticky-col">
            {/* Blob behind headline - no clipping */}
            <div className="absolute inset-0 w-full h-full -z-50" style={{ overflow: 'visible' }}>
              <InteractiveBlob
                className="absolute"
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
              <h2 className="feature-section-h2 feature-sticky">
                {content.benefits.headline}
              </h2>
            </div>
          </div>

          <div className="feature-cards">
            {content.benefits.cards.map((card, index) => {
              const IconComponent = iconMap[card.icon as keyof typeof iconMap] || Building
              return (
                <div key={index} className="feature-card glass">
                  <div className="stroke"></div>
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                      <IconComponent className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-dark-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {content.testimonials.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.testimonials.cards.map((testimonial, index) => (
              <div key={index} className="feature-card glass">
                <div className="stroke"></div>
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                    <Star className="h-5 w-5 text-primary-500" />
                  </div>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-xs text-gray-500 font-medium">
                    {testimonial.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-24 faq-section">
        <div className="container px-4">
          <div className="faq-wrap">
            <h2 className="faq-title">{content.faq.headline}</h2>

            <div className="faq-panel glass">
              <div className="stroke"></div>
              <div className="faq-list">
                {content.faq.items.map((item, i) => (
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

      {/* Final CTA */}
      <section className="py-20 page-section cta-section cta-section-big">
        <div className="container text-center mask-container">
          <h2 className="text-4xl font-bold text-white mb-6">
            {content.cta.headline}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {content.cta.description}
          </p>
          <a href="/demo" className="btn btn-primary text-lg px-8 py-4 button circular circular-primary">
            <span>{content.cta.button}</span>
            <span className="btn-fill"></span>
          </a>
          <div className="absolute inset-0 w-full h-full -z-50">
            <InteractiveBlob 
              className="absolute top-0 right-0" 
              width={800} 
              height={600}
              fill="#D1EE9E0D"
              baseRadius={180}
              noiseAmplitude={20}
              noiseSpeed={0.11}
              mouseStrength={32}
              mouseRadius={160}
              relax={0.05}
              pointsCount={36}
              gradientStart="#667eea"
              gradientEnd="#764ba2"
              gradientDirection="to bottom right"
              gradientStartOpacity={0.12}
              gradientEndOpacity={0.12}
              blurAmount={200}
            />
            <InteractiveBlob 
              className="absolute bottom-0 left-0" 
              width={650} 
              height={500}
              fill="#D1EE9E0D"
              baseRadius={130}
              noiseAmplitude={16}
              noiseSpeed={0.15}
              mouseStrength={24}
              mouseRadius={120}
              relax={0.07}
              pointsCount={30}
              gradientStart="#F093FB"
              gradientEnd="#F5576C"
              gradientDirection="to top left"
              gradientStartOpacity={0.28}
              gradientEndOpacity={0.28}
              blurAmount={200}
            />
          </div>
        </div> 
      </section>

      <Footer />
    </main>
  )
}
