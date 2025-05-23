"use strict";

const plugin = require("./index");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { "no-binary-ternary": plugin },
    rules: {
      "no-binary-ternary/enforce-no-binary-ternary": "error",
    },
  },
];
