import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLanguage, type Lang } from '../useLanguage'
import Meta from '../components/Meta'
import hrazdanImg from '../assets/bilingual/hrazdan.webp'
import signYerevanImg from '../assets/bilingual/sign_yerevan.webp'
import benchYerevanImg from '../assets/bilingual/bench_yerevan.webp'
import type { ReactNode } from 'react'

interface Sign {
  slug: string
  dateKey: string
  titleKey: string
  render: (t: (key: string) => string, lang: Lang) => ReactNode
}

const signs: Sign[] = [
  {
    slug: 'hrazdan-railroad-station',
    dateKey: 'sign_2025_08_12_date',
    titleKey: 'sign_2025_08_12_title',
    render: (t, lang) => {
      const translit =
        lang === 'ru'
          ? ['', 'р', 'а', 'з', 'д', 'а', 'н']
          : ['', 'r', 'a', 'z', 'd', 'a', 'n']
      const armenian = ['Հ', 'Ր', 'Ա', 'Զ', 'Դ', 'Ա', 'Ն']
      return (
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <img
            src={hrazdanImg}
            alt={t('sign_2025_08_12_alt')}
            className="w-full md:max-w-xs mx-auto"
          />
          <div className="space-y-4 text-lg">
            <p>{t('sign_2025_08_12_p1')}</p>
            <p>{t('sign_2025_08_12_p2')}</p>
            <table className="table-auto border-collapse mt-4">
              <tbody>
                <tr>
                  {armenian.map((l, i) => (
                    <td key={i} className="border px-2 py-1">
                      {l}
                    </td>
                  ))}
                </tr>
                <tr>
                  {translit.map((l, i) => (
                    <td key={i} className="border px-2 py-1">
                      {l}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
  },
  {
    slug: 'yerevan-city-sign',
    dateKey: 'sign_2025_08_25_date',
    titleKey: 'sign_2025_08_25_title',
    render: (t, lang) => {
      const translit =
        lang === 'ru'
          ? ['е', 'р', 'е', 'в', 'а', 'н']
          : ['y', 'e', 'r', 'e', 'v', 'a', 'n']
      const armenian = ['Ե', 'Ր', 'Ե', 'Վ', 'Ա', 'Ն']
      return (
        <div className="space-y-4 text-lg">
          <p>{t('sign_2025_08_25_p1')}</p>
          <img
            src={signYerevanImg}
            alt={t('sign_2025_08_25_sign_alt')}
            className="w-full md:max-w-xs mx-auto"
          />
          <table className="table-auto border-collapse mt-4">
            <tbody>
              <tr>
                {armenian.map((l, i) => (
                  <td key={i} className="border px-2 py-1">
                    {l}
                  </td>
                ))}
              </tr>
              <tr>
                {translit.map((l, i) => (
                  <td key={i} className="border px-2 py-1">
                    {l}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <p>{t('sign_2025_08_25_p2')}</p>
          <img
            src={benchYerevanImg}
            alt={t('sign_2025_08_25_bench_alt')}
            className="w-full md:max-w-xs mx-auto"
          />
        </div>
      )
    },
  },
]

export default function BilingualSigns() {
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
        <h1 className="text-xl font-bold mb-4">{t('bilingual_signs_title')}</h1>
        <p className="mb-6">{t('bilingual_signs_intro')}</p>
        <ul className="space-y-8">
          {signs.map((sign) => (
            <li key={sign.slug} id={sign.slug} className="space-y-2">
              <h2 className="text-lg font-semibold flex items-center">
                <a
                  href={`/${lang}/bilingual_signs/${sign.slug}`}
                  className="mr-2 text-gray-400"
                >
                  #
                </a>
                {t(sign.dateKey)} - {t(sign.titleKey)}
              </h2>
              <div>{sign.render(t, lang)}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
