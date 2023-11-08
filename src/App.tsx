import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { SwitchArrow } from './components/Icons'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './consts'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App () {
  const { fromLanguage, toLanguage, fromText, result, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult } = useStore()

  return (
    <main className='wrapper'>
      <h1>Google Translate</h1>

      <Container>
        <Row>
          <Col>
            <Stack gap={3}>
              <LanguageSelector
                type={SectionType.From}
                value={fromLanguage}
                onChange={setFromLanguage}
              />

              <TextArea
                type={SectionType.From}
                value={fromText}
                onChange={(setFromText)}
              />
            </Stack>
          </Col>

          <Col xs='auto'>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
              <SwitchArrow />
            </Button>
          </Col>

          <Col>
            <Stack gap={3}>
              <LanguageSelector
                type={SectionType.To}
                value={toLanguage}
                onChange={setToLanguage}
              />

              <TextArea
                type={SectionType.To}
                value={result}
                onChange={setResult}
              />
            </Stack>
          </Col>

        </Row>
      </Container>
    </main>
  )
}

export default App
