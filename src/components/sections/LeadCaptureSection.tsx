'use client'

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
  return (
    <section className={`py-20 page-section form-section ${className}`}>
      <div className="container mask-container">
        <div className="absolute inset-0 w-full h-full -z-50">
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
