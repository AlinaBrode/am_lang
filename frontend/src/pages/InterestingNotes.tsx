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
import plusMinusImg from '../assets/stories/plus_minus_00.webp'
import positivesides2Img from '../assets/positivesides2.webp'
import sevanImg from '../assets/stories/Sevan_for_site.webp'
import tsovasarEateryImg from '../assets/stories/tsovasar_eatery.webp'
import height1900Collage from '../assets/stories/2025_09_height_1900_collage.webp'
import minusImg from '../assets/stories/minus_for_site.webp'
import rent1Img from '../assets/stories/rent1.webp'
import minus00Img from '../assets/stories/minus_00.webp'
import type { ReactNode } from 'react'

interface Note {
  slug: string
  dateKey: string
  titleKey: string
  render: (t: (key: string) => string) => ReactNode
}

const notes: Note[] = [
  {
    slug: 'rent-in-yerevan-part-1-tenant',
    dateKey: 'note_2025_09_27_date',
    titleKey: 'note_2025_09_27_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={rent1Img}
          alt={t('note_2025_09_27_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_27_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_27_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_27_p3') }} />
          <ul className="list-disc list-inside space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_27_li1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_27_li2') }} />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_27_p4') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_27_p5') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_27_p6') }} />
        </div>
      </div>
    ),
  },
  {
    slug: 'downsides-of-life-in-yerevan',
    dateKey: 'note_2025_09_22_date',
    titleKey: 'note_2025_09_22_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={minusImg}
          alt={t('note_2025_09_22_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_22_p1') }} />
          <ul className="list-disc list-inside space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_22_li1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_22_li2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_22_li3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_22_li4') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_22_li5') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_22_li6') }} />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_22_p2') }} />
        </div>
      </div>
    ),
  },
  {
    slug: 'pros-and-cons-of-life-in-yerevan-part-2',
    dateKey: 'note_2025_09_18_date',
    titleKey: 'note_2025_09_18_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={positivesides2Img}
          alt={t('note_2025_09_18_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_18_p1') }} />
          <p>
            <strong>{t('note_2025_09_18_pros_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_18_li1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_18_li2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_18_li3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_18_li4') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_18_li5') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_18_li6') }} />
          </ul>
        </div>
      </div>
    ),
  },
  {
    slug: 'sevan-part-2',
    dateKey: 'note_2025_09_14_date',
    titleKey: 'note_2025_09_14_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={height1900Collage}
          alt={t('note_2025_09_14_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_14_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_14_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_14_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_14_p4') }} />
        </div>
      </div>
    ),
  },
  {
    slug: 'sevan-part-1',
    dateKey: 'note_2025_09_06_date',
    titleKey: 'note_2025_09_06_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div className="flex flex-col gap-4 items-center">
          <img
            src={sevanImg}
            alt={t('note_2025_09_06_alt')}
            className="w-full md:max-w-xs mx-auto"
          />
          <img
            src={tsovasarEateryImg}
            alt={t('note_2025_09_06_alt')}
            className="w-full md:max-w-xs mx-auto"
          />
        </div>
        <div className="space-y-4 text-lg">
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_06_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_06_p2') }} />
          <ul className="list-disc list-inside space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_06_li1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_06_li2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_06_li3') }} />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_06_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_06_p4') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_06_p5') }} />
        </div>
      </div>
    ),
  },
  {
    slug: 'pros-and-cons-of-life-in-yerevan-part-1',
    dateKey: 'note_2025_09_01_date',
    titleKey: 'note_2025_09_01_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={plusMinusImg}
          alt={t('note_2025_09_01_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_09_01_p1') }} />
          <p>
            <strong>{t('note_2025_09_01_pros_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_01_li1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_01_li2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_01_li3') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_01_li4') }} />
            <li dangerouslySetInnerHTML={{ __html: t('note_2025_09_01_li5') }} />
          </ul>
        </div>
      </div>
    ),
  },
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
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_25_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_25_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_25_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_25_p4') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_25_p5') }} />
          <p>
            <strong>{t('note_2025_08_25_private')}</strong>
          </p>
          <p>
            <strong>{t('note_2025_08_25_private_cons_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_private_con1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_private_con2'),
              }}
            />
          </ul>
          <p>
            <strong>{t('note_2025_08_25_private_pros_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_private_pro1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_private_pro2'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_private_pro3'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_private_pro4'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_private_pro5'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_private_pro6'),
              }}
            />
          </ul>
          <p>
            <strong>{t('note_2025_08_25_public')}</strong>
          </p>
          <p>
            <strong>{t('note_2025_08_25_public_pros_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_public_pro1'),
              }}
            />
          </ul>
          <p>
            <strong>{t('note_2025_08_25_public_cons_title')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_public_con1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_public_con2'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_public_con3'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('note_2025_08_25_public_con4'),
              }}
            />
          </ul>
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_25_docs') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_25_p6') }} />
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
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_18_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_18_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_18_p3') }} />
          <ul className="list-disc list-inside space-y-2">
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li1_title')}</strong>
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('note_2025_08_18_li1_text'),
                }}
              />
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li2_title')}</strong>
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('note_2025_08_18_li2_text'),
                }}
              />
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li3_title')}</strong>
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('note_2025_08_18_li3_text'),
                }}
              />
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li4_title')}</strong>
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('note_2025_08_18_li4_text'),
                }}
              />
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li5_title')}</strong>
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('note_2025_08_18_li5_text'),
                }}
              />
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li6_title')}</strong>
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('note_2025_08_18_li6_text'),
                }}
              />
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li7_title')}</strong>
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('note_2025_08_18_li7_text'),
                }}
              />
            </li>
            <li className="space-y-1">
              <p>
                <strong>{t('note_2025_08_18_li8_title')}</strong>
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('note_2025_08_18_li8_text'),
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    slug: 'why-javascript-on-a-language-site',
    dateKey: 'note_2025_08_11_date',
    titleKey: 'note_2025_08_11_title',
    render: (t) => (
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <img
          src={hrazdanImg}
          alt={t('note_2025_08_11_alt')}
          className="w-full md:max-w-xs mx-auto"
        />
        <div className="space-y-4 text-lg">
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_11_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_11_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_11_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_08_11_p4') }} />
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
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_07_07_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_07_07_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_07_07_p3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_07_07_p4') }} />
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
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_06_19_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_06_19_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('note_2025_06_19_p3') }} />
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
        {/* preload an extra image so it is served by hosting */}
        <img src={minus00Img} alt="minus_00" className="hidden" aria-hidden="true" />
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
