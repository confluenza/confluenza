# @confluenza/component-navigator-react

`@confluenza/component-navigator-react` is an experiment. We do not know yet how useful it is, but we thought it may be interesting to have
a confluenza-like side navigation which instead of navigating through various Markdown documents, renders a different React component
on each menu item selection.

And so here it is. A version made specifically for React and tested with a React app created with `create-react-app`.

`@confluenza/component-navigator-react` package exposes only one React component: `DocumentationLayout`. You can use as follows:

```jsx
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

> With [New JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) introduced in React v17, you no longer need to import React
> just to use JSX.

You need to provide a `location` object and navigation config in `data`. First, location. With React Router v6 you can use `useLocation` hook to get the current location: :

```jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { Global } from '@emotion/react'
import { Helmet } from 'react-helmet'

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
  const location = useLocation()
  return (
    <div>
      <Global styles={globalStyles} />
      <Helmet>
        <title>{navigationData.site.siteMetadata.title}</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto+Mono:100,100i,300,300i,400,400i,500,500i&display=swap' rel='stylesheet' />
      </Helmet>

      <Layout location={location} data={navigationData}>
        <Routes>
          <Route path='/' element={<Group1 />} />
          <Route path='/heading1' element={<Group1Heading1 />} />
          <Route path='/heading2' element={<Group1Heading2 />} />
          <Route path='/group-2' element={<Group2 />} />
          <Route path='/group-3' element={<Group3 />} />
          <Route path='/group-3/heading1' element={<Group3Heading1 />} />
          <Route path='/group-3/heading2' element={<Group3Heading2 />} />
        </Routes>
      </Layout>
    </div>
  )
}
```

In the example above, we see a number of routes and we also see the corresponding intended paths associated with them.
Now we need to connect these with our navigation component. We use `navigationData` to achieve this:

```javascript
const navigationData = {
  site: {
    siteMetadata: {
      title: 'Component Navigator'
    }
  },
  config: {
    nodes: [
      { title: 'Nav Group 1', tag: 'tag1' },
      { title: 'Nav Group 2', tag: 'tag2' }
    ]
  },
  navigation: {
    docs: [
      {
        node: {
          frontmatter: {
            title: 'Group 1',
            path: '/',
            tag: 'tag1',
            sortIndex: 1
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
            tag: 'tag1',
            sortIndex: 2
          }
        }
      },
      {
        node: {
          frontmatter: {
            title: 'Group 3',
            path: '/group-3',
            tag: 'tag2'
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

There are two navigation groups: _Nav Group 1_, and _Nav Group 2_. This is reflected in the config section:

```javascript
config: {
  nodes: [
    { title: 'Nav Group 1', tag: 'tag1' },
    { title: 'Nav Group 2', tag: 'tag2' }
  ]
}
```

Each navigation group holds one _document node_. A document node has a `frontmatter`, which is required, and a list of `headings` (optional). A frontmatter describes one document node and corresponds to a single document under the navigation group. In [Figure 1](#figure-1), _Group 1_, and _Group 2_ correspond to two document nodes. Let's take a look at _Group 1_:

```javascript
node: {
  frontmatter: {
    title: 'Group 1',
    path: '/',
    tag: 'tag1',
    sortIndex: 1
  },
  headings: [
    { value: 'Heading 1', path: '/heading1' },
    { value: 'Heading 2', path: '/heading2' }
  ]
}
```

The frontmatter describes the document node: its `title` (_Group 1_), a `path` where the site should navigate when selecting the menu item corresponding to the document (so when clicking directly on _Group 1_ in the figure above), and finally a `tag`. The `tag` in the `frontmatter` indicates under which navigation group given document should be placed. In the case of _Group 1_ above, the `tag` in the `frontmatter` says _tag1_. Now, in the `config` section above, we see that a `tag` with value _tag1_ is associated with navigation group _Nav Group 1_. This is why _Group 1_ is under _Nav Group 1_ in [Figure 1](#figure-1).

The `headings` section allows us to add one more level to the navigation. Each _heading_ has `value` and `path`. The `value` gives the name displayed under the document node, while the `path` indicates where the site should navigate when the given heading is selected.

As mentioned above, headings are optional. If omitted, only the document node will be displayed under the navigation group (e.g. _Group 2_ under _Nav Group 1_ in the figure above).

Finally, the `sortIndex` attribute indicate the order of groups inside their navigation group, when more than one group is present. This is reflected in our example: _Group 1_ is listed before _Group 2_. If we change the `sortIndex` in _Group 2_ to be `0`, then _Group 2_ will be listed as the first one. If no `sortIndex` is provided, it is assumed to have value `10`.

Using tags it is easy to relocate document nodes to another navigation group. If, for instance, we would like _Group 1_ document node to be placed under navigation group _Nav Group 2_ instead of _Nav Group 1_ (where it is placed at the moment), we just need to change the value of the `tag` in the `frontmatter` corresponding to the given document node, so in our case we need to change from:

```javascript
frontmatter: {
  title: 'Group 1',
  path: '/',
  tag: 'tag1',
  sortIndex: 1
}
```

to:

```javascript
frontmatter: {
  title: 'Group 1',
  path: '/',
  tag: 'tag2',  // <== changed from 'tag1'
  sortIndex: 1
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

_Group 1_ will be shown as the first on the list. This is because its `sortIndex` has value `1` while _Group 3_ does not have `sortIndex` property explicitly defined in the header, which means its `sortIndex` value will be set to `10` (which is greater then `1` that is the value of `sortIndex` of _Group 1_).

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
