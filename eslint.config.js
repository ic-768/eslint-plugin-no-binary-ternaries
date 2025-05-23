"use strict";

const pluginExample = require("./no-binary-ternary");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { "no-binary-ternary": pluginExample },
    rules: {
      "no-binary-ternary/enforce-no-binary-ternary": "error",
    },
  },
];
