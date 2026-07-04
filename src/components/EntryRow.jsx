import { Link } from 'react-router'
import { motion } from 'motion/react'

export default function EntryRow({ entry, sectionId }) {
  return (
    <Link
      className="grid grid-cols-[72px_1fr_auto] py-2 rounded-3xl px-4 mx-1 items-center gap-4 text-left transition hover:border-[var(--text-muted)] hover:bg-[var(--overlay)] sm:grid-cols-[96px_1fr_auto]"
      to={`/${sectionId}/${entry.slug}`}
    >
      <motion.img
        className="aspect-[4/3] w-full rounded-lg object-cover"
        layoutId={`${sectionId}-${entry.slug}-image`}
        src={entry.image}
        alt=""
      />
      <motion.span
        className="text-base font-normal text-[var(--text-heading)]"
        layoutId={`${sectionId}-${entry.slug}-title`}
      >
        {entry.title}
      </motion.span>
      <span className="text-sm text-[var(--text-muted)]">{entry.date}</span>
    </Link>
  )
}
