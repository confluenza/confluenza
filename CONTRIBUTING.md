# Contributing

> Working on your first Pull Request? You can learn how from this *free* series
> [How to Contribute to an Open Source Project on
> GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Quick start

After you clone your forked repo, follow the following steps to bootstrap your
local environment:

```bash
» yarn install
» yarn build
» yarn test
» (cd workspaces/homepage && yarn dev)
```

## Code organization

Confluenza is a monorepo. It consists of a number of packages that all live under the `workspaces` folder. We use a combination of [lerna](https://lernajs.io) and [yarn
workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to manage them.

## Workspaces

Confluenza monorepo currently uses a number of workspaces described below.

### confluenza

This workspace holds the code for the navigation menu allowing to conveniently browse through markdown documents managed by Confluenza. It is an npm package (`@confluenza/confluenza`) that is then used by the `gatsby-theme-confluenza` workspace described below. Although it has a peer dependency to `gatsby`, it is independent of Gatsby build system and it does not hold any GraphQL queries.

### gatsby-theme-confluenza

This is a Gatsby Theme - the core of Confluenza and only direct dependency for any other sites wanting to use Confluenza navigation capability. It is published as `@confluenza/gatsby-theme-confluenza`.

Gatsby theme is also a fully functional Gatsby site, and so it should be possible to validate changes in the `gatsby-theme-confluenza` by simply running:

```bash
$ yarn workspace @confluenza/gatsby-theme-confluenza develop
```

And it was, before we added the `mdx` configuration option. In order to support theme configuration
options, the `gatsby-config.js` file needs to export a function. Unfortunately, this makes it impossible
to ran `$ yarn workspace @confluenza/gatsby-theme-confluenza develop`. Of course, you can still validate
the theme through the `homepage` workspace that uses the `@confluenza/gatsby-theme-confluenza` theme, but
if you still would like to run the theme as a standalone Gatsby site, just make sure that you change
the theme's `gatsby-config.js` in such a way that it does not export a function but a plain object.

When running `gatsby-theme-confluenza` as a standalone Gatsby site, you do not need to create any dummy test data or create test pages. Because our repository is a monorepo, gatsby-theme-confluenza has access to any other document published in the `homepage` workspace. In other words, the only difference between running `yarn workspace @confluenza/gatsby-theme-confluenza develop` and `yarn workspace homepage develop` (realize that `homepage` uses the Confluenza theme), is the index page.

### homepage

This is a Gatsby site that uses `gatsby-theme-confluenza`. This is what you see when you visit `https://confluenza.online`.

### component-navigator-react

A version of `@confluenza/confluenza` but for pure React apps created with `create-react-app`. Thus, no dependency on Gatsby.

### demo-component-navigator

A demo app using `@confluenza/component-navigator-react` package.

### demo-workspace-1 and demo-workspace-2

Demonstration workspaces to show that Confluenza makes it easy to make the documentation of every workspace accessible.

### design-assets

Most of our design assets live here.

## Installing dependencies

We install all mono-repo dependencies with single top-level `yarn install`. 

## Building packages

Because our monorepo contains a number of *packages* under the `workspaces` 
directory, some of them may need to be build before they can be published.
The build command uses `lerna` in order to trigger the build script
for every single workspace. Please use a convenience script `build` defined in the root `package.json`.

### Run tests

We run all the tests from the top level - this is far more efficient 
especially if the number of workspaces in the monorepo increases:

```bash
» yarn test
» yarn test --no-cache    // good to know this
» yarn jest --clearCache  // a nice one
```

## Babel 7

We use Babel 7.

Babel 7 has changed in how babel configuration is discovered.

It allows three different configuration files: `babel.config.js`,
`.babelrc.js`, and the familiar `.babelrc`. The semantics of file 
discovery have changed. If `babel.config.js` is present at your 
current working directory, only this file will be used and `.babelrc` 
and `.babelrc.js` will be ignored (and it does not matter if they are 
in your `cwd` or in one of the subfolders).

If `babel.config.js` is not present, you can decide to either use 
`.babelrc` for static configuration or `.babelrc.js` if you prefer to 
programmatically create your configuration. If you use the `.babelrc` variant, please notice that Babel 7 will look for a `.babelrc` in the current directory. If Babel finds
other `.babelrc` files while transpiling files in a subfolder, it will merge the configurations together.

Because our packages share the same Babel configuration, we chose
to create a single top-level `babel.config.js` where we can 
programmatically create the configuration based on the `BABEL_ENV` and 
`NODE_ENV` environment variables. The same configuration file is used 
to run jest tests.

We could not avoid having babel configurations in subfolders because 
the babel 7 does not continue searching above the first `package.json` that it finds, and we run the `yarn build` command for the packages via top-level `yarn lerna run build`, which means it will be executed from the package folder. 

Fortunately, we are able to reuse the top-level
`babel.config.js` by having the package-specific `babel.config.js` 
with just the following content:

```javascript
module.exports = {
  extends: '../../babel.config.js'
}
```

Alternatively, you can also use `.babelrc.js` with the following content:

```javascript
const babelConfig = require('../../babel.config')

module.exports = babelConfig
```

> In this case, make sure that you do not use the `--no-babelrc`
option in any of the babel commands in the `tools/build.js` top-level
script.


So to summarize, we have a top-level `babel.config.js` and then for each package that we intend to publish to npm registry or which needs a custom babel configuration we have a `babel.config.js` file in the corresponding folder.

> Please notice that we run tests from the top-running of the tests is nicely handled by the top-level `babel.config.js`.

### Read more about babel

In order to get a better grip on Babel 7 and how does it handle configuration files in version 7,
please refer to the following documents:

1. [Configure Babel](https://babeljs.io/docs/en/configuration)
2. [Config Files](https://babeljs.io/docs/en/config-files)

## Staying in sync with upstream

You can follow the steps described in [Syncing a
fork](https://help.github.com/articles/syncing-a-fork/). We recommend that you
keep your local master branch pointing to the upstream master branch. Remaining
in sync then becomes really easy:

```bash
git remote add upstream https://github.com/confluenza/confluenza.git
git fetch upstream
git branch --set-upstream-to=upstream/master master
```

Now, when you do `git pull` from your local `master` branch git will 
fetch changes from the `upstream` remote. Then you can make all of 
your pull request branches based on this `master` branch.

## Submitting a Pull Request

Please go through existing issues and pull requests to check if 
somebody else is already working on it, we use `someone working on it` 
label to mark such issues.

Also, make sure to check if all packages build and that the tests pass before you commit your changes.

```bash
$ yarn build && yarn test
```

Finally, when you rebase, please use `--force-with-lease` instead of bare `--force`.

## Creating releases

We define a release as a sequence of Pull Requests. When creating a pull request that
should be part of a next release, we add one of the following labels to it:

- PR: Breaking Change :bomb:,
- PR: New Feature :rocket:,
- PR: Enhancement :heart_eyes_cat:,
- PR: Bug Fix :bug:,
- PR: Documentation :book:

Some discipline is required to make sure that a pull request is focused on one of the above
mentioned categories. One can say that our releases are pull-request-oriented rather than commit oriented.
This allows us to have enough information and structure while leaving a level of freedom. This is in contrast to so-called _conventional commits_, where each commit must adhere to a set of predefined formatting rules. We find this restriction an inconvenience.

We use [lerna-changelog](https://www.npmjs.com/package/lerna-changelog) to have some level of automation, so that not everything needs to be done by hand. We describe the process of creating a release below.

### Publishing packages

Because we have consciously chosen to have one version for all our packages, it is important to run `lerna publish` with `--force-publish` option:

```bash
$ yarn lerna publish --force-publish
```

This will not only remove confusion among our users, but will also make releases easier to follow.

### Updating CHANGELOG.md

After packages are published and all relevant Pull Requests are merged to the master branch, we run:

```bash
$ yarn lerna-changelog --from=vx.y.z --to=vX.Y.Z
```

where `vx.y.z` refers to the release tag preceding the most recent tag `vX.Y.Z`. Foe example, if last release was tagged `v1.0.18` and the tag for the candidate release already merged and pushed to master is `v1.0.19`, then the command would be:

```bash
$ yarn lerna-changelog --from=v1.0.18 --to=v1.0.19
```

The output of this command should be then manually prepended to `CHANGELOG.md` and pushed to the master branch.

### Draft a new release

On github, use _Draft a new release_ using the output of the `lerna-changelog` command as the input.
Adjust the fields so that the new release follows the structure of previous releases (unless a new formatting is desired).

### Read more about releasing code

- [lerna-changelog](https://github.com/lerna/lerna-changelog)
- [using conventional commits with lerna](https://medium.com/angular-in-depth/release-management-in-angular-with-lerna-21b4ab417c59)
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
- [semantic-release and monorepos discussion](https://github.com/semantic-release/semantic-release/issues/193)
