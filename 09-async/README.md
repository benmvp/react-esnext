# Step 9 - Async Functions

## Setup

In order to write async functions, we will need the Babel regenerator runtime.

Install the [`babel-plugin-transform-runtime`](https://babeljs.io/docs/plugins/transform-runtime/) npm package:

```sh
npm install --save-dev babel-plugin-transform-runtime
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
        "transform-class-properties",
        "transform-runtime"
    ]
}
```

## Tasks

TBD

## Next

You're done! Your code should mirror the [Completed App](../final/).

## Resources

TBD
