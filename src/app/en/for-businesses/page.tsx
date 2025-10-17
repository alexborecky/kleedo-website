import VerticalPageTemplate from '@/components/pages/VerticalPageTemplate'
import { getVerticalContent } from '@/lib/verticals'

export default function ForBusinessesPage() {
  const content = getVerticalContent('businesses', 'en')

  if (!content) {
    return <div>Content not found</div>
  }

  return <VerticalPageTemplate content={content} />
}
