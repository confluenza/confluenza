This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

It is a working demo of using [component-navigation-react] with `create-react-app` based React application.

If after running `yarn start` in `demo-component-navigator` workspace you get an error:

```bash
Starting the development server...

/Users/mczenko/code/open-source/confluenza/confluenza/node_modules/react-scripts/scripts/start.js:19
  throw err;
  ^

TypeError: Cannot read property 'tap' of undefined
    at /Users/mczenko/code/open-source/confluenza/confluenza/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/index.js:236:65
```

run:

```bash
$ yarn add --exact react-scripts@4.0.3
```

and if after this you get:

```bash
/bin/sh: react-scripts: command not found
```

then run:

```bash
$ yarn add --exact react-scripts@4.0.2
$ yarn add --exact react-scripts@4.0.3
```