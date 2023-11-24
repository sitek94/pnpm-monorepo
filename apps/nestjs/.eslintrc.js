/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@company/eslint-config/base'],
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'apps/nestjs/tsconfig.json',
      },
    },
  },
}
