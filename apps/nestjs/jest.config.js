/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^~/(.*)$': '../src/$1',
  },
  testEnvironment: 'node',
  rootDir: './src',
  testRegex: '.*\\.spec\\.ts$',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
}
