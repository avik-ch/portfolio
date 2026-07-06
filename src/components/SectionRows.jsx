import { Link } from 'react-router'
import { motion } from 'motion/react'
import EntryRow from './EntryRow.jsx'
import { pageItemVariants } from './pageAnimation.js'

const sectionVariants = {
  hidden: pageItemVariants.hidden,
  visible: {
    ...pageItemVariants.visible,
    transition: {
      ...pageItemVariants.visible.transition,
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

export default function SectionRows({ section, showViewAll = true, numRows }) {
  const entries = typeof numRows === 'number' ? section.entries.slice(0, numRows) : section.entries

  return (
    <motion.section className="mt-8" variants={sectionVariants}>
      <motion.div className="mb-2 px-5 flex items-baseline justify-between gap-4" variants={pageItemVariants}>
        <h2 className="font-junicode text-2xl font-black italic text-[var(--text-heading)]">
          {section.title}
        </h2>
        {showViewAll ? (
          <Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-heading)]" to={`/${section.id}`}>
            View all
          </Link>
        ) : null}
      </motion.div>
      <div className='flex flex-col gap-1'>
        {entries.map((entry) => (
          <motion.div key={entry.slug} variants={pageItemVariants}>
            <EntryRow entry={entry} sectionId={section.id} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
