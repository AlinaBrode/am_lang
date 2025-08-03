import { BrowserRouter, Routes, Route } from 'react-router-dom'
import usePageViews from './usePageViews'
import WelcomePage from './pages/WelcomePage'
import AlphabetPage from './pages/AlphabetPage'
import WordsPage from './pages/WordsPage'
import PhrasesPage from './pages/PhrasesPage'
import InterestingNotes from './pages/InterestingNotes'
import ReliableDriversPage from './pages/ReliableDriversPage'
import { LanguageProvider } from './useLanguage'
import SideNav from './components/SideNav'
import './index.css'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <TrackPageViews />
        <div className="flex min-h-screen">
          <SideNav />
          <div className="flex-1 ml-64">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/alphabet" element={<AlphabetPage />} />
              <Route path="/words" element={<WordsPage />} />
              <Route path="/phrases" element={<PhrasesPage />} />
              <Route path="/drivers" element={<ReliableDriversPage />} />
              <Route path="/interesting_notes" element={<InterestingNotes />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

function TrackPageViews() {
  usePageViews()
  return null
}
