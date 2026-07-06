import { Navigate, useParams } from 'react-router'
import { motion } from 'motion/react'
import { pageContainerVariants, pageItemVariants } from '../components/pageAnimation.js'
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
    <motion.article className="px-5 sm:pt-8" variants={pageContainerVariants}>
      <motion.div className="mt-8 grid gap-6 flex flex-col" variants={pageItemVariants}>
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
      </motion.div>
      <motion.div className="prose-content mt-12 border-t border-[var(--border)] pt-8" variants={pageItemVariants}>
        <Body />
      </motion.div>
    </motion.article>
  )
}
