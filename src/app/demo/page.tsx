import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { LeadCaptureSection } from '@/components/sections/LeadCaptureSection'
import { CheckCircle, Star, ArrowRight, Play, Phone } from 'lucide-react'

export default function DemoPage() {
  return (
    <main className="min-h-screen demo">
      <Header />

       {/* Hero Section */}
       

      <LeadCaptureSection 
        title="Vyzkoušet zdarma"
        subtitle="14denní zkušební verze bez závazků."
      />
      
      {/* Hero Section */}
      {/* <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Vyzkoušejte Kleedo{' '}
                <span className="text-primary-500">zdarma</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                14denní zkušební verze bez závazků. Zjistěte, jak AI recepční 
                může pomoci vašemu podniku růst.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
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
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Plná funkcionalita
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
                <span className="text-gray-400">500+ firem už používá Kleedo</span>
              </div>
            </div>

            <div className="lg:order-first">
              <LeadCaptureForm
                title="Začněte zdarma ještě dnes"
                subtitle="Vyplňte formulář a my vás budeme kontaktovat do 24 hodin s přístupem k zkušební verzi."
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Demo Video Section */}
      {/* <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Podívejte se, jak Kleedo funguje
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Krátké video ukazuje, jak AI recepční zvládne hovor, rezervaci termínu 
              a komunikaci s klientem.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-dark-700 rounded-lg overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-600 transition-colors cursor-pointer">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <p className="text-white font-medium">Spustit demo video</p>
                  <p className="text-gray-400 text-sm">2:30 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Co získáte v zkušební verzi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Plná funkcionalita</h3>
              <p className="text-gray-400 text-sm">
                Přístup ke všem funkcím Kleedo bez omezení po dobu 14 dní.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Nastavení na míru</h3>
              <p className="text-gray-400 text-sm">
                Pomůžeme vám nastavit Kleedo podle potřeb vašeho podniku.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 podpora</h3>
              <p className="text-gray-400 text-sm">
                Náš tým je vám k dispozici kdykoli během zkušební verze.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Co říkají naši zákazníci
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-4">
                "Kleedo nám ušetřilo spoustu času. Klienti si chválí rychlé odpovědi a my máme více času na práci."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">MN</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Marie Nováková</p>
                  <p className="text-primary-500 text-sm">Salon Krása</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-4">
                "Nejlepší investice do našeho autoservisu. AI zvládne rezervace a informace o opravách."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">TD</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Tomáš Dvořák</p>
                  <p className="text-primary-500 text-sm">AutoServis Plus</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-4">
                "Od té doby, co používáme Kleedo, máme o 40% více rezervací. Perfektní řešení!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">PS</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Dr. Petr Svoboda</p>
                  <p className="text-primary-500 text-sm">Zubní ordinace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      {/* <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Připraveni začít?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Vyplňte formulář a my vás budeme kontaktovat do 24 hodin s přístupem k zkušební verzi.
          </p>
          
          <div className="max-w-md mx-auto">
            <LeadCaptureForm
              title="Začněte zdarma ještě dnes"
              subtitle="14denní zkušební verze bez závazků."
            />
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}
