import { Link, Navigate, useParams } from 'react-router'
import { motion } from 'motion/react'
import { getEntry, getSection } from '../content.js'

export default function DetailPage() {
  const { sectionId, slug } = useParams()
  const section = getSection(sectionId)
  const entry = getEntry(sectionId, slug)

  if (!section || !entry) {
    return <Navigate replace to="/" />
  }

  return (
    <article className="pt-10 sm:pt-16">
      <Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-heading)]" to={`/${section.id}`}>
        Back to {section.title.toLowerCase()}
      </Link>
      <div className="mt-8 grid gap-6 sm:grid-cols-[220px_1fr] sm:items-end">
        <motion.img
          className="aspect-[4/3] w-full rounded object-cover"
          layoutId={`${section.id}-${entry.slug}-image`}
          src={entry.image}
          alt=""
        />
        <div>
          <p className="text-sm text-[var(--text-muted)]">{entry.date}</p>
          <motion.h1
            className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-[var(--text-heading)] sm:text-5xl"
            layoutId={`${section.id}-${entry.slug}-title`}
          >
            {entry.title}
          </motion.h1>
        </div>
      </div>
      <div className="prose-content mt-12 border-t border-[var(--border)] pt-8">
        <p>Add page content here.</p>
      </div>
    </article>
  )
}
