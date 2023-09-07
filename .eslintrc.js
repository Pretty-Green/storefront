/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['next', 'prettier', 'plugin:storybook/recommended', 'plugin:wc/recommended'],
  plugins: ['unicorn'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  ignorePatterns: ['lib/saleor/generated'],
};
