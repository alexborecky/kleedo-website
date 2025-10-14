# Analytics Setup - Quick Reference

## ✅ What's Been Configured

### 1. Google Analytics & Tag Manager - READY ✓
- **GA4 ID:** `G-WWRP1D77KB` - Already integrated
- **GTM ID:** `GTM-PH4JKMXM` - Already integrated
- Both are hardcoded and will work immediately after deployment

### 2. Leadinfo - READY ✓
- **ID:** `LI-68EE7FA20E7A0` - Already integrated!
- **Purpose:** Identifies B2B companies visiting your website
- **Dashboard:** https://app.leadinfo.com/

**What it does:**
- Identifies companies by IP address
- Shows which pages they visit
- Provides company contact information
- Tracks visit patterns and interests

### 3. Email for Leads - NEEDS CONFIGURATION ⚠️
Set these in Vercel Environment Variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@kleedo.cz
LEAD_EMAIL=sales@kleedo.cz
```

**For Gmail App Password:**
1. Go to: https://myaccount.google.com/apppasswords
2. Create new app password
3. Use that as `SMTP_PASS`

## 📊 Custom Event Tracking Available

You can now track specific user actions. Here are examples:

### Track Button Clicks
```typescript
import { trackButtonClick } from '@/lib/analytics';

<button onClick={() => {
  trackButtonClick('request-demo', 'hero-section');
  // your existing code
}}>
```

### Track CTA Clicks
```typescript
import { trackCTAClick } from '@/lib/analytics';

<Link 
  href="/cenik" 
  onClick={() => trackCTAClick('view-pricing', 'features-section')}
>
```

### Track Form Submissions
```typescript
import { trackFormSubmit } from '@/lib/analytics';

const handleSubmit = async (data) => {
  trackFormSubmit('lead-form', {
    businessType: data.businessType,
    source: 'demo-page'
  });
  // submit logic
};
```

### Other Tracking Functions
- `trackPricingClick(planName, price)` - Track pricing selections
- `trackDemoRequest(source)` - Track demo request origins
- `trackVideoPlay(videoName, location)` - Track video engagement
- `trackLinkClick(text, url, location)` - Track external links

## 🚀 Deployment Steps

### Ready to Deploy!
1. Set up Gmail app password (see above)
2. Add SMTP environment variables to Vercel
3. Deploy!

All analytics tracking is already configured and will work immediately.

## 🔧 Vercel Environment Variables Setup

1. Go to your Vercel project
2. Settings → Environment Variables
3. Add these:

**Analytics (Optional - already hardcoded):**
- `NEXT_PUBLIC_GA_ID` = `G-WWRP1D77KB` (already hardcoded)
- `NEXT_PUBLIC_GTM_ID` = `GTM-PH4JKMXM` (already hardcoded)
- `NEXT_PUBLIC_LEADINFO_ID` = `LI-68EE7FA20E7A0` (already hardcoded)

**Email (Required for lead notifications):**
- `SMTP_HOST` = `smtp.gmail.com`
- `SMTP_PORT` = `587`
- `SMTP_USER` = your email
- `SMTP_PASS` = your app password
- `SMTP_FROM` = noreply@kleedo.cz
- `LEAD_EMAIL` = sales@kleedo.cz

## 📈 What You'll Be Able to Track

### Automatically Tracked (Already Working):
- ✅ Page views
- ✅ Sessions
- ✅ User demographics
- ✅ Traffic sources
- ✅ Bounce rate
- ✅ Time on site

### With Custom Events (Available Now):
- 🎯 Button clicks by location
- 🎯 CTA performance
- 🎯 Form completion rates
- 🎯 Pricing plan interest
- 🎯 Demo request sources
- 🎯 User journey paths

### With Leadinfo (✅ Configured!):
- 🏢 Company visitors identified
- 🏢 Industry information
- 🏢 Company size
- 🏢 Visit patterns
- 🏢 Pages viewed per company
- 🏢 Contact information for potential B2B clients

## 🎉 You're Ready to Deploy!

Everything is set up and ready to go!

**Analytics - All Done:**
- ✅ Google Analytics (done)
- ✅ GTM (done)
- ✅ Leadinfo (done)

**Still Need:**
- ⚠️ Email credentials (add to Vercel)

