import { useState } from 'react'
import polarOwl from '../assets/polar_owl.webp'
import yesImg from '../assets/phrases/yes.webp'
import noImg from '../assets/phrases/no.webp'
import thankYouImg from '../assets/phrases/thank_you_hands_pressed.webp'
import youAreWelcomeImg from '../assets/phrases/you_are_welcome.webp'
import helloImg from '../assets/phrases/hello.webp'
import goodbyeImg from '../assets/phrases/goodby.webp'
import whereIsTheToiletImg from '../assets/phrases/where_is_the_toilet.webp'
import iWantThisImg from '../assets/phrases/i_want_this.webp'
import dontUnderstandImg from '../assets/phrases/i_dont_understand.webp'
import notSoGoodImg from '../assets/phrases/not_so_good.webp'
import itsGoodImg from '../assets/phrases/its_good.webp'
import howMuchIsItImg from '../assets/phrases/how_much_is_it.webp'
import whereIsTheMetroImg from '../assets/phrases/where_is_the_metro.webp'
import needPlasticBagImg from '../assets/phrases/do_you_need_plastic_bag.webp'
import peaceImg from '../assets/phrases/peace.webp'
import haveANiceDayImg from '../assets/phrases/have_a_nice_day.webp'
import lightImg from '../assets/phrases/light.webp'
import notArmenianImg from '../assets/phrases/i_am_not_armenian.webp'
import whatIsThatImg from '../assets/phrases/what_is_that.webp'
import myNameIsImg from '../assets/phrases/my_name_is.webp'
import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'

interface Phrase {
  image?: string
  hy: string
  enPron: string
  ruPron: string
  en: string
  ru: string
}

const phrases: Phrase[] = [
  { image: yesImg, hy: 'Այո', enPron: 'Ayo', ruPron: 'Аё', en: 'Yes', ru: 'Да' },
  { image: noImg, hy: 'Ոչ', enPron: 'Voch', ruPron: 'Воч', en: 'No', ru: 'Нет' },
  {
    image: thankYouImg,
    hy: 'Շնորհակալություն',
    enPron: 'Shnorhakalutyun',
    ruPron: 'Шнорhакалутюн',
    en: 'Thank you',
    ru: 'Спасибо',
  },
  {
    image: youAreWelcomeImg,
    hy: 'Խնդրեմ',
    enPron: 'Khndrem',
    ruPron: 'Хндрем',
    en: "You're welcome / Please",
    ru: 'Пожалуйста',
  },
  { image: helloImg, hy: 'Բարեւ', enPron: 'Barev', ruPron: 'Барев', en: 'Hello', ru: 'Привет' },
  {
    image: goodbyeImg,
    hy: 'Ցտեսություն',
    enPron: 'Tstesutyun',
    ruPron: 'Цтесуцюн',
    en: 'Goodbye',
    ru: 'До свидания',
  },
  {
    image: whereIsTheToiletImg,
    hy: 'Որտեղ է զուգարանը',
    enPron: 'Vortegh e zugarany',
    ruPron: 'Вортех э зугараны',
    en: 'Where is the toilet?',
    ru: 'Где туалет?',
  },
  {
    image: iWantThisImg,
    hy: 'Ես ուզում եմ սա',
    enPron: 'Yes uzum em sa',
    ruPron: 'Йес узум эм са',
    en: 'I want this',
    ru: 'Я хочу это',
  },
  {
    image: dontUnderstandImg,
    hy: 'Չեմ հասկանում',
    enPron: 'Chem haskanum',
    ruPron: 'Чем hасканум',
    en: 'I don’t understand',
    ru: 'Я не понимаю',
  },
  {
    image: notSoGoodImg,
    hy: 'Այդքան էլ լավ չէ',
    enPron: "Aydk’an el lav ch’e",
    ruPron: 'Айткан эл лав чэ',
    en: 'Not so good',
    ru: 'Не очень хорошо',
  },
  { image: itsGoodImg, hy: 'Լավ է', enPron: 'Lav e', ruPron: 'Лав э', en: 'It’s good', ru: 'Хорошо' },
  {
    image: howMuchIsItImg,
    hy: 'Որքա՞ն արժի',
    enPron: "Vork’an arji?",
    ruPron: 'Ворк’ан аржи?',
    en: 'How much is it?',
    ru: 'Сколько это стоит?',
  },
  {
    image: whereIsTheMetroImg,
    hy: 'Որտե՞ղ է մետրոն',
    enPron: 'Vortegh e metron?',
    ruPron: 'Вортех э метрон?',
    en: 'Where is the metro?',
    ru: 'Где метро?',
  },
  {
    image: needPlasticBagImg,
    hy: 'Տոպրակ է պետք?',
    enPron: "Toprak e petk'?",
    ruPron: "Топрак э петк'?",
    en: 'Do you need a plastic bag?',
    ru: 'Нужен пакет?',
  },
  {
    image: notArmenianImg,
    hy: 'Ես հայ չեմ',
    enPron: 'Yes hay chem',
    ruPron: 'Йес хай чем',
    en: 'I am not Armenian',
    ru: 'Я не армянин',
  },
  {
    image: peaceImg,
    hy: 'Խաղաղություն',
    enPron: 'Khaghaghutyun',
    ruPron: 'Хаhаhуцюн',
    en: 'Peace',
    ru: 'Мир',
  },
  {
    image: haveANiceDayImg,
    hy: 'Հաճելի օր',
    enPron: 'Hacheli or',
    ruPron: 'Хачели ор',
    en: 'Have a nice day',
    ru: 'Хорошего дня',
  },
  {
    image: lightImg,
    hy: 'Բարի գիշեր',
    enPron: 'Bari gisher',
    ruPron: 'Бари гишер',
    en: 'Good night',
    ru: 'Спокойной ночи',
  },
  {
    image: whatIsThatImg,
    hy: 'Ի՞նչ է դա',
    enPron: 'Inch e da?',
    ruPron: 'Инч э да?',
    en: 'What is that?',
    ru: 'Что это?',
  },
  {
    image: myNameIsImg,
    hy: 'Իմ անունն է ...',
    enPron: 'Im anunn e ...',
    ruPron: 'Им анунн э ...',
    en: 'My name is ...',
    ru: 'Меня зовут ...',
  },
]

export default function PhrasesPage() {
  const { t } = useLanguage()
  const [mode, setMode] = useState<'single' | 'gallery'>('single')
  const [index, setIndex] = useState(0)
  const total = phrases.length

  const Card = ({ p }: { p: Phrase }) => (
    <div className="bg-white rounded shadow overflow-hidden w-fit max-w-md mx-auto">
      <img
        src={p.image || polarOwl}
        alt="phrase illustration"
        className="object-cover w-full max-h-[33vh]"
      />
      <div className="p-4 flex flex-col justify-center text-center">
        <div className="font-bold text-2xl mb-1">{p.hy}</div>
        <div className="text-lg">{p.enPron}</div>
        <div className="text-lg mb-2">{p.ruPron}</div>
        <div>{p.en}</div>
        <div>{p.ru}</div>
      </div>
    </div>
  )

  const current = phrases[index]

  return (
    <>
      <Meta />
      <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('phrases_title')}</h1>
      <div className="mb-4">
        <select
          className="border px-2 py-1"
          value={mode}
          onChange={(e) => setMode(e.target.value as 'single' | 'gallery')}
        >
          <option value="single">{t('phrases_mode_single')}</option>
          <option value="gallery">{t('phrases_mode_gallery')}</option>
        </select>
      </div>
      {mode === 'gallery' ? (
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
          {phrases.map((p, i) => (
            <Card key={i} p={p} />
          ))}
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <button className="px-2 py-1 border rounded" onClick={() => setIndex(0)}>
              {t('nav_first')}
            </button>
            <button
              className="px-2 py-1 border rounded"
              onClick={() => setIndex((i) => (i > 0 ? i - 1 : 0))}
            >
              {t('nav_back')}
            </button>
            <span>
              {index + 1} / {total}
            </span>
            <label className="flex items-center gap-1">
              {t('nav_card_number')}
              <input
                type="number"
                min={1}
                max={total}
                value={index + 1}
                onChange={(e) => {
                  const v = parseInt(e.target.value)
                  if (!isNaN(v)) {
                    let val = v - 1
                    if (val < 0) val = 0
                    if (val >= total) val = total - 1
                    setIndex(val)
                  }
                }}
                className="w-16 border rounded px-1 text-center"
              />
            </label>
            <button
              className="px-2 py-1 border rounded"
              onClick={() => setIndex((i) => (i < total - 1 ? i + 1 : i))}
            >
              {t('nav_next')}
            </button>
            <button className="px-2 py-1 border rounded" onClick={() => setIndex(total - 1)}>
              {t('nav_last')}
            </button>
          </div>
          <Card p={current} />
        </div>
      )}
    </div>
    </>
  )
}
