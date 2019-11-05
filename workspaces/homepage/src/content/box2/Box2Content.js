import React from 'react'
import { TextBox } from 'src/components/ui-blocks'

import { BoxContentWrapper, Title } from './ui'

const Box2Content = ({ data }) => (
  <BoxContentWrapper>
    <Title>Why Confluenza?</Title>
    <TextBox css={{ color: 'black' }}>
    As software developers we like our documentation to be text-based
    (so that it is fully versionable), easy to browse through (so that
    we do not have dive into the actual folder structure), in-place
    editable (so that everyone is encouraged to improve it), but at
    the same time we like it to stay as close to the source code as possible.
    And when we want to build a landing page for our project, we want it to stay
    close as well. Because we like using React, and we think that monorepos are
    great even for small projects, we found out that we need a tool that combines
    the power of React and Markdown in the context of monorepos, so that you can
    have a uniform, yet fully extensible way of creating documentation-enabled
    landing pages for our projects. We started with Gatsby, but soon we found
    out that we can leverage the power of Markdown in the context of monorepos
    by adding a responsive Markdown documentation browser that is easy to configure
    and fits well into the common structure of monorepos.
    This is how Confluenza* is born.
    </TextBox>
    <TextBox css={{
      color: 'black',
      fontSize: '9pt',
      textAlign: 'end'
    }}>
      <em>*) The origins of the name Confluenza will remain our small secret for now...</em>
    </TextBox>
  </BoxContentWrapper>
)

export { Box2Content }
