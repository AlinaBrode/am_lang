import { useState } from 'react'
import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'
import LetterModal from '../components/LetterModal'
import type { WordInfo } from '../components/LetterModal'
import { rawWordInfoList } from '../data/rawWordInfoList'

const groupedWordInfo = rawWordInfoList.reduce(
  (acc, info) => {
    const initial = info.wordEn === 'sun' ? 'Ր' : info.wordUpper[0]
    ;(acc[initial] ??= []).push(info)
    return acc
  },
  {} as Record<string, WordInfo[]>,
)

const wordInfoMap: Record<string, WordInfo[]> = Object.fromEntries(
  Object.entries(groupedWordInfo).sort(([a], [b]) => a.localeCompare(b)),
)

const letters = [
  ['Ա', 'ա', 'A', 'Айб'],
  ['Բ', 'բ', 'B', 'Бен'],
  ['Գ', 'գ', 'G', 'Гим'],
  ['Դ', 'դ', 'D', 'Да'],
  ['Ե', 'ե', 'Ye', 'Еч'],
  ['Զ', 'զ', 'Z', 'За'],
  ['Է', 'է', 'E', 'Э'],
  ['Ը', 'ը', 'Ə', 'Эт'],
  ['Թ', 'թ', 'Tʿ', 'Тхо'],
  ['Ժ', 'ժ', 'Zh', 'Же'],
  ['Ի', 'ի', 'I', 'Ини'],
  ['Լ', 'լ', 'L', 'Люн'],
  ['Խ', 'խ', 'Kh', 'Хе'],
  ['Ծ', 'ծ', 'Ts', 'Цо'],
  ['Կ', 'կ', 'K', 'Кен'],
  ['Հ', 'հ', 'H', 'Хо'],
  ['Ձ', 'ձ', 'Dz', 'Дза'],
  ['Ղ', 'ղ', 'Gh', 'Гат'],
  ['Ճ', 'ճ', 'Ch', 'Че'],
  ['Մ', 'մ', 'M', 'Мен'],
  ['Յ', 'յ', 'Y', 'Йи'],
  ['Ն', 'ն', 'N', 'Ну'],
  ['Շ', 'շ', 'Sh', 'Ша'],
  ['Ո', 'ո', 'Vo', 'Во'],
  ['Չ', 'չ', 'Chʿ', 'Ча'],
  ['Պ', 'պ', 'P', 'Пе'],
  ['Ջ', 'ջ', 'J', 'Дже'],
  ['Ռ', 'ռ', 'Rr', 'Ра'],
  ['Ս', 'ս', 'S', 'Се'],
  ['Վ', 'վ', 'V', 'Вев'],
  ['Տ', 'տ', 'T', 'Тюн'],
  ['Ր', 'ր', 'R', 'Ре'],
  ['Ց', 'ց', 'Tsʿ', 'Цо'],
  ['ՈՒ', 'ու', 'U', 'У'],
  ['Փ', 'փ', 'Pʿ', 'Пюр'],
  ['Ք', 'ք', 'Kʿ', 'Кʼе'],
  ['ԵՎ', 'և', 'Yev', 'Ев'],
  ['Օ', 'օ', 'O', 'О'],
  ['Ֆ', 'ֆ', 'F', 'Фе'],
]

const letterSoundMap: Record<string, { en: string; ru: string }> = Object.fromEntries(
  letters.map(([upper, , en, ru]) => [upper, { en, ru }])
)

export default function AlphabetPage() {
  const { t } = useLanguage()
  const [active, setActive] = useState<WordInfo | null>(null)

  const openInfo = (letter: string) => {
    const infoList = wordInfoMap[letter]
    if (infoList?.length) {
      const info = infoList[0]
      const soundRu =
        info.soundRu ?? info.wordUpper.map((l) => letterSoundMap[l]?.ru ?? '')
      const soundEn =
        info.soundEn ?? info.wordUpper.map((l) => letterSoundMap[l]?.en ?? '')
      setActive({ ...info, soundRu, soundEn })
    }
  }

  return (
    <>
      <Meta />
      <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('alphabet_title')}</h1>
      <table className="table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-2">{t('letter')}</th>
            <th className="border px-2">{t('lowercase')}</th>
            <th className="border px-2">{t('latin')}</th>
            <th className="border px-2">{t('russian')}</th>
          </tr>
        </thead>
        <tbody>
          {letters.map(([armUpper, armLower, en, ru]) => {
            const isMissing = !wordInfoMap[armUpper]
            return (
            <tr key={armUpper} className={isMissing ? 'bg-orange-100' : ''}>
              <td
                className="border px-2 text-center text-2xl cursor-pointer hover:bg-sky-100"
                onClick={() => openInfo(armUpper)}
              >
                {armUpper}
              </td>
              <td className="border px-2 text-center text-2xl">{armLower}</td>
              <td className="border px-2">{en}</td>
              <td className="border px-2">{ru}</td>
          </tr>
            )
          })}
        </tbody>
      </table>
      {active && (
        <LetterModal info={active} onClose={() => setActive(null)} />
      )}
    </div>
    </>
  )
}
