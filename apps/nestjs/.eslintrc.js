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
  overrides: [
    {
      files: ['jest.config.js', 'jest-e2e.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
