import { Link } from 'react-router'
import { motion } from 'motion/react'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="flex items-center justify-between gap-4 mt-8 px-5 pt-6 pb-1">
      <Link className="text-3xl font-junicode italic font-black text-[var(--text-heading)]" to="/">
        Avik
      </Link>
      <motion.div
        whileTap={{ scale: 0.95 }}
      >
        <button
          className="rounded-full px-1 py-1 text-sm text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[var(--overlay)] interactive-hover"
          type="button"
          onClick={onToggleTheme}
        >
          {theme === 'light' ?
            <img src='/sun-svgrepo-com.svg' className='w-[32px] h-[32px]' /> :
            <img src='/moon-full-moon-svgrepo-com.svg' className='w-[32px] h-[32px]' />}
        </button>
      </motion.div>
    </header>
  )
}
