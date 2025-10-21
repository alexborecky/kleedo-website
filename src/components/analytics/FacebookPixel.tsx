'use client'

import Script from 'next/script'

export function FacebookPixel() {
  const PIXEL_ID = '1859793331622261'

  return (
    <>
      {/* Facebook Pixel Code */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      
      {/* Facebook Pixel noscript fallback */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}

// Facebook Pixel tracking functions
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Track Facebook Pixel Lead event
 */
export const trackFacebookLead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};

/**
 * Track Facebook Pixel Purchase event
 */
export const trackFacebookPurchase = (value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency || 'CZK'
    });
  }
};

/**
 * Track Facebook Pixel CompleteRegistration event
 */
export const trackFacebookRegistration = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration');
  }
};

/**
 * Track Facebook Pixel Contact event
 */
export const trackFacebookContact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  }
};
