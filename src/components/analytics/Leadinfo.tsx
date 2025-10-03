'use client'

import Script from 'next/script'

export function Leadinfo() {
  const LEADINFO_ID = process.env.NEXT_PUBLIC_LEADINFO_ID

  if (!LEADINFO_ID) {
    return null
  }

  return (
    <Script id="leadinfo" strategy="afterInteractive">
      {`
        (function(l,e,a,d,i,n,f,o){
          l['LeadinfoObject']=i;l[i]=l[i]||function(){(l[i].q=l[i].q||[]).push(arguments)},
          l[i].l=1*new Date();o=e.createElement(a),f=e.getElementsByTagName(a)[0];
          o.async=1;o.src=d;f.parentNode.insertBefore(o,f)
        })(window,document,'script','https://l.leadinfo.com/leadinfo.js','li');
      `}
    </Script>
  )
}
