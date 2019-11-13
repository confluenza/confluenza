import styled from '@emotion/styled'

const Title = styled.h2({
  padding: 0,
  margin: '35px 0 20px 0',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '18pt',
  '@media (min-width: 800px)': {
    fontSize: '24pt'
  },
  fontWeight: '500',
  color: 'black'
})

const BoxContentWrapper = styled.div({
  '@media (min-width: 500px)': {
    width: '80%'
  },
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export { BoxContentWrapper, Title }
