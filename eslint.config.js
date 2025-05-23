"use strict";

const pluginExample = require("./plugin-example");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { example: pluginExample },
    rules: {
      "example/enforce-no-binary-ternary": "error",
    },
  },
];
