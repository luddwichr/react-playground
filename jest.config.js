module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
  },
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: '<rootDir>/test-setup.js'
};