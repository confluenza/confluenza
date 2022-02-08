---
path: /users/quick-start
title: Quick Start
tag: user
sortIndex: 10
---

> Confluenza uses `yarn` package manager out of the box. Please make sure you have the most recent version installed before proceeding.

To get you up and running quickly we created a [template repository](https://github.com/confluenza/solo-template) so that you can bootstrap your own Confluenza site quickly.

## Create a Confluenza site

Use the Gatsby CLI to create a new site, specifying the default starter.

```bash
# create a new Confluenza site
npx gatsby new my-confluenza https://github.com/confluenza/solo-template
```

## Start developing

Navigate into your new site’s directory and start it up.

```bash
cd my-confluenza/
yarn dev
```

## Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

*Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [GraphQL & Gatsby](https://www.gatsbyjs.com/docs/graphql/).*

Open the `my-confluenza` directory in your code editor of choice and edit `src/pages/`. Save your changes and the browser will update in real time!

## Learn More

If you want to use Confluenza in a monorepo (this is where it all started), please take a look at [monorepo-template](https://github.com/confluenza/monorepo-template).

For more in-depth understanding of how Confluenza works, please take a look at [Making Confluenza Yours](/developers/making-confluenza-yours).
