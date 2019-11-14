import styled from '@emotion/styled'

const BoxContentWrapper = styled.div({
  width: '100%',
  '@media (min-width: 1300px)': {
    width: '80%',
    maxWidth: '800px'
  },
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const ContentBox = styled.div({
  marginTop: 0,
  paddingLeft: '20px',
  paddingRight: '20px',
  display: 'flex',
  flexFlow: 'row wrap',
  width: '100%',
  minWidth: '320px',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'light-grey',
  borderBottom: '25px solid #f57344',
  '@media (min-width: 1300px)': {
    border: '2px solid #f57344',
    borderRadius: '13px',
    paddingTop: 0,
    marginTop: '25px'
  }
})

const Text = styled.p({
  fontFamily: 'HelveticaNeue-Italic, Helvetica Neue, sans-serif',
  color: 'black',
  width: '100%',
  margin: '0 15px 25px 15px',
  fontSize: '12pt',
  '@media (min-width: 700px)': {
    margin: '15px 0',
    width: '45%',
    fontSize: '14pt'
  },
  '@media (min-width: 720px)': {
    margin: '15px 0',
    width: '55%',
    fontSize: '14pt'
  },
  textAlign: 'left'
})

const Img = styled.img({
  maxWidth: '300px',
  width: '100%',
  margin: '20px 0',
  '@media (min-width: 700px)': {
    width: '35%',
    margin: '20px'
  },
  '@media (min-width: 1300px)': {
    width: '43%'
  }
})

export { BoxContentWrapper, ContentBox, Text, Img }
