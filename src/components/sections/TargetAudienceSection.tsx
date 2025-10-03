'use client'

import { motion } from 'framer-motion'
import { DollarSign, Clock, Shield, Users, Stethoscope, Car, Scissors } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: "Více klientů, více tržeb",
    description: "Každý zvednutý telefon znamená novou příležitost k prodeji a růstu vašeho byznysu."
  },
  {
    icon: Clock,
    title: "Méně telefonátů, více prostoru na práci",
    description: "Soustřeďte se na to, co umíte nejlépe. AI se postará o komunikaci s klienty."
  },
  {
    icon: Shield,
    title: "Vy určujete pravidla hry",
    description: "Nastavte si, jak má AI komunikovat, jaké služby nabízet a kdy vás kontaktovat."
  }
]

const targetBusinesses = [
  {
    icon: Scissors,
    name: "Salony a kadeřnictví",
    description: "Rezervace termínů, informace o službách, připomínky klientům"
  },
  {
    icon: Stethoscope,
    name: "Ordinace a kliniky",
    description: "Objednávání pacientů, informace o vyšetřeních, připomínky termínů"
  },
  {
    icon: Car,
    name: "Autoservisy a služby",
    description: "Rezervace termínů, odhady cen, informace o opravách"
  }
]

export function TargetAudienceSection() {
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
            Majitelé salonů, ordinací a služeb chtějí{' '}
            <span className="text-primary-500">klid — a víc klientů.</span>
          </h2>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
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
                  <benefit.icon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Target Businesses */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Ideální pro tyto typy podniků:
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetBusinesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors">
                <business.icon className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{business.name}</h4>
              <p className="text-gray-400">{business.description}</p>
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
            Další benefity
            <span className="ml-2 text-primary-500">+</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
