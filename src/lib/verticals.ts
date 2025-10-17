import verticalsData from '../data/verticals.json'
import verticalsEnData from '../data/verticals-en.json'

export type VerticalContent = {
  hero: {
    badge: string
    badgeIcon: string
    headline: string
    headlineHighlight: string
    subline: string
  }
  painPoint: {
    headline: string
    headlineHighlight: string
    description: string
    points: string[]
    emoji: string
    emojiLabel: string
  }
  solution: {
    emoji: string
    emojiLabel: string
    headline: string
    headlineHighlight: string
    description: string
    points: string[]
  }
  benefits: {
    headline: string
    cards: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  testimonials: {
    headline: string
    cards: Array<{
      quote: string
      author: string
    }>
  }
  faq: {
    headline: string
    items: Array<{
      question: string
      answer: string
    }>
  }
  cta: {
    headline: string
    description: string
    button: string
  }
}

type VerticalsData = {
  [key: string]: VerticalContent
}

// Mapping between Czech and English slugs
const slugMapping: { [key: string]: string } = {
  'zubari': 'dentists',
  'salony': 'salons', 
  'firmy': 'businesses'
}

const reverseSlugMapping: { [key: string]: string } = {
  'dentists': 'zubari',
  'salons': 'salony',
  'businesses': 'firmy'
}

export function getVerticalContent(slug: string, locale: string = 'cs'): VerticalContent | undefined {
  if (locale === 'en') {
    return (verticalsEnData as VerticalsData)[slug]
  }
  return (verticalsData as VerticalsData)[slug]
}

export function getAllVerticalSlugs(locale: string = 'cs') {
  if (locale === 'en') {
    return Object.keys(verticalsEnData).map(slug => ({ slug }))
  }
  return Object.keys(verticalsData).map(slug => ({ slug }))
}

export function getSlugMapping() {
  return slugMapping
}

export function getReverseSlugMapping() {
  return reverseSlugMapping
}
