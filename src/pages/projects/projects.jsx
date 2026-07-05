import SectionRows from '../../components/SectionRows.jsx'
import SampleProject from './sample-project.jsx'
import SmallTool from './small-tool.jsx'

const projectsSection = {
  id: 'projects',
  title: 'projects',
  entries: [
    {
      slug: 'sample-project',
      title: 'Sample Project',
      date: '2026',
      image: '/placeholder.png',
      Component: SampleProject,
    },
    {
      slug: 'small-tool',
      title: 'Small Tool',
      date: '2025',
      image: '/placeholder.png',
      Component: SmallTool,
    },
  ],
}

export default function Projects({ showViewAll = true }) {
  return <SectionRows section={projectsSection} showViewAll={showViewAll} />
}

Projects.section = projectsSection
