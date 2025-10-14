# Kleedo Website - Deployment Guide

## 📊 Analytics & Tracking Setup

Your website is configured with the following tracking tools:

### 1. Google Analytics 4 (GA4)
- **ID:** `G-WWRP1D77KB`
- **Status:** ✅ Configured
- **Dashboard:** [Google Analytics](https://analytics.google.com)

### 2. Google Tag Manager (GTM)
- **ID:** `GTM-PH4JKMXM`
- **Status:** ✅ Configured
- **Dashboard:** [Google Tag Manager](https://tagmanager.google.com)

### 3. Leadinfo (B2B Visitor Tracking)
- **Status:** ⚠️ Needs Configuration
- **Purpose:** Identifies companies visiting your website

## 🔑 Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Google Analytics (Already configured in code)
NEXT_PUBLIC_GA_ID=G-WWRP1D77KB
NEXT_PUBLIC_GTM_ID=GTM-PH4JKMXM

# Leadinfo - Follow setup instructions below
NEXT_PUBLIC_LEADINFO_ID=your-leadinfo-account-id

# Email Configuration for Lead Notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
SMTP_FROM=noreply@kleedo.cz
LEAD_EMAIL=sales@kleedo.cz
```

## 🎯 Leadinfo Setup Instructions

### Finding Your Leadinfo ID

1. **Log in to Leadinfo:**
   - Visit: https://app.leadinfo.com/
   - Sign in with your credentials

2. **Get Your Tracking Code:**
   - Navigate to **Settings** (⚙️ icon)
   - Click on **Tracking Code** or **Website Installation**

3. **Find Your Account ID:**
   - Look for a code snippet similar to:
   ```javascript
   li('account', 'YOUR-ACCOUNT-ID-HERE');
   ```
   - Copy the ID from inside the quotes (e.g., `'LI-12345'` or similar format)

4. **Alternative: Check Email**
   - Leadinfo sends a welcome email with setup instructions
   - Your Account ID should be included there

5. **Add to Environment:**
   - Add the ID to your `.env.local`:
   ```bash
   NEXT_PUBLIC_LEADINFO_ID=YOUR-ACCOUNT-ID-HERE
   ```

### Don't Have Leadinfo Yet?

If you don't have a Leadinfo account:
1. Sign up at: https://www.leadinfo.com
2. Choose a plan (they often have free trials)
3. Complete the account setup
4. Follow the steps above to get your Account ID

**Note:** The website will work fine without Leadinfo - it will just skip B2B visitor tracking.

## 📧 Email Setup (Gmail)

1. **Enable 2-Factor Authentication:**
   - Go to your Google Account settings
   - Enable 2FA if not already enabled

2. **Create App Password:**
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password

3. **Update Environment Variables:**
   ```bash
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx-xxxx-xxxx-xxxx  # The app password
   ```

## 🚀 Deployment to Vercel

1. **Push Your Code:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will detect Next.js automatically

3. **Add Environment Variables:**
   - In Vercel project settings → Environment Variables
   - Add each variable from your `.env.local`
   - Select environments: Production, Preview, Development

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live in ~2 minutes

## 📈 Custom Event Tracking

The website includes custom event tracking for:

- ✅ **Button Clicks** - Track all CTA and button interactions
- ✅ **Form Submissions** - Track lead form completions
- ✅ **Pricing Clicks** - Track which pricing plans users select
- ✅ **Demo Requests** - Track demo request sources
- ✅ **Link Clicks** - Track external link clicks
- ✅ **Video Plays** - Track video engagement

### How to Use Custom Tracking

Import the tracking functions in your components:

```typescript
import { trackButtonClick, trackCTAClick, trackFormSubmit } from '@/lib/analytics';

// Track a button click
<button onClick={() => {
  trackButtonClick('demo-request', 'hero-section');
  // your logic
}}>
  Request Demo
</button>

// Track CTA click
<Link 
  href="/cenik" 
  onClick={() => trackCTAClick('pricing-cta', 'features-section')}
>
  See Pricing
</Link>

// Track form submission
const handleSubmit = async (data) => {
  trackFormSubmit('lead-capture', {
    businessType: data.businessType,
    source: 'homepage'
  });
  // submit form
};
```

## 🔍 Analytics Dashboards

### Google Analytics 4
- **Real-time visitors:** GA4 → Reports → Realtime
- **User behavior:** GA4 → Reports → Engagement
- **Conversions:** GA4 → Reports → Conversions
- **Custom events:** GA4 → Reports → Events

### Google Tag Manager
- **Setup tags:** GTM → Tags
- **Create triggers:** GTM → Triggers
- **Track variables:** GTM → Variables

### Leadinfo
- **View visitors:** Leadinfo → Dashboard
- **Company details:** Leadinfo → Companies
- **Track behavior:** Leadinfo → Visitor Activity

## ✅ Pre-Deployment Checklist

- [ ] All environment variables configured in `.env.local`
- [ ] Email configuration tested (send a test lead)
- [ ] Google Analytics receiving data (check real-time)
- [ ] GTM container published
- [ ] Leadinfo ID configured (if available)
- [ ] Test all forms and CTAs
- [ ] Verify cookie banner works
- [ ] Check mobile responsiveness
- [ ] Test all page routes
- [ ] Review SEO metadata

## 🐛 Troubleshooting

### Leadinfo Not Working
- Check console for warning: "Leadinfo ID not configured"
- Verify the ID format is correct
- Make sure the ID is in `.env.local` with `NEXT_PUBLIC_` prefix
- Rebuild and restart: `npm run build && npm start`

### Google Analytics Not Tracking
- Check browser console for errors
- Verify GA4 property is active in Google Analytics
- Check that tracking ID matches in `.env.local`
- Disable ad blockers during testing

### Forms Not Sending Emails
- Verify SMTP credentials are correct
- Check spam folder
- Review server logs for errors
- Test with: `curl -X POST http://localhost:3000/api/leads -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","phone":"123","company":"Test Co","businessType":"Salon"}'`

## 📞 Support

For issues or questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Vercel Deployment Docs](https://vercel.com/docs)
- Contact: alexandr@kleedo.cz

