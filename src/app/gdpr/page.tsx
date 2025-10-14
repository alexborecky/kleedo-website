import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function GDPRPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl text-page">
        <h1 className="text-4xl font-bold text-white mb-8">GDPR - Informace o zpracování osobních údajů</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <section className="text-gray-300">
            <p className="mb-6">
              Tento dokument poskytuje podrobné informace o tom, jak společnost Kleedo zpracovává 
              osobní údaje v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 
              o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném 
              pohybu těchto údajů (obecné nařízení o ochraně osobních údajů, "GDPR").
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Identifikace správce a kontaktní údaje</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.1 Správce</h3>
            <p className="mb-4">
              <strong>Kleedo s.r.o.</strong><br />
              IČO: [IČO společnosti]<br />
              Sídlo: [Adresa]<br />
              E-mail: info@kleedo.app<br />
              Telefon: [Telefonní číslo]
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.2 Pověřenec pro ochranu osobních údajů (DPO)</h3>
            <p className="mb-4">
              Pro záležitosti týkající se ochrany osobních údajů můžete kontaktovat našeho 
              pověřence pro ochranu osobních údajů:<br />
              E-mail: <a href="mailto:dpo@kleedo.app" className="text-primary-500 hover:underline">dpo@kleedo.app</a>
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Účely a právní základy zpracování</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Poskytování služeb (čl. 6 odst. 1 písm. b) GDPR)</h3>
            <p className="mb-4"><strong>Účel:</strong> Plnění smlouvy o poskytování služeb AI recepční</p>
            <p className="mb-4"><strong>Zpracovávané údaje:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Identifikační údaje (jméno, příjmení, název společnosti)</li>
              <li>Kontaktní údaje (e-mail, telefon)</li>
              <li>Přihlašovací údaje k platformě</li>
              <li>Data z telefonních hovorů (zvukové záznamy, přepisy, metadata)</li>
              <li>Kalendářová data a rezervace</li>
              <li>Preference a nastavení služby</li>
            </ul>
            <p className="mb-4"><strong>Doba uchování:</strong> Po dobu trvání smlouvy a 3 roky po jejím ukončení</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Plnění právních povinností (čl. 6 odst. 1 písm. c) GDPR)</h3>
            <p className="mb-4"><strong>Účel:</strong> Plnění účetních a daňových povinností</p>
            <p className="mb-4"><strong>Zpracovávané údaje:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Fakturační údaje (jméno/název, adresa, IČO, DIČ)</li>
              <li>Platební údaje</li>
              <li>Daňové doklady</li>
            </ul>
            <p className="mb-4"><strong>Právní základ:</strong> Zákon č. 563/1991 Sb., o účetnictví</p>
            <p className="mb-4"><strong>Doba uchování:</strong> 10 let od konce zdaňovacího období</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Oprávněný zájem správce (čl. 6 odst. 1 písm. f) GDPR)</h3>
            
            <h4 className="text-lg font-semibold text-white mt-4 mb-2">A) Zlepšování služeb a produktů</h4>
            <p className="mb-4"><strong>Účel:</strong> Analýza kvality služeb, trénování AI modelu, vývoj nových funkcí</p>
            <p className="mb-4"><strong>Zpracovávané údaje:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Anonymizované přepisy hovorů</li>
              <li>Statistiky využívání služby</li>
              <li>Technická data o výkonu systému</li>
            </ul>
            <p className="mb-4"><strong>Oprávněný zájem:</strong> Zlepšování kvality služby a zákaznické zkušenosti</p>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">B) Bezpečnost a prevence podvodů</h4>
            <p className="mb-4"><strong>Účel:</strong> Zajištění bezpečnosti systému, prevence zneužití služby</p>
            <p className="mb-4"><strong>Zpracovávané údaje:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IP adresy</li>
              <li>Logy přístupu</li>
              <li>Bezpečnostní události</li>
            </ul>
            <p className="mb-4"><strong>Oprávněný zájem:</strong> Ochrana před kybernetickými útoky a zneužitím služby</p>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">C) Zákaznická podpora</h4>
            <p className="mb-4"><strong>Účel:</strong> Poskytování technické podpory a řešení problémů</p>
            <p className="mb-4"><strong>Zpracovávané údaje:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Komunikace s podporou (e-maily, chat)</li>
              <li>Záznamy o řešených problémech</li>
            </ul>
            <p className="mb-4"><strong>Oprávněný zájem:</strong> Efektivní řešení dotazů a problémů zákazníků</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.4 Souhlas (čl. 6 odst. 1 písm. a) GDPR)</h3>
            
            <h4 className="text-lg font-semibold text-white mt-4 mb-2">A) Marketingová komunikace</h4>
            <p className="mb-4"><strong>Účel:</strong> Zasílání newsletterů, obchodních sdělení, informací o novinkách</p>
            <p className="mb-4"><strong>Zpracovávané údaje:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>E-mailová adresa</li>
              <li>Jméno</li>
              <li>Preference komunikace</li>
            </ul>
            <p className="mb-4"><strong>Souhlas:</strong> Můžete kdykoliv odvolat kliknutím na odkaz v e-mailu nebo kontaktováním našeho DPO</p>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">B) Cookies a analytické nástroje</h4>
            <p className="mb-4"><strong>Účel:</strong> Analýza návštěvnosti webu, zlepšování uživatelské zkušenosti</p>
            <p className="mb-4"><strong>Zpracovávané údaje:</strong> Viz sekce Cookies níže</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Kategorie příjemců osobních údajů</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Zpracovatelé v EU/EHP</h3>
            
            <h4 className="text-lg font-semibold text-white mt-4 mb-2">Hostingové a cloudové služby</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>AWS Europe (Amazon Web Services):</strong> Hosting aplikace a databází</li>
              <li><strong>Google Cloud Platform (Frankfurt, DE):</strong> Ukládání záloh a souborů</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">Platební služby</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Stripe:</strong> Zpracování platebních karet</li>
              <li><strong>GoPay:</strong> Platební brána pro české zákazníky</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">Komunikační služby</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Twilio:</strong> SMS a WhatsApp komunikace</li>
              <li><strong>SendGrid:</strong> E-mailová komunikace</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Zpracovatelé mimo EU/EHP</h3>
            
            <h4 className="text-lg font-semibold text-white mt-4 mb-2">AI služby</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>OpenAI (USA):</strong> GPT modely pro zpracování hovorů</li>
              <li><strong>Anthropic (USA):</strong> Claude AI modely</li>
              <li><strong>Google Cloud AI (USA):</strong> Rozpoznávání řeči a syntéza hlasu</li>
            </ul>
            <p className="mb-4">
              <strong>Záruky:</strong> Standardní smluvní doložky (SCC) schválené Evropskou komisí, 
              Dodatečná bezpečnostní opatření v souladu s rozhodnutím Schrems II
            </p>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">Analytické nástroje</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Google Analytics:</strong> Analytika webových stránek (s anonymizací IP)</li>
              <li><strong>Mixpanel:</strong> Analytika produktu</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.3 Veřejné orgány</h3>
            <p className="mb-4">
              Osobní údaje můžeme sdílet s veřejnými orgány, pokud nám to ukládá zákon:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Finanční úřad (daňové účely)</li>
              <li>Orgány činné v trestním řízení (na základě zákonného příkazu)</li>
              <li>Úřad pro ochranu osobních údajů (kontrola dodržování GDPR)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Přenos osobních údajů do třetích zemí</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Země a záruky</h3>
            <p className="mb-4">Osobní údaje přenášíme do následujících třetích zemí:</p>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">Spojené státy americké</h4>
            <p className="mb-4"><strong>Příjemci:</strong> OpenAI, Anthropic, Google Cloud AI, Stripe</p>
            <p className="mb-4"><strong>Záruky:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Standardní smluvní doložky (SCC) podle GDPR</li>
              <li>Dodatečná technická a organizační opatření (šifrování, pseudonymizace)</li>
              <li>Pravidelné přezkumy a posouzení dopadu na ochranu údajů (DPIA)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Konkrétní opatření pro OpenAI a Anthropic</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Data jsou přenášena šifrovaně (TLS 1.3)</li>
              <li>Citlivé osobní údaje jsou před odesláním pseudonymizovány</li>
              <li>Využíváme enterprise verze s vylepšenou ochranou dat</li>
              <li>Data nejsou používána k trénování modelů bez našeho souhlasu</li>
              <li>Máme smluvní právo na audit zpracování dat</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Vaše práva podle GDPR</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 Právo na přístup k údajům (čl. 15 GDPR)</h3>
            <p className="mb-4">
              Máte právo získat od nás potvrzení, zda zpracováváme vaše osobní údaje, a pokud ano, 
              máte právo získat přístup k těmto údajům a následujícím informacím:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Účely zpracování</li>
              <li>Kategorie dotčených osobních údajů</li>
              <li>Příjemci nebo kategorie příjemců</li>
              <li>Plánovaná doba uložení</li>
              <li>Informace o vašich právech</li>
            </ul>
            <p className="mb-4">
              <strong>Jak uplatnit:</strong> Pošlete e-mail na <a href="mailto:dpo@kleedo.app" className="text-primary-500 hover:underline">dpo@kleedo.app</a><br />
              <strong>Lhůta vyřízení:</strong> Do 30 dnů
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Právo na opravu (čl. 16 GDPR)</h3>
            <p className="mb-4">
              Máte právo na opravu nepřesných osobních údajů nebo jejich doplnění, 
              pokud jsou neúplné. Většinu údajů můžete upravit přímo ve svém účtu.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.3 Právo na výmaz - "Právo být zapomenut" (čl. 17 GDPR)</h3>
            <p className="mb-4">
              Máte právo požadovat výmaz osobních údajů, pokud je splněn některý z následujících důvodů:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Osobní údaje již nejsou potřebné pro účely, pro které byly shromážděny</li>
              <li>Odvoláte souhlas a neexistuje jiný právní základ pro zpracování</li>
              <li>Vznesete námitku proti zpracování a nepřevažují žádné oprávněné důvody pro zpracování</li>
              <li>Osobní údaje byly zpracovány protiprávně</li>
              <li>Osobní údaje musí být vymazány ke splnění právní povinnosti</li>
            </ul>
            <p className="mb-4">
              <strong>Výjimky:</strong> Nemůžeme vymazat data, která jsme povinni uchovávat ze zákona 
              (např. účetní doklady po dobu 10 let).
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.4 Právo na omezení zpracování (čl. 18 GDPR)</h3>
            <p className="mb-4">
              Máte právo požadovat omezení zpracování v následujících případech:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Popíráte přesnost osobních údajů (na dobu potřebnou k ověření)</li>
              <li>Zpracování je protiprávní, ale požadujete omezení místo výmazu</li>
              <li>Potřebujete údaje pro určení, výkon nebo obhajobu právních nároků</li>
              <li>Vznesli jste námitku proti zpracování (do vyřešení)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.5 Právo na přenositelnost údajů (čl. 20 GDPR)</h3>
            <p className="mb-4">
              Máte právo získat osobní údaje ve strukturovaném, běžně používaném a strojově 
              čitelném formátu a předat je jinému správci. Poskytujeme export v následujících formátech:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>JSON (kompletní data)</li>
              <li>CSV (kontakty, rezervace, hovory)</li>
              <li>ZIP archiv (včetně zvukových záznamů)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.6 Právo vznést námitku (čl. 21 GDPR)</h3>
            <p className="mb-4">
              Máte právo kdykoli vznést námitku proti zpracování vašich osobních údajů, 
              které je prováděno na základě oprávněného zájmu (např. pro účely zlepšování služeb).
            </p>
            <p className="mb-4">
              <strong>Zvláštní právo:</strong> Máte absolutní právo vznést námitku proti zpracování 
              pro účely přímého marketingu. V takovém případě zpracování okamžitě ukončíme.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.7 Právo nebýt předmětem automatizovaného rozhodování (čl. 22 GDPR)</h3>
            <p className="mb-4">
              Máte právo nebýt předmětem rozhodnutí založeného výhradně na automatizovaném 
              zpracování, které má pro vás právní účinky nebo vás obdobně významně ovlivňuje.
            </p>
            <p className="mb-4">
              <strong>V praxi:</strong> Náš AI asistent je nástroj pro automatizaci komunikace, 
              ale důležitá rozhodnutí (např. přijetí zákazníka) zůstávají na vás. Pokud si přejete, 
              můžete kdykoli požádat o lidskou kontrolu jakéhokoli rozhodnutí.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.8 Jak uplatnit svá práva</h3>
            <p className="mb-4">
              Pro uplatnění vašich práv nás kontaktujte:<br />
              E-mail: <a href="mailto:dpo@kleedo.app" className="text-primary-500 hover:underline">dpo@kleedo.app</a><br />
              Telefon: [Telefonní číslo]<br />
              Pošta: Kleedo s.r.o., [Adresa]
            </p>
            <p className="mb-4">
              <strong>Co potřebujeme:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Vaši žádost (co chcete, aby jsme udělali)</li>
              <li>Ověření vaší identity (pro ochranu vašich údajů)</li>
              <li>Případně další informace potřebné k vyřízení žádosti</li>
            </ul>
            <p className="mb-4">
              <strong>Lhůta:</strong> Odpovíme do 30 dnů. V komplikovaných případech můžeme lhůtu 
              prodloužit o další 60 dnů, o čemž vás informujeme.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Bezpečnostní opatření</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Technická opatření</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Šifrování:</strong> TLS 1.3 pro data v přenosu, AES-256 pro data v klidu</li>
              <li><strong>Firewall a IDS/IPS:</strong> Ochrana před neoprávněným přístupem</li>
              <li><strong>Pravidelné bezpečnostní audity:</strong> Penetrační testy každé 3 měsíce</li>
              <li><strong>Monitoring:</strong> 24/7 monitoring bezpečnostních událostí</li>
              <li><strong>Zálohy:</strong> Automatické zálohy každých 6 hodin, uchovávané 30 dnů</li>
              <li><strong>Dvoufaktorová autentizace:</strong> Povinná pro všechny uživatelské účty</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Organizační opatření</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Přístupová práva:</strong> Princip nejnižších nutných oprávnění</li>
              <li><strong>Školení zaměstnanců:</strong> Pravidelné školení o ochraně dat a bezpečnosti</li>
              <li><strong>Smlouvy se zpracovateli:</strong> Všichni zpracovatelé jsou vázáni DPA (Data Processing Agreement)</li>
              <li><strong>Incident response plán:</strong> Dokumentovaný postup pro řešení bezpečnostních incidentů</li>
              <li><strong>Privacy by design:</strong> Ochrana údajů je integrována do všech nových funkcí</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.3 Hlášení bezpečnostních incidentů</h3>
            <p className="mb-4">
              V případě porušení zabezpečení osobních údajů, které může představovat riziko pro vaše 
              práva a svobody, vás budeme informovat do 72 hodin od zjištění incidentu. 
              Závažné incidenty budeme hlásit také Úřadu pro ochranu osobních údajů.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4" id="cookies">7. Používání cookies a podobných technologií</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.1 Co jsou cookies</h3>
            <p className="mb-4">
              Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení při návštěvě 
              našich webových stránek. Umožňují nám rozpoznat vaše zařízení a zapamatovat si vaše 
              preference.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.2 Typy cookies, které používáme</h3>
            
            <h4 className="text-lg font-semibold text-white mt-4 mb-2">A) Nezbytné cookies</h4>
            <p className="mb-4">
              <strong>Účel:</strong> Umožňují základní funkce webu (přihlášení, zabezpečení)<br />
              <strong>Právní základ:</strong> Nezbytné pro poskytování služby<br />
              <strong>Doba uchovávání:</strong> Session nebo 1 rok<br />
              <strong>Souhlas:</strong> Není vyžadován
            </p>
            <p className="mb-4">Příklady:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><code>session_id</code> - identifikátor relace</li>
              <li><code>auth_token</code> - autentizační token</li>
              <li><code>csrf_token</code> - ochrana před CSRF útoky</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">B) Preferenční cookies</h4>
            <p className="mb-4">
              <strong>Účel:</strong> Zapamatování vašich preferencí (jazyk, vzhled)<br />
              <strong>Právní základ:</strong> Oprávněný zájem / Souhlas<br />
              <strong>Doba uchovávání:</strong> 1 rok<br />
              <strong>Souhlas:</strong> Vyžadován
            </p>
            <p className="mb-4">Příklady:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><code>language</code> - preferovaný jazyk</li>
              <li><code>theme</code> - světlý/tmavý režim</li>
              <li><code>cookie_consent</code> - stav souhlasu s cookies</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">C) Analytické cookies</h4>
            <p className="mb-4">
              <strong>Účel:</strong> Měření návštěvnosti a chování uživatelů<br />
              <strong>Právní základ:</strong> Souhlas<br />
              <strong>Doba uchovávání:</strong> 2 roky<br />
              <strong>Souhlas:</strong> Vyžadován
            </p>
            <p className="mb-4">Používané služby:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Google Analytics:</strong> <code>_ga</code>, <code>_gid</code>, <code>_gat</code> (s anonymizací IP)</li>
              <li><strong>Mixpanel:</strong> <code>mp_*</code> cookies pro produktovou analytiku</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">D) Marketingové cookies</h4>
            <p className="mb-4">
              <strong>Účel:</strong> Zobrazování relevantních reklam, remarketing<br />
              <strong>Právní základ:</strong> Souhlas<br />
              <strong>Doba uchovávání:</strong> 1 rok<br />
              <strong>Souhlas:</strong> Vyžadován
            </p>
            <p className="mb-4">Používané služby:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Google Ads:</strong> Remarketingové cookies</li>
              <li><strong>Facebook Pixel:</strong> Sledování konverzí</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.3 Správa cookies</h3>
            <p className="mb-4">
              Můžete kdykoli změnit své preference cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>V nastavení webu:</strong> Klikněte na ikonu cookies v levém dolním rohu</li>
              <li><strong>V prohlížeči:</strong> Nastavení cookies ve vašem prohlížeči</li>
              <li><strong>Nástroje pro opt-out:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary-500 hover:underline">Browser Add-on</a></li>
                  <li>Evropská unie: <a href="https://www.youronlinechoices.eu/" className="text-primary-500 hover:underline">Your Online Choices</a></li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.4 Cookies třetích stran</h3>
            <p className="mb-4">
              Některé cookies pocházejí od třetích stran (Google, Facebook). Tyto služby mají 
              vlastní zásady ochrany soukromí:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><a href="https://policies.google.com/privacy" className="text-primary-500 hover:underline">Google Privacy Policy</a></li>
              <li><a href="https://www.facebook.com/privacy/explanation" className="text-primary-500 hover:underline">Facebook Data Policy</a></li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Právo podat stížnost</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.1 Dozorový úřad</h3>
            <p className="mb-4">
              Pokud se domníváte, že zpracováváme vaše osobní údaje v rozporu s GDPR, 
              máte právo podat stížnost u dozorového úřadu:
            </p>
            <p className="mb-4">
              <strong>Úřad pro ochranu osobních údajů</strong><br />
              Pplk. Sochora 27<br />
              170 00 Praha 7<br />
              Česká republika<br />
              Tel.: +420 234 665 111<br />
              E-mail: <a href="mailto:posta@uoou.cz" className="text-primary-500 hover:underline">posta@uoou.cz</a><br />
              Web: <a href="https://www.uoou.cz" className="text-primary-500 hover:underline">www.uoou.cz</a>
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.2 Jak podat stížnost</h3>
            <p className="mb-4">Stížnost můžete podat:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Elektronicky:</strong> Prostřednictvím e-podatelny ÚOOU</li>
              <li><strong>Písemně:</strong> Poštou na výše uvedenou adresu</li>
              <li><strong>Osobně:</strong> V úředních hodinách ÚOOU</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.3 Před podáním stížnosti</h3>
            <p className="mb-4">
              Snažíme se vyřešit všechny problémy přímo s vámi. Pokud máte jakékoli obavy 
              ohledně zpracování vašich osobních údajů, nejprve nás prosím kontaktujte na 
              <a href="mailto:dpo@kleedo.app" className="text-primary-500 hover:underline"> dpo@kleedo.app</a>. 
              Uděláme vše pro to, abychom váš problém vyřešili ke spokojenosti.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Aktualizace těchto zásad</h2>
            <p className="mb-4">
              Tyto zásady můžeme čas od času aktualizovat, abychom zohlednili změny v našich 
              postupech, technologiích nebo právních požadavcích. O podstatných změnách vás 
              budeme informovat:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>E-mailem na vámi poskytnutou adresu</li>
              <li>Oznámením při přihlášení do platformy</li>
              <li>Prominentním upozorněním na našich webových stránkách</li>
            </ul>
            <p className="mb-4">
              Vždy uvedeme datum poslední aktualizace na začátku tohoto dokumentu.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Kontaktní informace</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.1 Obecné dotazy</h3>
            <p className="mb-4">
              E-mail: <a href="mailto:info@kleedo.app" className="text-primary-500 hover:underline">info@kleedo.app</a><br />
              Telefon: [Telefonní číslo]
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.2 Dotazy k ochraně osobních údajů</h3>
            <p className="mb-4">
              E-mail: <a href="mailto:dpo@kleedo.app" className="text-primary-500 hover:underline">dpo@kleedo.app</a><br />
              (Pověřenec pro ochranu osobních údajů)
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.3 Poštovní adresa</h3>
            <p className="mb-4">
              Kleedo s.r.o.<br />
              [Adresa]<br />
              [PSČ a Město]<br />
              Česká republika
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
