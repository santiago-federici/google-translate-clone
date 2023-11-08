import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../consts'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export function LanguageSelector ({ onChange, type, value }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language)
  }

  return (
        <Form.Select arial-label='Select the language' onChange={handleChange} value={value}>
              {type === SectionType.From && <option value={AUTO_LANGUAGE}>Auto detect language</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
              <option key={key} value={key}>
                {literal}
              </option>
            ))}
        </Form.Select>
  )
}
