# @confluenza/component-navigator-react

`@confluenza/component-navigator-react` is an experiment. We do not know yet how useful it is, but we thought it may be interesting to have
a confluenza-like side navigation which instead of navigating through various Markdown documents, renders a different React component
on each menu item selection.

And so here it is. A version made specifically for React and tested with a React app created with `create-react-app`.

`@confluenza/component-navigator-react` package exposes only one React component: `DocumentationLayout`. You can use as follows:

```jsx
import React from 'react'

import { DocumentationLayout } from '@confluenza/component-navigator-react'

const Layout = ({ children, location, data }) => {
  return (
    <DocumentationLayout location={location} data={data}>
      {children}
    </DocumentationLayout>
  )
}

export { Layout }
```

You need to provide a `location` object and navigation config in `data`. First, location. We tested `@confluenza/component-navigator-react` with `@reach/router`:

```jsx
import React from 'react'
import { Router, Location } from '@reach/router'
import { Global } from '@emotion/core'

import { Layout } from './Layout'

import { globalStyles } from './globalStyles'
import { navigationData } from './navigationData'

const Group1 = () => <div>Group1</div>
const Group1Heading1 = () => <div>Group1Heading1</div>
const Group1Heading2 = () => <div>Group1Heading2</div>
const Group2 = () => <div>Group2</div>
const Group3 = () => <div>Group3</div>
const Group3Heading1 = () => <div>Group3Heading1</div>
const Group3Heading2 = () => <div>Group3Heading2</div>

const App = () => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Helmet>
        <title>{navigationData.site.siteMetadata.title}</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto+Mono:100,100i,300,300i,400,400i,500,500i&display=swap' rel='stylesheet' />
      </Helmet>

      <Location>
        {({ location }) => (
          <Layout location={location} data={navigationData}>
            <Router location={location}>
              <Group1 path='/' />
              <Group1Heading1 path='/heading1' />
              <Group1Heading2 path='/heading2' />
              <Group2 path='/group-2' />
              <Group3 path='/group-3' />
              <Group3Heading1 path='/group-3/heading1' />
              <Group3Heading2 path='/group-3/heading2' />
            </Router>
          </Layout>
        )}
      </Location>
    </div>
  )
}
```

As we see, `location` comes directly from the router. We see a number of routes and we also see the corresponding intended paths associated with them.
Now we need to connect these with our navigation component. We use `navigationData` to achieve this:

```javascript
const navigationData = {
  site: {
    siteMetadata: {
      title: 'Netscape Navigator'
    }
  },
  config: {
    nodes: [
      { title: 'Nav Group 1', tag: 'tag1' },
      { title: 'Nav Group 2', tag: 'tag2' },
      { title: 'Nav Group 3', tag: 'tag3' }
    ]
  },
  navigation: {
    docs: [
      {
        node: {
          frontmatter: {
            title: 'Group 1',
            path: '/',
            tag: 'tag1'
          },
          headings: [
            { value: 'Heading 1', path: '/heading1' },
            { value: 'Heading 2', path: '/heading2' }
          ]
        }
      },
      {
        node: {
          frontmatter: {
            title: 'Group 2',
            path: '/group-2',
            tag: 'tag2'
          }
        }
      },
      {
        node: {
          frontmatter: {
            title: 'Group 3',
            path: '/group-3',
            tag: 'tag3'
          },
          headings: [
            { value: 'Heading 1', path: '/group-3/heading1' },
            { value: 'Heading 2', path: '/group-3/heading2' }
          ]
        }
      }
    ]
  }
}

export { navigationData }
```

It may feel a bit verbose at first, but this in currently intentional. Confluenza comes from Gatsby world and this structure stays close to the structure
we use in Gatsby. We may decide to simplify it, but for the time being it works pretty well for us. What do we have here?

## site

In the `site` section we we only provide the title of our application. This what you see on the title bar of the navigation menu (see [Figure 1](#figure-1)) and we also use it as the
title of our whole site.

## config

`config` provides the names of the navigation groups. Take a look at [Figure 1](#figure-1) below.

<a id="figure-1"></a>
<div class="scrollable flex-wrap responsive">
<div class="bordered-content-300">
  <img alt="Confluenza Navigation Menu" src="https://github.com/confluenza/confluenza/blob/master/workspaces/component-navigator-react/ComponentNavigatorReact-assets/navigation_menu.png?raw=1"/>
</div>
</div>
<div class="flex-wrap responsive">
<p class="figure-title"><b>Figure 1</b> Confluenza Navigation Menu</p>
</div>

There are three navigation groups: _Nav Group 1_, _Nav Group 2_, and _Nav Group 3_. This is reflected in the config section:

```javascript
config: {
  nodes: [
    { title: 'Nav Group 1', tag: 'tag1' },
    { title: 'Nav Group 2', tag: 'tag2' },
    { title: 'Nav Group 3', tag: 'tag3' }
  ]
}
```

Each navigation group holds one _document node_. A document node has a `frontmatter`, which is required, and a list of `headings` (optional). A frontmatter describes one document node and corresponds to a single document under the navigation group. In [Figure 1](#figure-1), _Group 1_, _Group 2_, and _Group 3_ correspond to three document nodes. Let's take a look at _Group 1_:

```javascript
node: {
  frontmatter: {
    title: 'Group 1',
    path: '/',
    tag: 'tag1'
  },
  headings: [
    { value: 'Heading 1', path: '/heading1' },
    { value: 'Heading 2', path: '/heading2' }
  ]
}
```

The frontmatter describes the document node: its `title` (_Group 1_), a `path` where the site should navigate when selecting the menu item corresponding to the document (so when clicking directly on _Group 1_ in the figure above), and finally a `tag`. The `tag` in the `frontmatter` indicates under which navigation group given document should be placed. In the case of _Group 1_ above, the `tag` in the `frontmatter` says _tag1_. Now, in the `config` section above, we see that a `tag` with value _tag1_ is associated with navigation group _Nav Group 1_. This is why _Group 1_ is under _Nav Group 1_ in [Figure 1](#figure-1).

The `headings` section allows us to add one more level to the navigation. Each _heading_ has `value` and `path`. The `value` gives the name displayed under the document node, while the `path` indicates where the site should navigate when the given heading is selected.

As mentioned above, headings are optional. If omitted, only the document node will be displayed under the navigation group (e.g. _Group 2_ under _Nav Group 2_ in the figure above).

Using tags it is easy to relocate document nodes to another navigation group. If, for instance, we would like _Group 1_ document node to be placed under navigation group _Nav Group 2_ instead of _Nav Group 1_ (where it is placed at the moment), we just need to change the value of the `tag` in the `frontmatter` corresponding to the given document node, so in our case we need to change from:

```javascript
frontmatter: {
  title: 'Group 1',
  path: '/',
  tag: 'tag1'
}
```

to:

```javascript
frontmatter: {
  title: 'Group 1',
  path: '/',
  tag: 'tag2'  // <== changed from 'tag1'
}
```

After this change, _Group 1_ document node will be placed under _Nav Group 2_ as shown in [Figure 2](#figure-2) below:

<a id="figure-2"></a>
<div class="scrollable flex-wrap responsive">
<div class="bordered-content-300">
  <img alt="Confluenza Navigation Menu" src="https://github.com/confluenza/confluenza/blob/master/workspaces/component-navigator-react/ComponentNavigatorReact-assets/relocating_docs.png?raw=1"/>
</div>
</div>
<div class="flex-wrap responsive">
<p class="figure-title"><b>Figure 2</b> <em>Group 1</em> relocated to <em>Nav Group 2</em></p>
</div>

Workspace `demo-component-navigator` contains a working example React app with component navigator as described in this document.

## Path Prefix

Sometimes you want to deploy your site in a subfolder. For instance, instead of having your app served from the root of your site (`/`),
you may want to serve it from `/my-app`. To have that working you need to provide `pathPrefix` prop to the `DocumentationLayout`:

```jsx
<DocumentationLayout location={location} data={data} pathPrefix='/my-app'>
  {children}
</DocumentationLayout>
```

You also have to set the `basepath` prop of your router correspondingly:

```jsx
<Router basepath='/my-app'>
  <Group1 path='/' />
  <Group1Heading1 path='/heading1' />
  <Group1Heading2 path='/heading2' />
  <Group2 path='/group-2' />
  <Group2Heading1 path='/group-2/heading1' />
  <Group2Heading2 path='/group-2/heading2' />
  <Group3 path='/group-3' />
  <Group3Heading1 path='/group-3/heading1' />
  <Group3Heading2 path='/group-3/heading2' />
</Router>
```

> Notice that if you do not use path prefix (i.e. you deploy to the root of your site) then you need to either remove the `pathPrefix` and `basePath` from your setup or set them to `/` and `''` respectively.


<style scoped>
.scrollable {
  width: 100%;
  overflow-x: auto;
}
.flex-wrap {
  display:flex;
  flex-flow:column;
  justify-content:center;
  align-items: center;
}
@media (max-width: 650px) {
  .responsive {
    align-items: flex-start;
  }  
}
.figure-title {
  font-size: 0.8em
}
.bordered-content-600 {
  width: 600px;
  border: 1px solid black;
}
.bordered-content-300 {
  width: 300px;
  border: 1px solid black;
}
</style>
