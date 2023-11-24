/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@company/eslint-config/base', '@company/eslint-config/react'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: 'apps/remix/tsconfig.json',
      },
    },
    'import/internal-regex': '^~/',
  },
}
