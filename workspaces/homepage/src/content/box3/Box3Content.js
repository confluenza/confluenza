import Media from 'react-media'

import { getImage } from 'src/components/assets'
import { Link } from 'src/components/forms'

import { BoxContentWrapper, ContentBox, Text, Img } from './ui'

const Box3Content = ({ data }) => (
  <BoxContentWrapper>
    <ContentBox>
      <Media
        query='(max-width: 699px)'
        render={() => (
          <Img alt='Using React' src={getImage(data, 'use-react')} />
        )}
      />
      <Text>
        Use React in the way you normally do. You can decide if you want to
        style the page yourself using unrestricted React or you want to take
        advantage of our responsive documentation browser. Creativity is yours.
      </Text>
      <Media
        query='(min-width: 700px)'
        render={() => (
          <Img alt='Using React' src={getImage(data, 'use-react')} />
        )}
      />
    </ContentBox>
    <ContentBox>
      <Img alt='Gatsby Logo' src={getImage(data, 'gatsby-logo')} />
      <Text>
        Confluenza is based on Gatsby. No forks, no changes. Everything you can
        do in Gatsby you can still do in Confluenza. Confluenza elevates support
        for markdown and monorepos so that you can start documenting your
        project immediately without having to build everything from scratch.
      </Text>
    </ContentBox>
    <ContentBox>
      <Media
        query='(max-width: 699px)'
        render={() => <Img alt='MDX Logo' src={getImage(data, 'mdx-logo')} />}
      />
      <Text>
        Confluenza supports MDX - an authorable format that lets you seamlessly
        write JSX in your Markdown documents. You can import components, such as
        interactive charts or alerts, and embed them within your content. This
        makes writing long-form content with components a blast.
      </Text>
      <Media
        query='(min-width: 700px)'
        render={() => <Img alt='MDX Logo' src={getImage(data, 'mdx-logo')} />}
      />
    </ContentBox>
    <ContentBox>
      <Img alt='Confluenza Menu' src={getImage(data, 'confluenza-menu')} />
      <Text>
        Confluenza can be used to host any markdown or MDX documentation to make
        it browsable and easily editable. But where it really shines are the
        monorepos. You just create a dedicated workspace where you put
        Confluenza (can be your main landing page for your project) and then you
        can easily refer to any other document in any other workspace in your
        monorepo. Using frontmatter in your markdown documents you can easily
        indicate under which category given document should be put in the
        navigation menu.
      </Text>
    </ContentBox>
    <ContentBox>
      <Media
        query='(max-width: 699px)'
        render={() => (
          <Img
            alt='Open Source'
            src={getImage(data, 'confluenza-open-source')}
          />
        )}
      />
      <Text>
        Confluenza is fully Open Source maintained by the developers who
        actually use it daily. We want Confluenza to become the number one
        choice for monorepos. Contributions and creative ideas how to get better
        are welcomed!
      </Text>
      <Media
        query='(min-width: 700px)'
        render={() => (
          <Img
            alt='Open Source'
            src={getImage(data, 'confluenza-open-source')}
          />
        )}
      />
    </ContentBox>
    <Link to='/developers/making-confluenza-yours'>Get started</Link>
  </BoxContentWrapper>
)

export { Box3Content }
