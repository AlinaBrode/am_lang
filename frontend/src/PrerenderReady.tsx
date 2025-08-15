import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from './useLanguage'

export default function PrerenderReady() {
  const { lang } = useLanguage()
  const { pathname } = useLocation()
  useEffect(() => {
    const seg = pathname.match(/^\/(en|ru)/)?.[1]
    if (import.meta.env.PROD && seg === lang) {
      // Defer the event to the next frame so Helmet has time to
      // inject all meta tags before the prerenderer snapshots.
      requestAnimationFrame(() => {
        document.dispatchEvent(new Event('prerender-ready'))
      })
    }
  }, [lang, pathname])
  return null
}
