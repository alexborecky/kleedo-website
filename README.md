# Kleedo Website

AI recepční pro české podniky - lead collection website s targeted landing pages.

## Funkce

- 🎯 **Targeted landing pages** pro salony, ordinace a autoservisy
- 📝 **Lead capture forms** s qualification criteria
- 📧 **Email notifications** pro nové leads
- 📱 **Responsive design** s moderním UI
- 📝 **Blog system** s markdown support
- 💰 **Pricing page** s třemi plány
- ❓ **FAQ sections** s expandable otázkami

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
│   ├── page.tsx           # Main landing page
│   ├── salons/            # Salon targeted page
│   ├── medical/           # Medical targeted page
│   ├── auto/              # Auto services targeted page
│   ├── pricing/           # Pricing page
│   ├── demo/              # Demo page
│   ├── blog/              # Blog system
│   └── api/leads/         # Lead capture API
├── components/
│   ├── forms/             # Lead capture forms
│   ├── layout/            # Header, Footer, etc.
│   └── sections/          # Page sections
├── data/blog/             # Blog posts (markdown)
└── lib/                   # Utility functions
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

## Blog System

- Markdown-based blog posts
- Automatické generování stránek
- SEO-friendly URLs
- Tag support

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

## Kontakt

Pro otázky ohledně projektu kontaktujte: info@kleedo.app
