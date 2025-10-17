import VerticalPageTemplate from '@/components/pages/VerticalPageTemplate'
import { getVerticalContent } from '@/lib/verticals'

export default function ForDentistsPage() {
  const content = getVerticalContent('dentists', 'en')

  if (!content) {
    return <div>Content not found</div>
  }

  return <VerticalPageTemplate content={content} />
}
