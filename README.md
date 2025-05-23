# no-binary-ternary

## Why This Plugin?

The term **ternary** comes from the Latin _ternarius_, meaning “consisting of three.” The ternary operator is designed to take **three distinct** operands: a condition, a value if true, and a value if false.

However, I often see code like `a ? a : b` where one value is redundantly repeated. In these cases, the simpler and clearer logical OR (`a || b`) is a better choice.

This plugin enforces using `||` over unnecessary ternaries, promoting cleaner, more readable code by respecting the ternary’s intent: choosing between **three distinct parts**, not repeating one unnecessarily.
# eslint-plugin-no-binary-ternaries
