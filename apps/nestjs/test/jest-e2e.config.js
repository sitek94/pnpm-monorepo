const baseConfig = require('../jest.config')

/** @type {import('jest').Config} */
module.exports = {
  ...baseConfig,

  // E2E specific settings
  rootDir: '.',
  testRegex: '.e2e-spec.ts$',
  coverageDirectory: '../coverage',
}
