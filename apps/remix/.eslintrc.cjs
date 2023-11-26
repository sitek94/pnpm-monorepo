/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/base', '@repo/eslint-config/react'],
  settings: {
    'import/resolver': {
      typescript: {
        project: 'apps/remix/tsconfig.json',
      },
    },
  },
}
