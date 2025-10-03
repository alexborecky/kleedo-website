'use client'

export function FaqSection() {
  const faqs = [
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
  ]

  return (
    <section className="py-24 faq-section">
      <div className="container px-4">
        <div className="faq-wrap">
          <h2 className="faq-title">Často kladené<br/>otázky</h2>

          <div className="faq-panel glass">
            <div className="stroke"></div>
            <div className="faq-list">
              {faqs.map((item, i) => (
                <div className="faq-item" key={i}>
                  <input id={`faqc-${i}`} type="checkbox" className="faq-check" />
                  <label htmlFor={`faqc-${i}`} className="faq-summary">
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
  )
}