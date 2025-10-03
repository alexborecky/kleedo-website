export interface Lead {
  id: string
  email: string
  name?: string
  phone?: string
  businessType: BusinessType
  companySize: CompanySize
  callVolume: CallVolume
  score: number
  category: 'gold' | 'silver' | 'bronze'
  createdAt: Date
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

export type BusinessType = 'salon' | 'clinic' | 'auto' | 'eshop' | 'other'
export type CompanySize = 'solo' | 'small' | 'medium' | 'large'
export type CallVolume = 'low' | 'medium' | 'high'

export interface LeadScore {
  businessType: number
  companySize: number
  callVolume: number
  total: number
  category: 'gold' | 'silver' | 'bronze'
}

export interface VerticalContent {
  title: string
  subtitle: string
  heroText: string
  features: Feature[]
  testimonials: Testimonial[]
  painPoints: string[]
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  text: string
  author: string
  company: string
}
