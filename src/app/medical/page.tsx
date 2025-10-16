import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadCaptureSection } from '@/components/sections/LeadCaptureSection'
import { Stethoscope, Clock, Users, TrendingUp, CheckCircle, Star, Shield, Calendar } from 'lucide-react'

export default function MedicalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Stethoscope className="h-4 w-4 mr-2" />
                Pro ordinace a kliniky
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI recepční pro{' '}
                <span className="text-primary-500">zdravotnictví</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Profesionální AI recepční, která zvedne hovory podle vašich pravidel, objedná pacienta 
                a připomene mu termín. Více času na léčbu, méně administrativy.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  GDPR compliant
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Objednávání pacientů
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Připomínky termínů
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Informace o vyšetřeních
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-white font-medium">4.9/5</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">Pilotní provoz s vybranými ordinacemi</span>
              </div>
            </div>

            <div className="lg:order-first flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-dark-800/50 backdrop-blur-lg border border-dark-700 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Získejte AI recepční pro vaši ordinaci</h3>
                  <p className="text-gray-300 mb-6">Připojte se k pilotnímu provozu</p>
                  <a href="#form" className="btn btn-primary inline-flex items-center justify-center w-full">
                    Připojit se k pilotu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Každý zmeškaný hovor je{' '}
              <span className="text-red-400">ztracený pacient</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zatímco vy léčíte, váš pacient volá jinou ordinaci. 
              AI recepční zvedne telefon podle vašich nastavení i během nejrušnějších dnů.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zmeškané objednávky</h3>
              <p className="text-gray-400">
                Každý zmeškaný hovor je potenciální pacient, který jde jinam.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Prázdné termíny</h3>
              <p className="text-gray-400">
                Bez nových objednávek máte prázdné termíny a nižší tržby.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Nespokojení pacienti</h3>
              <p className="text-gray-400">
                Pacienti si stěžují, že se jim nikdo neozve nebo zapomínáte na termíny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Kleedo pro zdravotnictví:{' '}
              <span className="text-primary-500">Profesionální a bezpečné</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Objednávání pacientů</h3>
              <p className="text-gray-400 text-sm">
                Automaticky najde volné termíny a objedná pacienta za vás.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Připomínky termínů</h3>
              <p className="text-gray-400 text-sm">
                Pošle SMS nebo WhatsApp připomínku den před vyšetřením.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Informace o vyšetřeních</h3>
              <p className="text-gray-400 text-sm">
                Zná vaše služby a umí odpovědět na otázky o vyšetřeních.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">GDPR compliant</h3>
              <p className="text-gray-400 text-sm">
                Plně v souladu s GDPR a ochranou osobních údajů.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl text-gray-300 mb-8 leading-relaxed">
              "Kleedo nám ušetřilo spoustu času. Pacienti si chválí rychlé odpovědi 
              a my máme více času na léčbu. Navíc je to plně GDPR compliant."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">PS</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Dr. Petr Svoboda</p>
                <p className="text-primary-500">Zubní ordinace, Brno</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div id="form">
        <LeadCaptureSection 
          title="Připojte se k pilotnímu provozu"
          subtitle="Probíhá pilotní provoz s omezenou kapacitou. Kontaktujeme vás do 24 hodin."
          businessType="medical"
        />
      </div>

      <Footer />
    </main>
  )
}
