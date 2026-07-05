import { Navigate, useParams } from 'react-router'
import { getEntry, getSection } from './section_helpers.js'

export default function DetailPage() {
  const { sectionId, slug } = useParams()
  const section = getSection(sectionId)
  const entry = getEntry(sectionId, slug)

  if (!section || !entry) {
    return <Navigate replace to="/" />
  }

  const Body = entry.Component

  return (
    <article className="px-5 sm:pt-8">
      <div className="mt-8 grid gap-6 flex flex-col">
        <img
          className="aspect-[4/3] w-full rounded-3xl object-cover"
          src={entry.image}
          alt=""
        />
        <div>
          <h1
            className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-[var(--text-heading)] sm:text-5xl"
          >
            {entry.title}
          </h1>
        </div>
      </div>
      <div className="prose-content mt-12 border-t border-[var(--border)] pt-8">
        <Body />
      </div>
    </article>
  )
}
