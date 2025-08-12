import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'
import Meta from '../components/Meta'

interface Card {
  id: string
  [key: string]: unknown
}

export default function PrintPage() {
  const [cards, setCards] = useState<Card[]>([])
  const [authorized, setAuthorized] = useState<boolean | null>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setAuthorized(false)
        return
      }
      const snap = await getDocs(collection(db, 'cards'))
      setCards(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
      setAuthorized(true)
    })
    return () => unsub()
  }, [])

  return (
    <>
      <Meta />
      <div className="p-4 h-full overflow-y-auto">
        {authorized ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cards.map((card) => (
              <div key={card.id} className="border rounded p-2">
                <pre className="whitespace-pre-wrap text-xs">
                  {JSON.stringify(card, null, 2)}
                </pre>
              </div>
            ))}
          </div>
        ) : authorized === false ? (
          <p>you are to be authorized to use this function</p>
        ) : null}
      </div>
    </>
  )
}
