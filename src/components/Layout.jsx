import Header from './Header.jsx'

export default function Layout({ children, theme, onToggleTheme }) {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[550px] flex-col sm:px-8">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main className="flex-1 pb-16">{children}</main>
    </div>
  )
}
