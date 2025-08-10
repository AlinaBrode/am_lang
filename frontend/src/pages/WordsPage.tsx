import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'
import { rawWordInfoList } from '../data/rawWordInfoList'

interface Word {
  image: string
  wordUpper: string[]
  wordLower: string[]
  soundRu: string[]
  soundEn: string[]
  en: string
  ru: string
}

const selectedWordEns = new Set([
  'apple',
  'apricot',
  'book',
  'bug',
  'bull',
  'cat',
  'cheese',
  'door',
  'earth',
  'electric current',
  'giraffe',
  'house',
  'incubator',
  'jewelry',
  'lamp',
  'light',
  'lunch',
  'parrot',
  'pour',
  'raisin',
  'robot',
  'rose',
  'steering wheel',
  'skirt',
  'snake',
  'stone',
  'water',
  'butter',
  'donkey',
  'dog',
  'europe',
  'fish',
  'hello',
  'hare',
  'money',
  'mother',
  'radio',
  'road',
  'rust',
  'sheep',
  'soccer',
  'autumn',
  'yogurt',
  'table',
])

const words: Word[] = rawWordInfoList
  .filter((w) => w.wordEn && selectedWordEns.has(w.wordEn.toLowerCase()))
  .map((w) => ({
    image: w.image,
    wordUpper: w.wordUpper,
    wordLower: w.wordLower,
    soundRu: w.soundRu ?? [],
    soundEn: w.soundEn ?? [],
    en: w.wordEn!,
    ru: w.wordRu!,
  }))

export default function WordsPage() {
  const { t } = useLanguage()
  return (
    <>
      <Meta />
      <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('words_title')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {words.map((w) => (
          <div key={w.wordLower.join('')} className="flex flex-col items-center gap-2">
            <img src={w.image} alt={w.en} className="w-24 sm:w-32 md:w-40 h-auto" />
            <table className="table-auto border-collapse">
              <tbody>
                <tr>
                  {w.wordUpper.map((s, i) => (
                    <td
                      key={`u-${i}`}
                      className="border px-2 py-1 text-xl text-center"
                    >
                      {s}
                    </td>
                  ))}
                </tr>
                <tr>
                  {w.wordLower.map((s, i) => (
                    <td
                      key={`l-${i}`}
                      className="border px-2 py-1 text-xl text-center"
                    >
                      {s}
                    </td>
                  ))}
                </tr>
                <tr>
                  {w.soundRu.map((s, i) => (
                    <td key={`r-${i}`} className="border px-2 py-1 text-center">
                      {s.toUpperCase()}
                    </td>
                  ))}
                </tr>
                <tr>
                  {w.soundEn.map((s, i) => (
                    <td key={`e-${i}`} className="border px-2 py-1 text-center">
                      {s.toUpperCase()}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td
                    colSpan={w.wordUpper.length}
                    className="border px-2 py-1 text-center"
                  >
                    {w.ru}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={w.wordUpper.length}
                    className="border px-2 py-1 text-center"
                  >
                    {w.en}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
