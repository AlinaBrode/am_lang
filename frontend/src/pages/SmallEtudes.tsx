import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'
import primitiveImg from '../assets/etudes/primitive_reference.webp'

interface Etude {
  dateKey: string
  altKey: string
  longTextKeys: string[]
  shortTextKeys: string[]
  img: string
}

const etudes: Etude[] = [
  {
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
  },
]

export default function SmallEtudes() {
  const { t } = useLanguage()
  return (
    <>
      <Meta />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">{t('small_etudes_title')}</h1>
        <p className="mb-6">{t('small_etudes_intro')}</p>
        <ul className="space-y-8">
          {etudes.map((etude) => (
            <li key={etude.dateKey}>
              <div className="grid md:grid-cols-3 gap-4 items-start">
                <div>
                  <p className="font-semibold mb-2">{t(etude.dateKey)}</p>
                  <img
                    src={etude.img}
                    alt={t(etude.altKey)}
                    className="w-full md:max-w-xs mx-auto"
                  />
                </div>
                <div className="space-y-4 text-lg">
                  {etude.longTextKeys.map((k) => (
                    <p key={k}>{t(k)}</p>
                  ))}
                </div>
                <div className="space-y-2 text-lg">
                  <ul className="list-disc pl-6">
                    {etude.shortTextKeys.map((k) => (
                      <li key={k}>{t(k)}</li>
                    ))}
                  </ul>
                  <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
{`let a = 5;
let b = a;
b = 8;
console.log(a,b)
// 5, 8

let a = [5];
let b = a;
b[0] = 8;
console.log(a, b)
// [8], [8]`}
                  </pre>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

