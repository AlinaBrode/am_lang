import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'
import { rawWordInfoList } from '../data/rawWordInfoList'
import WordCard, { type Word } from '../components/WordCard'
import { auth } from '../lib/firebase'

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

const defaultLetters = new Set(['Ա', 'Բ', 'Գ', 'Խ', 'Շ', 'Ֆ', 'Մ'])

export default function WordsPage() {
  const { t } = useLanguage()
  const [authorized, setAuthorized] = useState<boolean | null>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setAuthorized(u != null)
    })
    return () => unsub()
  }, [])
  return (
    <>
      <Meta />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">{t('words_title')}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {words.map((w) => {
            const initial = w.wordUpper[0]
            const isAccessible = authorized || defaultLetters.has(initial)
            return isAccessible ? (
              <WordCard key={w.wordLower.join('')} word={w} />
            ) : (
              <div
                key={w.wordLower.join('')}
                className="flex justify-center items-center"
              >
                <div className="w-24 sm:w-32 md:w-40 h-40 bg-gray-200 rounded" />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
