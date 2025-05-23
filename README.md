# eslint-plugin-no-binary-ternary

## Why This Plugin?

The term **ternary** comes from the Latin _ternarius_, meaning “consisting of three.” The ternary operator is designed to take **three distinct** operands: a condition, a value if true, and a value if false.

However, I often see code like `a ? a : b` where one value is redundantly repeated. In these cases, the simpler and clearer logical OR (`a || b`) is a better choice.

This plugin enforces using `||` over unnecessary ternaries, promoting cleaner, more readable code by respecting the ternary’s intent: choosing between **three distinct parts**, not repeating one unnecessarily.

## How to Use

Install:
`npm i eslint-plugin-no-binary-ternary`

Import the plugin in your ESLint config:

```js
import noBinaryTernary from "eslint-plugin-no-binary-ternary";

...

    plugins: {
      "no-binary-ternary": noBinaryTernary,
    },
    rules: {
      "no-binary-ternary/enforce-no-binary-ternary": "error",
    },
```

## Repository

[eslint-plugin-no-binary-ternary on GitHub](https://github.com/ic-768/eslint-plugin-no-binary-ternary)
