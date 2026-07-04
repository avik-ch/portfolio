import { Link } from 'react-router'

export default function Header({ name, theme, onToggleTheme }) {
  return (
    <header className="flex items-center justify-between gap-4 py-6">
      <Link className="text-3xl italic font-medium text-[var(--text-heading)]" to="/">
        {name}
      </Link>
      <button
        className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--text-muted)] transition hover:text-[var(--text-heading)]"
        type="button"
        onClick={onToggleTheme}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  )
}
