'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const insights = [
  {
    quote: "Konečně můžu pracovat v klidu, aniž bych se bál zmeškat důležitý hovor. Kleedo zvedne každý telefon a zvládne to lépe než já.",
    category: "Kadeřnictví a salony"
  },
  {
    quote: "Od té doby, co používáme Kleedo, máme o 40% více rezervací. Klienti si chválí, že se jim vždy někdo ozve.",
    category: "Zdravotnictví"
  },
  {
    quote: "Nejlepší investice do našeho autoservisu. AI zvládne rezervace, odhady cen a informace o opravách.",
    category: "Autoservisy"
  },
  {
    quote: "Kleedo je jako mít recepční, která nikdy nebere dovolenou a vždy má dobrou náladu. Perfektní!",
    category: "Wellness a fitness"
  },
  {
    quote: "Naši klienti si chválí rychlé odpovědi a profesionální komunikaci. Kleedo nás reprezentuje lépe než my sami.",
    category: "Profesionální služby"
  },
  {
    quote: "Od spuštění Kleedo máme o 60% více nových klientů. Každý hovor je příležitost, kterou už nezmeškáme.",
    category: "Fitness a sport"
  }
]

export function TestimonialsSection() {
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
            Klíčové poznatky z pilotního testování{' '}
            <span className="text-primary-500">Kleedo</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Zde jsou nejdůležitější poznatky, které jsme získali během testování s prvními firmami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{insight.quote}"
              </blockquote>
              
              <div className="border-t border-dark-700 pt-4">
                <p className="text-primary-500 text-sm font-medium">{insight.category}</p>
                <p className="text-gray-500 text-xs mt-1">Pilotní testování</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
