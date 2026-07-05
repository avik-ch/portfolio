import Misc from './misc/misc.jsx'
import Projects from './projects/projects.jsx'
import Research from './research/research.jsx'

export const sections = [Research.section, Projects.section, Misc.section]

export function getSection(sectionId) {
  return sections.find((section) => section.id === sectionId)
}

export function getEntry(sectionId, slug) {
  return getSection(sectionId)?.entries.find((entry) => entry.slug === slug)
}
