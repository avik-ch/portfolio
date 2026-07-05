import SectionRows from '../../components/SectionRows.jsx'
import AnotherResearchThread from './another-research-thread.jsx'
import SampleResearch from './sample-research.jsx'

const researchSection = {
  id: 'research',
  title: 'research',
  entries: [
    {
      slug: 'sample-research',
      title: 'Sample Research Note',
      date: '2026',
      image: '/placeholder.png',
      Component: SampleResearch,
    },
    {
      slug: 'another-research-thread',
      title: 'Another Research Thread',
      date: '2025',
      image: '/placeholder.png',
      Component: AnotherResearchThread,
    },
  ],
}

export default function Research({ showViewAll = true }) {
  return <SectionRows section={researchSection} showViewAll={showViewAll} />
}

Research.section = researchSection
