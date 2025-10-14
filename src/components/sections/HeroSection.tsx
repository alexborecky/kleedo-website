'use client'

import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              AI, která konečně zvedne ten{' '}
              <span className="text-primary-500">zatracenej telefon</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Nikdy nezmeškejte klienta. AI recepční dostupná 24/7, která vždy zvedne telefon, 
              nikdy nemá špatnou náladu a umí rezervovat termíny za vás.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="btn-primary inline-flex items-center justify-center group">
                Chci vědět víc
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="/test" className="btn-secondary inline-flex items-center justify-center">
                Chci se přidat
              </Link>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Dostupné 24/7
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Bez závazků
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Okamžité spuštění
              </div>
            </div>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Incoming call interface */}
                {/* <div className="px-6 py-8 text-center text-white">
                  <div className="w-24 h-24 bg-primary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Phone className="h-12 w-12" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">Příchozí hovor</h3>
                  <p className="text-gray-300 mb-8">Borecký Filip</p>
                  
                  <div className="space-y-4">
                    <button className="w-full bg-green-500 text-white py-4 rounded-full font-semibold">
                      Zvednout
                    </button>
                    <button className="w-full bg-red-500 text-white py-4 rounded-full font-semibold">
                      Odmítnout
                    </button>
                  </div>
                </div> */}

                {/* Chat bubbles overlay */}
                <div className="absolute top-20 left-4 space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="bg-primary-500 text-white p-3 rounded-2xl rounded-bl-sm max-w-48"
                  >
                    <p className="text-sm">Dobrý den, volám ohledně termínu na střih...</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="bg-gray-700 text-white p-3 rounded-2xl rounded-br-sm max-w-48 ml-8"
                  >
                    <p className="text-sm">Samozřejmě! Kdy by vám to vyhovovalo?</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center"
            >
              <Phone className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
