import styled from '@emotion/styled'

const BodyFrame = styled.div({
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '300px',
  width: '100%',
  '@media (min-width: 950px)': {
    width: '80%'
  },
  maxWidth: '1200px'
})

export { BodyFrame }
