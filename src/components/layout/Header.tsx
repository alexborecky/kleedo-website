'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

          {/* Navigation Links - Desktop */}
          <div className="links">
            <Link href="/pro-zubare" className="hover:text-white transition-colors">
              Pro zubaře
            </Link>
            <Link href="/pro-salony" className="hover:text-white transition-colors">
              Pro salony
            </Link>
            <Link href="/pro-firmy" className="hover:text-white transition-colors">
              Pro firmy
            </Link>
            <Link href="/cenik" className="hover:text-white transition-colors">
              Ceník
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <Link href="/demo" className="cta button btn btn-primary circular circular-primary">
            <span>Vyzkoušet zdarma</span>
            <span className="btn-fill"></span>
          </Link>

          <div className="mobile-cta-container">
            {/* Mobile CTA Button */}
            <Link href="/demo" className="mobile-cta button btn btn-primary circular circular-primary">
              <span>Demo</span>
              <span className="btn-fill"></span>
            </Link>

            {/* Hamburger Menu Button */}
            <button 
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            <div className="background-layer"></div>
            <div className="mobile-menu glass">
              <div className="stroke"></div>
              <div className="mobile-menu-content">
                <Link 
                  href="/pro-zubare" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pro zubaře
                </Link>
                <Link 
                  href="/pro-salony" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pro salony
                </Link>
                <Link 
                  href="/pro-firmy" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pro firmy
                </Link>
                <Link 
                  href="/cenik" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ceník
                </Link>
                <Link 
                  href="/blog" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
