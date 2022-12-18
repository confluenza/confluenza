import { Row } from 'src/components/ui-blocks'

const Copyright = () => (
  <Row>
    <p
      style={{
        color: 'white',
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '10pt',
        margin: 0
      }}
    >
      <span
        style={{
          fontSize: '14pt'
        }}
      >
        &copy;
      </span>{' '}
      2022 Confluenza
    </p>
  </Row>
)

export { Copyright }
