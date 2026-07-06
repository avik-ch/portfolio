import { Link } from 'react-router'
import EntryRow from './EntryRow.jsx'

export default function SectionRows({ section, showViewAll = true, numRows }) {
  const entries = typeof numRows === 'number' ? section.entries.slice(0, numRows) : section.entries

  return (
    <section className="mt-8">
      <div className="mb-2 px-5 flex items-baseline justify-between gap-4">
        <h2 className="font-junicode text-2xl font-black italic text-[var(--text-heading)]">
          {section.title}
        </h2>
        {showViewAll ? (
          <Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-heading)]" to={`/${section.id}`}>
            View all
          </Link>
        ) : null}
      </div>
      <div className='flex flex-col gap-1'>
        {entries.map((entry) => (
          <EntryRow entry={entry} key={entry.slug} sectionId={section.id} />
        ))}
      </div>
    </section>
  )
}
