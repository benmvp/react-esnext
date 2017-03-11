# Step 8 - Promises

## Setup

Install [`whatwg-fetch`](https://github.com/github/fetch) & [`es6-promise`](https://github.com/stefanpenner/es6-promise) libraries to polyfill [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):

```sh
npm install --save whatwg-fetch es6-promise
```

Install [`imports-loader`](https://github.com/webpack/imports-loader) & [`exports-loader`](https://github.com/webpack/exports-loader) to shim `whatwg-fetch`:

```sh
npm install --save-dev imports-loader exports-loader
```

Update [webpack.config.js](webpack.config.js) to shim `fetch` with `imports-loader` & `exports-loader`:

```js
var webpack = require('webpack'),
    path = require('path');

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
    },
    plugins: [
        new webpack.ProvidePlugin({
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};
```

In the console window that was running the web server, stop the web server and re-run (to pick up webpack changes):

```sh
npm run start
```

## Tasks

- Replace `$.ajax` with the `fetch` API
- Use `Promise` API to replace the `success` & `error` callbacks used with jQuery
- Remove `<script>` tag in [index.html](src/index.html) for `jQuery`, leaving just the webpack bundle

## Next

Go to [Step 9 - Async Functions](../09-async/).

## Resources

- [Learning ES6 - Promises](http://www.benmvp.com/learning-es6-promises/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
