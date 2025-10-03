import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { Stethoscope, Clock, Users, TrendingUp, CheckCircle, Star, Shield, Calendar, Phone, MessageSquare, Settings, Globe, FileText } from 'lucide-react'

export default function DentistPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-6 hero overflow-hidden">
        {/* Centered Hero Content */}
        <div className="hero-container">
          <div className="hero-content">
            <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
              <Stethoscope className="h-4 w-4 mr-2" />
              AI recepční pro zubaře
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pacienti už nikdy neuslyší{' '}
              <span className="text-primary-500">obsazeno</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Žádné zmeškané hovory. Žádné plné schránky. Jen AI recepční, která s pacienty 
              řeší termíny, zapíše je do kalendáře a ještě jim pošle připomínku. 
              Vaše ordinace zní dostupně, profesionálně — a konečně máte klid na práci.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="btn btn-primary inline-flex items-center justify-center group">
                Chci vidět, jak funguje
              </button>
              <button className="btn btn-secondary inline-flex items-center justify-center">
                Chci se přidat do pilotu
              </button>
            </div>
          </div>
          
          {/* Hero illustration centered below */}
          <img
            src="/images/hero-illustration.png"
            alt="Kleedo AI Assistant"
            className='hero-illustration'
          />
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

      {/* Features Section */}
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
                Proč si vybrat Kleedo pro zubaře?
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
                <h3 className="text-lg font-semibold text-white mb-2">Více pacientů</h3>
                <p className="text-gray-400 text-sm">
                  I 1–2 noví týdně = tisíce Kč měsíčně navíc. Žádné zmeškané příležitosti.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Calendar className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Méně chaosu</h3>
                <p className="text-gray-400 text-sm">
                  Konec odbíhání od pacientů. Soustředíte se na léčbu, ne na telefon.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="stroke"></div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <MessageSquare className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Vždy dostupní</h3>
                <p className="text-gray-400 text-sm">
                  Česky i anglicky. I mimo pracovní dobu – podle vašich pravidel.
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
                  Nastavte si, jak má AI komunikovat s vašimi pacienty. 
                  Zná vaše služby, ceník a způsob práce.
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
                  Ideální pro ordinace s mezinárodními pacienty.
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
                  Zvládne více hovorů současně bez čekání. 
                  Každý pacient se dočká okamžité odpovědi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Funkce, které vás naučí mít telefon zase rádi.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center mb-3">
                  <Calendar className="h-6 w-6 text-primary-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Plánování bez mezer</h3>
                </div>
                <p className="text-gray-400">
                  Automaticky najde volné termíny a zarezervuje je. Zná vaše pracovní doby, 
                  typy vyšetření a dobu trvání procedur.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-primary-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Čekací listina</h3>
                </div>
                <p className="text-gray-400">
                  Když není volný termín, přidá pacienta na čekací listinu a ozve se mu, 
                  jakmile se uvolní místo.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-6 w-6 text-primary-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Follow-up zprávy</h3>
                </div>
                <p className="text-gray-400">
                  Pošle připomínku den před termínem, potvrdí schůzku nebo se zeptá 
                  na spokojenost po vyšetření.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-6 w-6 text-primary-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Statistiky a reporty</h3>
                </div>
                <p className="text-gray-400">
                  Přehled hovorů, rezervací a spokojenosti pacientů. 
                  Víte přesně, jak vaše ordinace funguje.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Settings className="h-6 w-6 text-primary-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Integrace</h3>
                </div>
                <p className="text-gray-400">
                  Propojí se s vaším kalendářem, CRM systémem nebo účetním softwarem. 
                  Všechno na jednom místě.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-primary-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Bezpečnost a GDPR</h3>
                </div>
                <p className="text-gray-400">
                  Plně v souladu s GDPR a ochranou osobních údajů. 
                  Všechna data jsou šifrována a bezpečně uložena.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Přidejte se mezi první, kteří získají AI recepční
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Počet míst v pilotu je omezený. Zajistěte si místo hned.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Objednat demo
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Často kladené otázky
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Může AI udělat chybu při rezervaci?",
                  answer: "AI je navrženo tak, aby se chovalo jako profesionální recepční. Má přístup k vašemu kalendáři a dokáže se učit z každé konverzace. Navíc je vždy zdvořilé a nikdy nezapomene na žádný detail."
                },
                {
                  question: "Rozpozná AI různé požadavky pacientů?",
                  answer: "Ano, AI dokáže rozpoznat různé typy vyšetření, urgentní případy a speciální požadavky. Můžete si nastavit pravidla, jak má AI reagovat na různé situace."
                },
                {
                  question: "Kolik to stojí?",
                  answer: "Ceny začínají od 990 Kč měsíčně za základní plán. Máme tři úrovně: Starter (990 Kč), Pro (2 490 Kč) a Business (4 990 Kč). Každý plán obsahuje jiné funkce podle velikosti vaší ordinace."
                },
                {
                  question: "Jak je to s ochranou dat?",
                  answer: "Ochrana dat je pro nás prioritou. Všechna data jsou šifrována, ukládána v EU a plně v souladu s GDPR. Máte plnou kontrolu nad svými daty a můžete je kdykoli smazat."
                },
                {
                  question: "Můžu si nastavit, jak AI mluví s mými pacienty?",
                  answer: "Ano, máte plnou kontrolu nad tím, jak AI komunikuje. Můžete nastavit tón komunikace, fráze, které má používat, a dokonce i to, jaké služby má nabízet."
                },
                {
                  question: "Co když nemám Google Kalendář?",
                  answer: "Kleedo se propojí s jakýmkoli kalendářem - Google, Outlook, Apple iCal nebo jiným. Můžete také použít naše vlastní kalendářové řešení."
                },
                {
                  question: "Kolik hovorů zvládne současně?",
                  answer: "AI recepční zvládne neomezený počet hovorů současně. Každý pacient se dočká okamžité odpovědi bez čekání."
                },
                {
                  question: "Může Kleedo fungovat 24/7?",
                  answer: "Ano, Kleedo je dostupné 24 hodin denně, 7 dní v týdnu. Nikdy nebere dovolenou, nemá nemoc a vždy zvedne telefon."
                },
                {
                  question: "Co když AI nerozumí pacientovi?",
                  answer: "AI je navrženo tak, aby rozumělo přirozené řeči. Pokud si není jisté, zeptá se na upřesnění nebo přesměruje hovor na vás."
                },
                {
                  question: "Musím něco instalovat?",
                  answer: "Ne, Kleedo funguje přes internetové připojení. Nepotřebujete žádnou instalaci ani speciální vybavení. Stačí se zaregistrovat a začít používat."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-dark-700 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-700/50 transition-colors cursor-pointer">
                      <span className="text-white font-medium pr-4">{faq.question}</span>
                      <div className="flex-shrink-0">
                        <span className="text-primary-500 group-open:hidden">+</span>
                        <span className="text-primary-500 group-open:block hidden">−</span>
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
          <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Stethoscope className="h-4 w-4 mr-2" />
            AI recepční pro zubaře
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Už žádný zmeškaný pacient.
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            AI recepční s lidským hlasem okamžitě zvedne telefon a postará se o pacienta 
            tak, jak byste to udělali vy. Žádné obsazené linky, žádné hlasové schránky.
          </p>

          <button className="btn-primary text-lg px-8 py-4">
            Objednat demo
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
