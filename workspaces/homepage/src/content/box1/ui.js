import styled from '@emotion/styled'

const BoxContentWrapper = styled.div({
  width: '100%',
  '@media (min-width: 1050px)': {
    width: '90%'
  },
  '@media (min-width: 1150px)': {
    width: '80%',
    maxWidth: '800px'
  },
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (min-width: 950px)': {
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

const ContentBox = styled.div({
  backgroundColor: '#1a548c',
  '@media (min-width: 800px)': {
    border: '2px solid #1fe0ba',
    width: '350px',
    minWidth: '350px',
    marginBottom: '50px',
    borderRadius: '32px',
    marginTop: '50px',
    height: '185px'
  },
  marginTop: '20px',
  display: 'flex',
  flexFlow: 'column',
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
