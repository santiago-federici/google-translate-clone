import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  isLoading?: boolean
  value: string
  onChange: (value: string) => void
}

const getPlaceholder = ({ type, isLoading }: { type: SectionType, isLoading?: boolean }) => {
  if (type === SectionType.From) return 'Write something'
  if (isLoading === true) return 'Translating'
  return 'Translation'
}

export function TextArea ({ type, isLoading, value, onChange }: Props) {
  const style = type === SectionType.To ? { background: '#f5f5f5' } : { background: 'none' }

  return (
      <Form.Control
        autoFocus={type === SectionType.From}
        as='textarea'
        placeholder={getPlaceholder({ type, isLoading })}
        value={value}
        style={style}
      />
  )
}
