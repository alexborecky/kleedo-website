"use client"

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { Phone, Calendar, FileText, MessageSquare, Settings, Globe, Users, DollarSign, Clock, Shield, CheckCircle, Star, ArrowRight, AlertTriangle, TrendingDown, Building, Scissors, Stethoscope, RefreshCw } from 'lucide-react'
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-6 hero overflow-hidden">
        {/* Mask Background Container */}
        
        
        {/* Centered Hero Content */}
        <div className="hero-container">
          <div className="hero-content">
          <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
            AI recepční na telefonu
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Asistent na telefonu, který nezmešká klienta a{' '}
            <span className="text-primary-500">nemá blbou náladu.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Žádná hudba na čekání. Žádné „zmáčkněte 1 pro rezervaci, 2 pro info". 
            Jen plynulý rozhovor, který vám vydělává.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn btn-primary inline-flex items-center justify-center button circular circular-primary">
              <span>Chci Kleedo na svém telefonu</span>
              <span className="btn-fill"></span>
            </button>
            {/* <button className="btn btn-secondary inline-flex items-center justify-center button circular circular-secondary">
              <span>Chci se přidat do pilotu</span>
              <span className="btn-fill"></span>
            </button> */}
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
                Když někdo volá, vždycky to zvedne.
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
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Clock className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Plynulý den, bez mezer</h3>
                <p className="text-gray-400 text-sm">
                  Inteligentně plánuje termíny tak, aby mezi schůzkami nebyly mezery. Maximální využití času a více zakázek.
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
                <h3 className="text-lg font-semibold text-white mb-2">WhatsApp komunikace & automatické potvrzení</h3>
                <p className="text-gray-400 text-sm">
                  Všechny rezervace, potvrzení a připomínky fungují automaticky přes WhatsApp i SMS. Klienti dostanou potvrzení okamžitě.
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
              Když nezvednete vy, <br /> váš konkurent ano.
            </h2>
            
            <p className="text-large">
              Nezvednutý telefon je první důvod, proč klienti odcházejí ke konkurenci.
            </p>
            
            <p className="text-medium">
              Každý zmeškaný hovor je ztracená příležitost. Váš klient volá konkurenci, 
              která má čas a zvedne telefon. Zatímco vy ztrácíte peníze, oni vydělávají.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="">Ztracené příležitosti</h3>
              <p className="text-gray-400">
                Každý zmeškaný hovor je potenciální zákazník, který jde ke konkurenci.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Klesající tržby</h3>
              <p className="text-gray-400">
                Bez pravidelného příjmu z nových klientů vaše tržby stagnují nebo klesají.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ztráta času</h3>
              <p className="text-gray-400">
                Místo práce se staráte o telefon a ztrácíte čas na důležité úkoly.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Target Audience & Benefits Section */}
      <section className="page-section features-section py-20">
        <div className="container">
          <div className="sticky-col">
            <div className="mb-16">
              <h2 className="feature-section-h2">
                Majitelé salonů, ordinací a služeb chtějí klid — a víc klientů.
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
                <h3 className="">Více klientů, více tržeb</h3>
                <p className="text-gray-400 text-sm">
                  Zmeškaný hovor už neznamená ztracenou zakázku. I jedna–dvě nové rezervace týdně znamenají tisíce korun navíc měsíčně. Kleedo plní váš kalendář, aniž byste hnuli prstem.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Clock className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="">Méně telefonátů, více prostoru na práci</h3>
                <p className="text-gray-400">
                  Běžné hovory (rezervace, přesuny, dotazy) sežerou podnikatelům v průměru 5 hodin týdně. Kleedo je vyřeší za vás – a vy můžete konečně dělat práci, která vydělává.
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Settings className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="">Firma, která je vždy k dispozici</h3>
                <p className="text-gray-400">
                  Klienti se dovolají okamžitě. V češtině, angličtině a brzy třeba i v maďarštině. Vypadejte jako profi hráč, co má vždy čas, rozumí všem jazykům i když jste zrovna offline. 
                </p>
              </div>
            </div>

            <div className="feature-card glass">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
                  <Settings className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="">Vy určujete pravidla hry</h3>
                <p className="text-gray-400">
                  Kleedo hraje podle vás. Nastavíte, kdy má přepojit hovor přímo vám, co smí nabídnout a v jakém jazyce mluví. Žádný chaos, jen vaše vlastní pravidla.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="text-center">
            <button className="btn-secondary inline-flex items-center">
              Další benefity
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div> */}
        </div>
      </section>

      {/* Industry Tiles Section */}
      <section className="py-20 page-section industries-section">
        <div className="container mask-container">
        {/* <div className="absolute inset-0 w-full h-full -z-50">
              <InteractiveBlob 
                className="absolute mobile-blob"
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
                className="absolute bottom-0 right-0 mobile-blob" 
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
            </div> */}
          <div className="text-center mb-16 section-header">
            <h2 className="">
              Vyberte si svůj obor
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kleedo funguje ve všech odvětvích. Klikněte na svůj obor a zjistěte, 
              jak vám AI recepční pomůže.
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
                  <h3 className="text-xl font-semibold text-white mb-3">Pro zubaře</h3>
                  <p className="text-gray-400 text-sm">
                    Pacienti už nikdy neuslyší obsazeno. AI recepční 
                    zvládne více hovorů současně.
                  </p>
                  <a href="/pro-zubare" className="mt-4 btn btn-secondary button circular circular-secondary">
                    <span>Zjistit více</span>
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
                  <h3 className="text-xl font-semibold text-white mb-3">Pro salony</h3>
                  <p className="text-gray-400 text-sm">
                    Žádné odbíhání od střihu. AI recepční zvedne telefon, 
                    domluví termín a pošle potvrzení.
                  </p>
                  <a href="/pro-salony" className="mt-4 btn btn-secondary button circular circular-secondary">
                    <span>Zjistit více</span>
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
                  </div>                 <div className="stroke"></div>
                 <div className="flex flex-col feature-card-content">
                   <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 feature-card-icon">
                     <Building className="h-8 w-8" stroke="white" fill="none" strokeWidth="2" />
                   </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Pro firmy</h3>
                  <p className="text-gray-400 text-sm">
                    Žádné zmeškané příležitosti. AI recepční zvedne telefon, 
                    domluví schůzku a pošle potvrzení.
                  </p>
                  <a href="/pro-firmy" className="mt-4 btn btn-secondary button circular circular-secondary">
                    <span>Zjistit více</span>
                    <span className="btn-fill"></span>
                  </a>
                </div>
              </div>
            </div>

            {/* <a href="/produkt" className="group">
              <div className="feature-card glass hover:border-primary-500/50 transition-all duration-300">
                <div className="stroke"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 feature-card-icon">
                    <span className="text-2xl">ℹ️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">O produktu</h3>
                  <p className="text-gray-400 text-sm">
                    Zjistěte více o funkcích, integracích a tom, 
                    jak Kleedo funguje ve vašem oboru.
                  </p>
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 page-section testimonials-section">
        <div className="container px-4">
          <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
              Přidejte se k nám
            </div>
          <div className="testimonials-title">
            <h2>První firmy už testují Kleedo.<br/>Přidejte se mezi ně!</h2>
          </div>

          <div className="testimonials-grid">
            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">Nemusím pořád odbíhat k telefonu. Klienti mají pocit, že jsme vždy dostupní, a já mám klid na práci.</p>
              <div className="testimonial-meta">Majitelka kadeřnictví</div>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">Klienti oceňují, že se dovolají i mimo pracovní dobu. A já mám jistotu, že se rezervace zobrazí až od času, který sám určím.</p>
              <div className="testimonial-meta">Trenérka jógy</div>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">Pacienti oceňují, že se dovolají hned. Mně odpadla zátěž z rutinních hovorů a soustředím se na léčbu.</p>
              <div className="testimonial-meta">Lékař v ordinaci</div>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">Telefon je konečně nástroj, který pracuje pro mě. Už žádné zmeškané hovory a ztracené zakázky.</p>
              <div className="testimonial-meta">Majitel autoservisu</div>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">Volají k nám i cizinci. Asistent přepne do angličtiny a vyřídí rezervaci stejně snadno jako v češtině.</p>
              <div className="testimonial-meta">Majitelka kosmetického salonu</div>
            </div>

            <div className="glass testimonial-card">
              <div className="stroke"></div>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-quote">Dřív jsem měl v kalendáři chaos. Teď systém nabízí jen volná místa, která dávají smysl, a den je uspořádanější.</p>
              <div className="testimonial-meta">Fyzioterapeut</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="page-section cta-section cta-section-small overflow-hidden">
        <div className="container mask-container">
          {/* <div className="absolute inset-0 w-full h-full -z-50">
            <InteractiveBlob 
              className="absolute top-0 right-0" 
              widthPercent={100} 
              heightPercent={120}
              bottomPercent={-20}
              rightPercent={-40}
              fill="#D1EE9E0D"
              baseRadius={100}
              noiseAmplitude={24}
              noiseSpeed={0.1}
              mouseStrength={28}
              mouseRadius={140}
              relax={0.08}
              pointsCount={32}
              gradientStart="#84FAB0"
              gradientEnd="#8FD3F4"
              gradientDirection="to right"
              gradientStartOpacity={0.18}
              gradientEndOpacity={0.18}
              blurAmount={80}
            />
            <InteractiveBlob 
              className="absolute bottom-0 left-0" 
              widthPercent={120} 
              heightPercent={80}
              topPercent={-20}
              leftPercent={-40}
              fill="#D1EE9E0D"
              baseRadius={100}
              noiseAmplitude={80}
              noiseSpeed={0.02}
              mouseStrength={30}
              mouseRadius={100}
              relax={0.09}
              pointsCount={28}
              gradientStart="#FA709A"
              gradientEnd="#FEE140"
              gradientDirection="to left"
              gradientStartOpacity={0.22}
              gradientEndOpacity={0.22}
              blurAmount={80}
            />
          </div> */}
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
                Přidejte se mezi první, kteří získají AI recepční
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Počet míst v pilotu je omezený. Zajistěte si místo hned.
              </p>
              <a href="/demo" className="btn-primary text-lg px-8 py-4 button circular circular-primary">
                <span>Objednat demo</span>
                <span className="btn-fill"></span>
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
                    q: "Může AI udělat chybu při rezervaci?",
                    a: "AI je navrženo tak, aby se chovalo jako profesionální recepční. Má přístup k vašemu kalendáři a dokáže se učit z každé konverzace. Navíc je vždy zdvořilé a nikdy nezapomene na žádný detail."
                  },
                  {
                    q: "Rozpozná AI různé požadavky klientů?",
                    a: "Ano, AI dokáže rozpoznat různé typy služeb a požadavky. Můžete si nastavit pravidla, jak má AI reagovat na různé situace a typy klientů."
                  },
                  { q: "Kolik to stojí?", a: "Ceny začínají od 990 Kč měsíčně za základní plán. Máme tři úrovně: Starter (990 Kč), Pro (2 490 Kč) a Business (4 990 Kč). Každý plán obsahuje jiné funkce podle velikosti vaší firmy." },
                  { q: "Jak je to s ochranou dat?", a: "Ochrana dat je pro nás prioritou. Všechna data jsou šifrována, ukládána v EU a plně v souladu s GDPR. Máte plnou kontrolu nad svými daty a můžete je kdykoli smazat." },
                  { q: "Můžu si nastavit, jak AI mluví s mými klienty?", a: "Ano, máte plnou kontrolu nad tím, jak AI komunikuje. Můžete nastavit tón komunikace, fráze, které má používat, a dokonce i to, jaké služby má nabízet." },
                  { q: "Co když nemám Google Kalendář?", a: "Kleedo se propojí s jakýmkoli kalendářem - Google, Outlook, Apple iCal nebo jiným. Můžete také použít naše vlastní kalendářové řešení." },
                  { q: "Kolik hovorů zvládne současně?", a: "AI recepční zvládne neomezený počet hovorů současně. Každý klient se dočká okamžité odpovědi bez čekání." },
                  { q: "Může Kleedo fungovat 24/7?", a: "Ano, Kleedo je dostupné 24 hodin denně, 7 dní v týdnu. Nikdy nebere dovolenou, nemá nemoc a vždy zvedne telefon." },
                  { q: "Co když AI nerozumí klientovi?", a: "AI je navrženo tak, aby rozumělo přirozené řeči. Pokud si není jisté, zeptá se na upřesnění nebo přesměruje hovor na vás." },
                  { q: "Musím něco instalovat?", a: "Ne, Kleedo funguje přes internetové připojení. Nepotřebujete žádnou instalaci ani speciální vybavení. Stačí se zaregistrovat a začít používat." }
                ].map((item, i) => (
                  <div className="faq-item" key={i}>
                    <input id={`faq-${i}`} type="checkbox" className="faq-check" />
                    <label htmlFor={`faq-${i}`} className="faq-summary">
                      <span className="faq-question">{item.q}</span>
                      <span className="faq-toggle"><span className="plus">+</span><span className="minus">−</span></span>
                    </label>
                    <div className="faq-content">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 page-section cta-section cta-section-big overflow-hidden">
        <div className="container mask-container text-center">
          <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
            AI recepční na telefonu
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Už žádný zmeškaný klient.
          </h2>
          
          <p className="text-small text-gray-300 mb-8 leading-relaxed">
            AI recepční s lidským hlasem okamžitě zvedne telefon a postará se o klienta 
            tak, jak byste to udělali vy. Žádné obsazené linky, žádné hlasové schránky.
          </p>

          <a href="/demo" className="btn-primary text-lg px-8 py-4 button circular circular-primary">
            <span>Objednat demo</span>
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