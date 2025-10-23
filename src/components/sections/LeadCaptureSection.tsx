'use client'

import { useEffect } from 'react'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'

interface LeadCaptureSectionProps {
  title?: string
  subtitle?: string
  businessType?: string
  className?: string
}

export function LeadCaptureSection({
  title = "Vyzkoušet zdarma",
  subtitle = "14denní zkušební verze bez závazků.",
  businessType,
  className = ""
}: LeadCaptureSectionProps) {
  useEffect(() => {
    // Handle smooth scroll with offset for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash === '#form') {
        e.preventDefault()
        const element = document.getElementById('form')
        if (element) {
          const offset = 100 // Adjust this value as needed
          const elementPosition = element.offsetTop - offset
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Add event listener to all anchor links
    document.addEventListener('click', handleSmoothScroll)
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll)
    }
  }, [])
  return (
    <section id="form" className={`py-20 hero page-section form-section ${className}`}>
      <div className="container mask-container">
        <div className="absolute">
          <InteractiveBlob 
            className="absolute bottom-0 left-0" 
            widthPercent={120} 
            heightPercent={70}
            leftPercent={-30}
            bottomPercent={-20}
            baseRadius={200}
            noiseAmplitude={120}
            noiseSpeed={0.06}
            mouseStrength={100}
            mouseRadius={240}
            relax={0.08}
            pointsCount={20}
            gradientStart="#EFC5A8"
            gradientEnd="#7F8960"
            gradientDirection="35deg"
            gradientStartOpacity={.24}
            gradientEndOpacity={0.2}
            blurAmount={80}
          />
        </div>
        
        <div>
          <LeadCaptureForm
            title={title}
            subtitle={subtitle}
            businessType={businessType}
          />
        </div>
      </div>
    </section>
  )
}
