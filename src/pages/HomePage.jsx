import EntrySection from '../components/EntrySection.jsx'
import { profile, sections } from '../content.js'

export default function HomePage() {
  return (
    <>
      <section className="pt-16 sm:pt-24">
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {profile.links.map((link) => (
            <a
              className="text-sm text-[var(--text-muted)] underline-offset-4 hover:text-[var(--text-heading)] hover:underline"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
      {sections.map((section) => (
        <EntrySection key={section.id} section={section} />
      ))}
    </>
  )
}
