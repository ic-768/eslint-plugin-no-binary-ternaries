const noBinaryTernaryRule = require("./enforce-no-binary-ternary");
const plugin = { rules: { "enforce-no-binary-ternary": noBinaryTernaryRule } };
module.exports = plugin;
