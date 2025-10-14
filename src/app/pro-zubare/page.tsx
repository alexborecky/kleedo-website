import VerticalPageTemplate from '@/components/pages/VerticalPageTemplate'
import { getVerticalContent } from '@/lib/verticals'

export default function ProZubarePage() {
  const content = getVerticalContent('zubari')

  if (!content) {
    return <div>Content not found</div>
  }

  return <VerticalPageTemplate content={content} />
}
