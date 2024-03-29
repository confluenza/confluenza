import styled from '@emotion/styled'
import { Grid } from '@react-frontend-developer/css-grid-helper'

const grid = new Grid(['sidebar content'], {
  gridTemplateColumns: '300px calc(100vw - 350px)'
})

const DocumentationLayoutGrid = styled.div(grid.container, ({ rhythm }) => ({
  boxSizing: 'border-box',
  margin: `0 ${rhythm(1)}`,
  fontSize: '18px'
}))

const SidebarGridItem = styled.div(grid.sidebar)
const ContentGridItem = styled.div(grid.content, {
  width: 'calc(100% - 1rem)',
  padding: '1rem',
  paddingRight: 0
})

export { DocumentationLayoutGrid, SidebarGridItem, ContentGridItem }
