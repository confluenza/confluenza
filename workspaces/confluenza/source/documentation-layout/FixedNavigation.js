import styled from '@emotion/styled'

const FixedNavigation = styled.div(({ rhythm }) => ({
  display: 'block',
  position: 'fixed',
  top: 0,
  minWidth: '300px',
  maxWidth: '300px',
  height: `calc(100vh - ${rhythm(2)})`,
  backgroundColor: '#F7F7F7'
}))

export { FixedNavigation }
