
export interface WordInfo {
  image: string
  wordUpper: string[]
  wordLower: string[]
  soundRu?: string[]
  soundEn?: string[]
  wordRu?: string
  wordEn?: string
}

interface LetterModalProps {
  info: WordInfo
  onClose: () => void
}

export default function LetterModal({ info, onClose }: LetterModalProps) {
  const maxLen = Math.max(
    info.wordUpper.length,
    info.wordLower.length,
    info.soundRu?.length ?? 0,
    info.soundEn?.length ?? 0,
  )

  const ruCaps = (info.soundRu ?? []).map((s) => s.toUpperCase())
  const enCaps = (info.soundEn ?? []).map((s) => s.toUpperCase())

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded p-4 max-w-sm w-11/12 shadow-lg max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-2 right-2" onClick={onClose}>
          ✕
        </button>
        <table className="table-auto border-collapse w-full text-center">
          <tbody>
            <tr>
              <td colSpan={maxLen} className="p-1 sm:p-2">
                <img src={info.image} alt="" className="w-full h-auto" />
              </td>
            </tr>
            <tr>
              <td
                colSpan={maxLen}
                className="border px-1 py-1 text-lg text-center sm:px-2 sm:text-xl"
              >
                {info.wordUpper.join('')}
              </td>
            </tr>
            <tr>
              <td
                colSpan={maxLen}
                className="border px-1 py-1 text-lg text-center sm:px-2 sm:text-xl"
              >
                {info.wordLower.join('')}
              </td>
            </tr>
            <tr>
              <td colSpan={maxLen} className="border px-1 py-1 text-center sm:px-2">
                {(info.soundRu ?? []).join('')}
              </td>
            </tr>
            <tr>
              <td colSpan={maxLen} className="border px-1 py-1 text-center sm:px-2">
                {(info.soundEn ?? []).join('')}
              </td>
            </tr>
            <tr>
              {info.wordUpper.map((l, i) => (
                <td
                  key={`su${i}`}
                  className="border px-1 py-1 text-lg sm:px-2 sm:text-xl"
                >
                  {l}
                </td>
              ))}
            </tr>
            <tr>
              {info.wordLower.map((l, i) => (
                <td
                  key={`sl${i}`}
                  className="border px-1 py-1 text-lg sm:px-2 sm:text-xl"
                >
                  {l}
                </td>
              ))}
            </tr>
            <tr>
              {ruCaps.map((s, i) => (
                <td key={`sr${i}`} className="border px-1 py-1 sm:px-2">
                  {s}
                </td>
              ))}
            </tr>
            <tr>
              {enCaps.map((s, i) => (
                <td key={`se${i}`} className="border px-1 py-1 sm:px-2">
                  {s}
                </td>
              ))}
            </tr>
            {info.wordRu && (
              <tr>
                <td colSpan={maxLen} className="border px-1 py-1 text-center sm:px-2">
                  {info.wordRu}
                </td>
              </tr>
            )}
            {info.wordEn && (
              <tr>
                <td colSpan={maxLen} className="border px-1 py-1 text-center sm:px-2">
                  {info.wordEn}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
