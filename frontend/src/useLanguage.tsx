import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export type Lang = 'en' | 'ru'
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
    nav_drivers: 'Reliable drivers',
    nav_small_etudes: 'Small etudes',
    nav_interesting_notes: 'Interesting notes',
    nav_bilingual_signs: 'Bilingual signs',
    nav_print: 'Print cards',
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
    small_etudes_intro:
      'Short notes and tiny programs about JavaScript.',
    interesting_notes_intro:
      'Here one can find interesting notes about Yerevan, Armenia, language and life.',
    bilingual_signs_intro:
      'Examples of Armenian signs with Russian or English transliteration.',
    letter: 'Letter',
    latin: 'Latin',
    russian: 'Russian phonetic',
    lowercase: 'Lowercase',
    small_etudes_title: 'Small etudes',
    interesting_notes_title: 'Interesting notes',
    bilingual_signs_title: 'Bilingual signs',
    sign_2025_07_20_date: '12 Aug 2025',
    sign_2025_07_20_title: 'Hrazdan railroad station',
    sign_2025_07_20_alt: 'Hrazdan railroad station sign',
    sign_2025_07_20_p1:
      'In Armenia, many signs are also translated into Russian or English. This is a surprisingly good way to learn the Armenian alphabet. Today we want to share with you a picture we took at the Hrazdan railway station. This place is not widely known as a tourist attraction but nevertheless has its own charm. Later we will share more photos of this place.',
    sign_2025_07_20_p2:
      'Below is a table showing the correspondence between the Armenian name ՀՐԱԶԴԱՆ and its Latin transliteration “hrazdan.” Here one can see that the letter Հ (H) is not pronounced in this context, Ր corresponds to “R,” Ա to “A,” Զ to “Z,” Դ to “D,” the second Ա again to “A,” and Ն to “N.”',
    note_2025_07_20_date: '11 Aug 2025',
    note_2025_07_20_title: 'Why JavaScript on a language site',
    note_2025_07_20_alt: 'Hrazdan Gorge in Yerevan',
    note_2025_07_20_p1:
      'It may seem strange to find a programming section on a site about Armenian words and notes about Yerevan.',
    note_2025_07_20_p2:
      'After leaving my accounting career, I chose to retrain as a frontend developer. After a Practicum course I kept writing training programs in JS and exploring HTML and CSS.',
    note_2025_07_20_p3:
      'At the same time we tried to learn Armenian. The alphabet was a barrier: it is bigger than the Russian one, upper and lowercase letters differ, and no simple self-study guides combined picture, word, meaning and pronunciation.',
    note_2025_07_20_p4:
      'We noticed many signs with Armenian words duplicated in Russian or Latin letters, making the alphabet easier to grasp. So we launched a simple HTML/CSS/JS project for newcomers like us and added a blog section about JavaScript basics\u2014after all, it is a language too.',
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
      'A year later we learned the owl was alive. The pharmacy owner, Artur, had rescued her after a car accident. She lost a wing and now lives in the pharmacy. Her name is Lurik, and she is a small landmark of Komitas Street. The shop itself feels like a magic box with hidden doors\u2014but that is another story.',
    note_2025_07_07_date: '7 Jul 2025',
    note_2025_07_07_title: 'Surprise in Nork Arabkir Park',
    note_2025_07_07_alt: 'Legless lizard in Nork Arabkir Park',
    note_2025_07_07_p1:
      'We live in the Arabkir district. It is considered prestigious locally, less expensive than Kentron (the center) and at the same time less dusty and cooler, which matters in summer.',
    note_2025_07_07_p2:
      'When a Muscovite hears the word "park," they picture Troparyovsky Park, Izmailovsky Park or Neskuchny Garden with vast green areas. In Yerevan, only the Botanical Garden and the park around the Armenian Genocide Museum resemble them. The rest are small cozy squares, and not every district has one.',
    note_2025_07_07_p3:
      'Arabkir is lucky to have the Nork Arabkir park with a stunning view of the Hrazdan Gorge, a pleasant walkway under conifers and a fountain. Our child\'s school is nearby, and we stroll here with friends while walking their dog.',
    note_2025_07_07_p4:
      'One warm summer evening we saw THIS on the park path! The photo is blurry because it moved quickly. Armenia is rich in snakes thanks to its mountainous dry climate, including venomous species like the viper. We googled, asked friends, even showed it to our son\'s biology teacher. The verdict: a slow worm, a legless lizard harmless to people. Still, we were quite startled when the plump meter-long reptile hurried across the path.',
    etude_2025_07_08_date: '8 Jul 2025',
    etude_2025_07_08_alt: 'Primitive vs reference types in JavaScript',
    etude_2025_07_08_long1:
      'The memory of a computer contains zeroes and ones. In order to perform calculations, draw pictures and send messages, we must attribute meaning to them. A bit is either zero or one. Eight bits make a byte. Groups of bytes can store characters, numbers, true or false values. Type tells us what sense we assign to a group of bits.',
    etude_2025_07_08_long2:
      'There are primitive types in JavaScript: Number, String, Boolean, Undefined, Null. When we work with them, one can say "The value is in a variable" and results of operations are predictable. "a=b" means we take a value from b and place a copy into a.',
    etude_2025_07_08_long3:
      'There are also non-primitive types like Object, Array, Function. In this case a variable contains a reference to an object somewhere in memory. "a=b" means now "a" references the same object as "b", so changes via "b" affect "a" as well.',
    etude_2025_07_08_short1: 'Type defines how to interpret values in memory.',
    etude_2025_07_08_short2:
      'Primitive types: Number, String, Boolean, Undefined, Null — value stored directly.',
    etude_2025_07_08_short3:
      'Reference types: Object, Array, Function — variable holds a reference.',
    drivers_title: 'Reliable drivers',
    drivers_col_name: 'Driver',
    drivers_col_region: 'Region',
    drivers_col_cars: 'Available cars',
    drivers_col_phones: 'Phones',
    drivers_col_site: 'Website',
  },
  ru: {
    welcome_title: 'Добро пожаловать в тренажеры армянского языка',
    welcome_desc: 'Этот сервис помогает начинающим изучать армянский язык на русском и английском.',
    nav_alphabet: 'Тренажер алфавита',
    nav_words: 'Тренажер слов',
    nav_phrases: 'Тренажер фраз',
    nav_drivers: 'Проверенные водители',
    nav_small_etudes: 'маленькие этюды',
    nav_interesting_notes: 'любопытные заметки',
    nav_bilingual_signs: 'Двуязычные вывески',
    nav_print: 'Печать карточек',
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
    small_etudes_intro:
      'Короткие заметки о JavaScript и маленькие программки.',
    interesting_notes_intro:
      'Здесь можно найти любопытные заметки о Ереване, Армении, языке и жизни.',
    bilingual_signs_intro:
      'Примеры армянских вывесок с переводом на русский или английский.',
    letter: 'Буква',
    latin: 'Латиница',
    russian: 'Русская фонетика',
    lowercase: 'строчная',
    small_etudes_title: 'маленькие этюды',
    interesting_notes_title: 'любопытные заметки',
    bilingual_signs_title: 'Двуязычные вывески',
    sign_2025_07_20_date: '12 августа 2025',
    sign_2025_07_20_title: 'Железнодорожная станция Раздан',
    sign_2025_07_20_alt: 'вывеска железнодорожной станции Раздан',
    sign_2025_07_20_p1:
      'В Армении многие вывески продублированы на русском или английском. Это удивительно хороший способ выучить армянский алфавит. Сегодня мы хотим поделиться фотографией, сделанной на железнодорожной станции Раздан. Это место не является популярной туристической достопримечательностью, но всё же обладает своим шармом. Позже мы поделимся и другими фотографиями этого места.',
    sign_2025_07_20_p2:
      'Ниже приведена таблица соответствия между армянским названием ՀՐԱԶԴԱՆ и его русской транслитерацией «раздан». Видно, что буква Հ (H) здесь не произносится, Ր соответствует «Р», Ա — «А», Զ — «З», Դ — «Д», второе Ա снова «А», а Ն — «Н».',
    note_2025_07_20_date: '11 августа 2025',
    note_2025_07_20_title: 'Зачем JavaScript на языковом сайте',
    note_2025_07_20_alt: 'ущелье Раздана в Ереване',
    note_2025_07_20_p1:
      'Сначала может показаться странным, что на сайте о армянских словах и заметках про Армению есть раздел про программирование.',
    note_2025_07_20_p2:
      'После того как я окончательно порвала с бухгалтерией и законами, выбрала переподготовку по фронтенду и после курса Практикума продолжаю писать учебные программки на JS, выкладывать их на git и разбираться в html и css.',
    note_2025_07_20_p3:
      'Параллельно мы пытались учить армянский язык. Алфавит оказался непреодолимым: он больше и сложнее русского, заглавные и строчные буквы различаются, а простых самоучителей со связкой картинка-слово-значение-произношение нет.',
    note_2025_07_20_p4:
      'На городских вывесках мы заметили дублирование армянских слов русскими или латинскими буквами, что облегчает освоение алфавита. Так возникла идея простого проекта на html, css и js для таких релокантов, как мы. Поэтому в блог добавили раздел про основы JavaScript — ведь это тоже язык.',
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
      'Через год мы узнали, что сова всё-таки живая. Машина сбила её, и хозяин аптеки Артур выходил её, хотя она потеряла крыло. Теперь Лурик — так зовут совушку — живёт в аптеке и стала достопримечательностью улицы Комитаса. Сама аптека похожа на волшебную шкатулку с тайными дверцами, но это уже другая история.',
    note_2025_07_07_date: '7 июля 2025',
    note_2025_07_07_title: 'Сюрприз в парке Нор Арабкир',
    note_2025_07_07_alt: 'веретеница в парке Нор Арабкир',
    note_2025_07_07_p1:
      'Мы живем в районе Арабкир. Район считается престижным по местным меркам, но не таким дорогим, как Кентрон (центр) и в то же время менее пыльным и более прохладным, что важно в летнее время.',
    note_2025_07_07_p2:
      'Когда москвич слышит слово "парк", он вспоминает Тропарёвский парк, Измайловский парк, Нескучный сад с их большой территорией и зелёными массивами. В Ереване на них похожи Ботанический сад и парк вокруг музея Геноцида Армян. Остальные — скорее небольшие, уютные скверы и не каждый район может похвастаться ими.',
    note_2025_07_07_p3:
      'Району Арабкир в этом плане повезло — у него есть парк Норк Арабкир с совершенно потрясающим видом на ущелье Раздан, приятной прогулочной зоной под хвойными деревьями и фонтаном. Рядом с парком находится школа нашего ребёнка. Здесь мы прогуливаемся с друзьями, выгуливая их пса.',
    note_2025_07_07_p4:
      'Итак, тёплым летним вечером на дорожке в парке мы увидели ЭТО?! Фото немного мутное, ведь оно быстро передвигалось. Армения богата змеями: горная страна с сухим и жарким климатом, здесь довольно много ядовитых видов, таких как гюрза. Мы начали гуглить, рассылать друзьям, показали учительнице биологии сына. Вердикт — это веретеница, безногая ящерица, абсолютно безопасная для людей. Но испугались мы знатно, когда метровая упитанная рептилия, спеша по своим делам, переползла мимо нас по дорожке.',
    etude_2025_07_08_date: '8 июля 2025',
    etude_2025_07_08_alt: 'примитивные и ссылочные типы в JavaScript',
    etude_2025_07_08_long1:
      'Память компьютера состоит из нулей и единиц. Чтобы выполнять вычисления, рисовать картинки и отправлять сообщения, мы должны придать им смысл. Бит — это 0 или 1. Восемь бит — байт. Группы байтов могут хранить символы, числа, значения «истина/ложь». Тип говорит, какой смысл мы вкладываем в набор битов.',
    etude_2025_07_08_long2:
      'В JavaScript есть примитивные типы: Number, String, Boolean, Undefined, Null. Когда мы работаем с ними, можно сказать «значение находится в переменной», и результаты операций предсказуемы. «a=b» читаем как «берём значение из b и кладём его копию в a».',
    etude_2025_07_08_long3:
      'Есть и ссылочные типы: Object, Array, Function. В этом случае переменная содержит ссылку на объект где-то в памяти компьютера. «a=b» означает «теперь a ссылается на тот же объект, что и b», поэтому изменения через b затрагивают значение a.',
    etude_2025_07_08_short1: 'Тип определяет, как интерпретировать значения в памяти.',
    etude_2025_07_08_short2:
      'Примитивные типы: Number, String, Boolean, Undefined, Null — значение хранится в переменной.',
    etude_2025_07_08_short3:
      'Ссылочные типы: Object, Array, Function — в переменной хранится ссылка.',
    drivers_title: 'Проверенные водители',
    drivers_col_name: 'Водитель',
    drivers_col_region: 'Регион',
    drivers_col_cars: 'Доступные машины',
    drivers_col_phones: 'Телефоны',
    drivers_col_site: 'Сайт',
  },
}

const LanguageContext = createContext<I18n | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const initial = (location.pathname.match(/^\/(en|ru)/)?.[1] as Lang) || 'en'
  const [lang, setLangState] = useState<Lang>(initial)

  useEffect(() => {
    const current = location.pathname.match(/^\/(en|ru)/)?.[1] as Lang | undefined
    if (current && current !== lang) {
      setLangState(current)
    }
  }, [location.pathname, lang])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    const rest = location.pathname.replace(/^\/(en|ru)/, '')
    navigate(`/${l}${rest}${location.search}${location.hash}`)
    setLangState(l)
  }

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
