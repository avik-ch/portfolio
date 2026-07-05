import SectionRows from '../../components/SectionRows.jsx'
import LooseNote from './loose-note.jsx'

const miscSection = {
  id: 'misc',
  title: 'misc',
  entries: [
    {
      slug: 'loose-note',
      title: 'Loose Note',
      date: '2024',
      image: '/placeholder.png',
      Component: LooseNote,
    },
  ],
}

export default function Misc({ showViewAll = true }) {
  return <SectionRows section={miscSection} showViewAll={showViewAll} />
}

Misc.section = miscSection
