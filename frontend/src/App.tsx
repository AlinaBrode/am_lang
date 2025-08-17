import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import usePageViews from './usePageViews'
import WelcomePage from './pages/WelcomePage'
import AlphabetPage from './pages/AlphabetPage'
import WordsPage from './pages/WordsPage'
import PhrasesPage from './pages/PhrasesPage'
import InterestingNotes from './pages/InterestingNotes'
import PrerenderReady from './PrerenderReady';
import ReliableDriversPage from './pages/ReliableDriversPage'
import SmallEtudes from './pages/SmallEtudes'
import BilingualSigns from './pages/BilingualSigns'
import PrintPage from './pages/PrintPage'
import { LanguageProvider } from './useLanguage'
import SideNav from './components/SideNav'
import Boar from './components/Boar'
import './index.css'

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <BrowserRouter>
      <LanguageProvider>
        <TrackPageViews />
        <Boar />
        <div className="flex min-h-screen">
          {/** Side navigation with slide toggle **/}
          <SideNav open={navOpen} toggle={() => setNavOpen(!navOpen)} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/en" replace />} />
              <Route path="/print" element={<PrintPage />} />
              <Route path="/:lang" element={<WelcomePage />} />
              <Route path="/:lang/alphabet" element={<AlphabetPage />} />
              <Route path="/:lang/words" element={<WordsPage />} />
              <Route path="/:lang/phrases" element={<PhrasesPage />} />
              <Route path="/:lang/drivers" element={<ReliableDriversPage />} />
              <Route path="/:lang/interesting_notes/:slug?" element={<InterestingNotes />} />
              <Route path="/:lang/bilingual_signs/:slug?" element={<BilingualSigns />} />
              <Route path="/:lang/small_etudes/:slug?" element={<SmallEtudes />} />
              <Route path="*" element={<Navigate to="/en" replace />} />
            </Routes>
          </div>
        </div>
        <PrerenderReady />
      </LanguageProvider>
    </BrowserRouter>
  )
}

function TrackPageViews() {
  usePageViews()
  return null
}
