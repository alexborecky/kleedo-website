// Analytics tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
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
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}) => {
  // Track in Google Analytics
  trackEvent('generate_lead', {
    ...leadData,
    timestamp: new Date().toISOString(),
  });
  
  // Track in Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
  
  // Track Google Ads conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion_event_submit_lead_form_2', {
      business_type: leadData.businessType,
      source: leadData.source,
      utm_source: leadData.utm_source,
      utm_medium: leadData.utm_medium,
      utm_campaign: leadData.utm_campaign,
      utm_term: leadData.utm_term,
      utm_content: leadData.utm_content,
      timestamp: new Date().toISOString(),
    });
  }
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

/**
 * Track UTM parameter capture
 */
export const trackUTMCapture = (utmParams: {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}) => {
  trackEvent('utm_capture', {
    ...utmParams,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track campaign attribution
 */
export const trackCampaignAttribution = (campaignData: {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  page_location: string;
}) => {
  trackEvent('campaign_attribution', {
    ...campaignData,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Google Ads conversion tracking with delayed navigation
 * Helper function to delay opening a URL until a gtag event is sent
 */
export const gtagSendEvent = (url: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const callback = function () {
      if (typeof url === 'string') {
        window.location.href = url;
      }
    };
    
    window.gtag('event', 'conversion_event_submit_lead_form_2', {
      event_callback: callback,
      event_timeout: 2000,
      ...eventParams
    });
    return false;
  }
  return false;
};

/**
 * Track Google Ads conversion with navigation
 */
export const trackGoogleAdsConversionWithNavigation = (
  url: string, 
  leadData?: {
    businessType?: string;
    source?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  }
) => {
  const eventParams = leadData ? {
    business_type: leadData.businessType,
    source: leadData.source,
    utm_source: leadData.utm_source,
    utm_medium: leadData.utm_medium,
    utm_campaign: leadData.utm_campaign,
    utm_term: leadData.utm_term,
    utm_content: leadData.utm_content,
    timestamp: new Date().toISOString(),
  } : {};
  
  return gtagSendEvent(url, eventParams);
};

/**
 * Direct Google Ads conversion tracking for testing
 * Use this to test if Google Ads can detect the conversion
 */
export const trackGoogleAdsConversionDirect = (eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion_event_submit_lead_form_2', {
      business_type: 'demo',
      source: 'demo_page',
      timestamp: new Date().toISOString(),
      ...eventParams
    });
    console.log('Google Ads conversion event fired: conversion_event_submit_lead_form_2');
  }
};

