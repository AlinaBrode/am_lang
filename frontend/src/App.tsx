import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import usePageViews from './usePageViews'
import WelcomePage from './pages/WelcomePage'
import AlphabetPage from './pages/AlphabetPage'
import WordsPage from './pages/WordsPage'
import PhrasesPage from './pages/PhrasesPage'
import InterestingNotes from './pages/InterestingNotes'
import ReliableDriversPage from './pages/ReliableDriversPage'
import SmallEtudes from './pages/SmallEtudes'
import { LanguageProvider } from './useLanguage'
import SideNav from './components/SideNav'
import './index.css'

export default function App() {
  const [navOpen, setNavOpen] = useState(true)
  return (
    <BrowserRouter>
      <LanguageProvider>
        <TrackPageViews />
        <div className="flex min-h-screen">
          {/** Side navigation with slide toggle **/}
          <SideNav open={navOpen} toggle={() => setNavOpen(!navOpen)} />
          <div className={`flex-1 transition-all duration-300 ${navOpen ? 'ml-64' : 'ml-0'}`}>
            <Routes>
              <Route path="/" element={<Navigate to="/en" replace />} />
              <Route path="/:lang" element={<WelcomePage />} />
              <Route path="/:lang/alphabet" element={<AlphabetPage />} />
              <Route path="/:lang/words" element={<WordsPage />} />
              <Route path="/:lang/phrases" element={<PhrasesPage />} />
              <Route path="/:lang/drivers" element={<ReliableDriversPage />} />
              <Route path="/:lang/interesting_notes" element={<InterestingNotes />} />
              <Route path="/:lang/small_etudes" element={<SmallEtudes />} />
              <Route path="*" element={<Navigate to="/en" replace />} />
            </Routes>
          </div>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  )
}

function TrackPageViews() {
  usePageViews()
  return null
}
