import { motion } from 'motion/react'
import { pageContainerVariants, pageItemVariants } from '../components/pageAnimation.js'
import Misc from './misc/misc.jsx'
import Projects from './projects/projects.jsx'
import Research from './research/research.jsx'

export default function HomePage() {
  async function copyEmail(email) {
    await navigator.clipboard.writeText(email)
  }

  return (
    <motion.div variants={pageContainerVariants}>
      <motion.section variants={pageItemVariants}>
        <div className="flex flex-wrap gap-x-3 gap-y-2 px-5 items-center text-sm">
          <a href="https://github.com/avik-ch" target="_blank" rel="noreferrer" aria-label="GitHub">
            <span aria-hidden="true" className="svg-icon h-[32px] w-[22px]" style={{ maskImage: "url('/github-svgrepo-com.svg')", WebkitMaskImage: "url('/github-svgrepo-com.svg')", }} />
          </a>
          <a href="https://www.linkedin.com/in/avik-ch" target="_blank" rel="noreferrer" aria-label="LinkedIn" >
            <span aria-hidden="true" className="svg-icon h-[32px] w-[32px]" style={{ maskImage: "url('/linkedin-svgrepo-com.svg')", WebkitMaskImage: "url('/linkedin-svgrepo-com.svg')", }}
            />
          </a>
        </div>
        <div className='px-5 flex items-center gap-x-1 text-sm'>
          <span className='text-extrabold'>email: </span>
          <button
            type="button"
            onClick={() => copyEmail('chakr258@umn.edu')}
            className='rounded-xl border-0 p-1 text-sm underline interactive-hover'
          >
            chakr258 (at) umn [dot] edu
          </button>
          <div className='hidden sm:block'>
            |{' '}
            <button
              type="button"
              onClick={() => copyEmail('avikch@stanford.edu')}
              className='rounded-xl border-0 p-1 text-sm underline interactive-hover'
            >
              avikch (at) stanford [dot] edu
            </button>
          </div>
        </div>
      </motion.section>
      <motion.div variants={pageContainerVariants}>
        <Research numRows={1} />
        <Projects />
        <Misc />
      </motion.div>
    </motion.div>
  )
}
