import { useLanguage } from '../useLanguage'

interface Driver {
  name: string
  region: { en: string; ru: string }
  cars: string
  phones: string[]
  website?: string
}

const drivers: Driver[] = [
  {
    name: 'Жора',
    region: { en: 'Gyumri', ru: 'Гюмри' },
    cars: '-',
    phones: ['077411503'],
  },
  {
    name: 'Гор',
    region: { en: 'Tsaghkadzor', ru: 'Цахкадзор' },
    cars: '-',
    phones: ['+374 93 584 455'],
    website: 'https://tour-armenia.am/',
  },
  {
    name: 'Сергей',
    region: { en: 'Sevan', ru: 'Севан' },
    cars: '-',
    phones: ['095244404'],
  },
  {
    name: 'Алек',
    region: { en: 'Sevan', ru: 'Севан' },
    cars: '-',
    phones: ['+37493390681'],
  },
]

export default function ReliableDriversPage() {
  const { lang, t } = useLanguage()
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('drivers_title')}</h1>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-2 py-1">{t('drivers_col_name')}</th>
            <th className="border px-2 py-1">{t('drivers_col_region')}</th>
            <th className="border px-2 py-1">{t('drivers_col_cars')}</th>
            <th className="border px-2 py-1">{t('drivers_col_phones')}</th>
            <th className="border px-2 py-1">{t('drivers_col_site')}</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((d) => (
            <tr key={d.name}>
              <td className="border px-2 py-1">{d.name}</td>
              <td className="border px-2 py-1">{d.region[lang]}</td>
              <td className="border px-2 py-1">{d.cars}</td>
              <td className="border px-2 py-1">{d.phones.join(', ')}</td>
              <td className="border px-2 py-1">
                {d.website ? (
                  <a href={d.website} target="_blank" rel="noopener noreferrer">
                    {d.website}
                  </a>
                ) : (
                  '-'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
