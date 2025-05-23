const ternaryRule = require("./enforce-no-binary-ternary");
const plugin = { rules: { "enforce-no-binary-ternary": ternaryRule } };
module.exports = plugin;
