module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prefer `a || b` over `a ? a : b`",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      ConditionalExpression(node) {
        const sourceCode = context.getSourceCode();

        const testText = sourceCode.getText(node.test);
        const consequentText = sourceCode.getText(node.consequent);

        if (node.alternate && testText === consequentText) {
          context.report({
            node,
            message:
              "Use `{{test}} || {{alternate}}` instead of `{{test}} ? {{test}} : {{alternate}}`",
            data: {
              test: testText,
              alternate: sourceCode.getText(node.alternate),
            },
            fix(fixer) {
              const replacement = `${testText} || ${sourceCode.getText(node.alternate)}`;
              return fixer.replaceText(node, replacement);
            },
          });
        }
      },
    };
  },
};
