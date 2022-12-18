import { BoxContentWrapper, ContentBox, Title, Text } from './ui'

const Box1Content = () => (
  <BoxContentWrapper>
    <ContentBox css={{ marginBottom: 0 }}>
      <Title>React</Title>
      <Text>
        Use unrestricted ReactJS for maximum flexibility and creativity.
      </Text>
    </ContentBox>
    <ContentBox css={{ marginBottom: 0 }}>
      <Title>Gatsby</Title>
      <Text>
        Take advantage of simplicity of static pages with reach ecosystem of
        plugins.
      </Text>
    </ContentBox>
    <ContentBox>
      <Title>Markdown</Title>
      <Text>
        Markdown support out of the box with responsive documentation browser.
      </Text>
    </ContentBox>
    <ContentBox>
      <Title>Monorepos</Title>
      <Text>
        Document your monorepo workspaces with markdown and flexible
        content-grouping.
      </Text>
    </ContentBox>
  </BoxContentWrapper>
)

export { Box1Content }
