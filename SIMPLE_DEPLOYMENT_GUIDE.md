# Simple Deployment Guide - Step by Step

## What You Need to Understand

### 1. GitHub = Your Code Storage
- Your website code is saved here
- Like a backup in the cloud
- You "push" changes to save them

### 2. Vercel = Your Website Host
- Makes your website available online
- Connects to GitHub
- Updates automatically when you push changes
- **Free plan available!**

### 3. SMTP = Email Sending
- Lets your website send emails
- Uses your Gmail account
- Needs a special "app password"

## Step-by-Step Deployment

### Step 1: Fix GitHub Authentication

**Problem:** GitHub doesn't accept regular passwords anymore.

**Solution A - Use GitHub Desktop (Easiest):**
1. Download: https://desktop.github.com/
2. Install and sign in
3. Open your project: File → Add Local Repository
4. Select: `/Users/alexandrborecky/kleedo-website`
5. Click "Push origin" to upload changes

**Solution B - Use Personal Access Token:**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name it: "Kleedo Website"
4. Select "repo" permission
5. Click "Generate"
6. Copy the token (starts with `ghp_`)
7. In terminal, when asked for password, paste this token

### Step 2: Set Up Vercel (Free!)

**What is Vercel?** It's where your website will live online (like GoDaddy or HostGator, but better for modern websites).

1. **Sign up:**
   - Go to: https://vercel.com
   - Click "Sign Up"
   - Use "Continue with GitHub" (easiest)

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Find "kleedo-website" from your GitHub
   - Click "Import"

3. **Configure:**
   - Framework: Next.js (auto-detected)
   - Root Directory: `./`
   - Click "Deploy"
   - Wait 1-2 minutes

🎉 **Your website is now live!** You'll get a URL like: `kleedo-website.vercel.app`

### Step 3: Set Up Email Notifications

**Why?** So you get notified when someone fills out your lead form.

1. **Get Gmail App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - (You might need to enable 2-factor authentication first)
   - Create app password: "Kleedo Website"
   - Copy the 16-character password (looks like: `abcd efgh ijkl mnop`)

2. **Add to Vercel:**
   - Go to your Vercel project
   - Settings → Environment Variables
   - Add these one by one:

   ```
   Name: SMTP_HOST
   Value: smtp.gmail.com
   
   Name: SMTP_PORT
   Value: 587
   
   Name: SMTP_USER
   Value: your-gmail@gmail.com
   
   Name: SMTP_PASS
   Value: (paste the 16-character app password)
   
   Name: SMTP_FROM
   Value: noreply@kleedo.cz
   
   Name: LEAD_EMAIL
   Value: sales@kleedo.cz (where you want lead notifications)
   ```

3. **Redeploy:**
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"

### Step 4: Connect Your Domain (Optional)

**Want kleedo.cz instead of vercel.app?**

1. In Vercel: Settings → Domains
2. Add your domain: `kleedo.cz`
3. Vercel will show you DNS settings
4. Add these to your domain provider (where you bought kleedo.cz)
5. Wait 24-48 hours for DNS to update

## What's Already Working

✅ **Analytics - All Configured:**
- Google Analytics: Tracking page views, users, behavior
- Google Tag Manager: Advanced tracking & marketing pixels
- Leadinfo: Identifying B2B company visitors

✅ **Form Tracking:**
- When users start filling forms
- When they submit
- What type of business they are
- Source of the lead

✅ **Custom Events:**
- Ready to track button clicks
- CTA performance
- Pricing interest
- And more (see TRACKING_EXAMPLES.md)

## Testing Everything

### 1. Check Your Live Site:
- Visit your Vercel URL
- Browse around
- Fill out the contact form (use your real email to test)

### 2. Check Analytics:
- Google Analytics: https://analytics.google.com
- Go to Reports → Realtime
- You should see yourself as a visitor!

### 3. Check Email:
- Submit a lead form
- You should receive an email at `LEAD_EMAIL`
- The person filling form gets confirmation email

### 4. Check Leadinfo (B2B Tracking):
- Go to: https://app.leadinfo.com
- See which companies visit your site
- View their behavior and interests

## Common Issues & Solutions

### "Can't push to GitHub"
→ Use GitHub Desktop OR get a Personal Access Token (see Step 1)

### "Email not sending"
→ Check you used the APP PASSWORD from Google, not your regular Gmail password

### "Analytics not showing data"
→ Wait 24-48 hours for full data. Real-time should work immediately.

### "Website shows error after deployment"
→ Check Vercel deployment logs for errors
→ Make sure all environment variables are set

### "Domain not working"
→ DNS changes take 24-48 hours
→ Check DNS settings match exactly what Vercel shows

## Costs

**Free:**
- ✅ Vercel hosting (for your website size)
- ✅ GitHub (for your code)
- ✅ Google Analytics
- ✅ Google Tag Manager

**Paid:**
- 💰 Leadinfo (check your subscription)
- 💰 Domain name (kleedo.cz) - usually ~$10-15/year
- 💰 Gmail is free, but business email might cost if you upgrade

## Quick Reference

**Push code changes:**
```bash
git add .
git commit -m "Your changes"
git push origin main
```
(Vercel auto-deploys within 1-2 minutes)

**View your live site:**
- Vercel dashboard shows your URL
- Or use your custom domain

**Check analytics:**
- GA4: https://analytics.google.com
- GTM: https://tagmanager.google.com
- Leadinfo: https://app.leadinfo.com

**Vercel dashboard:**
- https://vercel.com/dashboard

## Next Steps After Deployment

1. **Test everything** (forms, analytics, emails)
2. **Add your custom domain** (if you haven't)
3. **Monitor analytics** for first week
4. **Review leads** coming in
5. **Optimize** based on data

## Getting Help

**Vercel Help:**
- https://vercel.com/docs
- https://vercel.com/support

**Next.js (your framework):**
- https://nextjs.org/docs

**Your Project Docs:**
- See `DEPLOYMENT.md` for detailed info
- See `TRACKING_EXAMPLES.md` for adding more analytics
- See `READY_TO_DEPLOY.md` for checklist

---

## TL;DR - Absolute Minimum Steps

1. **Fix Git:** Use GitHub Desktop or get Personal Access Token
2. **Push code:** `git push origin main` (or use GitHub Desktop)
3. **Deploy on Vercel:** Sign up → Import from GitHub → Deploy
4. **Add email settings:** Vercel → Settings → Environment Variables
5. **Done!** 🎉

Your analytics (Google, Leadinfo) are already configured and will work immediately!

