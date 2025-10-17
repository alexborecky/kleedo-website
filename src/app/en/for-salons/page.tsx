import VerticalPageTemplate from '@/components/pages/VerticalPageTemplate'
import { getVerticalContent } from '@/lib/verticals'

export default function ForSalonsPage() {
  const content = getVerticalContent('salons', 'en')

  if (!content) {
    return <div>Content not found</div>
  }

  return <VerticalPageTemplate content={content} />
}
