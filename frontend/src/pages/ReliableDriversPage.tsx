import { useLanguage } from '../useLanguage'
import Meta from '../components/Meta'

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
    phones: ['xxxxxxxxx'],
  },
  {
    name: 'Гор',
    region: { en: 'Tsaghkadzor', ru: 'Цахкадзор' },
    cars: '-',
    phones: ['xxxxxxxxx'],
    website: 'https://tour-armenia.am/',
  },
  {
    name: 'Сергей',
    region: { en: 'Sevan', ru: 'Севан' },
    cars: '-',
    phones: ['xxxxxxxxx'],
  },
  {
    name: 'Алек',
    region: { en: 'Sevan', ru: 'Севан' },
    cars: '-',
    phones: ['xxxxxxxxx'],
  },
]

export default function ReliableDriversPage() {
  const { lang, t } = useLanguage()
  return (
    <>
      <Meta />
      <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('drivers_title')}</h1>
      <p className="mb-4">
        <a
          href="https://t.me/yourgroup/12345?utm_source=site&utm_medium=cta&utm_campaign=rides"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-600 underline"
        >
          {t('drivers_leave_request')}
        </a>
      </p>
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
      <p className="mb-4">
        <a
          href="https://t.me/alina_yerevan_js/27?utm_source=site&utm_medium=cta&utm_campaign=rides"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-600 underline"
        >
          {t('drivers_leave_request')}
        </a>
      </p>
    </div>
    </>
  )
}
