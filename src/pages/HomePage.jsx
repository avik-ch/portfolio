import EntrySection from '../components/EntrySection.jsx'
import { sections } from '../content.js'

export default function HomePage() {
  async function copyEmail(email) {
    await navigator.clipboard.writeText(email)
  }

  return (
    <>
      <section>
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
            className='cursor-pointer rounded-xl border-0 bg-transparent p-1 text-sm underline hover:bg-[var(--overlay)]'
          >
            chakr258 (at) umn [dot] edu
          </button>
          <div className='hidden sm:block'>
            |{' '}
            <button
              type="button"
              onClick={() => copyEmail('avikch@stanford.edu')}
              className='cursor-pointer rounded-xl border-0 bg-transparent p-1 text-sm underline hover:bg-[var(--overlay)]'
            >
              avikch (at) stanford [dot] edu
            </button>
          </div>
        </div>
      </section>
      {sections.map((section) => (
        <EntrySection key={section.id} section={section} />
      ))}
    </>
  )
}
