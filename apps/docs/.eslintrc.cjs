/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    '@repo/eslint-config/base',
    '@repo/eslint-config/react',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        // For some reason it shows errors for imports from @repo/ui, even though they are resolved correctly.
        // Both develop and build work fine, so I'm disabling it for now.
        'import/no-unresolved': 'off',
      },
    },
  ],
}
