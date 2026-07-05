import { Link } from 'react-router'

export default function EntryRow({ entry, sectionId }) {
  return (
    <Link
      className="grid grid-cols-[24px_1fr_auto] py-2 rounded-3xl px-4 mx-1 items-center leading-[24px] gap-4 text-left hover:border-[var(--text-muted)] hover:bg-[var(--overlay)] sm:grid-cols-[96px_1fr_auto]"
      to={`/${sectionId}/${entry.slug}`}
    >
      <img
        className="aspect-[4/3] w-full rounded-xl object-cover"
        src={entry.image}
        alt=""
      />
      <span className="text-base font-normal text-[var(--text-heading)]">
        {entry.title}
      </span>
      <span className="text-sm text-[var(--text-muted)]">{entry.date}</span>
    </Link>
  )
}
