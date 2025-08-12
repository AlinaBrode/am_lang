import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'
import { rawWordInfoList } from '../data/rawWordInfoList'
import WordCard, { type Word } from '../components/WordCard'

export const selectedWordEns = new Set([
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
            <WordCard key={w.wordLower.join('')} word={w} />
          ))}
        </div>
      </div>
    </>
  )
}
