// const { pathsToModuleNameMapper } = require('ts-jest')

// // In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// // which contains the path mapping (ie the `compilerOptions.paths` option):
// const { compilerOptions } = require('./tsconfig.json')

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

  rootDir: '.',
  testRegex: '.e2e-spec.ts$',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
}

// {
//   // "moduleFileExtensions": ["js", "json", "ts"],
//   "rootDir": ".",
//   "testEnvironment": "node",

//   "transform": {
//     "^.+\\.(t|j)s$": "ts-jest"
//   }
// }
