import { BusinessType, CompanySize, CallVolume, LeadScore } from '@/types'

export function calculateLeadScore(
  businessType: BusinessType,
  companySize: CompanySize,
  callVolume: CallVolume
): LeadScore {
  const businessTypeScore = {
    salon: 3,
    clinic: 3,
    auto: 2,
    eshop: 1,
    other: 1
  }[businessType]

  const companySizeScore = {
    solo: 1,
    small: 2,
    medium: 3,
    large: 3
  }[companySize]

  const callVolumeScore = {
    low: 1,
    medium: 2,
    high: 3
  }[callVolume]

  const total = businessTypeScore + companySizeScore + callVolumeScore

  let category: 'gold' | 'silver' | 'bronze'
  if (total >= 7) category = 'gold'
  else if (total >= 5) category = 'silver'
  else category = 'bronze'

  return {
    businessType: businessTypeScore,
    companySize: companySizeScore,
    callVolume: callVolumeScore,
    total,
    category
  }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK'
  }).format(amount)
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
