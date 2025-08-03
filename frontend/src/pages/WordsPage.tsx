import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'
import appleImg from '../assets/alphabet/apple.webp'
import apricotImg from '../assets/alphabet/apricot.webp'
import bookImg from '../assets/alphabet/book.webp'
import bugImg from '../assets/alphabet/bug.webp'
import bullImg from '../assets/alphabet/bull.webp'
import butterImg from '../assets/alphabet/butter.webp'
import catImg from '../assets/alphabet/cat.webp'
import cheeseImg from '../assets/alphabet/cheese.webp'
import dogImg from '../assets/alphabet/dog.webp'
import doorImg from '../assets/alphabet/door.webp'
import earthImg from '../assets/alphabet/earth.webp'
import electricCurrentImg from '../assets/alphabet/electric_current.webp'
import europeImg from '../assets/alphabet/europe.webp'
import fishImg from '../assets/alphabet/fish.webp'
import girafImg from '../assets/alphabet/giraf.webp'
import halloImg from '../assets/alphabet/hallo.webp'
import hareImg from '../assets/alphabet/hare.webp'
import houseImg from '../assets/alphabet/house.webp'
import incubatorImg from '../assets/alphabet/incubator.webp'
import jewelryImg from '../assets/alphabet/jewelry.webp'
import lampImg from '../assets/alphabet/lamp.webp'
import lightImg from '../assets/alphabet/light.webp'
import lunchImg from '../assets/alphabet/lunch.webp'
import moneyImg from '../assets/alphabet/money.webp'
import motherImg from '../assets/alphabet/mother.webp'
import parrotImg from '../assets/alphabet/parrot.webp'
import pourImg from '../assets/alphabet/pour.webp'
import radioImg from '../assets/alphabet/radio.webp'
import raisinImg from '../assets/alphabet/raisin.webp'
import roadImg from '../assets/alphabet/road.webp'
import robotImg from '../assets/alphabet/robot.webp'
import roseImg from '../assets/alphabet/rose.webp'
import rustImg from '../assets/alphabet/rust.webp'
import sheepImg from '../assets/alphabet/sheep.webp'
import skirtImg from '../assets/alphabet/skirt.webp'
import snakeImg from '../assets/alphabet/snake.webp'
import soccerImg from '../assets/alphabet/soccer.webp'
import autumnImg from '../assets/alphabet/autumn.webp'
import steeringWheelImg from '../assets/alphabet/steering_wheel.webp'
import stoneImg from '../assets/alphabet/stone.webp'
import tableImg from '../assets/alphabet/table.webp'
import waterImg from '../assets/alphabet/water.webp'
import donkeyImg from '../assets/alphabet/donkey.webp'
import yogurtImg from '../assets/alphabet/yogurt.webp'

interface Word {
  image: string
  hy: string
  en: string
  ru: string
}

const words: Word[] = [
  { image: appleImg, hy: 'խնձոր', en: 'apple', ru: 'яблоко' },
  { image: apricotImg, hy: 'ծիրան', en: 'apricot', ru: 'абрикос' },
  { image: bookImg, hy: 'գիրք', en: 'book', ru: 'книга' },
  { image: bugImg, hy: 'բզեզ', en: 'bug', ru: 'жук' },
  { image: bullImg, hy: 'ցուլ', en: 'bull', ru: 'бык' },
  { image: catImg, hy: 'կատու', en: 'cat', ru: 'кот' },
  { image: cheeseImg, hy: 'պանիր', en: 'cheese', ru: 'сыр' },
  { image: doorImg, hy: 'դուռ', en: 'door', ru: 'дверь' },
  { image: earthImg, hy: 'երկիր', en: 'earth', ru: 'земля' },
  { image: electricCurrentImg, hy: 'հոսանք', en: 'electric current', ru: 'ток' },
  { image: girafImg, hy: 'ընձուղտ', en: 'giraffe', ru: 'жираф' },
  { image: houseImg, hy: 'տուն', en: 'house', ru: 'дом' },
  { image: incubatorImg, hy: 'ինկուբատոր', en: 'incubator', ru: 'инкубатор' },
  { image: jewelryImg, hy: 'զարդ', en: 'jewelry', ru: 'украшения' },
  { image: lampImg, hy: 'լամպ', en: 'lamp', ru: 'лампа' },
  { image: lightImg, hy: 'լույս', en: 'light', ru: 'свет' },
  { image: lunchImg, hy: 'ճաշ', en: 'lunch', ru: 'обед' },
  { image: parrotImg, hy: 'թութակ', en: 'parrot', ru: 'попугай' },
  { image: pourImg, hy: 'լցնել', en: 'pour', ru: 'наливать' },
  { image: raisinImg, hy: 'չամիչ', en: 'raisin', ru: 'изюм' },
  { image: robotImg, hy: 'ռոբոտ', en: 'robot', ru: 'робот' },
  { image: roseImg, hy: 'վարդ', en: 'rose', ru: 'роза' },
  { image: steeringWheelImg, hy: 'ղեկ', en: 'steering wheel', ru: 'руль' },
  { image: skirtImg, hy: 'զգեստ', en: 'skirt', ru: 'юбка' },
  { image: snakeImg, hy: 'օձ', en: 'snake', ru: 'змея' },
  { image: stoneImg, hy: 'քար', en: 'stone', ru: 'камень' },
  { image: waterImg, hy: 'ջուր', en: 'water', ru: 'вода' },
  { image: butterImg, hy: 'կարագ', en: 'butter', ru: 'масло' },
  { image: donkeyImg, hy: 'էշ', en: 'donkey', ru: 'осёл' },
  { image: dogImg, hy: 'շուն', en: 'dog', ru: 'собака' },
  { image: europeImg, hy: 'Եվրոպա', en: 'Europe', ru: 'Европа' },
  { image: fishImg, hy: 'ձուկ', en: 'fish', ru: 'рыба' },
  { image: halloImg, hy: 'բարև', en: 'hello', ru: 'привет' },
  { image: hareImg, hy: 'նապաստակ', en: 'hare', ru: 'заяц' },
  { image: moneyImg, hy: 'փող', en: 'money', ru: 'деньги' },
  { image: motherImg, hy: 'մայրիկ', en: 'mother', ru: 'мать' },
  { image: radioImg, hy: 'ռադիո', en: 'radio', ru: 'радио' },
  { image: roadImg, hy: 'ճանապարհ', en: 'road', ru: 'дорога' },
  { image: rustImg, hy: 'ժանգ', en: 'rust', ru: 'ржавчина' },
  { image: sheepImg, hy: 'ոչխար', en: 'sheep', ru: 'овца' },
  { image: soccerImg, hy: 'ֆուտբոլ', en: 'soccer', ru: 'футбол' },
  { image: autumnImg, hy: 'աշուն', en: 'autumn', ru: 'осень' },
  { image: yogurtImg, hy: 'յոգուրտ', en: 'yogurt', ru: 'йогурт' },
  { image: tableImg, hy: 'սեղան', en: 'table', ru: 'стол' },
]

export default function WordsPage() {
  const { t } = useLanguage()
  return (
    <>
      <Meta />
      <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('words_title')}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {words.map((w) => (
          <div key={w.hy} className="flex flex-col items-center gap-2">
            <img src={w.image} alt={w.en} className="w-40 h-auto" />
            <table className="table-auto border-collapse">
              <tbody>
                <tr>
                  <td className="border px-2 py-1 text-xl text-center">
                    {w.hy.toUpperCase()}
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-xl text-center">{w.hy}</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">{w.ru}</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">{w.en}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
