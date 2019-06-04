module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/test-setup.js']
};
