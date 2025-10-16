// Analytics tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track custom events to Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    page_location: location,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track CTA clicks
 */
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmit = (formName: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track form starts (user begins filling)
 */
export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    form_name: formName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track link clicks
 */
export const trackLinkClick = (linkText: string, linkUrl: string, location: string) => {
  trackEvent('link_click', {
    link_text: linkText,
    link_url: linkUrl,
    page_location: location,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track page views (for SPA navigation)
 */
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-WWRP1D77KB', {
      page_path: url,
      page_title: title,
    });
  }
};

/**
 * Track pricing plan clicks
 */
export const trackPricingClick = (planName: string, planPrice: string) => {
  trackEvent('pricing_click', {
    plan_name: planName,
    plan_price: planPrice,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track demo requests
 */
export const trackDemoRequest = (source: string) => {
  trackEvent('demo_request', {
    source,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track lead generation
 */
export const trackLeadGeneration = (leadData: {
  businessType: string;
  source: string;
  companySize?: string;
}) => {
  trackEvent('generate_lead', {
    ...leadData,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track video plays
 */
export const trackVideoPlay = (videoName: string, location: string) => {
  trackEvent('video_play', {
    video_name: videoName,
    page_location: location,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number, page: string) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    page_location: page,
    timestamp: new Date().toISOString(),
  });
};

