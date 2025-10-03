'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react'

export function ProblemSection() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-red-400">Když nezvednete vy, váš konkurent ano.</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Nezvednutý telefon je první důvod, proč klienti odcházejí ke konkurenci.
          </p>
          
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Každý zmeškaný hovor je ztracená příležitost. Váš klient volá konkurenci, 
            která má čas a zvedne telefon. Zatímco vy ztrácíte peníze, oni vydělávají.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Ztracené příležitosti</h3>
            <p className="text-gray-400">
              Každý zmeškaný hovor je potenciální zákazník, který jde ke konkurenci.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Klesající tržby</h3>
            <p className="text-gray-400">
              Bez pravidelného příjmu z nových klientů vaše tržby stagnují nebo klesají.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Ztráta času</h3>
            <p className="text-gray-400">
              Místo práce se staráte o telefon a ztrácíte čas na důležité úkoly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
