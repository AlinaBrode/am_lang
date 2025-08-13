import { useEffect, useState } from 'react'
import boarImg from '../assets/little-boar400x600.webp'
import telegramLogo from '../assets/telegram_logo.svg'
import { useLanguage, Lang } from '../useLanguage'

const phrases: Record<Lang, string[]> = {
  en: ['Hi there!', 'Have fun!', 'Keep learning!'],
  ru: ['Привет!', 'Хорошего дня!', 'Учите армянский!']
}

export default function Boar() {
  const { lang, t } = useLanguage()
  const [phrase, setPhrase] = useState('')

  useEffect(() => {
    const list = phrases[lang]
    setPhrase(list[Math.floor(Math.random() * list.length)])
  }, [lang])

  return (
    <div className="fixed right-2 bottom-2 z-50 w-24 sm:w-32 md:w-40 text-center">
      <div className="relative">
        <img src={boarImg} alt="Little boar" className="w-full" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2">
          <div className="relative bg-white border border-gray-300 rounded-lg px-2 py-1 text-xs shadow">
            {phrase}
            <svg viewBox="0 0 20 10" className="absolute -bottom-2 left-1/2 -translate-x-1/2" width="20" height="10">
              <polygon points="0,0 20,0 10,10" className="fill-white stroke-gray-300" />
            </svg>
          </div>
        </div>
      </div>
      <p className="-mt-4 text-sm">
        <a
          href="https://t.me/alina_yerevan_js"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1"
        >
          <img src={telegramLogo} alt="Telegram icon" width="20" />
          {t('join_telegram')}
        </a>
      </p>
    </div>
  )
}

