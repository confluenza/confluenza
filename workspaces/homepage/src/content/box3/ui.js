import styled from '@emotion/styled'

const BoxContentWrapper = styled.div({
  width: '80%',
  maxWidth: '800px',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const ContentBox = styled.div({
  border: '2px solid #f57344',
  marginTop: '25px',
  marginBottom: '25px',
  borderRadius: '13px',
  display: 'flex',
  flexFlow: 'row wrap',
  width: '100%',
  minWidth: '350px',
  justifyContent: 'space-around',
  alignItems: 'center'
})

const Text = styled.p({
  fontFamily: 'HelveticaNeue-Italic, Helvetica Neue, sans-serif',
  margin: '15px 0',
  color: 'black',
  width: '55%',
  fontSize: '14pt',
  textAlign: 'left'
})

const Img = styled.img({
  width: '300px',
  margin: '20px 0'
})

export { BoxContentWrapper, ContentBox, Text, Img }
