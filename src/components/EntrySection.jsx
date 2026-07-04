import { Link } from 'react-router'
import EntryRow from './EntryRow.jsx'

export default function EntrySection({ section, showViewAll = true }) {
  return (
    <section className="mt-12">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <h2 className="font-[var(--font-junicode)] text-2xl font-normal italic text-[var(--text-h)]">
          {section.title}
        </h2>
        {showViewAll ? (
          <Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-heading)]" to={`/${section.id}`}>
            View all
          </Link>
        ) : null}
      </div>
      <div>
        {section.entries.map((entry) => (
          <EntryRow entry={entry} key={entry.slug} sectionId={section.id} />
        ))}
      </div>
    </section>
  )
}
