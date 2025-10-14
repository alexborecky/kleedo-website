import VerticalPageTemplate from '@/components/pages/VerticalPageTemplate'
import { getVerticalContent } from '@/lib/verticals'

export default function ProFirmyPage() {
  const content = getVerticalContent('firmy')

  if (!content) {
    return <div>Content not found</div>
  }

  return <VerticalPageTemplate content={content} />
}
