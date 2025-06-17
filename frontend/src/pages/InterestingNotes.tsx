import { useLanguage } from '../useLanguage'
import architectImg from '../assets/architect.webp'
import type { ReactNode } from 'react'

interface Note {
  dateKey: string
  titleKey: string
  render: (t: (key: string) => string) => ReactNode
}

const notes: Note[] = [
  {
    dateKey: 'note_2025_06_17_date',
    titleKey: 'note_2025_06_17_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={architectImg}
          alt={t('note_2025_06_17_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p>{t('note_2025_06_17_p1')}</p>
          <p>{t('note_2025_06_17_p2')}</p>
          <p>{t('note_2025_06_17_p3')}</p>
        </div>
      </div>
    ),
  },
]

export default function InterestingNotes() {
  const { t } = useLanguage()
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        {t('interesting_notes_title')}
      </h1>
      <p className="mb-6">{t('interesting_notes_intro')}</p>
      <ul className="space-y-8">
        {notes.map((note) => (
          <li key={note.titleKey} className="space-y-2">
            <h2 className="text-lg font-semibold">
              {t(note.dateKey)} - {t(note.titleKey)}
            </h2>
            <div>{note.render(t)}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
