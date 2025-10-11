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
    sign_2025_08_12_date: '12 Aug 2025',
    sign_2025_08_12_title: 'Hrazdan railroad station',
    sign_2025_08_12_alt: 'Hrazdan railroad station sign',
    sign_2025_08_12_p1:
      'In Armenia, many signs are also translated into Russian or English. This is a surprisingly good way to learn the Armenian alphabet. Today we want to share with you a picture we took at the Hrazdan railway station. This place is not widely known as a tourist attraction but nevertheless has its own charm. Later we will share more photos of this place.',
    sign_2025_08_12_p2:
      'Below is a table showing the correspondence between the Armenian name ՀՐԱԶԴԱՆ and its Latin transliteration “hrazdan.” Here one can see that the letter Հ (H) is not pronounced in this context, Ր corresponds to “R,” Ա to “A,” Զ to “Z,” Դ to “D,” the second Ա again to “A,” and Ն to “N.”',
    sign_2025_08_25_date: '25 Aug 2025',
    sign_2025_08_25_title: 'Yerevan / Երևան',
    sign_2025_08_25_sign_alt: 'Road sign with the word Yerevan in Armenian',
    sign_2025_08_25_bench_alt: 'Bench with the word Yerevan in Armenian',
    sign_2025_08_25_p1:
      'Yerevan is full of bilingual signs. While strolling and looking around, you can dive into the Armenian alphabet. At first we just noticed them, and now we deliberately hunt for them. Today we show a road sign with the city name itself: Yerevan — Ե-Ր-Ե-Վ-Ա-Ն.',
    sign_2025_08_25_p2:
      'You can see it not only on plaques and facades but also on street benches—an urban art form from Soviet times. We will show more such references later. As a bonus, here is the word “ԵՐԵՎԱՆ” on a Yerevan bench.',
    note_2025_10_04_date: '4 Oct 2025',
    note_2025_10_04_title: 'Apartment rent in Moscow. Part 2 (Landlord)',
    note_2025_10_04_alt: 'Moscow apartment letting — moving boxes',
    note_2025_10_04_p1:
      'Continuing the “Rent” series — today from the landlord\'s perspective.',
    note_2025_10_04_p2:
      'There are different ways to rent out a flat in Moscow: yourself or via services. For two years we\'ve been using Yandex.Rent and here is our experience.',
    note_2025_10_04_good: 'What\'s convenient:',
    note_2025_10_04_li1:
      'All viewings and meetings with tenants are handled by the service.',
    note_2025_10_04_li2:
      'They also take care of the handover after move‑out.',
    note_2025_10_04_li3:
      'The contract includes a fee for early termination by the tenant.',
    note_2025_10_04_li4:
      'Damage is compensated: an inventory and photos are made before renting. We had two broken chairs reimbursed.',
    note_2025_10_04_li5: 'Insurance is included in the price.',
    note_2025_10_04_bad: 'What\'s not so convenient:',
    note_2025_10_04_li6:
      'The contract is official, for 11 months. Tax is mandatory (4% for self‑employed). Payments come directly from Yandex.Rent — the tax office sees it.',
    note_2025_10_04_li7:
      'The commission is included in the rent, so the flat looks pricier against competitors. The market is saturated, and even in August (peak season) we couldn\'t let it without lowering the price.',

    note_2025_09_27_date: '27 Sep 2025',
    note_2025_09_27_title: 'Apartment rent. Part 1 (Tenant)',
    note_2025_09_27_alt: 'Moving with boxes between rented apartments in Yerevan',
    note_2025_09_27_p1:
      'Barev everyone! Today — practical matters: rent. Whether you are a landlord or a tenant, the word usually comes with hassle. Right now we are both: in Yerevan we rent, in Moscow we lease out our flat. Today — about us as tenants.',
    note_2025_09_27_p2:
      'We started with <a href="https://list.am" target="_blank" rel="noopener noreferrer">list.am</a>: filters by rooms, price, district are convenient. The minus is many fake listings. Often realtors reply: you call about a specific ad — they say it\'s already rented but “we have other options.” We weren\'t lucky with the app and turned to a realtor.',
    note_2025_09_27_p3:
      'We didn\'t choose at random — we followed a friend\'s recommendation and never regretted it. Our realtor is Nikolay — for us, a benchmark of professionalism, kindness and charisma.',
    note_2025_09_27_li1:
      '<strong>Cons:</strong> you pay a commission — 30–50% of a month\'s rent. Our realtor takes 30%.',
    note_2025_09_27_li2:
      '<strong>Pros:</strong> you pick 5–6 apartments, and all are shown the same day; the realtor provides a car. Ours did not take a commission on our repeat request.',
    note_2025_09_27_p4:
      'In Armenia the rental income tax is 10%, but many landlords don\'t pay it. If you need registration at the residence address, a landlord who doesn\'t declare income can refuse.',
    note_2025_09_27_p5:
      'Once you choose an option, you sign a contract, pay the commission and move in. Our realtor arranged the move and negotiated the initial price down. For the first flat he also negotiated buying missing items: microwave, iron, vacuum cleaner. We got lucky — not all do this.',
    note_2025_09_27_p6:
      'In short: you can search yourself for free, or pay a commission and get a service — help with the move and carrying things. We can share our realtor\'s contacts and recommend him. The photo of our move between apartments is a bonus.',
    note_2025_09_22_date: '22 Sep 2025',
    note_2025_09_22_title: 'Pros and cons of life in Yerevan, part 3',
    note_2025_09_22_alt: 'Minus collage: downsides of life in Yerevan',
    note_2025_09_22_p1:
      'As promised, here is a small spoon of tar in our barrel of Yerevan honey. Today — a few <strong>cons</strong>, mostly about prices.',
    note_2025_09_22_li1:
      '<strong>Groceries and meat prices.</strong> Sometimes higher than in Moscow. Fruit and vegetables are cheaper at stalls near residential houses. Meat prices are similar to, or higher than, Moscow. Supermarket prices vary widely for the same products, and stalls differ too. We shop at the “Yerevan City” chain; SAS is significantly more expensive. You have to keep a mental note of a fair price: it can “jump” even in the same place.',
    note_2025_09_22_li2:
      '<strong>Housing costs.</strong> After 2022, Yerevan rents jumped several times and have been going down slowly. For example, a 3‑room apartment in Arabkir with an average or older good renovation costs from 300–400k AMD/month (≈70–80k RUB) plus utilities. In other Armenian cities rent is much lower.',
    note_2025_09_22_li3:
      '<strong>High utility bills.</strong> There is no central heating in Yerevan, so in winter utilities can reach 100k AMD (≈20k RUB).',
    note_2025_09_22_li4:
      '<strong>Service quality is uneven.</strong> In malls, when buying electronics, you may not get full product information or a proper consultation.',
    note_2025_09_22_li5:
      '<strong>Electronics are pricey.</strong> Around 30% more expensive than in Moscow.',
    note_2025_09_22_li6:
      '<strong>Air pollution.</strong> In winter there is often no wind, and smoke from stoves in private sectors covers the city with smog. Many heat with whatever they have, even car tires. At other times it\'s a bit easier, but dust from the Ararat Valley settles in a layer you could wipe daily. Sometimes a landfill near the city catches fire. On peak days, people advise wearing a respirator outdoors.',
    note_2025_09_22_p2:
      'That\'s our list for today; everyone\'s experience will differ.',
        note_2025_10_11a_date: '11 Oct 2025',
    note_2025_10_11a_title: 'Kaliningrad. Prelude.',
    note_2025_10_11a_alt: 'Kalmykia crossed out: trip to Kaliningrad',
    note_2025_10_11a_p1:
      'As promised, we write in the style of a “letter from Prostokvashino.” The mic goes to Alina.',
    note_2025_10_11a_p2:
      'Hi everyone! The poll winner was “Stories from life and trips”. Second place went to two other topics—we\'ll cover them later. Today we turn the calendar back almost five years to tell the story of our spectacular trip to <s>Elista</s> Kaliningrad, part 1.',
    note_2025_10_11a_p3:
      'During Vlad\'s school break we decided to travel together. At first we chose Elista: Asian flavor, Buddhism, the magic Poplar—it sounded intriguing. Arseniy had been there and liked it; also in April it\'s warmer than in Moscow. Tickets bought, hotel booked.',
    note_2025_10_11a_p4:
      'Then came February 2022. Flights to some destinations were suspended. Elista was on the list. We had to return tickets and cancel the hotel. “How about Kaliningrad? They say it\'s beautiful!” — “Let\'s go!” Tickets bought, hotel chosen. Plan: three days in Svetlogorsk (with a car to see the surroundings) and two days in Kaliningrad. Sounds like a plan!',
    note_2025_10_11a_p5:
      'Red flags started when the apartment owner told us the day before that he couldn\'t check us in due to heating issues. We canceled that option, frantically searched and booked another. Departure day! Vacation mode on—time to travel.',
    note_2025_10_11a_p6:
      'Task #1. Car‑sharing or taxi? After a short discussion we chose car‑sharing. With time to spare—just in case.',

    note_2025_10_11b_date: '11 Oct 2025',
    note_2025_10_11b_title: 'Kaliningrad. The Beginning.',
    note_2025_10_11b_alt: 'Toll lane and transponder barrier on the highway',
    note_2025_10_11b_p1:
      'Let\'s sample posts according to the poll results. The winner was “Stories from life and trips.” It\'s time to digitize our Kaliningrad journey. Many friends heard this as a stand‑up story; now it\'s a “letter from Prostokvashino.”',
    note_2025_10_11b_p2:
      'The Beginning. By Arseniy.',
    note_2025_10_11b_p3:
      'Nothing foreshadowed anything. We left home with an hour and twenty to spare—four hours before the departure from Sheremetyevo. A small argument: taxi or car‑sharing? A flap of a butterfly\'s wing—and we chose car‑sharing.',
note_2025_09_06_date: '6 Sep 2025',
    note_2025_09_06_title: 'Sevan trip. Part 1',
    note_2025_09_06_alt: 'Lake Sevan view from Tsovasar hotel',
    note_2025_09_06_p1:
      'Our spontaneous trip turned out to be very rich and memorable for just one and a half days. Step by step. Today we talk about the hotel where we stayed — <a href="https://yandex.com/maps/-/CLUAI68s" target="_blank" rel="noopener noreferrer">Tsovasar Family Rest Complex</a>.',
    note_2025_09_06_p2:
      'We booked a room with a kitchen-living room, bedroom and a balcony overlooking Sevan. The weather at the lake is very pleasant at this time: sunny and calm during the day, air temperature 20–22 °C and water about 19 °C. Impressions of the hotel:',
    note_2025_09_06_li1: 'Friendly staff.',
    note_2025_09_06_li2: 'Nice grounds with an equipped descent into the lake and a small beach.',
    note_2025_09_06_li3:
      'Tasty breakfasts (omelet, cheeses, rolls, sausages, pancakes, cottage cheese, yogurt). There is a choice, everything is fresh and delicious.',
    note_2025_09_06_p3:
      'You can have lunch or dinner at the restaurant. The menu is tasty and varied, mostly Armenian cuisine. A full dinner for three cost us 20 000 drams including service. <a href="https://t.me/alina_yerevan_js/56" target="_blank" rel="noopener noreferrer">Our Telegram post</a> with the restaurant menu.',
    note_2025_09_06_p4:
      'The area has many gazebos, benches and lounge areas. There is also a place to barbecue. Price: 36 000 drams per night. In our opinion the price matches the quality.',
    note_2025_09_06_p5:
      'Since our channel is also about the Armenian language, let\'s look at the word Ծովասար (Tsovasar). It consists of two parts: Ծով (tsov) → “sea” and սար (sar) → “mountain.” Altogether it means “sea mountain.”',
    note_2025_09_14_date: '14 Sep 2025',
    note_2025_09_14_title: 'Sevan trip. Part 2',
    note_2025_09_14_alt: 'Altitude 1900 dive club on Lake Sevan',
    note_2025_09_14_p1:
      'As mentioned earlier, our one-and-a-half-day getaway was full of places and activities. On day two we found a dive club on the lakeshore. The “Altitude 1900” club can be found on <a href="https://www.booking.com/Share-eAKyW1W" target="_blank" rel="noopener noreferrer">Booking</a>, on <a href="https://diving.am/ru/dive-resort/" target="_blank" rel="noopener noreferrer">their website</a> or on <a href="https://maps.app.goo.gl/R47hhhHg7mjxbVLy9" target="_blank" rel="noopener noreferrer">Google Maps</a>. They also offer hotel services—rooms are small but fine to stay overnight. There is diving gear rental and SUP boards. The weather favored us—sunny and calm—so we rented SUPs and enjoyed a pleasant 1.5‑hour paddle on a mirror‑smooth lake.',
    note_2025_09_14_p2:
      'Even during the phone booking, the service pleasantly surprised me. The club director turned out to be very friendly and gladly answered all our questions. Absolutely European‑level service.',
    note_2025_09_14_p3:
      'As a bonus, the company is a distributor of ScubaPro gear—clothing and accessories for water sports—at procurement prices. For reference: we found a similar shop in Moscow, and prices there were roughly 1.5× higher. We couldn’t resist and bought a few things.',
    note_2025_09_14_p4:
      'There is also a small café on the grounds where you can have a tasty snack: sandwiches, fries, pancakes, coffee and tea. Prices are perfectly reasonable. The territory is bright and stylish—photos attached.',
    note_2025_09_18_date: '18 Sep 2025',
    note_2025_09_18_title: 'Pros and cons of life in Yerevan. Part 2',
    note_2025_09_18_alt: 'Pros and cons — part 2 illustration',
    note_2025_09_18_p1:
      'We continue the list of “pros” of life in Yerevan.',
    note_2025_09_18_pros_title: 'Pros:',
    note_2025_09_18_li1:
      '<strong>Fresh, high‑quality meat.</strong> Wide selection of pork, chicken, and beef; prices can be high, sometimes above Moscow levels—but more on that below.',
    note_2025_09_18_li2:
      '<strong>Many accessible attractions.</strong> If you want to see mountains, monasteries, Lake Sevan, or relax in a quiet hotel, most are about an hour’s drive away. Very convenient. Tourist areas offer cozy hotels for any taste. You can use taxis or trusted drivers.',
    note_2025_09_18_li3:
      '<strong>Yerevan’s attractions.</strong> Countless museums: the History Museum, National Gallery, Saryan Museum, Khachaturian Museum, Komitas Museum, and more. We still haven’t seen them all after two years. Yerevan hosts exhibitions and festivals; for example, in June there’s a lively, tasty Wine Days festival with several central streets closed for pedestrians to stroll and sample local wines and food.',
    note_2025_09_18_li4:
      '<strong>Nature.</strong> Extraordinary mountain landscapes that fascinate and captivate. We’re lucky to have frequent school hikes into the mountains, so hiking has become a habit—and we’re not tired of it).',
    note_2025_09_18_li5:
      '<strong>High quality restaurants and cafes.</strong> The city center is busy and touristy, with options for every taste—from sushi to traditional Armenian cuisine. Evening Yerevan is utterly charming and cozy.',
    note_2025_09_18_li6:
      '<strong>Views.</strong> Besides stunning man‑made sights like the Cascade, Yerevan also has natural ones. We love walking along the Hrazdan Gorge for its unique views, and the view from the bridge to Davtashen is breathtaking.',
    note_2025_09_01_date: '1 Sep 2025',
    note_2025_09_01_title: 'Pros and cons of life in Yerevan. Part 1',
    note_2025_09_01_alt: 'Pros and cons of life in Yerevan',
    note_2025_09_01_p1:
      'After two years of living in Armenia, in Yerevan, we put together a list of pros and cons that may help anyone considering Yerevan as a place to live. A small disclaimer: for us the pros still outweigh any cons—we love Yerevan as it is, cozy and homely.',
    note_2025_09_01_pros_title: 'Pros:',
    note_2025_09_01_li1:
      '<strong>Openness and friendliness of locals.</strong> People create the atmosphere of a place, and here they are wonderful: open and kind, ready to help.',
    note_2025_09_01_li2:
      '<strong>Antiquity and uniqueness.</strong> Yerevan is more than 2,800 years old. Antiquity permeates the city and its surroundings: ancient monasteries and fortresses, the heritage of the kingdom of Urartu, winemaking, many interesting personalities who contributed not only to Armenian but also to world history. Yerevan and Armenia are like a rich full-bodied wine whose flavor reveals itself gradually.',
    note_2025_09_01_li3:
      '<strong>Warm and dry climate.</strong> The weather in Yerevan is very pleasant: we extend summer by three months—May is already a summer month, and until November temperatures can reach 20°C. The heat is tolerable thanks to the dry climate and the convenient layout of the center: when walking, you can always stay on the shady side.',
    note_2025_09_01_li4:
      '<strong>Fruits and vegetables.</strong> Excellent quality, and you can always find options for any budget. We prefer buying at vegetable stalls near our home. Out of season, imported fruit from Iran is of decent quality. In season, prices for fruit and vegetables are low.',
    note_2025_09_01_li5:
      '<strong>Cheap taxis.</strong> We mostly walk around Yerevan because we love long strolls, or we use taxis. They are affordable even during rush hour. For example, from our Arabkir district to the center at rush hour you can get there for about 1,200 drams (~300 rubles).',
    note_2025_08_11_date: '11 Aug 2025',
    note_2025_08_11_title: 'Why JavaScript on a language site',
    note_2025_08_11_alt: 'Hrazdan Gorge in Yerevan',
    note_2025_08_11_p1:
      'It may seem strange to find a programming section on a site about Armenian words and notes about Yerevan.',
    note_2025_08_11_p2:
      'After leaving my accounting career, I chose to retrain as a frontend developer. After a Practicum course I kept writing training programs in JS and exploring HTML and CSS.',
    note_2025_08_11_p3:
      'At the same time we tried to learn Armenian. The alphabet was a barrier: it is bigger than the Russian one, upper and lowercase letters differ, and no simple self-study guides combined picture, word, meaning and pronunciation.',
    note_2025_08_11_p4:
      'We noticed many signs with Armenian words duplicated in Russian or Latin letters, making the alphabet easier to grasp. So we launched a simple HTML/CSS/JS project for newcomers like us and added a blog section about JavaScript basics\u2014after all, it is a language too.',
    note_2025_08_18_date: '18 Aug 2025',
    note_2025_08_18_title: 'Moving to Yerevan. Part 1',
    note_2025_08_18_alt: 'Packed suitcases before moving',
    note_2025_08_18_p1:
      'Let\'s go back to 2023 when we prepared to move. This is the first post of the series.',
    note_2025_08_18_p2:
      'The first question was where to go. To stay close to relatives we considered only visa-free countries. The first candidate was Serbia. We read channels and articles, exchanged euros, estimated monthly expenses, looked at school options. A sad finding: in winter the air pollution index on iqair.com goes off the scale. In Yerevan it isn\'t perfect either, but more about that later. We planned to visit Moscow a couple of times a year, and the price of a direct Moscow–Belgrade flight—230 thousand rubles—made this plan unrealistic. For Armenia the price is about 75–100 thousand rubles for three adults, with many direct flights of Russian airlines (Aeroflot, UTair, Ural Airlines etc.) and Armenian ones—ShirakAvia, FlyOne Armenia. The final step before choosing Armenia was to find a school. We searched via channels <a href="https://t.me/ru_schools_armenia" target="_blank" rel="noopener noreferrer">t.me/ru_schools_armenia</a> and <a href="https://t.me/erevanmoms" target="_blank" rel="noopener noreferrer">t.me/erevanmoms</a>.',
    note_2025_08_18_p3: 'Here is our relocation checklist:',
    note_2025_08_18_li1_title: 'Power of attorney for a close relative',
    note_2025_08_18_li1_text:
      'Needed to represent your interests in organizations. If you plan to rent out your apartment, mention this as a separate item.',
    note_2025_08_18_li2_title: 'Withdraw cash rubles for exchange in Armenia',
    note_2025_08_18_li2_text:
      'Russian bank cards are not accepted for payment, so you need cash. The best dram/ruble rate is in SAS exchange offices—a department store chain in Yerevan. You can track favorable rates in Telegram channels, e.g. <a href="https://t.me/armeniaCurrency" target="_blank" rel="noopener noreferrer">t.me/armeniaCurrency</a>.',
    note_2025_08_18_li3_title: 'Obtain a residence permit or plan visa runs',
    note_2025_08_18_li3_text:
      'A non-resident may stay in Armenia for 180 days; afterward a visa run is required. Our residence permit was arranged by an employer. A child under 18 can stay in Armenia without crossing the border every six months.',
    note_2025_08_18_li4_title: 'Choose a school',
    note_2025_08_18_li4_text:
      "We'll cover school selection in a separate post.",
    note_2025_08_18_li5_title: 'Choose an apartment',
    note_2025_08_18_li5_text:
      'Armenian channels offer many rental options; there is list.am where in the long-term rental section one can pick an apartment. The downside of this site is many fake listings from realtors. We used a realtor recommended by friends.',
    note_2025_08_18_li6_title: 'Rent out your apartment',
    note_2025_08_18_li6_text:
      "We used Yandex.Rent to lease our Moscow flat. You don\'t have to meet the tenant; you choose one via an application form. There's a contract. The downside is that it\'s harder to rent out. For tenants the service adds a 7% monthly commission to the rent.",
    note_2025_08_18_li7_title: 'Set up essential services',
    note_2025_08_18_li7_text:
      "Download necessary apps—banking, Gosuslugi, mos.ru, the taxpayer's cabinet. All apps work via VPN.",
    note_2025_08_18_li8_title: 'Check for outstanding debts: unpaid fines, child support...',
    note_2025_08_18_li8_text:
      'Otherwise you may not be allowed to leave the country.',
    note_2025_08_25_date: '25 Aug 2025',
    note_2025_08_25_title: 'Moving to Yerevan. Part 2',
    note_2025_08_25_alt: 'School visit in Yerevan',
    note_2025_08_25_p1:
      'One of the toughest questions of relocation is how a child will react. It is stressful for an adult, and doubly so for a teenager. When we discussed moving, Vlad was 12\u00bd; he moved at 13. Choosing a school was fundamental. I carefully studied school channels; here is the main <a href="https://t.me/ru_schools_armenia" target="_blank" rel="noopener noreferrer">channel</a> again. It has a handy table listing schools and tuition. Based on parent comments and our vision we considered private schools with smaller classes and more attentive teachers. Entrance exams reduce the risk of bullying.',
    note_2025_08_25_p2:
      'At the time our friends lived in Yerevan and helped with advice on choosing schools and stories about life there, convincing us that our choice of country and city was a good idea. They later moved to Scotland where Olga runs an interesting blog about life there and the antique trade. From the list we looked at the Free School, Newberg and Perspektiva. All had good reviews and a young team of passionate teachers. During our summer vacation we decided to visit Yerevan, tour the schools, meet the principal, head teacher and teachers, and see the neighborhoods and buildings. We made appointments. In Perspektiva and the Free School, Vlad took entrance exams in Russian, math and English. At Newberg we saw the building and met the director. Atmosphere-wise Vlad liked Newberg most, but we did not attend the exams in person.',
    note_2025_08_25_p3:
      'After returning to Moscow he took Russian and math exams online, had an interview in English and a talk with a psychologist. He was accepted into 7th grade. We do not regret this choice: he studies with pleasure and met good classmates. We formed a community with their parents. The only downside for me is that our school cannot provide an international diploma, unlike the Free School with international accreditation or, additionally, BISA (a Cambridge-accredited school). Another plus of our school is its location in the cleaner and cooler Arabkir district.',
    note_2025_08_25_p4:
      'Back to worries: the move was easy for our child. He packed with us, helped choose an apartment (that will be a separate post) and enthusiastically joined the preparations despite concerns about new classmates and teachers. Of course, it all depends on the child.',
    note_2025_08_25_p5:
      'Here is my personal list of private and public schools (based on what I read in channels and our experience).',
    note_2025_08_25_private: 'Private',
    note_2025_08_25_private_cons_title: 'Cons:',
    note_2025_08_25_private_con1: 'Diplomas are not recognized abroad.',
    note_2025_08_25_private_con2: 'High tuition\u2014about $400 per month or more.',
    note_2025_08_25_private_pros_title: 'Pros:',
    note_2025_08_25_private_pro1: 'No social security card required for admission or study.',
    note_2025_08_25_private_pro2: 'Individual approach.',
    note_2025_08_25_private_pro3: 'Quality teaching.',
    note_2025_08_25_private_pro4: 'More foreign language hours.',
    note_2025_08_25_private_pro5: 'Small classes: 7\u201310 students.',
    note_2025_08_25_private_pro6: 'Comfortable environment.',
    note_2025_08_25_public: 'Public',
    note_2025_08_25_public_pros_title: 'Pros:',
    note_2025_08_25_public_pro1:
      'A state certificate issued in Armenia is accepted abroad; specific requirements depend on the country and university, and tuition is free.',
    note_2025_08_25_public_cons_title: 'Cons:',
    note_2025_08_25_public_con1:
      'Admission can be difficult: registration is online and requires a social security card.',
    note_2025_08_25_public_con2: 'Classes can be large.',
    note_2025_08_25_public_con3: 'Education quality.',
    note_2025_08_25_public_con4: 'Higher chance of bullying.',
    note_2025_08_25_docs:
      'Documents from a Russian school are easy to retrieve: come, write an application and take your personal file.',
    note_2025_08_25_p6:
      'If you have any questions, feel free to ask in the comments.',
    note_2025_06_17_date: '17 Jun 2025',
    note_2025_06_17_title: "It\'s impossible to pronounce",
    note_2025_06_17_alt: 'Alexander Tamanian',
    note_2025_06_17_p1:
      'At the foot of the majestic Cascade stands a monument dedicated to Alexander Tamanian\u2014a great man with a troubled life. He was the visionary behind the master plan of Yerevan, the very layout we see today.',
    note_2025_06_17_p2:
      'During the day, winds from the Ararat Valley dominate. But in the evening, a fresh and clean mountain breeze sweeps down in the opposite direction. Tamanian designed Yerevan\u2019s streets like a one-way aerodynamic valve: heat and dust gradually permeate the city during the day, but are quickly flushed out in the evening.',
    note_2025_06_17_p3_part1:
      'Now, let\u2019s take a closer look at the inscription on the monument. The letters spell ',
    note_2025_06_17_p3_highlight: '\u0543\u0531\u0550\u053F\u0531\u0550\u053A\u0535\u054F',
    note_2025_06_17_p3_part2:
      '. A rough transliteration would be \u201cts-ar-t-ar-ar-pet.\u201d But be careful: the initial \u201cts\u201d sound is unique to the Armenian language and can be very difficult to pronounce correctly. If you want to master it, it\u2019s best to hear it from an Armenian friend\u2014or even take a few lessons.',
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
    etude_2025_07_08_title: 'Types: primitive, object',
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
    etude_2025_08_15_date: '15 Aug 2025',
    etude_2025_08_15_title: 'Let, var, const',
    etude_2025_08_15_alt: 'Three musketeers representing let, const and var',
    etude_2025_08_15_long1:
      'Keywords var, let, and const let you create a new variable and give it an initial value. var is an old construction and is now obsolete. To create a variable with a constant value, use const. For a variable whose value changes, use let.',
    etude_2025_08_15_long2:
      'Be aware whether your value is a Primitive or an Object. const a = 5 completely forbids any change because 5 is a primitive type and the statement "value 5 is stored in variable a" remains true. But const b = [5] forbids writing b = [6] yet allows changing the array\u2019s elements, like b[0] = 777. That\'s because the value of b is a reference to an array; we use this variable to read the reference and then access the array by index.',
    etude_2025_08_15_short1: 'var \u2013 old, deprecated',
    etude_2025_08_15_short2: 'let, const \u2013 modern',
    etude_2025_08_15_short3: 'let: value can change',
    etude_2025_08_15_short4: 'const: value can\'t be reassigned',
    etude_2025_08_15_short5: 'const + primitive = nothing can be changed',
    etude_2025_08_15_short6:
      'const + Object = no new object; existing object can change',
    etude_2025_08_17_date: '17 Aug 2025',
    etude_2025_08_17_title: 'Hoisting',
    etude_2025_08_17_alt: 'Three musketeers demonstrating hoisting',
    etude_2025_08_17_long1:
      'In languages like C++, Java and Go you cannot use a variable before it is declared. JavaScript scans a file twice, processing declarations first.',
    etude_2025_08_17_long2:
      'Then it runs the program, effectively lifting declarations to the top. A <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/hoisting/trap.js" target="_blank" rel="noopener noreferrer">program</a> with var may print undefined, while the temporal dead zone makes <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/hoisting/let.js" target="_blank" rel="noopener noreferrer">let</a> and <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/hoisting/const.js" target="_blank" rel="noopener noreferrer">const</a> throw an error.',
    etude_2025_08_17_short1: 'Hoisting moves declarations to the scope top',
    etude_2025_08_17_short2: 'var is accessible before declaration (undefined)',
    etude_2025_08_17_short3: 'let and const are inaccessible before declaration',
    etude_2025_08_17_short4: 'TDZ enforces this rule',
    etude_2025_08_22_date: '22 Aug 2025',
    etude_2025_08_22_title: 'Swap two values',
    etude_2025_08_22_alt: 'Swapping two variables in JavaScript',
    etude_2025_08_22_long1:
      `So far we have just discussed placing values into variables, and it seems like nothing exciting can be done here. But here comes a famous question: how to swap the values of two variables? It is an important part of sorting algorithms. Try to think about it. You have two variables:<pre><code>let a = 5, b = 8;
...
console.log("a=", a, "b=", b);</code></pre>`,
    etude_2025_08_22_long2:
      'Your task is to place code instead of ..., so the output is: a=8, b=5. Of course, you should make the solution generic and use assignments between variables. Note that statements like a = b or b = a immediately ruin your game because after them one of the values is gone. You can avoid this pitfall by introducing a third variable. Try to write your own program and test it in the console of your browser.',
    etude_2025_08_22_long3:
      'The code you get is a famous "swap" function one can find in libraries. The harder and not so well-known problem is how to swap values without introducing a third variable. Here you can think about other operations besides pure assignment.',
    etude_2025_08_22_long4:
      'If you get stuck, you can check answers on our github page: <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/swap/swap_three.js" target="_blank" rel="noopener noreferrer">three</a>, <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/swap/swap_minus.js" target="_blank" rel="noopener noreferrer">minus</a> and <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/swap/swap_xor.js" target="_blank" rel="noopener noreferrer">xor</a>. Also you can play in our swap simulator "ref".',
    etude_2025_08_22_short1: 'swap(a, b) moves the value of a to b and b to a',
    etude_2025_08_22_short2: 'Common approach: use three variables',
    etude_2025_08_22_short3: 'Trick: only two variables are enough',
    etude_2025_08_29_date: '29 Aug 2025',
    etude_2025_08_29_title: 'Operators',
    etude_2025_08_29_alt: 'Operators painted on a wall',
    etude_2025_08_29_long1:
      'To solve real-world problems, we must perform operations on numbers. In JS we use "*" for multiplication, "/" for division and "+", "-" for addition and subtraction respectively. Open the console in your browser and enter expressions like 2*2, 5-3, 8/4, 6*6. In C++ and Python there are tricky rules to determine the result of a non-integer division. In JS such results are floating-point numbers. If you want to round them, use Math.ceil or Math.floor functions.',
    etude_2025_08_29_long2:
      'To write complex programs that make non-trivial decisions, we combine simple logical statements into more complex constructions. For instance, if we want to detect when x is either too small or too big, we combine (x < 4) with (x > 7). Each of these statements has the boolean type. To combine simple boolean expressions into a complex one, we use logical operators: "||" - or, "&&" - and, "!" - not. Therefore, our expression can be written as (x < 4) || (x > 7).',
    etude_2025_08_29_long3:
      'If you want to pack data into a variable and work on the bit level, bitwise operators "|", "&", "^", "~" are handy. It is quite a high-level trick and you will not use it every day, but sometimes these operations can save the day.',
    etude_2025_08_29_short1: 'arithmetic operators: + - * / %',
    etude_2025_08_29_short2: 'logical operators: || && !',
    etude_2025_08_29_short3: 'bitwise operators: | & ^ ~',
    etude_2025_09_05_date: '5 Sep 2025',
    etude_2025_09_05_title: 'Three-variable swap simulator',
    etude_2025_09_05_alt: 'Origami cranes demonstrating a three-variable swap',
    etude_2025_09_05_long1:
      'In previous posts, we discussed the famous problem of swapping the values of two variables. Here we present a <a href="https://alinabrode.github.io/js_snippets_blog/swap_abt_simple/" target="_blank" rel="noopener noreferrer">simulator</a> for three variables. Three circles represent variables; their colors show the values. Six buttons cover the assignments a=b, b=a, b=t, t=b, a=t and t=a. Press a button and the assignment happens immediately.',
    etude_2025_09_05_long2:
      'We used React to create this application and Vite to build it. There were a few interesting points, which we will share later. Let\'s start with the problem: how to arrange three circles at the vertices of an equilateral triangle?',
    etude_2025_09_05_long3:
      'There are several possible approaches:<ul><li>Grid with fixed cell sizes — pros: easy; cons: not straightforward and probably approximate</li><li>Canvas — pros: allows exact coordinates; cons: elements are not clickable and the canvas is raster</li><li>SVG — pros: coordinates, clickable elements, concise code</li></ul>So we went with SVG. You can check the <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/76e15ef2cfc35e148ac9b27a78d08adbdcfb8a56/swap_abt_simple/src/App.tsx#L20" target="_blank" rel="noopener noreferrer">code</a>. That\'s it for today; later we will explain how this technology works.',
    etude_2025_09_05_short1: 'React simulator of three-variable swap',
    etude_2025_09_05_short2: '<a href="https://alinabrode.github.io/js_snippets_blog/swap_abt_simple/" target="_blank" rel="noopener noreferrer">Link</a> to try',
    etude_2025_09_05_short3: 'SVG to align circles',
    etude_2025_09_15_date: '15 Sep 2025',
    etude_2025_09_15_title: 'Base-2 representation',
    etude_2025_09_15_alt: 'Binary representation illustration',
    etude_2025_09_15_long1:
      'In <a href="/en/small_etudes/swap" target="_blank" rel="noopener noreferrer">one of the previous posts</a> we discussed the solution for the \'swap two values within three variables\' problem which uses the XOR operator. Here we take one step back to explain what\'s going on. For full details on positional notation in base 2, see <a href="https://en.wikipedia.org/wiki/Binary_number" target="_blank" rel="noopener noreferrer">Wikipedia</a>. Key ideas:',
    etude_2025_09_15_long2:
      '<ul class="list-disc pl-6"><li>any integer can be written as a sequence of 0 and 1 digits</li><li>we can convert binary to decimal and back</li></ul>',
    etude_2025_09_15_long3:
      'To convert binary to decimal, sum bits with their weights (from right to left): 1, 2, 4, 8, 16, .... Examples: <code>101</code> = 1×4 + 0×2 + 1×1 = 5; <code>011</code> = 0×4 + 1×2 + 1×1 = 3.',
    etude_2025_09_15_long4:
      'For 3-bit numbers: <code>000 → 0</code><br/> <code>001 → 1</code><br/> <code>010 → 2</code><br/> <code>011 → 3</code><br/> <code>100 → 4</code><br/> <code>101 → 5</code><br/> <code>110 → 6</code><br/> <code>111 → 7</code>. To convert decimal to binary, find the decimal value and take its binary counterpart.',
    etude_2025_09_15_short1: 'A number can be written in binary form',
    etude_2025_09_15_short2:
      '<a href="https://en.wikipedia.org/wiki/Binary_number" target="_blank" rel="noopener noreferrer">Binary on Wikipedia</a>',
    etude_2025_09_20_date: '20 Sep 2025',
    etude_2025_09_20_title: 'XOR operation',
    etude_2025_09_20_alt: 'XOR operation illustration',
    etude_2025_09_20_long1:
      'In <a href="/en/small_etudes/swap-simulator" target="_blank" rel="noopener noreferrer">an earlier post</a> we used the XOR operator for swapping two values. After a short <a href="/en/small_etudes/binary-base-2" target="_blank" rel="noopener noreferrer">intro to base‑2</a>, let’s look at XOR itself.',
    etude_2025_09_20_long2:
      'XOR has several notations: ⊕, ^, xor. On single bits it behaves as “sum mod 2”: 0 if the inputs are equal and 1 if they differ. See <a href="https://en.wikipedia.org/wiki/Exclusive_or" target="_blank" rel="noopener noreferrer">Wikipedia</a>.',
    etude_2025_09_20_long3:
      'Bitwise XOR means we apply XOR to corresponding bits of two binary numbers. Example: <code>5 ^ 3</code>. In binary: <code>101 ^ 011</code>. Column‑wise: <code>1^0=1</code>, <code>0^1=1</code>, <code>1^1=0</code> → <code>110</code> (which is 6). Try: <code>console.log(5 ^ 3)</code>.',
    etude_2025_09_20_long4:
      '<table class="table-auto border-collapse text-sm"><thead><tr><th class="border px-2 py-1"></th><th class="border px-2 py-1">0</th><th class="border px-2 py-1">1</th><th class="border px-2 py-1">2</th><th class="border px-2 py-1">3</th><th class="border px-2 py-1">4</th><th class="border px-2 py-1">5</th><th class="border px-2 py-1">6</th><th class="border px-2 py-1">7</th></tr></thead><tbody><tr><th class="border px-2 py-1 text-right">0</th><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">7</td></tr><tr><th class="border px-2 py-1 text-right">1</th><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">6</td></tr><tr><th class="border px-2 py-1 text-right">2</th><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">5</td></tr><tr><th class="border px-2 py-1 text-right">3</th><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">4</td></tr><tr><th class="border px-2 py-1 text-right">4</th><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">3</td></tr><tr><th class="border px-2 py-1 text-right">5</th><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">2</td></tr><tr><th class="border px-2 py-1 text-right">6</th><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">1</td></tr><tr><th class="border px-2 py-1 text-right">7</th><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">0</td></tr></tbody></table>',
    etude_2025_09_20_long5:
      'Let\'s check the classic XOR‑swap algorithm using this table. Let a = 5, b = 4. Trace the values after each assignment:<br/><pre class="bg-gray-100 p-2 rounded overflow-x-auto text-sm">a = a ^ b  // a = 5 ^ 4 = 1, b = 4\nb = a ^ b  // a = 1, b = 1 ^ 4 = 5\na = a ^ b  // a = 1 ^ 5 = 4, b = 5</pre><br/>We can see the algorithm works; the values are swapped without a temporary variable.',
    etude_2025_09_20_short1: 'Bitwise XOR combines two numbers into a third',
    etude_2025_09_20_short2: 'Useful identity: a ^ b ^ a = b',
    etude_2025_09_20_short3: 'Notations: ⊕, ^, xor; behaves like sum mod 2',
    etude_2025_09_20_short4: 'Associative, commutative, self-inverse',
    etude_2025_09_20_short5:
      '<a href="https://en.wikipedia.org/wiki/Exclusive_or" target="_blank" rel="noopener noreferrer">Wikipedia: XOR</a>',

    etude_2025_09_20b_date: '20 Sep 2025',
    etude_2025_09_20b_title: 'Proof of XOR swap',
    etude_2025_09_20b_alt: 'Strict proof of XOR swap',
    etude_2025_09_20b_long1:
      'In <a href="/en/small_etudes/xor" target="_blank" rel="noopener noreferrer">the previous note</a> we demonstrated XOR‑swap with an example and a table. Demonstration is not a proof. Here is a concise, rigorous explanation of why XOR‑swap works.',
    etude_2025_09_20b_long2:
      'Think of <code>a ^ b</code> as toggling bits of <code>a</code> wherever <code>b</code> has 1s. Doing it twice restores the original: <code>a ^ b ^ b = a</code>.',
    etude_2025_09_20b_long3:
      '<pre class="bg-gray-100 p-2 rounded overflow-x-auto text-sm">// Let initial values be a0 and b0\nlet a = a0, b = b0\na = a ^ b      // a = a0 ^ b0,        b = b0\nb = a ^ b      // a = a0 ^ b0,        b = b0 ^ (a0 ^ b0) = a0\na = a ^ b      // a = a0 ^ b0 ^ a0 = b0, b = a0\n</pre>',
    etude_2025_09_20b_long4:
      'The result is general: the values are swapped without a temporary variable, for any integers <code>a0</code> and <code>b0</code>.',
    etude_2025_09_20b_short1: 'XOR toggles bits: a ^ b ^ b = a',
    etude_2025_09_20b_short2: 'Step‑by‑step proof for a0, b0',
    etude_2025_09_20b_short3: 'Swap without a temp variable',
    drivers_title: 'Reliable drivers',
    drivers_col_name: 'Driver',
    drivers_col_region: 'Region',
    drivers_col_cars: 'Available cars',
    drivers_col_phones: 'Phones',
    drivers_col_site: 'Website',
    drivers_leave_request: 'Leave a travel request in Telegram',
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
    sign_2025_08_12_date: '12 августа 2025',
    sign_2025_08_12_title: 'Железнодорожная станция Раздан',
    sign_2025_08_12_alt: 'вывеска железнодорожной станции Раздан',
    sign_2025_08_12_p1:
      'В Армении многие вывески продублированы на русском или английском. Это удивительно хороший способ выучить армянский алфавит. Сегодня мы хотим поделиться фотографией, сделанной на железнодорожной станции Раздан. Это место не так популярно у туристов, но всё же обладает своим шармом. Позже мы поделимся и другими фотографиями этого места.',
    sign_2025_08_12_p2:
      'Ниже приведена таблица соответствия между армянским названием ՀՐԱԶԴԱՆ и его русской транслитерацией «раздан». Видно, что буква Հ (H) здесь не произносится, Ր соответствует «Р», Ա — «А», Զ — «З», Դ — «Д», второе Ա снова «А», а Ն — «Н».',
    sign_2025_08_25_date: '25 августа 2025',
    sign_2025_08_25_title: 'Ереван / Երևան',
    sign_2025_08_25_sign_alt: 'дорожный знак с надписью Ереван на армянском',
    sign_2025_08_25_bench_alt: 'скамейка с надписью Ереван на армянском',
    sign_2025_08_25_p1:
      'В Ереване множество двуязычных вывесок, по которым, прогуливаясь и глазея по сторонам, можно погружаться в мир армянского алфавита. Сначала мы просто их подмечали, а теперь целенаправленно «охотимся». Сегодня для вас — дорожный знак с названием самого города: Ереван — Ե-Ր-Ե-Վ-Ա-Ն.',
    sign_2025_08_25_p2:
      'В городе оно встречается не только на табличках и фасадах, но и на уличных скамейках — это уже отдельный вид городского искусства времён советского союза, здесь ещё не раз будут такие отсылки. Бонусом показываем слово «ԵՐԵՎԱՆ» на ереванской скамейке.',
    note_2025_10_04_date: '4 октября 2025',
    note_2025_10_04_title: 'Аренда в Москве. Часть 2 (Арендодатель)',
    note_2025_10_04_alt: 'Аренда квартиры в Москве — переезд с коробками',
    note_2025_10_04_p1:
      'Продолжаем рубрику «Аренда» — сегодня со стороны арендодателя.',
    note_2025_10_04_p2:
      'Сдавать квартиру в Москве можно по‑разному: самому или через сервисы. Мы два года пользуемся «Яндекс.Арендой» и делимся опытом.',
    note_2025_10_04_good: 'Что удобно:',
    note_2025_10_04_li1:
      'Все показы и встречи с жильцами берёт на себя сервис.',
    note_2025_10_04_li2: 'Он же отвечает за приёмку квартиры после выезда.',
    note_2025_10_04_li3: 'Договором предусмотрен штраф за досрочный съезд.',
    note_2025_10_04_li4:
      'Ущерб компенсируют: перед сдачей составляют опись и фото. У нас так вернули деньги за два сломанных стула.',
    note_2025_10_04_li5: 'В стоимость включена страховка.',
    note_2025_10_04_bad: 'Что не очень:',
    note_2025_10_04_li6:
      'Договор официальный, на 11 месяцев. Налог платить обязательно (для самозанятых 4%). Деньги приходят напрямую от «Яндекс.Аренды», налоговая всё видит.',
    note_2025_10_04_li7:
      'Комиссия включается в стоимость аренды, и квартира выглядит дороже на фоне конкурентов. Сейчас рынок перенасыщен, и даже в августе — пиковый сезон — сдать не удалось без снижения цены.',
    note_2025_09_22_date: '22 сентября 2025',
    note_2025_09_22_title: 'Плюсы и минусы жизни в Ереване ч.3',
    note_2025_09_22_alt: 'Коллаж с минусом: минусы жизни в Ереване',
    note_2025_09_22_p1:
      'Как и обещали, добавляем небольшую ложку дёгтя в нашу бочку ереванского мёда. Сегодня — несколько <strong>минусов</strong>, в основном про цены.',
    note_2025_09_22_li1:
      '<strong>Цены на продукты и мясо.</strong> Бывает, выше московских. В палатках возле домов фрукты и овощи дешевле. Мясо на уровне или выше Москвы. В супермаркетах цены на одни и те же товары сильно различаются, палатки тоже отличаются. Мы закупаемся в сети «Ереван‑Сити», в сети SAS заметно дороже. Всегда приходится держать в голове «адекватную» цену — она может «прыгать» даже в одном и том же месте.',
    note_2025_09_22_li2:
      '<strong>Цены на жильё.</strong> После 2022 года аренда выросла в разы и снижается очень медленно. Например, 3‑комнатная квартира в Арабкире со средним ремонтом или хорошим, но не свежим, — от 300–400 тыс. драм в месяц (≈70–80 тыс. руб.) без учёта коммуналки. В других городах Армении аренда значительно ниже.',
    note_2025_09_22_li3:
      '<strong>Высокие коммунальные платежи.</strong> В Ереване нет центрального отопления, поэтому зимой коммуналка может доходить до 100 тыс. драм (≈20 тыс. руб.).',
    note_2025_09_22_li4:
      '<strong>Сфера обслуживания.</strong> Например, в ТЦ при покупке техники можно не получить полноценную консультацию и информацию о товаре.',
    note_2025_09_22_li5:
      '<strong>Цена на технику.</strong> На ~30% выше московских.',
    note_2025_09_22_li6:
      '<strong>Загрязнённость воздуха.</strong> Зимой часто штиль, и дым печек из частного сектора накрывает город шапкой смога. Многие топят чем попало, в т.ч. покрышками. В остальное время чуть легче, но пыль из Ереванской долины оседает слоем, который можно стирать каждый день. Иногда в пригороде горит свалка. В пиковые дни советуют выходить с респиратором.',
    note_2025_09_22_p2:
      'На сегодня всё; опыт у всех разный.',
        note_2025_10_11a_date: '11 октября 2025',
    note_2025_10_11a_title: 'Калининград. Предначало.',
    note_2025_10_11a_alt: 'Элиста зачёркнута: поездка в Калининград',
    note_2025_10_11a_p1:
      'Как и обещали, пишем в стиле письма из Простоквашино. Микрофон перехватывает Алина.',
    note_2025_10_11a_p2:
      'Всем привет! По результатам опроса победила рубрика «Истории из жизни и отпуска». Серебро — у двух рубрик, о них позже. Сегодня перелистнём календарь почти на пять лет назад и начнём рассказывать о нашей фееричной поездке в <s>Элисту</s> Калининград, часть 1.',
    note_2025_10_11a_p3:
      'На каникулах Влада решили, что нужно куда‑нибудь съездить всей семьёй. Сначала выбрали Элисту: азиатский колорит, буддизм, волшебный Тополь — звучало загадочно. Арсений там уже был, ему понравилось; к тому же в апреле там теплее, чем в Москве. Билеты куплены, гостиница забронирована.',
    note_2025_10_11a_p4:
      'Наступает февраль 2022‑го. Часть направлений закрывают для полётов. Элиста — в списке. Билеты сдаём, отель отменяем. «А давай в Калининград? Говорят, там красиво!» — «Давай!» Билеты куплены, гостиница выбрана. План: три дня в Светлогорске (берём машину, чтобы поездить по окрестностям) и два дня — Калининград. Звучит как план!',
    note_2025_10_11a_p5:
      'Звоночки начались накануне: хозяин квартиры сообщил, что заселить не сможет — проблемы с отоплением. Этот вариант отменяем, судорожно ищем следующий и бронируем новую квартиру. Итак, день вылета: отпуск, можно не думать о работе и погрузиться в путешествие.',
    note_2025_10_11a_p6:
      'Задача №1. Каршеринг или такси? После короткой дискуссии выбрали каршеринг. Времени с запасом — мало ли что.',

    note_2025_10_11b_date: '11 октября 2025',
    note_2025_10_11b_title: 'Калининград. Начало.',
    note_2025_10_11b_alt: 'Платная полоса и транспондер на трассе',
    note_2025_10_11b_p1:
      'Попробуем сэмплить посты согласно распределению из голосования. Больше всего набрал пункт "Истории из жизни и отпуска". Видимо, пришло время оцифровать нашу поездку в Калининград. Многие из присутствующих слышали эту историю вживую в формате стендапа. Пришло время прочитать в формате "письмо из простоквашино".',
    note_2025_10_11b_p2:
      'Начало. От Арсения.',
    note_2025_10_11b_p3:
      'Ничто не предвещало. Ну, то есть, вообще ничто. Вышли из дома с запасом в час двадцать. За четыре часа до вылета из Шереметьево вышли из дома на Ленинском проспекте. Маленькая незаметная перепалка — ехать на такси или на каршеринге. Взмах крыла бабочки и поехали на каршеринге.',
note_2025_09_06_date: '6 сентября 2025',
    note_2025_09_06_title: 'Севан. Часть 1',
    note_2025_09_06_alt: 'Озеро Севан из отеля Tsovasar',
    note_2025_09_06_p1:
      'Так вот. Наша спонтанная поездка оказалась очень насыщенной и запоминающейся для полутора дней. По порядку. Сегодня речь об отеле, в который мы заселились — <a href="https://yandex.com/maps/-/CLUAI68s" target="_blank" rel="noopener noreferrer">Tsovasar Family Rest Complex</a>.',
    note_2025_09_06_p2:
      'Мы взяли номер с кухней‑гостиной, спальней и балконом с видом на Севан. На Севане в это время очень приятная погода: солнечно и днём безветрено, температура воздуха 20–22 °C, воды ~19 °C. Впечатления от отеля:',
    note_2025_09_06_li1: 'Доброжелательный персонал.',
    note_2025_09_06_li2: 'Приятная территория с оборудованным спуском в озеро и небольшим пляжем.',
    note_2025_09_06_li3:
      'Вкусные завтраки (омлет, сыры, рулетики, сосиски, блинчики, творог, йогурт). Выбор есть, всё свежее и вкусное.',
    note_2025_09_06_p3:
      'В ресторане можно пообедать или поужинать. Меню вкусное и разнообразное, в основном блюда армянской кухни. На троих людей полноценный ужин нам обошёлся 20 000 драм, включая сбор за обслуживание. <a href="https://t.me/alina_yerevan_js/56" target="_blank" rel="noopener noreferrer">Наш пост</a> в телеге с меню ресторана.',
    note_2025_09_06_p4:
      'На территории много различных беседок, скамеек, площадок с лежаками. Также есть место для приготовления шашлыка. По цене: 36 000 драм за ночь. На наш вкус цена соответствует качеству.',
    note_2025_09_06_p5:
      'Так как наш канал ещё и про армянский язык, давайте посмотрим на слово Ծովասар (Цовасар). Слово состоит из двух частей: Ծով (цов) → «море» и սար (сар) → «гора». В целом получается «морская гора».',
    note_2025_09_14_date: '14 сентября 2025',
    note_2025_09_14_title: 'Севан. Часть 2',
    note_2025_09_14_alt: 'Дайв-клуб «Высота 1900» на озере Севан',
    note_2025_09_14_p1:
      'Как говорилось ранее, полуторадневный отпуск оказался насыщенным интересными местами и активностями. Во второй день мы нашли дайв‑клуб на берегу озера. Клуб «Высота 1900» можно найти <a href="https://www.booking.com/Share-eAKyW1W" target="_blank" rel="noopener noreferrer">на букинге</a>, <a href="https://diving.am/ru/dive-resort/" target="_blank" rel="noopener noreferrer">в интернете</a> или <a href="https://maps.app.goo.gl/R47hhhHg7mjxbVLy9" target="_blank" rel="noopener noreferrer">на гуглокартах</a>. Клуб предоставляет услуги гостиницы — комнаты небольшие, но чтобы переночевать, вполне подойдут. Есть аренда оборудования для погружения и аренда сапбордов. Мы решили арендовать сапы, тем более погода благоприятствовала — было солнечно и безветренно. Мы совершили приятный полуторачасовой заплыв по абсолютно зеркальному озеру.',
    note_2025_09_14_p2:
      'Ещё по телефону при бронировании меня приятно удивил сервис. Директор клуба оказался очень приятным и доброжелательным человеком, который с удовольствием ответил на все наши вопросы. Абсолютно европейский сервис.',
    note_2025_09_14_p3:
      'Бонусом оказалось, что компания является дистрибьютором продукции ScubaPro — одежды и аксессуаров для водных видов спорта по закупочным ценам. Для справки: мы находили в Москве подобный магазин, и стоимость товаров в нём была примерно в полтора раза выше. Мы не смогли устоять и купили несколько вещей.',
    note_2025_09_14_p4:
      'Также на территории есть кафешка, где можно вкусно перекусить: сэндвичи, картошка фри, блинчики, кофе и чай. Цены абсолютно нормальные. Территория оформлена ярко и стильно, фотки прилагаем.',
    note_2025_09_18_date: '18 сентября 2025',
    note_2025_09_18_title: 'Плюсы и минусы жизни в Ереване. Часть 2',
    note_2025_09_18_alt: 'Плюсы и минусы — часть 2, иллюстрация',
    note_2025_09_18_p1:
      'Продолжаем список «плюсов» жизни в Ереване.',
    note_2025_09_18_pros_title: 'Плюсы:',
    note_2025_09_18_li1:
      '<strong>Качественное свежее мясо.</strong> Большой выбор свинины, курицы, говядины; цены могут быть высокими, порой выше московских — но об этом ниже.',
    note_2025_09_18_li2:
      '<strong>Множество доступных достопримечательностей.</strong> Если хочется посмотреть горы, монастыри, озеро Севан или отдохнуть от суеты в тихом отеле — чаще всего это около часа пути. Очень удобно. В туристических местах много уютных отелей на любой вкус. Можно воспользоваться такси или услугами знакомых водителей.',
    note_2025_09_18_li3:
      '<strong>Достопримечательности Еревана.</strong> Множество музеев: исторический, Галерея, музей Сарьяна, Хачатуряна, Комитаса и др. Живя два года, мы ещё не всё обошли. В Ереване проходят выставки и фестивали; например, в июне — шумный, вкусный фестиваль вина: несколько улиц в центре перекрывают, чтобы пешеходы могли прогуливаться и дегустировать местные вино и еду.',
    note_2025_09_18_li4:
      '<strong>Природа.</strong> Необыкновенные горные пейзажи восхищают и завораживают. Нам повезло: у нас от школы часто бывают походы в горы, поэтому хайкинг стал привычным делом — и нам не надоело).',
    note_2025_09_18_li5:
      '<strong>Высокое качество ресторанов и кафе.</strong> Центр города людный и туристический; здесь можно найти варианты на любой вкус — от суши до традиционной армянской кухни. Вечерний Ереван совершенно очаровательный и ламповый.',
    note_2025_09_18_li6:
      '<strong>Виды.</strong> Кроме рукотворных достопримечательностей вроде Каскада, в Ереване есть и нерукотворные. Мы любим прогулки по ущелью реки Раздан за уникальные виды, а на мосту в Давташен дух захватывает как нигде.',
    note_2025_09_01_date: '1 сентября 2025',
    note_2025_09_01_title: 'Плюсы и минусы жизни в Ереване. Часть 1',
    note_2025_09_01_alt: 'Плюсы и минусы жизни в Ереване',
    note_2025_09_01_p1:
      'По прошествии двух лет жизни в Армении, в Ереване, мы сформировали список плюсов и минусов, который может быть полезен тем, кто рассматривает Ереван как город для проживания. Сразу оговорюсь: для нас плюсы всё равно перевешивают любые минусы — мы любим Ереван таким, какой он есть, уютным и ламповым.',
    note_2025_09_01_pros_title: 'Итак, плюсы:',
    note_2025_09_01_li1:
      '<strong>открытость и дружелюбие местных.</strong> Именно люди создают атмосферу места, а здесь они замечательные: открытые и добрые, готовые помочь.',
    note_2025_09_01_li2:
      '<strong>древность и самобытность.</strong> Еревану более 2800 лет. Древность пропитывает и окутывает город и окрестности. Древние монастыри и крепости, наследие царства Урарту, виноделие, множество интересных личностей, которые внесли вклад не только в историю Армении, но и в мировую. Ереван и Армения — как насыщенное густое вино, вкус которого раскрывается постепенно.',
    note_2025_09_01_li3:
      '<strong>тёплый и сухой климат.</strong> В Ереване очень приятная погода: мы продлеваем себе лето на три месяца — май уже летний месяц, а до ноября температура может достигать 20 градусов. Жару переносить терпимо из-за сухости климата и удачной застройки центра: гуляя, всегда можно идти по теневой стороне.',
    note_2025_09_01_li4:
      '<strong>фрукты и овощи.</strong> Отличное качество фруктов и овощей, можно всегда выбрать по своему кошельку. Мы предпочитаем покупать возле дома в овощных палатках. Вне сезона импортные фрукты из Ирана неплохого качества. В сезон цены на фрукты и овощи низкие.',
    note_2025_09_01_li5:
      '<strong>дешёвое такси.</strong> В Ереване мы передвигаемся пешком — мы любим длительные прогулки по городу — или пользуемся такси. Оно доступно по цене даже в час пик. Например, от нашего района Арабкир до центра в час пик можно доехать за 1200 драм (≈300 руб.).',
    note_2025_08_11_date: '11 августа 2025',
    note_2025_08_11_title: 'Зачем JavaScript на языковом сайте',
    note_2025_08_11_alt: 'ущелье Раздана в Ереване',
    note_2025_08_11_p1:
      'Сначала может показаться странным, что на сайте о армянских словах и заметках про Армению есть раздел про программирование.',
    note_2025_08_11_p2:
      'После того как я окончательно порвала с бухгалтерией и законами, выбрала переподготовку по фронтенду и после курса Практикума продолжаю писать учебные программки на JS, выкладывать их на git и разбираться в html и css.',
    note_2025_08_11_p3:
      'Параллельно мы пытались учить армянский язык. Алфавит оказался непреодолимым: он больше и сложнее русского, заглавные и строчные буквы различаются, а простых самоучителей со связкой картинка-слово-значение-произношение нет.',
    note_2025_08_11_p4:
      'На городских вывесках мы заметили дублирование армянских слов русскими или латинскими буквами, что облегчает освоение алфавита. Так возникла идея простого проекта на html, css и js для таких релокантов, как мы. Поэтому в блог добавили раздел про основы JavaScript — ведь это тоже язык.',
    note_2025_08_18_date: '18 августа 2025',
    note_2025_08_18_title: 'Переезд в Ереван. Часть 1',
    note_2025_08_18_alt: 'Собранные чемоданы перед переездом',
    note_2025_08_18_p1:
      'Перенесёмся в 2023 год, когда мы готовились к переезду. Это первый пост из серии.',
    note_2025_08_18_p2:
      'Вопрос первый: куда? Чтобы не быть отрезанными от родственников, рассматривали только безвизовые страны. Первый кандидат — Сербия. Читаем каналы и статьи, меняем евро, считаем затраты в месяц, смотрим варианты школ. Грустная находка — зимой зашкаливает индекс загрязнённости воздуха на iqair.com. В Ереване он тоже не идеален, но об этом позже. Мы планировали пару раз в год приезжать в Москву, и цена перелёта 230 тыс. рублей на прямой рейс Москва–Белград срывала эти планы. Для Армении цена лежит в районе 75–100 тыс. рублей на троих взрослых, много прямых рейсов различных авиакомпаний, как российских (Аэрофлот, Ютэйр, Уральские авиалинии и т. д.), так и армянских — ShirakAvia, FlyOne Armenia. Последний шаг перед окончательным выбором в пользу Армении — найти школу. Искали на каналах <a href="https://t.me/ru_schools_armenia" target="_blank" rel="noopener noreferrer">t.me/ru_schools_armenia</a>, <a href="https://t.me/erevanmoms" target="_blank" rel="noopener noreferrer">t.me/erevanmoms</a>.',
    note_2025_08_18_p3: 'Делимся чек-листом по переезду:',
    note_2025_08_18_li1_title: 'Доверенность на близкого',
    note_2025_08_18_li1_text:
      'Необходима для представления ваших интересов в организациях. Для сдачи квартиры от вашего лица это нужно указать отдельной строкой.',
    note_2025_08_18_li2_title: 'Снять наличные рубли для обмена в Армении',
    note_2025_08_18_li2_text:
      'Карты банков РФ не принимаются для оплаты, нужна наличка. Самый выгодный курс драм/рубль в обменниках SAS — сети универмагов в Ереване. За выгодным курсом можно следить в телеграм-каналах, например <a href="https://t.me/armeniaCurrency" target="_blank" rel="noopener noreferrer">t.me/armeniaCurrency</a>.',
    note_2025_08_18_li3_title: 'Обзавестись ВНЖ или продумать визаран',
    note_2025_08_18_li3_text:
      'Нерезидент может находиться на территории Армении 180 дней, далее необходим визаран. У нас оформлен ВНЖ работодателем. Ребёнок до 18 лет может проживать в Армении без необходимости пересекать границу каждые полгода.',
    note_2025_08_18_li4_title: 'Выбрать школу',
    note_2025_08_18_li4_text: 'Выбору школы будет посвящён отдельный пост.',
    note_2025_08_18_li5_title: 'Выбрать квартиру',
    note_2025_08_18_li5_text:
      'В каналах Еревана и Армении множество предложений по съёму; есть сайт list.am, где в разделе долгосрочной аренды можно подобрать квартиру. Минус этого сайта — множество фейковых предложений от риелторов. Мы воспользовались услугами риелтора, порекомендованного знакомыми.',
    note_2025_08_18_li6_title: 'Сдать квартиру',
    note_2025_08_18_li6_text:
      'Для сдачи московской квартиры мы воспользовались сервисом Яндекс.Аренда. Преимущество — не надо встречаться с арендатором, можно выбрать жильца по анкете в приложении. Есть договор. Минус — сдавать сложнее. Для арендаторов сервис включает в стоимость аренды ежемесячную комиссию 7%, что увеличивает плату.',
    note_2025_08_18_li7_title: 'Настройка необходимых сервисов',
    note_2025_08_18_li7_text:
      'Необходимо скачать приложения банков, Госуслуги, mos.ru, кабинет налогоплательщика. Все приложения работают через VPN.',
    note_2025_08_18_li8_title: 'Проверка задолженностей: неоплаченные штрафы, алименты...',
    note_2025_08_18_li8_text:
      'Иначе на границе не выпустят.',
    note_2025_08_25_date: '25 августа 2025',
    note_2025_08_25_title: 'Подготовка к переезду. Часть 2',
    note_2025_08_25_alt: 'Осмотр школы в Ереване',
    note_2025_08_25_p1:
      'Один из самых непростых вопросов переезда — как ребёнок отнесётся к нему. Для взрослого человека это стресс. Для ребёнка, тем более подростка, — стресс вдвойне. На момент разговоров о переезде Владу было 12,5 лет, переехал он в 13. Вопрос выбора школы был основополагающим. Я внимательно изучала каналы школ; ссылку на основной <a href="https://t.me/ru_schools_armenia" target="_blank" rel="noopener noreferrer">канал</a> оставлю ещё раз. Там есть удобная таблица со списком всех школ, стоимостью обучения. По комментариям родителей и по нашему видению рассматривали частные школы: меньше классы, более внимательное отношение к ученикам. Есть отбор при поступлении, поэтому риск буллинга уменьшается.',
    note_2025_08_25_p2:
      'На момент раздумий о переезде наши друзья жили в Ереване и очень помогли нам советами при выборе школ, рассказами о жизни в Ереване, а также убедили, что наш выбор страны и города действительно хорошая затея. Сейчас они переехали в Шотландию, у Ольги интересный блог про жизнь в Шотландии и антикварное дело. Из списка школ рассматривали «Свободную школу», «Нюберг», «Перспективу». Много хороших отзывов, молодой коллектив педагогов — людей увлечённых и продвинутых. На период летнего отпуска решили ехать в Ереван, посмотреть школы, познакомиться лично с директором, завучем, учителями; посмотреть район и здание школы. Мы записались на приём. В «Перспективе» и «Свободной школе» Влад писал вступительные экзамены по русскому, математике и английскому языку. В «Нюберге» мы посмотрели здание, познакомились с директором. По атмосфере ребёнку больше всего понравился «Нюберг», но мы не попали на экзамены очно.',
    note_2025_08_25_p3:
      'После возвращения в Москву он онлайн сдавал русский и математику, прошёл интервью на английском языке и беседу с психологом. Его приняли в 7-й класс. Мы не жалеем об этом выборе: ребёнок учится с удовольствием, там он познакомился с хорошими ребятами. У нас сформировалось комьюнити из родителей одноклассников Влада. Единственный минус для меня сейчас — на базе нашей школы нельзя получить международный диплом, как, например, в «Свободной школе», где есть международная аккредитация, или дополнительно, окончив BISA (школа с кэмбриджской аккредитацией). Также плюсом нашей школы является расположение в более чистом и менее жарком районе — Арабкире.',
    note_2025_08_25_p4:
      'Возвращаясь к тревогам: ребёнку переезд дался легко, он вместе с нами собирался, участвовал в выборе квартиры (об этом будет отдельный пост); со всем авантюризмом включился в сборы и обсуждения, несмотря на опасения относительно новых одноклассников и учителей. Но, конечно, всё зависит от ребёнка.',
    note_2025_08_25_p5:
      'Мой личный список частных и государственных школ (основан на том, что я вычитывала в каналах и личном опыте).',
    note_2025_08_25_private: 'Частные',
    note_2025_08_25_private_cons_title: 'Минусы:',
    note_2025_08_25_private_con1: 'Диплом об окончании не принимается за границей.',
    note_2025_08_25_private_con2: 'Высокая стоимость обучения — примерно 400 долларов в месяц и выше.',
    note_2025_08_25_private_pros_title: 'Плюсы:',
    note_2025_08_25_private_pro1: 'Для поступления и обучения не нужна соцкарта.',
    note_2025_08_25_private_pro2: 'Индивидуальный подход.',
    note_2025_08_25_private_pro3: 'Качество преподавания.',
    note_2025_08_25_private_pro4: 'Больше часов иностранного языка.',
    note_2025_08_25_private_pro5: 'Небольшие классы: 7–10 человек.',
    note_2025_08_25_private_pro6: 'Комфортный климат.',
    note_2025_08_25_public: 'Государственные',
    note_2025_08_25_public_pros_title: 'Плюсы:',
    note_2025_08_25_public_pro1:
      'Государственный аттестат, выданный в Армении, признаётся при поступлении за рубеж; конкретные требования зависят от страны и университета, обучение бесплатно.',
    note_2025_08_25_public_cons_title: 'Минусы:',
    note_2025_08_25_public_con1: 'Непросто попасть: запись электронная, необходима соцкарта.',
    note_2025_08_25_public_con2: 'Могут быть большие классы.',
    note_2025_08_25_public_con3: 'Качество образования.',
    note_2025_08_25_public_con4: 'Больше вероятность буллинга.',
    note_2025_08_25_docs:
      'Документы из российской школы забираются просто. Приходишь, пишешь заявление, забираешь личное дело.',
    note_2025_08_25_p6:
      'Если есть какие-то вопросы, можно смело задавать их в комментариях.',
    note_2025_06_17_date: '17 июня 2025',
    note_2025_06_17_title: 'Невозможно произнести',
    note_2025_06_17_alt: 'Александр Таманян',
    note_2025_06_17_p1:
      'У подножия величественного Каскада стоит памятник Александру Таманяну — великому человеку с непростой судьбой. Именно он придумал генеральный план Еревана, по которому город выглядит таким, каким мы видим его сегодня.',
    note_2025_06_17_p2:
      'Днем преобладают ветры из Араратской долины. Но вечером с гор спускается свежий ветерок в обратном направлении. Таманян спроектировал улицы Еревана как односторонний аэродинамический клапан: жара и пыль постепенно наполняют город днем, но быстро выветриваются вечером.',
    note_2025_06_17_p3_part1:
      'Теперь давайте приглядимся к надписи на памятнике. Буквы складываются в слово «',
    note_2025_06_17_p3_highlight: 'ՃԱՐՏԱՐԱՊԵՏ',
    note_2025_06_17_p3_part2:
      '». Приблизительная транслитерация — «ч-ар-т-ар-ар-пет». Но будьте осторожны: начальный звук «ч» уникален для армянского языка и его трудно произнести правильно. Если хотите освоить его, лучше услышать от армянского друга или даже взять пару уроков.',
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
    etude_2025_07_08_title: 'Типы: примитив, объект',
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
    etude_2025_08_15_date: '15 августа 2025',
    etude_2025_08_15_title: 'Let, var и const',
    etude_2025_08_15_alt: 'три мушкетёра, представляющие let, const и var',
    etude_2025_08_15_long1:
      'Ключевые слова var, let и const позволяют создать новую переменную и задать ей начальное значение. var — старая конструкция, сейчас она устарела. Чтобы создать переменную с неизменяемым значением, используйте const. Для переменной, значение которой будет меняться, используйте let.',
    etude_2025_08_15_long2:
      'Важно понимать, является ли ваше значение примитивом или объектом. const a = 5 полностью запрещает любые изменения, потому что 5 — примитивный тип, и утверждение «значение 5 хранится в переменной a» остаётся верным. А const b = [5] запрещает писать b = [6], но позволяет менять элементы массива, например b[0] = 777. Это происходит потому, что значение b — ссылка на массив; мы читаем эту ссылку из переменной и затем обращаемся к массиву по индексу.',
    etude_2025_08_15_short1: 'var – старый, устаревший',
    etude_2025_08_15_short2: 'let, const – современный',
    etude_2025_08_15_short3: 'let: можно изменять значение',
    etude_2025_08_15_short4: 'const: нельзя присваивать новое значение',
    etude_2025_08_15_short5: 'const + примитив = изменить ничего нельзя',
    etude_2025_08_15_short6:
      'const + объект = новый объект нельзя, существующий менять можно',
    etude_2025_08_17_date: '17 августа 2025',
    etude_2025_08_17_title: 'Хойстинг',
    etude_2025_08_17_alt: 'три мушкетёра демонстрируют хойстинг',
    etude_2025_08_17_long1:
      'В языках вроде C++, Java и Go нельзя использовать переменную до её объявления. JavaScript дважды просматривает файл, сначала обрабатывая объявления.',
    etude_2025_08_17_long2:
      'Затем выполняется программа, и объявления как бы поднимаются наверх. <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/hoisting/trap.js" target="_blank" rel="noopener noreferrer">var-программа</a> может вывести undefined, а «временная мёртвая зона» заставляет <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/hoisting/let.js" target="_blank" rel="noopener noreferrer">let</a> и <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/hoisting/const.js" target="_blank" rel="noopener noreferrer">const</a> выбросить ошибку.',
    etude_2025_08_17_short1: 'Хойстинг поднимает объявления в начало области',
    etude_2025_08_17_short2: 'var доступна до объявления (undefined)',
    etude_2025_08_17_short3: 'let и const недоступны до объявления',
    etude_2025_08_17_short4: 'TDZ обеспечивает это поведение',
    etude_2025_08_22_date: '22 августа 2025',
    etude_2025_08_22_title: 'Обмен значениями',
    etude_2025_08_22_alt: 'обмен значениями двух переменных в JavaScript',
    etude_2025_08_22_long1:
      `До сих пор мы только присваивали значения переменным, и казалось, что ничего интересного сделать нельзя. Но есть известная задача: как обменять значения двух переменных? Это важная часть сортировочных алгоритмов. Попробуйте подумать. У вас есть две переменные:<pre><code>let a = 5, b = 8;
...
console.log("a=", a, "b=", b);</code></pre>`,
    etude_2025_08_22_long2:
      'Ваша задача — вставить код вместо ..., чтобы вывод был: a=8, b=5. Разумеется, решение должно быть универсальным и использовать присваивания между переменными. Учтите, что выражения a = b или b = a сразу портят игру: одно из значений теряется. Избежать этой ловушки можно, введя третью переменную. Попробуйте написать свою программу и протестировать её в консоли браузера.',
    etude_2025_08_22_long3:
      'Получившийся код — известная функция «swap», которую можно встретить в библиотеках. Более сложная и менее известная задача — обменять значения без введения третьей переменной. Здесь можно подумать о других операциях, кроме чистого присваивания.',
    etude_2025_08_22_long4:
      'Если застряли, загляните на наш GitHub: <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/swap/swap_three.js" target="_blank" rel="noopener noreferrer">three</a>, <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/swap/swap_minus.js" target="_blank" rel="noopener noreferrer">minus</a> и <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/main/swap/swap_xor.js" target="_blank" rel="noopener noreferrer">xor</a>. Также можно поиграть в наш симулятор обмена «ref».',
    etude_2025_08_22_short1: 'swap(a, b) переносит значение из a в b и из b в a',
    etude_2025_08_22_short2: 'Обычный подход — использовать три переменные',
    etude_2025_08_22_short3: 'Хитрость — достаточно двух переменных',
    etude_2025_08_29_date: '29 августа 2025',
    etude_2025_08_29_title: 'Операторы',
    etude_2025_08_29_alt: 'операторы, нарисованные на стене',
    etude_2025_08_29_long1:
      'Чтобы решать задачи реального мира, нужно выполнять операции с числами. В JS используются "*" для умножения, "/" для деления и "+", "-" для сложения и вычитания. Откройте консоль браузера и введите выражения 2*2, 5-3, 8/4, 6*6. В C++ и Python есть хитрые правила для дробного деления. В JS результат — число с плавающей точкой. Чтобы округлить его, примените функции Math.ceil или Math.floor.',
    etude_2025_08_29_long2:
      'Чтобы писать сложные программы, принимающие нетривиальные решения, объединяйте простые логические высказывания в более сложные конструкции. Например, если мы хотим определить, что x слишком мал или слишком велик, нужно объединить выражение (x < 4) с (x > 7). Каждое из них имеет булев тип. Чтобы объединить простые булевы выражения в сложное, используем логические операторы: "||" — или, "&&" — и, "!" — не. Таким образом, выражение записывается как (x < 4) || (x > 7).',
    etude_2025_08_29_long3:
      'Если нужно упаковать данные в переменную и работать на уровне битов, пригодятся побитовые операторы "|", "&", "^", "~". Это достаточно продвинутая техника, которую не используют каждый день, но иногда она может выручить.',
    etude_2025_08_29_short1: 'арифметические операторы: + - * / %',
    etude_2025_08_29_short2: 'логические операторы: || && !',
    etude_2025_08_29_short3: 'побитовые операторы: | & ^ ~',
    etude_2025_09_05_date: '5 сентября 2025',
    etude_2025_09_05_title: 'Симулятор обмена трёх переменных',
    etude_2025_09_05_alt: 'журавли демонстрируют обмен трёх переменных',
    etude_2025_09_05_long1:
      'В прошлых постах мы обсуждали задачу обмена значениями двух переменных. Здесь представляем <a href="https://alinabrode.github.io/js_snippets_blog/swap_abt_simple/" target="_blank" rel="noopener noreferrer">симулятор</a> для трёх переменных. Три круга обозначают переменные, их цвета — значения. Шесть кнопок покрывают присваивания a=b, b=a, b=t, t=b, a=t и t=a. Нажмите кнопку, и присваивание произойдёт сразу.',
    etude_2025_09_05_long2:
      'Мы использовали React для создания приложения и Vite для сборки. Было несколько интересных моментов, о которых расскажем позже. Начнём с задачи: как расположить три круга в вершинах равностороннего треугольника?',
    etude_2025_09_05_long3:
      'Есть несколько подходов:<ul><li>Сетка с фиксированными ячейками — плюс: просто; минус: неочевидно и, скорее всего, приблизительно</li><li>Canvas — плюс: точные координаты; минус: элементы не кликабельны, холст растровый</li><li>SVG — плюс: координаты, кликабельные элементы, лаконичный код</li></ul>Мы выбрали SVG. Посмотреть <a href="https://github.com/AlinaBrode/js_snippets_blog/blob/76e15ef2cfc35e148ac9b27a78d08adbdcfb8a56/swap_abt_simple/src/App.tsx#L20" target="_blank" rel="noopener noreferrer">код</a> можно на GitHub. На сегодня всё, позже расскажем подробнее об этой технологии.',
    etude_2025_09_05_short1: 'React-симулятор обмена трёх переменных',
    etude_2025_09_05_short2: '<a href="https://alinabrode.github.io/js_snippets_blog/swap_abt_simple/" target="_blank" rel="noopener noreferrer">Ссылка</a> для игры',
    etude_2025_09_05_short3: 'SVG для выравнивания кругов',
    etude_2025_09_15_date: '15 сентября 2025',
    etude_2025_09_15_title: 'Двоичное представление числа',
    etude_2025_09_15_alt: 'Иллюстрация двоичного представления',
    etude_2025_09_15_long1:
      'В <a href="/ru/small_etudes/swap" target="_blank" rel="noopener noreferrer">одной из предыдущих заметок</a> мы разбирали решение задачи «обменять два значения тремя переменными» с использованием оператора XOR. Здесь сделаем шаг назад и объясним, что происходит. Подробности о позиционной системе счисления по основанию 2 см. в <a href="https://ru.wikipedia.org/wiki/Двоичная_система_счисления" target="_blank" rel="noopener noreferrer">Википедии</a>. Главное:',
    etude_2025_09_15_long2:
      '<ul class="list-disc pl-6"><li>любое целое число можно записать последовательностью 0 и 1</li><li>можно переводить двоичное представление в десятичное и обратно</li></ul>',
    etude_2025_09_15_long3:
      'Чтобы перевести двоичное число в десятичное, суммируем биты с весами (справа налево): 1, 2, 4, 8, 16, …. Примеры: <code>101</code> = 1×4 + 0×2 + 1×1 = 5; <code>011</code> = 0×4 + 1×2 + 1×1 = 3.',
    etude_2025_09_15_long4:
      'Для трёхбитных чисел: <code>000 → 0</code><br/> <code>001 → 1</code><br/> <code>010 → 2</code><br/> <code>011 → 3</code><br/> <code>100 → 4</code><br/> <code>101 → 5</code><br/> <code>110 → 6</code><br/> <code>111 → 7</code>. Чтобы перевести из десятичного в двоичное, найдите число в правом столбце и возьмите соответствующую запись слева.',
    etude_2025_09_15_short1: 'Число можно записать в двоичном виде',
    etude_2025_09_15_short2:
      '<a href="https://ru.wikipedia.org/wiki/Двоичная_система_счисления" target="_blank" rel="noopener noreferrer">Википедия: двоичная система</a>',
    etude_2025_09_20_date: '20 сентября 2025',
    etude_2025_09_20_title: 'Операция XOR',
    etude_2025_09_20_alt: 'Иллюстрация операции XOR',
    etude_2025_09_20_long1:
      'В <a href="/ru/small_etudes/swap-simulator" target="_blank" rel="noopener noreferrer">одной из заметок</a> мы использовали оператор XOR для обмена значениями. После короткого <a href="/ru/small_etudes/binary-base-2" target="_blank" rel="noopener noreferrer">введения в двоичную систему</a> разберём XOR подробнее.',
    etude_2025_09_20_long2:
      'У операции несколько обозначений: ⊕, ^, xor. На одиночных битах она ведёт себя как «сумма по модулю 2»: 0, если входы равны, и 1, если различны. См. <a href="https://ru.wikipedia.org/wiki/XOR" target="_blank" rel="noopener noreferrer">Википедию</a>.',
    etude_2025_09_20_long3:
      'Побитовый XOR — это применение XOR к соответствующим битам двух двоичных чисел. Пример: <code>5 ^ 3</code>. В двоичном виде: <code>101 ^ 011</code>. По столбцам: <code>1^0=1</code>, <code>0^1=1</code>, <code>1^1=0</code> → <code>110</code> (то есть 6). Попробуйте: <code>console.log(5 ^ 3)</code>.',
    etude_2025_09_20_long4:
      '<table class="table-auto border-collapse text-sm"><thead><tr><th class="border px-2 py-1"></th><th class="border px-2 py-1">0</th><th class="border px-2 py-1">1</th><th class="border px-2 py-1">2</th><th class="border px-2 py-1">3</th><th class="border px-2 py-1">4</th><th class="border px-2 py-1">5</th><th class="border px-2 py-1">6</th><th class="border px-2 py-1">7</th></tr></thead><tbody><tr><th class="border px-2 py-1 text-right">0</th><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">7</td></tr><tr><th class="border px-2 py-1 text-right">1</th><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">6</td></tr><tr><th class="border px-2 py-1 text-right">2</th><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">5</td></tr><tr><th class="border px-2 py-1 text-right">3</th><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">4</td></tr><tr><th class="border px-2 py-1 text-right">4</th><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">3</td></tr><tr><th class="border px-2 py-1 text-right">5</th><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">2</td></tr><tr><th class="border px-2 py-1 text-right">6</th><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">0</td><td class="border px-2 py-1 text-center">1</td></tr><tr><th class="border px-2 py-1 text-right">7</th><td class="border px-2 py-1 text-center">7</td><td class="border px-2 py-1 text-center">6</td><td class="border px-2 py-1 text-center">5</td><td class="border px-2 py-1 text-center">4</td><td class="border px-2 py-1 text-center">3</td><td class="border px-2 py-1 text-center">2</td><td class="border px-2 py-1 text-center">1</td><td class="border px-2 py-1 text-center">0</td></tr></tbody></table>',
    etude_2025_09_20_long5:
      'Проверим классический алгоритм обмена через XOR по этой таблице. Пусть a = 5, b = 4. Проследим значения после присваиваний:<br/><pre class="bg-gray-100 p-2 rounded overflow-x-auto text-sm">a = a ^ b  // a = 5 ^ 4 = 1, b = 4\nb = a ^ b  // a = 1, b = 1 ^ 4 = 5\na = a ^ b  // a = 1 ^ 5 = 4, b = 5</pre><br/>Видно, что алгоритм работает: значения обменялись без временной переменной.',
    etude_2025_09_20_short1: 'Побитовая XOR объединяет два числа в третье',
    etude_2025_09_20_short2: 'Полезное тождество: a ^ b ^ a = b',
    etude_2025_09_20_short3: 'Обозначения: ⊕, ^, xor; «сумма по модулю 2»',
    etude_2025_09_20_short4: 'Ассоциативность, коммутативность, самоуничтожение',
    etude_2025_09_20_short5:
      '<a href="https://ru.wikipedia.org/wiki/XOR" target="_blank" rel="noopener noreferrer">Википедия: XOR</a>',

    etude_2025_09_20b_date: '20 сентября 2025',
    etude_2025_09_20b_title: 'Доказательство обмена через XOR',
    etude_2025_09_20b_alt: 'Строгое доказательство XOR‑обмена',
    etude_2025_09_20b_long1:
      'В <a href="/ru/small_etudes/xor" target="_blank" rel="noopener noreferrer">прошлой заметке</a> мы показали XOR‑обмен на примере и таблице. Демонстрация — это не доказательство. Ниже — краткое строгое объяснение, почему XOR‑обмен работает.',
    etude_2025_09_20b_long2:
      'Думайте о <code>a ^ b</code> как о переключении (инвертировании) битов <code>a</code> в тех позициях, где у <code>b</code> стоят 1. Дважды инвертируем — получаем исходное: <code>a ^ b ^ b = a</code>.',
    etude_2025_09_20b_long3:
      '<pre class="bg-gray-100 p-2 rounded overflow-x-auto text-sm">// Пусть исходные значения — a0 и b0\nlet a = a0, b = b0\na = a ^ b      // a = a0 ^ b0,        b = b0\nb = a ^ b      // a = a0 ^ b0,        b = b0 ^ (a0 ^ b0) = a0\na = a ^ b      // a = a0 ^ b0 ^ a0 = b0, b = a0\n</pre>',
    etude_2025_09_20b_long4:
      'Результат общий: значения меняются местами без временной переменной для любых целых <code>a0</code> и <code>b0</code>.',
    etude_2025_09_20b_short1: 'XOR переключает биты: a ^ b ^ b = a',
    etude_2025_09_20b_short2: 'Пошаговое доказательство для a0, b0',
    etude_2025_09_20b_short3: 'Обмен без временной переменной',
    
    note_2025_09_27_date: '27 сентября 2025',
    note_2025_09_27_title: 'Аренда квартиры. Часть 1 (Арендатор)',
    note_2025_09_27_alt: 'Переезд с коробками между арендными квартирами в Ереване',
    note_2025_09_27_p1:
      'Барев всем! Сегодня — про бытовые дела: аренду. Кем бы ты ни был — арендодателем или арендатором, это слово обычно ассоциируется с хлопотами. Сейчас мы в обеих ролях: в Ереване снимаем, в Москве — сдаём квартиру. Сегодня — про нас, арендаторов.',
    note_2025_09_27_p2:
      'Когда мы искали квартиру, сразу пошли на <a href="https://list.am" target="_blank" rel="noopener noreferrer">list.am</a>. Приложение удобное: можно отфильтровать по количеству комнат, цене, району. Есть минус: очень много фейковых аккаунтов. Часто отвечают риелторы: звонишь по конкретному объявлению — говорят, что квартира уже сдана, но «есть другие варианты». Нам с приложением не повезло, поэтому обратились к риелтору.',
    note_2025_09_27_p3:
      'Пошли не к первому встречному, а воспользовались рекомендацией друзей, о чём ни разу не пожалели. Нашего риелтора зовут Николай и для нас это — верх профессионализма, доброжелательности и харизмы.',
    note_2025_09_27_li1:
      '<strong>Минусы:</strong> платишь комиссию — 30–50% от месячной платы. Наш риелтор берёт 30%.',
    note_2025_09_27_li2:
      '<strong>Плюсы:</strong> выбираешь 5–6 квартир, за день показывают все варианты; риелтор предоставляет машину. Наш риелтор не взял комиссию при повторном обращении.',
    note_2025_09_27_p4:
      'В Армении подоходный налог с аренды — 10%, но многие арендодатели его не платят. Поэтому, если понадобится регистрация по месту проживания, недекларирующий арендодатель может отказать.',
    note_2025_09_27_p5:
      'Когда вариант выбран, происходит подписание договора, оплата комиссии и заселение. Наш риелтор организовал переезд и сбил первоначальную цену. В случае с первой квартирой договорился о покупке недостающих вещей: микроволновки, утюга, пылесоса. Нам, правда, повезло с риелтором — не все так делают.',
    note_2025_09_27_p6:
      'Тут выбор простой: искать самим бесплатно или заплатить комиссию и получить сервис — помощь с переездом и погрузкой вещей. Контактами риелтора готовы поделиться и можем его рекомендовать. Фото нашего переезда из одной квартиры в другую — бонус.',
drivers_title: 'Проверенные водители',
    drivers_col_name: 'Водитель',
    drivers_col_region: 'Регион',
    drivers_col_cars: 'Доступные машины',
    drivers_col_phones: 'Телефоны',
    drivers_col_site: 'Сайт',
    drivers_leave_request: 'Оставить заявку на поездку в Telegram',
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
