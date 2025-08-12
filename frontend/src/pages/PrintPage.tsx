import { useEffect, useRef, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'
import Meta from '../components/Meta'
import printCards from '../lib/printCards'

interface Card {
  id: string
  [key: string]: unknown
}

const placeholderCards: Card[] = [
  { id: 'placeholder-1', name: 'Placeholder 1' },
  { id: 'placeholder-2', name: 'Placeholder 2' },
]

export default function PrintPage() {
  const [cards] = useState<Card[]>(placeholderCards)
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

  const selectAll = () => setSelected(cards.map((c) => c.id))
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
              {cards.map((card) => (
                <div
                  key={card.id}
                  ref={(el) => (cardRefs.current[card.id] = el)}
                  className="border rounded p-2"
                >
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      checked={selected.includes(card.id)}
                      onChange={() => toggle(card.id)}
                      className="mt-1"
                    />
                    <pre className="whitespace-pre-wrap text-xs flex-1">
                      {JSON.stringify(card, null, 2)}
                    </pre>
                  </label>
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
