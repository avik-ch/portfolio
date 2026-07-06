import { Link } from 'react-router'
import { motion } from 'motion/react'

export default function EntryRow({ entry, sectionId }) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
    >
      <Link
        className="grid grid-cols-[24px_1fr_auto] py-3 rounded-3xl px-4 mx-1 items-center leading-[24px] gap-6 text-left interactive-hover sm:grid-cols-[32px_1fr_auto] hover:shadow-inner"
        to={`/${sectionId}/${entry.slug}`}
      >
        <div className="ml-3 relative h-6 w-6 sm:h-8 sm:w-8">
          <div className="absolute left-1/2 top-1/2 aspect-[4/3] w-full -translate-x-1/2 -translate-y-1/2 scale-165 border border-white bg-white shadow-md">
            <img
              src={entry.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <span className="ml-3 text-base font-normal text-[var(--text-heading)]">
          {entry.title}
        </span>
        <span className="text-sm text-[var(--text-muted)]">{entry.date}</span>
      </Link>
    </motion.div>
  )
}
