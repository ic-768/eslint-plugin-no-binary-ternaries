const { RuleTester } = require("eslint");
const ternaryRule = require("./enforce-no-binary-ternary");

const ruleTester = new RuleTester();

ruleTester.run("enforce-no-binary-ternary", ternaryRule, {
  valid: [
    {
      code: "a || b",
    },
  ],
  invalid: [
    {
      code: "a ? a : b",
      output: "a || b",
      errors: 1,
    },
  ],
});

console.log("All tests passed!");
