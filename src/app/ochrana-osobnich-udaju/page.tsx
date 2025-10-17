import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl text-page">
        <h1 className="text-4xl font-bold text-white mb-8">Ochrana osobních údajů</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <section className="text-gray-300">
            <p className="mb-6">
              Tato Zásada ochrany osobních údajů popisuje, jak Kleedo ("my", "naše", "nás") 
              shromažďuje, používá a chrání vaše osobní údaje v souladu s nařízením GDPR 
              (Obecné nařízení o ochraně osobních údajů EU 2016/679) a zákonem č. 110/2019 Sb., 
              o zpracování osobních údajů.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Správce osobních údajů</h2>
            <p className="mb-4">
              Správcem vašich osobních údajů je:
            </p>
            <p className="mb-4">
              <strong>Alexandr Borecký — Kleedo</strong><br />
              IČO: 04362365<br />
              Sídlo: Slezská 883/26, 120 00 Praha 2<br />
              Zapsáno v živnostenském rejstříku České republiky<br />
              E-mail: <a href="mailto:info@kleedo.app" className="text-primary-500 hover:underline">info@kleedo.app</a><br />
              Telefon: +420 702 031 717
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Jaké osobní údaje zpracováváme</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Údaje od zákazníků</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Identifikační údaje (jméno, příjmení, název společnosti)</li>
              <li>Kontaktní údaje (e-mail, telefon, adresa)</li>
              <li>Fakturační údaje (IČO, DIČ, fakturační adresa)</li>
              <li>Údaje o službách a preferencích</li>
              <li>Komunikační údaje (obsah e-mailů, hovorů s podporou)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Údaje z telefonních hovorů</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Zvukové záznamy hovorů zpracovaných naším AI asistentem</li>
              <li>Metadata hovorů (čas, délka, telefonní číslo volajícího)</li>
              <li>Přepisy hovorů pro účely analýzy a vylepšení služby</li>
              <li>Informace získané během hovoru (jméno, kontakt, požadavky)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Technické údaje</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IP adresa</li>
              <li>Cookies a podobné technologie</li>
              <li>Údaje o zařízení a prohlížeči</li>
              <li>Logy přístupu k naší platformě</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Účel zpracování osobních údajů</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Poskytování služeb</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Zpracování telefonních hovorů prostřednictvím AI asistenta</li>
              <li>Správa kalendářů a rezervací</li>
              <li>Zasílání potvrzení a připomínek zákazníkům</li>
              <li>Technická podpora a zákaznický servis</li>
            </ul>
            <p className="mb-4">
              <strong>Právní základ:</strong> Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Fakturace a účetnictví</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Vystavování faktur</li>
              <li>Vedení účetnictví</li>
              <li>Splnění daňových povinností</li>
            </ul>
            <p className="mb-4">
              <strong>Právní základ:</strong> Plnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR)
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.3 Zlepšování služeb</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Analýza kvality hovorů a služeb</li>
              <li>Trénování a zlepšování AI modelu</li>
              <li>Vývoj nových funkcí</li>
              <li>Zajištění bezpečnosti a prevence podvodů</li>
            </ul>
            <p className="mb-4">
              <strong>Právní základ:</strong> Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR)
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.4 Marketing</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Zasílání newsletterů a obchodních sdělení</li>
              <li>Informování o nových funkcích a službách</li>
            </ul>
            <p className="mb-4">
              <strong>Právní základ:</strong> Souhlas (čl. 6 odst. 1 písm. a) GDPR) - můžete kdykoliv odvolat
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.5 Pilotní provoz</h3>
            <p className="mb-4">
              V rámci pilotního provozu služby Kleedo mohou být vybraná data z hovorů, přepisů a dalších interakcí
              použita pro testování, ladění a zlepšování systému. Účast v pilotním provozu je dobrovolná a uživatelé
              jsou o této skutečnosti informováni při zapojení do testování. Všechna data jsou zpracována v souladu s GDPR
              a uchovávána pouze po dobu nezbytnou pro tento účel.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Doba uchování osobních údajů</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Smluvní údaje:</strong> Po dobu trvání smlouvy a 3 roky po jejím ukončení (promlčecí lhůta)</li>
              <li><strong>Účetní doklady:</strong> 10 let od konce zdaňovacího období (zákonná povinnost)</li>
              <li><strong>Zvukové záznamy hovorů:</strong> Maximálně 6 měsíců, pokud není potřeba pro řešení sporů</li>
              <li><strong>Marketingové souhlas:</strong> Do odvolání souhlasu nebo 3 roky neaktivity</li>
              <li><strong>Cookies:</strong> Podle typu cookies (viz Cookie policy)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Příjemci osobních údajů</h2>
            <p className="mb-4">
              Vaše osobní údaje můžeme sdílet s následujícími kategoriemi příjemců:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Poskytovatelé AI služeb:</strong> např. OpenAI, Anthropic (zpracování hovorů a přepisů)</li>
              <li><strong>Cloudový hosting a infrastruktura:</strong> např. Vercel, AWS nebo Google Cloud</li>
              <li><strong>Telekomunikační poskytovatelé:</strong> pro zprostředkování telefonních hovorů</li>
              <li><strong>Analytické a marketingové nástroje:</strong> Google Analytics, Leadinfo (po souhlasu s cookies)</li>
              <li><strong>Účetní a právní poradci:</strong> pro plnění právních povinností</li>
            </ul>
            <p className="mb-4">
              Všichni zpracovatelé jsou s námi vázáni smlouvou a jsou povinni chránit vaše údaje v souladu s GDPR.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Přenos osobních údajů do třetích zemí</h2>
            <p className="mb-4">
              Některé námi využívané služby mohou zahrnovat přenos dat mimo EU/EHP (např. při použití vybraných AI poskytovatelů).
              V takovém případě zajišťujeme přiměřené záruky ochrany vašich údajů prostřednictvím:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Standardních smluvních doložek schválených Evropskou komisí</li>
              <li>Rozhodnutí o přiměřenosti ochrany v cílové zemi</li>
              <li>Dalších vhodných záruk podle GDPR</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Vaše práva</h2>
            <p className="mb-4">
              V souvislosti se zpracováním vašich osobních údajů máte následující práva:
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.1 Právo na přístup</h3>
            <p className="mb-4">
              Máte právo získat od nás potvrzení, zda zpracováváme vaše osobní údaje, 
              a pokud ano, máte právo získat přístup k těmto údajům a informacím o jejich zpracování.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.2 Právo na opravu</h3>
            <p className="mb-4">
              Máte právo na opravu nepřesných osobních údajů nebo jejich doplnění.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.3 Právo na výmaz ("právo být zapomenut")</h3>
            <p className="mb-4">
              Za určitých okolností máte právo požadovat výmaz vašich osobních údajů.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.4 Právo na omezení zpracování</h3>
            <p className="mb-4">
              Za určitých okolností máte právo požadovat omezení zpracování vašich osobních údajů.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.5 Právo na přenositelnost údajů</h3>
            <p className="mb-4">
              Máte právo získat osobní údaje, které jste nám poskytli, ve strukturovaném, 
              běžně používaném a strojově čitelném formátu.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.6 Právo vznést námitku</h3>
            <p className="mb-4">
              Máte právo vznést námitku proti zpracování vašich osobních údajů na základě 
              oprávněného zájmu nebo pro účely přímého marketingu.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.7 Právo odvolat souhlas</h3>
            <p className="mb-4">
              Pokud zpracováváme vaše údaje na základě souhlasu, máte právo souhlas kdykoliv odvolat.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.8 Právo podat stížnost</h3>
            <p className="mb-4">
              Máte právo podat stížnost u dozorového úřadu:<br />
              <strong>Úřad pro ochranu osobních údajů</strong><br />
              Pplk. Sochora 27<br />
              170 00 Praha 7<br />
              Tel.: +420 234 665 111<br />
              Web: <a href="https://www.uoou.cz" className="text-primary-500 hover:underline">www.uoou.cz</a>
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Zabezpečení osobních údajů</h2>
            <p className="mb-4">
              Implementovali jsme vhodná technická a organizační opatření k zajištění bezpečnosti 
              vašich osobních údajů, včetně:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Šifrování dat při přenosu i ukládání (TLS/SSL, AES-256)</li>
              <li>Pravidelné bezpečnostní audity a testy penetrace</li>
              <li>Omezený přístup k osobním údajům pouze oprávněným osobám</li>
              <li>Dvoufaktorová autentizace pro přístup k systémům</li>
              <li>Pravidelné zálohy a disaster recovery plány</li>
              <li>Monitoring a detekce bezpečnostních incidentů</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Cookies</h2>
            <p className="mb-4">
              Naše webové stránky používají cookies. Podrobné informace o používání cookies 
              naleznete v našich <a href="/ochrana-osobnich-udaju#cookies" className="text-primary-500 hover:underline">Zásadách používání cookies</a>.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.1 Typy cookies a souhlasy</h3>
            <p className="mb-4">
              Cookies používáme pouze na základě vašeho souhlasu, s výjimkou technicky nezbytných cookies. 
              V rámci souhlasu rozlišujeme kategorie: (a) analytické/statistické, (b) marketingové/reklamní. 
              Svůj souhlas můžete kdykoliv odvolat v nastavení cookies (banner se znovu zobrazí při smazání cookies nebo v odkazu v patičce webu).
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.2 Marketingové technologie (Google Ads, Meta Pixel, Leadinfo)</h3>
            <p className="mb-4">
              Tyto technologie spouštíme pouze po udělení souhlasu s marketingovými cookies a v režimu Google Consent Mode. 
              Slouží k měření výkonu kampaní a k lepšímu cílení reklamy.
            </p>
            <p className="mb-4">
              Podrobné informace o konkrétních cookies naleznete v tabulce níže nebo v samostatných{' '}
              <a href="/cookies" className="text-primary-500 hover:underline">Zásadách používání cookies</a>.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Google Ads / Google Analytics:</strong> používáme k měření návštěvnosti a konverzí. 
                Zpracování probíhá dle zásad společnosti Google a je podmíněno vaším souhlasem s cookies.</li>
              <li><strong>Meta Pixel (Facebook/Instagram):</strong> používáme pro měření a optimalizaci kampaní na platformách Meta. 
                Spouštíme pouze po udělení souhlasu; na zpracování se vztahují Podmínky nástrojů pro firmy společnosti Meta.</li>
              <li><strong>Leadinfo:</strong> nástroj pro identifikaci návštěv firem na základě IP adresy a souvisejících technických údajů. 
                Leadinfo používáme pouze po udělení souhlasu s marketingovými cookies. Více informací naleznete v zásadách poskytovatele.</li>
            </ul>
            <p className="mb-4">
              Uvedené technologie mohou používat cookies a obdobné identifikátory. 
              Pokud nesouhlasíte s marketingovými cookies, tyto technologie nebudou spuštěny.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Automatizované rozhodování</h2>
            <p className="mb-4">
              Náš AI asistent používá automatizované zpracování pro následující účely:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Rozpoznávání řeči a přepis hovorů</li>
              <li>Porozumění záměrům volajících</li>
              <li>Automatické plánování termínů v kalendáři</li>
              <li>Generování odpovědí a komunikace s volajícími</li>
            </ul>
            <p className="mb-4">
              Toto automatizované zpracování je nezbytné pro poskytování naší služby. 
              Vždy máte možnost kontaktovat lidského pracovníka podpory, pokud nesouhlasíte 
              s automatizovaným rozhodnutím.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Změny těchto zásad</h2>
            <p className="mb-4">
              Můžeme tyto zásady ochrany osobních údajů čas od času aktualizovat. 
              O jakýchkoli podstatných změnách vás budeme informovat e-mailem nebo 
              prostřednictvím oznámení na našich webových stránkách.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Kontakt</h2>
            <p className="mb-4">
              Pro uplatnění vašich práv nebo dotazy týkající se zpracování osobních údajů nás kontaktujte:
            </p>
            <p className="mb-4">
              E-mail: <a href="mailto:info@kleedo.app" className="text-primary-500 hover:underline">info@kleedo.app</a><br />
              Telefon: +420 702 031 717<br />
              Poštovní adresa: Alexandr Borecký — Kleedo, Slezská 883/26, 120 00 Praha 2
            </p>

            <p className="mt-8 text-sm text-gray-400">
              Poslední aktualizace: 17. října 2025
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
