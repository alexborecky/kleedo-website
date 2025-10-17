# Kleedo Website

AI recepční pro české podniky - lead collection website s targeted landing pages.

## Funkce

### 🌐 **Jazykové mutace**
- 🇨🇿 **Česká verze** - Hlavní trh s kompletním obsahem
- 🇬🇧 **Anglická verze** - Mezinárodní expanze (`/en`)
- 🔄 **Automatické přepínání** mezi jazyky
- 📝 **Lokalizované překlady** pro všechny komponenty

### 🎯 **Targeted Landing Pages**
- 💇 **Pro salony** (`/pro-salony`) - Kadeřnictví a kosmetika
- 🦷 **Pro zubaře** (`/pro-zubare`) - Zubní ordinace
- 🏢 **Pro firmy** (`/pro-firmy`) - Obecné služby
- 🚗 **Pro autoservisy** (`/medical`) - Automobilové služby
- 🏥 **Medical** (`/medical`) - Zdravotnictví

### 📝 **Content Management**
- 📝 **Blog system** s markdown support
- 📰 **Články** - SEO optimalizované blog posty
- 🔍 **SEO-friendly URLs** pro všechny stránky
- 🏷️ **Tag support** pro kategorizaci

### 💰 **Pricing & Demo**
- 💰 **Pricing page** (`/cenik`) s třemi plány
- 🎬 **Demo page** (`/demo`) pro zkušební verzi
- 📊 **Produkt page** (`/produkt`) s detailními informacemi

### 📧 **Lead Management**
- 📝 **Lead capture forms** s qualification criteria
- 📧 **Email notifications** pro nové leads
- 🔄 **Confirmation emails** pro zákazníky
- 📊 **UTM parameter tracking** v email notifikacích
- 🎯 **Campaign attribution** pro lepší lead qualification

### 📊 **Analytics & Tracking**
- 📊 **Google Analytics 4** s event tracking
- 🎯 **LeadInfo** pro B2B lead tracking
- 🎯 **UTM Parameter Capture** pro campaign tracking
- 🍪 **GDPR Cookie Consent** s plnou compliance
- 🔄 **Session Storage** pro UTM parameter persistence
- 📈 **Comprehensive event tracking** (11 typů událostí)

### 🎨 **UI/UX Features**
- 📱 **Responsive design** s moderním UI
- 🎭 **Interactive animations** s Framer Motion
- 🌈 **Interactive blobs** pro vizuální efekty
- ❓ **FAQ sections** s expandable otázkami
- 🎨 **Modern glassmorphism design**

### 🔧 **Technical Features**
- ⚡ **Next.js 14** s App Router
- 🎨 **Tailwind CSS** pro styling
- 📝 **TypeScript** pro type safety
- 🔄 **React Hook Form** s Zod validation
- 📧 **Nodemailer** pro email systém
- 🍪 **GDPR compliance** s cookie management

## Setup

### 1. Instalace závislostí

```bash
npm install
```

### 2. Environment variables

Vytvořte soubor `.env.local` s následujícími proměnnými:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com

# Lead Notification Email
LEAD_EMAIL=leads@kleedo.app

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXXX

# Leadinfo
NEXT_PUBLIC_LEADINFO_ID=your-leadinfo-id
```

### 3. Spuštění development serveru

```bash
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči.

## Struktura projektu

```
src/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Main landing page (Czech)
│   ├── en/                # English version
│   │   ├── page.tsx       # English homepage
│   │   ├── for-salons/    # English salon page
│   │   ├── for-dentists/  # English dentist page
│   │   ├── for-businesses/# English business page
│   │   ├── pricing/       # English pricing page
│   │   └── blog/          # English blog
│   ├── pro-salony/        # Czech salon targeted page
│   ├── pro-zubare/        # Czech dentist targeted page
│   ├── pro-firmy/         # Czech business targeted page
│   ├── medical/           # Medical/healthcare page
│   ├── cenik/             # Czech pricing page
│   ├── demo/              # Demo page
│   ├── produkt/           # Product details page
│   ├── blog/              # Czech blog system
│   │   ├── [slug]/        # Dynamic blog posts
│   │   └── page.tsx       # Blog listing
│   ├── test-utm/          # UTM testing page
│   ├── cookies/           # Cookie policy page
│   ├── obchodni-podminky/ # Terms of service
│   ├── ochrana-osobnich-udaju/ # Privacy policy
│   ├── gdpr/              # GDPR information
│   └── api/leads/         # Lead capture API
├── components/
│   ├── analytics/         # Google Analytics & LeadInfo components
│   ├── forms/             # Lead capture forms
│   ├── layout/            # Header, Footer, Cookie Banner, Language Switch
│   ├── sections/          # Page sections (Hero, Features, FAQ, etc.)
│   ├── pages/             # Page templates
│   └── visuals/           # Interactive components (blobs, animations)
├── data/
│   ├── blog/              # Blog posts (markdown)
│   └── verticals.json     # Industry-specific content
├── locales/               # Translation files
│   ├── cs.json            # Czech translations
│   └── en.json            # English translations
└── lib/                   # Utility functions & UTM parameter capture
```

## Lead Qualification

Formuláře sbírají následující informace pro qualification:

1. **Business type** - salon, medical, auto, atd.
2. **Company size** - solo, 2-5, 5-10, 10+ zaměstnanců
3. **Call volume** - 0-5, 5-15, 15-30, 30+ hovorů denně
4. **Contact details** - jméno, email, telefon, firma

## Email System

- Automatické notifikace pro nové leads
- Confirmation emails pro zákazníky
- Plná integrace s Nodemailer
- **UTM parameter tracking** v email notifikacích
- **Campaign attribution** pro lepší lead qualification

## Blog System

- Markdown-based blog posts
- Automatické generování stránek
- SEO-friendly URLs
- Tag support

## Internationalization (i18n)

### Language Support
- **Czech (cs)** - Primary language, complete content
- **English (en)** - International expansion
- **Automatic language detection** based on URL path
- **Language switching** with persistent selection

### Translation System
- **JSON-based translations** (`/locales/`)
- **Component-level translations** with `t()` function
- **Locale provider** for context management
- **Language-specific routing** (`/en/` prefix)

### Localized Content
- **Homepage variants** for each language
- **Industry-specific pages** in both languages
- **Blog system** with language support
- **Pricing pages** with localized content
- **Legal pages** (Terms, Privacy, GDPR) in Czech

### URL Structure
```
/                    # Czech homepage
/en/                 # English homepage
/pro-salony/         # Czech salon page
/en/for-salons/      # English salon page
/cenik/              # Czech pricing
/en/pricing/         # English pricing
/blog/               # Czech blog
/en/blog/            # English blog
```

## Analytics & Tracking

### Google Analytics 4 Integration
- **Event tracking** pro všechny user interactions
- **Lead generation tracking** s UTM parameters
- **Form submission tracking** s detailed analytics
- **Campaign attribution** pro marketing campaigns
- **Consent management** s GDPR compliance

### LeadInfo Integration
- **Lead tracking** pro B2B lead generation
- **Company identification** automaticky
- **Consent management** integrovaný s cookie banner

### UTM Parameter Capture
- **Automatic UTM detection** z URL parameters
- **Session persistence** across page navigation
- **Campaign tracking** pro marketing attribution
- **Lead form integration** s UTM data
- **Email notifications** s campaign information

### Tracked Events
- `button_click` - Button interactions
- `cta_click` - Call-to-action clicks
- `form_start` - Form engagement
- `form_submit` - Form completions
- `generate_lead` - Lead generation s UTM data
- `utm_capture` - UTM parameter detection
- `campaign_attribution` - Campaign tracking
- `demo_request` - Demo requests
- `pricing_click` - Pricing plan interactions
- `video_play` - Video engagement
- `scroll_depth` - Page engagement

### Campaign URLs
Použijte tyto URL formáty pro campaign tracking:

```
https://kleedo.cz/?utm_source=google&utm_medium=cpc&utm_campaign=ai-recepci
https://kleedo.cz/?utm_source=facebook&utm_medium=social&utm_campaign=spring-promo
https://kleedo.cz/?utm_source=email&utm_medium=newsletter&utm_campaign=monthly-update
```

## GDPR Compliance

### Cookie Management
- **Consent banner** s granular controls
- **Analytics consent** - opt-in required
- **Marketing consent** - opt-in required
- **Consent persistence** across sessions
- **Consent audit trail** s unique IDs

### Data Protection
- **UTM parameter storage** pouze v sessionStorage
- **Lead data encryption** v email notifications
- **GDPR-compliant** data processing
- **Right to deletion** support

## Deployment

### Vercel (doporučeno)

1. Push kód do GitHub repository
2. Connect repository s Vercel
3. Nastavte environment variables v Vercel dashboard
4. Deploy

### Jiné platformy

```bash
npm run build
npm start
```

## Marketing Strategy

### Target Audiences

**Primary:**
- Salony a kadeřnictví
- Soukromé ordinace (lékaři, zubaři)
- Autoservisy a služby

**Secondary:**
- Restaurace
- Realitní kanceláře
- Právní kanceláře

### Lead Qualification Criteria

- **High value:** SMB s vysokým call volume
- **Medium value:** Střední firmy s průměrným call volume
- **Low value:** Solo podnikatelé s nízkým call volume

### Success Metrics

- **Conversion rate:** min. 5%, ideálně 8-10%
- **Cost per qualified lead:** < 500 CZK
- **Response rate:** 30-40% z leads odpoví na follow-up
- **Campaign attribution:** 100% UTM parameter capture
- **Analytics coverage:** 95%+ event tracking

## Testing

### UTM Parameter Testing
Pro testování UTM parameter capture:

1. **Test page**: `/test-utm`
2. **Debug information**: Real-time UTM parameter display
3. **Interactive testing**: Custom URL testing
4. **Session storage**: UTM parameter persistence

### Campaign Testing URLs
```
/test-utm?utm_source=google&utm_medium=cpc&utm_campaign=ai-recepci&utm_term=salon&utm_content=hero-banner
/test-utm?utm_source=facebook&utm_medium=social&utm_campaign=spring-promo
```

### Analytics Testing
- **Google Analytics**: Check Real-time reports
- **LeadInfo**: Verify lead tracking
- **Console logs**: Debug UTM parameter capture
- **Email notifications**: Verify UTM data in emails

## Kontakt

Pro otázky ohledně projektu kontaktujte: info@kleedo.app
# kleedo-website
