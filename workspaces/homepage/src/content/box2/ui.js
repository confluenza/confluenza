import styled from '@emotion/styled'

const Title = styled.h2({
  padding: 0,
  margin: '35px 0 20px 0',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '24pt',
  fontWeight: '500',
  color: 'black'
})

const BoxContentWrapper = styled.div({
  width: '80%',
  maxWidth: '800px',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export { BoxContentWrapper, Title }
