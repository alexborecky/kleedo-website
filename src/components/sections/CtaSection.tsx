'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 mr-2" />
            A hlavně bez starostí
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Už žádný zmeškaný klient.
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI recepční s lidským mozkem okamžité zvedne telefon a postará se o klienta 
            tak, jak byste to udělali vy. Žádné otravné linky, žádné neschopné schránky.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/demo" className="btn-primary inline-flex items-center justify-center group text-lg px-8 py-4">
              Objednat demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="text-sm text-gray-400">
              <span className="text-primary-500">✓</span> Bez závazků
              <span className="mx-2">•</span>
              <span className="text-primary-500">✓</span> Okamžité spuštění
              <span className="mx-2">•</span>
              <span className="text-primary-500">✓</span> 24/7 podpora
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
              <p className="text-gray-400">Dostupnost</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">0</div>
              <p className="text-gray-400">Zmeškaných hovorů</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
              <p className="text-gray-400">Spokojenost</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
