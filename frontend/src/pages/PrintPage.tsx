import { useEffect, useRef, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'
import Meta from '../components/Meta'
import printCards from '../lib/printCards'
import { rawWordInfoList } from '../data/rawWordInfoList'
import WordCard, { Word } from '../components/WordCard'
import { selectedWordEns } from './WordsPage'

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

export default function PrintPage() {
  const [authorized, setAuthorized] = useState<boolean | null>(null)
  const [selected, setSelected] = useState<string[]>([])
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setAuthorized(u != null)
    })
    return () => unsub()
  }, [])

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const selectAll = () => setSelected(words.map((w) => w.en))
  const clear = () => setSelected([])

  const handleDownload = () => {
    const nodes = selected
      .map((id) => cardRefs.current[id])
      .filter((n): n is HTMLDivElement => !!n)
    if (nodes.length > 0) printCards(nodes)
  }

  return (
    <>
      <Meta />
      <div className="p-4 h-full overflow-y-auto">
        {authorized ? (
          <>
            <div className="mb-4 flex gap-2">
              <button
                type="button"
                className="rounded bg-blue-500 px-2 py-1 text-white"
                onClick={selectAll}
              >
                Select All
              </button>
              <button
                type="button"
                className="rounded bg-gray-500 px-2 py-1 text-white"
                onClick={clear}
              >
                Clear
              </button>
              <button
                type="button"
                className="rounded bg-green-600 px-2 py-1 text-white disabled:opacity-50"
                onClick={handleDownload}
                disabled={selected.length === 0}
              >
                Download PDF
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {words.map((w) => (
                <div
                  key={w.en}
                  ref={(el) => (cardRefs.current[w.en] = el)}
                  className="border rounded p-2 flex justify-center"
                >
                  <WordCard
                    word={w}
                    checked={selected.includes(w.en)}
                    onToggle={() => toggle(w.en)}
                  />
                </div>
              ))}
            </div>
          </>
        ) : authorized === false ? (
          <div className="flex items-center justify-center h-full">
            <div className="bg-white p-8 border-4 border-red-500 text-2xl font-bold text-center">
              Unauthorized user. Sign in to print PDF cards.
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}
