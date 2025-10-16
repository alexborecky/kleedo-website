'use client'

import React, { useState, useMemo, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2, Check } from 'lucide-react'
import { trackFormSubmit, trackFormStart, trackLeadGeneration } from '@/lib/analytics'

const leadFormSchema = z.object({
  businessType: z.string().min(1, 'Vyberte typ podniku'),
  name: z.string().min(2, 'Jméno musí mít alespoň 2 znaky'),
  email: z.string().email('Neplatná emailová adresa'),
  phone: z.string().min(9, 'Telefon musí mít alespoň 9 číslic'),
  company: z.string().optional(),
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
  const formRef = useRef<HTMLFormElement>(null)
  const formStartedRef = useRef(false)

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    setValue
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    mode: 'onBlur'
  })

  // Track when user starts filling the form - using ref to avoid re-renders
  const handleFormStart = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true
      const source = businessType ? `landing-${businessType}` : 'main-landing'
      trackFormStart(`lead-capture-${source}`)
    }
  }


  // Set business type if provided
  if (businessType) {
    setValue('businessType', businessType)
  }

  // Field wrapper component for consistent styling and validation feedback
  const FieldWrapper = ({ 
    children, 
    fieldName, 
    label, 
    required = false
  }: { 
    children: React.ReactNode
    fieldName: keyof LeadFormData
    label: string
    required?: boolean
  }) => {
    const hasError = errors[fieldName]
    const isTouched = touchedFields[fieldName]
    
    return (
      <div className="relative">
        <label className="block text-sm font-medium text-white/90 mb-2">
          {label} {required && '*'}
        </label>
        <div className="relative">
          {children}
          {!hasError && isTouched && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Check className="h-4 w-4 text-green-400" />
            </div>
          )}
        </div>
        {hasError && isTouched && (
          <p className="form-error mt-1">{errors[fieldName]?.message}</p>
        )}
      </div>
    )
  }

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    
    try {
      const source = businessType ? `landing-${businessType}` : 'main-landing'
      
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source,
          timestamp: new Date().toISOString()
        }),
      })

      const result = await response.json()
      console.log('Form response:', response.status, result)
      
      if (response.ok && result.success) {
        setIsSubmitted(true) // Fixed form success handling
        
        // Track conversion with new analytics helper
        trackFormSubmit('lead-capture', {
          businessType: data.businessType,
          source
        })
        
        // Track lead generation
        trackLeadGeneration({
          businessType: data.businessType,
          companySize: 'not-specified',
          source
        })
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
      className={`form-banner items-start ${className}`}
    >
      {/* Left side - Promotional text */}
      <div className="text-left">
        <h2 className="feature-section-h2">
          Už žádný
          <br/>zmeškaný klient.
        </h2>
        <p className="text-left opacity-80 text-small">
          AI recepční s lidským hlasem okamžitě zvedne telefon a postará se o klienta tak, jak byste to udělali vy. Žádné obsazené linky, žádné hlasové schránky.
        </p>
      </div>

      {/* Right side - Form */}
      <div>
        <form 
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-6 lead-form"
        >
             {/* Name */}
             <FieldWrapper fieldName="name" label="Jméno a příjmení" required>
               <input
                 type="text"
                 {...register('name')}
                 autoComplete="name"
                 onFocus={handleFormStart}
                 tabIndex={1}
                 className="lead-input glass text-white border-gray-700"
                 placeholder="Vaše jméno a příjmení"
               />
             </FieldWrapper>

             {/* Email */}
             <FieldWrapper fieldName="email" label="Email" required>
               <input
                 type="email"
                 {...register('email')}
                 onFocus={handleFormStart}
                 tabIndex={2}
                 className="lead-input glass text-white border-gray-700"
                 placeholder="vas@email.cz"
               />
             </FieldWrapper>

             {/* Phone */}
             <FieldWrapper fieldName="phone" label="Telefon" required>
               <input
                 type="tel"
                 {...register('phone')}
                 onFocus={handleFormStart}
                 tabIndex={3}
                 className="lead-input glass text-white border-gray-700"
                 placeholder="+420 123 456 789"
               />
             </FieldWrapper>

             {/* Business Type - moved to bottom */}
             <FieldWrapper fieldName="businessType" label="Typ podniku" required>
               <select
                 {...register('businessType')}
                 onFocus={handleFormStart}
                 tabIndex={4}
                 className="lead-input appearance-none pr-10 glass border-gray-700"
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
             </FieldWrapper>

             {/* Company Name - optional */}
             <FieldWrapper fieldName="company" label="Název firmy">
               <input
                 type="text"
                 {...register('company')}
                 onFocus={handleFormStart}
                 tabIndex={5}
                 className="lead-input glass text-white border-gray-700"
                 placeholder="Název vaší firmy (volitelné)"
               />
             </FieldWrapper>

            {/* Privacy Policy */}
            <p className="text-xs /70 leading-relaxed">
              Odesláním formuláře souhlasíte se zpracováním osobních údajů podle našich{' '}
              <a href="/ochrana-osobnich-udaju" className="underline hover:no-underline">zásad ochrany osobních údajů</a>.
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                tabIndex={6}
                className="btn-primary h-12 rounded-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed circular-primary circular"
              >
                <span>{isSubmitting ? (<><Loader2 className="h-5 w-5 animate-spin" /> Odesílám...</>) : ('Objednat si demo')}</span>
                <span className="btn-fill"></span>
                
              </button>
            </div>
        </form>
      </div>
    </motion.div>
  )
}
