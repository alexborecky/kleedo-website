import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { Phone, Calendar, MessageSquare, Settings, Globe, Users, Clock, Shield, CheckCircle, Star, ArrowRight, TrendingUp, FileText, Zap } from 'lucide-react'

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-6 hero overflow-hidden vertical-hero-section">
        {/* Centered Hero Content */}
        <div className="hero-container">
          <div className="hero-content">
            <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
              <Zap className="h-4 w-4 mr-2" />
              Produktový přehled
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI, která konečně zvedne ten{' '}
              <span className="text-primary-500">zatracenej telefon</span>
            </h1>
            
            <p className="text-small">
              Žádná hudba na čekání. Žádné „zmáčkněte 1 pro rezervaci, 2 pro info". 
              Jen plynulý rozhovor, který vám vydělává.
            </p>

            <div className="vertical-hero-section-buttons flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="btn btn-primary inline-flex items-center justify-center group">
                Chci vidět, jak funguje
              </button>
              <button className="btn btn-secondary inline-flex items-center justify-center">
                Chci se přidat do pilotu
              </button>
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

      {/* Core Features Section */}
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
                Co Kleedo umí
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
                <h3 className="text-lg font-semibold text-white mb-2">Každý hovor přijme do pár vteřin</h3>
                <p className="text-gray-400 text-sm">
                  AI recepční zvedne telefon okamžitě, i když jste zrovna v jednání nebo u klienta.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Calendar className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Chytré rezervace</h3>
                <p className="text-gray-400 text-sm">
                  Automaticky najde volné termíny ve vašem kalendáři a zarezervuje je za vás.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <MessageSquare className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">WhatsApp a SMS komunikace</h3>
                <p className="text-gray-400 text-sm">
                  Komunikuje s klienty přes všechny kanály. Pošle připomínku termínu nebo odpoví na dotazy.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Settings className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Flexibilní pravidla</h3>
                <p className="text-gray-400 text-sm">
                  Nastavte si, jak má AI komunikovat s vašimi klienty. Zná vaše služby a způsob práce.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Globe className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Podpora více jazyků</h3>
                <p className="text-gray-400 text-sm">
                  Mluví česky, slovensky a dalšími jazyky podle potřeby.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Users className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Více linek najednou</h3>
                <p className="text-gray-400 text-sm">
                  Zvládne více hovorů současně bez čekání. Každý klient se dočká okamžité odpovědi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-dark-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Funkce, které si zamilujete
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pokročilé funkce, které z Kleeda dělají více než jen recepční.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Calendar className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Plánování bez mezer</h3>
                <p className="text-gray-400 text-sm">
                  Automaticky najde volné termíny a zarezervuje je. Zná vaše pracovní doby a typy služeb.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Users className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Čekací listina</h3>
                <p className="text-gray-400 text-sm">
                  Když není volný termín, přidá klienta na čekací listinu a ozve se mu, jakmile se uvolní místo.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <MessageSquare className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Follow-up zprávy</h3>
                <p className="text-gray-400 text-sm">
                  Pošle připomínku den před termínem, potvrdí schůzku nebo se zeptá na spokojenost.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <TrendingUp className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Statistiky a reporty</h3>
                <p className="text-gray-400 text-sm">
                  Přehled hovorů, rezervací a spokojenosti klientů. Víte přesně, jak vaše firma funguje.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Settings className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Integrace</h3>
                <p className="text-gray-400 text-sm">
                  Propojí se s vaším kalendářem, CRM systémem nebo účetním softwarem. Všechno na jednom místě.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Shield className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Bezpečnost a ochrana údajů</h3>
                <p className="text-gray-400 text-sm">
                  Plně v souladu s GDPR a ochranou osobních údajů. Všechna data jsou šifrována a bezpečně uložena.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-dark-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Jak to funguje
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tři jednoduché kroky k AI recepční, která vám ušetří čas a vydělá peníze.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Připojte kalendář</h3>
              <p className="text-gray-400">
                Propojte svůj Google Kalendář, Outlook nebo jiný kalendář. 
                AI se naučí vaše pracovní doby a typy služeb.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Nastavte pravidla</h3>
              <p className="text-gray-400">
                Řekněte AI, jak má komunikovat s klienty. Jaké služby nabízet, 
                jaké ceny říkat a jaké informace shromažďovat.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Začněte vydělávat</h3>
              <p className="text-gray-400">
                AI recepční začne okamžitě zvedat hovory a domlouvat termíny. 
                Vy se můžete soustředit na práci s klienty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links Section */}
      <section className="py-20 bg-dark-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Jak to řešíme v různých oborech
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Každý obor má své specifické potřeby. Podívejte se, jak Kleedo funguje 
              ve vašem odvětví.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/pro-salony" className="group">
              <div className="feature-card glass hover:border-primary-500/50 transition-all duration-300">
                <div className="stroke"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 feature-card-icon">
                    <span className="text-2xl">💇‍♀️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Jak to řešíme v salonech</h3>
                    <p className="text-gray-400 text-sm">
                      Žádné odbíhání od střihu. AI recepční zvedne telefon, domluví termín a pošle potvrzení.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href="/pro-zubare" className="group">
              <div className="feature-card glass hover:border-primary-500/50 transition-all duration-300">
                <div className="stroke"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 feature-card-icon">
                    <span className="text-2xl">🦷</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Jak to řešíme u zubařů</h3>
                    <p className="text-gray-400 text-sm">
                      Pacienti už nikdy neuslyší obsazeno. AI recepční zvládne více hovorů současně.
                    </p>
                  </div>
                </div>
              </div>
            </a>
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
                {[
                  {
                    question: "Může AI udělat chybu při rezervaci?",
                    answer: "AI je navrženo tak, aby se chovalo jako profesionální recepční. Má přístup k vašemu kalendáři a dokáže se učit z každé konverzace. Navíc je vždy zdvořilé a nikdy nezapomene na žádný detail."
                  },
                  {
                    question: "Kolik to stojí?",
                    answer: "Ceny začínají od 990 Kč měsíčně za základní plán. Máme tři úrovně: Starter (990 Kč), Pro (1 990 Kč) a Business (2 990 Kč). Každý plán obsahuje jiné funkce podle velikosti vaší firmy."
                  },
                  {
                    question: "Jak je to s ochranou dat?",
                    answer: "Ochrana dat je pro nás prioritou. Všechna data jsou šifrována, ukládána v EU a plně v souladu s GDPR. Máte plnou kontrolu nad svými daty a můžete je kdykoli smazat."
                  },
                  {
                    question: "Můžu si nastavit, jak AI mluví s mými klienty?",
                    answer: "Ano, máte plnou kontrolu nad tím, jak AI komunikuje. Můžete nastavit tón komunikace, fráze, které má používat, a dokonce i to, jaké služby má nabízet."
                  },
                  {
                    question: "Co když nemám Google Kalendář?",
                    answer: "Kleedo se propojí s jakýmkoli kalendářem - Google, Outlook, Apple iCal nebo jiným. Můžete také použít naše vlastní kalendářové řešení."
                  },
                  {
                    question: "Kolik hovorů zvládne současně?",
                    answer: "AI recepční zvládne neomezený počet hovorů současně. Každý klient se dočká okamžité odpovědi bez čekání."
                  }
                ].map((faq, i) => (
                  <div className="faq-item" key={i}>
                    <input id={`produkt-faq-${i}`} type="checkbox" className="faq-check" />
                    <label htmlFor={`produkt-faq-${i}`} className="faq-summary">
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
      <section className="py-20 gradient-bg">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Připraveni začít?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Přidejte se mezi první, kteří získají AI recepční. Počet míst v pilotu je omezený.
          </p>
          <button className="btn btn-primary text-lg px-8 py-4">
            Objednat demo
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
