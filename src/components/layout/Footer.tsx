import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t w-full">
      <div className="w-full footer-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 footer-container-inner">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="brand"><img src="/images/kleedo-logo.svg" alt="Kleedo" className="h-7 w-auto" /></Link>
            <p className="text-gray-400 mb-4 max-w-md text-small">
              AI recepční, která vždy zvedne telefon a nikdy nemá špatnou náladu. 
              Ideální pro salony, ordinace a služby.
            </p>
            <div className="flex space-x-4">
              {/* <a href="mailto:info@kleedo.app" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produkt</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/produkt" className="text-gray-400 hover:text-white transition-colors">
                  Produkt
                </Link>
              </li> */}
              <li>
                <Link href="/pro-firmy" className="text-gray-400 hover:text-white transition-colors">
                  Pro firmy
                </Link>
              </li>
              <li>
                <Link href="/pro-salony" className="text-gray-400 hover:text-white transition-colors">
                  Pro salony
                </Link>
              </li>
              <li>
                <Link href="/pro-zubare" className="text-gray-400 hover:text-white transition-colors">
                  Pro zubaře
                </Link>
              </li>
              <li>
                <Link href="/cenik" className="text-gray-400 hover:text-white transition-colors">
                  Ceník
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Právní informace</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/ochrana-osobnich-udaju" className="text-gray-400 hover:text-white transition-colors">
                  Ochrana údajů
                </Link>
              </li> */}
              <li>
                <Link href="/obchodni-podminky" className="text-gray-400 hover:text-white transition-colors">
                  Obchodní podmínky
                </Link>
              </li>
              <li>
                <Link href="/ochrana-osobnich-udaju" className="text-gray-400 hover:text-white transition-colors">
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link href="/cookies?manage=true" className="text-gray-400 hover:text-white transition-colors">
                  Nastavení cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t text-center copyright">
          <p className="text-gray-400 text-small">
            © 2025 Kleedo. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
