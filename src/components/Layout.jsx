import Header from './Header.jsx'

export default function Layout({ children, profile, theme, onToggleTheme }) {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[800px] flex-col px-5 sm:px-8">
      <Header name={profile.name} theme={theme} onToggleTheme={onToggleTheme} />
      <main className="flex-1 pb-16">{children}</main>
    </div>
  )
}
