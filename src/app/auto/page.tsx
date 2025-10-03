import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { Car, Clock, Users, TrendingUp, CheckCircle, Star, Wrench, Calendar, DollarSign } from 'lucide-react'

export default function AutoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Car className="h-4 w-4 mr-2" />
                Pro autoservisy a služby
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI recepční pro{' '}
                <span className="text-primary-500">autoservisy</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Profesionální AI recepční, která zvedne každý hovor, zarezervuje termín 
                a poskytne odhad ceny. Více času na opravy, méně telefonátů.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Rezervace termínů
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Odhady cen
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Informace o opravách
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Stav opravy
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
                <span className="text-gray-400">100+ autoservisů už používá Kleedo</span>
              </div>
            </div>

            <div className="lg:order-first">
              <LeadCaptureForm
                title="Získejte AI recepční pro váš autoservis"
                subtitle="Vyplňte formulář a my vás budeme kontaktovat do 24 hodin s nabídkou na míru."
                businessType="auto"
              />
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
              <span className="text-red-400">ztracená zakázka</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zatímco vy opravujete, váš zákazník volá jiný autoservis. 
              AI recepční zvedne telefon i během nejrušnějších dnů.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zmeškané zakázky</h3>
              <p className="text-gray-400">
                Každý zmeškaný hovor je potenciální zákazník, který jde jinam.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Prázdné termíny</h3>
              <p className="text-gray-400">
                Bez nových zakázek máte prázdné termíny a nižší tržby.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Nespokojení zákazníci</h3>
              <p className="text-gray-400">
                Zákazníci si stěžují, že se jim nikdo neozve nebo nevíte stav opravy.
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
              Kleedo pro autoservisy:{' '}
              <span className="text-primary-500">Více zakázek, méně starostí</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rezervace termínů</h3>
              <p className="text-gray-400 text-sm">
                Automaticky najde volné termíny a zarezervuje je za vás.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Odhady cen</h3>
              <p className="text-gray-400 text-sm">
                Poskytne základní odhad ceny podle typu opravy.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Informace o opravách</h3>
              <p className="text-gray-400 text-sm">
                Zná vaše služby a umí odpovědět na otázky o opravách.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Car className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Stav opravy</h3>
              <p className="text-gray-400 text-sm">
                Informuje zákazníky o aktuálním stavu jejich vozidla.
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
              "Nejlepší investice do našeho autoservisu. AI zvládne rezervace, 
              odhady cen a informace o opravách. Zákazníci si chválí rychlé odpovědi."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">TD</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Tomáš Dvořák</p>
                <p className="text-primary-500">AutoServis Plus, Ostrava</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Začněte s AI recepční ještě dnes
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Vyplňte formulář a my vás budeme kontaktovat do 24 hodin s nabídkou na míru pro váš autoservis.
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm
              title="Získejte nabídku na míru"
              subtitle="Kontaktujeme vás do 24 hodin."
              businessType="auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
