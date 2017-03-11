# Step 7 - Spread operator

## Setup

We will be using [Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread/blob/master/Spread.md) (Stage 3) in addition to the ES6 spread operator that works on arrays, so we'll need an additional babel preset.

Install the [`babel-preset-stage-3`](https://babeljs.io/docs/plugins/preset-stage-3/) npm package:

```sh
npm install --save-dev babel-preset-stage-3
```

Update [.babelrc](.babelrc) to include the preset:

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
        ],
        "stage-3"
    ],
    "plugins": [
        "transform-class-properties"
    ]
}
```

## Tasks

Replace array concatenation or object merges with the spread operator.

## Next

Go to [Step 8 - Promises](../08-promises/).

## Resources

- [Learning ES6 - Parameter handling: Spread operator](http://www.benmvp.com/learning-es6-parameter-handling/#spread-operator)
- [Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread/blob/master/Spread.md) (Stage 3)
- [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
