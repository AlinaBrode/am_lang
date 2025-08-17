import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'
import primitiveImg from '../assets/etudes/primitive_reference.webp'
import letVarConstImg from '../assets/etudes/let_var_const_musketeers.webp'
import hoistingImg from '../assets/etudes/let_var_const_musketeers_hoisting.webp'

interface Etude {
  titleKey: string
  dateKey: string
  altKey: string
  longTextKeys: string[]
  shortTextKeys: string[]
  img: string
  code?: string
  slug: string
}

const etudes: Etude[] = [
  {
    titleKey: 'etude_2025_08_17_title',
    dateKey: 'etude_2025_08_17_date',
    altKey: 'etude_2025_08_17_alt',
    longTextKeys: ['etude_2025_08_17_long1', 'etude_2025_08_17_long2'],
    shortTextKeys: [
      'etude_2025_08_17_short1',
      'etude_2025_08_17_short2',
      'etude_2025_08_17_short3',
      'etude_2025_08_17_short4',
    ],
    img: hoistingImg,
    slug: 'hoisting',
  },
  {
    titleKey: 'etude_2025_08_15_title',
    dateKey: 'etude_2025_08_15_date',
    altKey: 'etude_2025_08_15_alt',
    longTextKeys: ['etude_2025_08_15_long1', 'etude_2025_08_15_long2'],
    shortTextKeys: [
      'etude_2025_08_15_short1',
      'etude_2025_08_15_short2',
      'etude_2025_08_15_short3',
      'etude_2025_08_15_short4',
      'etude_2025_08_15_short5',
      'etude_2025_08_15_short6',
    ],
    img: letVarConstImg,
    slug: 'let-var-const',
  },
  {
    titleKey: 'etude_2025_07_08_title',
    dateKey: 'etude_2025_07_08_date',
    altKey: 'etude_2025_07_08_alt',
    longTextKeys: [
      'etude_2025_07_08_long1',
      'etude_2025_07_08_long2',
      'etude_2025_07_08_long3',
    ],
    shortTextKeys: [
      'etude_2025_07_08_short1',
      'etude_2025_07_08_short2',
      'etude_2025_07_08_short3',
    ],
    img: primitiveImg,
    code: `let a = 5;
let b = a;
b = 8;
console.log(a,b)
// 5, 8

let a = [5];
let b = a;
b[0] = 8;
console.log(a, b)
// [8], [8]`,
    slug: 'types-primitive-object',
  },
]

export default function SmallEtudes() {
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
        <h1 className="text-xl font-bold mb-4">{t('small_etudes_title')}</h1>
        <p className="mb-6">{t('small_etudes_intro')}</p>
        <ul className="space-y-8">
          {etudes.map((etude) => (
            <li key={etude.slug} id={etude.slug}>
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <a
                  href={`/${lang}/small_etudes/${etude.slug}`}
                  className="mr-2 text-gray-400"
                >
                  #
                </a>
                {t(etude.titleKey)}
              </h2>
              <div className="grid md:grid-cols-3 gap-4 items-start">
                <div>
                  <p className="mb-2">{t(etude.dateKey)}</p>
                  <img
                    src={etude.img}
                    alt={t(etude.altKey)}
                    className="w-full md:max-w-xs mx-auto"
                  />
                </div>
                <div className="space-y-4 text-lg">
                  {etude.longTextKeys.map((k) => (
                    <p
                      key={k}
                      dangerouslySetInnerHTML={{ __html: t(k) }}
                    />
                  ))}
                </div>
                <div className="space-y-2 text-lg">
                  <ul className="list-disc pl-6">
                    {etude.shortTextKeys.map((k) => (
                      <li
                        key={k}
                        dangerouslySetInnerHTML={{ __html: t(k) }}
                      />
                    ))}
                  </ul>
                  {etude.code && (
                    <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
                      {etude.code}
                    </pre>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

