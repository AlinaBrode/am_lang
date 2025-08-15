import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../useLanguage'

const ORIGIN = 'https://am-lang.web.app';

function ensureTrailingSlash(p: string) {
  return p.endsWith('/') ? p : p + '/'
}

export default function Meta() {
  const { lang } = useLanguage()
  const location = useLocation()
  const rawPath = location.pathname.replace(/^\/(en|ru)/, '') || '/'
  const path = ensureTrailingSlash(rawPath) // <-- always end with "/"
  const canonical = `https://am-lang.web.app/${lang}${path}`
  const meta = {
    en: {
      title: 'Armenian Language Tools',
      description:
        'Learn Armenian alphabet, words and phrases with pronunciation for English and Russian speakers.',
      keywords:
        'Armenian language, learn Armenian, Armenian alphabet, Armenian words, Armenian phrases',
    },
    ru: {
      title: 'Тренажеры армянского языка',
      description:
        'Изучайте армянский алфавит, слова и фразы с произношением для русско- и англоговорящих.',
      keywords:
        'армянский язык, изучение армянского, армянский алфавит, армянские слова, армянские фразы',
    },
  } as const

  console.log("lang=", lang);

  const current = meta[lang]

  console.log("current=", current);

  const en = `https://am-lang.web.app/en${path}`
  const ru = `https://am-lang.web.app/ru${path}`
  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{current.title}</title>
      {/* Canonical + alternates (always with trailing slash) */}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" href={en} hrefLang="en" />
      <link rel="alternate" href={ru} hrefLang="ru" />
      <link rel="alternate" href={`${ORIGIN}/en${path}`} hrefLang="x-default" />
      <meta name="description" content={current.description} />
      <meta name="keywords" content={current.keywords} />
      <meta property="og:title" content={current.title} />
      <meta property="og:description" content={current.description} />
      <meta property="og:image" content={`${ORIGIN}/favicon.ico`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
