import araratImg from '../assets/ararat.webp'
import boarImg from '../assets/little-boar400x600.webp'
import telegramLogo from '../assets/telegram_logo.svg'
import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'

export default function WelcomePage() {
  const { t } = useLanguage()
  return (
    <>
      <Meta />
      <div className="relative flex flex-col items-center gap-4 p-4">
        <img src={araratImg} alt="Mount Ararat" className="w-320 rounded" />
        <div className="fixed right-4 bottom-4 w-40">
          <img
            src={boarImg}
            alt="Little boar"
          />
        <p style={{position: "relative", top:-30}}>
          <a href="https://t.me/alina_yerevan_js"
              target="_blank" rel="noopener">
            <img src={telegramLogo} alt="Telegram icon" width="20"/>
            {t('join_telegram')}            
          </a>
        </p>
      </div>
      <h1 className="text-4xl font-bold">Пет проект Алины Бродецкой</h1>

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
          <h3>Проверенные водители</h3>
          По  <a href="http://localhost:5173/ru/drivers">ссылке</a> - водители, которых одобрили мы или наше коммиьнити. Присоединяйтесь - поделимся контактами.
        </li>
        <li className="text-2xl text-left max-w-prose">
          <h3>Места и истории Еревана и Армении</h3>
          По  <a href="http://localhost:5173/ru/alphabet">ссылке</a> - заметки про Ереван и Армению
        </li>
      </ul>
      
      <h2 className="text-2xl font-bold">Как пользоваться тренажерами</h2>
      <ul>
        <li className="text-2xl text-left max-w-prose">
          <h3 className="text-2xl underline">Тренажер алфавита</h3>
          <ul>
            <li className="text-2xl text-left max-w-prose">Переходим по <a href="http://localhost:5173/ru/alphabet">ссылке</a></li>
            <li className="text-2xl text-left max-w-prose">Выбираем букву, которую хотим потренировать, щёлкаем на неё в алфавите.</li>
            <li className="text-2xl text-left max-w-prose">Смотрим, как выглядит прописное и строчное написание буквы, как она звучит.</li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl text-left max-w-prose underline">Тренажер частотных слов</h3>
          <ul>
            <li className="text-2xl text-left max-w-prose">Переходим по <a href="http://localhost:5173/ru/words">ссылке</a></li>
            <li className="text-2xl text-left max-w-prose">Разглядываем картинки, запоминаем слова.</li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl text-left max-w-prose underline">Тренажер частотных фраз</h3>
          <ul>
            <li className="text-2xl text-left max-w-prose">Переходим по <a href="http://localhost:5173/ru/phrases">ссылке</a></li>
            <li className="text-2xl text-left max-w-prose">Разглядываем картинки, запоминаем частотные фразы, смотрим по транскрипции как произносится.</li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl text-left max-w-prose underline">Учимся по вывескам</h3>
          <ul>
            <li className="text-2xl text-left max-w-prose">Переходим по <a href="http://localhost:5173/ru/plaques">ссылке</a></li>
            <li className="text-2xl text-left max-w-prose">Разглядываем двуязычные вывески, учим произношение букв, читаем заметки про вывески.</li>
          </ul>
        </li>
      </ul>

      <h1 className="text-4xl font-bold">{t('welcome_title')}</h1>
      <p className="text-2xl text-left max-w-prose">{t('welcome_desc')}</p>
      </div>
    </>
  )
}
