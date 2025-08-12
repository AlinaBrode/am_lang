export interface Word {
  image: string
  wordUpper: string[]
  wordLower: string[]
  soundRu: string[]
  soundEn: string[]
  en: string
  ru: string
}

interface WordCardProps {
  word: Word
  checked?: boolean
  onToggle?: () => void
}

export default function WordCard({ word, checked, onToggle }: WordCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {checked !== undefined && onToggle && (
        <input type="checkbox" checked={checked} onChange={onToggle} />
      )}
      <img src={word.image} alt={word.en} className="w-24 sm:w-32 md:w-40 h-auto" />
      <table className="table-auto border-collapse">
        <tbody>
          <tr>
            <td colSpan={word.wordUpper.length} className="border px-2 py-1 text-center">
              {word.ru}
            </td>
          </tr>
          <tr>
            <td colSpan={word.wordUpper.length} className="border px-2 py-1 text-center">
              {word.en}
            </td>
          </tr>
          <tr>
            {word.wordUpper.map((s, i) => (
              <td key={`u-${i}`} className="border px-2 py-1 text-xl text-center">
                {s}
              </td>
            ))}
          </tr>
          <tr>
            {word.wordLower.map((s, i) => (
              <td key={`l-${i}`} className="border px-2 py-1 text-xl text-center">
                {s}
              </td>
            ))}
          </tr>
          <tr>
            {word.soundRu.map((s, i) => (
              <td key={`r-${i}`} className="border px-2 py-1 text-center">
                {s.toUpperCase()}
              </td>
            ))}
          </tr>
          <tr>
            {word.soundEn.map((s, i) => (
              <td key={`e-${i}`} className="border px-2 py-1 text-center">
                {s.toUpperCase()}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
