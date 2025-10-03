'use client'

import { Phone, Calendar, FileText, MessageSquare, Settings, Globe, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Phone,
    title: "Okamžité odpovědi",
    description: "Každý hovor přijme do pár vteřin. Nikdy nezmeškáte klienta."
  },
  {
    icon: Calendar,
    title: "Chytré rezervace",
    description: "Automaticky najde volné termíny a potvrdí schůzky za vás."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp a SMS komunikace",
    description: "Komunikuje s klienty přes všechny kanály, které používají."
  },
  {
    icon: Settings,
    title: "Flexibilní pravidla",
    description: "Nastavte si, jak má AI komunikovat s vašimi klienty."
  },
  {
    icon: Globe,
    title: "Podpora více jazyků",
    description: "Mluví česky, slovensky a dalšími jazyky podle potřeby."
  },
  {
    icon: Users,
    title: "Více linek najednou",
    description: "Zvládne více hovorů současně bez čekání."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Chytřejší než recepční.{' '}
            <span className="text-primary-500">A nikdy nemá špatnou náladu.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary inline-flex items-center">
            Další funkce
            <span className="ml-2 text-primary-500">+</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
