# Analytics Tracking - Usage Examples

## 🎯 Quick Reference for Adding Tracking to Your Components

### Import the tracking functions

```typescript
import { 
  trackButtonClick,
  trackCTAClick,
  trackFormSubmit,
  trackPricingClick,
  trackDemoRequest,
  trackLinkClick
} from '@/lib/analytics';
```

## Real Examples

### 1. Track CTA Button Clicks

**Before:**
```typescript
<button 
  onClick={() => router.push('/demo')}
  className="btn-primary"
>
  Vyzkoušet zdarma
</button>
```

**After:**
```typescript
<button 
  onClick={() => {
    trackCTAClick('try-free', 'hero-section');
    router.push('/demo');
  }}
  className="btn-primary"
>
  Vyzkoušet zdarma
</button>
```

### 2. Track Pricing Plan Clicks

**Before:**
```typescript
<Link href="/demo?plan=premium">
  Vybrat plán
</Link>
```

**After:**
```typescript
<Link 
  href="/demo?plan=premium"
  onClick={() => trackPricingClick('Premium', '2990 Kč/měsíc')}
>
  Vybrat plán
</Link>
```

### 3. Track Demo Requests

**Before:**
```typescript
const handleDemoClick = () => {
  router.push('/demo');
};
```

**After:**
```typescript
const handleDemoClick = (source: string) => {
  trackDemoRequest(source);
  router.push('/demo');
};
```

### 4. Track Navigation Links

**Before:**
```typescript
<Link href="/blog">
  Náš blog
</Link>
```

**After:**
```typescript
<Link 
  href="/blog"
  onClick={() => trackLinkClick('Blog', '/blog', 'footer')}
>
  Náš blog
</Link>
```

### 5. Track Contact/Phone Clicks

**Before:**
```typescript
<a href="tel:+420123456789">
  Zavolat
</a>
```

**After:**
```typescript
<a 
  href="tel:+420123456789"
  onClick={() => trackButtonClick('call-button', 'header')}
>
  Zavolat
</a>
```

## 📊 What Gets Tracked Automatically

These events are **already configured** and tracking:

✅ **Lead Form:**
- Form start (when user clicks any field)
- Form submission
- Lead generation with business type and company size

✅ **Page Views:**
- All page navigation
- Time on page
- Bounce rate

## 🎨 Recommended Tracking Strategy

### Hero Section
Track all primary CTAs:
```typescript
trackCTAClick('hero-cta-primary', 'hero-section')
trackCTAClick('hero-cta-secondary', 'hero-section')
```

### Features Section
Track "Learn More" buttons:
```typescript
trackButtonClick('feature-learn-more', `features-${featureName}`)
```

### Pricing Section
Track all plan selections:
```typescript
trackPricingClick(planName, price)
trackCTAClick('pricing-select-plan', `pricing-${planName}`)
```

### Footer
Track important links:
```typescript
trackLinkClick('Privacy Policy', '/gdpr', 'footer')
trackLinkClick('Terms', '/obchodni-podminky', 'footer')
```

## 📈 Viewing Your Data

### Google Analytics 4
1. Go to: https://analytics.google.com
2. Select your property (Kleedo)
3. Navigate to: **Reports → Engagement → Events**

You'll see all custom events:
- `button_click`
- `cta_click`
- `form_submit`
- `form_start`
- `generate_lead`
- `pricing_click`
- `demo_request`
- `link_click`

### Creating Custom Reports

1. Go to **Explore** in GA4
2. Create a new exploration
3. Add dimensions: `event_name`, `button_name`, `page_location`
4. Add metrics: `Event count`, `Users`

This lets you see:
- Which buttons get the most clicks
- Which CTAs convert best
- Where users drop off in the funnel
- Which pricing plans are most popular

## 🚀 Pro Tips

### 1. Consistent Naming
Use kebab-case for button names:
```typescript
trackButtonClick('request-demo', 'hero')     // ✅ Good
trackButtonClick('Request Demo', 'Hero')     // ❌ Inconsistent
```

### 2. Track by Section
Include the section/location:
```typescript
trackCTAClick('view-pricing', 'features-section')
trackCTAClick('view-pricing', 'footer')
// Now you can compare which location converts better!
```

### 3. Track User Intent
For different paths to the same action:
```typescript
// From pricing page
trackDemoRequest('pricing-page')

// From blog
trackDemoRequest('blog-cta')

// From hero
trackDemoRequest('hero-section')
```

## 🔍 Debugging

To test if tracking works:

1. **Open Browser Console**
2. **Check for gtag calls:**
```javascript
// In console, you'll see:
gtag('event', 'button_click', {...})
```

3. **Use GA4 Debug View:**
   - Install: [Google Analytics Debugger Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
   - Events appear in real-time

4. **Check Real-Time Reports:**
   - GA4 → Reports → Realtime
   - Click buttons on your site
   - See events appear instantly

## ✅ Already Tracked (No Action Needed)

The LeadCaptureForm is fully tracked:
- ✅ Form start
- ✅ Form submission
- ✅ Lead generation
- ✅ Business type
- ✅ Source tracking

## 🎯 Recommended Next Steps

1. **Add tracking to hero CTAs** (highest priority)
2. **Add tracking to pricing page** (conversion tracking)
3. **Add tracking to navigation menu** (user flow)
4. **Add tracking to social media links** (external traffic)

Would you like me to add tracking to specific sections? Just point me to the component!

