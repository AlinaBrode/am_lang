import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

const routes = [
  '/en','/ru',
  '/en/alphabet','/ru/alphabet',
  '/en/words','/ru/words',
  '/en/phrases','/ru/phrases',
  '/en/drivers','/ru/drivers',
  '/en/interesting_notes','/ru/interesting_notes',
  '/en/bilingual_signs','/ru/bilingual_signs',
  '/en/small_etudes','/ru/small_etudes',
]

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'

  const prerenderPlugins = prerender({
    routes,
    renderer: new PuppeteerRenderer({
      // Wait until the app signals that prerender data (like meta tags)
      // has been injected. This avoids capturing empty tags.
      renderAfterDocumentEvent: 'prerender-ready',
      // renderAfterElementExists: 'head link[rel="canonical"]',
      skipThirdPartyRequests: true,
      maxConcurrentRoutes: 3,
      // headless: true, // optional; defaults to true
    }),
  })

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(isBuild
        ? (Array.isArray(prerenderPlugins) ? prerenderPlugins : [prerenderPlugins])
        : []),
    ],
    build: { outDir: 'dist' },
  }
})
