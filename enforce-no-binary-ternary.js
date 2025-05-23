module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prefer `a || b` over `a ? a : b`", // Explanation shown in docs
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    const sourceCode = context.getSourceCode();

    /**
     * Checks if the given expression text needs parentheses
     * to maintain correct precedence when replaced with `||`
     *
     * @param {string} text - Expression source code text
     * @returns {boolean} - True if parentheses are needed
     */
    function needsParens(text) {
      // Matches operators that require parentheses for correctness:
      // +, -, *, /, %, &, |, ^, <, >, =, !=, &&, ||
      return /[+\-*/%&|^<>!=]=?|&&|\|\|/.test(text);
    }

    return {
      ConditionalExpression(node) {
        // Extract source code for the test, consequent, and alternate expressions
        const testText = sourceCode.getText(node.test);
        const consequentText = sourceCode.getText(node.consequent);
        const alternateText = sourceCode.getText(node.alternate);

        // Only handle ternaries where alternate exists and test === consequent
        if (!node.alternate || testText !== consequentText) return;

        // Prevent duplicate reports on nested ternaries of the same pattern
        const parent = node.parent;
        if (
          parent &&
          parent.type === "ConditionalExpression" &&
          sourceCode.getText(parent.test) ===
            sourceCode.getText(parent.consequent)
        ) {
          return;
        }

        // Add parentheses around test expression if needed for correct precedence
        const safeTestText = needsParens(testText) ? `(${testText})` : testText;

        // Report the issue with a suggested fix
        context.report({
          node,
          message:
            "Use `{{test}} || {{alternate}}` instead of `{{test}} ? {{test}} : {{alternate}}`",
          data: {
            test: testText,
            alternate: alternateText,
          },
          fix(fixer) {
            // Replace the whole ternary expression with a logical OR expression
            const replacement = `${safeTestText} || ${alternateText}`;
            return fixer.replaceText(node, replacement);
          },
        });
      },
    };
  },
};
