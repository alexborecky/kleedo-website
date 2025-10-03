'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed header top-0 z-50" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <div className="container">
        <nav className="nav">
          {/* Stroke layer */}
          <div className="stroke"></div>
          
          {/* Logo */}
          <Link href="/" className="brand">
            <Image 
              src="/images/kleedo-logo.svg" 
              alt="Kleedo" 
              width={80} 
              height={20}
              className="h-5 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="links">
            {/* <Link href="/" className="hover:text-white transition-colors">
              Domů
            </Link>
            <Link href="/produkt" className="hover:text-white transition-colors">
              Produkt
            </Link> */}
            <Link href="/zubari" className="hover:text-white transition-colors">
              Pro zubaře
            </Link>
            <Link href="/salony" className="hover:text-white transition-colors">
              Pro salony
            </Link>
            <Link href="/firmy" className="hover:text-white transition-colors">
              Pro firmy
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Ceny
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="/demo" className="cta button btn btn-primary circular circular-primary">
            <span>Vyzkoušet zdarma</span>
            <span className="btn-fill"></span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
