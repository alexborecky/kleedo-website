import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieManager } from '@/components/layout/CookieManager'

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl text-page">
        <h1 className="text-4xl font-bold text-white mb-8">Zásady používání cookies</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <p>
            Na webu Kleedo používáme cookies a obdobné technologie, které nám pomáhají zajistit správné fungování webu,
            měřit jeho návštěvnost a zlepšovat uživatelskou zkušenost. Některé cookies jsou nezbytné, jiné vyžadují váš souhlas.
          </p>

          <h2>1. Co jsou cookies</h2>
          <p>
            Cookies jsou malé textové soubory, které se ukládají ve vašem zařízení při návštěvě webových stránek.
            Pomáhají nám rozpoznat váš prohlížeč, zapamatovat si vaše volby a porozumět, jak web používáte.
          </p>

          <h2>2. Typy cookies, které používáme</h2>
          <ul>
            <li><strong>Nezbytné cookies:</strong> umožňují základní funkce webu, např. zabezpečené přihlášení nebo odesílání formulářů.</li>
            <li><strong>Analytické cookies:</strong> pomáhají nám měřit návštěvnost a zlepšovat obsah. Spouštíme je pouze po udělení souhlasu.</li>
            <li><strong>Marketingové cookies:</strong> používáme je pro měření výkonu kampaní a personalizaci reklam. Aktivují se až po vašem souhlasu.</li>
          </ul>

          <h2>3. Přehled používaných cookies</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-600 px-4 py-3 text-left">Typ</th>
                  <th className="border border-gray-600 px-4 py-3 text-left">Poskytovatel</th>
                  <th className="border border-gray-600 px-4 py-3 text-left">Název</th>
                  <th className="border border-gray-600 px-4 py-3 text-left">Účel</th>
                  <th className="border border-gray-600 px-4 py-3 text-left">Doba uchování</th>
                  <th className="border border-gray-600 px-4 py-3 text-left">Právní základ</th>
                  <th className="border border-gray-600 px-4 py-3 text-left">Odkaz na třetí stranu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-3">Nezbytný</td>
                  <td className="border border-gray-600 px-4 py-3">Vercel</td>
                  <td className="border border-gray-600 px-4 py-3">__cf_bm</td>
                  <td className="border border-gray-600 px-4 py-3">Zajištění bezpečnosti a výkonu webu</td>
                  <td className="border border-gray-600 px-4 py-3">Relace</td>
                  <td className="border border-gray-600 px-4 py-3">Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR)</td>
                  <td className="border border-gray-600 px-4 py-3">
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">
                      Zásady ochrany soukromí Vercel
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-3">Analytický</td>
                  <td className="border border-gray-600 px-4 py-3">Google Analytics 4</td>
                  <td className="border border-gray-600 px-4 py-3">_ga, _gid, _ga_*</td>
                  <td className="border border-gray-600 px-4 py-3">Měření návštěvnosti a chování uživatelů</td>
                  <td className="border border-gray-600 px-4 py-3">2 roky (_ga), 24 hodin (_gid)</td>
                  <td className="border border-gray-600 px-4 py-3">Souhlas (čl. 6 odst. 1 písm. a) GDPR)</td>
                  <td className="border border-gray-600 px-4 py-3">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">
                      Zásady ochrany soukromí Google
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-3">Marketingový</td>
                  <td className="border border-gray-600 px-4 py-3">Google Ads</td>
                  <td className="border border-gray-600 px-4 py-3">_gcl_au, _gcl_aw</td>
                  <td className="border border-gray-600 px-4 py-3">Měření konverzí z reklamních kampaní</td>
                  <td className="border border-gray-600 px-4 py-3">3 měsíce</td>
                  <td className="border border-gray-600 px-4 py-3">Souhlas (čl. 6 odst. 1 písm. a) GDPR)</td>
                  <td className="border border-gray-600 px-4 py-3">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">
                      Zásady ochrany soukromí Google
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-3">Marketingový</td>
                  <td className="border border-gray-600 px-4 py-3">Meta (Facebook, Instagram)</td>
                  <td className="border border-gray-600 px-4 py-3">_fbp</td>
                  <td className="border border-gray-600 px-4 py-3">Optimalizace a měření kampaní</td>
                  <td className="border border-gray-600 px-4 py-3">3 měsíce</td>
                  <td className="border border-gray-600 px-4 py-3">Souhlas (čl. 6 odst. 1 písm. a) GDPR)</td>
                  <td className="border border-gray-600 px-4 py-3">
                    <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">
                      Zásady ochrany soukromí Meta
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-3">Marketingový</td>
                  <td className="border border-gray-600 px-4 py-3">Leadinfo</td>
                  <td className="border border-gray-600 px-4 py-3">leadinfo_session_id</td>
                  <td className="border border-gray-600 px-4 py-3">Identifikace návštěv firem na základě IP adresy</td>
                  <td className="border border-gray-600 px-4 py-3">Relace</td>
                  <td className="border border-gray-600 px-4 py-3">Souhlas (čl. 6 odst. 1 písm. a) GDPR)</td>
                  <td className="border border-gray-600 px-4 py-3">
                    <a href="https://www.leadinfo.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">
                      Zásady ochrany soukromí Leadinfo
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>4. Jak spravovat cookies</h2>
          <p>
            Nastavení cookies můžete kdykoliv změnit kliknutím na odkaz „Nastavení cookies" v patičce webu.
            Svůj souhlas můžete také odvolat smazáním cookies v nastavení vašeho prohlížeče.
          </p>

          <h2>5. Další informace</h2>
          <p>
            Více informací o tom, jak zpracováváme osobní údaje, naleznete v sekci{' '}
            <a href="/ochrana-osobnich-udaju" className="text-primary-500 hover:underline">Ochrana osobních údajů</a>.
          </p>

          <p className="text-sm text-gray-400 mt-8">Poslední aktualizace: 17. ledna 2025</p>
        </div>
      </div>
      <Footer />
      <CookieManager />
    </main>
  )
}
