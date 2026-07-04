import { Navigate, useParams } from 'react-router'
import EntrySection from '../components/EntrySection.jsx'
import { getSection } from '../content.js'

export default function SectionPage() {
  const { sectionId } = useParams()
  const section = getSection(sectionId)

  if (!section) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="pt-16 sm:pt-24">
      <h1 className="font-[var(--font-junicode)] text-5xl font-normal italic text-[var(--text-h)]">
        {section.title}
      </h1>
      <EntrySection section={section} showViewAll={false} />
    </div>
  )
}
