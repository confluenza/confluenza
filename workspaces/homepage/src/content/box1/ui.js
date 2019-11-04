import styled from '@emotion/styled'

const BoxContentWrapper = styled.div({
  width: '80%',
  maxWidth: '800px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const ContentBox = styled.div({
  border: '2px solid #1fe0ba',
  marginTop: '50px',
  marginBottom: '50px',
  borderRadius: '32px',
  display: 'flex',
  flexFlow: 'column',
  width: '350px',
  minWidth: '350px',
  height: '185px',
  justifyContent: 'flex-start',
  alignItems: 'center'
})
const Title = styled.h2({
  padding: 0,
  margin: '15px 0 20px 0',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '20pt',
  fontWeight: '300',
  color: '#F57344'
})

const Text = styled.p({
  fontFamily: 'HelveticaNeue-Italic, Helvetica Neue, sans-serif',
  color: 'white',
  width: '85%',
  fontSize: '14pt',
  textAlign: 'center'
})

export { BoxContentWrapper, ContentBox, Title, Text }
