'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'

const leadFormSchema = z.object({
  businessType: z.string().min(1, 'Vyberte typ podniku'),
  companySize: z.string().min(1, 'Vyberte velikost firmy'),
  callVolume: z.string().min(1, 'Vyberte objem hovorů'),
  name: z.string().min(2, 'Jméno musí mít alespoň 2 znaky'),
  email: z.string().email('Neplatná emailová adresa'),
  phone: z.string().min(9, 'Telefon musí mít alespoň 9 číslic'),
  company: z.string().min(2, 'Název firmy musí mít alespoň 2 znaky'),
  message: z.string().optional()
})

type LeadFormData = z.infer<typeof leadFormSchema>

interface LeadCaptureFormProps {
  title?: string
  subtitle?: string
  businessType?: string
  className?: string
}

export function LeadCaptureForm({ 
  title = "Získejte AI recepční zdarma",
  subtitle = "Vyplňte formulář a my vás budeme kontaktovat do 24 hodin.",
  businessType,
  className = ""
}: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema)
  })

  // Set business type if provided
  if (businessType) {
    setValue('businessType', businessType)
  }

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: businessType ? `landing-${businessType}` : 'main-landing',
          timestamp: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Track conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_capture', {
            event_category: 'conversion',
            event_label: data.businessType,
            value: 1
          })
        }
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Došlo k chybě při odesílání formuláře. Zkuste to prosím znovu.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card text-center"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Děkujeme!</h3>
        <p className="text-gray-300 mb-4">
          Váš formulář byl úspěšně odeslán. Kontaktujeme vás do 24 hodin.
        </p>
        <p className="text-sm text-gray-400">
          Mezitím si můžete prohlédnout naše ceny nebo se podívat na FAQ.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`card ${className}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Business Type */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Typ podniku *
          </label>
          <select
            {...register('businessType')}
            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={!!businessType}
          >
            <option value="">Vyberte typ podniku</option>
            <option value="salon">Salon / Kadeřnictví</option>
            <option value="medical">Ordinace / Klinika</option>
            <option value="auto">Autoservis / Služby</option>
            <option value="fitness">Fitness / Wellness</option>
            <option value="restaurant">Restaurace</option>
            <option value="real-estate">Realitní kancelář</option>
            <option value="law">Právní kancelář</option>
            <option value="other">Jiné</option>
          </select>
          {errors.businessType && (
            <p className="text-red-400 text-sm mt-1">{errors.businessType.message}</p>
          )}
        </div>

        {/* Company Size */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Velikost firmy *
          </label>
          <select
            {...register('companySize')}
            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Vyberte velikost firmy</option>
            <option value="solo">Solo podnikatel</option>
            <option value="2-5">2-5 zaměstnanců</option>
            <option value="5-10">5-10 zaměstnanců</option>
            <option value="10+">Více než 10 zaměstnanců</option>
          </select>
          {errors.companySize && (
            <p className="text-red-400 text-sm mt-1">{errors.companySize.message}</p>
          )}
        </div>

        {/* Call Volume */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Průměrný počet hovorů denně *
          </label>
          <select
            {...register('callVolume')}
            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Vyberte objem hovorů</option>
            <option value="0-5">0-5 hovorů</option>
            <option value="5-15">5-15 hovorů</option>
            <option value="15-30">15-30 hovorů</option>
            <option value="30+">Více než 30 hovorů</option>
          </select>
          {errors.callVolume && (
            <p className="text-red-400 text-sm mt-1">{errors.callVolume.message}</p>
          )}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Jméno a příjmení *
            </label>
            <input
              type="text"
              {...register('name')}
              className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Vaše jméno"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Název firmy *
            </label>
            <input
              type="text"
              {...register('company')}
              className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Název vaší firmy"
            />
            {errors.company && (
              <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              {...register('email')}
              className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="vas@email.cz"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              {...register('phone')}
              className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="+420 123 456 789"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Dodatečné informace
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            placeholder="Napište nám cokoli dalšího, co by nás mohlo zajímat..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Odesílám...
            </>
          ) : (
            'Chci AI recepční zdarma'
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          Odesláním formuláře souhlasíte se zpracováním osobních údajů podle našich 
          <a href="/privacy" className="text-primary-500 hover:underline ml-1">zásad ochrany osobních údajů</a>.
        </p>
      </form>
    </motion.div>
  )
}
