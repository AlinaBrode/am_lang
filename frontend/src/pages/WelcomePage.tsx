import araratImg from '../assets/ararat.webp'
import boarImg from '../assets/little-boar400x600.webp'
import telegramLogo from '../assets/telegram_logo.svg'
import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'

export default function WelcomePage() {
  const { t, lang } = useLanguage()
  const styles = {
    h1: 'text-4xl font-bold',
    h2: 'text-2xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    li: 'text-xl text-left max-w-prose',
    p: 'text-xl text-left max-w-6xl',
  }
  return (
    <>
      <Meta />
      <div className="relative flex flex-col items-center gap-4 p-4">
        <img src={araratImg} alt="Mount Ararat" className="w-320 rounded" />
        <div className="fixed right-4 bottom-4 w-40">
          <img src={boarImg} alt="Little boar" />
          <p className="relative -top-7">
            <a
              href="https://t.me/alina_yerevan_js"
              target="_blank"
              rel="noopener"
            >
              <img src={telegramLogo} alt="Telegram icon" width="20" />
              {t('join_telegram')}
            </a>
          </p>
        </div>

        {lang === 'ru' ? (
          <>
            <h1 className={`${styles.h1} my-4`}> Добро пожаловать в мир Армянского языка</h1>

            <p className={styles.p}>
              Этот сайт про переезд в Армению. Здесь можно изучить самые азы армянского языка: алфавит по смешным картинкам,
              наиболее ходовые слова и фразы. Кроме того, мы надеемся собрать комьюнити из желающих
              изучать язык и преподавать его а также делиться своими впечатлениями об Армении.
              Мы - это Алина и Арсений. Мы недавно переехали и делимся здесь своими трагикомическими историями.
              Кроме того, этот сайт - практический проект по изучению JavaScript и освоению профессии
              фронтендер. Поэтому здесь будут заметки об обучении основам программирования, маленькие учебные программки,
              заметки об учебных курсах.
            </p>

            <h2 className={styles.h2}>Из чего состоит</h2>
          
            <h3 className={styles.h3}>Про жизнь в Армении</h3>
            <ul>
              <li className={styles.li}>
                <h4 className={styles.h4}>Проверенные водители</h4>
                <p>
                  По <a href="/ru/drivers">ссылке</a> – водители, которых одобрили мы
                  или наше комьюнити. Присоединяйтесь – поделимся контактами.
                </p>
              </li>
              <li className={styles.li}>
                <h4 className={styles.h4}>Места и истории Еревана и Армении</h4>
                <p>
                  По <a href="/ru/alphabet">ссылке</a> – заметки про Ереван и Армению
                </p>
              </li>
            </ul>
            <h2 className={styles.h2}>Тренажеры армянского языка</h2>
            <ul>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Тренажер алфавита</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Переходим по <a href="/ru/alphabet">ссылке</a>
                  </li>
                  <li>
                    Выбираем букву, которую хотим потренировать, щёлкаем на неё
                    в алфавите.
                  </li>
                  <li>
                    Смотрим, как выглядит прописное и строчное написание буквы,
                    как она звучит.
                  </li>
                </ul>
              </li>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Тренажер частотных слов</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Переходим по <a href="/ru/words">ссылке</a>
                  </li>
                  <li>Разглядываем картинки, запоминаем слова.</li>
                </ul>
              </li>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Тренажер частотных фраз</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Переходим по <a href="/ru/phrases">ссылке</a>
                  </li>
                  <li>
                    Разглядываем картинки, запоминаем частотные фразы, смотрим
                    по транскрипции как произносится.
                  </li>
                </ul>
              </li>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Учимся по вывескам</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Переходим по <a href="/ru/plaques">ссылке</a>
                  </li>
                  <li>
                    Разглядываем двуязычные вывески, учим произношение букв,
                    читаем заметки про вывески.
                  </li>
                </ul>
              </li>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Маленькие этюды</h4>
                <p>
                  По <a href="/ru/small_etudes">ссылке</a> – короткие заметки о
                  JavaScript и небольшие программки, которые показывают
                  интересные идеи информатики или практические трюки.
                </p>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h1 className={`${styles.h1} my-4`}>
              Welcome to the world of the Armenian language
            </h1>

            <p className={styles.p}>
              This site is about moving to Armenia. Here you can learn the very
              basics of the Armenian language: the alphabet through funny
              pictures, the most common words and phrases. In addition, we hope
              to bring together a community of people who want to learn and
              teach the language as well as share their impressions of Armenia.
              We are Alina and Arseniy. We recently moved and share our
              tragicomic stories here. This site is also a practical project for
              learning JavaScript and becoming frontend developers. Therefore,
              you will find notes on learning the basics of programming, small
              training programs, and comments on training courses.
            </p>

            <h2 className={styles.h2}>What it includes</h2>

            <h3 className={styles.h3}>About life in Armenia</h3>
            <ul>
              <li className={styles.li}>
                <h4 className={styles.h4}>Reliable drivers</h4>
                <p>
                  At the <a href="/en/drivers">link</a> you'll find drivers approved
                  by us or our community. Join us and we'll share their contacts.
                </p>
              </li>
              <li className={styles.li}>
                <h4 className={styles.h4}>Places and stories of Yerevan and Armenia</h4>
                <p>
                  Follow the <a href="/en/alphabet">link</a> for notes about Yerevan
                  and Armenia
                </p>
              </li>
            </ul>
            <h2 className={styles.h2}>Armenian language trainers</h2>
            <ul>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Alphabet trainer</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Go to the <a href="/en/alphabet">link</a>
                  </li>
                  <li>
                    Select the letter you want to practise and click it in the
                    alphabet.
                  </li>
                  <li>
                    See the uppercase and lowercase forms and hear how it
                    sounds.
                  </li>
                </ul>
              </li>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Frequent words trainer</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Go to the <a href="/en/words">link</a>
                  </li>
                  <li>Look at the pictures and memorise the words.</li>
                </ul>
              </li>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Frequent phrases trainer</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Go to the <a href="/en/phrases">link</a>
                  </li>
                  <li>
                    Look at the pictures, memorise frequent phrases, and use the
                    transcription to check pronunciation.
                  </li>
                </ul>
              </li>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Learning through signs</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Go to the <a href="/en/plaques">link</a>
                  </li>
                  <li>
                    Study bilingual signs, learn letter pronunciation and read
                    notes about the signs.
                  </li>
                </ul>
              </li>
              <li className={styles.li}>
                <h4 className={`${styles.h4} underline`}>Small etudes</h4>
                <p>
                  Follow the <a href="/en/small_etudes">link</a> for short notes
                  about JavaScript and tiny programs that highlight interesting
                  computer science ideas or practical tricks.
                </p>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  )
}
