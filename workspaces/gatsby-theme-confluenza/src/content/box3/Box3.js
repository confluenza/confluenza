import React from 'react'
import { Box } from 'src/components/ui-blocks'

import { Box3Content } from './Box3Content'

const Box3 = ({ data }) => (
  <Box backgroundStyles={{
    backgroundImage: 'none',
    backgroundColor: 'white'
  }}
  >
    <Box3Content data={data} />
  </Box>
)

export { Box3 }
