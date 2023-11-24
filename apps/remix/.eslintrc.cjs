/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@company/eslint-config/base', '@company/eslint-config/react'],
  settings: {
    'import/resolver': {
      typescript: {
        project: 'apps/remix/tsconfig.json',
      },
    },
  },
}
