import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from '../pages/WelcomePage'
import { LanguageProvider } from '../useLanguage'

const renderLang = (path: string) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <LanguageProvider>
          <Routes>
            <Route path="/:lang" element={<WelcomePage />} />
          </Routes>
        </LanguageProvider>
      </MemoryRouter>
    </HelmetProvider>
  )

test('EN page sets meta description', async () => {
  renderLang('/en')
  await waitFor(() => {
    const tag = document.head.querySelector('meta[name="description"]')
    expect(tag).not.toBeNull()
    expect(tag!.getAttribute('content')?.toLowerCase()).toContain('armenian')
  })
})

test('RU page sets meta description', async () => {
  renderLang('/ru')
  await waitFor(() => {
    const tag = document.head.querySelector('meta[name="description"]')
    expect(tag).not.toBeNull()
    expect(tag!.getAttribute('content')).toMatch(/армянск/iu)
  })
})
