import styled from '@emotion/styled'
import { Grid } from '@react-frontend-developer/css-grid-helper'

const grid = new Grid([
  'sidebar content'
], {
  gridTemplateColumns: '300px calc(100vw - 350px)'
})

const DocumentationLayoutGrid = styled.div(grid.container, {
  boxSizing: 'border-box',
  margin: '0 1.5rem',
  fontSize: '18px'
})

const SidebarGridItem = styled.div(grid.sidebar)
const ContentGridItem = styled.div(grid.content, { width: '100%', padding: '1rem', boxSizing: 'border-box' })

export { DocumentationLayoutGrid, SidebarGridItem, ContentGridItem }
