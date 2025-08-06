import araratImg from '../assets/ararat.webp'
import boarImg from '../assets/little-boar400x600.webp'
import telegramLogo from '../assets/telegram_logo.svg'
import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'

export default function WelcomePage() {
  const { t, lang } = useLanguage()
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
            <h1 className="text-4xl font-bold">
              Пет проект Алины Бродецкой
            </h1>

            <h2 className="text-2xl font-bold">Из чего состоит</h2>
            <h3>Тренажеры</h3>
            <ul>
              <li className="text-2xl text-left max-w-prose">Тренажер алфавита</li>
              <li className="text-2xl text-left max-w-prose">Тренажер частотных слов</li>
              <li className="text-2xl text-left max-w-prose">Тренажер частотных фраз</li>
              <li className="text-2xl text-left max-w-prose">Учимся по вывескам</li>
            </ul>
            <h3>Про жизнь в Армении</h3>
            <ul>
              <li className="text-2xl text-left max-w-prose">
                <h4>Проверенные водители</h4>
                По <a href="/ru/drivers">ссылке</a> – водители, которых одобрили мы
                или наше комьюнити. Присоединяйтесь – поделимся контактами.
              </li>
              <li className="text-2xl text-left max-w-prose">
                <h4>Места и истории Еревана и Армении</h4>
                По <a href="/ru/alphabet">ссылке</a> – заметки про Ереван и Армению
              </li>
            </ul>

            <h2 className="text-2xl font-bold">Как пользоваться тренажерами</h2>
            <ul>
              <li className="text-2xl text-left max-w-prose">
                <h4 className="underline">Тренажер алфавита</h4>
                <ul>
                  <li>
                    Переходим по <a href="/ru/alphabet">ссылке</a>
                  </li>
                  <li>
                    Выбираем букву, которую хотим потренировать, щёлкаем на
                    неё в алфавите.
                  </li>
                  <li>
                    Смотрим, как выглядит прописное и строчное написание буквы,
                    как она звучит.
                  </li>
                </ul>
              </li>
              <li className="text-2xl text-left max-w-prose">
                <h4 className="underline">Тренажер частотных слов</h4>
                <ul>
                  <li>
                    Переходим по <a href="/ru/words">ссылке</a>
                  </li>
                  <li>Разглядываем картинки, запоминаем слова.</li>
                </ul>
              </li>
              <li className="text-2xl text-left max-w-prose">
                <h4 className="underline">Тренажер частотных фраз</h4>
                <ul>
                  <li>
                    Переходим по <a href="/ru/phrases">ссылке</a>
                  </li>
                  <li>
                    Разглядываем картинки, запоминаем частотные фразы, смотрим
                    по транскрипции как произносится.
                  </li>
                </ul>
              </li>
              <li className="text-2xl text-left max-w-prose">
                <h4 className="underline">Учимся по вывескам</h4>
                <ul>
                  <li>
                    Переходим по <a href="/ru/plaques">ссылке</a>
                  </li>
                  <li>
                    Разглядываем двуязычные вывески, учим произношение букв,
                    читаем заметки про вывески.
                  </li>
                </ul>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold">
              Alina Brodetskaya's pet project
            </h1>

            <h2 className="text-2xl font-bold">What it includes</h2>
            <h3>Trainers</h3>
            <ul>
              <li className="text-2xl text-left max-w-prose">Alphabet trainer</li>
              <li className="text-2xl text-left max-w-prose">Frequent words trainer</li>
              <li className="text-2xl text-left max-w-prose">Frequent phrases trainer</li>
              <li className="text-2xl text-left max-w-prose">Learning through signs</li>
            </ul>
            <h3>About life in Armenia</h3>
            <ul>
              <li className="text-2xl text-left max-w-prose">
                <h4>Reliable drivers</h4>
                At the <a href="/en/drivers">link</a> you'll find drivers approved
                by us or our community. Join us and we'll share their contacts.
              </li>
              <li className="text-2xl text-left max-w-prose">
                <h4>Places and stories of Yerevan and Armenia</h4>
                Follow the <a href="/en/alphabet">link</a> for notes about Yerevan
                and Armenia.
              </li>
            </ul>

            <h2 className="text-2xl font-bold">How to use the trainers</h2>
            <ul>
              <li className="text-2xl text-left max-w-prose">
                <h4 className="underline">Alphabet trainer</h4>
                <ul>
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
              <li className="text-2xl text-left max-w-prose">
                <h4 className="underline">Frequent words trainer</h4>
                <ul>
                  <li>
                    Go to the <a href="/en/words">link</a>
                  </li>
                  <li>Look at the pictures and memorise the words.</li>
                </ul>
              </li>
              <li className="text-2xl text-left max-w-prose">
                <h4 className="underline">Frequent phrases trainer</h4>
                <ul>
                  <li>
                    Go to the <a href="/en/phrases">link</a>
                  </li>
                  <li>
                    Look at the pictures, remember frequent phrases and use the
                    transcription to check pronunciation.
                  </li>
                </ul>
              </li>
              <li className="text-2xl text-left max-w-prose">
                <h4 className="underline">Learning through signs</h4>
                <ul>
                  <li>
                    Go to the <a href="/en/plaques">link</a>
                  </li>
                  <li>
                    Study bilingual signs, learn letter pronunciation and read
                    notes about the signs.
                  </li>
                </ul>
              </li>
            </ul>
          </>
        )}

        <h1 className="text-4xl font-bold">{t('welcome_title')}</h1>
        <p className="text-2xl text-left max-w-prose">{t('welcome_desc')}</p>
      </div>
    </>
  )
}
