# Step 1 - Modules

## Setup

Install React & [`remarkable`](https://github.com/jonschlinkert/remarkable) markdown parser dependencies:

```sh
npm install --save react react-dom remarkable
```

Install [webpack](https://webpack.github.io/) module builder, along with  [`webpack-dev-server`](https://webpack.github.io/docs/webpack-dev-server.html) & [`react-hot-loader`](https://github.com/gaearon/react-hot-loader):

```sh
npm install --save-dev webpack webpack-dev-server react-hot-loader
```

Install [Babel](http://babeljs.io/) dependencies for ES6+ & JSX transpiling:

```sh
npm install --save-dev babel-cli babel-preset-env babel-preset-react babel-loader
```

Add [.babelrc](.babelrc) contents to add Babel configuration:

```json
{
    "presets": [
        "react",
        [
            "env", {
                "targets": {
                    "browsers": ["last 2 versions"]
                }
            }
        ]
    ]
}
```

Create a simple [webpack.config.js](webpack.config.js):

```js
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'src/dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
};
```

Don't accidentally lint the bundle by adding [.eslintignore](src/.eslintignore) in [src](src/) directory:

```bash
# Ignore built files
dist/
```

Replace `start` script in [package.json](package.json) to leverage `webpack-dev-server` with hot reloading and eslint:

```json
{
  "scripts": {
    "eslint": "eslint .",
    "lint": "npm run eslint",
    "start": "webpack-dev-server --content-base src/ --hot --inline --open",
    "start:api": "node api-server.js",
    "test": "npm run lint"
  }
}
```

In the console window that was running the web server, stop the web server and re-run (now using `webpack-dev-server`):

```sh
npm run start
```

Update `<script>` tags in [index.html](src/index.html) to point to the webpack bundle and to remove Babel:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.6.2/remarkable.min.js"></script>
<script src="dist/bundle.js"></script>
```

Finally, visit [http://localhost:8080/](http://localhost:8080/) to see the app running on the `webpack-dev-server`.

## Tasks

- Add React dependencies to the top of [index.js](src/index.js)
- Separate the components into their own files ([index.js](src/index.js), [App.js](src/containers/App.js), [CommentForm.js](src/components/CommentForm.js), [CommentList.js](src/components/CommentList.js) & [Comment.js](src/components/Comment.js)), and use [ES6 imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) to pull in dependencies
- Also use ES6 imports for `Remarkable` depdendency in [Comment.js](src/components/Comment.js)
- Remove `<script>` tags in [index.html](src/index.html) for `react`, `react-dom` & `remarkable`, leaving just `jQuery` and the webpack bundle

## Next

Go to [Step 2 - Classes](../02-classes/).

## Resources

- [ECMAScript 6 modules](http://www.2ality.com/2014/09/es6-modules-final.html)
- [Reusable Components](https://facebook.github.io/react/docs/reusable-components.html)
- [Babel](http://babeljs.io/) & [`babel-preset-env`](https://github.com/babel/babel-preset-env)
- [Getting Started with webpack](http://webpack.github.io/docs/tutorials/getting-started/)
- [React Developer Tools](https://github.com/facebook/react-devtools)
