
export interface LetterInfo {
  image: string
  wordUpper: string[]
  wordLower: string[]
  soundRu: string[]
  soundEn: string[]
}

interface LetterModalProps {
  info: LetterInfo
  onClose: () => void
}

export default function LetterModal({ info, onClose }: LetterModalProps) {
  const maxLen = Math.max(
    info.wordUpper.length,
    info.wordLower.length,
    info.soundRu.length,
    info.soundEn.length,
  )

  const ruCaps = info.soundRu.map((s) => s.toUpperCase())
  const enCaps = info.soundEn.map((s) => s.toUpperCase())

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded p-4 max-w-sm w-full shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="float-right" onClick={onClose}>
          ✕
        </button>
        <table className="table-auto border-collapse w-full text-center">
          <tbody>
            <tr>
              <td colSpan={maxLen} className="p-2">
                <img src={info.image} alt="" className="w-full h-auto" />
              </td>
            </tr>
            <tr>
              {info.wordUpper.map((l, i) => (
                <td key={`u${i}`} className="border px-2 py-1 text-2xl">
                  {l}
                </td>
              ))}
            </tr>
            <tr>
              {info.wordLower.map((l, i) => (
                <td key={`l${i}`} className="border px-2 py-1 text-2xl">
                  {l}
                </td>
              ))}
            </tr>
            <tr>
              {info.soundRu.map((s, i) => (
                <td key={`r${i}`} className="border px-2 py-1">
                  {s}
                </td>
              ))}
            </tr>
            <tr>
              {info.soundEn.map((s, i) => (
                <td key={`e${i}`} className="border px-2 py-1">
                  {s}
                </td>
              ))}
            </tr>
            <tr>
              {info.wordUpper.map((l, i) => (
                <td key={`su${i}`} className="border px-2 py-1 text-2xl">
                  {l}
                </td>
              ))}
            </tr>
            <tr>
              {info.wordLower.map((l, i) => (
                <td key={`sl${i}`} className="border px-2 py-1 text-2xl">
                  {l}
                </td>
              ))}
            </tr>
            <tr>
              {ruCaps.map((s, i) => (
                <td key={`sr${i}`} className="border px-2 py-1">
                  {s}
                </td>
              ))}
            </tr>
            <tr>
              {enCaps.map((s, i) => (
                <td key={`se${i}`} className="border px-2 py-1">
                  {s}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
