import verticalsData from '../data/verticals.json'

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

export function getVerticalContent(slug: string): VerticalContent | undefined {
  return (verticalsData as VerticalsData)[slug]
}

export function getAllVerticalSlugs() {
  return Object.keys(verticalsData).map(slug => ({ slug }))
}
