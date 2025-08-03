import { createContext, useContext, useState } from 'react'

type Lang = 'en' | 'ru'
interface I18n {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const strings: Record<Lang, Record<string, string>> = {
  en: {
    welcome_title: 'Welcome to Armenian Language Tools',
    welcome_desc: 'This service helps Russian and English speakers start learning the Armenian language.',
    nav_alphabet: 'Alphabet trainer',
    nav_words: 'Word trainer',
    nav_phrases: 'Phrase trainer',
    nav_interesting_notes: 'Interesting notes',
    alphabet_title: 'Armenian Alphabet',
    words_title: 'Simple Words',
    phrases_title: 'Frequent Phrases',
    phrases_mode_single: 'Single card',
    phrases_mode_gallery: 'Gallery',
    join_telegram: 'Join our Telegram channel',
    nav_first: 'First',
    nav_back: 'Back',
    nav_next: 'Next',
    nav_last: 'Last',
    nav_card_number: 'Card #',
    coming_soon: 'Content coming soon',
    interesting_notes_intro:
      'Here one can find interesting notes about Yerevan, Armenia, language and life.',
    letter: 'Letter',
    latin: 'Latin',
    russian: 'Russian phonetic',
    lowercase: 'Lowercase',
    interesting_notes_title: 'Interesting notes',
    note_2025_06_17_date: '17 Jun 2025',
    note_2025_06_17_title: "It's impossible to pronounce",
    note_2025_06_17_alt: 'Alexander Tamanian',
    note_2025_06_17_p1:
      'At the foot of the majestic Cascade stands a monument dedicated to Alexander Tamanian\u2014a great man with a troubled life. He was the visionary behind the master plan of Yerevan, the very layout we see today.',
    note_2025_06_17_p2:
      'During the day, winds from the Ararat Valley dominate. But in the evening, a fresh and clean mountain breeze sweeps down in the opposite direction. Tamanian designed Yerevan\u2019s streets like a one-way aerodynamic valve: heat and dust gradually permeate the city during the day, but are quickly flushed out in the evening.',
    note_2025_06_17_p3:
      'Now, let\u2019s take a closer look at the inscription on the monument. The letters spell "\u0543\u0531\u0550\u053F\u0531\u0550\u053A\u0535\u054F". A rough transliteration would be \u201cts-ar-t-ar-ar-pet.\u201d But be careful: the initial \u201cts\u201d sound is unique to the Armenian language and can be very difficult to pronounce correctly. If you want to master it, it\u2019s best to hear it from an Armenian friend\u2014or even take a few lessons.',
    note_2025_06_19_date: '19 Jun 2025',
    note_2025_06_19_title: 'The pharmacy owl',
    note_2025_06_19_alt: 'Lurik the pharmacy owl',
    note_2025_06_19_p1:
      'Hello everyone! Today we examine a very common word we see on city streets: the Armenian for "pharmacy"\u2014\u0534\u0535\u0542\u0531\u054F\u0548\u0556 (degh-a-tun). It combines \u0564\u0565\u0572 meaning "medicine" and \u057F\u0578\u0582\u0576 meaning "house," literally "house of medicine."',
    note_2025_06_19_p2:
      'Once while walking through Arabkir near Druzhba station, we stopped by a pharmacy and, to our surprise, saw an owl in the middle of the room. Motionless, it mechanically turned its head at regular intervals. We thought nothing of it and went home.',
    note_2025_06_19_p3:
      'A year later we learned the owl was alive. The pharmacy owner, Artur, had rescued her after a car accident. She lost a wing and now lives in the pharmacy. Her name is Lurik, and she is a small landmark of Komitas Street. The shop itself feels like a magic box with hidden doors\u2014but that is another story.'
  },
  ru: {
    welcome_title: 'Добро пожаловать в тренажеры армянского языка',
    welcome_desc: 'Этот сервис помогает начинающим изучать армянский язык на русском и английском.',
    nav_alphabet: 'Тренажер алфавита',
    nav_words: 'Тренажер слов',
    nav_phrases: 'Тренажер фраз',
    nav_interesting_notes: 'любопытные заметки',
    alphabet_title: 'Армянский алфавит',
    words_title: 'Простые слова',
    phrases_title: 'Частые фразы',
    phrases_mode_single: 'По одной',
    phrases_mode_gallery: 'Галерея',
    nav_first: 'Первая',
    nav_back: 'Назад',
    nav_next: 'Вперед',
    nav_last: 'Последняя',
    nav_card_number: 'Номер',
    join_telegram: 'Присоединяйся к нашему каналу',
    coming_soon: 'Содержимое скоро появится',
    interesting_notes_intro:
      'Здесь можно найти любопытные заметки о Ереване, Армении, языке и жизни.',
    letter: 'Буква',
    latin: 'Латиница',
    russian: 'Русская фонетика',
    lowercase: 'строчная',
    interesting_notes_title: 'любопытные заметки',
    note_2025_06_17_date: '17 июня 2025',
    note_2025_06_17_title: 'Невозможно произнести',
    note_2025_06_17_alt: 'Александр Таманян',
    note_2025_06_17_p1:
      'У подножия величественного Каскада стоит памятник Александру Таманяну — великому человеку с непростой судьбой. Именно он придумал генеральный план Еревана, по которому город выглядит таким, каким мы видим его сегодня.',
    note_2025_06_17_p2:
      'Днем преобладают ветры из Араратской долины. Но вечером с гор спускается свежий ветерок в обратном направлении. Таманян спроектировал улицы Еревана как односторонний аэродинамический клапан: жара и пыль постепенно наполняют город днем, но быстро выветриваются вечером.',
    note_2025_06_17_p3:
      'Теперь давайте приглядимся к надписи на памятнике. Буквы складываются в слово «ՃԱՐՏԱՐԱՊԵՏ». Приблизительная транслитерация — «ц-ар-т-ар-ар-пет». Но будьте осторожны: начальный звук «ц» уникален для армянского языка и его трудно произнести правильно. Если хотите освоить его, лучше услышать от армянского друга или даже взять пару уроков.',
    note_2025_06_19_date: '19 июня 2025',
    note_2025_06_19_title: 'Сова в аптеке',
    note_2025_06_19_alt: 'совушка Лурик в аптеке',
    note_2025_06_19_p1:
      'Всем барев! Сегодня речь пойдёт об очень распространённом слове, которое мы встречаем каждый день — «аптека» по-армянски «ԴԵՂԱՏՈՒՆ» (дех-а-тун). Это составное слово: դեղ — лекарство, տուն — дом, то есть «дом лекарства».',
    note_2025_06_19_p2:
      'Однажды, гуляя по району Арабкир недалеко от метро Дружба, мы зашли в аптеку и увидели посередине помещения сову — или чучело совы. Она сидела неподвижно и механически поворачивала голову. Мы пожали плечами и ушли.',
    note_2025_06_19_p3:
      'Через год мы узнали, что сова всё-таки живая. Машина сбила её, и хозяин аптеки Артур выходил её, хотя она потеряла крыло. Теперь Лурик — так зовут совушку — живёт в аптеке и стала достопримечательностью улицы Комитаса. Сама аптека похожа на волшебную шкатулку с тайными дверцами, но это уже другая история.'
  },
}

const LanguageContext = createContext<I18n | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = (key: string) => strings[lang][key] || key
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within provider')
  return ctx
}
