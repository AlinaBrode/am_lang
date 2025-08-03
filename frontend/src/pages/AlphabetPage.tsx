import { useState } from 'react'
import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'
import polarOwl from '../assets/polar_owl.webp'
import appleImg from '../assets/alphabet/apple.webp'
import apricotImg from '../assets/alphabet/apricot.webp'
import bookImg from '../assets/alphabet/book.webp'
import bugImg from '../assets/alphabet/bug.webp'
import catImg from '../assets/alphabet/cat.webp'
import doorImg from '../assets/alphabet/door.webp'
import earthImg from '../assets/alphabet/earth.webp'
import electricCurrentImg from '../assets/alphabet/electric_current.webp'
import girafImg from '../assets/alphabet/giraf.webp'
import houseImg from '../assets/alphabet/house.webp'
import incubatorImg from '../assets/alphabet/incubator.webp'
import jewelryImg from '../assets/alphabet/jewelry.webp'
import lightImg from '../assets/alphabet/light.webp'
import lunchImg from '../assets/alphabet/lunch.webp'
import parrotImg from '../assets/alphabet/parrot.webp'
import pourImg from '../assets/alphabet/pour.webp'
import raisinImg from '../assets/alphabet/raisin.webp'
import steeringWheelImg from '../assets/alphabet/steering_wheel.webp'
import bullImg from '../assets/alphabet/bull.webp'
import cheeseImg from '../assets/alphabet/cheese.webp'
import robotImg from '../assets/alphabet/robot.webp'
import roseImg from '../assets/alphabet/rose.webp'
import snakeImg from '../assets/alphabet/snake.webp'
import stoneImg from '../assets/alphabet/stone.webp'
import waterImg from '../assets/alphabet/water.webp'
import donkeyImg from '../assets/alphabet/donkey.webp'
import butterImg from '../assets/alphabet/butter.webp'
import dogImg from '../assets/alphabet/dog.webp'
import europeImg from '../assets/alphabet/europe.webp'
import fishImg from '../assets/alphabet/fish.webp'
import halloImg from '../assets/alphabet/hallo.webp'
import hareImg from '../assets/alphabet/hare.webp'
import lambImg from '../assets/alphabet/lamb.webp'
import moneyImg from '../assets/alphabet/money.webp'
import motherImg from '../assets/alphabet/mother.webp'
import radioImg from '../assets/alphabet/radio.webp'
import roadImg from '../assets/alphabet/road.webp'
import rustImg from '../assets/alphabet/rust.webp'
import sheepImg from '../assets/alphabet/sheep.webp'
import soccerImg from '../assets/alphabet/soccer.webp'
import autumnImg from '../assets/alphabet/autumn.webp'
import yogurtImg from '../assets/alphabet/yogurt.webp'
import sunImg from '../assets/alphabet/sun.webp'
import tableImg from '../assets/alphabet/table.webp'
import LetterModal from '../components/LetterModal'
import type { WordInfo } from '../components/LetterModal'

const rawWordInfoList: WordInfo[] = [
  {
    image: polarOwl,
    wordUpper: ['Բ', 'ՈՒ'],
    wordLower: ['բ', 'ու'],
    soundRu: ["б", "у"],
    soundEn: ["b", "u"],
    wordRu: "сова",
    wordEn: "owl",
  },
  {
    image: appleImg,
    wordUpper: ["Խ", "Ն", "Ձ", "Ո", "Ր"],
    wordLower: ["խ", "ն", "ձ", "ո", "ր"],
      soundRu: ["х", "н", "дз", "о", "р"],
      soundEn: ["kh", "n", "dz", "o", "r"],
      wordRu: "яблоко",
      wordEn: "apple",
  },
  {
    image: apricotImg,
    wordUpper: ["Ծ", "Ի", "Ր", "Ա", "Ն"],
    wordLower: ["ծ", "ի", "ր", "ա", "ն"],
      soundRu: ["ц", "и", "р", "а", "н"],
      soundEn: ["ts", "i", "r", "a", "n"],
      wordRu: "абрикос",
      wordEn: "apricot",
  },
  {
    image: bookImg,
    wordUpper: ["Գ", "Ի", "Ր", "Ք"],
    wordLower: ["գ", "ի", "ր", "ք"],
      soundRu: ["г", "и", "р", "к"],
      soundEn: ["g", "i", "r", "k'"],
      wordRu: "книга",
      wordEn: "book",
  },
  {
    image: bugImg,
    wordUpper: ["Բ", "Զ", "Ե", "Զ"],
    wordLower: ["բ", "զ", "ե", "զ"],
      soundRu: ["б", "з", "е", "з"],
      soundEn: ["b", "z", "e", "z"],
      wordRu: "жук",
      wordEn: "bug",
  },
  {
    image: catImg,
    wordUpper: ["Կ", "Ա", "Տ", "ՈՒ"],
    wordLower: ["կ", "ա", "տ", "ու"],
      soundRu: ["к", "а", "т", "у"],
      soundEn: ["k", "a", "t", "u"],
      wordRu: "кот",
      wordEn: "cat",
  },
  {
    image: doorImg,
    wordUpper: ["Դ", "ՈՒ", "Ռ"],
    wordLower: ["դ", "ու", "ռ"],
      soundRu: ["д", "у", "р"],
      soundEn: ["d", "u", "rr"],
      wordRu: "дверь",
      wordEn: "door",
  },
  {
    image: earthImg,
    wordUpper: ["Ե", "Ր", "Կ", "Ի", "Ր"],
    wordLower: ["ե", "ր", "կ", "ի", "ր"],
      soundRu: ["е", "р", "к", "и", "р"],
      soundEn: ["ye", "r", "k", "i", "r"],
      wordRu: "земля",
      wordEn: "earth",
  },
  {
    image: electricCurrentImg,
    wordUpper: ["Հ", "Ո", "Ս", "Ա", "Ն", "Ք"],
    wordLower: ["հ", "ո", "ս", "ա", "ն", "ք"],
      soundRu: ["х", "о", "с", "а", "н", "к"],
      soundEn: ["h", "o", "s", "a", "n", "k'"],
      wordRu: "ток",
      wordEn: "electric current",
  },
  {
    image: girafImg,
    wordUpper: ["Ը", "Ն", "Ձ", "ՈՒ", "Ղ", "Տ"],
    wordLower: ["ը", "ն", "ձ", "ու", "ղ", "տ"],
      soundRu: ["э", "н", "дз", "у", "г", "т"],
      soundEn: ["ə", "n", "dz", "u", "gh", "t"],
      wordRu: "жираф",
      wordEn: "giraffe",
  },
  {
    image: houseImg,
    wordUpper: ["Տ", "ՈՒ", "Ն"],
    wordLower: ["տ", "ու", "ն"],
      soundRu: ["т", "у", "н"],
      soundEn: ["t", "u", "n"],
      wordRu: "дом",
      wordEn: "house",
  },
  {
    image: incubatorImg,
    wordUpper: ["Ի", "Ն", "Կ", "ՈՒ", "Բ", "Ա", "Տ", "Ո", "Ր"],
    wordLower: ["ի", "ն", "կ", "ու", "բ", "ա", "տ", "ո", "ր"],
      soundRu: ["и", "н", "к", "у", "б", "а", "т", "о", "р"],
      soundEn: ["i", "n", "k", "u", "b", "a", "t", "o", "r"],
      wordRu: "инкубатор",
      wordEn: "incubator",
  },
  {
    image: jewelryImg,
    wordUpper: ["Զ", "Ա", "Ր", "Դ"],
    wordLower: ["զ", "ա", "ր", "դ"],
      soundRu: ["з", "а", "р", "д"],
      soundEn: ["z", "a", "r", "d"],
      wordRu: "украшения",
      wordEn: "jewelry",
  },
  {
    image: lightImg,
    wordUpper: ["Լ", "ՈՒ", "Յ", "Ս"],
    wordLower: ["լ", "ու", "յ", "ս"],
      soundRu: ["л", "у", "й", "с"],
      soundEn: ["l", "u", "y", "s"],
      wordRu: "свет",
      wordEn: "light",
  },
  {
    image: lunchImg,
    wordUpper: ["Ճ", "Ա", "Շ"],
    wordLower: ["ճ", "ա", "շ"],
      soundRu: ["ч", "а", "ш"],
      soundEn: ["ch", "a", "sh"],
      wordRu: "обед",
      wordEn: "lunch",
  },
  {
    image: parrotImg,
    wordUpper: ["Թ", "ՈՒ", "Թ", "Ա", "Կ"],
    wordLower: ["թ", "ու", "թ", "ա", "կ"],
      soundRu: ["т", "у", "т", "а", "к"],
      soundEn: ["t'", "u", "t'", "a", "k"],
      wordRu: "попугай",
      wordEn: "parrot",
  },
  {
    image: pourImg,
    wordUpper: ["Լ", "Ց", "Ն", "Ե", "Լ"],
    wordLower: ["լ", "ց", "ն", "ե", "լ"],
      soundRu: ["л", "ц", "н", "е", "л"],
      soundEn: ["l", "ts'", "n", "e", "l"],
      wordRu: "наливать",
      wordEn: "pour",
  },
  {
    image: raisinImg,
    wordUpper: ["Չ", "Ա", "Մ", "Ի", "Չ"],
    wordLower: ["չ", "ա", "մ", "ի", "չ"],
      soundRu: ["ч", "а", "м", "и", "ч"],
      soundEn: ["ch'", "a", "m", "i", "ch'"],
      wordRu: "изюм",
      wordEn: "raisin",
  },
  {
    image: steeringWheelImg,
    wordUpper: ["Ղ", "Ե", "Կ"],
    wordLower: ["ղ", "ե", "կ"],
      soundRu: ["г", "е", "к"],
      soundEn: ["gh", "e", "k"],
      wordRu: "руль",
      wordEn: "steering wheel",
  },
  {
    image: cheeseImg,
    wordUpper: ["Պ", "Ա", "Ն", "Ի", "Ր"],
    wordLower: ["պ", "ա", "ն", "ի", "ր"],
      soundRu: ["п", "а", "н", "и", "р"],
      soundEn: ["p", "a", "n", "i", "r"],
      wordRu: "сыр",
      wordEn: "cheese",
  },
  {
    image: bullImg,
    wordUpper: ["Ց", "ՈՒ", "Լ"],
    wordLower: ["ց", "ու", "լ"],
      soundRu: ["ц", "у", "л"],
      soundEn: ["ts'", "u", "l"],
      wordRu: "бык",
      wordEn: "bull",
  },
  {
    image: waterImg,
    wordUpper: ["Ջ", "ՈՒ", "Ր"],
    wordLower: ["ջ", "ու", "ր"],
      soundRu: ["дж", "у", "р"],
      soundEn: ["j", "u", "r"],
      wordRu: "вода",
      wordEn: "water",
  },
  {
    image: donkeyImg,
    wordUpper: ["Է", "Շ"],
    wordLower: ["է", "շ"],
    soundRu: ["э", "ш"],
    soundEn: ["e", "sh"],
    wordRu: "осел",
    wordEn: "donkey",
  },
  {
    image: robotImg,
    wordUpper: ["Ռ", "Ո", "Բ", "Ո", "Տ"],
    wordLower: ["ռ", "ո", "բ", "ո", "տ"],
      soundRu: ["р", "о", "б", "о", "т"],
      soundEn: ["rr", "o", "b", "o", "t"],
      wordRu: "робот",
      wordEn: "robot",
  },
  {
    image: roseImg,
    wordUpper: ["Վ", "Ա", "Ր", "Դ"],
    wordLower: ["վ", "ա", "ր", "դ"],
      soundRu: ["в", "а", "р", "д"],
      soundEn: ["v", "a", "r", "d"],
      wordRu: "роза",
      wordEn: "rose",
  },
  {
    image: stoneImg,
    wordUpper: ["Ք", "Ա", "Ր"],
    wordLower: ["ք", "ա", "ր"],
      soundRu: ["к", "а", "р"],
      soundEn: ["k'", "a", "r"],
      wordRu: "камень",
      wordEn: "stone",
  },
  {
    image: snakeImg,
    wordUpper: ["Օ", "Ձ"],
    wordLower: ["օ", "ձ"],
      soundRu: ["о", "дз"],
      soundEn: ["o", "dz"],
      wordRu: "змея",
      wordEn: "snake",
  },
  {
    image: butterImg,
    wordUpper: ["Կ", "Ա", "Ր", "Ա", "Գ"],
    wordLower: ["կ", "ա", "ր", "ա", "գ"],
      soundRu: ["к", "а", "р", "а", "г"],
      soundEn: ["k", "a", "r", "a", "g"],
      wordRu: "масло",
      wordEn: "butter",
  },
  {
    image: dogImg,
    wordUpper: ["Շ", "ՈՒ", "Ն"],
    wordLower: ["շ", "ու", "ն"],
      soundRu: ["ш", "у", "н"],
      soundEn: ["sh", "u", "n"],
      wordRu: "собака",
      wordEn: "dog",
  },
  {
    image: europeImg,
    wordUpper: ["ԵՎ", "Ր", "Ո", "Պ", "Ա"],
    wordLower: ["և", "ր", "ո", "պ", "ա"],
      soundRu: ["ев", "р", "о", "п", "а"],
      soundEn: ["yev", "r", "o", "p", "a"],
      wordRu: "Европа",
      wordEn: "Europe",
  },
  {
    image: fishImg,
    wordUpper: ["Ձ", "ՈՒ", "Կ"],
    wordLower: ["ձ", "ու", "կ"],
      soundRu: ["дз", "у", "к"],
      soundEn: ["dz", "u", "k"],
      wordRu: "рыба",
      wordEn: "fish",
  },
  {
    image: halloImg,
    wordUpper: ["Բ", "Ա", "Ր", "ԵՎ"],
    wordLower: ["բ", "ա", "ր", "և"],
      soundRu: ["б", "а", "р", "ев"],
      soundEn: ["b", "a", "r", "yev"],
      wordRu: "привет",
      wordEn: "hello",
  },
  {
    image: hareImg,
    wordUpper: ["Ն", "Ա", "Պ", "Ա", "Ս", "Տ", "Ա", "Կ"],
    wordLower: ["ն", "ա", "պ", "ա", "ս", "տ", "ա", "կ"],
      soundRu: ["н", "а", "п", "а", "с", "т", "а", "к"],
      soundEn: ["n", "a", "p", "a", "s", "t", "a", "k"],
      wordRu: "заяц",
      wordEn: "hare",
  },
  {
    image: moneyImg,
    wordUpper: ["Փ", "Ո", "Ղ"],
    wordLower: ["փ", "ո", "ղ"],
      soundRu: ["п", "о", "г"],
      soundEn: ["p'", "o", "gh"],
      wordRu: "деньги",
      wordEn: "money",
  },
  {
    image: motherImg,
    wordUpper: ["Մ", "Ա", "Յ", "Ր", "Ի", "Կ"],
    wordLower: ["մ", "ա", "յ", "ր", "ի", "կ"],
      soundRu: ["м", "а", "й", "р", "и", "к"],
      soundEn: ["m", "a", "y", "r", "i", "k"],
      wordRu: "мать",
      wordEn: "mother",
  },
  {
    image: radioImg,
    wordUpper: ["Ռ", "Ա", "Դ", "Ի", "Ո"],
    wordLower: ["ռ", "ա", "դ", "ի", "ո"],
      soundRu: ["р", "а", "д", "и", "о"],
      soundEn: ["rr", "a", "d", "i", "o"],
      wordRu: "радио",
      wordEn: "radio",
  },
  {
    image: roadImg,
    wordUpper: ["Ճ", "Ա", "Ն", "Ա", "Պ", "Ա", "Ր", "Հ"],
    wordLower: ["ճ", "ա", "ն", "ա", "պ", "ա", "ր", "հ"],
      soundRu: ["ч", "а", "н", "а", "п", "а", "р", "х"],
      soundEn: ["ch", "a", "n", "a", "p", "a", "r", "h"],
      wordRu: "дорога",
      wordEn: "road",
  },
  {
    image: rustImg,
    wordUpper: ["Ժ", "Ա", "Ն", "Գ"],
    wordLower: ["ժ", "ա", "ն", "գ"],
      soundRu: ["ж", "а", "н", "г"],
      soundEn: ["zh", "a", "n", "g"],
      wordRu: "ржавчина",
      wordEn: "rust",
  },
  {
    image: sheepImg,
    wordUpper: ["Ո", "Չ", "Խ", "Ա", "Ր"],
    wordLower: ["ո", "չ", "խ", "ա", "ր"],
      soundRu: ["о", "ч", "х", "а", "р"],
      soundEn: ["o", "ch'", "kh", "a", "r"],
      wordRu: "овца",
      wordEn: "sheep",
  },
  {
    image: soccerImg,
    wordUpper: ["Ֆ", "ՈՒ", "Տ", "Բ", "Ո", "Լ"],
    wordLower: ["ֆ", "ու", "տ", "բ", "ո", "լ"],
      soundRu: ["ф", "у", "т", "б", "о", "л"],
      soundEn: ["f", "u", "t", "b", "o", "l"],
      wordRu: "футбол",
      wordEn: "soccer",
  },
  {
    image: autumnImg,
    wordUpper: ["Ա", "Շ", "ՈՒ", "Ն"],
    wordLower: ["ա", "շ", "ու", "ն"],
    soundRu: ["а", "ш", "у", "н"],
    soundEn: ["a", "sh", "u", "n"],
    wordRu: "осень",
    wordEn: "autumn",
  },
  {
    image: sunImg,
    wordUpper: ["Ա", "Ր", "ԵՎ"],
    wordLower: ["ա", "ր", "և"],
    soundRu: ["а", "р", "ев"],
    soundEn: ["a", "r", "ev"],
    wordRu: "солнце",
    wordEn: "sun",
  },
  {
    image: yogurtImg,
    wordUpper: ["Յ", "Ո", "Գ", "ՈՒ", "Ր", "Տ"],
    wordLower: ["յ", "ո", "գ", "ու", "ր", "տ"],
    soundRu: ["й", "о", "г", "у", "р", "т"],
    soundEn: ["y", "o", "g", "u", "r", "t"],
    wordRu: "йогурт",
    wordEn: "yogurt",
  },
  {
    image: tableImg,
    wordUpper: ["Ս", "Ե", "Ղ", "Ա", "Ն"],
    wordLower: ["ս", "ե", "ղ", "ա", "ն"],
      soundRu: ["с", "е", "г", "а", "н"],
      soundEn: ["s", "e", "gh", "a", "n"],
      wordRu: "стол",
      wordEn: "table",
  },
  {
    image: lambImg,
    wordUpper: ["ՈՒ", "Լ"],
    wordLower: ["ու", "լ"],
      soundRu: ["у", "л"],
      soundEn: ["u", "l"],
      wordRu: "ягнёнок",
      wordEn: "lamb",
  },
]

const groupedWordInfo = rawWordInfoList.reduce(
  (acc, info) => {
    const initial = info.wordEn === 'sun' ? 'Ր' : info.wordUpper[0]
    ;(acc[initial] ??= []).push(info)
    return acc
  },
  {} as Record<string, WordInfo[]>,
)

export const wordInfoMap: Record<string, WordInfo[]> = Object.fromEntries(
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
