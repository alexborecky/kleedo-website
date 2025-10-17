'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function BlogHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed header top-0 z-50" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <div className="container">
        <nav className="nav">
          {/* Stroke layer */}
          <div className="stroke"></div>
          
          {/* Logo */}
          <Link href="/cs" className="brand" tabIndex={-1}>
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
            <Link href="/cs/pro-zubare" className="hover:text-white transition-colors" tabIndex={-1}>
              Pro zubaře
            </Link>
            <Link href="/cs/pro-salony" className="hover:text-white transition-colors" tabIndex={-1}>
              Pro salony
            </Link>
            <Link href="/cs/pro-firmy" className="hover:text-white transition-colors" tabIndex={-1}>
              Pro firmy
            </Link>
            <Link href="/cs/cenik" className="hover:text-white transition-colors" tabIndex={-1}>
              Ceník
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors" tabIndex={-1}>
              Blog
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <Link href="/cs/demo" className="cta button btn btn-primary circular circular-primary" tabIndex={-1}>
            <span>Vyzkoušet zdarma</span>
            <span className="btn-fill"></span>
          </Link>

          <div className="mobile-cta-container">
            {/* Mobile CTA Button */}
            <Link href="/cs/demo" className="mobile-cta button btn btn-primary circular circular-primary" tabIndex={-1}>
              <span>Demo</span>
              <span className="btn-fill"></span>
            </Link>

            {/* Hamburger Menu Button */}
            <button 
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              tabIndex={-1}
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
                  href="/cs/pro-zubare" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  Pro zubaře
                </Link>
                <Link 
                  href="/cs/pro-salony" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  Pro salony
                </Link>
                <Link 
                  href="/cs/pro-firmy" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  Pro firmy
                </Link>
                <Link 
                  href="/cs/cenik" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
                >
                  Ceník
                </Link>
                <Link 
                  href="/blog" 
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={-1}
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
