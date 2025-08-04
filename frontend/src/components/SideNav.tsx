import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../useLanguage'

interface SideNavProps {
  open: boolean
  toggle: () => void
}

export default function SideNav({ open, toggle }: SideNavProps) {
  const { lang, setLang, t } = useLanguage()
  const location = useLocation()

  const base = `/${lang}`
  const items = [
    { to: `${base}/alphabet`, label: t('nav_alphabet') },
    { to: `${base}/words`, label: t('nav_words') },
    { to: `${base}/phrases`, label: t('nav_phrases') },
    { to: `${base}/drivers`, label: t('nav_drivers') },
    { to: `${base}/interesting_notes`, label: t('nav_interesting_notes') },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-64 min-h-screen bg-sky-200 text-blue-900 p-6 flex flex-col justify-between
        transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <Link to={base} className="block uppercase font-bold mb-4">
            {t('welcome_title')}
          </Link>
          <select
            className="mb-6 bg-sky-100 border rounded px-2 py-1 text-sm w-full"
            value={lang}
            onChange={(e) => setLang(e.target.value as 'en' | 'ru')}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
          <ul className="space-y-2">
            {items.map(({ to, label }) => {
              const active = location.pathname === to
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block px-3 py-2 rounded uppercase ${
                      active ? 'bg-blue-300 text-white' : 'hover:bg-sky-300'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <p>
          💛 Like this site?{' '}
          <a href="https://boosty.to/tarstars/donate" target="_blank">
            Make a donation via Boosty
          </a>
        </p>
        <Link
          to={`${base}/alphabet`}
          className="mt-6 block text-center bg-white text-blue-800 font-bold border border-blue-800 rounded py-3 hover:bg-blue-50"
        >
          Start Learning
        </Link>
      </nav>
      <button
        onClick={toggle}
        className={`fixed top-4 z-40 bg-sky-200 text-blue-900 border border-blue-900 p-2 rounded-r transition-all ${
          open ? 'left-64 -translate-x-full' : 'left-0'
        }`}
      >
        {open ? '◀' : '▶'}
      </button>
    </>
  )
}

