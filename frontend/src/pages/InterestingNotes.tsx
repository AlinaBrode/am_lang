import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'
import architectImg from '../assets/architect.webp'
import lurikImg from '../assets/stories/lurik_00.png'
import reptileImg from '../assets/reptile.webp'
import hrazdanImg from '../assets/bilingual/hrazdan.webp'
import movePart1Img from '../assets/stories/move_to_armenia__preparation.webp'
import movePart2Img from '../assets/stories/move_to_armenia__preparation_00.webp'
import type { ReactNode } from 'react'

interface Note {
  slug: string
  dateKey: string
  titleKey: string
  render: (t: (key: string) => string) => ReactNode
}

const notes: Note[] = [
  {
    slug: 'moving-to-yerevan-part-2',
    dateKey: 'note_2025_08_25_date',
    titleKey: 'note_2025_08_25_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={movePart2Img}
          alt={t('note_2025_08_25_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p>{t('note_2025_08_25_p1')}</p>
          <p>{t('note_2025_08_25_p2')}</p>
          <p>{t('note_2025_08_25_p3')}</p>
          <p>{t('note_2025_08_25_p4')}</p>
          <p>{t('note_2025_08_25_p5')}</p>
          <p>
            <strong>{t('note_2025_08_25_private')}</strong>
          </p>
          <p>
            <strong>{t('note_2025_08_25_private_cons_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('note_2025_08_25_private_con1')}</li>
            <li>{t('note_2025_08_25_private_con2')}</li>
          </ul>
          <p>
            <strong>{t('note_2025_08_25_private_pros_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('note_2025_08_25_private_pro1')}</li>
            <li>{t('note_2025_08_25_private_pro2')}</li>
            <li>{t('note_2025_08_25_private_pro3')}</li>
            <li>{t('note_2025_08_25_private_pro4')}</li>
            <li>{t('note_2025_08_25_private_pro5')}</li>
            <li>{t('note_2025_08_25_private_pro6')}</li>
          </ul>
          <p>
            <strong>{t('note_2025_08_25_public')}</strong>
          </p>
          <p>
            <strong>{t('note_2025_08_25_public_pros_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('note_2025_08_25_public_pro1')}</li>
          </ul>
          <p>
            <strong>{t('note_2025_08_25_public_cons_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('note_2025_08_25_public_con1')}</li>
            <li>{t('note_2025_08_25_public_con2')}</li>
            <li>{t('note_2025_08_25_public_con3')}</li>
            <li>{t('note_2025_08_25_public_con4')}</li>
          </ul>
          <p>{t('note_2025_08_25_docs')}</p>
          <p>{t('note_2025_08_25_p6')}</p>
        </div>
      </div>
    ),
  },
  {
    slug: 'moving-to-yerevan-part-1',
    dateKey: 'note_2025_08_18_date',
    titleKey: 'note_2025_08_18_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={movePart1Img}
          alt={t('note_2025_08_18_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p>{t('note_2025_08_18_p1')}</p>
          <p>{t('note_2025_08_18_p2')}</p>
          <p>{t('note_2025_08_18_p3')}</p>
          <ul className="list-disc list-inside space-y-2">
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li1_title')}</strong>
              </p>
              <p>{t('note_2025_08_18_li1_text')}</p>
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li2_title')}</strong>
              </p>
              <p>{t('note_2025_08_18_li2_text')}</p>
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li3_title')}</strong>
              </p>
              <p>{t('note_2025_08_18_li3_text')}</p>
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li4_title')}</strong>
              </p>
              <p>{t('note_2025_08_18_li4_text')}</p>
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li5_title')}</strong>
              </p>
              <p>{t('note_2025_08_18_li5_text')}</p>
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li6_title')}</strong>
              </p>
              <p>{t('note_2025_08_18_li6_text')}</p>
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li7_title')}</strong>
              </p>
              <p>{t('note_2025_08_18_li7_text')}</p>
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li8_title')}</strong>
              </p>
              <p>{t('note_2025_08_18_li8_text')}</p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    slug: 'why-javascript-on-a-language-site',
    dateKey: 'note_2025_07_20_date',
    titleKey: 'note_2025_07_20_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={hrazdanImg}
          alt={t('note_2025_07_20_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p>{t('note_2025_07_20_p1')}</p>
          <p>{t('note_2025_07_20_p2')}</p>
          <p>{t('note_2025_07_20_p3')}</p>
          <p>{t('note_2025_07_20_p4')}</p>
        </div>
      </div>
    ),
  },
  {
    slug: 'surprise-in-nork-arabkir-park',
    dateKey: 'note_2025_07_07_date',
    titleKey: 'note_2025_07_07_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={reptileImg}
          alt={t('note_2025_07_07_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p>{t('note_2025_07_07_p1')}</p>
          <p>{t('note_2025_07_07_p2')}</p>
          <p>{t('note_2025_07_07_p3')}</p>
          <p>{t('note_2025_07_07_p4')}</p>
        </div>
      </div>
    ),
  },
  {
    slug: 'the-pharmacy-owl',
    dateKey: 'note_2025_06_19_date',
    titleKey: 'note_2025_06_19_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={lurikImg}
          alt={t('note_2025_06_19_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p>{t('note_2025_06_19_p1')}</p>
          <p>{t('note_2025_06_19_p2')}</p>
          <p>{t('note_2025_06_19_p3')}</p>
        </div>
      </div>
    ),
  },
  {
    slug: 'its-impossible-to-pronounce',
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
          <p>
            {t('note_2025_06_17_p3_part1')}
            <mark>{t('note_2025_06_17_p3_highlight')}</mark>
            {t('note_2025_06_17_p3_part2')}
          </p>
        </div>
      </div>
    ),
  },
]

export default function InterestingNotes() {
  const { t, lang } = useLanguage()
  const { slug } = useParams<{ slug?: string }>()

  useEffect(() => {
    if (slug) {
      document.getElementById(slug)?.scrollIntoView()
    }
  }, [slug])

  return (
    <>
      <Meta />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">
          {t('interesting_notes_title')}
        </h1>
        <p className="mb-6">{t('interesting_notes_intro')}</p>
        <ul className="space-y-8">
          {notes.map((note) => (
            <li key={note.slug} id={note.slug} className="space-y-2">
              <h2 className="text-lg font-semibold flex items-center">
                <a
                  href={`/${lang}/interesting_notes/${note.slug}`}
                  className="mr-2 text-gray-400"
                >
                  #
                </a>
                {t(note.dateKey)} - {t(note.titleKey)}
              </h2>
              <div>{note.render(t)}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
