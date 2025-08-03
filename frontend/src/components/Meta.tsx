import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../useLanguage'

export default function Meta() {
  const { lang } = useLanguage()
  const location = useLocation()
  const path = location.pathname.replace(/^\/(en|ru)/, '') || '/'
  const canonical = `https://am-lang.web.app/${lang}${path}`
  const en = `https://am-lang.web.app/en${path}`
  const ru = `https://am-lang.web.app/ru${path}`
  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <link rel="alternate" href={en} hrefLang="en" />
      <link rel="alternate" href={ru} hrefLang="ru" />
    </Helmet>
  )
}
