'use client'

import Script from 'next/script'

export function Leadinfo() {
  const LEADINFO_ID = process.env.NEXT_PUBLIC_LEADINFO_ID || 'LI-68EE7FA20E7A0'

  return (
    <Script id="leadinfo" strategy="afterInteractive">
      {`
        (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];
        l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;
        l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}
        }(window,document,'script','https://cdn.leadinfo.net/ping.js','leadinfo','${LEADINFO_ID}'));
      `}
    </Script>
  )
}
