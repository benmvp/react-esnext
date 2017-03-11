# Step 2 - Classes

## Setup

We will be using [ES Class Fields & Static Properties](https://github.com/tc39/proposal-class-public-fields) (Stage 2) along with ES6 classes so we'll have to add an additional babel plugin.

Install the [`babel-plugin-transform-class-properties`](https://babeljs.io/docs/plugins/transform-class-properties/) npm package:

```sh
npm install --save-dev babel-plugin-transform-class-properties
```

Update [.babelrc](.babelrc) to include the plugin:

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
    ],
    "plugins": [
        "transform-class-properties"
    ]
}
```

## Tasks

- Replace uses of `React.createClass` with JavaScript `class` syntax (don't forget to add `.bind(this)` to event handlers!)
- Use named import syntax to pull out `Component` & `PropTypes` from `react` dependency in the component files
- Use named import syntax to pull out `render` from `react-dom` dependency in [index.js](src/index.js)

## Next

Go to [Step 3 - Block scoping](../03-block-scoping/).

## Resources

- [Learning ES6 - Classes](http://www.benmvp.com/learning-es6-classes)
- [ES Class Fields & Static Properties](https://github.com/tc39/proposal-class-public-fields) (Stage 2)
- [ECMAScript 6 modules](http://www.2ality.com/2014/09/es6-modules-final.html)
- [Status, process & documents for ECMAScript](https://github.com/tc39/ecma262)
