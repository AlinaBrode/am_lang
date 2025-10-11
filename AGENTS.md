Project: am_lang (React/Vite frontend + docs)

Purpose
- Speed up adding “publications” (Interesting Notes, Small Etudes) based on new files in `am_lang/docs` and images in `am_lang/frontend/src/assets/**`.

Where content actually comes from
- The site renders text from i18n strings in `am_lang/frontend/src/useLanguage.tsx` (EN and RU).
- Page lists are hard‑coded:
  - Interesting Notes: `am_lang/frontend/src/pages/InterestingNotes.tsx` (array `notes` with `slug`, `dateKey`, `titleKey`, `render(...)`).
  - Small Etudes: `am_lang/frontend/src/pages/SmallEtudes.tsx` (array `etudes` with i18n keys, slug, and image).
- Markdown files in `am_lang/docs` are source material only; they are NOT parsed at runtime.

Naming conventions (use consistently)
- Interesting Notes i18n keys: `note_YYYY_MM_DD_*` (date/title/alt/pN/liN). If multiple posts same day, suffix a/b (e.g., `note_2025_10_11a_*`).
- Small Etudes i18n keys: `etude_YYYY_MM_DD_*` (date/title/alt/longN/shortN).
- Slugs: lowercase words with dashes (e.g., `kaliningrad-prelude`, `xor-proof`).

Images
- Put new images under `am_lang/frontend/src/assets/...` and import them in the page file.
- If you need an asset served but not shown yet, import and reference it in a hidden `<img className="hidden" />` so Vite emits it, or place it in `am_lang/frontend/public/**` to get a stable URL without hashing (e.g., `/stories/minus_00.webp`).

How to add a new Interesting Note (from a docs/*.md + image)
1) Image
   - Save under `frontend/src/assets/stories/<file>.webp`.
   - Import in `frontend/src/pages/InterestingNotes.tsx` (e.g., `import myImg from '../assets/stories/my.webp'`).
2) i18n
   - In `frontend/src/useLanguage.tsx` add EN + RU strings with keys `note_YYYY_MM_DD_*`.
   - Use single quotes for TS strings and escape apostrophes with `\'`.
   - For multi‑paragraph HTML use `dangerouslySetInnerHTML` and inline HTML (`<p>`, `<ul>`, `<pre>`). Do NOT insert raw newlines inside strings — prefer `<br/>` or escape as `\n` inside `<pre>` blocks.
3) Page entry
   - In `frontend/src/pages/InterestingNotes.tsx`, add a new object at the TOP of the `notes` array with:
     - `slug`, `dateKey`, `titleKey`.
     - `render: (t) => ( ... )` pairing the imported `img` and the paragraphs/bullets via `t('note_...')` keys.
4) Verify routing
   - Links use `/${lang}/interesting_notes/${note.slug}`; in-page anchors use element id = slug.

How to add a new Small Etude (from docs + image)
1) Image
   - Save under `frontend/src/assets/etudes/<file>.webp` and import in `frontend/src/pages/SmallEtudes.tsx`.
2) i18n
   - Add EN + RU strings in `useLanguage.tsx` with keys `etude_YYYY_MM_DD_*`.
   - Long paragraphs go in `..._longN`. Short bullet list items go in `..._shortN`.
   - If you need a code block, use `<pre class="bg-gray-100 p-2 rounded overflow-x-auto text-sm">...</pre>` and escape newlines with `\n`.
3) Page entry
   - Add an object at the TOP of `etudes` with keys: `titleKey`, `dateKey`, `altKey`, `longTextKeys[]`, `shortTextKeys[]`, `img`, and a `slug`.

Common gotchas (please read)
- Apostrophes break TS strings if unescaped. Always write `it\'s`, `don\'t`, etc.
- Do not include raw newlines in TS string literals; use `<br/>` or `\n` inside `<pre>`.
- When inserting big HTML strings, prefer a single‑line string. If you wrap across lines, ensure it remains one TS string.
- If adding two posts on the same day, use suffix `a` / `b` in i18n keys to avoid collisions.

Build & Deploy
- From `am_lang/frontend`:
  - `npm ci`
  - `npm run build`
- From `am_lang` (once `firebase-tools` is installed and logged in):
  - `firebase deploy --only hosting`
- Hosting serves from `frontend/dist` (see `am_lang/firebase.json`). SPA rewrites are configured.

Commit/push
- Commit concise messages describing section + content, e.g.:
  - `Interesting Notes: add post (Moscow rent Part 2 — Landlord); i18n EN/RU; import moscow_let.webp`
  - `Small Etudes: add XOR proof (EN/RU); import strict_proof.webp; table/code`

Quick checklist (Interesting Note)
- [ ] Image imported in page
- [ ] i18n EN + RU added (escape apostrophes)
- [ ] New `notes` item added at top with slug
- [ ] Build OK
- [ ] Deploy OK

Quick checklist (Small Etude)
- [ ] Image imported in page
- [ ] i18n EN + RU long/short strings added (escape apostrophes; `\n` in `<pre>`)
- [ ] New `etudes` item added at top with keys arrays
- [ ] Build OK
- [ ] Deploy OK

