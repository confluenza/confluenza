import styled from '@emotion/styled'

const TextBox = styled.p({
  margin: 0,
  padding: '20px 15px',
  fontSize: '11pt',
  '@media (min-width: 800px)': {
    fontSize: '12pt',
    padding: '20px 50px'
  },
  letterSpacing: '1px',
  width: '100%',
  // '@media (max-width: 800px)': {
  //   fontSize: '18px'
  // },
  fontFamily: 'HelveticaNeue, Helvetica Neue, sans-serif',
  color: 'white'
})

export { TextBox }
