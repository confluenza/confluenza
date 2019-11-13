import styled from '@emotion/styled'

const Box = styled.div({
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(#0C3C52, #5182BD)',
  padding: '15px 0',
  '@media (min-width: 800px)': {
    padding: '15px'
  },
  width: '100%',
  fontSize: '12pt'
}, ({ backgroundStyles }) => (
  { ...backgroundStyles }
))

export { Box }
