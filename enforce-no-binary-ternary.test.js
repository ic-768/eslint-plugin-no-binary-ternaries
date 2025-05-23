const { RuleTester } = require("eslint");
const ternaryRule = require("./enforce-no-binary-ternary");

const ruleTester = new RuleTester();

ruleTester.run("enforce-no-binary-ternary", ternaryRule, {
  valid: [
    "a || b",
    "foo && bar",
    "condition ? func() : anotherFunc()",
    "x ? y : z ? a : b",
    "a ? b : c ? d : e",
    "x ? y : z",
    "a ? b() : b",
  ],

  invalid: [
    {
      code: "a ? a : b",
      output: "a || b",
      errors: 1,
    },
    {
      code: "foo ? foo : bar",
      output: "foo || bar",
      errors: 1,
    },
    {
      code: "(x && y) ? (x && y) : z",
      output: "(x && y) || z",
      errors: 1,
    },
    {
      code: "a ? a : b ? b : c",
      output: "a || b ? b : c",
      errors: 1,
    },
    {
      code: "(a + b) ? (a + b) : c",
      output: "(a + b) || c",
      errors: 1,
    },
    {
      code: "a.test ? a.test : b",
      output: "a.test || b",
      errors: 1,
    },
    {
      code: "a[1] ? a[1] : b",
      output: "a[1] || b",
      errors: 1,
    },
    {
      code: "foo.bar.baz ? foo.bar.baz : qux",
      output: "foo.bar.baz || qux",
      errors: 1,
    },
    {
      code: "test?.is ? test?.is : a",
      output: "test?.is || a",
      errors: 1,
    },
  ],
});

console.log("All tests passed!");
