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
      <h1 className="text-4xl font-bold">{t('welcome_title')}</h1>
      <p className="text-2xl text-left max-w-prose">{t('welcome_desc')}</p>
      </div>
    </>
  )
}
