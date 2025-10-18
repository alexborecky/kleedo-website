'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-WWRP1D77KB'
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PH4JKMXM'

  // Debug logging
  console.log('GoogleAnalytics component rendering with ID:', GA_TRACKING_ID)

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Set default consent - allow analytics for basic tracking
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          
          gtag('config', '${GA_TRACKING_ID}');
          
          // Debug: Log that GA is initialized
          console.log('Google Analytics initialized with ID:', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  )
}
