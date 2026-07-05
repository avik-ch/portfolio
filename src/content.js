export const sections = [
  {
    id: 'research',
    title: 'research',
    entries: [
      {
        slug: 'sample-research',
        title: 'Sample Research Note',
        date: '2026',
        image: '/placeholder.png',
      },
      {
        slug: 'another-research-thread',
        title: 'Another Research Thread',
        date: '2025',
        image: '/placeholder.png',
      },
    ],
  },
  {
    id: 'projects',
    title: 'projects',
    entries: [
      {
        slug: 'sample-project',
        title: 'Sample Project',
        date: '2026',
        image: '/placeholder.png',
      },
      {
        slug: 'small-tool',
        title: 'Small Tool',
        date: '2025',
        image: '/placeholder.png',
      },
    ],
  },
  {
    id: 'misc',
    title: 'misc',
    entries: [
      {
        slug: 'loose-note',
        title: 'Loose Note',
        date: '2024',
        image: '/placeholder.png',
      },
    ],
  },
]

export function getSection(sectionId) {
  return sections.find((section) => section.id === sectionId)
}

export function getEntry(sectionId, slug) {
  return getSection(sectionId)?.entries.find((entry) => entry.slug === slug)
}
