import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from './useLanguage'

export default function PrerenderReady() {
  const { lang } = useLanguage()
  const { pathname } = useLocation()
  useEffect(() => {
    const seg = pathname.match(/^\/(en|ru)/)?.[1]
    if (import.meta.env.PROD && seg === lang) {
      document.dispatchEvent(new Event('prerender-ready'))
    }
  }, [lang, pathname])
  return null
}
