import styled from '@emotion/styled'

const FixedNavigation = styled.div(({ rhythm }) => ({
  display: 'block',
  position: 'fixed',
  top: 0,
  minWidth: '300px',
  maxWidth: '300px',
  height: `100vh`,
  backgroundColor: '#F7F7F7'
}))

export { FixedNavigation }
