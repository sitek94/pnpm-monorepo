/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'public/build/',
    '.eslintrc.js',
    '**/*.css',
  ],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
      },
    ],
    'import/no-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    // ⚠️
    // Following rules are disabled during setup, but should probably be enabled later:

    // Errors as unknown, etc.
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Some weird type issues when calling `catsApi` in Remix index route
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',

    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
  },
}
