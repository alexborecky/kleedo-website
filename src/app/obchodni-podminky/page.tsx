import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl text-page">
        <h1 className="text-4xl font-bold text-white mb-8">Obchodní podmínky</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <section className="text-gray-300">
            <p className="mb-6">
              Tyto Všeobecné obchodní podmínky (dále jen "VOP") upravují vztah mezi 
              společností Kleedo s.r.o. (dále jen "poskytovatel") a zákazníkem při 
              poskytování služeb AI recepční.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Úvodní ustanovení</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.1 Identifikace poskytovatele</h3>
            <p className="mb-4">
              <strong>Kleedo s.r.o.</strong><br />
              IČO: [IČO společnosti]<br />
              DIČ: [DIČ společnosti]<br />
              Sídlo: [Adresa]<br />
              Zapsaná v obchodním rejstříku vedeném [Krajským soudem], oddíl C, vložka [číslo]<br />
              E-mail: info@kleedo.app<br />
              Telefon: [Telefonní číslo]
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.2 Definice pojmů</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Služba:</strong> AI recepční systém Kleedo poskytovaný prostřednictvím cloudové platformy</li>
              <li><strong>Zákazník:</strong> Fyzická osoba podnikatel nebo právnická osoba, která uzavřela smlouvu s poskytovatelem</li>
              <li><strong>Uživatelský účet:</strong> Přístupový účet zákazníka k platformě Kleedo</li>
              <li><strong>AI asistent:</strong> Umělá inteligence schopná vést telefonní konverzace a spravovat rezervace</li>
              <li><strong>Předplatné:</strong> Pravidelná platba za užívání služby podle zvoleného tarifu</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Předmět smlouvy</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Rozsah služeb</h3>
            <p className="mb-4">Poskytovatel se zavazuje poskytovat zákazníkovi následující služby:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>AI telefonní asistent schopný přijímat a zpracovávat příchozí hovory</li>
              <li>Automatické plánování a správa rezervací v kalendáři zákazníka</li>
              <li>Zasílání potvrzení a připomínek klientům prostřednictvím WhatsApp a SMS</li>
              <li>Integrace s kalendářními systémy (Google Calendar, Outlook, Apple iCal)</li>
              <li>Dashboard pro správu a monitoring hovorů</li>
              <li>Technická podpora podle zvoleného tarifu</li>
              <li>Pravidelné aktualizace a vylepšení služby</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Dostupnost služby</h3>
            <p className="mb-4">
              Poskytovatel se zavazuje zajistit dostupnost služby na úrovni minimálně 99,5% měsíčně, 
              kromě plánovaných odstávek. Plánované odstávky budou oznamovány minimálně 48 hodin předem.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Vznik a ukončení smlouvy</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Uzavření smlouvy</h3>
            <p className="mb-4">
              Smlouva vzniká registrací zákazníka na platformě Kleedo a potvrzením objednávky 
              vybraného tarifu. Potvrzením objednávky zákazník vyjadřuje souhlas s těmito VOP.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Zkušební období</h3>
            <p className="mb-4">
              Nový zákazníci mají nárok na 14denní zkušební období zdarma. Během zkušebního 
              období lze smlouvu ukončit bez udání důvodu a bez jakýchkoli sankcí.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.3 Ukončení smlouvy</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Výpovědní lhůta:</strong> Smlouvu lze vypovědět s výpovědní lhůtou 30 dnů ke konci kalendářního měsíce</li>
              <li><strong>Okamžité ukončení:</strong> Poskytovatel může smlouvu okamžitě ukončit v případě porušení těchto VOP zákazníkem</li>
              <li><strong>Forma výpovědi:</strong> Výpověď musí být učiněna v textové podobě na e-mail info@kleedo.app</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Cena a platební podmínky</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Cenové tarify</h3>
            <p className="mb-4">Aktuální ceník je dostupný na webových stránkách <a href="/cenik" className="text-primary-500 hover:underline">www.kleedo.app/cenik</a>. Poskytovatel nabízí následující tarify:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Starter:</strong> 990 Kč/měsíc (bez DPH) - základní funkce, až 100 minut hovorů</li>
              <li><strong>Pro:</strong> 2 490 Kč/měsíc (bez DPH) - rozšířené funkce, až 300 minut hovorů</li>
              <li><strong>Business:</strong> 4 990 Kč/měsíc (bez DPH) - kompletní funkce, neomezené hovory</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Platební podmínky</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Předplatné je placeno měsíčně nebo ročně předem</li>
              <li>Platba probíhá automaticky prostřednictvím platební karty nebo bankovním převodem</li>
              <li>Při roční platbě předem poskytujeme slevu 20%</li>
              <li>Všechny ceny jsou uvedeny bez DPH, která bude připočtena podle platných právních předpisů</li>
              <li>Faktura je vystavena elektronicky a zaslána na e-mail zákazníka</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Poplatky za nadlimitní využití</h3>
            <p className="mb-4">
              V případě překročení limitů zahrnutých v tarifu (počet hovorů, minut) budou účtovány 
              dodatečné poplatky podle aktuálního ceníku. Zákazník bude o blížícím se limitu 
              informován předem.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.4 Změna cen</h3>
            <p className="mb-4">
              Poskytovatel si vyhrazuje právo měnit ceny s předstihem minimálně 60 dnů. 
              Změna cen nemá vliv na již zaplacené období. Pokud zákazník se změnou nesouhlasí, 
              může smlouvu vypovědět ke dni účinnosti nových cen.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.5 Prodlení s platbou</h3>
            <p className="mb-4">
              V případě prodlení s platbou déle než 14 dní je poskytovatel oprávněn pozastavit 
              poskytování služeb. Při prodlení delším než 30 dní může poskytovatel smlouvu ukončit.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Práva a povinnosti poskytovatele</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 Poskytovatel se zavazuje:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Poskytovat službu v souladu s těmito VOP a platnou legislativou</li>
              <li>Zajistit technickou podporu podle zvoleného tarifu</li>
              <li>Chránit osobní údaje zákazníka v souladu s GDPR</li>
              <li>Průběžně vylepšovat a aktualizovat službu</li>
              <li>Informovat zákazníka o plánovaných odstávkách a změnách</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Poskytovatel má právo:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Přerušit poskytování služby při porušení VOP zákazníkem</li>
              <li>Provádět plánované údržby a aktualizace systému</li>
              <li>Upravovat funkce služby v zájmu jejího zlepšení</li>
              <li>Odmítnout poskytnutí služby osobám jednajícím v rozporu s dobrými mravy</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Práva a povinnosti zákazníka</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Zákazník se zavazuje:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Platit řádně a včas cenu za poskytované služby</li>
              <li>Poskytovat pravdivé a aktuální údaje při registraci</li>
              <li>Chránit přístupové údaje ke svému účtu</li>
              <li>Používat službu v souladu s platnou legislativou a těmito VOP</li>
              <li>Nepoužívat službu k nezákonným účelům nebo ke škodě třetích osob</li>
              <li>Neposkytovat přístup k účtu třetím osobám bez souhlasu poskytovatele</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Zákazník má právo:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Využívat službu v rozsahu zvoleného tarifu</li>
              <li>Kdykoli změnit svůj tarif (změna nabude účinnosti od následujícího fakturačního období)</li>
              <li>Kontaktovat technickou podporu podle podmínek svého tarifu</li>
              <li>Ukončit smlouvu v souladu s těmito VOP</li>
              <li>Požadovat vrácení dat v případě ukončení smlouvy</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Ochrana dat a soukromí</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.1 Zpracování osobních údajů</h3>
            <p className="mb-4">
              Zpracování osobních údajů je podrobně popsáno v samostatném dokumentu 
              <a href="/ochrana-osobnich-udaju" className="text-primary-500 hover:underline"> Ochrana osobních údajů</a>.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.2 Vlastnictví dat</h3>
            <p className="mb-4">
              Veškerá data vložená zákazníkem do systému (kontakty, rezervace, záznamy hovorů) 
              zůstávají ve vlastnictví zákazníka. Poskytovatel je pouze zpracovává v rámci 
              poskytování služby.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.3 Vrácení dat</h3>
            <p className="mb-4">
              Při ukončení smlouvy má zákazník právo na export svých dat ve strukturovaném formátu 
              (CSV, JSON). Data budou dostupná po dobu 30 dnů od ukončení smlouvy.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.4 Smazání dat</h3>
            <p className="mb-4">
              Po uplynutí 90 dnů od ukončení smlouvy budou veškerá data zákazníka trvale smazána 
              z našich systémů, kromě dat, která jsme povinni uchovávat ze zákona (účetní doklady).
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Odpovědnost za vady a reklamace</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.1 Reklamace služby</h3>
            <p className="mb-4">
              Zákazník má právo reklamovat vady poskytované služby. Reklamace musí být uplatněna 
              bez zbytečného odkladu, nejpozději do 30 dnů od zjištění vady.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.2 Forma reklamace</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Reklamace se podává na e-mail: support@kleedo.app</li>
              <li>Reklamace musí obsahovat popis vady a požadovaný způsob vyřízení</li>
              <li>Poskytovatel potvrdí přijetí reklamace do 48 hodin</li>
              <li>Reklamace bude vyřízena do 30 dnů od jejího přijetí</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.3 Způsoby vyřízení reklamace</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Odstranění vady</li>
              <li>Přiměřená sleva z ceny</li>
              <li>Prodloužení předplatného jako kompenzace</li>
              <li>V případě podstatného porušení: právo na odstoupení od smlouvy</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Omezení odpovědnosti</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.1 Vyloučení odpovědnosti</h3>
            <p className="mb-4">Poskytovatel neodpovídá za:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Škody způsobené nesprávným používáním služby zákazníkem</li>
              <li>Škody způsobené výpadkem internetového připojení na straně zákazníka</li>
              <li>Škody způsobené vyšší mocí nebo třetími osobami</li>
              <li>Nepřesnosti v AI odpovědích způsobené nejasným vyjadřováním volajících</li>
              <li>Ztrátu dat způsobenou jednáním zákazníka</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.2 Omezení výše náhrady</h3>
            <p className="mb-4">
              Odpovědnost poskytovatele za škody je omezena na výši předplatného zaplaceného 
              zákazníkem za poslední 3 měsíce před vznikem škody.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.3 Doporučení zákazníkům</h3>
            <p className="mb-4">
              Doporučujeme zákazníkům pravidelně kontrolovat záznamy hovorů a rezervací, 
              zejména v prvních týdnech používání služby, aby se ujistili, že AI asistent 
              funguje podle jejich očekávání.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Duševní vlastnictví</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.1 Práva k software</h3>
            <p className="mb-4">
              Veškerá práva k software, dokumentaci, know-how a dalším součástem služby Kleedo 
              patří poskytovateli nebo jeho dodavatelům. Zákazník získává pouze nevýhradní 
              licenci k užívání služby v souladu s těmito VOP.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.2 Ochranná známka</h3>
            <p className="mb-4">
              Název "Kleedo" a logo jsou ochranné známky poskytovatele. Zákazník není oprávněn 
              je používat bez předchozího písemného souhlasu.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Závěrečná ustanovení</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.1 Změny VOP</h3>
            <p className="mb-4">
              Poskytovatel je oprávněn změnit tyto VOP. O změnách bude zákazník informován 
              e-mailem minimálně 30 dnů před nabytím jejich účinnosti. Pokud zákazník se změnami 
              nesouhlasí, může smlouvu vypovědět ke dni účinnosti nových VOP.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.2 Řešení sporů</h3>
            <p className="mb-4">
              Případné spory mezi poskytovatelem a zákazníkem budou řešeny smírnou cestou. 
              Není-li to možné, bude spor předložen k rozhodnutí příslušnému soudu České republiky.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.3 Mimosoudní řešení sporů</h3>
            <p className="mb-4">
              Spotřebitel má právo obrátit se na subjekt mimosoudního řešení spotřebitelských sporů:<br />
              <strong>Česká obchodní inspekce</strong><br />
              Štěpánská 567/15<br />
              120 00 Praha 2<br />
              Web: <a href="https://www.coi.cz" className="text-primary-500 hover:underline">www.coi.cz</a>
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.4 Rozhodné právo</h3>
            <p className="mb-4">
              Tyto VOP a smlouva se řídí právním řádem České republiky, zejména zákonem 
              č. 89/2012 Sb., občanským zákoníkem.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.5 Oddělitelnost ustanovení</h3>
            <p className="mb-4">
              Pokud se některé ustanovení těchto VOP stane neplatným nebo nevymahatelným, 
              nezpůsobí to neplatnost ostatních ustanovení. Neplatné ustanovení bude nahrazeno 
              ustanovením platným, které se co nejvíce blíží smyslu původního ustanovení.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.6 Kontakt</h3>
            <p className="mb-4">
              Pro dotazy týkající se těchto VOP nás kontaktujte:<br />
              E-mail: <a href="mailto:info@kleedo.app" className="text-primary-500 hover:underline">info@kleedo.app</a><br />
              Telefon: [Telefonní číslo]
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.7 Účinnost</h3>
            <p className="mb-4">
              Tyto VOP nabývají účinnosti dnem 1. ledna 2025.
            </p>

            <p className="mt-8 text-sm text-gray-400">
              Poslední aktualizace: 7. října 2025<br />
              Verze: 1.0
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
